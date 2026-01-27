/** Chunk was on 38939 **/
/** chunk id: 668413, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(341789).getPunctuation(),
    i = "['‘’]",
    o = "\\s|(?![_])" + n,
    a = RegExp("^(?:" + o + ")*(?:" + i + "|(?!" + o + ").)*(?:(?!" + o + ").)"),
    s = RegExp("(?:(?!" + o + ").)(?:" + i + "|(?!" + o + ").)*(?:" + o + ")*$");

function u(t, e) {
    var r = e ? s.exec(t) : a.exec(t);
    return r ? r[0] : t
}
t.exports = {
    getBackward: function(t) {
        return u(t, !0)
    },
    getForward: function(t) {
        return u(t, !1)
    }
}