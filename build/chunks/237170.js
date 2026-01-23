/** Chunk was on 18108 **/
/** chunk id: 237170, original params: t,e,n (module,exports,require) **/
n.d(e, {
    G: () => A,
    default: () => g
}), n(896048);
var r, i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(544231),
    c = n(665909),
    o = n(464838),
    d = n(120340),
    u = n(196645),
    _ = n(985018),
    x = n(705656);

function m(t) {
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

function h(t, e) {
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
var A = ((r = {})[r.INTRO = 0] = "INTRO", r[r.SAFETY_TIPS = 1] = "SAFETY_TIPS", r[r.TAKE_ACTION = 2] = "TAKE_ACTION", r);
let g = t => {
    let {
        warningId: e,
        warningType: n,
        senderId: r,
        modalProps: A,
        channelId: g
    } = t, [O, p] = s.useState(0), j = s.useMemo(() => ({
        channelId: g,
        senderId: r,
        warningId: e,
        warningType: n,
        isNudgeWarning: !1
    }), [g, r, e, n]);
    s.useEffect(() => {
        (0, c.QF)(h(m({}, j), {
            viewName: c.gN.SAFETY_TAKEOVER_MODAL
        }))
    }, [j]);
    let b = s.useCallback(t => {
            (0, c._$)(h(m({}, j), {
                cta: t
            }))
        }, [j]),
        [v, E] = s.useState(!1);

    function T(t) {
        p(t)
    }
    return (0, i.jsxs)(a.EOs, {
        "data-migration-pending": !0,
        transitionState: A.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [(0, i.jsx)("div", {
            className: x.kL,
            children: (0, i.jsxs)(a.tN_, {
                width: 440,
                activeSlide: O,
                centered: !1,
                overflow: "visible",
                contentDisplay: "flex",
                children: [(0, i.jsx)(a.q7S, {
                    id: 0,
                    children: (0, i.jsx)(o.A, {
                        warningId: e,
                        senderId: r,
                        trackAnalyticsEvent: b,
                        onNavigate: T
                    })
                }), (0, i.jsx)(a.q7S, {
                    id: 1,
                    children: (0, i.jsx)(d.A, {
                        warningId: e,
                        senderId: r,
                        trackAnalyticsEvent: b
                    })
                }), (0, i.jsx)(a.q7S, {
                    id: 2,
                    children: (0, i.jsx)(u.A, {
                        warningId: e,
                        senderId: r,
                        trackAnalyticsEvent: b,
                        channelId: g,
                        hasReported: v,
                        onReport: function() {
                            E(!0)
                        }
                    })
                })]
            })
        }), (0, i.jsxs)(a.jlY, {
            "data-migration-pending": !0,
            className: x.qr,
            children: [(0, i.jsx)(a.QWc, {
                variant: "secondary",
                size: "sm",
                text: _.intl.string(_.t.cpT0Cq),
                onClick: function() {
                    A.onClose(), (0, l.xi)(g, [e]), b(c.Wm.USER_TAKEOVER_MODAL_DISMISS)
                },
                textVariant: "text-sm/normal"
            }), 0 !== O && (0, i.jsx)(a.QWc, {
                variant: "secondary",
                size: "sm",
                text: _.intl.string(_.t["13/7kX"]),
                textVariant: "text-sm/normal",
                onClick: () => T(0)
            })]
        })]
    })
}