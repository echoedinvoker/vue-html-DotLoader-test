import CompA from './CompA.vue'
import CompB from './CompA.vue'

export default function useCollect() {
  const Collect = {}
  Collect.CompA = CompA
  Collect.CompB = CompB
  return Collect
}
