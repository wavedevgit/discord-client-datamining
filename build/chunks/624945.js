/** chunk id: 624945 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    r = n(311907),
    l = n(827734),
    s = n(397927),
    a = n(287809),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(985018),
    _ = n(179250);

function A(e) {
    let {
        message: t,
        channel: n,
        compact: A
    } = e, E = t.getChannelId(), m = n.isDM() ? n.getRecipientId() : void 0, I = (0, r.bG)([a.default], () => null != m ? a.default.getUser(m) : void 0, [m]), T = (0, r.bG)([a.default], () => a.default.getCurrentUser(), []), g = null != T && t.author.id === T.id, N = (0, o.d8)(I, n), f = (0, c.P)({
        user: I,
        channelId: E,
        guildId: void 0,
        messageId: t.id
    })(N);
    if (!n.isDM() || null == I || null == T) return null;
    let C = g ? d.t.S6PRsh : d.t["H/9Tlj"],
        p = d.intl.format(C, {
            username: N.nick,
            usernameHook: f
        });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(s.V1C, {
            size: "sm",
            color: l.A.colors.STATUS_POSITIVE
        }),
        iconContainerClassName: _.z,
        timestamp: t.timestamp,
        compact: A,
        children: p
    })
}