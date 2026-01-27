/** Chunk was on web.js **/
/** chunk id: 868089, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(326948),
    i = n(267768),
    a = n(741623),
    o = {};
try {
    o.__proto__ = null
} catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e
}
var s = !("toString" in o),
    l = i && i(Object.prototype, "__proto__");
e.exports = s && (!!l && "function" == typeof l.set && r([l.set]) || function(e, t) {
    if (null == e) throw new a("set Object.prototype.__proto__ called on null or undefined");
    return e.__proto__ = t, t
})