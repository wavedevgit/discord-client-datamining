/** Chunk was on web.js **/
/** chunk id: 576030, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    GM: () => c,
    mW: () => u
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(311907),
    o = n(587895),
    s = n(721932),
    l = n(360469);

function c(e) {
    return (0, r.jsx)(d, {
        wishlistItem: e
    })
}

function u(e) {
    let {
        application: t
    } = e, n = null != t ? t.getIconURL(l.iu.SMALL) : void 0;
    return null != n ? (0, r.jsx)("img", {
        src: n,
        alt: null == t ? void 0 : t.name
    }) : (0, r.jsx)(i.U1X, {
        color: "currentColor",
        size: "xs"
    })
}

function d(e) {
    let {
        wishlistItem: t
    } = e, n = (0, a.bG)([o.A], () => (0, s.$)(t) ? o.A.getApplication(t.sku.applicationId) : void 0);
    return (0, r.jsx)(u, {
        application: n
    })
}