/** chunk id: 701626 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153),
    r = n(576705),
    l = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(r.A), this.syncWith([r.A], l.tEg)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= l.D2K && r.A.can(l.xBc.MANAGE_GUILD, e)
    }
}
let o = new s(a.h)