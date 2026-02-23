/** chunk id: 692125, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    r = n(73153),
    l = n(71393),
    a = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(l.A), this.syncWith([l.A], a.tEg)
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(a.GuildFeatures.BANNER) && Date.now() - t >= a.D2K
    }
}
let o = new s(r.h)