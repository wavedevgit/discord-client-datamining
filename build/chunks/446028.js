/** chunk id: 446028, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(763754),
    r = n(447215),
    s = n(888675),
    o = n(345981),
    c = n(335720);

function d(e) {
    let {
        message: t,
        channel: n,
        compact: d
    } = e, u = (0, a.Ay)(t), m = t.application, _ = (0, r.P)({
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
        compact: d,
        children: (0, o.X)({
            application: m,
            username: u.nick,
            usernameHook: _(u)
        })
    })
}