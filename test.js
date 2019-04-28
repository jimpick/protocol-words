import Haikunator from 'haikunator'

import { adjectives, nouns } from './words.js'

var haikunator = new Haikunator({ adjectives, nouns })
for (let i = 0; i < 20; i++) console.log(haikunator.haikunate())
