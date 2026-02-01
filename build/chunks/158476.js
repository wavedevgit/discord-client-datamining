/** chunk id: 158476, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l, r, i = n(311907),
    a = n(73153),
    s = n(857071);
let o = null,
    c = null;

function u() {
    let e = s.A.mostRecentLurkedGuildId();
    null != e ? (o = e, c = null) : (c = null != o ? o : null, o = null)
}
class d extends(r = i.Ay.Store) {
    initialize() {
        this.syncWith([s.A], u)
    }
    shouldShowPopout(e) {
        return c === e
    }
}(l = "displayName") in d ? Object.defineProperty(d, l, {
    value: "LurkerModePopoutStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : d[l] = "LurkerModePopoutStore";
let h = new d(a.h)