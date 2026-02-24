/** chunk id: 158476, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    l = n(73153),
    s = n(857071);
let a = null,
    r = null;

function o() {
    let e = s.A.mostRecentLurkedGuildId();
    null != e ? (a = e, r = null) : (r = null != a ? a : null, a = null)
}
class c extends i.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([s.A], o)
    }
    shouldShowPopout(e) {
        return r === e
    }
}
let d = new c(l.h)