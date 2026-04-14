/** chunk id: 986880 params = (module,exports,require) **/
let i;
n.d(t, {
    Ay: () => N
});
var l = n(73153),
    r = n(31728),
    a = n(272355),
    s = n(87001),
    o = n(734057),
    d = n(186111),
    c = n(334463),
    u = n(383501),
    A = n(309010),
    h = n(967198),
    _ = n(977997),
    m = n(998740),
    g = n(652215);

function p(e) {
    return `haven:${e}`
}

function E() {
    let e = i;
    if (null == e) return !1;
    let t = p(e);
    if (!c.A.isOpen(t)) return !1;
    let n = c.A.pipHavenWindow;
    if (null == n || n.id !== t) return i = null, !1;
    l.h.wait(() => r.VN(t)), i = null
}

function I() {
    return d.A.hasLayers()
}

function f() {
    let e, t, n = u.A.getChannelId(),
        a = null != n ? o.A.getChannel(n) : null;
    if (e = u.A.getChannelId(), t = A.A.getChannelId(), null == e || !m.A.isUserConnected(e) || e === t || s.A.getWindowOpen(g.MLl.CHANNEL_CALL_POPOUT) || 0) return E();
    if (null != a && m.A.isUserConnected(a.id)) {
        if (i !== a.id) {
            let e = p(a.id);
            if (c.A.isOpen(e)) return !1;
            if (null != i) {
                let e = i;
                l.h.wait(() => r.VN(e))
            }
            return l.h.wait(() => {
                r.ho(e, g.o1q.HAVEN, {
                    channel: a
                }), I() && r.jD(e)
            }), i = a.id, !0
        }
        return !1
    }
    return E()
}

function C() {
    if (I()) {
        let e = (void 0) ?? i;
        if (null == e) return;
        let t = p(e);
        c.A.isOpen(t) && l.h.wait(() => r.jD(t));
        return
    }
    let e = (void 0) ?? i;
    if (null == e) return;
    let t = p(e);
    c.A.isOpen(t) && l.h.wait(() => r.WU(t))
}
class T extends a.A {
    _initialize() {
        A.A.addChangeListener(f), h.A.addChangeListener(f), u.A.addChangeListener(f), _.A.addChangeListener(f), d.A.addChangeListener(C), m.A.addChangeListener(f), s.A.addChangeListener(f)
    }
    _terminate() {
        A.A.removeChangeListener(f), h.A.removeChangeListener(f), u.A.removeChangeListener(f), _.A.removeChangeListener(f), d.A.removeChangeListener(C), m.A.removeChangeListener(f), s.A.removeChangeListener(f)
    }
}
let N = new T