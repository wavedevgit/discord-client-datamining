/** chunk id: 986880, original params: e,t,n (module,exports,require) **/
let r;
n.d(t, {
    Ay: () => I
});
var i = n(73153),
    l = n(31728),
    a = n(272355),
    s = n(87001),
    o = n(734057),
    c = n(186111),
    u = n(334463),
    d = n(383501),
    p = n(309010),
    h = n(967198),
    g = n(977997),
    m = n(998740),
    f = n(652215);

function A(e) {
    return "haven:".concat(e)
}

function _() {
    let e = r;
    if (null == e) return !1;
    let t = A(e);
    if (!u.A.isOpen(t)) return !1;
    let n = u.A.pipHavenWindow;
    if (null == n || n.id !== t) return r = null, !1;
    i.h.wait(() => l.VN(t)), r = null
}

function b() {
    return c.A.hasLayers()
}

function E() {
    let e, t, n = d.A.getChannelId(),
        a = null != n ? o.A.getChannel(n) : null;
    if (e = d.A.getChannelId(), t = p.A.getChannelId(), null == e || !m.A.isUserConnected(e) || e === t || s.A.getWindowOpen(f.MLl.CHANNEL_CALL_POPOUT) || 0) return _();
    if (null != a && m.A.isUserConnected(a.id)) {
        if (r !== a.id) {
            let e = A(a.id);
            if (u.A.isOpen(e)) return !1;
            if (null != r) {
                let e = r;
                i.h.wait(() => l.VN(e))
            }
            return i.h.wait(() => {
                l.ho(e, f.o1q.HAVEN, {
                    channel: a
                }), b() && l.jD(e)
            }), r = a.id, !0
        }
        return !1
    }
    return _()
}

function O() {
    if (b()) {
        let e = r;
        if (null == e) return;
        let t = A(e);
        u.A.isOpen(t) && i.h.wait(() => l.jD(t));
        return
    }
    let e = r;
    if (null == e) return;
    let t = A(e);
    u.A.isOpen(t) && i.h.wait(() => l.WU(t))
}
class y extends a.A {
    _initialize() {
        p.A.addChangeListener(E), h.A.addChangeListener(E), d.A.addChangeListener(E), g.A.addChangeListener(E), c.A.addChangeListener(O), m.A.addChangeListener(E), s.A.addChangeListener(E)
    }
    _terminate() {
        p.A.removeChangeListener(E), h.A.removeChangeListener(E), d.A.removeChangeListener(E), g.A.removeChangeListener(E), c.A.removeChangeListener(O), m.A.removeChangeListener(E), s.A.removeChangeListener(E)
    }
}
let I = new y