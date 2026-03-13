/** chunk id: 210082 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(311907),
    s = n(863005),
    l = n(734057),
    r = n(576705),
    a = n(222823),
    o = n(543465),
    c = n(661191),
    d = n(818348);

function u(e) {
    return (0, i.cf)([s.A, l.A, a.Ay, o.Ay, r.A], () => c.default.keys(e).reduce((e, t) => {
        let n = l.A.getChannel(t),
            i = n?.getGuildId(),
            u = n?.isGuildVocal();
        if (e.badge = e.badge + a.Ay.getMentionCount(t), e.unread = e.unread || !u && r.A.can(d.xB.VIEW_CHANNEL, n) && a.Ay.hasUnread(t) && !o.Ay.isChannelMuted(i, t), null != i) {
            let n = s.A.getActiveJoinedRelevantThreadsForParent(i, t),
                l = s.A.getActiveJoinedUnreadThreadsForParent(i, t);
            for (let t in e.unread = e.unread || c.default.keys(l).some(e => e in n), n) e.badge += a.Ay.getMentionCount(t)
        }
        return e
    }, {
        badge: 0,
        unread: !1
    }))
}