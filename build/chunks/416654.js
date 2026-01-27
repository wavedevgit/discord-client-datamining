/** Chunk was on web.js **/
/** chunk id: 416654, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    v: () => o
});
var r = n(311907),
    i = n(439174),
    a = n(622543);

function o(e) {
    return (0, r.bG)([a.A], () => {
        var t;
        let n, r = null != e ? a.A.getUserProfile(e) : null,
            o = null == r ? void 0 : r.premiumSince;
        return null == r || null == o ? null : (null == r || null == (t = r.badges) || t.forEach(e => {
            let t = (0, i.cZ)(e.id);
            null != t && (n = t)
        }), n)
    })
}