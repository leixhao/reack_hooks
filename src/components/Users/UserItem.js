/*
 * @Description: 
 * @Version: 
 * @Autor: LeiHao
 * @Date: 2020-09-15 17:14:51
 * @LastEditors: LeiHao
 * @LastEditTime: 2020-09-16 11:13:03
 */
import React, { Component } from 'react'

class UserItem extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     login: 'leixhao',
  //     id: 1,
  //     avatar_url: "https://avatars0.githubusercontent.com/u/31658015?v=4",
  //     url: "https://api.github.com/users/leixhao",
  //   }
  // }
  state = {
    login: 'leixhao',
    id: 1,
    avatar_url: "https://avatars0.githubusercontent.com/u/31658015?v=4",
    url: "https://api.github.com/users/leixhao",
  }
  render() {
    const {login, avatar_url, url} = this.state
    return (
      <div style={{ border: '1px solid #cccccc' }}>
        {/* <img src={avatar_url} style={{ width: '100px', height: '100px' }}></img> */}
        <p>{login}</p>
        <div>
          <a href={url}>查看</a>

        </div>
      </div>
    )
  }
}

export default UserItem
