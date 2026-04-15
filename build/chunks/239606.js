/** chunk id: 239606 params = (module,exports,require) **/
l.d(n, {
    A: () => eP
});
var i = l(627968),
    t = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(311907),
    o = l(397927),
    d = l(241524),
    c = l(770178),
    u = l(80682),
    m = l(793574),
    p = l(688810),
    x = l(351966),
    A = l(361628),
    g = l(744808),
    f = l(915089),
    h = l(713517),
    v = l(645507),
    j = l(922590),
    I = l(821269),
    N = l(437774),
    y = l(594832),
    C = l(994500),
    b = l(351906),
    E = l(562153),
    T = l(474090),
    P = l(183555),
    _ = l(622543),
    R = l(591179),
    O = l(950191),
    S = l(101928),
    L = l(837529),
    k = l(346713),
    D = l(672691),
    U = l(195898),
    G = l(486678),
    M = l(567915),
    F = l(716804),
    w = l(679492),
    V = l(718019),
    B = l(31432),
    z = l(915614),
    H = l(389996),
    W = l(223330),
    K = l(559506),
    $ = l(361311),
    X = l(886891),
    Y = l(439053),
    Z = l(743987),
    q = l(312381),
    J = l(501193),
    Q = l(383448),
    ee = l(946356),
    en = l(810396),
    el = l(159218),
    ei = l(280645),
    et = l(291335),
    es = l(807651),
    ea = l(463156),
    er = l(510059),
    eo = l(546136),
    ed = l(982599),
    ec = l(399122),
    eu = l(358826),
    em = l(83013),
    ep = l(878210),
    ex = l(515054),
    eA = l(513265),
    eg = l(828822),
    ef = l(629747),
    eh = l(160983),
    ev = l(518477),
    ej = l(652215),
    eI = l(996988),
    eN = l(985018),
    ey = l(572841);
let eC = e => e * (2 - e),
    eb = {
        "compact-sm": {
            avatarOffsetX: 16
        },
        "compact-xs": {
            avatarSize: o._3J.SIZE_96,
            avatarOffsetX: 16
        }
    };

