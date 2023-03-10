import webpack from 'webpack'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import buildCssLoader from './loaders/buildCssLoader'
import buildSvgLoader from './loaders/buildSvgLoader'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const babelLoader = buildBabelLoader(options)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const styleLoader = buildCssLoader(isDev)

  const SVGLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  }

  return [babelLoader, typescriptLoader, styleLoader, SVGLoader, fileLoader]
}
