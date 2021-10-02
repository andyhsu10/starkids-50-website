type TSlide = {
  imageUrl: string
  title: string
  description: string
}

type TPost = {
  author: string
  imageUrl: string
  title: string
  body: string
}

type TPosition = {
  name: string
  department: string
  position: string
}

type TCabinet = {
  age: number
  name: string
  positions: TPosition[]
}
