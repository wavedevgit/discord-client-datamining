/** Chunk was on web.js **/
/** chunk id: 509860, original params: e,t,n (module,exports,require) **/
var r = n(586443),
    i = n(683715),
    a = n(646344),
    o = n(731214),
    s = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    u = Function.prototype.toString,
    d = c.hasOwnProperty,
    f = RegExp("^" + u.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
e.exports = function(e) {
    return !(!a(e) || i(e)) && (r(e) ? f : l).test(o(e))
}