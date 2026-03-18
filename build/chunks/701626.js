/** chunk id: 701626 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153),
    l = n(576705),
    r = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(l.A), this.syncWith([l.A], r.tEg)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= r.D2K && l.A.can(r.xBc.MANAGE_GUILD, e)
    }
}
let o = new s(a.h)