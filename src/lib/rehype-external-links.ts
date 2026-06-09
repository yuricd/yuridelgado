type HastNode = {
  type?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function walk(node: HastNode, callback: (node: HastNode) => void): void {
  callback(node);

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      walk(child, callback);
    }
  }
}

export function rehypeExternalLinks() {
  return (tree: HastNode) => {
    walk(tree, (node) => {
      if (
        node.type !== "element" ||
        node.tagName !== "a" ||
        typeof node.properties?.href !== "string"
      ) {
        return;
      }

      const href = node.properties.href;

      if (/^https?:\/\//.test(href)) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    });
  };
}
