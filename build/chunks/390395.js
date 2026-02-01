/** chunk id: 390395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var l, r, i = n(311907),
    a = n(73153),
    s = n(717125),
    o = n(961350),
    c = n(734057),
    u = n(661191),
    d = n(306680);
let h = new Set;
class p extends(l = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default, c.A, s.A)
    }
    shouldDisplayPrompt(e) {
        return h.has(e)
    }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
    value: "MediaPostSharePromptStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : p[r] = "MediaPostSharePromptStore";
let f = new p(a.h, {
    CONNECTION_OPEN: function() {
        h = new Set
    },
    MESSAGE_CREATE: function(e) {
        var t;
        if (e.isPushNotification) return;
        let n = e.message;
        if (o.default.getId() !== (null == (t = n.author) ? void 0 : t.id) || !(0, d.Co)(n.id, n.channel_id)) return;
        let l = c.A.getChannel(n.channel_id);
        null == l || null == l.parent_id || s.A.isChannelGated(l.guild_id, l.parent_id) && h.add(u.default.castMessageIdAsChannelId(e.message.id))
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
        let {
            threadId: t
        } = e;
        h.delete(t)
    },
    LOGOUT: function(e) {
        h.clear()
    }
})