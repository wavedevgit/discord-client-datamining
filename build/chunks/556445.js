/** chunk id: 556445 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(990078),
    r = n(397927),
    s = n(562153),
    a = n(353411);

function o(t) {
    let {
        activity: e,
        user: n,
        channelId: o,
        guildId: u,
        source: d,
        size: c = "sm",
        variant: h = "secondary",
        onAction: A,
        ...m
    } = t, {
        tooltip: p,
        loading: g,
        disabled: f,
        onClick: T
    } = (0, a.J$)(e, n, d, s.Ay.getNickname(u, o, n));
    return (0, i.jsx)(l.m, {
        text: p,
        children: (0, i.jsx)(r.K0, {
            icon: r.J2m,
            size: c,
            variant: h,
            onClick: () => {
                A?.(), T()
            },
            disabled: f,
            loading: g,
            "aria-label": p ?? e.name,
            ...m
        })
    })
}