/** Chunk was on 1113 **/
/** chunk id: 829861, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => K
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(571356),
    c = n(990078),
    u = n(397927),
    d = n(817281),
    h = n(475743),
    p = n(775602),
    g = n(58149),
    f = n(587837),
    m = n(964404),
    b = n(709562),
    A = n(383831),
    y = n(128286),
    O = n(734057),
    _ = n(696451),
    j = n(309010),
    x = n(287809),
    v = n(203982),
    E = n(427262),
    C = n(795816),
    S = n(933958),
    I = n(685399),
    N = n(216418),
    T = n(969151),
    P = n(620148),
    w = n(732637),
    R = n(104171),
    D = n(47294),
    L = n(594007),
    M = n(16961),
    G = n(716730),
    k = n(5867),
    U = n(652215),
    V = n(985018),
    B = n(907585);
let H = R.DN.SIZE_32,
    F = {
        [k.E8.NO_CHAT]: B.Oo,
        [k.E8.RESIZABLE]: B.Ig
    };

function K(e) {
    var t, n, i;
    let {
        maxHeight: K,
        connectedLocation: Y,
        renderExternalHeader: W
    } = e, z = (0, P.A)(), q = (0, a.yK)([S.Ay], () => S.Ay.getEmbeddedActivitiesForLocation(Y), [Y]), X = (0, T.H)(Y), J = (0, a.bG)([O.A], () => O.A.getChannel(X)), Q = (0, I.IQ)(q), Z = (0, I.Rz)(Q), $ = l.useCallback(() => {
        (0, C.gk)(k.Gd.PIP)
    }, []), ee = l.useRef(null), et = (0, a.bG)([S.Ay], () => S.Ay.getFocusedLayout()), en = et !== k.E8.NO_CHAT, [er, el] = l.useState(null != (t = null != (n = m.Ay.activityPanelHeight) ? n : K) ? t : null), ei = l.useCallback(e => {
        d.Ay.updatedUnsyncedSettings({
            activityPanelHeight: e
        })
    }, []), es = l.useRef(null), [ea, eo] = l.useState({
        width: 0,
        height: 0
    });
    l.useLayoutEffect(() => {
        if (null == es.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            eo({
                width: null != (e = null == (n = es.current) ? void 0 : n.clientWidth) ? e : 0,
                height: null != (t = null == (r = es.current) ? void 0 : r.clientHeight) ? t : 0
            })
        });
        return e.observe(es.current), () => e.disconnect()
    }, []);
    let ec = ea.width / Math.max(ea.height, 1) < k.B5,
        eu = 0,
        ed = 0,
        eh = (0, N.A)(null == z ? void 0 : z.id);
    if (!eh) {
        let e = ea.width,
            t = ea.height;
        ec ? ((t = ea.width / k.B5) > ea.height && (e = (t = ea.height) * k.B5), ed = (ea.height - t) / 2) : ((e = Math.min(ea.height * k.B5)) > ea.width && (t = (e = ea.width) / k.B5), eu = (ea.width - e) / 2)
    }
    let ep = Z.get(null != (i = null == z ? void 0 : z.id) ? i : ""),
        eg = (0, a.bG)([j.A], () => j.A.getChannelId()),
        ef = (0, a.yK)([_.Ay], () => {
            var e;
            return null == J ? [] : Array.from(null != (e = null == ep ? void 0 : ep.embeddedActivity.userIds) ? e : []).map(e => _.Ay.getMember(J.guild_id, e))
        }, [ep, J]),
        em = l.useMemo(() => {
            let e = new Map;
            return ef.forEach(t => {
                null != t && void 0 !== t && e.set(t.userId, t)
            }), e
        }, [ef]),
        eb = function(e, t, n) {
            let r = (0, h.A)(e),
                i = e !== r,
                [s, a] = l.useState(!1);
            l.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e)
            }, [e]);
            let o = !p.A.useReducedMotion && (i || s);
            return l.useMemo(() => {
                var r, l;
                let i = o ? {
                    transitionProperty: "height, max-height",
                    transitionDuration: "".concat(50, "ms"),
                    transitionTimingFunction: "ease-in-out"
                } : void 0;
                return e && null != t && null != n ? (r = function(e) {
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
                }({}, i), l = l = {
                    minHeight: 200,
                    maxHeight: n,
                    height: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
                }), r) : i
            }, [o, e, n, t])
        }(en, er, K),
        eA = (0, M.G)();
    if (null == z) return null;
    let ey = [];
    null != ep && (ey = Array.from(ep.embeddedActivity.userIds).map(e => x.default.getUser(e)).filter(e => null != e && void 0 !== e));
    let eO = e => {
        var t;
        if (null == e || void 0 === e || e === R.mt) return null;
        let n = em.get(e.id),
            l = null != (t = null == n ? void 0 : n.nick) ? t : E.Ay.getName(e);
        return (0, r.jsx)(c.m, {
            asContainer: !0,
            text: l,
            position: "bottom",
            children: (0, r.jsx)("img", {
                src: e.getAvatarURL(null == J ? void 0 : J.guild_id, H),
                alt: l,
                className: B.my
            }, e.id)
        }, e.id)
    };
    return (0, r.jsx)(u.NPJ, {
        theme: U.NJ8.DARK,
        children: e => (0, r.jsxs)("div", {
            className: s()(B.iE, F[et], e),
            ref: ee,
            style: eb,
            children: [null == W ? void 0 : W(), (0, r.jsxs)("div", {
                className: B.lq,
                children: [en ? null : (0, r.jsx)("div", {
                    className: B.wx,
                    children: (0, r.jsx)(o.E, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        className: B.qd,
                        children: null == z ? void 0 : z.name
                    })
                }), (0, r.jsx)("div", {
                    className: s()(B.ht, {
                        [B.kK]: eh
                    }),
                    style: {
                        paddingLeft: eu,
                        paddingRight: eu,
                        paddingTop: ed,
                        paddingBottom: ed
                    },
                    ref: es,
                    children: (0, r.jsx)(w.A, {
                        className: B.pU,
                        embedId: (0, L.A)(Y.id, z.id)
                    })
                }), null != eg ? (0, r.jsxs)("div", {
                    className: B.qr,
                    children: [(0, r.jsx)(R.Ay, {
                        renderIcon: !1,
                        users: ey,
                        size: H,
                        max: 6,
                        renderUser: eO
                    }), (0, r.jsxs)("div", {
                        className: B.Hq,
                        children: [(0, r.jsxs)("div", {
                            className: B.qi,
                            children: [(0, r.jsx)(G.A, {
                                channelId: eg
                            }), (0, r.jsx)(b.l, {
                                isTrayButton: !0,
                                label: V.intl.string(V.t.brPQ5U),
                                onClick: $,
                                iconComponent: u.gR,
                                themeable: !0
                            })]
                        }), (0, r.jsx)("div", {
                            className: B.pt,
                            children: (0, r.jsx)(A.A, {
                                applicationId: z.id,
                                location: Y,
                                centerButton: !0,
                                color: "disconnect"
                            })
                        })]
                    }), eA ? (0, r.jsx)(y.A, {
                        popoutOpen: !1,
                        onOpenPopout: () => {
                            (0, g.zV)(U.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, D.A)({
                                onConfirm: async () => {
                                    (null == z ? void 0 : z.id) != null && null != X && await (0, C.od)(z.id, X), (0, C.jp)()
                                }
                            })
                        },
                        onClosePopout: () => {}
                    }) : null]
                }) : null]
            }), en && null != K ? (0, r.jsx)(f.A, {
                minHeight: 480,
                maxHeight: K,
                resizableNode: ee,
                onResize: e => {
                    v._.dispatch(U.jej.MANUAL_IFRAME_RESIZING, {
                        resizing: !0
                    }), el(e)
                },
                onResizeEnd: e => {
                    v._.dispatch(U.jej.MANUAL_IFRAME_RESIZING, {
                        resizing: !1
                    }), ei(e)
                }
            }) : null]
        })
    })
}