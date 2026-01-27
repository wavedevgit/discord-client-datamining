/** Chunk was on web.js **/
/** chunk id: 76494, original params: e,t,n (module,exports,require) **/
var r = n(41518);
e.exports = function(e, t, n, i, a) {
    var o = r(e, t, n, i, a);
    return o.next().then(function(e) {
        return e.done ? e.value : o.next()
    })
}, e.exports.__esModule = !0, e.exports.default = e.exports