/** chunk id: 578598, original params: e,t,n (module,exports,require) **/
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
        onClick: _
    } = t, [g, m] = s.useState(!1), A = (0, a.q)(t), h = o(), p = d?.(), x = n(), E = c?.(), T = u?.();
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(l.D0$, {
            label: h,
            description: p,
            disabled: T,
            layout: "horizontal",
            children: (0, i.jsx)(l.Button, {
                onClick: () => {
                    A();
                    let e = _();
                    e instanceof Promise && (m(!0), e.finally(() => m(!1)))
                },
                text: x,
                variant: E,
                disabled: T,
                loading: g
            })
        })
    })
}