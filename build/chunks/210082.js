/** Chunk was on 77870 **/
/** chunk id: 210082, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(311907),
    l = n(734057),
    i = n(576705),
    s = n(222823),
    a = n(543465),
    o = n(661191),
    c = n(818348);

function u(e) {
    return (0, r.cf)([l.A, s.Ay, a.Ay, i.A], () => o.default.keys(e).reduce((e, t) => {
        let n = l.A.getChannel(t),
            r = null == n ? void 0 : n.isGuildVocal();
        return e.badge = e.badge + s.Ay.getMentionCount(t), e.unread = e.unread || !r && i.A.can(c.xB.VIEW_CHANNEL, n) && s.Ay.hasUnread(t) && !a.Ay.isChannelMuted(null == n ? void 0 : n.getGuildId(), t), e
    }, {
        badge: 0,
        unread: !1
    }))
}