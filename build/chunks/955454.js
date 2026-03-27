/** chunk id: 955454 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(73153),
    c = n(334738),
    d = n(835369),
    u = n(218152),
    h = n(970278),
    A = n(747926),
    m = n(734057),
    _ = n(403362),
    g = n(661191),
    p = n(652215),
    f = n(37411),
    x = n(440649);

function C(e) {
    let {
        channel: t,
        channelRecord: n,
        deleteChannel: l
    } = e, C = (0, r.yK)([h.A, m.A], () => a()(h.A.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
        let {
            id: n
        } = e;
        return g.default.compare(n, t.oldestReadMessageId) > 0
    }).map(e => {
        let {
            id: t
        } = e;
        return m.A.getChannel(t)
    }).filter(_.Vq).sort((e, t) => g.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), E = s.useCallback((e, t) => {
        (0, A.JA)(e, t, f.H9.INBOX)
    }, []);
    return s.useEffect(() => {
        null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== C.length || o.h.wait(() => {
            (0, c.ack)(t.channelId, {
                section: p.JJy.INBOX,
                object: p.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                objectType: p.AnalyticsObjectTypes.ACK_AUTOMATIC
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