/** chunk id: 778830 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => d
});
var a = n(148803),
    l = n(73153),
    r = n(272355),
    s = n(979286);
{
    let e = n(154323).A;
    i = () => e.get("shop_include_unpublished")
}
class o extends r.A {
    _initialize() {
        l.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    _terminate() {
        l.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    handlePostConnectionOpen() {
        let e = i();
        (0, s.LX)({
            release: e ? a.P.BETA : a.P.PROD
        })
    }
}
let d = new o