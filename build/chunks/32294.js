/** chunk id: 32294 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => v
});
var r = n(73153),
    a = n(31728),
    l = n(272355),
    s = n(933958),
    o = n(313961),
    d = n(652896),
    c = n(869146),
    u = n(616356),
    A = n(734057),
    h = n(186111),
    _ = n(430452),
    m = n(334463),
    p = n(383501),
    g = n(309010),
    E = n(967198),
    I = n(977997),
    f = n(652215),
    C = n(731854);

function T() {
    let e = i;
    if (null == e || !m.A.isOpen(e)) return !1;
    r.h.wait(() => a.VN(e)), p.A.getRTCConnection()?.setPipOpen(!1), i = null
}

function N() {
    let e = p.A.getChannelId(),
        t = i === e;
    if (function() {
            let e = p.A.getChannelId(),
                t = g.A.getChannelId();
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
    return !(null == n || m.A.isOpen(e)) && (r.h.wait(() => a.ho(n.id, f.o1q.VIDEO, {
        channel: n
    })), p.A.getRTCConnection()?.setPipOpen(!0), void(i = e))
}
class S extends l.A {
    _initialize() {
        g.A.addChangeListener(N), E.A.addChangeListener(N), p.A.addChangeListener(N), I.A.addChangeListener(N), h.A.addChangeListener(N), u.A.addChangeListener(N), c.A.addChangeListener(N), _.Ay.addChangeListener(N), s.Ay.addChangeListener(N), o.A.addChangeListener(N)
    }
    _terminate() {
        g.A.removeChangeListener(N), E.A.removeChangeListener(N), p.A.removeChangeListener(N), I.A.removeChangeListener(N), h.A.removeChangeListener(N), u.A.removeChangeListener(N), c.A.removeChangeListener(N), _.Ay.removeChangeListener(N), s.Ay.removeChangeListener(N), o.A.removeChangeListener(N)
    }
}
let v = new S