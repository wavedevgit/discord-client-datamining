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
        ...p
    } = t, {
        label: m,
        tooltip: A,
        loading: h,
        disabled: g,
        onClick: f
    } = (0, s._B)(e, i, a);
    return (0, n.jsx)(l.m, {
        text: A,
        children: (0, n.jsx)(r.Button, {
            variant: d,
            size: o,
            icon: r.L5T,
            text: m,
            fullWidth: u,
            onClick: () => {
                c?.(), f()
            },
            disabled: g,
            loading: h,
            ...p
        })
    })
}