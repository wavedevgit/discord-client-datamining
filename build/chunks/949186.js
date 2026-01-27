/** Chunk was on web.js **/
/** chunk id: 949186, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(410323),
    i = Error,
    a = r("".replace),
    o = function(e) {
        return String(new i(e).stack)
    }("zxcasd"),
    s = /\n\s*at [^:]*:[^\n]*/,
    l = s.test(o);
e.exports = function(e, t) {
    if (l && "string" == typeof e && !i.prepareStackTrace)
        for (; t--;) e = a(e, s, "");
    return e
}