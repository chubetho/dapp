import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    rules: {
      'no-console': 'off',
      'style/max-statements-per-line': 'off',
    },
  },
  unocss.configs.flat,
)
