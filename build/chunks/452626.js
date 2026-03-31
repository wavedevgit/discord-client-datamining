/** chunk id: 452626 params = (module,exports,require) **/
i.d(e, {
    A: () => a
});
var n = i(627968);
i(64700);
var l = i(990078),
    r = i(397927),
    s = i(353411);

function a(t) {
    let {
        activity: e,
        user: i,
        source: a,
        size: o = "sm",
        variant: d = "secondary",
        fullWidth: u,
        onAction: c,
        ...m
    } = t, {
        label: A,
        tooltip: h,
        loading: p,
        disabled: g,
        onClick: f
    } = (0, s._B)(e, i, a);
    return (0, n.jsx)(l.m, {
        text: h,
        children: (0, n.jsx)(r.Button, {
            variant: d,
            size: o,
            icon: r.L5T,
            text: A,
            fullWidth: u,
            onClick: () => {
                c?.(), f()
            },
            disabled: g,
            loading: p,
            ...m
        })
    })
}