/** chunk id: 788866, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r, i, l = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(498642),
    c = n(71393),
    u = n(576705),
    d = n(124759),
    p = n(652215);
let h = "publicUpsellChannelNoticeGuilds",
    g = new Set;
class m extends(r = l.Ay.Store) {
    initialize() {
        var e;
        this.waitFor(u.A, c.A, o.A), this.syncWith([u.A, c.A, o.A], p.tEg), g = (e = new Set(a.w.get(h)), e)
    }
    isVisible(e) {
        if (null == e) return;
        let t = o.A.getMemberCount(e.id);
        return !g.has(e.id) && null != t && t >= d.dH && u.A.can(p.xBc.ADMINISTRATOR, e) && !e.features.has(p.GuildFeatures.COMMUNITY)
    }
}(i = "displayName") in m ? Object.defineProperty(m, i, {
    value: "EnablePublicGuildUpsellNoticeStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : m[i] = "EnablePublicGuildUpsellNoticeStore";
let f = new m(s.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
        let t = e.guildId;
        if (!g.has(t)) return g.add(t), a.w.set(h, g), !0
    }
})