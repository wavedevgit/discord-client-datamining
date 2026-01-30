/** chunk id: 324584, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => R
}), t(896048);
var l = t(627968),
    i = t(64700),
    r = t(158954),
    d = t(311907),
    s = t(397927),
    a = t(442433),
    o = t(793574),
    c = t(688810),
    u = t(915089),
    _ = t(857071),
    g = t(734057),
    f = t(71393),
    v = t(954571),
    p = t(645034),
    h = t(285059),
    b = t(698441),
    m = t(485394),
    x = t(826383),
    j = t(163382),
    y = t(530209),
    A = t(974930),
    I = t(691012),
    N = t(428978),
    C = t(850183),
    O = t(315960),
    k = t(659242),
    E = t(834991),
    S = t(482857),
    P = t(988794),
    w = t(652215),
    D = t(5818);

function T(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
            var l;
            l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = l
        })
    }
    return e
}

function L(e) {
    let {
        guildEvent: n,
        guild: t,
        channel: i,
        onActionTaken: s,
        recurrenceId: a
    } = e, o = (0, b.Fd)(n), c = (0, d.bG)([b.Ay], () => b.Ay.isInterestedInEventRecurrence(n.id, a), [a, n]), u = (0, m.Ay)(n), g = (0, d.bG)([_.A], () => _.A.isLurking(t.id), [t.id]), f = (0, y.e)(null == i ? void 0 : i.id, n.id), v = (0, S.A)({
        guild: t,
        channel: i,
        guildScheduledEvent: n,
        isActive: o,
        recurrenceId: a,
        onActionTaken: s
    }), p = (0, N.Zq)(T({
        isActive: o,
        isUserLurking: g,
        rsvped: c,
        isChannelPublic: f,
        canInvite: u,
        entityType: n.entity_type
    }, v)), h = null != v.onContextMenu ? (0, l.jsx)("div", {
        className: D.Zv,
        children: (0, l.jsx)(N.jD, {
            onClick: v.onContextMenu
        })
    }) : void 0;
    return (0, l.jsx)(r.H7u, {
        leading: h,
        actions: p
    })
}
let R = e => {
    let {
        guildScheduledEventId: n,
        transitionState: _,
        initialRecurrenceId: m,
        onClose: y
    } = e, {
        analyticsLocations: N
    } = (0, c.Ay)(o.A.GUILD_EVENT_MODAL), [S, R] = i.useState(m), G = (0, d.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(n), [n]), U = null == G ? void 0 : G.id, B = null == G ? void 0 : G.guild_id, M = (0, d.bG)([f.A], () => f.A.getGuild(B), [B]), V = null == G ? void 0 : G.channel_id, F = (0, d.bG)([g.A], () => g.A.getChannel(V), [V]), K = (0, u.GV)(), [H, J] = i.useState(P.al.EVENT_INFO), z = (0, j.A)(U, S), W = null != G ? (0, I.A)(G) : null, Q = i.useCallback(e => {
        null != W && (0, a.L3)(e, async () => {
            let {
                default: e
            } = await t.e("31658").then(t.bind(t, 151006));
            return n => {
                var t, i;
                return (0, l.jsx)(e, (t = T({}, n), i = i = {
                    imageUrl: W
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, l)
                    }
                    return t
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }), t))
            }
        })
    }, [W]), Y = (0, x.A)(B, U, S), [X, {
        loading: Z,
        error: q
    }] = (0, p.A)(() => h.A.getGuildEventUsers(null == G ? void 0 : G.id, S, B));
    i.useEffect(() => {
        null == G ? y() : v.default.track(w.HAw.OPEN_MODAL, {
            type: P.BV,
            guild_id: G.guild_id
        })
    }, [G, y]);
    let $ = i.useRef(null),
        [ee, en] = i.useState(680);
    i.useLayoutEffect(() => {
        let e = new ResizeObserver(e => {
            e.length > 0 && en(e[0].contentRect.width)
        });
        return null != $.current && e.observe($.current), () => e.disconnect()
    }, [$]);
    let et = i.useRef(null),
        [el, ei] = i.useState(0);
    if (i.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == G ? void 0 : G.recurrence_rule) != null);
            ei((null != (e = null == et || null == (n = et.current) ? void 0 : n.offsetHeight) ? e : 0) + t)
        }, [et, null == G ? void 0 : G.recurrence_rule]), null == G || null == M) return null;
    let er = e => {
            e !== H && (e === P.al.RSVP_LIST && X(), J(e))
        },
        ed = null != S ? S : (0, A.G3)(G);
    return (0, l.jsx)(c.f5, {
        value: N,
        children: (0, l.jsxs)(r.dWK, {
            transitionState: _,
            size: "lg",
            onClose: y,
            children: [(0, l.jsx)(r.rQ0, {
                title: G.name
            }), (null == G ? void 0 : G.image) != null && null != W && (0, l.jsx)("div", {
                onContextMenu: Q,
                children: (0, l.jsx)(C.A, {
                    source: W,
                    className: D.vK
                })
            }), (0, l.jsx)(r.cwr, {
                controls: (0, l.jsx)(O.A, {
                    selectedTab: H,
                    onTabSelected: er,
                    userCount: Y
                }),
                children: (0, l.jsx)("div", {
                    className: D.kL,
                    ref: $,
                    children: (0, l.jsxs)(s.tN_, {
                        activeSlide: H,
                        width: ee,
                        centered: !1,
                        children: [(0, l.jsx)(s.q7S, {
                            id: P.al.EVENT_INFO,
                            children: (0, l.jsx)(k.A, {
                                guildEvent: G,
                                guild: M,
                                channel: F,
                                headerId: K,
                                onClose: y,
                                onClickInterestedCount: () => er(P.al.RSVP_LIST),
                                containerRef: et,
                                recurrenceId: ed,
                                setRecurrenceId: R
                            })
                        }), (0, l.jsx)(s.q7S, {
                            id: P.al.RSVP_LIST,
                            children: (0, l.jsx)(E.A, {
                                guildEvent: G,
                                recurrenceId: ed,
                                eventUsers: z,
                                loading: Z,
                                containerHeight: el,
                                error: q
                            })
                        })]
                    })
                })
            }), (0, l.jsx)(L, {
                guildEvent: G,
                guild: M,
                channel: F,
                onActionTaken: y,
                recurrenceId: ed
            })]
        })
    })
}