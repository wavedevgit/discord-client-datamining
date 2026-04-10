/** chunk id: 692125 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153),
    r = n(71393),
    a = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(r.A), this.syncWith([r.A], a.tEg)
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(a.GuildFeatures.BANNER) && Date.now() - t >= a.D2K
    }
}
let o = new s(l.h)