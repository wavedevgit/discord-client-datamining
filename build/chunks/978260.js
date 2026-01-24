/** Chunk was on web.js **/
/** chunk id: 978260, original params: e (module,exports,require) **/
var t = 0x1fffffffffffff,
    n = /^(?:0|[1-9]\d*)$/;
e.exports = function(e, r) {
    var i = typeof e;
    return !!(r = null == r ? t : r) && ("number" == i || "symbol" != i && n.test(e)) && e > -1 && e % 1 == 0 && e < r
}