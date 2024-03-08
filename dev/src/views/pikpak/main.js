// 本脚本为Node.js脚本，请在Node.js环境中运行，可挂载青龙或本地运行。
// 本脚本需安装库 安装方法：npm install axios 和npm install crypto

import axios from 'axios'
import hashlib from 'crypto'
import { uaList } from './columns'

let invite_code = '49667207'// 这里修改自己的邀请码
const pwd = 'pwd123456'
const resultNewEmail = ''

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

function getUAKey() {
  const g = xid + 'com.pikcloud.pikpak1appkey'
  const sha1 = hashlib.createHash('sha1')
  sha1.update(g, 'utf-8')
  const f = sha1.digest('hex')
  const md5_hash = hashlib.createHash('md5')
  md5_hash.update(f, 'utf-8')
  const h = md5_hash.digest('hex')
  return xid + h
}

function getUserAgent(key) {
  return `ANDROID-com.pikcloud.pikpak/1.38.0 protocolversion/200 accesstype/ clientid/${client} clientversion/1.38.0 action_type/ networktype/WIFI sessionid/ deviceid/${xid} providername/NONE devicesign/div101.${key} refresh_token/ sdkversion/1.1.0.110000 datetime/${t} usrno/ appname/android-com.pikcloud.pikpak session_origin/ grant_type/ appid/ clientip/ devicename/${deviceName}_${deviceModel} osversion/13 platformversion/10 accessmode/ devicemodel/${deviceModel}`
}

function getSign() {
  const e = [
    { alg: 'md5', salt: 'Z1GUH9FPdd2uR48' },
    { alg: 'md5', salt: 'W4At8CN00YeICfrhKye' },
    { alg: 'md5', salt: 'WbsJsexMTIj+qjuVNkTZUJxqUkdf' },
    { alg: 'md5', salt: 'O56bcWMoHaTXey5QnzKXDUETeaVSD' },
    { alg: 'md5', salt: 'nAN3jBriy8/PXGAdsn3yPMU' },
    { alg: 'md5', salt: '+OQEioNECNf9UdRe' },
    { alg: 'md5', salt: '2BTBxZ3IbPnkrrfd/' },
    { alg: 'md5', salt: 'gBip5AYtm53' },
    { alg: 'md5', salt: '9FMyrvjZFZJT5Y+b1NeSYfs5' },
    { alg: 'md5', salt: '0cIBtEVWYCKdIOlOXnTJPhLGU/y5' },
    { alg: 'md5', salt: '92j4I+ZiMyxFx6Q' },
    { alg: 'md5', salt: 'xNFN9RnUlu218s' },
    { alg: 'md5', salt: 'UZcnnQ2nkaY0S' }
  ]
  let md5_hash = `YNxT9w7GMdWvEOKa1.38.0com.pikcloud.pikpak${xid}${t}`
  e.forEach(item => {
    md5_hash += item.salt
    md5_hash = hashlib.createHash('md5').update(md5_hash).digest('hex')
  })

  return md5_hash
}

async function getMail(newMail) {
  const inCode = invite_code
  return { newMail, inCode }
  //
  // // const randomNum = Math.floor(Math.random() * 99999) + 1;
  // // const mail = `happy${randomNum}`;
  // // const json_data = {
  // //   'name': mail
  // //   // 'min_name_length': 10,
  // //   // 'max_name_length': 10,
  // // };
  //
  // try {
  //   const newMail = await prompt('请输入邮箱')
  //   resultNewEmail = newMail
  //   // const response = await axios.post('https://api.internal.temp-mail.io/api/v3/email/new', json_data);
  //   // const newMail = response.data.email;
  //   console.log('===============================================================')
  //   console.log(`获取邮箱: ${newMail}`)
  //   return { newMail, inCode }
  // } catch (error) {
  //   console.error('获取邮箱失败:', error)
  //   throw error
  // }
}

