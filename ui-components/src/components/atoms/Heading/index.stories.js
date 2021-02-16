import React from 'react';
//Headingはdefaultつきでexportしているので{}不要
//通常はexportしたものをimportするには{}が必要
import Heading, { HeadingUnderlined } from './index.js';

export default stories => stories
  .add('デフォルト', () => <Heading>見出し</Heading>)
  .add('レベル1', () => <Heading level={ 1 }>見出しレベル1</Heading>)
  .add('レベル1、見た目2', () => <Heading level={ 1 } visualLevel={ 2 }>見出しレベル1、見た目2</Heading>)
  .add('下線付き', () => <HeadingUnderlined>下線付き</HeadingUnderlined>);