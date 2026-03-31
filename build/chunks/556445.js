/** chunk id: 556445 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(627968);
i(64700);
var a = i(990078),
    l = i(397927),
    s = i(562153),
    r = i(353411);

function o(e) {
    let {
        activity: t,
        user: i,
        channelId: o,
        guildId: c,
        source: d,
        size: u = "sm",
        variant: m = "secondary",
        onAction: _,
        ...p
    } = e, {
        tooltip: h,
        loading: A,
        disabled: g,
        onClick: f
    } = (0, r.J$)(t, i, d, s.Ay.getNickname(c, o, i));
    return (0, n.jsx)(a.m, {
        text: h,
        children: (0, n.jsx)(l.K0, {
            icon: l.J2m,
            size: u,
            variant: m,
            onClick: () => {
                _?.(), f()
            },
            disabled: g,
            loading: A,
            "aria-label": h ?? t.name,
            ...p
        })
    })
}