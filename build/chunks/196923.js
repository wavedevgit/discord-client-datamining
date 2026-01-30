/** chunk id: 196923, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
});
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n.n(a),
    s = n(330140),
    l = n(311907),
    c = n(397927),
    u = n(933958),
    d = n(587500),
    f = n(400492),
    p = n(312671),
    _ = n(803224),
    h = n(309010),
    m = n(351906),
    g = n(503509),
    E = n(5867),
    y = n(235079);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            b(e, t, n[t])
        })
    }
    return e
}

function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function A(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let I = {
        transform: "scale(0.7)",
        opacity: 0
    },
    S = {
        transform: "scale(1)",
        opacity: 1
    };

function T() {
    return 500 !== o().random(1, 1e3) ? "call_ringing" : o().sample(["call_ringing_beat", "call_ringing_snow_halation"])
}

function C() {
    let e = (0, l.yK)([g.A, h.A, u.Ay], () => g.A.getIncomingCalls().filter(e => {
            let {
                channel: t
            } = e, n = h.A.getChannelId() === t.id, r = null == t.guild_id && n, i = u.Ay.getConnectedActivityChannelId() === t.id && h.A.getVoiceChannelId() !== t.id && u.Ay.getActivityPanelMode() === E.Gd.PANEL;
            return !r || i
        })),
        t = (0, l.bG)([g.A], () => g.A.hasIncomingCalls()),
        n = (0, l.bG)([_.A], () => _.A.isSoundDisabled("call_ringing")),
        a = (0, l.bG)([m.A], () => m.A.disableSounds),
        o = (0, l.bG)([p.A], () => p.A.getSoundpack()),
        b = i.useRef(!1),
        v = (0, s.A)(() => {
            let e = "call_ringing";
            return o === y.i.CLASSIC ? (0, f.Qh)(T(), e) : (0, f.aN)("call_ringing", o)
        }, [o]);
    return i.useEffect(() => () => {
        v.stop()
    }, [v]), i.useEffect(() => {
        if (a || n) {
            b.current && (v.stop(), b.current = !1);
            return
        }
        t && !b.current ? (v.loop(), b.current = !0) : !t && b.current && (v.stop(), b.current = !1)
    }, [n, a, t, v]), (0, c.pnh)(e, {
        keys: e => {
            var t;
            return null == (t = e.channel) ? void 0 : t.id
        },
        enter: {
            from: I,
            to: S
        },
        leave: I,
        config: {
            mass: 1,
            tension: 500,
            friction: 18,
            clamp: !0
        }
    })((e, t) => (0, r.jsx)(d.A, A(O({}, t), {
        animatedStyle: e
    })))
}
let N = i.memo(C)