/** chunk id: 239606 params = (module,exports,require) **/
t.d(l, {
    A: () => eE
});
var n = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(687498),
    o = t(311907),
    d = t(397927),
    c = t(241524),
    u = t(770178),
    m = t(80682),
    x = t(793574),
    p = t(688810),
    A = t(351966),
    g = t(361628),
    f = t(744808),
    h = t(915089),
    j = t(713517),
    v = t(645507),
    I = t(922590),
    N = t(821269),
    y = t(437774),
    C = t(594832),
    E = t(994500),
    T = t(351906),
    b = t(562153),
    P = t(474090),
    _ = t(183555),
    R = t(622543),
    O = t(591179),
    S = t(950191),
    L = t(101928),
    G = t(837529),
    U = t(346713),
    k = t(484509),
    D = t(195898),
    M = t(567915),
    F = t(716804),
    w = t(679492),
    V = t(718019),
    B = t(31432),
    z = t(915614),
    W = t(389996),
    H = t(223330),
    $ = t(559506),
    K = t(361311),
    Y = t(886891),
    Z = t(439053),
    X = t(743987),
    q = t(312381),
    J = t(501193),
    Q = t(383448),
    ee = t(946356),
    el = t(810396),
    et = t(159218),
    en = t(280645),
    ei = t(291335),
    es = t(807651),
    ea = t(463156),
    er = t(510059),
    eo = t(546136),
    ed = t(982599),
    ec = t(399122),
    eu = t(83013),
    em = t(878210),
    ex = t(515054),
    ep = t(513265),
    eA = t(160983),
    eg = t(518477),
    ef = t(652215),
    eh = t(996988),
    ej = t(985018),
    ev = t(572841);
let eI = e => e * (2 - e),
    eN = {
        "compact-sm": {
            avatarOffsetX: 16
        },
        "compact-xs": {
            avatarSize: d._3J.SIZE_96,
            avatarOffsetX: 16
        }
    };

