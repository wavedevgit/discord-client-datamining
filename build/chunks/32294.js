/** chunk id: 32294 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => x
});
var r = n(73153),
    l = n(31728),
    a = n(272355),
    s = n(933958),
    o = n(313961),
    d = n(652896),
    c = n(869146),
    u = n(616356),
    A = n(734057),
    h = n(186111),
    _ = n(430452),
    m = n(334463),
    g = n(383501),
    p = n(309010),
    E = n(967198),
    I = n(977997),
    f = n(652215),
    C = n(731854);

function T() {
    let e = i;
    if (null == e || !m.A.isOpen(e)) return !1;
    r.h.wait(() => l.VN(e)), g.A.getRTCConnection()?.setPipOpen(!1), i = null
}

function N() {
    let e = g.A.getChannelId(),
        t = i === e;
    if (function() {
            let e = g.A.getChannelId(),
                t = p.A.getChannelId();
            if (!_.Ay.supports(C.O5.VIDEO) || c.A.getWindowOpen(f.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && u.A.getAllActiveStreams().some(t => !o.A.isParticipantPoppedOut(e, (0, d._z)(t)));
            if (!(null != e && Object.values(I.A.getVideoVoiceStatesForChannel(e)).some(t => {
                    let {
                        userId: n
                    } = t;
                    return !_.Ay.isLocalVideoDisabled(n) && !o.A.isParticipantPoppedOut(e, n)
                }) || n)) return !0;
            let i = h.A.hasLayers();
            return !(i && h.A.getLayers().includes(f.zgK.RTC_DEBUG)) && (!!i || e === t)
        }()) return T();
    if (t || T(), null == e) return !1;
    let n = A.A.getChannel(e);
    return !(null == n || m.A.isOpen(e)) && (r.h.wait(() => l.ho(n.id, f.o1q.VIDEO, {
        channel: n
    })), g.A.getRTCConnection()?.setPipOpen(!0), void(i = e))
}
class S extends a.A {
    _initialize() {
        p.A.addChangeListener(N), E.A.addChangeListener(N), g.A.addChangeListener(N), I.A.addChangeListener(N), h.A.addChangeListener(N), u.A.addChangeListener(N), c.A.addChangeListener(N), _.Ay.addChangeListener(N), s.Ay.addChangeListener(N), o.A.addChangeListener(N)
    }
    _terminate() {
        p.A.removeChangeListener(N), E.A.removeChangeListener(N), g.A.removeChangeListener(N), I.A.removeChangeListener(N), h.A.removeChangeListener(N), u.A.removeChangeListener(N), c.A.removeChangeListener(N), _.Ay.removeChangeListener(N), s.Ay.removeChangeListener(N), o.A.removeChangeListener(N)
    }
}
let x = new S