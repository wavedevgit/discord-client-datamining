/** Chunk was on 97492 **/
/** chunk id: 390395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r, l, i = n(311907),
    s = n(73153),
    a = n(717125),
    o = n(961350),
    c = n(734057),
    u = n(661191),
    d = n(306680);
let p = new Set;
class h extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default, c.A, a.A)
    }
    shouldDisplayPrompt(e) {
        return p.has(e)
    }
}(l = "displayName") in h ? Object.defineProperty(h, l, {
    value: "MediaPostSharePromptStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : h[l] = "MediaPostSharePromptStore";
let f = new h(s.h, {
    CONNECTION_OPEN: function() {
        p = new Set
    },
    MESSAGE_CREATE: function(e) {
        var t;
        if (e.isPushNotification) return;
        let n = e.message;
        if (o.default.getId() !== (null == (t = n.author) ? void 0 : t.id) || !(0, d.Co)(n.id, n.channel_id)) return;
        let r = c.A.getChannel(n.channel_id);
        null == r || null == r.parent_id || a.A.isChannelGated(r.guild_id, r.parent_id) && p.add(u.default.castMessageIdAsChannelId(e.message.id))
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
        let {
            threadId: t
        } = e;
        p.delete(t)
    },
    LOGOUT: function(e) {
        p.clear()
    }
})