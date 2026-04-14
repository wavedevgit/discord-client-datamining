/** chunk id: 742860 params = (module,exports,require) **/
n.d(t, {
    A: () => en
}), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(445887),
    o = n(889137),
    d = n(311907),
    c = n(827734),
    u = n(397927),
    m = n(775602),
    h = n(607470),
    x = n(409626),
    p = n(829219),
    g = n(859703),
    f = n(341915),
    v = n(405670),
    _ = n(112142),
    b = n(714510),
    j = n(890687),
    A = n(579473),
    C = n(590202),
    y = n(901406),
    S = n(792620),
    E = n(814793),
    T = n(895253),
    N = n(241124),
    I = n(442734),
    k = n(212614),
    O = n(79545),
    R = n(646764),
    w = n(398025),
    D = n(545986),
    M = n(139384),
    P = n(568329),
    L = n(207869),
    U = n(158265),
    B = n(933378),
    G = n(783569),
    F = n(963713),
    V = n(883035),
    W = n(277928),
    H = n(783602),
    K = n(905586),
    z = n(654487),
    $ = n(272111),
    q = n(985018),
    Q = n(833931);
let Y = i.forwardRef(function(e, t) {
    let {
        isHovered: n,
        asset: s,
        poster: l,
        className: r,
        autoPlay: o = !1
    } = e, {
        isExpanded: c
    } = i.useContext(F.T), u = (0, d.bG)([m.A], () => m.A.useReducedMotion), x = i.useRef(null);
    return i.useEffect(() => {
        null != x.current && (c && (!u || n) ? (x.current.currentTime = 0, x.current.play()) : x.current.pause())
    }, [x, c, n, u]), (0, M.A)(x, z.rE.QUESTS_BAR), (0, a.jsx)(h.A, {
        ref: e => {
            x.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e)
        },
        autoPlay: o,
        poster: l,
        loop: !0,
        muted: !0,
        playsInline: !0,
        className: r,
        controls: !1,
        children: (0, a.jsx)("source", {
            src: s.url,
            type: s.mimetype ?? void 0
        })
    })
});

function J(e) {
    let {
        onClick: t
    } = e, {
        quest: n
    } = i.useContext(F.T), s = (0, d.bG)([m.A], () => m.A.useReducedMotion), [r, o] = i.useState(!1), h = (0, A.tW)(n, A.fY.QUEST_BAR_HERO_VIDEO, void 0, !1), x = (0, A.tW)(n, A.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), p = (0, v.Kr)(e => e.getVideoProgressState)(n.id), g = n.userStatus?.completedAt != null && p === v.K2.COMPLETED, f = !g && (!s || r);
    return (0, a.jsxs)(u.DUT, {
        className: Q.QO,
        onClick: t,
        onMouseEnter: () => {
            s && !r && o(!0)
        },
        onMouseLeave: () => {
            s && r && o(!1)
        },
        children: [null != x && (0, a.jsx)(N.Sn, {
            id: "QuestBarContentExpanded_videoThumbnail",
            children: e => (0, a.jsx)("img", {
                ref: e,
                alt: "",
                src: x.url,
                className: Q.Ue
            })
        }), null != h ? (0, a.jsx)(N.Sn, {
            id: "QuestBarContentExpanded_video",
            children: e => (0, a.jsx)(Y, {
                ref: e,
                isHovered: r,
                autoPlay: !1,
                asset: h,
                poster: x?.url,
                className: l()(Q.NM, {
                    [Q.Gc]: f
                })
            })
        }) : null, (0, a.jsx)("div", {
            className: Q.LT,
            children: g ? (0, a.jsx)(u.mqY, {
                color: c.A.colors.WHITE,
                className: Q.t
            }) : (0, a.jsx)(u.udU, {
                color: c.A.colors.WHITE,
                className: Q.t
            })
        })]
    })
}

