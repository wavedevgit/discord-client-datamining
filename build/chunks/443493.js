/** chunk id: 443493 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(323443),
    a = n(977997),
    o = n(985018);
let u = t => {
    let {
        guildId: e,
        channelId: n,
        variant: u = "active",
        size: d = "sm",
        onAction: c,
        ...h
    } = t, A = (0, l.bG)([a.A], () => a.A.isInChannel(n), [n]);
    return (0, i.jsx)(r.Button, {
        variant: u,
        size: d,
        text: o.intl.string(o.t.ZYO5OK),
        disabled: A,
        onClick: () => {
            c?.(), s.CH(e, n)
        },
        fullWidth: !0,
        ...h
    })
}