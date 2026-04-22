/** chunk id: 443493 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(323443),
    r = n(977997),
    o = n(985018);
let c = e => {
    let {
        guildId: t,
        channelId: n,
        variant: c = "active",
        size: d = "sm",
        onAction: u,
        ...h
    } = e, m = (0, l.bG)([r.A], () => r.A.isInChannel(n), [n]);
    return (0, i.jsx)(s.Button, {
        variant: c,
        size: d,
        text: o.intl.string(o.t.ZYO5OK),
        disabled: m,
        onClick: () => {
            u?.(), a.CH(t, n)
        },
        fullWidth: !0,
        ...h
    })
}