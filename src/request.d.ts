import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    requestBase?: string
    // [自定义属性声明]
  }
}

// declare module '*.ts'

// declare module '*.scss' {
//   const css: string
//   export default css
// }
