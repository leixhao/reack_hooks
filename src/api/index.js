/*
 * @Description: 
 * @Version: 
 * @Autor: LeiHao
 * @Date: 2020-09-10 14:24:11
 * @LastEditors: LeiHao
 * @LastEditTime: 2020-09-11 17:37:13
 */
import {Ajax} from './axios'
export const reqDetail = () => {
  return Ajax('/detail','', 'get')
}