function eE(e) {
    let {
        user: n,
        currentUser: l,
        guildId: s,
        originGuildId: d,
        channelId: u,
        displayProfile: m,
        nickname: p,
        hasEntered: A,
        customStatusPrompt: g,
        onClose: f,
        avatarDecorationOverride: y,
        avatarOverride: E,
        allowEditing: P = !1,
        isLoading: _ = !1
    } = e, R = n.id === l.id, O = t.useRef(null), {
        isHoveringOrFocusing: S
    } = (0, h.A)(O), [L, U] = t.useState(), G = t.useCallback(e => {
        let n = e.contentRect.width;
        n <= 350 ? U("compact-xs") : n <= 380 ? U("compact-sm") : U(void 0)
    }, []);
    (0, c.g)(O, G, [], {
        fireOnMount: !0
    });
    let M = null != L ? eb[L] : void 0,
        F = t.useMemo(() => g ?? (0, v.A)(), [g]),
        {
            relationshipType: w,
            originApplicationId: q
        } = (0, r.cf)([C.A], () => ({
            relationshipType: C.A.getRelationshipType(n.id),
            originApplicationId: C.A.getOriginApplicationId(n.id)
        })),
        ea = (0, r.bG)([b.A], () => b.A.hidePersonalInformation),
        eo = (0, I.q)({
            userId: n.id
        }),
        ed = (0, j.fi)(n.id),
        {
            appIdentities: eu,
            connections: ep
        } = (0, D.A)(n.id),
        ex = (0, k.A)(n.id),
        eA = P ? ef.A : z.A,
        eh = P ? eg.A : V.A;
    return (0, i.jsxs)("main", {
        className: a()(ey.profile, null != L && ey[L]),
        ref: O,
        "aria-busy": _,
        children: [(0, i.jsxs)("div", {
            className: ey.profileHeader,
            children: [(0, i.jsx)(eA, {
                user: n,
                displayProfile: m,
                themeType: eI.d.MODAL_V2,
                specOverrides: M
            }), (0, i.jsx)(Y.A, {
                userId: n.id,
                onClose: f,
                className: ey.interactionToast
            }), (0, i.jsx)(eh, {
                user: n,
                displayProfile: m,
                guildId: s,
                channelId: u,
                themeType: eI.d.MODAL_V2,
                specOverrides: M,
                avatarDecorationOverride: y,
                avatarOverride: E
            }), (0, i.jsx)(el.A, {
                user: n,
                guildId: s,
                channelId: u,
                themeType: eI.d.MODAL_V2,
                hasEntered: A,
                prompt: R ? F : null
            })]
        }), (0, i.jsxs)(o.HOs, {
            fade: !0,
            className: ey.profileBody,
            children: [(0, i.jsx)(K.A, {
                userId: n.id
            }), (0, i.jsx)(en.A, {
                user: n,
                guildId: m?.guildId ?? void 0,
                onClose: f,
                nickname: p,
                nicknameVariant: "heading-xl/semibold",
                pronouns: m?.pronouns,
                tags: (0, i.jsx)(B.A, {
                    displayProfile: m,
                    themeType: eI.d.MODAL_V2,
                    onClose: f
                })
            }), w === ej.eA$.PENDING_INCOMING && (0, i.jsx)(ee.A.Overlay, {
                className: ey.profileOverlay,
                children: (0, i.jsx)(X.A, {
                    user: n,
                    applicationId: q,
                    guildId: m?.guildId ?? void 0,
                    channelId: u,
                    className: ey.profileBanner
                })
            }), ed.map(e => {
                let {
                    applicationId: l
                } = e;
                return (0, i.jsx)(ee.A.Overlay, {
                    className: ey.profileOverlay,
                    children: (0, i.jsx)(X.A, {
                        user: n,
                        guildId: m?.guildId ?? void 0,
                        channelId: u,
                        isGameRelationship: !0,
                        applicationId: l,
                        className: ey.profileBanner
                    })
                }, l)
            }), n.isProvisional && (0, i.jsx)(ee.A.Overlay, {
                className: ey.profileOverlay,
                children: (0, i.jsx)(em.A, {
                    heading: eN.intl.string(eN.t.Iyka0U),
                    headingVariant: "text-md/semibold",
                    headingIcon: (0, i.jsx)(o.EpV, {
                        size: "xs",
                        color: "currentColor"
                    }),
                    className: ey.profileBanner,
                    children: (0, i.jsx)(N.T, {
                        userId: n.id,
                        variant: "text-sm/normal"
                    })
                })
            }), (0, i.jsx)(Q.A, {
                user: n,
                className: ey.profileBanner
            }), m?.private && (0, i.jsx)(ee.A.Overlay, {
                className: ey.profileOverlay,
                children: (0, i.jsx)(J.A, {
                    username: p
                })
            }), (0, i.jsx)("div", {
                className: ey.profileButtons,
                children: (0, i.jsx)(es.A, {
                    user: n,
                    currentUser: l,
                    guildId: s,
                    originGuildId: d,
                    channelId: u,
                    displayProfile: m,
                    relationshipType: w,
                    onClose: f
                })
            }), R && (0, i.jsx)(W.A, {
                isPremiumUser: (0, T.ki)(l),
                onInteraction: f
            }), !ea && (0, i.jsx)(H.E, {
                userBio: m?.bio,
                setLineClamp: !1
            }), eo.length > 0 && (0, i.jsx)(em.A, {
                heading: eN.intl.string(eN.t["Uv/eTx"]),
                children: (0, i.jsx)($.A, {
                    applicationIds: eo
                })
            }), (0, i.jsx)(em.A, {
                heading: eN.intl.string(eN.t.a6XYD9),
                children: (0, i.jsx)(Z.A, {
                    userId: n.id,
                    guildId: m?.guildId,
                    tooltipDelay: ev.In
                })
            }), m?.guildId != null && (0, i.jsx)(ei.A, {
                userId: n.id,
                guildId: m.guildId,
                className: ey.profileRolesSection,
                headingVariant: "text-xs/medium",
                headingColor: "currentColor"
            }), (ep.length > 0 || eu.length > 0) && (0, i.jsx)(em.A, {
                heading: eN.intl.string(eN.t["3fe7U5"]),
                scrollTargetId: ev.bk.CONNECTIONS,
                children: (0, i.jsx)(er.A, {
                    applicationIdentities: eu,
                    connections: ep,
                    userId: n.id,
                    className: ey.profileAppConnections
                })
            }), ex.length > 0 && (0, i.jsx)(em.A, {
                heading: eN.intl.string(eN.t.PHjkRE),
                scrollTargetId: ev.bk.APPS,
                children: (0, i.jsx)(et.A, {
                    applicationRoleConnections: ex,
                    onClose: f,
                    className: ey.profileAppConnections
                })
            }), (0, i.jsx)(ec.A, {
                userId: n.id
            })]
        }), m?.profileEffect != null && (0, i.jsx)(x.A, {
            skuId: m?.profileEffect.skuId,
            isHovering: S
        })]
    })
}

