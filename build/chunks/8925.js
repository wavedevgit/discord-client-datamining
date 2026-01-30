/** chunk id: 8925, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => S,
    ME: () => O,
    c5: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(101555),
    d = n(961350),
    f = n(570287),
    p = n(679492),
    _ = n(518477),
    h = n(985018),
    m = n(55837);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let O = 2700,
    v = "> -# *",
    A = {
        [_.dS.AVATAR]: () => h.intl.string(h.t["fEUP/i"]),
        [_.dS.STATUS]: () => h.intl.string(h.t.TKdBC8),
        [_.dS.ACTIVITY]: () => h.intl.string(h.t.bSe71F)
    },
    I = {
        [_.dS.AVATAR]: () => h.intl.string(h.t.xvN0fV),
        [_.dS.STATUS]: () => h.intl.string(h.t["C/vzS7"]),
        [_.dS.ACTIVITY]: () => h.intl.string(h.t.ObfsSj)
    };

function S(e) {
    let {
        user: t,
        sourceType: n,
        isVisible: a,
        isExpandable: g,
        interactionSourceId: y,
        targetRef: O,
        onAction: v,
        renderMoreButtonPopout: S
    } = e, T = i.useRef(null), C = (0, s.bG)([d.default], () => d.default.getId() === t.id), N = (0, f.A)(t.id), {
        onInteraction: w,
        onInteractionPopoutTargetRefChange: R
    } = (0, p.Pq)();
    if (t.bot || C || !N) return null;
    let P = () => {
            R(O), n === _.dS.AVATAR ? v({
                action: "PRESS_REACT_AVATAR"
            }) : n === _.dS.STATUS ? v({
                action: "PRESS_REACT_CUSTOM_STATUS"
            }) : v({
                action: "PRESS_REACT_ACTIVITY"
            }), null == w || w({
                interactionType: _.AQ.REACT,
                interactionSource: n,
                interactionSourceId: y
            })
        },
        D = () => {
            R(O), n === _.dS.AVATAR ? v({
                action: "PRESS_REPLY_AVATAR"
            }) : n === _.dS.STATUS ? v({
                action: "PRESS_REPLY_CUSTOM_STATUS"
            }) : v({
                action: "PRESS_REPLY_ACTIVITY"
            }), null == w || w({
                interactionType: _.AQ.REPLY,
                interactionSource: n,
                interactionSourceId: y
            })
        };
    return (0, r.jsxs)(u.Ay, {
        className: o()(m.oO, {
            [m.RK]: a,
            [m.lu]: g,
            [m.U7]: n === _.dS.STATUS,
            [m.nL]: n === _.dS.AVATAR,
            [m.bt]: n === _.dS.ACTIVITY
        }),
        children: [(0, r.jsx)(l.m, {
            asContainer: !0,
            text: h.intl.string(h.t.nhaI4b),
            shouldShow: a,
            delay: 0,
            ariaHidden: !0,
            children: (0, r.jsx)(u.$n, {
                onClick: P,
                className: m.x6,
                "aria-label": A[n](),
                "aria-haspopup": "dialog",
                children: (0, r.jsx)(c.nm2, {
                    size: "xs",
                    className: m.Kk
                })
            })
        }), (0, r.jsx)(l.m, {
            asContainer: !0,
            text: h.intl.string(h.t.RmDYKK),
            shouldShow: a,
            delay: 0,
            ariaHidden: !0,
            children: (0, r.jsx)(u.$n, {
                onClick: D,
                className: m.x6,
                "aria-label": I[n](),
                "aria-haspopup": "dialog",
                children: (0, r.jsx)(c.W4J, {
                    size: "xs",
                    className: m.Kk
                })
            })
        }), null == S ? void 0 : S(e => {
            let t = () => {
                var t;
                R(T), null == (t = e.onClick) || t.call(e)
            };
            return (0, r.jsx)(l.m, {
                asContainer: !0,
                text: h.intl.string(h.t["UKOtz+"]),
                shouldShow: a,
                delay: 0,
                ariaHidden: !0,
                children: (0, r.jsx)(u.$n, b(E({
                    ref: T
                }, e), {
                    onClick: t,
                    className: m.x6,
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    children: (0, r.jsx)(c.jNK, {
                        size: "xs",
                        className: m.Kk
                    })
                }))
            })
        })]
    })
}