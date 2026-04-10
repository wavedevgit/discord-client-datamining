/** chunk id: 255161 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    r = n(73153),
    l = n(576705),
    a = n(652215);

function s() {
    return !0
}
class o extends i.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(l.A), this.syncWith([l.A], s)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= a.D2K && l.A.can(a.xBc.ADMINISTRATOR, e)
    }
}
let d = new o(r.h)