async function getCode(result) {
  const inCode = result.inCode
  const mail = result.mail
  const verificationId = result.verificationId
  // const maxAttempts = 50;
  // const code = await prompt('请输入验证码')
  return { mail, verificationId, inCode }

  // for (let i = 0; i < maxAttempts; i++) {
  //   try {
  //     const response = await axios.get(`https://api.internal.temp-mail.io/api/v3/email/${mail}/messages`);
  //     const html = response.data;
  //     if (html && html.length > 0) {
  //       const text = html[0].body_text;
  //       const codeMatch = text.match(/\d{6}/);
  //       if (codeMatch) {
  //         const code = codeMatch[0];
  //         console.log(`验证码: ${code}`);
  //         return {mail, code, verificationId, inCode};
  //       }
  //     }
  //   } catch (error) {
  //     console.error('请求消息失败:', error);
  //   }
  //   await new Promise(resolve => setTimeout(resolve, 1000)); // 等待 1 秒再进行下一次尝试
  // }
  // console.log('未找到验证码');
  // return null;
}

async function init(result) {
  const mail = result.newMail
  const inCode = result.inCode
  const url = 'https://user.mypikpak.com/v1/shield/captcha/init'
  const params = { client_id: client }
  const json_data = {
    action: 'POST:/v1/auth/verification',
    captcha_token: '',
    client_id: client,
    device_id: xid,
    meta: {
      captcha_sign: '1.' + sign,
      user_id: '',
      package_name: 'com.pikcloud.pikpak',
      client_version: '1.38.0',
      email: mail,
      timestamp: t
    },
    redirect_uri: 'xlaccsdk01://xbase.cloud/callback?state=harbor'
  }
  const headers = { 'X-Device-Id': xid, 'User-Agent': ua }
  try {
    const response = await axios.post(url, json_data, { params, headers })
    const captcha = response.data.captcha_token
    console.log('注册验证:', captcha)
    return { mail, captcha, inCode }
  } catch (error) {
    console.error('注册验证失败:', error)
    throw error
  }
}

function item_compare(img_list, mode_list) {
  let score = 0
  let rank = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (img_list[i][j] !== mode_list[i][j]) {
        score += 1
      }
    }
  }
  if (score === 2) {
    rank += 1
  }
  return rank
}

function list_compare(frames) {
  const score_list = []
  // eslint-disable-next-line no-unused-vars
  let flag = 0
  // eslint-disable-next-line no-unused-vars
  for (const frame of frames) {
    const img_list = frame.matrix
    let scores = 0
    // eslint-disable-next-line no-unused-vars
    for (const mode_frame of frames) {
      const mode_list = mode_frame.matrix
      const one_score = item_compare(img_list, mode_list)
      scores += one_score
    }
    score_list.push(scores)
    flag += 1
  }
  for (let i = 0; i < 12; i++) {
    if (score_list[i] === 11) {
      // console.log(i)
      return i
    }
  }
}

async function getImage(result) {
  const mail = result.mail
  const captcha = result.captcha
  const inCode = result.inCode
  const url = 'https://user.mypikpak.com/pzzl/gen'
  const params = {
    deviceid: xid,
    traceid: ''
  }
  try {
    const response = await axios.get(url, { params })
    const imgsJson = response.data
    // console.log(imgsJson);
    const goalLists = imgsJson.frames
    const pid = imgsJson.pid
    const traceid = imgsJson.traceid
    const selectId = list_compare(goalLists)
    const result2 = { imgsJson, pid, traceid, selectId }
    console.log('获取滑动次数:', result2.selectId)
    return { mail, result2, captcha, inCode }
  } catch (error) {
    console.error('获取滑块图形失败:', error)
    throw error
  }
}

