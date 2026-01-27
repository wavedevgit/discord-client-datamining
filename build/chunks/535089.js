/** Chunk was on web.js **/
/** chunk id: 535089, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
}), n(896048);
var r = n(64700),
    i = n(172218);

function a(e) {
    let {
        wishlistId: t,
        onAction: n,
        productLines: a
    } = e, [o, s] = (0, r.useState)(!1), l = (0, r.useCallback)(e => {
        e && null != t && (n({
            action: "VIEW_WISHLIST",
            wishlistId: t,
            productLines: null != a ? a : void 0
        }), s(!0))
    }, [t, n, a]);
    return (0, i.K)(l, void 0, null != t && !o)
}