function ey(e) {
    let {
        user: l,
        currentUser: t,
        guildId: s,
        originGuildId: r,
        channelId: c,
        displayProfile: m,
        nickname: x,
        hasEntered: p,
        customStatusPrompt: g,
        onClose: f
    } = e, h = l.id === t.id, C = i.useRef(null), b = (0, j.M)(C), [_, R] = i.useState(), O = i.useCallback(e => {
        let l = e.contentRect.width;
        l <= 350 ? R("compact-xs") : l <= 380 ? R("compact-sm") : R(void 0)
    }, []);
    (0, u.g)(C, O, [], {
        fireOnMount: !0
    });
    let S = null != _ ? eN[_] : void 0,
        L = i.useMemo(() => g ?? (0, v.A)(), [g]),
        {
            relationshipType: G,
            originApplicationId: D
        } = (0, o.cf)([E.A], () => ({
            relationshipType: E.A.getRelationshipType(l.id),
            originApplicationId: E.A.getOriginApplicationId(l.id)
        })),
        M = (0, o.bG)([T.A], () => T.A.hidePersonalInformation),
        F = (0, N.q)({
            userId: l.id
        }),
        w = (0, I.fi)(l.id),
        q = (0, k.A)(l.id),
        ea = (0, U.A)(l.id);
    return (0, n.jsxs)("main", {
        className: a()(ev.profile, null != _ && ev[_]),
        ref: C,
        children: [(0, n.jsxs)("div", {
            className: ev.profileHeader,
            children: [(0, n.jsx)(z.A, {
                user: l,
                displayProfile: m,
                themeType: eh.d.MODAL_V2,
                specOverrides: S
            }), (0, n.jsx)(Z.A, {
                userId: l.id,
                onClose: f,
                className: ev.interactionToast
            }), (0, n.jsx)(V.A, {
                user: l,
                displayProfile: m,
                guildId: s,
                channelId: c,
                themeType: eh.d.MODAL_V2,
                specOverrides: S
            }), (0, n.jsx)(et.A, {
                user: l,
                guildId: s,
                channelId: c,
                themeType: eh.d.MODAL_V2,
                hasEntered: p,
                prompt: h ? L : null
            })]
        }), (0, n.jsxs)(d.HOs, {
            fade: !0,
            className: ev.profileBody,
            children: [(0, n.jsx)($.A, {
                userId: l.id
            }), (0, n.jsx)(el.A, {
                user: l,
                guildId: m?.guildId ?? void 0,
                onClose: f,
                nickname: x,
                nicknameVariant: "heading-xl/semibold",
                pronouns: m?.pronouns,
                tags: (0, n.jsx)(B.A, {
                    displayProfile: m,
                    themeType: eh.d.MODAL_V2,
                    onClose: f
                })
            }), G === ef.eA$.PENDING_INCOMING && (0, n.jsx)(ee.A.Overlay, {
                className: ev.profileOverlay,
                children: (0, n.jsx)(Y.A, {
                    user: l,
                    applicationId: D,
                    guildId: m?.guildId ?? void 0,
                    channelId: c,
                    className: ev.profileBanner
                })
            }), w.map(e => {
                let {
                    applicationId: t
                } = e;
                return (0, n.jsx)(ee.A.Overlay, {
                    className: ev.profileOverlay,
                    children: (0, n.jsx)(Y.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        channelId: c,
                        isGameRelationship: !0,
                        applicationId: t,
                        className: ev.profileBanner
                    })
                }, t)
            }), l.isProvisional && (0, n.jsx)(ee.A.Overlay, {
                className: ev.profileOverlay,
                children: (0, n.jsx)(eu.A, {
                    heading: ej.intl.string(ej.t.Iyka0U),
                    headingVariant: "text-md/semibold",
                    headingIcon: (0, n.jsx)(d.EpV, {
                        size: "xs",
                        color: "currentColor"
                    }),
                    className: ev.profileBanner,
                    children: (0, n.jsx)(y.T, {
                        userId: l.id,
                        variant: "text-sm/normal"
                    })
                })
            }), h && (0, n.jsx)(H.A, {
                isPremiumUser: (0, P.ki)(t),
                onInteraction: f
            }), (0, n.jsx)(Q.A, {
                user: l,
                className: ev.profileBanner
            }), m?.private && (0, n.jsx)(ee.A.Overlay, {
                className: ev.profileOverlay,
                children: (0, n.jsx)(J.A, {
                    username: x
                })
            }), (0, n.jsx)("div", {
                className: ev.profileButtons,
                children: (0, n.jsx)(es.A, {
                    user: l,
                    currentUser: t,
                    guildId: s,
                    originGuildId: r,
                    channelId: c,
                    displayProfile: m,
                    relationshipType: G,
                    onClose: f
                })
            }), !M && (0, n.jsx)(W.E, {
                userBio: m?.bio,
                setLineClamp: !1
            }), F.length > 0 && (0, n.jsx)(eu.A, {
                heading: ej.intl.string(ej.t["Uv/eTx"]),
                children: (0, n.jsx)(K.A, {
                    applicationIds: F
                })
            }), (0, n.jsx)(eu.A, {
                heading: ej.intl.string(ej.t.a6XYD9),
                children: (0, n.jsx)(X.A, {
                    userId: l.id,
                    guildId: m?.guildId,
                    tooltipDelay: eg.In
                })
            }), m?.guildId != null && (0, n.jsx)(en.A, {
                userId: l.id,
                guildId: m.guildId,
                className: ev.profileRolesSection,
                headingVariant: "text-xs/medium",
                headingColor: "currentColor"
            }), q.length > 0 && (0, n.jsx)(eu.A, {
                heading: ej.intl.string(ej.t["3fe7U5"]),
                scrollTargetId: eg.bk.CONNECTIONS,
                children: (0, n.jsx)(er.A, {
                    connections: q,
                    userId: l.id,
                    className: ev.profileAppConnections
                })
            }), ea.length > 0 && (0, n.jsx)(eu.A, {
                heading: ej.intl.string(ej.t.PHjkRE),
                scrollTargetId: eg.bk.APPS,
                children: (0, n.jsx)(ei.A, {
                    applicationRoleConnections: ea,
                    onClose: f,
                    className: ev.profileAppConnections
                })
            }), (0, n.jsx)(ec.A, {
                userId: l.id
            })]
        }), m?.profileEffect != null && (0, n.jsx)(A.A, {
            skuId: m?.profileEffect.skuId,
            isHovering: b
        })]
    })
}

