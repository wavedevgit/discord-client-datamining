/** chunk id: 237170, original params: t,e,n (module,exports,require) **/
n.d(e, {
    G: () => x,
    default: () => g
}), n(896048);
var r, i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(544231),
    o = n(665909),
    c = n(464838),
    d = n(120340),
    u = n(196645),
    E = n(985018),
    _ = n(705656);

function h(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r
        })
    }
    return t
}

function A(t, e) {
    return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n.push.apply(n, r)
        }
        return n
    })(Object(e)).forEach(function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
    }), t
}
var x = ((r = {})[r.INTRO = 0] = "INTRO", r[r.SAFETY_TIPS = 1] = "SAFETY_TIPS", r[r.TAKE_ACTION = 2] = "TAKE_ACTION", r);
let g = t => {
    let {
        warningId: e,
        warningType: n,
        senderId: r,
        modalProps: x,
        channelId: g
    } = t, [T, m] = s.useState(0), p = s.useMemo(() => ({
        channelId: g,
        senderId: r,
        warningId: e,
        warningType: n,
        isNudgeWarning: !1
    }), [g, r, e, n]);
    s.useEffect(() => {
        (0, o.QF)(A(h({}, p), {
            viewName: o.gN.SAFETY_TAKEOVER_MODAL
        }))
    }, [p]);
    let S = s.useCallback(t => {
            (0, o._$)(A(h({}, p), {
                cta: t
            }))
        }, [p]),
        [f, b] = s.useState(!1);

    function O(t) {
        m(t)
    }
    return (0, i.jsxs)(a.EOs, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [(0, i.jsx)("div", {
            className: _.kL,
            children: (0, i.jsxs)(a.tN_, {
                width: 440,
                activeSlide: T,
                centered: !1,
                overflow: "visible",
                contentDisplay: "flex",
                children: [(0, i.jsx)(a.q7S, {
                    id: 0,
                    children: (0, i.jsx)(c.A, {
                        warningId: e,
                        senderId: r,
                        trackAnalyticsEvent: S,
                        onNavigate: O
                    })
                }), (0, i.jsx)(a.q7S, {
                    id: 1,
                    children: (0, i.jsx)(d.A, {
                        warningId: e,
                        senderId: r,
                        trackAnalyticsEvent: S
                    })
                }), (0, i.jsx)(a.q7S, {
                    id: 2,
                    children: (0, i.jsx)(u.A, {
                        warningId: e,
                        senderId: r,
                        trackAnalyticsEvent: S,
                        channelId: g,
                        hasReported: f,
                        onReport: function() {
                            b(!0)
                        }
                    })
                })]
            })
        }), (0, i.jsxs)(a.jlY, {
            "data-migration-pending": !0,
            className: _.qr,
            children: [(0, i.jsx)(a.QWc, {
                variant: "secondary",
                size: "sm",
                text: E.intl.string(E.t.cpT0Cq),
                onClick: function() {
                    x.onClose(), (0, l.xi)(g, [e]), S(o.Wm.USER_TAKEOVER_MODAL_DISMISS)
                },
                textVariant: "text-sm/normal"
            }), 0 !== T && (0, i.jsx)(a.QWc, {
                variant: "secondary",
                size: "sm",
                text: E.intl.string(E.t["13/7kX"]),
                textVariant: "text-sm/normal",
                onClick: () => O(0)
            })]
        })]
    })
}