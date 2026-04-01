/** chunk id: 255161 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    a = n(73153),
    l = n(576705),
    r = n(652215);

function s() {
    return !0
}
class o extends i.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(l.A), this.syncWith([l.A], s)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= r.D2K && l.A.can(r.xBc.ADMINISTRATOR, e)
    }
}
let d = new o(a.h)