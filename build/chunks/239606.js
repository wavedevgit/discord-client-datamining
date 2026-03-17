/** chunk id: 239606 params = (module,exports,require) **/
t.d(l, {
    A: () => eN
});
var i = t(627968),
    n = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(497766),
    o = t(311907),
    d = t(397927),
    c = t(770178),
    u = t(80682),
    m = t(793574),
    A = t(688810),
    p = t(915089),
    x = t(713517),
    g = t(645507),
    h = t(922590),
    f = t(821269),
    j = t(182592),
    I = t(437774),
    v = t(594832),
    N = t(994500),
    y = t(351906),
    E = t(203982),
    T = t(562153),
    C = t(474090),
    _ = t(183555),
    b = t(622543),
    O = t(591179),
    P = t(950191),
    R = t(101928),
    S = t(837529),
    G = t(346713),
    L = t(484509),
    U = t(195898),
    D = t(576622),
    M = t(716804),
    F = t(679492),
    k = t(718019),
    w = t(31432),
    V = t(915614),
    B = t(389996),
    z = t(223330),
    W = t(559506),
    $ = t(361311),
    K = t(886891),
    H = t(439053),
    Z = t(743987),
    J = t(312381),
    Y = t(501193),
    q = t(383448),
    X = t(946356),
    Q = t(810396),
    ee = t(159218),
    el = t(280645),
    et = t(291335),
    ei = t(807651),
    en = t(463156),
    es = t(510059),
    ea = t(546136),
    er = t(982599),
    eo = t(399122),
    ed = t(83013),
    ec = t(515054),
    eu = t(513265),
    em = t(384377),
    eA = t(160983),
    ep = t(518477),
    ex = t(652215),
    eg = t(996988),
    eh = t(985018),
    ef = t(661388);
let ej = (0, d.FT9)(d._3J.SIZE_120),
    eI = {
        "compact-sm": {
            avatarOffsetX: 16
        },
        "compact-xs": {
            avatarSize: d._3J.SIZE_96,
            avatarOffsetX: 16
        }
    };

function ev(e) {
    let {
        user: l,
        isCurrentUser: t,
        guildId: s,
        displayProfile: r,
        onChangeGuildId: o,
        children: c
    } = e, u = (0, O.X)("UserProfileModalV2EditingPanelWrapper"), m = t && u, [A, p] = n.useState(!0), {
        theme: x,
        primaryColor: g,
        secondaryColor: h
    } = (0, R.A)({
        user: l,
        displayProfile: r
    }), {
        profileThemeStyle: f,
        profileThemeClassName: j
    } = (0, U.A)({
        theme: x,
        themeType: null,
        primaryColor: g,
        secondaryColor: h
    });
    return (0, i.jsxs)("div", {
        className: a()(ef.layoutContainer, {
            [ef.hasEditingPanel]: m && A
        }),
        children: [m && (A ? (0, i.jsx)(ea.A, {
            className: ef.editingPanel,
            guildId: s,
            onChangeGuildId: o,
            onClose: () => p(!1)
        }) : (0, i.jsx)(d.DUT, {
            className: a()(j, ef.editingPanelExpandButton),
            style: f,
            "aria-label": "Open editing panel",
            onClick: () => p(!0),
            children: (0, i.jsx)(d.NDp, {
                size: "sm",
                color: d.LU0.colors.ICON_STRONG
            })
        })), c]
    })
}

