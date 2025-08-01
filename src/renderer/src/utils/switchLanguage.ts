import { storeToRefs } from 'pinia'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { getLanguage } from './index'

/**
 * @description 切换语言，第一次切换到中文
 */
export function switchLanguage(): void {
  const { langsNum } = storeToRefs(useGlobalSettingsStore())
  if (langsNum.value === 114514) {
    langsNum.value = 1
  }
  else {
    langsNum.value = (langsNum.value + 1) % getLanguage(0).numLang
  }
}
