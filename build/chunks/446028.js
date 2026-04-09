/** chunk id: 446028 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(763754),
    r = n(447215),
    s = n(888675),
    o = n(345981),
    c = n(210360);

function u(e) {
    let {
        message: t,
        channel: n,
        compact: u
    } = e, d = (0, a.Ay)(t), _ = t.application, A = (0, r.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
    });
    return (0, i.jsx)(s.A, {
        iconNode: (0, i.jsx)(l.qyI, {
            size: "md",
            color: "currentColor",
            className: c.C
        }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, o.X)({
            application: _,
            username: d.nick,
            usernameHook: A(d)
        })
    })
}