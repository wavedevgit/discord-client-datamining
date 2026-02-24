/** chunk id: 988436, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => E,
    i: () => I
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(582754),
    u = n(397927),
    m = n(775602),
    h = n(544028),
    x = n(341915),
    p = n(890687),
    g = n(579473),
    _ = n(18437),
    f = n(590202),
    b = n(971649),
    v = n(901406),
    j = n(792620),
    C = n(73473),
    A = n(201805),
    T = n(818348),
    S = n(985018),
    y = n(868566);

function E(e) {
    let {
        quest: t,
        errorHints: n,
        transitionState: s,
        onClose: C,
        sourceQuestContent: E
    } = e, [I, k] = (0, i.useState)(n), R = (0, p.UX)(), O = (0, _.Ut)(), w = (0, b.vU)()?.getId(), D = (0, o.bG)([m.A], () => m.A.useReducedMotion), M = (0, A.Xf)({
        useReducedMotion: D,
        className: y.Zf
    }), P = I.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), L = (0, j.YL)(t), U = (0, o.bG)([h.A], () => h.A.getState().theme), B = (0, c.Mw)(U) ? T.NJ.DARK : T.NJ.LIGHT, {
        startConsoleQuest: G,
        startingConsoleQuest: F
    } = (0, p.Wj)({
        questId: t.id,
        beforeRequest: () => {
            M.startAnimation(), O({
                questId: t.id,
                questContent: x.uF.CONNECTIONS_MODAL,
                questContentCTA: f.Cy.DEFIBRILLATOR,
                sourceQuestContent: E
            })
        },
        afterRequest: e => {
            M.stopAnimation(), k(e)
        }
    });
    return (0, a.jsx)(r.Modal, {
        transitionState: s,
        onClose: C,
        title: S.intl.string(S.t.W5lmKt),
        subtitle: R.message,
        actions: [{
            variant: "secondary",
            onClick: () => void(C(), (0, v.b6)({
                quest: t
            }, {
                content: x.uF.CONNECTIONS_MODAL,
                ctaContent: f.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                impressionId: w,
                sourceQuestContent: E
            })),
            text: S.intl.string(S.t["qiS+xj"])
        }, {
            variant: "primary",
            onClick: () => C(),
            text: S.intl.string(S.t.cpT0Cq)
        }],
        children: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("div", {
                className: y.$Q,
                children: [(0, a.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: S.intl.string(S.t["+/hZM/"])
                }), (0, a.jsxs)(u.DUT, {
                    className: l()(y.Tm, {
                        [y.r9]: F
                    }),
                    onClick: G,
                    children: [M.render(), (0, a.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        className: y.Zf,
                        children: S.intl.string(S.t.wzzjk9)
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: y.ei,
                children: [(0, a.jsx)(N, {
                    icon: (0, a.jsx)(u.kN9, {
                        size: "sm"
                    }),
                    text: S.intl.string(S.t.br3uIi)
                }), (0, a.jsx)(N, {
                    icon: (0, a.jsx)(u._xR, {
                        size: "sm"
                    }),
                    text: S.intl.string(S.t.XF4wuA),
                    errors: L ? void 0 : P.map(e => e.message),
                    gameTile: L ? (0, a.jsx)(d.m, {
                        "aria-label": t.config.messages.gameTitle,
                        __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
                            className: y.YL,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                children: t.config.messages.gameTitle
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: S.intl.string(S.t.STpNEC)
                            })]
                        }),
                        children: (0, a.jsx)("img", {
                            className: y.rC,
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
        gameTile: s
    } = e, r = i.length > 0, o = r ? u.esW : u.QtE;
    return (0, a.jsxs)("div", {
        className: y.dJ,
        children: [(0, a.jsxs)("div", {
            className: l()(y.w_, {
                [y.qu]: r
            }),
            children: [(0, a.jsxs)("div", {
                className: y.d3,
                children: [t, (0, a.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: n
                })]
            }), (0, a.jsxs)("div", {
                className: y.d3,
                children: [s, (0, a.jsx)(o, {
                    color: "currentColor",
                    size: "sm",
                    className: l()({
                        [y.kX]: !r,
                        [y.z3]: r
                    })
                })]
            })]
        }), (0, a.jsx)("div", {
            className: y.Tt,
            children: i.map(e => (0, a.jsxs)("div", {
                className: y.Ff,
                children: [(0, a.jsx)(u.id, {
                    size: "sm",
                    color: "currentColor",
                    className: y.z3
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
            return (0, a.jsx)(C.R, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: x.uF.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () => (0, a.jsx)(t, {
                    ...n,
                    ...e
                })
            })
        }
    })
}