/** chunk id: 210082 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(311907),
    s = n(734057),
    l = n(576705),
    a = n(222823),
    r = n(543465),
    o = n(661191),
    c = n(818348);

function d(e) {
    return (0, i.cf)([s.A, a.Ay, r.Ay, l.A], () => o.default.keys(e).reduce((e, t) => {
        let n = s.A.getChannel(t),
            i = n?.isGuildVocal();
        return e.badge = e.badge + a.Ay.getMentionCount(t), e.unread = e.unread || !i && l.A.can(c.xB.VIEW_CHANNEL, n) && a.Ay.hasUnread(t) && !r.Ay.isChannelMuted(n?.getGuildId(), t), e
    }, {
        badge: 0,
        unread: !1
    }))
}