/** chunk id: 446028 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(763754),
    r = n(447215),
    s = n(888675),
    o = n(345981),
    c = n(384923);

function d(e) {
    let {
        message: t,
        channel: n,
        compact: d
    } = e, u = (0, l.Ay)(t), _ = t.application, m = (0, r.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
    });
    return (0, i.jsx)(s.A, {
        iconNode: (0, i.jsx)(a.qyI, {
            size: "md",
            color: "currentColor",
            className: c.C
        }),
        timestamp: t.timestamp,
        compact: d,
        children: (0, o.X)({
            application: _,
            username: u.nick,
            usernameHook: m(u)
        })
    })
}