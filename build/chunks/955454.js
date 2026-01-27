/** Chunk was on 77870 **/
/** chunk id: 955454, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    c = n(334738),
    u = n(835369),
    d = n(218152),
    p = n(970278),
    h = n(747926),
    f = n(734057),
    g = n(403362),
    m = n(661191),
    b = n(652215),
    A = n(37411),
    y = n(357976);

function _(e) {
    let {
        channel: t,
        channelRecord: n,
        deleteChannel: i
    } = e, _ = (0, a.yK)([p.A, f.A], () => s()(p.A.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
        let {
            id: n
        } = e;
        return m.default.compare(n, t.oldestReadMessageId) > 0
    }).map(e => {
        let {
            id: t
        } = e;
        return f.A.getChannel(t)
    }).filter(g.Vq).sort((e, t) => m.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), O = l.useCallback((e, t) => {
        (0, h.JA)(e, t, A.H9.INBOX)
    }, []);
    return l.useEffect(() => {
        null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== _.length || o.h.wait(() => {
            (0, c.ack)(t.channelId, {
                section: b.JJy.INBOX,
                object: b.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC
            }, !0), i(t.channelId)
        })
    }), (0, r.jsx)("div", {
        className: y.k,
        children: _.map(e => (0, r.jsx)(d.Cp, {
            channel: n,
            children: (0, r.jsx)(u.Ay, {
                className: y.u,
                threadId: e.id,
                goToThread: O
            })
        }, e.id))
    })
}