/** Chunk was on 21738 **/
/** chunk id: 32294, original params: e,t,n (module,exports,require) **/
let r;
n.d(t, {
    A: () => S
});
var i = n(73153),
    l = n(31728),
    a = n(272355),
    s = n(933958),
    o = n(313961),
    c = n(652896),
    u = n(869146),
    d = n(616356),
    p = n(734057),
    h = n(186111),
    g = n(430452),
    f = n(334463),
    m = n(383501),
    A = n(309010),
    _ = n(967198),
    b = n(977997),
    E = n(652215),
    O = n(731854);

function y() {
    var e;
    let t = r;
    if (null == t || !f.A.isOpen(t)) return !1;
    i.h.wait(() => l.VN(t)), null == (e = m.A.getRTCConnection()) || e.setPipOpen(!1), r = null
}

function I() {
    var e;
    let t = m.A.getChannelId(),
        n = r === t;
    if (function() {
            let e = m.A.getChannelId(),
                t = A.A.getChannelId();
            if (!g.A.supports(O.O5.VIDEO) || u.A.getWindowOpen(E.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && d.A.getAllActiveStreams().some(t => !o.A.isParticipantPoppedOut(e, (0, c._z)(t)));
            if (!(null != e && Object.values(b.A.getVideoVoiceStatesForChannel(e)).some(t => {
                    let {
                        userId: n
                    } = t;
                    return !g.A.isLocalVideoDisabled(n) && !o.A.isParticipantPoppedOut(e, n)
                }) || n)) return !0;
            let r = h.A.hasLayers();
            return !(r && h.A.getLayers().includes(E.zgK.RTC_DEBUG)) && (!!r || e === t)
        }()) return y();
    if (n || y(), null == t) return !1;
    let a = p.A.getChannel(t);
    return !(null == a || f.A.isOpen(t)) && (i.h.wait(() => l.ho(a.id, E.o1q.VIDEO, {
        channel: a
    })), null == (e = m.A.getRTCConnection()) || e.setPipOpen(!0), void(r = t))
}
class v extends a.A {
    _initialize() {
        A.A.addChangeListener(I), _.A.addChangeListener(I), m.A.addChangeListener(I), b.A.addChangeListener(I), h.A.addChangeListener(I), d.A.addChangeListener(I), u.A.addChangeListener(I), g.A.addChangeListener(I), s.Ay.addChangeListener(I), o.A.addChangeListener(I)
    }
    _terminate() {
        A.A.removeChangeListener(I), _.A.removeChangeListener(I), m.A.removeChangeListener(I), b.A.removeChangeListener(I), h.A.removeChangeListener(I), d.A.removeChangeListener(I), u.A.removeChangeListener(I), g.A.removeChangeListener(I), s.Ay.removeChangeListener(I), o.A.removeChangeListener(I)
    }
}
let S = new v