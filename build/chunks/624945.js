/** chunk id: 624945 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(311907),
    a = n(827734),
    r = n(397927),
    s = n(287809),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(985018),
    _ = n(351810);

function A(e) {
    let {
        message: t,
        channel: n,
        compact: A
    } = e, m = t.getChannelId(), E = n.isDM() ? n.getRecipientId() : void 0, T = (0, l.bG)([s.default], () => null != E ? s.default.getUser(E) : void 0, [E]), I = (0, l.bG)([s.default], () => s.default.getCurrentUser(), []), g = null != I && t.author.id === I.id, N = (0, o.d8)(T, n), f = (0, c.P)({
        user: T,
        channelId: m,
        guildId: void 0,
        messageId: t.id
    })(N);
    if (!n.isDM() || null == T || null == I) return null;
    let C = g ? d.t.S6PRsh : d.t["H/9Tlj"],
        h = d.intl.format(C, {
            username: N.nick,
            usernameHook: f
        });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(r.V1C, {
            size: "sm",
            color: a.A.colors.STATUS_POSITIVE
        }),
        iconContainerClassName: _.z,
        timestamp: t.timestamp,
        compact: A,
        children: h
    })
}