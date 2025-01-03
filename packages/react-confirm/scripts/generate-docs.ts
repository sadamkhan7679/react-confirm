import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export async function readMdxFile(filePath: string): Promise<string> {
  try {
    return await readFile(filePath, "utf-8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return "";
  }
}

export async function writeReadme(
  content: string,
  outputPath: string
): Promise<void> {
  try {
    await writeFile(outputPath, content, "utf-8");
    console.log("README.md generated successfully!");
  } catch (error) {
    console.error("Error writing README:", error);
  }
}

export async function processMdxFiles(files: string[]): Promise<string> {
  const contents = await Promise.all(files.map(readMdxFile));

  return (
    contents
      .filter(Boolean)
      // .map((content) => {
      //   // Remove import statements
      //   return content.replace(/import.*?;?\n/g, "");
      // })
      // .map((content) => {
      //   // Convert JSX code blocks to regular markdown
      //   return content.replace(/```tsx/g, "```js");
      // })
      .join("\n\n")
  );
}

async function generateReadme() {
  const pagesDir = join(process.cwd(), "docs");

  console.log("pagesDir", pagesDir);

  const mdxFiles = [join(pagesDir, "Introduction.mdx")];

  try {
    const content = await processMdxFiles(mdxFiles);
    await writeReadme(content, join(process.cwd(), "GENERATED-README.md"));
  } catch (error) {
    console.error("Error generating README:", error);
  }
}

generateReadme();
