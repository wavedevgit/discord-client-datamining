/** chunk id: 443493 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(323443),
    r = i(977997),
    o = i(985018);
let c = e => {
    let {
        guildId: t,
        channelId: i,
        variant: c = "active",
        size: d = "sm",
        onAction: u,
        ...m
    } = e, _ = (0, a.bG)([r.A], () => r.A.isInChannel(i), [i]);
    return (0, n.jsx)(l.Button, {
        variant: c,
        size: d,
        text: o.intl.string(o.t.ZYO5OK),
        disabled: _,
        onClick: () => {
            u?.(), s.CH(t, i)
        },
        fullWidth: !0,
        ...m
    })
}