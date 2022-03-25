"use strict";

/**
 * 
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2022-03-0
 * @modified 
 * 
 * @description 
 * @description 
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @time O(n)
 * @augments 
 * @example 
 * @link https://leetcode.com/problems//
 * @link https://leetcode-cn.com/problems//
 * @solutions 
 * 
 * @best_solutions 
 * 
 */

const log = console.log;

const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

/*

log(regexExp.test('bug'));
// false
log(regexExp.test('👩‍❤️‍👩'));
// true
log(regexExp.test('👩‍❤'));
// true
log(regexExp.test('👩'));

log(regexExp.test('❤️'));
// false
log(regexExp.test('👻'));
// true
log(regexExp.test('🧡'));
// false

*/

/* 

log(('bug').match(regexExp));
log(('❤️').match(regexExp));
log(('🧡').match(regexExp));

log('\n');

log(!!('bug').match(regexExp));
log(!!('❤️').match(regexExp));
log(!!('🧡').match(regexExp));

*/


const isExistEmoji = (str = '') => {
  const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
  return !!`${str}`.match(regexExp);
};

function EmojiToUnicode (emoji = '') {
  const arr = [...emoji].map(char => isExistEmoji(char) ? [...char] : char);
  // ❌ 不好使 
  const temp = [...arr.flat(Infinity)].filter(str => isExistEmoji(str));
  log('temp', temp);
  // temp [ '👩', '‍', '❤', '‍', '👩' ]
  const result = temp.map(str => str.codePointAt(0).toString(16));
  log('result', result);
  // result [ '1f469', '200d', '2764', '200d', '1f469' ]
  return result;
}

EmojiToUnicode('👩‍❤️‍👩');


/* 

[...'👩']
['👩']

[...'👩‍❤️‍👩']
(6) ['👩', '‍', '❤', '️', '‍', '👩']

[...'❤']
['❤']

*/