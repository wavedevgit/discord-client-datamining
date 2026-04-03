/** chunk id: 556445 params = (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(990078),
    r = i(397927),
    s = i(562153),
    a = i(353411);

function o(t) {
    let {
        activity: e,
        user: i,
        channelId: o,
        guildId: d,
        source: u,
        size: c = "sm",
        variant: p = "secondary",
        onAction: m,
        ...A
    } = t, {
        tooltip: h,
        loading: g,
        disabled: f,
        onClick: E
    } = (0, a.J$)(e, i, u, s.Ay.getNickname(d, o, i));
    return (0, n.jsx)(l.m, {
        text: h,
        children: (0, n.jsx)(r.K0, {
            icon: r.J2m,
            size: c,
            variant: p,
            onClick: () => {
                m?.(), E()
            },
            disabled: f,
            loading: g,
            "aria-label": h ?? e.name,
            ...A
        })
    })
}