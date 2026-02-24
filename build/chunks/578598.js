/** chunk id: 578598, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => r
});
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(244242);

function r(e) {
    let {
        node: t
    } = e, {
        useLabel: n,
        useTitle: r,
        useSubtitle: o,
        useVariant: c,
        useDisabled: d,
        onClick: u
    } = t, [_, m] = s.useState(!1), A = s.useCallback(() => {
        let e = u();
        e instanceof Promise && (m(!0), e.finally(() => m(!1)))
    }, [u]), g = r(), h = o?.(), x = n(), p = c?.(), E = d?.();
    return (0, i.jsx)(l.L, {
        children: (0, i.jsx)(a.D0$, {
            label: g,
            description: h,
            disabled: E,
            layout: "horizontal",
            children: (0, i.jsx)(a.Button, {
                onClick: A,
                text: x,
                variant: p,
                disabled: E,
                loading: _
            })
        })
    })
}