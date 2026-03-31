/** chunk id: 452626 params = (module,exports,require) **/
i.d(t, {
    A: () => r
});
var n = i(627968);
i(64700);
var a = i(990078),
    l = i(397927),
    s = i(353411);

function r(e) {
    let {
        activity: t,
        user: i,
        source: r,
        size: o = "sm",
        variant: c = "secondary",
        fullWidth: d,
        onAction: u,
        ...m
    } = e, {
        label: _,
        tooltip: p,
        loading: h,
        disabled: A,
        onClick: g
    } = (0, s._B)(t, i, r);
    return (0, n.jsx)(a.m, {
        text: p,
        children: (0, n.jsx)(l.Button, {
            variant: c,
            size: o,
            icon: l.L5T,
            text: _,
            fullWidth: d,
            onClick: () => {
                u?.(), g()
            },
            disabled: A,
            loading: h,
            ...m
        })
    })
}