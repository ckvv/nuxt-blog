export function useExample(value: number = 0) {
  const count = ref(value);

  const add = (num: number = 1) => {
    count.value += num;
  };

  return {
    count,
    add,
  };
}

export function usePaths() {
  const route = useRoute();
  const { paths } = route.params;
  return Array.isArray(paths) ? paths.join('/') : paths;
}
