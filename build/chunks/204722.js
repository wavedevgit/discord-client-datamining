/** Chunk was on 78528 **/
/** chunk id: 204722, original params: e,t,n (module,exports,require) **/
n.d(t, {
    W: () => R,
    f: () => D
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(141628),
    o = n(554146),
    c = n(342494),
    u = n(397927),
    d = n(298990),
    p = n(646865),
    h = n(833349),
    f = n(869003),
    g = n(688810),
    m = n(362490),
    b = n(384059),
    A = n(359348),
    y = n(379848),
    _ = n(625180),
    O = n(338771),
    j = n(453774),
    v = n(44724),
    x = n(849134),
    E = n(95701),
    C = n(309010),
    S = n(954571),
    I = n(42473),
    N = n(652215),
    T = n(49999),
    P = n(985018),
    w = n(275540);

function R(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (t.application_id === e.id || (null == (r = e.linkedGames) ? void 0 : r.some(e => e.id === t.application_id))) && t.type === N.$pd.PLAYING && (0, h.A)(t, N.jUm.JOIN)
    }
    return !1
}
let D = l.memo(function(e) {
        var t, i;
        let {
            stream: a,
            canGoLive: o,
            isStreaming: h,
            channel: y,
            canStream: v,
            runningGame: x,
            embeddedActivity: T,
            frame: D,
            activity: k,
            application: G,
            analyticsContext: U,
            inviteButtonRef: B,
            accountLinkButtonRef: V,
            startAuthorization: F,
            canStartAuthorization: H,
            hasAlreadyLinked: K,
            connectionApp: W
        } = e, {
            parentAnalyticsLocation: z,
            analyticsLocations: Y
        } = (0, g.Ay)(), q = (0, j.A)(G, "rtc-activity-panel"), X = R(G, k, T), J = l.useCallback(() => {
            var e;
            s()(null != k, "Received null activity"), S.default.track(N.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "invite_to_game",
                game_id: null != (e = null == x ? void 0 : x.id) ? e : null,
                application_id: k.application_id
            }), (0, b.X)(z, b.O.INVITE), S.default.track(N.HAw.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: k.application_id,
                location: U.location
            }), (0, d.qf)(k, !1)
        }, [k, U, z, x]), Q = l.useCallback((e, t) => () => {
            (0, b.X)(z, b.O.LEAVE_ACTIVITY), f.A.leaveActivity({
                location: t,
                applicationId: e,
                showFeedback: !0
            })
        }, [z]), Z = l.useCallback(e => () => {
            (0, b.X)(z, b.O.LEAVE_ACTIVITY), _.A.stopFrame({
                applicationId: e
            })
        }, [z]), $ = l.useCallback(() => {
            (0, O.A)(a)
        }, [a]), ee = l.useCallback(() => {
            (0, u.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
                return t => {
                    var n, l;
                    return (0, r.jsx)(e, (n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, t), l = l = {
                        sourcePID: null == x ? void 0 : x.pid,
                        selectSource: null != C.A.getVoiceChannelId(),
                        analyticsLocations: Y
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                    }), n))
                }
            })
        }, [x, Y]), et = l.useRef(null), [en, er] = l.useState(!1);
        l.useEffect(() => () => {
            null != et.current && clearTimeout(et.current)
        }, []), l.useEffect(() => {
            K && (er(!1), null != et.current && (clearTimeout(et.current), et.current = null))
        }, [K]);
        let el = (null == q ? void 0 : q.guildId) == null || null == G ? null : (0, r.jsx)(L, {
                guildId: q.guildId,
                applicationId: q.id
            }),
            ei = function() {
                let e, t, n;
                if (null == x && null != T && !(0, p.f)() || !h && !o) return null;
                let l = null;
                return h ? (e = !1, t = () => {
                    $(), (0, b.X)(z, b.O.STREAM, !1)
                }, n = u.GT3, l = P.intl.string(P.t.S5anIc)) : v ? (e = !1, t = () => {
                    ee(), (0, b.X)(z, b.O.STREAM, !0)
                }, n = u.Fzq, l = null != x ? P.intl.formatToPlainString(P.t.AB5gTy, {
                    game: x.name
                }) : P.intl.string(P.t.FeUKeA)) : (e = !0, t = null, n = u.Fzq, null != y && (0, E.gV)(y.type) && (l = P.intl.string(P.t.uQn9B8))), (0, r.jsx)("div", {
                    className: w.IF,
                    children: (0, r.jsx)(I.A, {
                        tooltipText: l,
                        disabled: e,
                        onClick: t,
                        icon: n
                    })
                })
            }(),
            es = X && null == T ? (0, r.jsx)(I.A, {
                ref: B,
                tooltipText: P.intl.string(P.t["hC/Zey"]),
                onClick: J,
                icon: u.DpX
            }) : null,
            ea = null == T ? null : (0, r.jsx)(I.A, {
                tooltipText: P.intl.string(P.t["R/FK4A"]),
                onClick: Q(T.applicationId, T.location),
                icon: u.oLl
            }),
            eo = null == D ? null : (0, r.jsx)(I.A, {
                tooltipText: P.intl.string(P.t["R/FK4A"]),
                onClick: Z(D.applicationId),
                icon: u.oLl
            }),
            ec = null == a ? null : (0, r.jsx)(A.A, {}),
            eu = !H || K ? null : (0, r.jsx)(M, {
                runningGame: x,
                startAuthorization: () => {
                    F({
                        analyticsLocations: Y
                    }) === m._M.RPC && (er(!0), null != et.current && clearTimeout(et.current), et.current = setTimeout(() => {
                        er(!1)
                    }, 9e4))
                },
                connectionApp: W,
                ref: V
            }),
            ed = !H || K ? null : (0, r.jsx)(c.AM, {
                title: P.intl.string(P.t.ULvRFd),
                body: P.intl.string(P.t["HJJDr+"]),
                targetElementRef: V,
                position: "top",
                align: "center",
                caretConfig: {
                    align: "center"
                },
                shouldShow: en,
                onRequestClose: () => {
                    er(!1), null != et.current && (clearTimeout(et.current), et.current = null)
                }
            });
        return null == ei && null == es && null == ea && null == eo && null == eu && null == el ? null : (0, r.jsxs)("div", {
            className: w.o1,
            children: [null != (t = null != el ? el : eu) ? t : es, ei, null != (i = null != ea ? ea : eo) ? i : ec, ed]
        })
    }),
    M = l.forwardRef(function(e, t) {
        let {
            runningGame: n,
            startAuthorization: l,
            connectionApp: i
        } = e;
        return (0, r.jsx)(I.A, {
            ref: t,
            onClick: () => {
                var e, t;
                S.default.track(N.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == i ? void 0 : i.id) ? t : null
                }), l()
            },
            icon: a.A,
            tooltipText: P.intl.string(P.t.sbdnpw)
        })
    });

