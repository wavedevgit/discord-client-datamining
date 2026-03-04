/** chunk id: 452626, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => s
});
var i = n(627968);
n(64700);
var l = n(990078),
    r = n(397927),
    a = n(353411);

function s(t) {
    let {
        activity: e,
        user: n,
        source: s,
        size: o = "sm",
        variant: d = "secondary",
        fullWidth: u,
        onAction: c,
        ...A
    } = t, {
        label: p,
        tooltip: m,
        loading: h,
        disabled: g,
        onClick: f
    } = (0, a._B)(e, n, s);
    return (0, i.jsx)(l.m, {
        text: m,
        children: (0, i.jsx)(r.Button, {
            variant: d,
            size: o,
            icon: r.L5T,
            text: p,
            fullWidth: u,
            onClick: () => {
                c?.(), f()
            },
            disabled: g,
            loading: h,
            ...A
        })
    })
}