function r(e, t) {
  let n = t - 1
  if (n < 0) {
    n = 0
  }
  const r = e[n]
  const u = Math.floor(r.row / 2) + 1
  const c = Math.floor(r.column / 2) + 1
  const f = r.matrix[u][c]
  let l = t + 1
  if (l >= e.length) {
    l = t
  }
  const d = e[l]
  const p = l % d.row
  const h = l % d.column
  const g = d.matrix[p][h]
  const y = e[t]
  const m = 3 % y.row
  const v = 7 % y.column
  const w = y.matrix[m][v]
  const b = parseInt(i(f)) + o(w)
  const x = parseInt(i(w)) - o(f)
  return [s(a(i(f), o(f))), s(a(i(g), o(g))), s(a(i(w), o(w))), s(a(b, x))]
}

function i(e) {
  return parseInt(e.split(',')[0])
}

function o(e) {
  return parseInt(e.split(',')[1])
}

function a(e, t) {
  return e + '^⁣^' + t
}

function s(e) {
  let t = 0
  const n = e.length
  for (let r = 0; r < n; r++) {
    t = u(31 * t + e.charCodeAt(r))
  }
  return t
}

function u(e) {
  const t = -2147483648
  const n = 2147483647
  if (e > n) {
    return t + (e - n) % (n - t + 1) - 1
  }
  if (e < t) {
    return n - (t - e) % (n - t + 1) + 1
  }
  return e
}

function c(e, t) {
  return s(e + '⁣' + t)
}

function img_jj(e, t, n) {
  return {
    ca: r(e, t),
    f: c(n, t)
  }
}

async function getNewToken(result1) {
  const inCode = result1.inCode
  const ff = result1.result2
  const mail = result1.mail
  const captcha = result1.captcha
  const frames = ff.imgsJson.frames
  const selectId = ff.selectId
  const traceid = ff.traceid
  const pid = ff.pid
  const result = img_jj(frames, parseInt(selectId), pid)
  const f = result.f
  const npac = result.ca
  const params = {
    pid: pid,
    deviceid: xid,
    traceid: traceid,
    f: f,
    n: npac[0],
    p: npac[1],
    a: npac[2],
    c: npac[3]
  }
  const session = axios.create({
    baseURL: 'https://user.mypikpak.com'
  })
  const res1 = await session.get('/pzzl/verify', { params })
  console.log(res1)
  const res2 = await session.get('/credit/v1/report', {
    params: {
      deviceid: xid,
      captcha_token: captcha,
      type: 'pzzlSlider',
      result: '0',
      data: pid,
      traceid: traceid
    }
  })
  const newToken = res2.data.captcha_token
  console.log(`验证滑块结果:${newToken}`)
  if (newToken) {
    return { mail, newToken, inCode }
  }
}

async function verification(result) {
  const inCode = result.inCode
  const mail = result.mail
  const captcha = result.newToken
  const url = 'https://user.mypikpak.com/v1/auth/verification'
  const params = { client_id: client }
  const jsonData = {
    captcha_token: captcha,
    email: mail,
    locale: 'zh-CN',
    target: 'ANY',
    client_id: client
  }
  const headers = { 'X-Device-Id': xid, 'User-Agent': ua }
  Object.assign(headers, basicRequestHeaders_1)
  const response = await axios.post(url, jsonData, { headers, params })
  const verificationId = response.data.verification_id
  console.log(`发送验证码:${verificationId}`)
  return { mail, verificationId, captcha, inCode }
}

async function verify(result) {
  const inCode = result.inCode
  const code = result.code
  const mail = result.mail
  const captcha = result.captcha
  const verificationId = result.verificationId
  const url = 'https://user.mypikpak.com/v1/auth/verification/verify'
  const params = { client_id: client }
  const jsonData = {
    client_id: client,
    verification_id: verificationId,
    verification_code: code
  }
  const headers = { 'X-Device-Id': xid, 'User-Agent': ua }
  Object.assign(headers, basicRequestHeaders_1)
  const response = await axios.post(url, jsonData, { headers, params })
  const verificationToken = response.data.verification_token
  console.log(`验证验证码:${verificationToken}`)
  return { mail, verificationToken, captcha, inCode }
}

