/** Chunk was on 1113 **/
/** chunk id: 550591, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(354071);

function c(e) {
    let {
        children: t,
        text: n,
        disableWrapper: i = !1,
        disabled: c = !1,
        hideOnClick: u = !0,
        shouldShow: d,
        forceOpen: h,
        selected: p = !1
    } = e, g = l.useMemo(() => null == n || c ? null : (0, r.jsx)("div", {
        className: o.SH,
        children: n
    }), [n, c]), f = i ? t : (0, r.jsx)("div", {
        className: s()(o.pm, {
            [o.wH]: p
        }),
        children: t
    });
    return (0, r.jsx)(a.m_, {
        __unsupportedReactNodeAsText: g,
        position: "right",
        spacing: 12,
        hideOnClick: u,
        shouldShow: d,
        forceOpen: h,
        ariaHidden: !0,
        asContainer: !i,
        children: f
    })
}