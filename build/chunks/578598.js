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
    } = t, [_, g] = s.useState(!1), A = (0, a.q)(t), x = o(), p = d?.(), h = n(), T = c?.(), E = u?.();
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(l.D0$, {
            label: x,
            description: p,
            disabled: E,
            layout: "horizontal",
            children: (0, i.jsx)(l.Button, {
                onClick: () => {
                    A();
                    let e = m();
                    e instanceof Promise && (g(!0), e.finally(() => g(!1)))
                },
                text: h,
                variant: T,
                disabled: E,
                loading: _
            })
        })
    })
}