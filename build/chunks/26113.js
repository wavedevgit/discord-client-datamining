/** Chunk was on web.js **/
/** chunk id: 26113, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(770178),
    c = n(313961),
    u = n(47167),
    d = n(28390),
    f = n(461782),
    p = n(447404),
    _ = n(271195),
    h = n(994500),
    m = n(287809),
    g = n(732777),
    E = n(709382),
    y = n(185014),
    b = n(204137),
    O = n(976092);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let T = e => {
    let {
        channel: t,
        width: n
    } = e, a = (0, s.bG)([c.A], () => c.A.getFilteredParticipants(t.id)), v = (0, g.A)(t.id), I = i.useMemo(() => (0, u.m1)(t, m.default, h.A), [t]), T = (0, d.A)(t), C = n * (E.i.height / E.i.width), N = 1156, w = 1050, [R, P] = i.useState(.65), [D, L] = i.useState({
        x: 0,
        y: 0
    }), x = (0, l.w)(e => {
        let {
            contentRect: t
        } = e, n = Math.max(t.width / E.i.width * 1.5, t.height / E.i.height * 1.5), r = t.width / 2 - N * n, i = t.height / 2 - w * n;
        P(n), L({
            x: r,
            y: i
        })
    });
    return (0, r.jsx)(f.Ay, {
        timeout: 2e3,
        children: e => (0, r.jsx)(_.A, S(A({
            title: I,
            backgroundKey: t.id,
            screenMessage: null,
            onJumpToChannel: T,
            preventIdleComponent: p.A,
            width: n,
            className: O.a8
        }, e), {
            children: (0, r.jsx)("div", {
                ref: x,
                className: b.n,
                style: {
                    width: n,
                    height: C
                },
                children: (0, r.jsx)("div", {
                    className: o()(y.VT, y.rh),
                    style: {
                        transform: "translate(".concat(D.x, "px, ").concat(D.y, "px) scale(").concat(R, ")")
                    },
                    children: (0, r.jsx)(E.A, {
                        roomSeats: v.seats,
                        roomParticipants: v.participants,
                        participants: a,
                        channel: t,
                        idle: e.idle,
                        showAmbientEffects: !1,
                        enableAnimations: !1,
                        skipNewUserEducation: !0,
                        disableInteractions: !0
                    })
                })
            })
        }))
    })
}