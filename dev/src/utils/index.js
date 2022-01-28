/**
 * 去抖(限制函数的执行频率)
 * @param delay 延迟的时间
 * @param atBegin
 * @param callback 目标回调函数
 */
export const debounce = (delay, atBegin, callback) => {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false)
}

/**
 * 节流(限制函数的执行频率)
 * @param delay 延迟的时间
 * @param noTrailing 在最后一次调用时是否执行 callback，true 不执行，false 执行
 * @param callback 目标回调函数
 * @param debounceMode
 * dobounceMode: 为 true 时，在被调用时，先执行 callback，在没有被调用时，在指定的延迟之后执行 clear，如果在clear 执行之前继续调用，会重置定时器；
 * 为 false 时，在被调用时，不会执行 callback，在指定的延迟之后执行 callback，如果在 callback 执行之前继续调用，会重置定时器
 */
export const throttle = (delay, noTrailing, callback, debounceMode) => {
  let timeoutID
  let cancelled = false

  let lastExec = 0

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
  }

  function cancel() {
    clearExistingTimeout()
    cancelled = true
  }

  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback
    callback = noTrailing
    noTrailing = undefined
  }

  function wrapper(...arguments_) {
    const self = this
    const elapsed = Date.now() - lastExec

    if (cancelled) {
      return
    }

    function exec() {
      lastExec = Date.now()
      callback.apply(self, arguments_)
    }

    function clear() {
      timeoutID = undefined
    }

    if (debounceMode && !timeoutID) {
      exec()
    }
    clearExistingTimeout()

    if (debounceMode === undefined && elapsed > delay) {
      exec()
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay)
    }
  }

  wrapper.cancel = cancel
  return wrapper
}
