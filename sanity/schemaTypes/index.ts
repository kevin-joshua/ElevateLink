import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'

import {author} from './author'
import { startup } from './startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, startup, author],
}
