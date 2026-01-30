/** chunk id: 535089, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var r = n(64700),
    l = n(172218);

function i(e) {
    let {
        wishlistId: t,
        onAction: n,
        productLines: i
    } = e, [a, o] = (0, r.useState)(!1), s = (0, r.useCallback)(e => {
        e && null != t && (n({
            action: "VIEW_WISHLIST",
            wishlistId: t,
            productLines: null != i ? i : void 0
        }), o(!0))
    }, [t, n, i]);
    return (0, l.K)(s, void 0, null != t && !a)
}