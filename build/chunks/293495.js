/** chunk id: 293495, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => A,
    YY: () => h
});
var r = n(73153),
    i = n(31728),
    l = n(272355),
    a = n(227042),
    s = n(869146),
    o = n(186111),
    c = n(334463),
    u = n(91242),
    d = n(652215);
let p = null;

function h(e) {
    return "framepip:".concat(e.applicationId)
}

function g() {
    let e = u.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void(null != (e = p) && c.A.isOpen(e) && (r.h.wait(() => i.VN(e)), p = null))
    }
    var t = h(e);
    if (c.A.isOpen(t)) return !1;
    if (null != p) {
        let e = p;
        r.h.wait(() => i.VN(e))
    }
    return r.h.wait(() => i.ho(t, d.o1q.FRAME, {})), void(p = t)
}

function m() {
    let e;
    if ((0, a.A)({
            LayerStore: o.A,
            PopoutWindowStore: s.A
        })) {
        let e;
        return void(null != (e = p) && c.A.isOpen(e) && r.h.wait(() => i.jD(e)))
    }
    null != (e = p) && c.A.isOpen(e) && r.h.wait(() => i.WU(e))
}
class f extends l.A {
    _initialize() {
        u.A.addChangeListener(g), o.A.addChangeListener(m)
    }
    _terminate() {
        u.A.removeChangeListener(g), o.A.removeChangeListener(m)
    }
}
let A = new f