function X(e) {
    let {
        quest: t
    } = e;
    return (0, a.jsx)(R.A, {
        className: l()(Q.Qq, Q.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2
    })
}

function Z(e) {
    let {
        isInteractable: t,
        containerRef: n,
        onAcceptQuest: s
    } = e, {
        quest: o,
        onGameSheetOpen: c,
        onGameSheetClose: m,
        taskDetails: h
    } = i.useContext(F.T), {
        expansionSpring: p
    } = i.useContext(P.PW), v = i.useRef(null), C = (0, d.bG)([g.A], () => g.A.isEnrolling(o.id), [o]), y = i.useMemo(() => (0, A.tW)(o, A.fY.QUEST_BAR_HERO), [o]), S = (0, b.NA)({
        quest: o
    }), E = i.useMemo(() => (0, A.tW)(o, A.fY.HERO_IMAGE), [o]), R = i.useMemo(() => null == E ? {} : {
        backgroundImage: `url(${E.url})`
    }, [E]), M = _.t.useConfig({
        location: z.rE.QUESTS_BAR
    }), L = (0, b.mU)({
        quest: o,
        location: z.rE.QUESTS_BAR,
        questContent: f.uF.QUEST_BAR_V2,
        taskDetails: h,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        popoutTargetElementRef: v,
        onGameSheetOpened: c,
        onGameSheetClosed: m,
        gameProfileSource: x.Ob.QuestBar
    }), U = (0, O.Pd)(o), B = (0, j.SD)(o), G = (0, j.Oq)(), V = G && B;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
            ref: v,
            children: (0, a.jsxs)("div", {
                className: Q.do,
                ref: n,
                children: [(0, a.jsxs)("div", {
                    className: Q.zH,
                    children: [(0, a.jsx)(X, {
                        quest: o
                    }), (0, a.jsx)(u.Heading, {
                        className: Q.DD,
                        color: "text-strong",
                        variant: "heading-md/medium",
                        children: q.intl.format(q.t.EQa7os, {
                            questName: o.config.messages.questName
                        })
                    }), (0, a.jsxs)("div", {
                        className: Q.zf,
                        children: [(0, a.jsx)(u.Text, {
                            className: Q.h_,
                            variant: "text-xs/normal",
                            children: L
                        }), B && (0, a.jsx)(I.e, {
                            questId: o.id,
                            canUseQuestOrbMultiplier: G
                        })]
                    })]
                }), (0, a.jsx)("div", {
                    className: Q.lO,
                    children: (0, a.jsx)(u.ButtonGroup, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: M.enabled && U === O.UA.UNENROLLED && M.enabledQuestStates.has(O.UA.UNENROLLED) ? (0, a.jsx)(k.A, {
                            quest: o,
                            surface: O.V3.QUEST_BAR_FOOTER,
                            size: "sm",
                            analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                            analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2
                        }) : (0, a.jsx)(u.Button, {
                            onClick: t ? s : void 0,
                            variant: "primary",
                            loading: C,
                            text: S,
                            size: "sm",
                            icon: (0, D.Oz)(o),
                            fullWidth: !0
                        })
                    })
                })]
            })
        }), (0, a.jsx)(T.A, {
            visible: V,
            glow: !0,
            className: Q.Ph
        }), null != E && (0, a.jsx)(r.animated.div, {
            className: Q.AK,
            style: {
                opacity: (0, w.a)(p.to([0, 1], [1, 0]))
            },
            children: (0, a.jsx)("div", {
                className: l()(Q.LC, Q.Ge),
                style: R
            })
        }), (0, a.jsxs)(r.animated.div, {
            className: Q.IC,
            style: {
                backdropFilter: (0, w.Q)(p.to([0, 1], [5, 0]).to(e => `blur(${e}px)`)),
                filter: (0, w.Q)(p.to([0, 1], [.8, 1]).to(e => `brightness(${e})`))
            },
            children: [y.isAnimated ? (0, a.jsx)(N.Sn, {
                id: "QuestBarContentExpanded_heroAnimated",
                children: e => (0, a.jsx)(Y, {
                    ref: e,
                    autoPlay: !0,
                    asset: y,
                    className: Q.LO
                })
            }) : (0, a.jsx)(N.Sn, {
                id: "QuestBarContentExpanded_heroStatic",
                children: e => (0, a.jsx)("img", {
                    ref: e,
                    alt: "",
                    className: Q.LO,
                    src: y.url
                })
            }), (0, a.jsx)("div", {
                className: Q.tV
            })]
        })]
    })
}

