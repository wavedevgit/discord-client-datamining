/** chunk id: 443493 params = (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(323443),
    a = i(977997),
    o = i(985018);
let d = t => {
    let {
        guildId: e,
        channelId: i,
        variant: d = "active",
        size: u = "sm",
        onAction: c,
        ...A
    } = t, m = (0, l.bG)([a.A], () => a.A.isInChannel(i), [i]);
    return (0, n.jsx)(r.Button, {
        variant: d,
        size: u,
        text: o.intl.string(o.t.ZYO5OK),
        disabled: m,
        onClick: () => {
            c?.(), s.CH(e, i)
        },
        fullWidth: !0,
        ...A
    })
}