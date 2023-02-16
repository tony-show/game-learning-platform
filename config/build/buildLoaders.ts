import webpack from 'webpack'
import buildCssLoader from './loaders/buildCssLoader'
import buildSvgLoader from './loaders/buildSvgLoader'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(j|t)sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          // […] your other plugins […]
        ],
      },
    },
  }

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
