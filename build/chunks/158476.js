/** Chunk was on 78528 **/
/** chunk id: 158476, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r, l, i = n(311907),
    s = n(73153),
    a = n(857071);
let o = null,
    c = null;

function u() {
    let e = a.A.mostRecentLurkedGuildId();
    null != e ? (o = e, c = null) : (c = null != o ? o : null, o = null)
}
class d extends(l = i.Ay.Store) {
    initialize() {
        this.syncWith([a.A], u)
    }
    shouldShowPopout(e) {
        return c === e
    }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
    value: "LurkerModePopoutStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : d[r] = "LurkerModePopoutStore";
let p = new d(s.h)