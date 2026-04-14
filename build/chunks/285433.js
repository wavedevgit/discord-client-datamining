/** chunk id: 285433 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(294426),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(770178),
    _ = n(765548),
    m = n(341915),
    h = n(890687),
    p = n(918338),
    g = n(270045),
    A = n(57718),
    x = n(847641),
    f = n(398025);
n(433745);
var C = n(818348),
    E = n(985018),
    I = n(798324);
let v = e => {
    let {
        isQuestExpired: t,
        quest: n,
        location: s,
        size: v,
        expansionSpring: b,
        isAnimating: T,
        isExpanded: y,
        isInteracting: S,
        contentPosition: N,
        toggleExpanded: j,
        sourceQuestContent: L
    } = e, [R, P] = l.useState(null), [D, M] = l.useState(null), w = (0, _.A)(e => {
        let t = e.target;
        P(t.offsetWidth), M(t.scrollWidth)
    }), k = (0, u.w)(w), O = s === m.uF.QUESTS_EMBED, U = n.userStatus?.completedAt != null, B = (0, h.S5)(n.config.expiresAt), G = (0, h.S5)(n.config.rewardsConfig.rewardsExpireAt), F = l.useMemo(() => null != n.config.cosponsorMetadata, [n]), H = (0, i.jsx)(A.Ay, {
        className: I.Iu,
        logotypeClassName: F ? I.qN : void 0,
        gameTileSize: A.LU.MEDIUM,
        quest: n,
        separatorSpacing: A.C8.MEDIUM,
        theme: C.NJ.DARK,
        withGameTile: !O || null == n.config.cosponsorMetadata
    });
    return (0, i.jsxs)("div", {
        className: r()(I.nw, {
            [I.Gg]: O,
            [I.e5]: "xs" === v
        }),
        "aria-label": E.intl.string(E.t.dcl9MQ),
        children: [(0, i.jsx)(p.A, {
            quest: n,
            isInteracting: S,
            containerClassName: I.v7,
            imageSize: {
                width: 660,
                height: 185
            },
            imageClassName: I.Z5
        }), (0, i.jsxs)("div", {
            className: I.wx,
            "aria-expanded": y,
            children: [(0, i.jsx)(a.animated.div, {
                className: r()(I.VW, {
                    [I.eX]: O
                }),
                children: (0, i.jsx)(a.animated.div, {
                    className: r()(I.Yu, {
                        [I.Gg]: O
                    }),
                    style: {
                        opacity: (0, f.a)(b.to({
                            range: [0, 1],
                            output: [0, 1]
                        })),
                        visibility: T || y ? "inherit" : "hidden"
                    },
                    "aria-hidden": !T && !y,
                    children: (0, i.jsxs)("div", {
                        className: I.uA,
                        children: [(0, i.jsxs)("div", {
                            className: I._V,
                            children: [H, O ? null : (0, i.jsx)(x.A, {
                                color: "always-white"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: I.P9,
                            children: [(0, i.jsx)(d.m, {
                                __unsupportedReactNodeAsText: n.config.messages.questName,
                                shouldShow: null != R && null != D && R < D,
                                children: (0, i.jsx)(c.Heading, {
                                    ref: k,
                                    variant: "lg" === v ? "heading-xxl/bold" : "sm" === v ? "heading-xl/bold" : "heading-lg/bold",
                                    className: I.R_,
                                    color: "always-white",
                                    children: E.intl.format(E.t.EAYZAr, {
                                        questName: n.config.messages.questName
                                    })
                                })
                            }), (0, i.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: U ? E.intl.formatToPlainString(E.t.APddvF, {
                                    expirationDate: G
                                }) : t ? E.intl.formatToPlainString(E.t.v7xMw7, {
                                    expirationDate: B
                                }) : E.intl.formatToPlainString(E.t["pX+fmn"], {
                                    expirationDate: B
                                })
                            })]
                        })]
                    })
                })
            }), (0, i.jsx)(a.animated.div, {
                className: I._q,
                style: {
                    top: 20
                },
                children: (0, i.jsx)(g.C, {
                    questContent: s,
                    quest: n,
                    questContentPosition: N,
                    shouldShowDisclosure: !0,
                    showShareLink: !t && O,
                    sourceQuestContent: L,
                    children: e => (0, i.jsx)(a.animated.div, {
                        style: {
                            opacity: (0, f.a)(b),
                            visibility: T || y ? "inherit" : "hidden"
                        },
                        "aria-hidden": !T && !y,
                        children: (0, i.jsx)(c.DUT, {
                            ...e,
                            className: I.P0,
                            "aria-label": E.intl.string(E.t.DEoVWZ),
                            children: (0, i.jsx)(c.jNK, {
                                size: "md",
                                color: o.A.colors.WHITE
                            })
                        })
                    })
                })
            })]
        })]
    })
}