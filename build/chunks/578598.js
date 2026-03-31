/** chunk id: 578598 params = (module,exports,require) **/
n.d(t, {
    D: () => o
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(791498),
    r = n(244242);

function o(e) {
    let {
        node: t
    } = e, {
        useLabel: n,
        useTitle: o,
        useSubtitle: d,
        useVariant: c,
        useDisabled: u,
        onClick: m
    } = t, [g, _] = s.useState(!1), x = (0, a.q)(t), A = o(), h = d?.(), p = n(), T = c?.(), f = u?.();
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(l.D0$, {
            label: A,
            description: h,
            disabled: f,
            layout: "horizontal",
            children: (0, i.jsx)(l.Button, {
                onClick: () => {
                    x();
                    let e = m();
                    e instanceof Promise && (_(!0), e.finally(() => _(!1)))
                },
                text: p,
                variant: T,
                disabled: f,
                loading: g
            })
        })
    })
}