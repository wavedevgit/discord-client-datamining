/** chunk id: 293495 params = (module,exports,require) **/
n.d(t, {
    Ay: () => p,
    YY: () => h
});
var i = n(73153),
    a = n(31728),
    r = n(272355),
    l = n(227042),
    s = n(869146),
    o = n(186111),
    d = n(334463),
    c = n(91242),
    u = n(652215);
let A = null;

function h(e) {
    return `framepip:${e.applicationId}`
}

function _() {
    let e = c.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void(null != (e = A) && d.A.isOpen(e) && (i.h.wait(() => a.VN(e)), A = null))
    }
    var t = h(e);
    if (d.A.isOpen(t)) return !1;
    if (null != A) {
        let e = A;
        i.h.wait(() => a.VN(e))
    }
    return i.h.wait(() => a.ho(t, u.o1q.FRAME, {})), void(A = t)
}

function m() {
    let e;
    if ((0, l.A)({
            LayerStore: o.A,
            PopoutWindowStore: s.A
        })) {
        let e;
        return void(null != (e = (void 0) ?? A) && d.A.isOpen(e) && i.h.wait(() => a.jD(e)))
    }
    null != (e = (void 0) ?? A) && d.A.isOpen(e) && i.h.wait(() => a.WU(e))
}
class g extends r.A {
    _initialize() {
        c.A.addChangeListener(_), o.A.addChangeListener(m)
    }
    _terminate() {
        c.A.removeChangeListener(_), o.A.removeChangeListener(m)
    }
}
let p = new g