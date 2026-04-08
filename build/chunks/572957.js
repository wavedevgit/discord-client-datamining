/** chunk id: 572957 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(938796);
var i = n(665260),
    l = n(311907),
    s = n(506774),
    r = n(73153),
    a = n(961350),
    o = n(734057),
    d = n(576705),
    c = n(287809),
    u = n(812930),
    m = n(652215);
let _ = "ChannelFollowingBumpChannels",
    h = new Set,
    p = new Set;
class g extends l.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(a.default, o.A, d.A, c.default), h = new Set(s.w.get(_))
    }
    shouldShowBump(e) {
        return p.has(e)
    }
}
let A = new g(r.h, {
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t,
            message: n,
            optimistic: l
        } = e;
        if (l || h.has(t)) return !1;
        let s = o.A.getChannel(t),
            r = c.default.getCurrentUser();
        if (!(null != s && s.type === m.rbe.GUILD_ANNOUNCEMENT && (0, u.A)(n) && (null != r && n.author?.id === r.id ? d.A.can(m.xBc.SEND_MESSAGES, s) : d.A.can(m.xBc.MANAGE_MESSAGES, s)) && !i.Lt(Number(n.flags), m.pr7.CROSSPOSTED))) return !1;
        p.add(n.id)
    },
    MESSAGE_UPDATE: function(e) {
        let {
            message: t
        } = e;
        p.has(t.id) && i.Lt(Number(t.flags), m.pr7.CROSSPOSTED) && p.delete(t.id)
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
        h.add(t), s.w.set(_, h), p.clear()
    }
})