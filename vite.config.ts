import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' &&
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: [
            '@/components/ui/use-toast.ts',
            '@/components/ui/tooltip.tsx',
            '@/components/ui/toggle.tsx',
            '@/components/ui/toggle-group.tsx',
            '@/components/ui/toaster.tsx',
            '@/components/ui/toast.tsx',
            '@/components/ui/textarea.tsx',
            '@/components/ui/tabs.tsx',
            '@/components/ui/table.tsx',
            '@/components/ui/switch.tsx',
            '@/components/ui/sonner.tsx',
            '@/components/ui/slider.tsx',
            '@/components/ui/skeleton.tsx',
            '@/components/ui/sidebar.tsx',
            '@/components/ui/sheet.tsx',
            '@/components/ui/separator.tsx',
            '@/components/ui/select.tsx',
            '@/components/ui/scroll-area.tsx',
            '@/components/ui/resizable.tsx',
            '@/components/ui/radio-group.tsx',
            '@/components/ui/progress.tsx',
            '@/components/ui/popover.tsx',
            '@/components/ui/pagination.tsx',
            '@/components/ui/navigation-menu.tsx',
            '@/components/ui/menubar.tsx',
            '@/components/ui/label.tsx',
            '@/components/ui/input.tsx',
            '@/components/ui/input-otp.tsx',
            '@/components/ui/hover-card.tsx',
            '@/components/ui/form.tsx',
            '@/components/ui/dropdown-menu.tsx',
            '@/components/ui/drawer.tsx',
            '@/components/ui/dialog.tsx',
            '@/components/ui/context-menu.tsx',
            '@/components/ui/command.tsx',
            '@/components/ui/collapsible.tsx',
            '@/components/ui/checkbox.tsx',
            '@/components/ui/chart.tsx',
            '@/components/ui/carousel.tsx',
            '@/components/ui/card.tsx',
            '@/components/ui/calendar.tsx',
            '@/components/ui/button.tsx',
            '@/components/ui/breadcrumb.tsx',
            '@/components/ui/badge.tsx',
            '@/components/ui/avatar.tsx',
            '@/components/ui/aspect-ratio.tsx',
            '@/components/ui/alert.tsx',
            '@/components/ui/alert-dialog.tsx',
            '@/components/ui/accordion.tsx',
          ],
          router: ['react-router-dom'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
