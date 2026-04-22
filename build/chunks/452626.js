/** chunk id: 452626 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var l = n(990078),
    a = n(397927),
    s = n(353411);

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
        disabled: p,
        onClick: _
    } = (0, s._B)(t, n, r);
    return (0, i.jsx)(l.m, {
        text: A,
        children: (0, i.jsx)(a.Button, {
            variant: c,
            size: o,
            icon: a.L5T,
            text: m,
            fullWidth: d,
            onClick: () => {
                u?.(), _()
            },
            disabled: p,
            loading: g,
            ...h
        })
    })
}