function L(e) {
    let {
        applicationId: t,
        guildId: n
    } = e, i = l.useRef(null);
    l.useEffect(() => {
        S.default.track(N.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, {
            application_id: t
        })
    }, [t]);
    let [s, a] = (0, y.kn)([o.M.GAME_SHOP_RTC_POPOVER], T.m.ACCOUNT_NAME_ZONE, !0), c = l.useCallback(() => {
        (0, v.X)({
            guildId: n
        })
    }, [n]), d = l.useCallback(() => {
        (0, v.default)({
            guildId: n
        }), a(T.i.USER_DISMISS)
    }, [n, a]), p = l.useCallback(() => {
        S.default.track(N.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, {
            application_id: t
        }), d()
    }, [t, d]), h = l.useCallback(() => {
        a(T.i.USER_DISMISS)
    }, [a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(I.A, {
            tooltipText: P.intl.string(P.t.vyaWs7),
            onClick: p,
            onMouseDown: c,
            icon: u.U1X,
            ref: i
        }), s === o.M.GAME_SHOP_RTC_POPOVER ? (0, r.jsx)(x.A, {
            onActionClick: d,
            onRequestClose: h,
            targetElementRef: i,
            position: "top",
            align: "center",
            caretConfig: {
                align: "center"
            }
        }) : null]
    })
}