const PAGE_TITLE_SUFFIX = 'Dak Washbrook | Software Engineer'

const pageTitle = (title: string = '') => {
  if (title) {
    return title.concat(' ', PAGE_TITLE_SUFFIX)
  }
  return PAGE_TITLE_SUFFIX
}

export default pageTitle
