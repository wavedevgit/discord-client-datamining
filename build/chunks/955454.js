/** Chunk was on 1113 **/
/** chunk id: 955454, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
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
    h = n(970278),
    p = n(747926),
    g = n(734057),
    f = n(403362),
    m = n(661191),
    b = n(652215),
    A = n(37411),
    y = n(357976);

function O(e) {
    let {
        channel: t,
        channelRecord: n,
        deleteChannel: i
    } = e, O = (0, a.yK)([h.A, g.A], () => s()(h.A.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
        let {
            id: n
        } = e;
        return m.default.compare(n, t.oldestReadMessageId) > 0
    }).map(e => {
        let {
            id: t
        } = e;
        return g.A.getChannel(t)
    }).filter(f.Vq).sort((e, t) => m.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), _ = l.useCallback((e, t) => {
        (0, p.JA)(e, t, A.H9.INBOX)
    }, []);
    return l.useEffect(() => {
        null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== O.length || o.h.wait(() => {
            (0, c.ack)(t.channelId, {
                section: b.JJy.INBOX,
                object: b.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC
            }, !0), i(t.channelId)
        })
    }), (0, r.jsx)("div", {
        className: y.k,
        children: O.map(e => (0, r.jsx)(d.Cp, {
            channel: n,
            children: (0, r.jsx)(u.Ay, {
                className: y.u,
                threadId: e.id,
                goToThread: _
            })
        }, e.id))
    })
}