/** chunk id: 692125 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153),
    a = n(71393),
    r = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(a.A), this.syncWith([a.A], r.tEg)
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(r.GuildFeatures.BANNER) && Date.now() - t >= r.D2K
    }
}
let o = new s(l.h)