function eN(e) {
    let {
        user: l,
        currentUser: t,
        guildId: s,
        originGuildId: R,
        channelId: U,
        messageId: ea,
        roleId: eN,
        sessionId: ey,
        initialTabSection: eE,
        initialScrollTarget: eT,
        transitionState: eC,
        customStatusPrompt: e_,
        onClose: eb,
        sourceAnalyticsLocations: eO = [],
        themeContainerClassName: eP
    } = e, eR = l.id === t.id, eS = l.getAvatarURL(void 0, ej), eG = l.bot, eL = (0, O.X)("UserProfileModalV2"), [eU, eD] = n.useState(s), [eM, eF] = n.useState(s), ek = n.useRef(eM), ew = n.useCallback(e => {
        eD(e ?? void 0)
    }, []);
    n.useEffect(() => {
        let e = !1;
        return (0, D.A)(l.id, eS, {
            type: "modal",
            guildId: eU,
            withMutualFriendsCount: !eG,
            withMutualFriends: !1,
            withMutualGuilds: !0
        }).then(() => {
            e || (eF(eU), ek.current = eU)
        }, () => {
            e || eD(ek.current)
        }), () => {
            e = !0
        }
    }, [eU, l.id, eS, eG]);
    let {
        analyticsLocations: eV
    } = (0, A.Ay)([...eO, m.A.USER_PROFILE_MODAL_V2]), eB = (0, _.pb)({
        layout: "MODAL_V2",
        userId: l.id,
        sourceSessionId: ey,
        guildId: eM,
        channelId: U,
        messageId: ea,
        roleId: eN
    }), ez = n.useRef(null), eW = (0, x.M)(ez), [e$, eK] = n.useState(!1), [eH, eZ] = n.useState(), eJ = n.useCallback(e => {
        let l = e.contentRect.width;
        l <= 350 ? eZ("compact-xs") : l <= 380 ? eZ("compact-sm") : eZ(void 0)
    }, []);
    (0, c.g)(ez, eJ, [], {
        fireOnMount: !0
    });
    let eY = null != eH ? eI[eH] : void 0,
        {
            defaultWishlistId: eq
        } = (0, o.cf)([b.A], () => ({
            defaultWishlistId: b.A.getFirstWishlistId(l.id)
        }));
    (0, v.fw)({
        wishlistId: eq,
        userId: l.id
    });
    let eX = (0, F.fC)(),
        eQ = (0, d.zhh)({
            opacity: +(null != eX.interactionType),
            config: {
                duration: 150
            }
        }),
        e0 = n.useMemo(() => null != eM ? {
            [eM]: [l.id]
        } : {}, [eM, l.id]);
    (0, u.Eq)(e0, "UserProfileModalV2");
    let e9 = (0, P.Ay)(l.id, eM),
        e1 = T.Ay.useName(e9?.guildId, U, l),
        {
            relationshipType: e7,
            originApplicationId: e6
        } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(l.id),
            originApplicationId: N.A.getOriginApplicationId(l.id)
        })),
        e8 = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        e2 = (0, S.Nx)() ? null : e9?.getBannerURL({
            canAnimate: !1,
            size: 1024
        }),
        e3 = n.useMemo(() => e_ ?? (0, g.A)(), [e_]),
        e5 = (0, eA.A)({
            user: l,
            currentUser: t
        }),
        e4 = (0, f.q)({
            userId: l.id
        }),
        le = (0, h.fi)(l.id),
        ll = (0, L.A)(l.id),
        lt = (0, G.A)(l.id),
        li = (0, p.GV)(),
        ln = eh.intl.format(eh.t.KRe1Fk, {
            name: e1
        });
    return n.useEffect(() => {
        let e = () => {
            eK(!0), setTimeout(() => {
                eK(!1)
            }, 1e3)
        };
        return E._.subscribe(ex.jej.SHAKE_PROFILE_MODAL, e), () => {
            E._.unsubscribe(ex.jej.SHAKE_PROFILE_MODAL, e), (0, em.XA)(null)
        }
    }, []), (0, i.jsx)(A.f5, {
        value: eV,
        children: (0, i.jsx)(_.of, {
            value: eB,
            isLoaded: e9?.isLoaded,
            children: (0, i.jsx)(F.Hl, {
                value: eX,
                children: (0, i.jsx)(M.N, {
                    value: eT,
                    children: (0, i.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ef.root,
                        transitionState: eC,
                        "aria-labelledby": li,
                        parentComponent: "UserProfileModalV2",
                        children: [(0, i.jsxs)(d.bfh, {
                            isShaking: e$,
                            intensity: 1.4,
                            children: [(0, i.jsx)(d.AC4, {
                                children: (0, i.jsx)(d.H, {
                                    id: li,
                                    children: ln
                                })
                            }), (0, i.jsx)(d.Fmo, {
                                children: (0, i.jsx)(ev, {
                                    user: l,
                                    isCurrentUser: eR,
                                    guildId: eU,
                                    displayProfile: e9,
                                    onChangeGuildId: ew,
                                    children: (0, i.jsxs)(X.A, {
                                        className: a()(eP, ef.themeContainer),
                                        user: l,
                                        displayProfile: e9,
                                        themeType: eg.d.MODAL_V2,
                                        privateBanner: e9?.private === !0 ? (0, i.jsx)(J.A, {}) : void 0,
                                        children: [null != e2 && (0, i.jsx)("div", {
                                            className: ef.backgroundImage,
                                            style: {
                                                backgroundImage: `url(${e2})`
                                            }
                                        }), null != eX.interactionType && (0, i.jsx)(r.animated.div, {
                                            style: eQ,
                                            className: ef.backdrop
                                        }), (0, i.jsx)(en.A, {
                                            className: ef.modalCloseButton,
                                            isCurrentUser: eR,
                                            onClose: eb
                                        }), (0, i.jsx)(eu.A, {
                                            onAutoHide: () => (0, em.XA)(null),
                                            className: ef.toast
                                        }), (0, i.jsxs)("div", {
                                            className: a()(ef.profile, null != eH && ef[eH]),
                                            ref: ez,
                                            children: [(0, i.jsxs)("div", {
                                                className: ef.profileHeader,
                                                children: [(0, i.jsx)(V.A, {
                                                    user: l,
                                                    displayProfile: e9,
                                                    themeType: eg.d.MODAL_V2,
                                                    specOverrides: eY
                                                }), (0, i.jsx)(H.A, {
                                                    userId: l.id,
                                                    onClose: eb,
                                                    className: ef.interactionToast
                                                }), (0, i.jsx)(k.A, {
                                                    user: l,
                                                    displayProfile: e9,
                                                    guildId: eM,
                                                    channelId: U,
                                                    themeType: eg.d.MODAL_V2,
                                                    specOverrides: eY
                                                }), (0, i.jsx)(ee.A, {
                                                    user: l,
                                                    guildId: eM,
                                                    channelId: U,
                                                    themeType: eg.d.MODAL_V2,
                                                    hasEntered: eC === d.ip4.ENTERED,
                                                    prompt: eR ? e3 : null
                                                })]
                                            }), (0, i.jsxs)(d.HOs, {
                                                fade: !0,
                                                className: ef.profileBody,
                                                children: [(0, i.jsx)(W.A, {
                                                    userId: l.id
                                                }), (0, i.jsx)(Q.A, {
                                                    user: l,
                                                    guildId: e9?.guildId ?? void 0,
                                                    onClose: eb,
                                                    nickname: T.Ay.useName(e9?.guildId, U, l),
                                                    nicknameVariant: "heading-xl/semibold",
                                                    pronouns: e9?.pronouns,
                                                    tags: (0, i.jsx)(w.A, {
                                                        displayProfile: e9,
                                                        themeType: eg.d.MODAL_V2,
                                                        onClose: eb
                                                    })
                                                }), e7 === ex.eA$.PENDING_INCOMING && (0, i.jsx)(X.A.Overlay, {
                                                    className: ef.profileOverlay,
                                                    children: (0, i.jsx)(K.A, {
                                                        user: l,
                                                        applicationId: e6,
                                                        guildId: e9?.guildId ?? void 0,
                                                        channelId: U,
                                                        className: ef.profileBanner
                                                    })
                                                }), le.map(e => {
                                                    let {
                                                        applicationId: t
                                                    } = e;
                                                    return (0, i.jsx)(X.A.Overlay, {
                                                        className: ef.profileOverlay,
                                                        children: (0, i.jsx)(K.A, {
                                                            user: l,
                                                            guildId: e9?.guildId ?? void 0,
                                                            channelId: U,
                                                            isGameRelationship: !0,
                                                            applicationId: t,
                                                            className: ef.profileBanner
                                                        })
                                                    }, t)
                                                }), l.isProvisional && (0, i.jsx)(X.A.Overlay, {
                                                    className: ef.profileOverlay,
                                                    children: (0, i.jsx)(ed.A, {
                                                        heading: eh.intl.string(eh.t.Iyka0U),
                                                        headingVariant: "text-md/semibold",
                                                        headingIcon: (0, i.jsx)(d.EpV, {
                                                            size: "xs",
                                                            color: "currentColor"
                                                        }),
                                                        className: ef.profileBanner,
                                                        children: (0, i.jsx)(I.T, {
                                                            userId: l.id,
                                                            variant: "text-sm/normal"
                                                        })
                                                    })
                                                }), eR && (0, i.jsx)(z.A, {
                                                    isPremiumUser: (0, C.ki)(t),
                                                    onInteraction: eb
                                                }), (0, i.jsx)(q.A, {
                                                    user: l,
                                                    className: ef.profileBanner
                                                }), e9?.private && (0, i.jsx)(X.A.Overlay, {
                                                    className: ef.profileOverlay,
                                                    children: (0, i.jsx)(Y.A, {
                                                        username: e1
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: ef.profileButtons,
                                                    children: (0, i.jsx)(ei.A, {
                                                        user: l,
                                                        currentUser: t,
                                                        guildId: eM,
                                                        originGuildId: R,
                                                        channelId: U,
                                                        displayProfile: e9,
                                                        relationshipType: e7,
                                                        onClose: eb,
                                                        onChangeGuildId: eL ? ew : void 0
                                                    })
                                                }), e9?.bio != null && e9?.bio !== "" && !e8 && (0, i.jsx)(B.A, {
                                                    userBio: e9.bio,
                                                    setLineClamp: !1
                                                }), e4.length > 0 && (0, i.jsx)(ed.A, {
                                                    heading: eh.intl.string(eh.t["Uv/eTx"]),
                                                    children: (0, i.jsx)($.A, {
                                                        applicationIds: e4
                                                    })
                                                }), (0, i.jsx)(ed.A, {
                                                    heading: eh.intl.string(eh.t.a6XYD9),
                                                    children: (0, i.jsx)(Z.A, {
                                                        userId: l.id,
                                                        guildId: e9?.guildId,
                                                        tooltipDelay: ep.In
                                                    })
                                                }), e9?.guildId != null && (0, i.jsx)(el.A, {
                                                    userId: l.id,
                                                    guildId: e9.guildId,
                                                    className: ef.profileRolesSection,
                                                    headingVariant: "text-xs/medium",
                                                    headingColor: "currentColor"
                                                }), ll.length > 0 && (0, i.jsx)(ed.A, {
                                                    heading: eh.intl.string(eh.t["3fe7U5"]),
                                                    scrollTargetId: ep.bk.CONNECTIONS,
                                                    children: (0, i.jsx)(es.A, {
                                                        connections: ll,
                                                        userId: l.id,
                                                        className: ef.profileAppConnections
                                                    })
                                                }), lt.length > 0 && (0, i.jsx)(ed.A, {
                                                    heading: eh.intl.string(eh.t.PHjkRE),
                                                    scrollTargetId: ep.bk.APPS,
                                                    children: (0, i.jsx)(et.A, {
                                                        applicationRoleConnections: lt,
                                                        onClose: eb,
                                                        className: ef.profileAppConnections
                                                    })
                                                }), (0, i.jsx)(eo.A, {
                                                    userId: l.id
                                                })]
                                            }), e9?.profileEffect != null && (0, i.jsx)(j.A, {
                                                skuId: e9?.profileEffect.skuId,
                                                isHovering: eW
                                            })]
                                        }), (0, i.jsx)(ec.A, {
                                            user: l,
                                            currentUser: t,
                                            displayProfile: e9,
                                            guildId: eM,
                                            channelId: U,
                                            items: e5,
                                            initialSection: eE,
                                            onClose: eb
                                        })]
                                    })
                                })
                            })]
                        }), (0, i.jsx)(er.A, {
                            userId: l.id,
                            className: ef.pendingChangesToolbar
                        })]
                    })
                })
            })
        })
    })
}