function ee(e) {
    let {
        overlayRef: t,
        containerRef: n
    } = e, {
        quest: s,
        taskDetails: d
    } = i.useContext(F.T), {
        expansionSpring: c
    } = i.useContext(P.PW), u = s.userStatus?.completedAt != null, m = d.percentComplete > 0, h = (0, j.Vn)(s), [x, p, g] = (0, j.Qo)(s, d), v = i.useRef(null), _ = i.useRef(null), b = (0, j.RR)({
        quest: s
    }), A = (0, S.vv)(s), E = (0, j.I3)(s), T = i.useCallback(() => {
        (0, D.d5)({
            quest: s,
            questContent: f.uF.QUEST_BAR_V2,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            sourceQuestContentCTA: C.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW
        })
    }, [s]), N = null != E ? E.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.animated.div, {
            className: l()(Q.tv, Q.ag),
            style: {
                backgroundImage: `linear-gradient(90deg, ${$.V1}, ${$.us})`,
                opacity: (0, w.a)(c.to({
                    range: [0, 1],
                    output: [1, 0]
                }))
            }
        }), (0, a.jsxs)("div", {
            className: Q.Fe,
            ref: e => {
                "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (_.current = e)
            },
            children: [(0, a.jsx)(H.A, {}), (0, a.jsx)("div", {
                className: Q.yF
            }), (0, a.jsx)(U.A, {
                overlayRef: t,
                progressBarRef: v,
                isHovered: !1
            }), (0, a.jsx)(W.A, {
                contentLocation: "expanded",
                progressBarRef: v,
                isExpanded: !0,
                percentComplete: N,
                activeScreen: x,
                popoutTargetElementRef: _
            }), (0, a.jsx)(G.T, {
                children: !u && !(0, y.W1)(s) && (0, o.YW)(x).with(f.X0.SELECT, () => (0, a.jsx)(K.A, {
                    onConsole: () => g(z.fO.CONSOLE),
                    onDesktop: () => g(z.fO.DESKTOP)
                })).with(f.X0.DESKTOP, () => (0, a.jsx)(V.A, {
                    quest: s
                })).with(f.X0.CONSOLE, () => (0, a.jsx)(B.A, {
                    quest: s,
                    taskDetails: d
                })).exhaustive()
            }), (0, a.jsxs)(G.T, {
                children: [A && (0, a.jsx)(J, {
                    onClick: T
                }), (0, a.jsx)(L.f, {
                    awaitingConsoleConnections: b,
                    hasMadeProgress: m,
                    isProgressing: h,
                    activeScreen: x,
                    showBackButton: x !== f.X0.SELECT && p.length > 1 && !m && !h,
                    onBack: () => g(null),
                    sourceQuestContent: f.uF.QUEST_BAR_V2
                })]
            })]
        }), (0, a.jsx)("div", {
            className: l()(Q.tv, Q.Sx),
            style: {
                backgroundImage: `linear-gradient(90deg, ${$.V1}, ${$.us})`
            }
        })]
    })
}
async function et(e, t, n, a) {
    (0, S.vv)(e) ? await (0, D.e0)(e, {
        questContent: t,
        questContentCTA: n,
        sourceQuestContent: a,
        sourceQuestContentCTA: n
    }) : (0, E.vA)(e) ? await (0, p.Oy)(e.id, {
        questContent: t,
        questContentCTA: n,
        sourceQuestContent: a
    }) : (0, p.Oy)(e.id, {
        questContent: t,
        questContentCTA: n,
        sourceQuestContent: a
    })
}
let en = i.forwardRef(function(e, t) {
    let {
        children: n,
        className: s,
        overlayRef: o
    } = e, {
        collapsedHeight: d,
        isExpanded: c,
        isExpansionAnimationComplete: u,
        quest: m
    } = i.useContext(F.T), {
        expansionSpring: h
    } = i.useContext(P.PW), {
        launchInGameActivity: x
    } = (0, j.zW)(m), p = (0, E.vA)(m), g = i.useCallback(async () => {
        let e = p ? C.Cy.START_QUEST : C.Cy.ACCEPT_QUEST;
        await et(m, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), p && x()
    }, [m, x, p]), v = m.userStatus?.enrolledAt != null, _ = c && u;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !_,
        className: l()(s, Q.Rh, {
            [Q.Yd]: _,
            [Q.iH]: v
        }),
        style: {
            transform: (0, r.to)([h.to({
                range: [0, 1],
                output: [0, -100]
            }), h.to({
                range: [0, 1],
                output: [0, d]
            })], (e, t) => `translateY(calc(${e}% + ${t}px))`)
        },
        children: [n, (0, a.jsx)(r.animated.div, {
            style: {
                opacity: 1
            },
            children: v ? (0, a.jsx)(ee, {
                overlayRef: o,
                containerRef: t
            }) : (0, a.jsx)(Z, {
                isInteractable: _,
                containerRef: t,
                onAcceptQuest: g
            })
        })]
    })
})