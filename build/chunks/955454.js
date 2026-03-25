/** chunk id: 955454 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(73153),
    c = n(334738),
    d = n(835369),
    u = n(218152),
    h = n(970278),
    A = n(747926),
    m = n(734057),
    p = n(403362),
    _ = n(661191),
    g = n(652215),
    f = n(37411),
    x = n(357976);

function C(e) {
    let {
        channel: t,
        channelRecord: n,
        deleteChannel: l
    } = e, C = (0, a.yK)([h.A, m.A], () => r()(h.A.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
        let {
            id: n
        } = e;
        return _.default.compare(n, t.oldestReadMessageId) > 0
    }).map(e => {
        let {
            id: t
        } = e;
        return m.A.getChannel(t)
    }).filter(p.Vq).sort((e, t) => _.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), E = s.useCallback((e, t) => {
        (0, A.JA)(e, t, f.H9.INBOX)
    }, []);
    return s.useEffect(() => {
        null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== C.length || o.h.wait(() => {
            (0, c.ack)(t.channelId, {
                section: g.JJy.INBOX,
                object: g.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                objectType: g.AnalyticsObjectTypes.ACK_AUTOMATIC
            }, !0), l(t.channelId)
        })
    }), (0, i.jsx)("div", {
        className: x.k,
        children: C.map(e => (0, i.jsx)(u.Cp, {
            channel: n,
            children: (0, i.jsx)(d.Ay, {
                className: x.u,
                threadId: e.id,
                goToThread: E
            })
        }, e.id))
    })
}