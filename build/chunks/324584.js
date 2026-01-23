/** Chunk was on 77986 **/
/** chunk id: 324584, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => G
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    s = n(311907),
    c = n(397927),
    o = n(442433),
    u = n(793574),
    a = n(688810),
    d = n(915089),
    _ = n(857071),
    g = n(734057),
    f = n(71393),
    h = n(954571),
    v = n(645034),
    j = n(285059),
    x = n(698441),
    p = n(485394),
    m = n(826383),
    y = n(163382),
    b = n(530209),
    A = n(974930),
    O = n(691012),
    N = n(428978),
    C = n(850183),
    E = n(315960),
    k = n(659242),
    I = n(834991),
    S = n(482857),
    P = n(988794),
    w = n(652215),
    T = n(5818);

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function L(e) {
    let {
        guildEvent: t,
        guild: n,
        channel: r,
        onActionTaken: c,
        recurrenceId: o
    } = e, u = (0, x.Fd)(t), a = (0, s.bG)([x.Ay], () => x.Ay.isInterestedInEventRecurrence(t.id, o), [o, t]), d = (0, p.Ay)(t), g = (0, s.bG)([_.A], () => _.A.isLurking(n.id), [n.id]), f = (0, b.e)(null == r ? void 0 : r.id, t.id), h = (0, S.A)({
        guild: n,
        channel: r,
        guildScheduledEvent: t,
        isActive: u,
        recurrenceId: o,
        onActionTaken: c
    }), v = (0, N.Zq)(D({
        isActive: u,
        isUserLurking: g,
        rsvped: a,
        isChannelPublic: f,
        canInvite: d,
        entityType: t.entity_type
    }, h)), j = null != h.onContextMenu ? (0, l.jsx)("div", {
        className: T.Zv,
        children: (0, l.jsx)(N.jD, {
            onClick: h.onContextMenu
        })
    }) : void 0;
    return (0, l.jsx)(i.H7u, {
        leading: j,
        actions: v
    })
}
let G = e => {
    let {
        guildScheduledEventId: t,
        transitionState: _,
        initialRecurrenceId: p,
        onClose: b
    } = e, {
        analyticsLocations: N
    } = (0, a.Ay)(u.A.GUILD_EVENT_MODAL), [S, G] = r.useState(p), R = (0, s.bG)([x.Ay], () => x.Ay.getGuildScheduledEvent(t), [t]), U = null == R ? void 0 : R.id, V = null == R ? void 0 : R.guild_id, M = (0, s.bG)([f.A], () => f.A.getGuild(V), [V]), K = null == R ? void 0 : R.channel_id, H = (0, s.bG)([g.A], () => g.A.getChannel(K), [K]), F = (0, d.GV)(), [B, z] = r.useState(P.al.EVENT_INFO), Q = (0, y.A)(U, S), X = null != R ? (0, O.A)(R) : null, Y = r.useCallback(e => {
        null != X && (0, o.L3)(e, async () => {
            let {
                default: e
            } = await n.e("31658").then(n.bind(n, 151006));
            return t => {
                var n, r;
                return (0, l.jsx)(e, (n = D({}, t), r = r = {
                    imageUrl: X
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, l)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
            }
        })
    }, [X]), Z = (0, m.A)(V, U, S), [q, {
        loading: J,
        error: $
    }] = (0, v.A)(() => j.A.getGuildEventUsers(null == R ? void 0 : R.id, S, V));
    r.useEffect(() => {
        null == R ? b() : h.default.track(w.HAw.OPEN_MODAL, {
            type: P.BV,
            guild_id: R.guild_id
        })
    }, [R, b]);
    let W = r.useRef(null),
        [ee, et] = r.useState(680);
    r.useLayoutEffect(() => {
        let e = new ResizeObserver(e => {
            e.length > 0 && et(e[0].contentRect.width)
        });
        return null != W.current && e.observe(W.current), () => e.disconnect()
    }, [W]);
    let en = r.useRef(null),
        [el, er] = r.useState(0);
    if (r.useLayoutEffect(() => {
            var e, t;
            let n = 16 * ((null == R ? void 0 : R.recurrence_rule) != null);
            er((null != (e = null == en || null == (t = en.current) ? void 0 : t.offsetHeight) ? e : 0) + n)
        }, [en, null == R ? void 0 : R.recurrence_rule]), null == R || null == M) return null;
    let ei = e => {
            e !== B && (e === P.al.RSVP_LIST && q(), z(e))
        },
        es = null != S ? S : (0, A.G3)(R);
    return (0, l.jsx)(a.f5, {
        value: N,
        children: (0, l.jsxs)(i.dWK, {
            transitionState: _,
            size: "lg",
            onClose: b,
            children: [(0, l.jsx)(i.rQ0, {
                title: R.name
            }), (null == R ? void 0 : R.image) != null && null != X && (0, l.jsx)("div", {
                onContextMenu: Y,
                children: (0, l.jsx)(C.A, {
                    source: X,
                    className: T.vK
                })
            }), (0, l.jsx)(i.cwr, {
                controls: (0, l.jsx)(E.A, {
                    selectedTab: B,
                    onTabSelected: ei,
                    userCount: Z
                }),
                children: (0, l.jsx)("div", {
                    className: T.kL,
                    ref: W,
                    children: (0, l.jsxs)(c.tN_, {
                        activeSlide: B,
                        width: ee,
                        centered: !1,
                        children: [(0, l.jsx)(c.q7S, {
                            id: P.al.EVENT_INFO,
                            children: (0, l.jsx)(k.A, {
                                guildEvent: R,
                                guild: M,
                                channel: H,
                                headerId: F,
                                onClose: b,
                                onClickInterestedCount: () => ei(P.al.RSVP_LIST),
                                containerRef: en,
                                recurrenceId: es,
                                setRecurrenceId: G
                            })
                        }), (0, l.jsx)(c.q7S, {
                            id: P.al.RSVP_LIST,
                            children: (0, l.jsx)(I.A, {
                                guildEvent: R,
                                recurrenceId: es,
                                eventUsers: Q,
                                loading: J,
                                containerHeight: el,
                                error: $
                            })
                        })]
                    })
                })
            }), (0, l.jsx)(L, {
                guildEvent: R,
                guild: M,
                channel: H,
                onActionTaken: b,
                recurrenceId: es
            })]
        })
    })
}