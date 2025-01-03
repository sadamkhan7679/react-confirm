/** @type {Partial<import("typedoc").TypeDocOptions>} */
const config = {
  $schema: "https://typedoc.org/schema.json",
  entryPoints: [
    "./src/index.tsx",
    // "./src/secondary-entry.ts"
  ],
  out: "./docs",
  json: "./docs/documentation.json",
  // outputs: [
  //   // {
  //   //   name: "html",
  //   //   path: "./docs_html",
  //   // },
  //   // {
  //   //   name: "html",
  //   //   path: "./docs_html_full_nav",
  //   //   options: {
  //   //     navigation: {
  //   //       includeCategories: true,
  //   //       includeGroups: true,
  //   //       excludeReferences: false,
  //   //       includeFolders: true,
  //   //     },
  //   //   },
  //   // },
  //   // {
  //   //   name: "json",
  //   //   path: "./docs.json",
  //   // },
  //   {
  //     // requires typedoc-plugin-markdown
  //     name: "markdown",
  //     path: "./docs_markdown",
  //   },
  // ],
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  theme: "default",
  name: "React Confirm",
  includeVersion: true,
  categorizeByGroup: true,
  searchInComments: true,
  // markdownItOptions: {
  //   html: true,
  // },
  suppressCommentWarningsInDeclarationFiles: true,
  // Additional recommended options
  skipErrorChecking: false,
  tsconfig: "./tsconfig.json",
  watch: false,
  preserveWatchOutput: true,
  treatWarningsAsErrors: false,
  logLevel: "Info", // Helps with debugging
  cleanOutputDir: true,
  plugin: ["typedoc-plugin-markdown"],
};

export default config;
