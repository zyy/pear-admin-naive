import { ComputedRef, ref, watch } from 'vue'
// @ts-ignore
import { PearTableProps } from '@/components/Table/components/PearTable.vue'

export function useSearchFormExpand(props: ComputedRef<PearTableProps>) {
  const gridCollapsed = ref<boolean>(false)

  watch(
    () => props.value.searchFormProps?.gridProps?.collapsed,
    (val) => {
      gridCollapsed.value = !!val
    },
    { immediate: true }
  )

  function handleToggleFormExpand() {
    gridCollapsed.value = !gridCollapsed.value
  }

  return {
    gridCollapsed,
    handleToggleFormExpand
  }
}