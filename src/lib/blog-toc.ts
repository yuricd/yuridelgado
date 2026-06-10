export type BlogTocHeading = {
  depth: number;
  slug: string;
  text: string;
};

export type BlogTocNode = BlogTocHeading & {
  children: BlogTocNode[];
};

const MIN_DEPTH = 2;
const DEFAULT_MAX_DEPTH = 4;

export function getTocHeadings(
  headings: BlogTocHeading[],
  maxDepth = DEFAULT_MAX_DEPTH,
) {
  return headings.filter(
    ({ depth }) => depth >= MIN_DEPTH && depth <= maxDepth,
  );
}

export function buildTocTree(
  headings: BlogTocHeading[],
  maxDepth = DEFAULT_MAX_DEPTH,
): BlogTocNode[] {
  const tocHeadings = getTocHeadings(headings, maxDepth);
  const root: BlogTocNode[] = [];
  const stack: BlogTocNode[] = [];

  for (const heading of tocHeadings) {
    const node: BlogTocNode = { ...heading, children: [] };

    while (stack.length > 0 && stack[stack.length - 1].depth >= heading.depth) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }

  return root;
}

export function shouldShowToc(headings: BlogTocHeading[]) {
  return getTocHeadings(headings).length >= 2;
}
