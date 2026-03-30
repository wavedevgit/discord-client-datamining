/** chunk id: 913953 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(73153),
    l = n(92077),
    a = n(961350),
    r = n(144914);

function s() {
    if (!(0, r.S)()) return;
    let e = a.default.getToken(),
        t = a.default.getId();
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