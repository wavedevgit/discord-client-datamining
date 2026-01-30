/** Chunk was on 64935 **/
/** chunk id: 724382, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(429913),
    a = n(763754),
    s = n(447215),
    o = n(888675),
    c = n(985018),
    u = n(893112);

function d(e) {
    let {
        message: t,
        channel: n,
        compact: d
    } = e, p = (0, a.Ay)(t), m = (0, s.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
    })(p), f = (0, l.h)(t.applicationId);
    if (null == f) return null;
    let g = c.intl.format(c.t.mAtJTC, {
        username: t.author.username,
        usernameHook: m,
        applicationName: f.name,
        applicationNameHook: () => (0, r.jsx)(i.Text, {
            className: u.S,
            variant: "text-md/semibold",
            color: "text-strong",
            children: f.name
        }, f.name),
        helpdeskArticle: "#"
    });
    return (0, r.jsx)(o.A, {
        iconNode: (0, r.jsx)(i.fNY, {
            size: "sm",
            color: i.LU0.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: u.H,
        children: g
    })
}