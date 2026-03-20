import { html, nothing } from "lit";
import type { EduCategory } from "../controllers/remote-market.ts";

export type TutorialsProps = {
  loading: boolean;
  error: string | null;
  categories: EduCategory[];
  query: string;
  selectedCategoryId: number | null;
  playingLink: string | null;
  onQueryChange: (next: string) => void;
  onSelectCategory: (id: number) => void;
  onLessonClick: (link: string) => void;
  onPlayingClose: () => void;
  onRefresh: () => void;
};

function normalizeQuery(raw: string) {
  return (raw ?? "").trim().toLowerCase();
}

function includesQ(text: string, q: string) {
  if (!q) return true;
  return (text ?? "").toLowerCase().includes(q);
}

/**
 * 从 B 站链接解析出内嵌播放器 URL。
 * 支持 bilibili.com/video/BVxxx、bilibili.com/video/avxxx 等格式。
 */
export function toBilibiliEmbedUrl(link: string): string | null {
  const url = (link ?? "").trim();
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.toLowerCase();
    if (!host.includes("bilibili.com") && !host.includes("b23.tv")) return null;
    const path = u.pathname;
    const bvidMatch = path.match(/\/video\/(BV[0-9A-Za-z]+)/i);
    if (bvidMatch) {
      return `https://player.bilibili.com/player.html?bvid=${bvidMatch[1]}&high_quality=1`;
    }
    const avMatch = path.match(/\/video\/av(\d+)/i);
    if (avMatch) {
      return `https://player.bilibili.com/player.html?aid=${avMatch[1]}&high_quality=1`;
    }
    return null;
  } catch {
    return null;
  }
}

export function renderTutorials(props: TutorialsProps) {
  const orderedCategories = [...(props.categories ?? [])].sort(
    (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0) || a.name.localeCompare(b.name, "zh-Hans-CN"),
  );

  const activeCategoryId =
    props.selectedCategoryId && orderedCategories.some((c) => c.id === props.selectedCategoryId)
      ? props.selectedCategoryId
      : orderedCategories[0]?.id ?? null;
  const activeCategory = activeCategoryId ? orderedCategories.find((c) => c.id === activeCategoryId) ?? null : null;

  const q = normalizeQuery(props.query);
  const courses = (activeCategory?.courses ?? [])
    .slice()
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0) || a.title.localeCompare(b.title, "zh-Hans-CN"))
    .filter((course) => {
      if (includesQ(course.title ?? "", q)) return true;
      return (course.lessons ?? []).some((l) => includesQ(l.title ?? "", q));
    });

  const embedUrl = props.playingLink ? toBilibiliEmbedUrl(props.playingLink) : null;

  if (embedUrl) {
    return html`
    <main class="emp-page tutorials-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main tutorials-video-context">
            <div class="tutorials-video-header">
              <button class="btn btn--sm" type="button" @click=${props.onPlayingClose}>← 返回教程</button>
            </div>
            <div class="tutorials-video-wrap">
              <iframe
                src=${embedUrl}
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                title="B站视频播放"
              ></iframe>
              <a
                class="tutorials-bilibili-link"
                href=${props.playingLink!}
                target="_blank"
                rel="noopener noreferrer"
              >在哔哩哔哩打开</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
  }

  return html`
    <main class="emp-page tutorials-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${activeCategory ? activeCategory.name : "OpenOcta 教程"}</h2>
              <div class="emp-toolbar__actions">
                <div class="emp-search">
                  <input
                    class="emp-search__input"
                    type="text"
                    placeholder="搜索课程/课时"
                    .value=${props.query}
                    ?disabled=${props.loading}
                    @input=${(e: Event) => props.onQueryChange((e.target as HTMLInputElement).value)}
                  />
                  <span class="emp-search__icon" aria-hidden="true">🔍</span>
                </div>
                <button class="btn" @click=${props.onRefresh} ?disabled=${props.loading}>刷新</button>
              </div>
            </div>

            ${props.error ? html`<div class="callout danger" style="margin-bottom: 16px;">${props.error}</div>` : nothing}

            <div class="tutorials-list" style="margin-top: 14px;">
          ${!activeCategory
            ? html`<div class="emp-empty">暂无分类数据，请点击"刷新"。</div>`
            : courses.length
              ? html`
                  <div class="card tutorials-card">
                    ${courses.map((course, courseIdx) => {
                      const isStandalone = (course.course_type ?? "").trim().toLowerCase() === "standalone";
                      const lessons = (course.lessons ?? [])
                        .slice()
                        .sort(
                          (a, b) =>
                            (a.sort_order ?? 0) - (b.sort_order ?? 0) || a.title.localeCompare(b.title, "zh-Hans-CN"),
                        )
                        .filter((l) => includesQ(l.title ?? "", q) || includesQ(course.title ?? "", q));

                      const effectiveLessons: Array<{
                        id: number;
                        title?: string;
                        duration?: string;
                        link?: string;
                      }> =
                        isStandalone && lessons.length === 0
                          ? [
                              {
                                id: course.id,
                                title: course.title,
                                duration: course.duration,
                                link: course.link,
                              },
                            ]
                          : lessons;

                      const sectionNum = String(courseIdx + 1);
                      const openByDefault = true;

                      return html`
                        <details ?open=${openByDefault} class="tutorials-course">
                          <summary class="tutorials-course__summary">
                            <span class="tutorials-course__title-row">
                              <span class="tutorials-course__num">${sectionNum}</span>
                              <span class="tutorials-course__title">${course.title}</span>
                              <span class="tutorials-course__meta">${effectiveLessons.length} 课时</span>
                            </span>
                          </summary>

                          <div class="tutorials-lessons">
                            ${effectiveLessons.map((lesson, idx) => {
                              const indexText = String(idx + 1).padStart(2, "0");
                              const hasLink = !!(lesson.link ?? "").trim();
                              const handleClick = () => {
                                if (hasLink) props.onLessonClick(lesson.link!);
                              };
                              return html`
                                <div
                                  class="tutorials-lesson ${hasLink ? "tutorials-lesson--clickable" : "tutorials-lesson--disabled"}"
                                  @click=${handleClick}
                                  role=${hasLink ? "button" : "none"}
                                  tabindex=${hasLink ? 0 : nothing}
                                  @keydown=${(e: KeyboardEvent) => {
                                    if (hasLink && (e.key === "Enter" || e.key === " ")) {
                                      e.preventDefault();
                                      props.onLessonClick(lesson.link!);
                                    }
                                  }}
                                >
                                  <span class="tutorials-lesson__index">${indexText}</span>
                                  <span class="tutorials-lesson__title">${lesson.title}</span>
                                  ${(lesson.duration ?? "").trim()
                                    ? html`<span class="tutorials-lesson__duration">${lesson.duration}</span>`
                                    : nothing}
                                </div>
                              `;
                            })}
                          </div>
                        </details>
                      `;
                    })}
                  </div>
                `
              : html`<div class="emp-empty">没有匹配的课程/课时</div>`}
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
