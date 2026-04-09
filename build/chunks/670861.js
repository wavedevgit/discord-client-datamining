/** chunk id: 670861 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(734057),
    s = n(71393),
    o = n(320501),
    d = n(883344),
    c = n(691611),
    u = n(166734);

function A(e) {
    let {
        item: t
    } = e, {
        channelId: n,
        messageIds: A,
        title: _
    } = a.useMemo(() => {
        switch (t.data.kind) {
            case "message":
                return {
                    channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0
                };
            case "forumThread":
                return {
                    channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: void 0
                };
            default:
                return {
                    channelId: void 0, messageIds: [], title: void 0
                }
        }
    }, [t]), h = (0, r.bG)([l.A], () => null != n ? l.A.getChannel(n) : null, [n]), m = (0, r.bG)([s.A], () => h?.guild_id != null ? s.A.getGuild(h.guild_id) : null, [h]), g = (0, r.yK)([d.A, o.A], () => null == n ? [] : A.map(e => d.A.getMessage(e) ?? o.A.getMessage(n, e)).filter(e => null != e), [n, A]);
    return null == h || null == m || 0 === g.length ? null : (0, i.jsxs)("div", {
        className: u.kL,
        children: [null != _ ? (0, i.jsx)("div", {
            className: u.gn,
            children: (0, i.jsx)("div", {
                className: u.DD,
                children: _
            })
        }) : null, (0, i.jsx)("div", {
            className: u.MJ,
            children: g.map(e => (0, i.jsx)(c.A, {
                channel: h,
                message: e,
                renderThreadAccessory: !1,
                disableReactionCreates: !1,
                disableReactionUpdates: !1
            }, e.id))
        })]
    })
}