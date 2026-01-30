/** chunk id: 429397, original params: e (module,exports,require) **/
var t = Function.prototype.toString;
e.exports = function(e) {
    if (null != e) {
        try {
            return t.call(e)
        } catch (e) {}
        try {
            return e + ""
        } catch (e) {}
    }
    return ""
}