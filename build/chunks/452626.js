/** chunk id: 452626 params = (module,exports,require) **/
n.d(e, {
    A: () => a
});
var i = n(627968);
n(64700);
var l = n(990078),
    r = n(397927),
    s = n(353411);

function a(t) {
    let {
        activity: e,
        user: n,
        source: a,
        size: o = "sm",
        variant: u = "secondary",
        fullWidth: d,
        onAction: c,
        ...h
    } = t, {
        label: A,
        tooltip: m,
        loading: p,
        disabled: g,
        onClick: f
    } = (0, s._B)(e, n, a);
    return (0, i.jsx)(l.m, {
        text: m,
        children: (0, i.jsx)(r.Button, {
            variant: u,
            size: o,
            icon: r.L5T,
            text: A,
            fullWidth: d,
            onClick: () => {
                c?.(), f()
            },
            disabled: g,
            loading: p,
            ...h
        })
    })
}