function eC(e) {
    let {
        user: l,
        displayProfile: t,
        children: i
    } = e, {
        theme: s,
        primaryColor: a,
        secondaryColor: r
    } = (0, L.A)({
        user: l,
        displayProfile: t
    }), {
        profileThemeStyle: o,
        profileThemeClassName: d
    } = (0, D.A)({
        theme: s,
        themeType: null,
        primaryColor: a,
        secondaryColor: r
    });
    return (0, n.jsx)("div", {
        className: d,
        style: o,
        children: i
    })
}

function eE(e) {
    let {
        user: l,
        currentUser: t,
        guildId: s,
        originGuildId: u,
        channelId: A,
        messageId: j,
        roleId: v,
        sessionId: I,
        initialTabSection: N,
        initialScrollTarget: y,
        transitionState: E,
        customStatusPrompt: T,
        onClose: P,
        sourceAnalyticsLocations: L = [],
        themeContainerClassName: U
    } = e, k = l.id === t.id, {
        guildId: D,
        pendingGuildId: V,
        selectUserProfile: B
    } = (0, M.A)({
        userId: l.id,
        initialGuildId: s
    }), z = i.useMemo(() => null != D ? {
        [D]: [l.id]
    } : {}, [D, l.id]);
    (0, m.Eq)(z, "UserProfileModalV2");
    let W = (0, S.Ay)(l.id, D),
        H = (0, g.A)(W?.profileFrame?.skuId, "UserProfileModalV2"),
        $ = (0, O.X)("UserProfileModalV2"),
        K = k && $,
        {
            isExpanded: Y,
            isAnimating: Z,
            transition: X,
            canShowExpand: J,
            handleExpand: Q,
            handleCollapse: el,
            refs: {
                expandIconButtonRef: et,
                expandTabButtonRef: en,
                collapseButtonRef: ei
            }
        } = function() {
            let [e, l] = i.useState(() => window.innerWidth > 928), [t, n] = i.useState(!1), s = (0, d.pnh)(e, {
                keys: e => e ? "panel" : "empty",
                from: {
                    progress: 0
                },
                enter: {
                    progress: 1
                },
                leave: {
                    progress: 0
                },
                config: {
                    duration: 300,
                    easing: eI
                },
                onRest: () => n(!1)
            }), a = (0, c.A)("(min-width: 929px) and (min-height: 550px)"), r = i.useRef(null), o = i.useRef(null), u = i.useRef(null), m = i.useRef(null), x = i.useCallback(() => {
                m.current = "collapse", n(!0), l(!0)
            }, []), p = i.useCallback(() => {
                m.current = "expand", n(!0), l(!1)
            }, []);
            return i.useEffect(() => {
                if (!t) {
                    if ("collapse" === m.current && e) m.current = null, u.current?.focus();
                    else if ("expand" === m.current && !e) {
                        m.current = null;
                        let e = a ? o.current : r.current;
                        e?.focus()
                    }
                }
            }, [e, t, a]), {
                isExpanded: e,
                isAnimating: t,
                transition: s,
                canShowExpand: !e && !t,
                handleExpand: x,
                handleCollapse: p,
                refs: {
                    expandIconButtonRef: r,
                    expandTabButtonRef: o,
                    collapseButtonRef: u
                }
            }
        }(),
        es = K && J,
        {
            defaultWishlistId: er
        } = (0, o.cf)([R.A], () => ({
            defaultWishlistId: R.A.getFirstWishlistId(l.id)
        }));
    (0, C.fw)({
        wishlistId: er,
        userId: l.id
    });
    let ec = (0, w.fC)(),
        eu = (0, d.zhh)({
            opacity: +(null != ec.interactionType),
            config: {
                duration: 150
            }
        }),
        eg = (0, G.Nx)() ? null : W?.getBannerURL({
            canAnimate: !1,
            size: 1024
        }),
        ef = (0, eA.A)({
            user: l,
            currentUser: t
        }),
        {
            analyticsLocations: eN
        } = (0, p.Ay)([...L, x.A.USER_PROFILE_MODAL_V2]),
        eE = (0, _.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: I,
            guildId: D,
            channelId: A,
            messageId: j,
            roleId: v
        }),
        eT = b.Ay.useName(W?.guildId, A, l),
        eb = (0, h.GV)(),
        eP = ej.intl.format(ej.t.KRe1Fk, {
            name: eT
        });
    return (0, n.jsx)(p.f5, {
        value: eN,
        children: (0, n.jsx)(_.of, {
            value: eE,
            isLoaded: W?.isLoaded,
            children: (0, n.jsx)(w.Hl, {
                value: ec,
                children: (0, n.jsx)(F.N, {
                    value: y,
                    children: (0, n.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ev.root,
                        transitionState: E,
                        "aria-labelledby": eb,
                        parentComponent: "UserProfileModalV2",
                        children: [(0, n.jsx)(em.A, {
                            children: (0, n.jsxs)("div", {
                                className: a()(ev.layoutContainer, {
                                    [ev.editingPanelEnabled]: K,
                                    [ev.editingPanelExpanded]: K && Y,
                                    [ev.isAnimating]: Z,
                                    [ev.hasPrivateBanner]: W?.private === !0
                                }),
                                children: [(0, n.jsxs)(eC, {
                                    user: l,
                                    displayProfile: W,
                                    children: [(0, n.jsxs)("div", {
                                        className: ev.modalHeaderButtons,
                                        children: [(0, n.jsx)(ea.A, {
                                            isCurrentUser: k,
                                            onClose: P
                                        }), (0, n.jsx)(d.AC4, {
                                            children: (0, n.jsx)(d.H, {
                                                id: eb,
                                                children: eP
                                            })
                                        }), K && (!Y || Z) && (0, n.jsx)(eo._T, {
                                            buttonRef: et,
                                            onClick: Q,
                                            className: ev.editingPanelExpandButtonCompact
                                        })]
                                    }), es && (0, n.jsx)(eo.oA, {
                                        innerRef: en,
                                        onClick: Q,
                                        className: ev.editingPanelExpandButtonDefault
                                    })]
                                }), (0, n.jsxs)(d.Fmo, {
                                    children: [K && X((e, t) => t ? (0, n.jsx)(eo.Ay, {
                                        className: a()(ev.editingPanel, {
                                            [ev.isExpanded]: Y
                                        }),
                                        user: l,
                                        selectedGuildId: V,
                                        onSelectGuildId: B,
                                        onClose: el,
                                        collapseButtonRef: ei
                                    }) : null), (0, n.jsxs)(ee.A, {
                                        className: a()(U, ev.profileContentContainer),
                                        user: l,
                                        displayProfile: W,
                                        themeType: eh.d.MODAL_V2,
                                        privateBanner: W?.private === !0 ? (0, n.jsx)(q.A, {}) : void 0,
                                        children: [null != eg && (0, n.jsx)("div", {
                                            className: ev.backgroundImage,
                                            style: {
                                                backgroundImage: `url(${eg})`
                                            }
                                        }), null != ec.interactionType && (0, n.jsx)(r.animated.div, {
                                            style: eu,
                                            className: ev.backdrop
                                        }), (0, n.jsx)(ep.A, {
                                            className: ev.toast
                                        }), (0, n.jsx)(ey, {
                                            user: l,
                                            currentUser: t,
                                            guildId: D,
                                            channelId: A,
                                            displayProfile: W,
                                            nickname: eT,
                                            originGuildId: u,
                                            hasEntered: E === d.ip4.ENTERED,
                                            customStatusPrompt: T,
                                            onClose: P
                                        }), (0, n.jsx)(ex.A, {
                                            user: l,
                                            currentUser: t,
                                            displayProfile: W,
                                            guildId: D,
                                            channelId: A,
                                            items: ef,
                                            initialSection: N,
                                            onClose: P
                                        }), null != H && (0, n.jsx)(f.A, {
                                            frame: H,
                                            layout: "MODAL_V2"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(ed.A, {
                            userId: l.id,
                            guildId: D,
                            className: ev.pendingChangesToolbar
                        })]
                    })
                })
            })
        })
    })
}