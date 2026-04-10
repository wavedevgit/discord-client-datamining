/** chunk id: 701626 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    r = n(73153),
    l = n(576705),
    a = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(l.A), this.syncWith([l.A], a.tEg)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= a.D2K && l.A.can(a.xBc.MANAGE_GUILD, e)
    }
}
let o = new s(r.h)