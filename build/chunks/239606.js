/** chunk id: 239606 params = (module,exports,require) **/
l.d(n, {
    A: () => eP
});
var t = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(311907),
    o = l(397927),
    d = l(241524),
    c = l(770178),
    u = l(80682),
    m = l(793574),
    A = l(688810),
    p = l(351966),
    x = l(361628),
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
    R = l(622543),
    _ = l(591179),
    O = l(950191),
    S = l(101928),
    L = l(837529),
    k = l(346713),
    U = l(672691),
    D = l(195898),
    M = l(486678),
    G = l(567915),
    w = l(716804),
    F = l(679492),
    V = l(718019),
    B = l(31432),
    z = l(915614),
    H = l(389996),
    W = l(223330),
    $ = l(559506),
    K = l(361311),
    X = l(886891),
    Y = l(439053),
    Z = l(743987),
    q = l(312381),
    J = l(501193),
    Q = l(383448),
    ee = l(946356),
    en = l(810396),
    el = l(159218),
    et = l(280645),
    ei = l(291335),
    es = l(807651),
    ea = l(463156),
    er = l(510059),
    eo = l(546136),
    ed = l(982599),
    ec = l(399122),
    eu = l(358826),
    em = l(83013),
    eA = l(878210),
    ep = l(515054),
    ex = l(513265),
    eg = l(828822),
    ef = l(629747),
    eh = l(160983),
    ev = l(518477),
    ej = l(652215),
    eI = l(996988),
    eN = l(985018),
    ey = l(645625);
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
        nickname: A,
        hasEntered: x,
        customStatusPrompt: g,
        onClose: f,
        avatarDecorationOverride: y,
        avatarOverride: E,
        allowEditing: P = !1,
        isLoading: R = !1
    } = e, _ = n.id === l.id, O = i.useRef(null), {
        isHoveringOrFocusing: S
    } = (0, h.A)(O), [L, D] = i.useState(), M = i.useCallback(e => {
        let n = e.contentRect.width;
        n <= 350 ? D("compact-xs") : n <= 380 ? D("compact-sm") : D(void 0)
    }, []);
    (0, c.g)(O, M, [], {
        fireOnMount: !0
    });
    let G = null != L ? eb[L] : void 0,
        w = i.useMemo(() => g ?? (0, v.A)(), [g]),
        {
            relationshipType: F,
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
            connections: eA
        } = (0, U.A)(n.id),
        ep = (0, k.A)(n.id),
        ex = P ? ef.A : z.A,
        eh = P ? eg.A : V.A;
    return (0, t.jsxs)("main", {
        className: a()(ey.profile, null != L && ey[L]),
        ref: O,
        "aria-busy": R,
        children: [(0, t.jsxs)("div", {
            className: ey.profileHeader,
            children: [(0, t.jsx)(ex, {
                user: n,
                displayProfile: m,
                themeType: eI.d.MODAL_V2,
                specOverrides: G
            }), (0, t.jsx)(Y.A, {
                userId: n.id,
                onClose: f,
                className: ey.interactionToast
            }), (0, t.jsx)(eh, {
                user: n,
                displayProfile: m,
                guildId: s,
                channelId: u,
                themeType: eI.d.MODAL_V2,
                specOverrides: G,
                avatarDecorationOverride: y,
                avatarOverride: E
            }), (0, t.jsx)(el.A, {
                user: n,
                guildId: s,
                channelId: u,
                themeType: eI.d.MODAL_V2,
                hasEntered: x,
                prompt: _ ? w : null
            })]
        }), (0, t.jsxs)(o.HOs, {
            fade: !0,
            className: ey.profileBody,
            children: [(0, t.jsx)($.A, {
                userId: n.id
            }), (0, t.jsx)(en.A, {
                user: n,
                guildId: m?.guildId ?? void 0,
                onClose: f,
                nickname: A,
                nicknameVariant: "heading-xl/semibold",
                pronouns: m?.pronouns,
                tags: (0, t.jsx)(B.A, {
                    displayProfile: m,
                    themeType: eI.d.MODAL_V2,
                    onClose: f
                })
            }), F === ej.eA$.PENDING_INCOMING && (0, t.jsx)(ee.A.Overlay, {
                className: ey.profileOverlay,
                children: (0, t.jsx)(X.A, {
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
                return (0, t.jsx)(ee.A.Overlay, {
                    className: ey.profileOverlay,
                    children: (0, t.jsx)(X.A, {
                        user: n,
                        guildId: m?.guildId ?? void 0,
                        channelId: u,
                        isGameRelationship: !0,
                        applicationId: l,
                        className: ey.profileBanner
                    })
                }, l)
            }), n.isProvisional && (0, t.jsx)(ee.A.Overlay, {
                className: ey.profileOverlay,
                children: (0, t.jsx)(em.A, {
                    heading: eN.intl.string(eN.t.Iyka0U),
                    headingVariant: "text-md/semibold",
                    headingIcon: (0, t.jsx)(o.EpV, {
                        size: "xs",
                        color: "currentColor"
                    }),
                    className: ey.profileBanner,
                    children: (0, t.jsx)(N.T, {
                        userId: n.id,
                        variant: "text-sm/normal"
                    })
                })
            }), (0, t.jsx)(Q.A, {
                user: n,
                className: ey.profileBanner
            }), m?.private && (0, t.jsx)(ee.A.Overlay, {
                className: ey.profileOverlay,
                children: (0, t.jsx)(J.A, {
                    username: A
                })
            }), (0, t.jsx)("div", {
                className: ey.profileButtons,
                children: (0, t.jsx)(es.A, {
                    user: n,
                    currentUser: l,
                    guildId: s,
                    originGuildId: d,
                    channelId: u,
                    displayProfile: m,
                    relationshipType: F,
                    onClose: f
                })
            }), _ && (0, t.jsx)(W.A, {
                isPremiumUser: (0, T.ki)(l),
                onInteraction: f
            }), !ea && (0, t.jsx)(H.E, {
                userBio: m?.bio,
                setLineClamp: !1
            }), eo.length > 0 && (0, t.jsx)(em.A, {
                heading: eN.intl.string(eN.t["Uv/eTx"]),
                children: (0, t.jsx)(K.A, {
                    applicationIds: eo
                })
            }), (0, t.jsx)(em.A, {
                heading: eN.intl.string(eN.t.a6XYD9),
                children: (0, t.jsx)(Z.A, {
                    userId: n.id,
                    guildId: m?.guildId,
                    tooltipDelay: ev.In
                })
            }), m?.guildId != null && (0, t.jsx)(et.A, {
                userId: n.id,
                guildId: m.guildId,
                className: ey.profileRolesSection,
                headingVariant: "text-xs/medium",
                headingColor: "currentColor"
            }), (eA.length > 0 || eu.length > 0) && (0, t.jsx)(em.A, {
                heading: eN.intl.string(eN.t["3fe7U5"]),
                scrollTargetId: ev.bk.CONNECTIONS,
                children: (0, t.jsx)(er.A, {
                    applicationIdentities: eu,
                    connections: eA,
                    userId: n.id,
                    className: ey.profileAppConnections
                })
            }), ep.length > 0 && (0, t.jsx)(em.A, {
                heading: eN.intl.string(eN.t.PHjkRE),
                scrollTargetId: ev.bk.APPS,
                children: (0, t.jsx)(ei.A, {
                    applicationRoleConnections: ep,
                    onClose: f,
                    className: ey.profileAppConnections
                })
            }), (0, t.jsx)(ec.A, {
                userId: n.id
            })]
        }), m?.profileEffect != null && (0, t.jsx)(p.A, {
            skuId: m?.profileEffect.skuId,
            isHovering: S
        })]
    })
}

function eT(e) {
    let {
        user: n,
        displayProfile: l,
        pendingThemeColors: i,
        children: s
    } = e, {
        theme: a,
        primaryColor: r,
        secondaryColor: o
    } = (0, S.A)({
        user: n,
        displayProfile: l,
        pendingThemeColors: i
    }), {
        profileThemeStyle: d,
        profileThemeClassName: c
    } = (0, D.A)({
        theme: a,
        themeType: null,
        primaryColor: r,
        secondaryColor: o
    });
    return (0, t.jsx)("div", {
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
        channelId: p,
        messageId: h,
        roleId: v,
        sessionId: j,
        initialTabSection: I,
        initialScrollTarget: N,
        transitionState: C,
        customStatusPrompt: b,
        openedAt: T,
        onClose: S,
        sourceAnalyticsLocations: k = [],
        themeContainerClassName: U
    } = e, D = n.id === l.id, {
        guildId: V,
        pendingGuildId: B,
        isLoading: z,
        selectUserProfile: H
    } = (0, G.A)({
        userId: n.id,
        initialGuildId: s
    }), W = i.useMemo(() => null != V ? {
        [V]: [n.id]
    } : {}, [V, n.id]);
    (0, u.Eq)(W, "UserProfileModalV2");
    let $ = (0, O.Ay)(n.id, V),
        K = (0, x.A)($?.profileFrame?.skuId, "UserProfileModalV2"),
        X = (0, _.X)("UserProfileModalV2"),
        Y = D && X,
        {
            pendingThemeColors: Z,
            avatarDecorationOverride: J,
            avatarOverride: Q
        } = (0, M.A)({
            user: n,
            allowEditingInModal: Y,
            guildId: V
        }),
        {
            isExpanded: en,
            isAnimating: el,
            transition: et,
            canShowExpand: ei,
            handleExpand: es,
            handleCollapse: er,
            refs: {
                expandIconButtonRef: ec,
                expandTabButtonRef: em,
                collapseButtonRef: eg
            }
        } = function() {
            let [e, n] = i.useState(() => window.innerWidth > 928), [l, t] = i.useState(!1), s = (0, o.pnh)(e, {
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
                onRest: () => t(!1)
            }), a = (0, d.A)("(min-width: 929px) and (min-height: 550px)"), r = i.useRef(null), c = i.useRef(null), u = i.useRef(null), m = i.useRef(null), A = i.useCallback(() => {
                m.current = "collapse", t(!0), n(!0)
            }, []), p = i.useCallback(() => {
                m.current = "expand", t(!0), n(!1)
            }, []);
            return i.useEffect(() => {
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
                handleExpand: A,
                handleCollapse: p,
                refs: {
                    expandIconButtonRef: r,
                    expandTabButtonRef: c,
                    collapseButtonRef: u
                }
            }
        }(),
        ef = Y && ei,
        {
            defaultWishlistId: ev
        } = (0, r.cf)([R.A], () => ({
            defaultWishlistId: R.A.getFirstWishlistId(n.id)
        }));
    (0, y.fw)({
        wishlistId: ev,
        userId: n.id
    });
    let ej = (0, F.fC)(),
        eb = z || null != ej.interactionType,
        eP = (0, L.Nx)() ? null : $?.getBannerURL({
            canAnimate: !1,
            size: 1024
        }),
        eR = (0, eh.A)({
            user: n,
            currentUser: l
        }),
        {
            analyticsLocations: e_
        } = (0, A.Ay)([...k, m.A.USER_PROFILE_MODAL_V2]),
        eO = (0, P.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: j,
            guildId: V,
            channelId: p,
            messageId: h,
            roleId: v
        }),
        eS = E.Ay.useName($?.guildId, p, n),
        eL = (0, f.GV)(),
        ek = eN.intl.format(eN.t.KRe1Fk, {
            name: eS
        });
    return (0, t.jsx)(A.f5, {
        value: e_,
        children: (0, t.jsx)(P.of, {
            value: eO,
            openedAt: T,
            fetchStartedAt: $?.fetchStartedAt,
            fetchEndedAt: $?.fetchEndedAt,
            isLoaded: $?.isLoaded,
            children: (0, t.jsx)(F.Hl, {
                value: ej,
                children: (0, t.jsx)(w.N, {
                    value: N,
                    children: (0, t.jsxs)(o.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ey.root,
                        transitionState: C,
                        "aria-labelledby": eL,
                        parentComponent: "UserProfileModalV2",
                        children: [(0, t.jsx)(eA.A, {
                            children: (0, t.jsxs)("div", {
                                className: a()(ey.layoutContainer, {
                                    [ey.editingPanelEnabled]: Y,
                                    [ey.editingPanelExpanded]: Y && en,
                                    [ey.isAnimating]: el,
                                    [ey.hasPrivateBanner]: $?.private === !0
                                }),
                                children: [(0, t.jsxs)(eT, {
                                    user: n,
                                    displayProfile: $,
                                    pendingThemeColors: Z,
                                    children: [(0, t.jsxs)("div", {
                                        className: ey.modalHeaderButtons,
                                        children: [(0, t.jsx)(ea.A, {
                                            isCurrentUser: D,
                                            onClose: S
                                        }), (0, t.jsx)(o.AC4, {
                                            children: (0, t.jsx)(o.H, {
                                                id: eL,
                                                children: ek
                                            })
                                        }), Y && (!en || el) && (0, t.jsx)(eo._T, {
                                            buttonRef: ec,
                                            onClick: es,
                                            className: ey.editingPanelExpandButtonCompact
                                        })]
                                    }), ef && (0, t.jsx)(eo.oA, {
                                        innerRef: em,
                                        onClick: es,
                                        className: ey.editingPanelExpandButtonDefault
                                    })]
                                }), (0, t.jsxs)(o.Fmo, {
                                    children: [Y && et((e, l) => l ? (0, t.jsx)(eo.Ay, {
                                        className: a()(ey.editingPanel, {
                                            [ey.isExpanded]: en
                                        }),
                                        user: n,
                                        selectedGuildId: B,
                                        onSelectGuildId: H,
                                        onClose: er,
                                        collapseButtonRef: eg,
                                        isLoading: z
                                    }) : null), (0, t.jsxs)(ee.A, {
                                        className: a()(U, ey.profileContentContainer),
                                        user: n,
                                        displayProfile: $,
                                        themeType: eI.d.MODAL_V2,
                                        pendingThemeColors: Z,
                                        privateBanner: $?.private === !0 ? (0, t.jsx)(q.A, {}) : void 0,
                                        children: [null != eP && (0, t.jsx)("div", {
                                            className: ey.backgroundImage,
                                            style: {
                                                backgroundImage: `url(${eP})`
                                            }
                                        }), (0, t.jsx)(eu.A, {
                                            isVisible: eb,
                                            showLoadingSpinner: z
                                        }), (0, t.jsx)(ex.A, {
                                            className: ey.toast
                                        }), (0, t.jsx)(eE, {
                                            user: n,
                                            currentUser: l,
                                            guildId: V,
                                            channelId: p,
                                            displayProfile: $,
                                            nickname: eS,
                                            originGuildId: c,
                                            hasEntered: C === o.ip4.ENTERED,
                                            customStatusPrompt: b,
                                            onClose: S,
                                            avatarDecorationOverride: J,
                                            avatarOverride: Q,
                                            allowEditing: Y,
                                            isLoading: z
                                        }), (0, t.jsx)(ep.A, {
                                            user: n,
                                            currentUser: l,
                                            displayProfile: $,
                                            guildId: V,
                                            channelId: p,
                                            items: eR,
                                            initialSection: I,
                                            onClose: S
                                        }), null != K && (0, t.jsx)(g.A, {
                                            frame: K,
                                            layout: "MODAL_V2"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, t.jsx)(ed.A, {
                            userId: n.id,
                            guildId: V,
                            className: ey.pendingChangesToolbar
                        })]
                    })
                })
            })
        })
    })
}