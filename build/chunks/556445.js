/** chunk id: 556445, original params: t,e,i (module,exports,require) **/
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
        variant: m = "secondary",
        onAction: p,
        ...h
    } = t, {
        tooltip: A,
        loading: g,
        disabled: f,
        onClick: T
    } = (0, a.J$)(e, i, u, s.Ay.getNickname(d, o, i));
    return (0, n.jsx)(l.m, {
        text: A,
        children: (0, n.jsx)(r.K0, {
            icon: r.J2m,
            size: c,
            variant: m,
            onClick: () => {
                p?.(), T()
            },
            disabled: f,
            loading: g,
            "aria-label": A ?? e.name,
            ...h
        })
    })
}