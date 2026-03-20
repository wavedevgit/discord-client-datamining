/** chunk id: 988436 params = (module,exports,require) **/
n.d(t, {
    default: () => E,
    i: () => I
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(582754),
    u = n(397927),
    m = n(775602),
    h = n(544028),
    p = n(341915),
    x = n(890687),
    g = n(579473),
    _ = n(18437),
    f = n(590202),
    v = n(971649),
    b = n(901406),
    j = n(792620),
    A = n(73473),
    C = n(201805),
    y = n(818348),
    T = n(985018),
    S = n(767504);

function E(e) {
    let {
        quest: t,
        errorHints: n,
        transitionState: l,
        onClose: A,
        sourceQuestContent: E
    } = e, [I, k] = (0, i.useState)(n), O = (0, x.UX)(), R = (0, _.Ut)(), w = (0, v.vU)()?.getId(), D = (0, o.bG)([m.A], () => m.A.useReducedMotion), M = (0, C.Xf)({
        useReducedMotion: D,
        className: S.Zf
    }), P = I.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), L = (0, j.YL)(t), U = (0, o.bG)([h.A], () => h.A.getState().theme), B = (0, c.Mw)(U) ? y.NJ.DARK : y.NJ.LIGHT, {
        startConsoleQuest: G,
        startingConsoleQuest: F
    } = (0, x.Wj)({
        questId: t.id,
        beforeRequest: () => {
            M.startAnimation(), R({
                questId: t.id,
                questContent: p.uF.CONNECTIONS_MODAL,
                questContentCTA: f.Cy.DEFIBRILLATOR,
                sourceQuestContent: E
            })
        },
        afterRequest: e => {
            M.stopAnimation(), k(e)
        }
    });
    return (0, a.jsx)(r.Modal, {
        transitionState: l,
        onClose: A,
        title: T.intl.string(T.t.W5lmKt),
        subtitle: O.message,
        actions: [{
            variant: "secondary",
            onClick: () => void(A(), (0, b.b6)({
                quest: t
            }, {
                content: p.uF.CONNECTIONS_MODAL,
                ctaContent: f.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                impressionId: w,
                sourceQuestContent: E
            })),
            text: T.intl.string(T.t["qiS+xj"])
        }, {
            variant: "primary",
            onClick: () => A(),
            text: T.intl.string(T.t.cpT0Cq)
        }],
        children: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("div", {
                className: S.$Q,
                children: [(0, a.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: T.intl.string(T.t["+/hZM/"])
                }), (0, a.jsxs)(u.DUT, {
                    className: s()(S.Tm, {
                        [S.r9]: F
                    }),
                    onClick: G,
                    children: [M.render(), (0, a.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        className: S.Zf,
                        children: T.intl.string(T.t.wzzjk9)
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: S.ei,
                children: [(0, a.jsx)(N, {
                    icon: (0, a.jsx)(u.kN9, {
                        size: "sm"
                    }),
                    text: T.intl.string(T.t.br3uIi)
                }), (0, a.jsx)(N, {
                    icon: (0, a.jsx)(u._xR, {
                        size: "sm"
                    }),
                    text: T.intl.string(T.t.XF4wuA),
                    errors: L ? void 0 : P.map(e => e.message),
                    gameTile: L ? (0, a.jsx)(d.m, {
                        "aria-label": t.config.messages.gameTitle,
                        __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
                            className: S.YL,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                children: t.config.messages.gameTitle
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: T.intl.string(T.t.STpNEC)
                            })]
                        }),
                        children: (0, a.jsx)("img", {
                            className: S.rC,
                            alt: t.config.messages.gameTitle,
                            src: (0, g.tW)(t, g.fY.GAME_TILE, B).url
                        })
                    }) : null
                })]
            })]
        })
    })
}

function N(e) {
    let {
        icon: t,
        text: n,
        errors: i = [],
        gameTile: l
    } = e, r = i.length > 0, o = r ? u.esW : u.QtE;
    return (0, a.jsxs)("div", {
        className: S.dJ,
        children: [(0, a.jsxs)("div", {
            className: s()(S.w_, {
                [S.qu]: r
            }),
            children: [(0, a.jsxs)("div", {
                className: S.d3,
                children: [t, (0, a.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: n
                })]
            }), (0, a.jsxs)("div", {
                className: S.d3,
                children: [l, (0, a.jsx)(o, {
                    color: "currentColor",
                    size: "sm",
                    className: s()({
                        [S.kX]: !r,
                        [S.z3]: r
                    })
                })]
            })]
        }), (0, a.jsx)("div", {
            className: S.Tt,
            children: i.map(e => (0, a.jsxs)("div", {
                className: S.Ff,
                children: [(0, a.jsx)(u.id, {
                    size: "sm",
                    color: "currentColor",
                    className: S.z3
                }), (0, a.jsx)(u.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: e
                })]
            }, e))
        })]
    })
}

function I(e) {
    (0, u.mMO)(async () => {
        let {
            default: t
        } = await Promise.resolve().then(n.bind(n, 988436));
        return function(n) {
            return (0, a.jsx)(A.R, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: p.uF.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () => (0, a.jsx)(t, {
                    ...n,
                    ...e
                })
            })
        }
    })
}