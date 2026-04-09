/** chunk id: 724382 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(429913),
    r = n(763754),
    s = n(447215),
    o = n(888675),
    c = n(985018),
    u = n(352926);

function d(e) {
    let {
        message: t,
        channel: n,
        compact: d
    } = e, _ = (0, r.Ay)(t), A = (0, s.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
    })(_), m = (0, a.h)(t.applicationId);
    if (null == m) return null;
    let E = c.intl.format(c.t.mAtJTC, {
        username: t.author.username,
        usernameHook: A,
        applicationName: m.name,
        applicationNameHook: () => (0, i.jsx)(l.Text, {
            className: u.S,
            variant: "text-md/semibold",
            color: "text-strong",
            children: m.name
        }, m.name),
        helpdeskArticle: "#"
    });
    return (0, i.jsx)(o.A, {
        iconNode: (0, i.jsx)(l.fNY, {
            size: "sm",
            color: l.LU0.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: u.H,
        children: E
    })
}