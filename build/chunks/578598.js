/** Chunk was on 5606 **/
/** chunk id: 578598, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => a
}), n(896048), n(492834);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(244242);

function a(e) {
    let {
        node: t
    } = e, {
        useLabel: n,
        useTitle: a,
        useSubtitle: o,
        useVariant: c,
        useDisabled: d,
        onClick: u
    } = t, [p, _] = i.useState(!1), m = i.useCallback(() => {
        let e = u();
        e instanceof Promise && (_(!0), e.finally(() => _(!1)))
    }, [u]), g = a(), f = null == o ? void 0 : o(), b = n(), h = null == c ? void 0 : c(), A = null == d ? void 0 : d();
    return (0, r.jsx)(s.L, {
        children: (0, r.jsx)(l.D0$, {
            label: g,
            description: f,
            disabled: A,
            layout: "horizontal",
            children: (0, r.jsx)(l.Button, {
                onClick: m,
                text: b,
                variant: h,
                disabled: A,
                loading: p
            })
        })
    })
}