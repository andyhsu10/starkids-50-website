type TChat = {
  id: string
  sentAt: string
  name: string
  text: string
  profile: string
}

type TMetadata = {
  imageUrl?: string
  description?: string
}

type TSlide = {
  imageUrl: string
  title: string
  description: string
  slug: string
}

type TPostParagraph = {
  type: string = 'paragraph'
  text: string
}

type TPostSubtitle = {
  type: string = 'subtitle'
  text: string
}

type TPostOrderList = {
  type: string = 'orderList'
  title?: string
  list: string[]
}

type TPostUnorderList = {
  type: string = 'unorderList'
  styleType: string = 'disc' | 'square'
  title?: string
  list: string[]
}

type TPostImage = {
  type: string = 'image'
  url: string
  description: string
}

type TPost = {
  shortAuthorName: string
  author?: string
  interviewee?: string
  interviewer?: string
  writer?: string
  editor?: string
  source?: string
  coverUrl: string
  slug: string
  title: string
  decade?: number
  recommended: boolean
  contents: (
    | TPostParagraph
    | TPostSubtitle
    | TPostOrderList
    | TPostUnorderList
    | TPostImage
  )[]
}

type TGoods = {
  imageUrl: string
  imageDetailUrl: string
  title: string
  name: string
  description: string
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

type TAlbumImage = {
  imgUrl: string
  description: string
  portrait: boolean
  author?: string
  title?: string
  parameters?: string
  position?: string
}

type TAlbumCategory = {
  name: string
  slug: string
  coverImgUrl: string
  description: string
  images: TAlbumImage[]
}

type TDiary = {
  sn: string
  duration: string
  url: string
}

type TDonation = {
  name: string
  department?: string
  currency: string
  amount: number
}
