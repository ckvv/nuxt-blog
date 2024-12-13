export function usePaths() {
  const route = useRoute();
  const { paths } = route.params;
  return Array.isArray(paths) ? paths.join('/') : paths;
}
