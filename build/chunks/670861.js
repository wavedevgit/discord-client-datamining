/** Chunk was on 21738 **/
/** chunk id: 670861, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(734057),
    s = n(71393),
    o = n(320501),
    c = n(883344),
    u = n(691611),
    d = n(659088);

function p(e) {
    let {
        item: t
    } = e, {
        channelId: n,
        messageIds: p,
        title: h
    } = i.useMemo(() => {
        switch (t.data.kind) {
            case "message":
                return {
                    channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0
                };
            case "generatedCandidate":
                return {
                    channelId: t.data.item.channel_id, messageIds: t.data.item.message_ids.slice(0, 1), title: t.data.item.primary_text
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
    }, [t]), g = (0, l.bG)([a.A], () => null != n ? a.A.getChannel(n) : null, [n]), f = (0, l.bG)([s.A], () => (null == g ? void 0 : g.guild_id) != null ? s.A.getGuild(g.guild_id) : null, [g]), m = (0, l.yK)([c.A, o.A], () => null == n ? [] : p.map(e => {
        var t;
        return null != (t = c.A.getMessage(e)) ? t : o.A.getMessage(n, e)
    }).filter(e => null != e), [n, p]);
    return null == g || null == f || 0 === m.length ? null : (0, r.jsxs)("div", {
        className: d.kL,
        children: [null != h ? (0, r.jsx)("div", {
            className: d.gn,
            children: (0, r.jsx)("div", {
                className: d.DD,
                children: h
            })
        }) : null, (0, r.jsx)("div", {
            className: d.MJ,
            children: m.map(e => (0, r.jsx)(u.A, {
                channel: g,
                message: e,
                renderThreadAccessory: !1,
                disableReactionCreates: !1,
                disableReactionUpdates: !1
            }, e.id))
        })]
    })
}