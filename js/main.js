/*
 * This would be the main JS file.
 * 
 */
const MONTH_NAME = ['正月', '二月','三月','四月','五月','六月','七月','八月','九月', '十月', '冬月','腊月'];
function ele(key) {
    if (isBlank(key))
        return null;
    if (key.indexOf('#') == 0) {
        return window.document.getElementById(key.substr(1));
    }
}

function isBlank (val) {
    return undefined == val || null == val || '' == val;
}