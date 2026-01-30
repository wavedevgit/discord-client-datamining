/** chunk id: 31995, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(409626),
    f = n(611656),
    p = n(52129),
    _ = n(734057),
    h = n(760751),
    m = n(486020),
    g = n(332173),
    E = n(936755),
    y = n(985018),
    b = n(670567);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function I(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let S = function(e) {
    let {
        gameId: t,
        channelId: a
    } = e, O = i.useRef(null), A = (0, s.bG)([h.A], () => h.A.getDetectableGame(t)), S = (0, s.bG)([_.A], () => _.A.getChannel(a)), T = null != S ? S.getGuildId() : null, C = null != A ? e => {
        (0, u.L3)(e, async () => {
            let {
                default: e
            } = await n.e("24843").then(n.bind(n, 348902));
            return t => (0, r.jsx)(e, I(v({}, t), {
                game: A,
                guildId: T
            }))
        })
    } : void 0, N = null != A ? (0, r.jsx)("img", {
        alt: "",
        className: o()(b.Kk, b.FP),
        src: m.Ay.getApplicationIconURL({
            id: A.id,
            icon: A.icon,
            size: 32
        })
    }) : null, w = (0, f.Ay)({
        applicationId: t,
        location: "GameMention",
        source: d.Ob.GameMention,
        trackEntryPointImpression: !1,
        autoTrackExposure: !1
    }), R = i.useCallback(() => {
        (0, c.mMO)(async () => {
            let {
                default: e
            } = await n.e("56466").then(n.bind(n, 188841));
            return t => (0, r.jsx)(e, v({}, t))
        })
    }, []), P = null != A ? "@game ".concat(A.name) : void 0;
    return (0, r.jsx)(p.A, {
        applicationId: t,
        targetElementRef: O,
        source: d.Ob.GameMention,
        children: e => {
            var n;
            return (0, r.jsx)(l.m, {
                asContainer: !0,
                tag: "span",
                text: P,
                "aria-label": P,
                delay: 750,
                children: (0, r.jsxs)(g.A, I(v({
                    onContextMenu: C,
                    ref: O
                }, e), {
                    onClick: n => {
                        if (w.shouldOpenGameProfile && null != t) {
                            var r;
                            null == (r = e.onClick) || r.call(e, n)
                        } else R()
                    },
                    children: [(0, r.jsx)(E.A, {
                        children: N
                    }), (0, r.jsx)("span", {
                        className: b.UU,
                        children: null != (n = null == A ? void 0 : A.name) ? n : y.intl.string(y.t["11pdXZ"])
                    })]
                }))
            })
        }
    })
}