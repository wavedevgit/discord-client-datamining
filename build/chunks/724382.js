/** chunk id: 724382 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(429913),
    a = n(763754),
    l = n(447215),
    o = n(888675),
    c = n(985018),
    u = n(283753);

function d(e) {
    let {
        message: t,
        channel: n,
        compact: d
    } = e, _ = (0, a.Ay)(t), E = (0, l.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
    })(_), A = (0, s.h)(t.applicationId);
    if (null == A) return null;
    let m = c.intl.format(c.t.mAtJTC, {
        username: t.author.username,
        usernameHook: E,
        applicationName: A.name,
        applicationNameHook: () => (0, i.jsx)(r.Text, {
            className: u.S,
            variant: "text-md/semibold",
            color: "text-strong",
            children: A.name
        }, A.name),
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