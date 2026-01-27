/** Chunk was on 92917 **/
/** chunk id: 446028, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(763754),
    a = n(447215),
    s = n(888675),
    o = n(345981),
    c = n(657678);

function u(e) {
    let {
        message: t,
        channel: n,
        compact: u
    } = e, d = (0, l.Ay)(t), p = t.application, m = (0, a.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
    });
    return (0, r.jsx)(s.A, {
        iconNode: (0, r.jsx)(i.qyI, {
            size: "md",
            color: "currentColor",
            className: c.C
        }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, o.X)({
            application: p,
            username: d.nick,
            usernameHook: m(d)
        })
    })
}