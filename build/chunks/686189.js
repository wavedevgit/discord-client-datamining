/** Chunk was on web.js **/
/** chunk id: 686189, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(64700),
    i = n(253932),
    a = n(486020);

function o(e) {
    let {
        displayProfile: t,
        size: n,
        canAnimate: o,
        pendingBanner: s
    } = e, l = i.kt.getSetting(), c = null == t ? void 0 : t.getPreviewBanner(s, o, n), [u, d] = (0, r.useState)((null == t ? void 0 : t.banner) == null ? "COMPLETE" : "SHOULD_LOAD");
    return (0, r.useEffect)(() => {
        if (null == c || "SHOULD_LOAD" !== u) return;
        d("LOADING");
        let e = new Image;
        e.src = c, e.onload = () => d("COMPLETE")
    }, [c, u]), (0, r.useEffect)(() => {
        if (l) return;
        let e = null == t ? void 0 : t.getPreviewBanner(s, !0, n);
        null != e && (0, a.o4)(e) && (new Image().src = e)
    }, [l, t, n, s]), {
        bannerSrc: c,
        status: u
    }
}