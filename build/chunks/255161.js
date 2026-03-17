/** chunk id: 255161 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    a = n(73153),
    r = n(576705),
    l = n(652215);

function s() {
    return !0
}
class o extends i.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(r.A), this.syncWith([r.A], s)
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= l.D2K && r.A.can(l.xBc.ADMINISTRATOR, e)
    }
}
let d = new o(a.h)