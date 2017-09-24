import $ from 'zeact'

import './hello.scss'

const paragraph = $.p(
  { class: 'hello' },
  'hello world'
)

export default paragraph
