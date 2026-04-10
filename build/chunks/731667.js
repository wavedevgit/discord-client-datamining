/** chunk id: 731667 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(311907),
    l = n(73153),
    r = n(891540),
    a = n(71393),
    s = n(652215);
let o = !1;

function d(e) {
    let t = a.A.getGuild(e);
    return null != t && !!t.features.has(s.GuildFeatures.HUB) && (o = !0, !0)
}

function c() {
    return !0
}
class u extends i.Ay.Store {
    static displayName = "HubLinkNoticeStore";
    initialize() {
        this.waitFor(a.A, r.A), this.syncWith([r.A], c)
    }
    channelNoticePredicate(e) {
        return !!e.features.has(s.GuildFeatures.LINKED_TO_HUB) && !o
    }
}
let A = new u(l.h, {
    CONNECTION_OPEN: function(e) {
        for (let t of e.guilds)
            if (d(t.id)) return !0;
        return !1
    },
    GUILD_CREATE: function(e) {
        let {
            guild: t
        } = e;
        return d(t.id)
    }
})