async function init1(result) {
  const inCode = result.inCode
  const mail = result.mail
  const verificationToken = result.verificationToken
  const captcha = result.captcha
  const url = 'https://user.mypikpak.com/v1/shield/captcha/init'
  const params = { client_id: client }
  const jsonData = {
    action: 'POST:/v1/auth/signup',
    captcha_token: captcha,
    client_id: client,
    device_id: xid,
    meta: {
      captcha_sign: `1.${sign}`,
      user_id: '',
      package_name: 'com.pikcloud.pikpak',
      client_version: '1.38.0',
      email: mail,
      timestamp: t
    },
    redirect_uri: 'xlaccsdk01://xbase.cloud/callback?state=harbor'
  }
  const headers = {
    Host: 'user.mypikpak.com',
    'x-device-id': xid,
    'user-agent': ua,
    'accept-language': 'zh',
    'content-type': 'application/json',
    'accept-encoding': 'gzip'
  }
  const response = await axios.post(url, jsonData, { headers, params })
  const newCaptcha = response.data.captcha_token
  console.log(`安全验证:${newCaptcha}`)
  return { mail, verificationToken, inCode }
}

async function signup(result) {
  const inCode = result.inCode
  const mail = result.mail
  const name = 'U_' + mail.split('@')[0]
  const verificationToken = result.verificationToken
  const url = 'https://user.mypikpak.com/v1/auth/signup'
  const params = { client_id: client }
  const jsonData = {
    captcha_token: '',
    client_id: client,
    client_secret: 'dbw2OtmVEeuUvIptb1Coyg',
    email: mail,
    name: name,
    password: pwd,
    verification_token: verificationToken
  }
  const headers = { 'X-Device-Id': xid, 'User-Agent': ua }
  Object.assign(headers, basicRequestHeaders_1)
  const response = await axios.post(url, jsonData, { headers, params })
  const accessToken = response.data.access_token
  const sub = response.data.sub
  console.log(`注册账号:${accessToken}\n用户ID:${sub}`)
  return { accessToken, sub, inCode }
}

async function init2(result) {
  const inCode = result.inCode
  const accessToken = result.accessToken
  const sub = result.sub
  const url = 'https://user.mypikpak.com/v1/shield/captcha/init'
  const params = { client_id: client }
  const jsonData = {
    action: 'POST:/vip/v1/activity/invite',
    captcha_token: '',
    client_id: client,
    device_id: xid,
    meta: {
      captcha_sign: `1.${sign}`,
      user_id: sub,
      package_name: 'com.pikcloud.pikpak',
      client_version: '1.38.0',
      timestamp: t
    },
    redirect_uri: 'xlaccsdk01://xbase.cloud/callback?state=harbor'
  }
  const headers = {
    'X-Device-Id': xid,
    'User-Agent': ua
  }
  Object.assign(headers, basicRequestHeaders_1)
  const response = await axios.post(url, jsonData, { headers, params })
  const newCaptcha = response.data.captcha_token
  console.log(`二次安全验证:${newCaptcha}`)
  return { newCaptcha, sub, accessToken, inCode }
}

async function invite(result) {
  const inCode = result.inCode
  const sub = result.sub
  const captcha = result.newCaptcha
  const accessToken = result.accessToken
  const url = 'https://api-drive.mypikpak.com/vip/v1/activity/invite'
  const jsonData = {
    data: {
      sdk_int: '33',
      uuid: xid,
      userType: '1',
      userid: sub,
      userSub: '',
      product_flavor_name: 'cha',
      language_system: 'zh-CN',
      language_app: 'zh-CN',
      build_version_release: '13',
      phoneModel: deviceModel,
      build_manufacturer: deviceName,
      build_sdk_int: '33',
      channel: 'official',
      versionCode: '10150',
      versionName: '1.38.0',
      installFrom: 'other',
      country: 'PL'
    },
    apk_extra: { channel: 'official' }
  }
  const headers = {
    Host: 'api-drive.mypikpak.com',
    authorization: `Bearer ${accessToken}`,
    product_flavor_name: 'cha',
    'x-captcha-token': captcha,
    'x-client-version-code': '10150',
    'x-device-id': xid,
    'user-agent': ua,
    country: 'PL',
    'accept-language': 'zh-CN',
    'x-peer-id': xid,
    'x-user-region': '2',
    'x-system-language': 'zh-CN',
    'x-alt-capability': '3',
    'accept-encoding': 'gzip',
    'content-type': 'application/json'
  }
  await axios.post(url, jsonData, { headers })
  return { accessToken, captcha, inCode }
}

