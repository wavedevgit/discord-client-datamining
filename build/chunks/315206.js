/** chunk id: 315206, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    Ay: () => N,
    bK: () => A,
    cK: () => I
});
var i = n(73153),
    a = n(31728),
    o = n(272355),
    s = n(869146),
    l = n(734057),
    c = n(186111),
    u = n(334463),
    d = n(383501),
    f = n(309010),
    p = n(967198),
    _ = n(977997),
    h = n(646865),
    m = n(933958),
    g = n(969151),
    E = n(594007),
    y = n(227042),
    b = n(652215);

function O(e, t) {
    if ((0, h.f)() || u.A.isOpen(t)) return !1;
    if (null != r) {
        let e = r;
        i.h.wait(() => a.VN(e))
    }
    i.h.wait(() => a.ho(t, b.o1q.ACTIVITY, {
        channel: e
    })), r = t
}

function v() {
    let e = r;
    null != e && u.A.isOpen(e) && (i.h.wait(() => a.VN(e)), r = null)
}

function A(e) {
    let t = null != e ? e : r;
    null != t && u.A.isOpen(t) && i.h.wait(() => a.jD(t))
}

function I(e) {
    let t = null != e ? e : r;
    null != t && u.A.isOpen(t) && i.h.wait(() => a.WU(t))
}

function S() {
    let e = m.Ay.getConnectedActivityLocation(),
        t = null != e ? m.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, g.H)(e),
        r = l.A.getChannel(n);
    return null == t || null == r ? v() : O(r, (0, E.A)(t.location.id, t.applicationId))
}

function T() {
    return (0, y.A)({
        LayerStore: c.A,
        PopoutWindowStore: s.A
    }) ? A() : I()
}
class C extends o.A {
    _initialize() {
        f.A.addChangeListener(S), p.A.addChangeListener(S), d.A.addChangeListener(S), _.A.addChangeListener(S), s.A.addChangeListener(S), m.Ay.addChangeListener(S), c.A.addChangeListener(T)
    }
    _terminate() {
        f.A.removeChangeListener(S), p.A.removeChangeListener(S), d.A.removeChangeListener(S), _.A.removeChangeListener(S), s.A.removeChangeListener(S), m.Ay.removeChangeListener(S), c.A.removeChangeListener(T)
    }
}
let N = new C