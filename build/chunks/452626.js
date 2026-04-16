/** chunk id: 452626 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var l = n(990078),
    s = n(397927),
    a = n(353411);

function r(e) {
    let {
        activity: t,
        user: n,
        source: r,
        size: o = "sm",
        variant: c = "secondary",
        fullWidth: d,
        onAction: u,
        ...h
    } = e, {
        label: m,
        tooltip: A,
        loading: g,
        disabled: _,
        onClick: p
    } = (0, a._B)(t, n, r);
    return (0, i.jsx)(l.m, {
        text: A,
        children: (0, i.jsx)(s.Button, {
            variant: c,
            size: o,
            icon: s.L5T,
            text: m,
            fullWidth: d,
            onClick: () => {
                u?.(), p()
            },
            disabled: _,
            loading: g,
            ...h
        })
    })
}