async function activationCode(result) {
  const inCode = result.inCode
  const captcha = result.newCaptcha
  const accessToken = result.accessToken
  const url = 'https://api-drive.mypikpak.com/vip/v1/order/activation-code'
  const data = { activation_code: inCode }
  const lh = JSON.stringify(data).length.toString()
  const headers = {
    Host: 'api-drive.mypikpak.com',
    authorization: `Bearer ${accessToken}`,
    product_flavor_name: 'cha',
    'x-captcha-token': captcha,
    'x-client-version-code': '10150',
    'x-device-id': xid,
    'user-agent': ua,
    country: 'DK',
    'accept-language': 'zh-CN',
    'x-peer-id': xid,
    'x-user-region': '2',
    'x-system-language': 'zh-CN',
    'x-alt-capability': '3',
    'content-length': lh,
    'accept-encoding': 'gzip',
    'content-type': 'application/json'
  }
  const response = await axios.post(url, data, { headers })
  const results = response.data
  if (response.data.add_days === 5) {
    console.log('===============================================================')
    console.log(`邀请码:${inCode} => 邀请成功`)
  } else {
    console.log(`邀请码:${inCode} => 邀请失败`)
  }
  return results
}

const basicRequestHeaders_1 = {
  'Accept-Language': 'zh',
  'Content-Type': 'application/json; charset=utf-8',
  Host: 'user.mypikpak.com',
  Connection: 'Keep-Alive',
  'Accept-Encoding': 'gzip',
  'content-type': 'application/json'
}
const deviceName = 'XIAOMI'
const deviceModel = uaList[Math.floor(Math.random() * uaList.length)].model
const client = 'YNxT9w7GMdWvEOKa'
const xid = uuidv4().replace(/-/g, '')
const t = String(Date.now())
const key = getUAKey()
const ua = getUserAgent(key)
const sign = getSign()

export const main = async (inviteCode, email, getCodeHandle) => {
  invite_code = inviteCode
  const result1 = await getMail(email)
  const result2 = await init(result1)
  const result3 = await getImage(result2)
  const result4 = await getNewToken(result3)
  const result5 = await verification(result4)

  const result6 = await getCode(result5)
  const code = await getCodeHandle()
  debugger
  result6.code = code
  const result7 = await verify(result6)
  const result8 = await init1(result7)
  const result9 = await signup(result8)
  const result10 = await init2(result9)
  const result11 = await invite(result10)
  const result = await activationCode(result11)
  console.log('账号:' + resultNewEmail)
  console.log('密码:' + pwd)
  console.log('结果:', result.popup.title.text + ',' + result.popup.description.text)

  //
  // getMail()
  //   .then(result => init(result))
  //   .then(result => getImage(result))
  //   .then(result => getNewToken(result))
  //   .then(result => verification(result))
  //   .then(result => getCode(result))
  //   .then(result => verify(result))
  //   .then(result => init1(result))
  //   .then(result => signup(result))
  //   .then(result => init2(result))
  //   .then(result => invite(result))
  //   .then(result => activationCode(result))
  //   .then(result => {
  //     console.log('账号:' + resultNewEmail)
  //     console.log('密码:' + pwd)
  //     console.log('结果:', result.popup.title.text + ',' + result.popup.description.text)
  //   })
}
