/** chunk id: 701626 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153),
    a = n(576705),
    r = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(a.A), this.syncWith([a.A], r.tEg)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= r.D2K && a.A.can(r.xBc.MANAGE_GUILD, e)
    }
}
let o = new s(l.h)