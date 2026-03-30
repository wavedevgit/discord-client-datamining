/** chunk id: 778830 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => d
});
var l = n(148803),
    a = n(73153),
    r = n(272355),
    s = n(979286);
{
    let e = n(154323).A;
    i = () => e.get("shop_include_unpublished")
}
class o extends r.A {
    _initialize() {
        a.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    _terminate() {
        a.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    handlePostConnectionOpen() {
        let e = i();
        (0, s.LX)({
            release: e ? l.P.BETA : l.P.PROD
        })
    }
}
let d = new o