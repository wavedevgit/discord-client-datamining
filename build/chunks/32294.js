/** chunk id: 32294 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => x
});
var l = n(73153),
    r = n(31728),
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
    l.h.wait(() => r.VN(e)), g.A.getRTCConnection()?.setPipOpen(!1), i = null
}

function S() {
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
    return !(null == n || m.A.isOpen(e)) && (l.h.wait(() => r.ho(n.id, f.o1q.VIDEO, {
        channel: n
    })), g.A.getRTCConnection()?.setPipOpen(!0), void(i = e))
}
class N extends a.A {
    _initialize() {
        p.A.addChangeListener(S), E.A.addChangeListener(S), g.A.addChangeListener(S), I.A.addChangeListener(S), h.A.addChangeListener(S), u.A.addChangeListener(S), c.A.addChangeListener(S), _.Ay.addChangeListener(S), s.Ay.addChangeListener(S), o.A.addChangeListener(S)
    }
    _terminate() {
        p.A.removeChangeListener(S), E.A.removeChangeListener(S), g.A.removeChangeListener(S), I.A.removeChangeListener(S), h.A.removeChangeListener(S), u.A.removeChangeListener(S), c.A.removeChangeListener(S), _.Ay.removeChangeListener(S), s.Ay.removeChangeListener(S), o.A.removeChangeListener(S)
    }
}
let x = new N