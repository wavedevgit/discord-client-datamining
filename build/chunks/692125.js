/** chunk id: 692125 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153),
    r = n(71393),
    l = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(r.A), this.syncWith([r.A], l.tEg)
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(l.GuildFeatures.BANNER) && Date.now() - t >= l.D2K
    }
}
let o = new s(a.h)