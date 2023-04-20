const icons = import.meta.glob('./svg/*.svg')

let iconNames: Array<string> = []
Object.keys(icons).forEach((key) => {
  const name = key.replace(/\.\/svg\/(.*)\.svg/, '$1')
  iconNames.push(name)
})
export default iconNames
