/** chunk id: 572957 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(938796);
var i = n(665260),
    a = n(311907),
    l = n(506774),
    s = n(73153),
    r = n(961350),
    o = n(734057),
    d = n(576705),
    c = n(287809),
    u = n(812930),
    _ = n(652215);
let m = "ChannelFollowingBumpChannels",
    h = new Set,
    p = new Set;
class g extends a.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(r.default, o.A, d.A, c.default), h = new Set(l.w.get(m))
    }
    shouldShowBump(e) {
        return p.has(e)
    }
}
let A = new g(s.h, {
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t,
            message: n,
            optimistic: a
        } = e;
        if (a || h.has(t)) return !1;
        let l = o.A.getChannel(t),
            s = c.default.getCurrentUser();
        if (!(null != l && l.type === _.rbe.GUILD_ANNOUNCEMENT && (0, u.A)(n) && (null != s && n.author?.id === s.id ? d.A.can(_.xBc.SEND_MESSAGES, l) : d.A.can(_.xBc.MANAGE_MESSAGES, l)) && !i.Lt(Number(n.flags), _.pr7.CROSSPOSTED))) return !1;
        p.add(n.id)
    },
    MESSAGE_UPDATE: function(e) {
        let {
            message: t
        } = e;
        p.has(t.id) && i.Lt(Number(t.flags), _.pr7.CROSSPOSTED) && p.delete(t.id)
    },
    CHANNEL_SELECT: function(e) {
        p.clear()
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
        let {
            messageId: t
        } = e;
        p.delete(t)
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
        let {
            channelId: t
        } = e;
        h.add(t), l.w.set(m, h), p.clear()
    }
})