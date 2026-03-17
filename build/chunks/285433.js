/** chunk id: 285433 params = (module,exports,require) **/
n.d(t, {
    A: () => R
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(497766),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(765671),
    _ = n(770178),
    m = n(765548),
    h = n(341915),
    p = n(714510),
    g = n(890687),
    A = n(18437),
    x = n(590202),
    f = n(918338),
    C = n(270045),
    E = n(57718),
    I = n(847641),
    T = n(646764),
    b = n(398025),
    v = n(433745),
    S = n(654487),
    y = n(818348),
    N = n(985018),
    j = n(806449);
let L = (0, s.animated)(c.abt),
    R = e => {
        let {
            isQuestExpired: t,
            quest: n,
            location: l,
            size: R,
            expansionSpring: P,
            isAnimating: M,
            isExpanded: D,
            isInteracting: O,
            contentPosition: w,
            toggleExpanded: k,
            sourceQuestContent: U
        } = e, {
            ref: G,
            height: B
        } = (0, u.Ay)(), [F, H] = r.useState(null), [V, W] = r.useState(null), q = (0, m.A)(e => {
            let t = e.target;
            H(t.offsetWidth), W(t.scrollWidth)
        }), Y = (0, _.w)(q), z = (0, v.a3)(l), Q = l === h.uF.QUESTS_EMBED, K = (0, p.wT)(n, S.rE.QUESTS_CARD, l, U), J = n.userStatus?.completedAt != null, X = (0, A.Ut)(), Z = (0, g.S5)(n.config.expiresAt), $ = (0, g.S5)(n.config.rewardsConfig.rewardsExpireAt), ee = r.useMemo(() => null != n.config.cosponsorMetadata, [n]), et = e => {
            e.stopPropagation(), e.currentTarget.blur(), k(), X({
                questId: n.id,
                questContent: l,
                questContentCTA: D ? x.Cy.COLLAPSE : x.Cy.EXPAND,
                questContentPosition: w,
                sourceQuestContent: U
            })
        }, en = (0, i.jsx)(E.Ay, {
            className: j.Iu,
            logotypeClassName: ee ? j.qN : void 0,
            gameTileSize: E.LU.MEDIUM,
            quest: n,
            separatorSpacing: E.C8.MEDIUM,
            theme: y.NJ.DARK,
            withGameTile: !Q || null == n.config.cosponsorMetadata
        });
        return (0, i.jsxs)("div", {
            className: a()(j.nw, {
                [j.fu]: z,
                [j.Gg]: Q,
                [j.e5]: "xs" === R
            }),
            "aria-label": N.intl.string(N.t.dcl9MQ),
            style: {
                height: z ? B : void 0
            },
            children: [(0, i.jsx)(f.A, {
                quest: n,
                isInteracting: O,
                containerClassName: j.v7,
                imageSize: {
                    width: 660,
                    height: 185
                },
                imageClassName: j.Z5
            }), (0, i.jsxs)("div", {
                className: j.wx,
                "aria-expanded": D,
                children: [(0, i.jsxs)(s.animated.div, {
                    className: a()(j.VW, {
                        [j.eX]: Q
                    }),
                    style: {
                        y: z ? P.to({
                            range: [0, 1],
                            output: [v.es, 0]
                        }) : void 0
                    },
                    children: [z && (0, i.jsx)(s.animated.div, {
                        className: j.gM,
                        style: {
                            opacity: (0, b.a)(P.to({
                                range: [0, 1],
                                output: [1, 0]
                            })),
                            visibility: M || !D ? "inherit" : "hidden"
                        },
                        "aria-hidden": !M && D,
                        children: (0, i.jsxs)(c.sqX, {
                            "aria-label": N.intl.string(N.t.dcl9MQ),
                            onClick: et,
                            className: j._F,
                            children: [(0, i.jsx)("div", {
                                className: j.SY,
                                children: (0, i.jsx)(T.A, {
                                    quest: n,
                                    questContent: l,
                                    className: j.EK,
                                    sourceQuestContent: U
                                })
                            }), (0, i.jsxs)("div", {
                                className: j.if,
                                children: [(0, i.jsxs)("div", {
                                    className: j.dc,
                                    children: [en, (0, i.jsx)(I.A, {
                                        color: "always-white"
                                    })]
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    children: K
                                })]
                            })]
                        })
                    }), (0, i.jsx)(s.animated.div, {
                        ref: e => {
                            G.current = e
                        },
                        className: a()(j.Yu, {
                            [j.fu]: z,
                            [j.Gg]: Q
                        }),
                        style: {
                            opacity: (0, b.a)(P.to({
                                range: [0, 1],
                                output: [0, 1]
                            })),
                            visibility: M || D ? "inherit" : "hidden"
                        },
                        "aria-hidden": !M && !D,
                        children: (0, i.jsxs)("div", {
                            className: j.uA,
                            children: [(0, i.jsxs)("div", {
                                className: j._V,
                                children: [en, Q ? null : (0, i.jsx)(I.A, {
                                    color: "always-white"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: j.P9,
                                children: [(0, i.jsx)(d.m, {
                                    __unsupportedReactNodeAsText: n.config.messages.questName,
                                    shouldShow: null != F && null != V && F < V,
                                    children: (0, i.jsx)(c.Heading, {
                                        ref: Y,
                                        variant: "lg" === R ? "heading-xxl/bold" : "sm" === R ? "heading-xl/bold" : "heading-lg/bold",
                                        className: j.R_,
                                        color: "always-white",
                                        children: N.intl.format(N.t.EAYZAr, {
                                            questName: n.config.messages.questName
                                        })
                                    })
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: J ? N.intl.formatToPlainString(N.t.APddvF, {
                                        expirationDate: $
                                    }) : t ? N.intl.formatToPlainString(N.t.v7xMw7, {
                                        expirationDate: Z
                                    }) : N.intl.formatToPlainString(N.t["pX+fmn"], {
                                        expirationDate: Z
                                    })
                                })]
                            })]
                        })
                    })]
                }), (0, i.jsxs)(s.animated.div, {
                    className: j._q,
                    style: {
                        top: z ? P.to({
                            range: [0, 1],
                            output: [v.es / 2 - v.uR / 2, v.wl]
                        }) : v.wl
                    },
                    children: [(0, i.jsx)(C.C, {
                        questContent: l,
                        quest: n,
                        questContentPosition: w,
                        shouldShowDisclosure: !0,
                        hideLearnMore: z,
                        showShareLink: !t && Q,
                        sourceQuestContent: U,
                        children: e => (0, i.jsx)(s.animated.div, {
                            style: {
                                opacity: (0, b.a)(P),
                                visibility: M || D ? "inherit" : "hidden"
                            },
                            "aria-hidden": !M && !D,
                            children: (0, i.jsx)(c.DUT, {
                                ...e,
                                className: j.P0,
                                "aria-label": N.intl.string(N.t.DEoVWZ),
                                children: (0, i.jsx)(c.jNK, {
                                    size: "md",
                                    color: o.A.colors.WHITE
                                })
                            })
                        })
                    }), !(0, v.rW)(l) && (0, i.jsx)(c.DUT, {
                        onClick: et,
                        className: j.P0,
                        "aria-label": D ? N.intl.string(N.t.iTcuma) : N.intl.string(N.t.dcl9MQ),
                        children: (0, i.jsx)(L, {
                            style: {
                                rotate: P.to({
                                    range: [0, 1],
                                    output: [0, 180]
                                })
                            },
                            color: o.A.colors.WHITE
                        })
                    })]
                })]
            })]
        })
    }