function eT(e) {
    let {
        user: n,
        displayProfile: l,
        pendingThemeColors: t,
        children: s
    } = e, {
        theme: a,
        primaryColor: r,
        secondaryColor: o
    } = (0, S.A)({
        user: n,
        displayProfile: l,
        pendingThemeColors: t
    }), {
        profileThemeStyle: d,
        profileThemeClassName: c
    } = (0, U.A)({
        theme: a,
        themeType: null,
        primaryColor: r,
        secondaryColor: o
    });
    return (0, i.jsx)("div", {
        className: c,
        style: d,
        children: s
    })
}

function eP(e) {
    let {
        user: n,
        currentUser: l,
        guildId: s,
        originGuildId: c,
        channelId: x,
        messageId: h,
        roleId: v,
        sessionId: j,
        initialTabSection: I,
        initialScrollTarget: N,
        transitionState: C,
        customStatusPrompt: b,
        onClose: T,
        sourceAnalyticsLocations: S = [],
        themeContainerClassName: k
    } = e, D = n.id === l.id, {
        guildId: U,
        pendingGuildId: V,
        isLoading: B,
        selectUserProfile: z
    } = (0, M.A)({
        userId: n.id,
        initialGuildId: s
    }), H = t.useMemo(() => null != U ? {
        [U]: [n.id]
    } : {}, [U, n.id]);
    (0, u.Eq)(H, "UserProfileModalV2");
    let W = (0, O.Ay)(n.id, U),
        K = (0, A.A)(W?.profileFrame?.skuId, "UserProfileModalV2"),
        $ = (0, R.X)("UserProfileModalV2"),
        X = D && $,
        {
            pendingThemeColors: Y,
            avatarDecorationOverride: Z,
            avatarOverride: J
        } = (0, G.A)({
            user: n,
            allowEditingInModal: X,
            guildId: U
        }),
        {
            isExpanded: Q,
            isAnimating: en,
            transition: el,
            canShowExpand: ei,
            handleExpand: et,
            handleCollapse: es,
            refs: {
                expandIconButtonRef: er,
                expandTabButtonRef: ec,
                collapseButtonRef: em
            }
        } = function() {
            let [e, n] = t.useState(() => window.innerWidth > 928), [l, i] = t.useState(!1), s = (0, o.pnh)(e, {
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
                    easing: eC
                },
                onRest: () => i(!1)
            }), a = (0, d.A)("(min-width: 929px) and (min-height: 550px)"), r = t.useRef(null), c = t.useRef(null), u = t.useRef(null), m = t.useRef(null), p = t.useCallback(() => {
                m.current = "collapse", i(!0), n(!0)
            }, []), x = t.useCallback(() => {
                m.current = "expand", i(!0), n(!1)
            }, []);
            return t.useEffect(() => {
                if (!l) {
                    if ("collapse" === m.current && e) m.current = null, u.current?.focus();
                    else if ("expand" === m.current && !e) {
                        m.current = null;
                        let e = a ? c.current : r.current;
                        e?.focus()
                    }
                }
            }, [e, l, a]), {
                isExpanded: e,
                isAnimating: l,
                transition: s,
                canShowExpand: !e && !l,
                handleExpand: p,
                handleCollapse: x,
                refs: {
                    expandIconButtonRef: r,
                    expandTabButtonRef: c,
                    collapseButtonRef: u
                }
            }
        }(),
        eg = X && ei,
        {
            defaultWishlistId: ef
        } = (0, r.cf)([_.A], () => ({
            defaultWishlistId: _.A.getFirstWishlistId(n.id)
        }));
    (0, y.fw)({
        wishlistId: ef,
        userId: n.id
    });
    let ev = (0, w.fC)(),
        ej = B || null != ev.interactionType,
        eb = (0, L.Nx)() ? null : W?.getBannerURL({
            canAnimate: !1,
            size: 1024
        }),
        eP = (0, eh.A)({
            user: n,
            currentUser: l
        }),
        {
            analyticsLocations: e_
        } = (0, p.Ay)([...S, m.A.USER_PROFILE_MODAL_V2]),
        eR = (0, P.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: j,
            guildId: U,
            channelId: x,
            messageId: h,
            roleId: v
        }),
        eO = E.Ay.useName(W?.guildId, x, n),
        eS = (0, f.GV)(),
        eL = eN.intl.format(eN.t.KRe1Fk, {
            name: eO
        });
    return (0, i.jsx)(p.f5, {
        value: e_,
        children: (0, i.jsx)(P.of, {
            value: eR,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(w.Hl, {
                value: ev,
                children: (0, i.jsx)(F.N, {
                    value: N,
                    children: (0, i.jsxs)(o.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ey.root,
                        transitionState: C,
                        "aria-labelledby": eS,
                        parentComponent: "UserProfileModalV2",
                        children: [(0, i.jsx)(ep.A, {
                            children: (0, i.jsxs)("div", {
                                className: a()(ey.layoutContainer, {
                                    [ey.editingPanelEnabled]: X,
                                    [ey.editingPanelExpanded]: X && Q,
                                    [ey.isAnimating]: en,
                                    [ey.hasPrivateBanner]: W?.private === !0
                                }),
                                children: [(0, i.jsxs)(eT, {
                                    user: n,
                                    displayProfile: W,
                                    pendingThemeColors: Y,
                                    children: [(0, i.jsxs)("div", {
                                        className: ey.modalHeaderButtons,
                                        children: [(0, i.jsx)(ea.A, {
                                            isCurrentUser: D,
                                            onClose: T
                                        }), (0, i.jsx)(o.AC4, {
                                            children: (0, i.jsx)(o.H, {
                                                id: eS,
                                                children: eL
                                            })
                                        }), X && (!Q || en) && (0, i.jsx)(eo._T, {
                                            buttonRef: er,
                                            onClick: et,
                                            className: ey.editingPanelExpandButtonCompact
                                        })]
                                    }), eg && (0, i.jsx)(eo.oA, {
                                        innerRef: ec,
                                        onClick: et,
                                        className: ey.editingPanelExpandButtonDefault
                                    })]
                                }), (0, i.jsxs)(o.Fmo, {
                                    children: [X && el((e, l) => l ? (0, i.jsx)(eo.Ay, {
                                        className: a()(ey.editingPanel, {
                                            [ey.isExpanded]: Q
                                        }),
                                        user: n,
                                        selectedGuildId: V,
                                        onSelectGuildId: z,
                                        onClose: es,
                                        collapseButtonRef: em,
                                        isLoading: B
                                    }) : null), (0, i.jsxs)(ee.A, {
                                        className: a()(k, ey.profileContentContainer),
                                        user: n,
                                        displayProfile: W,
                                        themeType: eI.d.MODAL_V2,
                                        pendingThemeColors: Y,
                                        privateBanner: W?.private === !0 ? (0, i.jsx)(q.A, {}) : void 0,
                                        children: [null != eb && (0, i.jsx)("div", {
                                            className: ey.backgroundImage,
                                            style: {
                                                backgroundImage: `url(${eb})`
                                            }
                                        }), (0, i.jsx)(eu.A, {
                                            isVisible: ej,
                                            showLoadingSpinner: B
                                        }), (0, i.jsx)(eA.A, {
                                            className: ey.toast
                                        }), (0, i.jsx)(eE, {
                                            user: n,
                                            currentUser: l,
                                            guildId: U,
                                            channelId: x,
                                            displayProfile: W,
                                            nickname: eO,
                                            originGuildId: c,
                                            hasEntered: C === o.ip4.ENTERED,
                                            customStatusPrompt: b,
                                            onClose: T,
                                            avatarDecorationOverride: Z,
                                            avatarOverride: J,
                                            allowEditing: X,
                                            isLoading: B
                                        }), (0, i.jsx)(ex.A, {
                                            user: n,
                                            currentUser: l,
                                            displayProfile: W,
                                            guildId: U,
                                            channelId: x,
                                            items: eP,
                                            initialSection: I,
                                            onClose: T
                                        }), null != K && (0, i.jsx)(g.A, {
                                            frame: K,
                                            layout: "MODAL_V2"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, i.jsx)(ed.A, {
                            userId: n.id,
                            guildId: U,
                            className: ey.pendingChangesToolbar
                        })]
                    })
                })
            })
        })
    })
}