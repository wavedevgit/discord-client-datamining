/** chunk id: 556445 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(990078),
    a = n(397927),
    s = n(562153),
    r = n(353411);

function o(e) {
    let {
        activity: t,
        user: n,
        channelId: o,
        guildId: c,
        source: d,
        size: u = "sm",
        variant: h = "secondary",
        onAction: m,
        ...A
    } = e, {
        tooltip: g,
        loading: p,
        disabled: _,
        onClick: f
    } = (0, r.J$)(t, n, d, s.Ay.getNickname(c, o, n));
    return (0, i.jsx)(l.m, {
        text: g,
        children: (0, i.jsx)(a.K0, {
            icon: a.J2m,
            size: u,
            variant: h,
            onClick: () => {
                m?.(), f()
            },
            disabled: _,
            loading: p,
            "aria-label": g ?? t.name,
            ...A
        })
    })
}