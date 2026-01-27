/** Chunk was on web.js **/
/** chunk id: 694318, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    cx: () => s,
    iJ: () => o,
    kf: () => l
});
var r = n(785823),
    i = n(287809),
    a = n(652215);

function o(e) {
    return void 0 !== e && e.type !== a.rbe.DM
}

function s(e) {
    var t, n;
    return null != (t = null == (n = i.default.getUser(e)) ? void 0 : n.hasFlag(a.nhx.SPAMMER)) && t
}

function l(e) {
    return s(e.author.id) && !(0, r.ER)(e)
}