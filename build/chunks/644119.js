/** Chunk was on web.js **/
/** chunk id: 644119, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o,
    b: () => s
});
var r = n(567243),
    i = n(652215);
let a = "open.spotify.com";

function s(e) {
    return null != e && e === a
}

function o(e) {
    var t;
    if (null == e.url || (null == (t = e.provider) ? void 0 : t.name) !== "Spotify" || e.type !== i.Auw.LINK) return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return s(t)
    } catch (e) {
        return !1
    }
}