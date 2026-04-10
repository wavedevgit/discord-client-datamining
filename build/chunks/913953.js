/** chunk id: 913953 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(73153),
    l = n(92077),
    r = n(961350),
    a = n(144914);

function s() {
    if (!(0, a.S)()) return;
    let e = r.default.getToken(),
        t = r.default.getId();
    if (null == e) throw Error("missing user token");
    l.Ts(e, t)
}

function o() {
    l.zr()
}
let d = {
    init() {
        i.h.subscribe("CONNECTION_OPEN", s), i.h.subscribe("LOGOUT", o)
    }
}