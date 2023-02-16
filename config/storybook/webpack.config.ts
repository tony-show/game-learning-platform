import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import buildSvgLoader from '../build/loaders/buildSvgLoader'
import buildCssLoader from '../build/loaders/buildCssLoader'

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(String(rule.test))) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config.module?.rules?.push(buildSvgLoader())
  config.module?.rules?.push(buildCssLoader(true))

  return config
}
