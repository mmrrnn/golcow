export const dayInMS = 24 * 60 * 60 * 1000

export const formatDate = dateString => {
  return dateString
    .split("/")
    .map(el => Number(el))
    .join("/")
}

export const parseDate = date => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export const getDates = nodes => {
  const getContent = dateObj => dateObj.content
  return nodes.map(el => el.date.map(getContent)).flat()
}

export const getTomorrowDate = date => {
  return new Date(date.getTime() + dayInMS)
}

export const getYesterdayDate = date => {
  return new Date(date.getTime() - dayInMS)
}
