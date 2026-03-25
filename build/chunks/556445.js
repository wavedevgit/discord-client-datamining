/** chunk id: 556445 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(990078),
    r = i(397927),
    s = i(562153),
    a = i(353411);

function o(e) {
    let {
        activity: t,
        user: i,
        channelId: o,
        guildId: d,
        source: u,
        size: c = "sm",
        variant: A = "secondary",
        onAction: h,
        ...m
    } = e, {
        tooltip: p,
        loading: g,
        disabled: f,
        onClick: T
    } = (0, a.J$)(t, i, u, s.Ay.getNickname(d, o, i));
    return (0, n.jsx)(l.m, {
        text: p,
        children: (0, n.jsx)(r.K0, {
            icon: r.J2m,
            size: c,
            variant: A,
            onClick: () => {
                h?.(), T()
            },
            disabled: f,
            loading: g,
            "aria-label": p ?? t.name,
            ...m
        })
    })
}