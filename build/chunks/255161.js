/** chunk id: 255161 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    l = n(73153),
    a = n(576705),
    r = n(652215);

function s() {
    return !0
}
class o extends i.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(a.A), this.syncWith([a.A], s)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= r.D2K && a.A.can(r.xBc.ADMINISTRATOR, e)
    }
}
let d = new o(l.h)