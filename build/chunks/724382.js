/** chunk id: 724382 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(429913),
    s = n(763754),
    a = n(447215),
    o = n(888675),
    c = n(985018),
    u = n(111417);

function d(e) {
    let {
        message: t,
        channel: n,
        compact: d
    } = e, _ = (0, s.Ay)(t), A = (0, a.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
    })(_), E = (0, l.h)(t.applicationId);
    if (null == E) return null;
    let m = c.intl.format(c.t.mAtJTC, {
        username: t.author.username,
        usernameHook: A,
        applicationName: E.name,
        applicationNameHook: () => (0, i.jsx)(r.Text, {
            className: u.S,
            variant: "text-md/semibold",
            color: "text-strong",
            children: E.name
        }, E.name),
        helpdeskArticle: "#"
    });
    return (0, i.jsx)(o.A, {
        iconNode: (0, i.jsx)(r.fNY, {
            size: "sm",
            color: r.LU0.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: u.H,
        children: m
    })
}