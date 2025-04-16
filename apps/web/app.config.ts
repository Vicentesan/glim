import { defineConfig } from '@tanstack/react-start/config'
import topLevelAwait from 'vite-plugin-top-level-await'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  vite: {
    plugins: [
      topLevelAwait(),
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    worker: {
      format: 'es',
      plugins: () => [topLevelAwait()],
    },
  },
  tsr: {
    generatedRouteTree: './src/gen/route-tree.gen.ts',
    appDirectory: 'src',
    routeToken: 'layout',
    indexToken: 'page',
  },
})
