fork from [liveblocks](https://github.com/liveblocks/liveblocks/tree/main/examples/nextjs-notion-like-ai-editor)

# Notion-like AI Editor (Lexical)

<p>
  <a href="https://liveblocks.io/examples/notion-like-ai-editor/nextjs-notion-like-ai-editor/preview">
    <img src="https://img.shields.io/badge/live%20preview-message?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2Ljg0OSA0Ljc1SDBsNC44NDggNS4wNzV2Ny4wMDhsMTItMTIuMDgzWk03LjE1IDE5LjI1SDI0bC00Ljg0OS01LjA3NVY3LjE2N2wtMTIgMTIuMDgzWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==&color=333" alt="Live Preview" />
  </a>
  <a href="https://codesandbox.io/s/github/liveblocks/liveblocks/tree/main/examples/nextjs-notion-like-ai-editor">
    <img src="https://img.shields.io/badge/open%20in%20codesandbox-message?style=flat&logo=codesandbox&color=333&logoColor=fff" alt="Open in CodeSandbox" />
  </a>
  <img src="https://img.shields.io/badge/react-message?style=flat&logo=react&color=0bd&logoColor=fff" alt="React" />
  <img src="https://img.shields.io/badge/next.js-message?style=flat&logo=next.js&color=07f&logoColor=fff" alt="Next.js" />
  <img src="https://img.shields.io/badge/lexical-message?style=flat&color=7bf" alt="Lexical" />
</p>

This example shows how to build a collaborative text editor with an AI toolbar using [Liveblocks](https://liveblocks.io), [Lexical](https://lexical.dev/), [Vercel AI SDK](https://sdk.vercel.ai/), and [Next.js](https://nextjs.org/).

As users edit the document, changes will be automatically persisted and synced—allowing for an editor that updates in real-time across clients. Users will also be able to see who see each other’s cursors in the document. Query AI to generate improvements and new content.

<img src="https://raw.githubusercontent.com/liveblocks/liveblocks/main/.github/assets/examples/notion-like-ai-editor.png" width="536" alt="Collaborative Text Editor" />

## Getting started

You can set up your project manually:

- Install all dependencies with `pnpm install`
- Create an account on [liveblocks.io](https://liveblocks.io/dashboard)
- Copy your **secret** key from the [dashboard](https://liveblocks.io/dashboard/apikeys)
- Create an `.env.local` file and add your **secret** key as the `LIVEBLOCKS_SECRET_KEY` environment variable
- Run `npm run dev` and go to [http://localhost:3000](http://localhost:3000)
