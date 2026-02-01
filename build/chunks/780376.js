/** chunk id: 780376, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H,
    d: () => q
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(311907),
    c = n(3026),
    s = n(990078),
    u = n(421380),
    d = n(397927),
    p = n(684013),
    f = n(58149),
    m = n(717048),
    A = n(587895),
    b = n(222506),
    y = n(87001),
    v = n(574172),
    O = n(253932),
    j = n(246356),
    x = n(459632),
    g = n(709562),
    h = n(423562),
    I = n(520006),
    P = n(128286),
    C = n(619344),
    _ = n(734057),
    T = n(696451),
    k = n(287809),
    w = n(723702),
    N = n(427262),
    S = n(837921),
    E = n(475815),
    R = n(9302),
    L = n(795816),
    D = n(933958),
    U = n(57220),
    G = n(869003),
    F = n(104171),
    K = n(47294),
    W = n(246323),
    Y = n(365995),
    M = n(16961),
    B = n(652215),
    V = n(985018),
    z = n(936106);
let $ = F.DN.SIZE_24;

function q(e) {
    let t, n, {
            hasActivity: i,
            applicationId: L,
            channelId: D,
            compositeInstanceId: G,
            userIds: q,
            isRichPresenceInvite: H,
            onConfirmClosePopout: Z
        } = e,
        J = (0, a.bG)([A.A], () => A.A.getApplication(L)),
        X = (0, a.bG)([_.A], () => _.A.getChannel(D)),
        Q = O.Q_.useSetting(),
        ee = (0, a.yK)([T.Ay], () => null == X || null == q ? [] : Array.from(null != q ? q : []).map(e => T.Ay.getMember(X.guild_id, e)), [X, q]),
        et = r.useMemo(() => {
            let e = new Map;
            return ee.forEach(t => {
                null != t && void 0 !== t && e.set(t.userId, t)
            }), e
        }, [ee]),
        en = r.useCallback((e, t) => {
            var n;
            if (null == e || e === F.mt) return null;
            let r = et.get(e.id),
                i = null != (n = null == r ? void 0 : r.nick) ? n : N.Ay.getName(e);
            return (0, l.jsx)(s.m, {
                asContainer: !0,
                text: i,
                position: "bottom",
                children: (0, l.jsx)("img", {
                    src: e.getAvatarURL(null == t ? void 0 : t.guild_id, $),
                    alt: i,
                    className: z.my
                }, e.id)
            }, e.id)
        }, [et]),
        el = (0, a.yK)([k.default], () => Array.from(null != q ? q : []).map(e => k.default.getUser(e)).filter(e => null != e), [q]),
        er = r.useCallback(() => {
            let e = (0, R.getPID)();
            p.A.setInputLocked(!b.A.isInputLocked(e), e)
        }, []),
        ei = (0, U.V)(),
        {
            canStayOnTop: eo,
            popoutWindowAlwaysOnTop: ea,
            handleStayOnTop: ec
        } = (t = (0, a.bG)([y.A], () => y.A.getIsAlwaysOnTop(B.MLl.ACTIVITY_POPOUT)), n = r.useCallback(e => {
            v.setAlwaysOnTop(B.MLl.ACTIVITY_POPOUT, e)
        }, []), {
            canStayOnTop: w.isPlatformEmbedded && S.Ay.supportsFeature(B.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n
        }),
        es = (0, M.G)(),
        {
            rootNode: eu,
            popoutWindow: ed,
            toggleFullScreen: ep
        } = function() {
            let {
                popoutWindow: e,
                currentDocument: t,
                rootNode: n
            } = (0, Y.A)(), [l, i] = r.useState(!1), o = r.useCallback(() => {
                null == n || l && (i(!1), (0, E.sP)(n, t))
            }, [n, t, l]), a = r.useCallback(() => {
                null != n && (l ? o() : (i(!0), (0, E.tl)(n)))
            }, [n, l, o]), c = r.useCallback(() => {
                null != n && !(0, E._U)(n, t) && l && a()
            }, [n, t, l, a]);
            return r.useEffect(() => (null == t || t.addEventListener(E.Wb, c), () => {
                null == t || t.removeEventListener(E.Wb, c)
            }), [t, c]), {
                rootNode: n,
                popoutWindow: e,
                toggleFullScreen: a
            }
        }(),
        ef = r.useRef(null);
    if (null == J || !i) return null;
    let em = (0, l.jsx)(m.A, {
        application: J,
        size: 24,
        className: z.Z2
    });
    return Q && null != G && (em = (0, l.jsx)(s.m, {
        asContainer: !0,
        text: G,
        position: "bottom",
        children: em
    })), (0, l.jsx)(d.NPJ, {
        theme: B.NJ8.DARK,
        children: e => (0, l.jsxs)("div", {
            className: o()(z.kL, e),
            children: [(0, l.jsxs)("div", {
                className: o()(z.ND, z.c8),
                children: [em, (0, l.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    className: z.SX,
                    children: (0, l.jsx)(c.A, {
                        children: J.name
                    })
                }), el.length > 0 ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: z.SC,
                        children: (0, l.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "."
                        })
                    }), (0, l.jsx)(F.Ay, {
                        renderIcon: !1,
                        users: el,
                        size: $,
                        max: 6,
                        renderUser: e => en(e, X)
                    })]
                }) : null]
            }), (0, l.jsxs)("div", {
                className: o()(z.ND, z.fU),
                children: [(0, l.jsx)("div", {
                    className: z.Rv
                }), (0, l.jsxs)("div", {
                    className: z.fc,
                    children: [(0, l.jsx)(I.A, {
                        appContext: B.BRT.POPOUT,
                        applicationId: L,
                        channel: X,
                        shouldPrioritizeGroupPlusIcon: !0,
                        isRichPresenceInvite: H,
                        iconClassName: z.NS,
                        size: u.$n.Sizes.TINY,
                        look: u.$n.Looks.FILLED,
                        buttonText: V.intl.string(V.t["6F9ivu"]),
                        color: u.$n.Colors.TRANSPARENT
                    }), ei ? (0, l.jsx)(g.A, {
                        onClick: er,
                        iconComponent: d.ld1,
                        label: V.intl.string(V.t.mseZsD)
                    }) : null, eo ? (0, l.jsx)(C.A, {
                        popoutWindowAlwaysOnTop: ea,
                        onToggleStayOnTop: ec
                    }) : null, es ? (0, l.jsx)(P.A, {
                        popoutOpen: !0,
                        onOpenPopout: () => {},
                        onClosePopout: () => {
                            (0, f.zV)(B.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, K.A)({
                                onConfirm: Z
                            })
                        }
                    }) : null, (0, l.jsx)(h.A, {
                        node: eu,
                        guestWindow: ed,
                        onClick: ep
                    }), (0, l.jsx)(d.YNO, {
                        targetElementRef: ef,
                        position: "bottom",
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, l.jsx)(j.A, {
                                children: (0, l.jsx)(W.default, {
                                    application: J,
                                    channelId: D,
                                    onClose: t
                                })
                            })
                        },
                        children: (e, t) => {
                            var n, l;
                            let {
                                isShown: i
                            } = t;
                            return (0, r.createElement)(x.A, (n = function(e) {
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
                            }({}, e), l = l = {
                                buttonRef: ef,
                                key: "more-options",
                                isActive: i
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l)
                                }
                                return n
                            })(Object(l)).forEach(function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                            }), n))
                        }
                    }, "more-options-popout")]
                })]
            })]
        })
    })
}

function H(e) {
    let {
        applicationId: t,
        channelId: n
    } = e, i = (0, a.bG)([D.Ay], () => D.Ay.getSelfEmbeddedActivities().get(t)), o = r.useCallback(async () => {
        await (0, L.od)(t, null != n ? n : null), G.A.popInActivity()
    }, [t, n]);
    return (0, l.jsx)(q, {
        hasActivity: null != i,
        applicationId: t,
        channelId: n,
        compositeInstanceId: null == i ? void 0 : i.compositeInstanceId,
        userIds: null == i ? void 0 : i.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: o
    })
}