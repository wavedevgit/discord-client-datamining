/** chunk id: 176031 params = (module,exports,require) **/
n.d(t, {
    A: () => ex
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(942381),
    o = n(110259),
    d = n(837381),
    c = n(607399),
    u = n(311907),
    A = n(554146),
    h = n(827734),
    _ = n(492917),
    m = n(192308),
    g = n(3026),
    p = n(435371),
    E = n(397927),
    I = n(308528),
    f = n(711950),
    C = n(701363),
    T = n(828100),
    N = n(509963),
    S = n(775602),
    x = n(924283),
    v = n(139286),
    b = n(213750),
    y = n(771781),
    O = n(932001),
    L = n(379848),
    R = n(335934),
    P = n(957283),
    D = n(411976),
    j = n(430783),
    M = n(945276),
    w = n(834981),
    U = n(912309),
    G = n(851746),
    k = n(70730),
    V = n(894374),
    B = n(275759),
    H = n(717807),
    F = n(385327),
    Y = n(727949),
    W = n(466336),
    K = n(615003),
    q = n(442802),
    z = n(67173),
    $ = n(793322),
    Q = n(366811),
    X = n(728321),
    Z = n(544028),
    J = n(253932),
    ee = n(189081),
    et = n(839067),
    en = n(67480),
    ei = n(619921),
    el = n(595623),
    ea = n(954571),
    er = n(541830),
    es = n(652215),
    eo = n(851110),
    ed = n(49999),
    ec = n(788868),
    eu = n(985018),
    eA = n(602339),
    eh = n(925004);
let e_ = e => {
        let {
            selected: t,
            ...n
        } = e, l = (0, R.c)("PrivateChannels.ICYMIButton"), a = (0, d.rm)("icymi");
        return l ? (0, i.jsx)("div", {
            className: eh.F2,
            children: (0, i.jsx)(C.z9, {
                selected: t,
                route: es.BVt.ICYMI,
                icon: E.gXB,
                text: (0, i.jsxs)(i.Fragment, {
                    children: [eu.intl.string(eu.t["jnXV/V"]), (0, i.jsx)("span", {
                        className: eh.HH,
                        children: eu.intl.string(eu.t.Ac2OZA)
                    })]
                }),
                ...n,
                ...a
            })
        }) : null
    },
    em = e => {
        let {
            selected: t,
            ...n
        } = e, a = (0, d.rm)("friends"), r = (0, U.kX)(), s = (0, u.bG)([B.Ay], () => B.Ay.canShowFriendsTabBadge()), c = (0, u.bG)([S.A], () => S.A.useReducedMotion), {
            enabled: h
        } = k.u.useConfig({
            location: "Friends Tab"
        }), [m, g] = (0, O.Wl)(s && h ? A.M.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, {
            cooldownDurationMs: B.hb
        }), I = m === A.M.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        l.useEffect(() => {
            I && (0, v.x)({
                name: o.ImpressionNames.GIFT_INTENT_BADGE,
                type: o.ImpressionTypes.VIEW,
                properties: {
                    gift_intent_type: ec.np.FRIEND_ANNIVERSARY
                }
            })
        }, [I]);
        let T = () => {
                let e;
                I ? (ea.default.track(es.HAw.GIFT_INTENT_BADGE_CLICKED, {
                    gift_intent_type: ec.np.FRIEND_ANNIVERSARY
                }), e = es.m3P.ALL, f.A.setSection(es.m3P.ALL), g(ed.i.TAKE_ACTION)) : e = el.Ay.getState().section, (0, x.A)({
                    tab_opened: e
                })
            },
            [N, b] = l.useState(!1),
            y = () => {
                b(!1)
            },
            L = () => {
                b(!0)
            },
            R = () => (0, i.jsx)(C.z9, {
                showHoverGradient: !1,
                onClick: T,
                interactiveClassName: I ? eh.hc : void 0,
                selected: t,
                route: es.BVt.FRIENDS,
                icon: E.$yI,
                text: eu.intl.string(eu.t.TdEu5X),
                onMouseEnter: L,
                onMouseLeave: y,
                ...n,
                ...a,
                children: r > 0 ? (0, i.jsx)(E.hVq, {
                    count: r
                }) : null
            });
        return (0, i.jsx)("div", {
            className: eh.F2,
            children: I ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(p.un, {
                    title: eu.intl.string(eu.t.Thb5MO),
                    body: eu.intl.string(eu.t.kGvgwS),
                    position: "left",
                    asset: (0, i.jsx)(_.xhM, {
                        size: 32,
                        alt: eu.intl.string(eu.t["4LohBA"])
                    }),
                    children: R()
                }), !c && (0, i.jsx)(q.A, {
                    className: eh.t_,
                    wind: 0,
                    sprites: eo.uI,
                    spriteColors: eo._t,
                    firing: N,
                    confettiConfig: {
                        opacity: {
                            type: "static",
                            value: 1
                        },
                        dragCoefficient: {
                            type: "static",
                            value: {
                                x: 100,
                                y: 100
                            }
                        }
                    }
                })]
            }) : R()
        })
    },
    eg = e => {
        let {
            selected: t,
            hideGameUpdateProgressIndicator: n,
            ...l
        } = e, a = (0, d.rm)("library");
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: es.BVt.APPLICATION_LIBRARY,
            icon: E._z,
            text: eu.intl.string(eu.t.cw57ar),
            ...l,
            ...a,
            children: (0, i.jsx)(N.A, {
                className: r()(eh.Qw, {
                    [eh.QI]: n
                })
            })
        })
    },
    ep = () => {
        let e = (0, D.W)();
        return e > 0 ? (0, i.jsx)(E.hVq, {
            count: e
        }) : null
    },
    eE = e => {
        let {
            selected: t
        } = e, n = (0, d.rm)("messageRequests"), {
            channelId: l
        } = (0, P.N)();
        if (!(0, j.H)()) return null;
        let a = null == l ? void 0 : () => I.A.preload(es.ME, l);
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: es.BVt.MESSAGE_REQUESTS,
            icon: E.u6c,
            text: eu.intl.string(eu.t.e7GWjQ),
            onClick: a,
            ...n,
            children: (0, i.jsx)(ep, {})
        })
    },
    eI = e => {
        let {
            selected: t
        } = e, n = eu.intl.string(eA.default.Rkdixs), a = (0, d.rm)("family-center"), [r, s] = l.useState(!0);
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: es.BVt.FAMILY_CENTER,
            icon: E.nFg,
            text: n,
            onMouseEnter: () => {
                s(!0)
            },
            onMouseLeave: () => {
                s(!1)
            },
            interactiveClassName: eh.M1,
            ...a,
            children: (0, i.jsx)(ef, {
                isParentHovered: r
            })
        })
    },
    ef = e => {
        let {
            isParentHovered: t
        } = e, l = (0, w.VT)();
        return t ? (0, i.jsx)("div", {
            className: eh.lL,
            children: (0, i.jsx)(C.w_, {
                onClick: () => {
                    (0, m.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.e("67195").then(n.bind(n, 371158));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                },
                "aria-label": eu.intl.string(eu.t.cpT0Cq),
                icon: E.PGe
            })
        }) : l > 0 ? (0, i.jsx)("div", {
            className: r()(eh.lL, eh.iL),
            children: (0, i.jsx)(E.hVq, {
                count: l
            })
        }) : (0, i.jsx)("div", {
            className: eh.lL,
            children: (0, i.jsx)(L.Ay, {
                contentTypes: [A.M.FAMILY_CENTER_NEW_BADGE],
                children: e => {
                    let {
                        visibleContent: t
                    } = e;
                    return t === A.M.FAMILY_CENTER_NEW_BADGE ? (0, i.jsx)(E.LpS, {
                        text: eu.intl.string(eu.t.y2b7CA),
                        color: h.A.colors.BACKGROUND_BRAND.css
                    }) : null
                }
            })
        })
    },
    eC = () => (0, $.WU)("DM_SEARCH");

function eT(e) {
    switch (e) {
        case es.BVt.APPLICATION_LIBRARY:
            return es.liQ.LIBRARY;
        case es.BVt.FRIENDS:
            return es.liQ.FRIENDS_LIST;
        case es.BVt.COLLECTIBLES_SHOP:
            return es.liQ.COLLECTIBLES_SHOP
    }
    return e.startsWith(es.BVt.APPLICATION_STORE) ? e === es.BVt.APPLICATION_STORE ? es.liQ.STORE_DIRECTORY_HOME : e.startsWith(es.BVt.APPLICATION_STORE) ? es.liQ.STORE_DIRECTORY_BROWSE : es.liQ.STORE_LISTING : es.liQ.DM_CHANNEL
}
let eN = l.memo(function(e) {
    let {
        showLibrary: t,
        hasLibraryApplication: n,
        homeLink: a,
        premiumTabSelected: s,
        shouldShowNitroTab: o,
        showReferralProgramPopover: d,
        showRecurring3PPopover: u,
        shouldShowMessageRequestsRow: A,
        shouldShowFamilyCenterRow: h,
        selectedChannelId: _,
        path: m
    } = e, p = l.useRef(null), I = l.useRef(null), f = l.useRef(null), C = l.useRef(null), N = (0, R.c)("PrivateChannels"), S = null;
    return d ? S = (0, i.jsx)(W.V, {
        targetElementRef: C
    }) : u && (S = (0, i.jsx)(H.A, {
        targetElementRef: C
    })), (0, i.jsxs)("nav", {
        className: eh.AB,
        "aria-label": eu.intl.string(eu.t.ZH9aP4),
        children: [(0, i.jsx)(X.A, {
            childRef: p,
            tutorialId: "direct-messages",
            position: "right",
            offsetX: -52,
            children: (0, i.jsx)("div", {
                ref: p,
                className: r()(eh.ON, {
                    [eh.jD]: c.Fr
                }),
                children: (0, i.jsx)(E.Button, {
                    fullWidth: !0,
                    variant: "secondary",
                    size: "sm",
                    onClick: eC,
                    text: eu.intl.format(eu.t.fH9FBy, {
                        tooltipHook: (e, t) => (0, i.jsx)(g.A, {
                            children: e
                        }, t)
                    })
                })
            })
        }), (0, i.jsxs)(T.A, {
            ...e,
            version: m,
            selectedChannelId: _,
            listScrollerRef: f,
            children: [(0, i.jsx)(em, {
                selected: null != m ? m === es.BVt.FRIENDS : a === es.BVt.FRIENDS
            }, "friends"), N ? (0, i.jsx)(e_, {
                selected: null != m ? m === es.BVt.ICYMI : a === es.BVt.ICYMI
            }, "icymi") : null, n && t ? (0, i.jsx)(eg, {
                selected: null == m ? null != a && a.startsWith(es.BVt.APPLICATION_LIBRARY) : m.startsWith(es.BVt.APPLICATION_LIBRARY),
                hideGameUpdateProgressIndicator: a === es.BVt.APPLICATION_LIBRARY
            }, "library") : null, A ? (0, i.jsx)(eE, {
                selected: null == m ? null != a && a.startsWith(es.BVt.MESSAGE_REQUESTS) : m === es.BVt.MESSAGE_REQUESTS
            }, "message-requests") : null, o ? (0, i.jsxs)("div", {
                children: [(0, i.jsx)(K.o, {
                    nitroTabButtonRef: C,
                    selected: null == m ? s : m.startsWith(es.BVt.APPLICATION_STORE),
                    route: es.BVt.APPLICATION_STORE,
                    locationState: {
                        analyticsSource: {
                            page: eT(a),
                            section: es.JJy.NAVIGATION,
                            object: es.ZSU.NAVIGATION_LINK
                        }
                    }
                }), S]
            }, "nitro-tab-group") : null, (0, i.jsx)(b.i, {
                selected: m === es.BVt.COLLECTIBLES_SHOP || a?.startsWith(es.BVt.COLLECTIBLES_SHOP),
                listItemRef: I,
                locationState: {
                    analyticsSource: {
                        page: eT(a),
                        section: es.JJy.NAVIGATION,
                        object: es.ZSU.NAVIGATION_LINK
                    }
                }
            }, "discord-shop"), h ? (0, i.jsx)(eI, {
                selected: null != a && a.startsWith(es.BVt.FAMILY_CENTER) || null != m && m.startsWith(es.BVt.FAMILY_CENTER)
            }, "family-center") : null, (0, i.jsx)(z.A, {
                selected: null == m ? null != a && a.startsWith(es.BVt.QUEST_HOME) : m === es.BVt.QUEST_HOME
            }, "quests"), (0, i.jsx)(eS, {}, "section-divider-top")]
        })]
    })
});

function eS() {
    return (0, i.jsx)("div", {
        className: eh.ts
    })
}

function ex() {
    let e, t, n = (0, u.bG)([ei.A], () => ei.A.getHomeLink()),
        l = (0, u.bG)([en.A], () => {
            if (n === es.BVt.APPLICATION_STORE) return !0;
            let e = (0, er.qt)(n);
            return null != e && (en.A.get(e)?.premium ?? !1)
        }, [n]),
        a = !J.l_.useSetting(),
        {
            theme: r
        } = (0, u.cf)([Z.A], () => ({
            theme: Z.A.theme
        })),
        o = (0, u.bG)([ee.A], () => ee.A.hasLibraryApplication()),
        d = (0, u.bG)([et.A], () => et.A.getCurrentPath()),
        [c, h] = (0, Q.A)(e => {
            let {
                channelId: t,
                path: n
            } = e;
            return [t, n]
        }, s.x),
        _ = (0, K.P)({
            selected: null == h ? l : h.startsWith(es.BVt.APPLICATION_STORE)
        }),
        m = (0, Y.Tp)(),
        g = (0, u.bG)([G.A], () => G.A.getReminderStateId()),
        p = (0, F.c7)(),
        E = [],
        I = (0, V.A)({
            location: "Private Channels"
        });
    (0, y.Tc)() && (m && !I && E.push(A.M.REFERRAL_PROGRAM_POPOVER), p && E.push(A.M.RECURRING_3P_PROMOTION_POPOVER));
    let [f] = (0, O.Cc)(m && I ? A.M.REFERRAL_PROGRAM_POPOVER_V2 : null, g ?? "", void 0, !0), [C, T] = (0, O.kn)(E, void 0, !0), N = null == f && C === A.M.RECURRING_3P_PROMOTION_POPOVER, S = I ? f === A.M.REFERRAL_PROGRAM_POPOVER_V2 : C === A.M.REFERRAL_PROGRAM_POPOVER, x = (0, j.H)(), v = (e = J.dm.useSetting(), t = (0, M.A)(), !0 === e && !0 === t);
    return (0, i.jsx)(eN, {
        theme: r,
        showLibrary: a,
        hasLibraryApplication: o,
        storeLink: d,
        homeLink: n,
        premiumTabSelected: l,
        shouldShowNitroTab: _,
        showReferralProgramPopover: S,
        showRecurring3PPopover: N,
        shouldShowMessageRequestsRow: x,
        shouldShowFamilyCenterRow: v,
        selectedChannelId: c,
        path: h
    })
}