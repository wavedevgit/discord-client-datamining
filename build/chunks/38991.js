/** Chunk was on web.js **/
/** chunk id: 38991, original params: e,t,n (module,exports,require) **/
var r = n(99302),
    i = n(632516),
    a = n(509185),
    o = n(429397),
    s = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    u = Function.prototype.toString,
    d = c.hasOwnProperty,
    f = RegExp("^" + u.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
e.exports = function(e) {
    return !(!a(e) || i(e)) && (r(e) ? f : l).test(o(e))
}