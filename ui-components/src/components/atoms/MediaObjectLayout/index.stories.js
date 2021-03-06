import React from 'react';
import MediaObjectLayout from './index.js';

export default stories => stories
  .add('デフォルト', ()  => (
    <MediaObjectLayout>
      <div>
        <img src='mock/images/img01.jpg' width='192' height='108' alt='MediaObjectLayoutを説明するためのサンプル画像' />
      </div>
      <p>強くなれる理由を知った。</p>
      <p>僕を連れて進め。</p>
    </MediaObjectLayout>
  ))
  .add('section 指定', () => (
    <MediaObjectLayout tag='section'>
      <div>
        <img src='mock/images/img01.jpg' width='192' height='108' alt='MediaObjectLayoutを説明するためのサンプル画像' />
      </div>
      <p>強くなれる理由を知った。</p>
      <p>僕を連れて進め。</p>
    </MediaObjectLayout>
  ));