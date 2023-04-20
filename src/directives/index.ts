const directives: any = import.meta.glob('./module/*.ts', { eager: true })

export default {
  install(app: any) {
    Object.keys(directives).forEach((key) => {
      const name = key.replace(/\.\/module\/(.*)\.ts/, '$1')
      app.directive(name, directives[key].default)
    })
  }
}
