/** chunk id: 933378 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(114046),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(962173),
    m = n(733788),
    h = n(341915),
    p = n(890687),
    x = n(18437),
    g = n(590202),
    _ = n(971649),
    f = n(901406),
    v = n(792620),
    b = n(814793),
    j = n(201805),
    A = n(495242),
    C = n(52093),
    T = n(985018),
    y = n(883476);

function S(e) {
    return (0, a.jsx)(d.Text, {
        className: y.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children
    })
}

function E(e) {
    let {
        quest: t,
        useReducedMotion: n
    } = e, s = (0, m.J)(), o = (0, j.H1)(t.id, h.uF.QUEST_BAR_V2, h.uF.QUEST_BAR_V2), c = (0, j.Xf)({
        useReducedMotion: n
    }), v = (0, x.Ut)(), A = (0, _.go)(), {
        errorHints: C,
        startingConsoleQuest: E,
        startConsoleQuest: N
    } = (0, p.Wj)({
        questId: t.id,
        beforeRequest: () => {
            v({
                questId: t.id,
                questContent: h.uF.QUEST_BAR_V2,
                questContentCTA: g.Cy.DEFIBRILLATOR,
                sourceQuestContent: h.uF.QUEST_BAR_V2
            }), c.startAnimation()
        },
        afterRequest: c.stopAnimation
    }), {
        header: I,
        renderBody: R
    } = i.useMemo(() => {
        let e = C.length > 0,
            n = t.config.messages.gameTitle;
        return {
            header: e ? (0, b.ui)(t) ? T.intl.string(T.t.N33EuL) : T.intl.formatToPlainString(T.t["28Ql27"], {
                gameTitle: n
            }) : (0, b.ui)(t) ? T.intl.string(T.t.YstzGO) : T.intl.formatToPlainString(T.t.gX0Qcx, {
                gameTitle: n
            }),
            renderBody: e ? () => (0, a.jsx)(a.Fragment, {
                children: C.map((e, n) => {
                    if (e.type === r._.EXPIRED_CREDENTIAL && s) {
                        let i = u.A.getAccount(e.connected_account_id, e.connected_account_type),
                            s = (0, f.IG)(e),
                            l = (0, f.$J)(e);
                        return (0, a.jsx)(S, {
                            children: T.intl.format(s, {
                                account_name: i?.name,
                                onClick: () => {
                                    (0, f.v0)({
                                        quest: t,
                                        platformType: l
                                    }, {
                                        content: h.uF.QUEST_BAR,
                                        ctaContent: g.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                        impressionId: A,
                                        sourceQuestContent: h.uF.QUEST_BAR_V2
                                    })
                                }
                            })
                        }, n)
                    }
                    return (0, a.jsx)(S, {
                        children: e.message
                    }, n)
                })
            }) : () => (0, a.jsx)(d.Text, {
                className: y.eW,
                color: "text-muted",
                variant: "text-xxs/normal",
                children: (0, b.ui)(t) ? T.intl.string(T.t.bUyEZZ) : T.intl.format(T.t.GXqvC1, {
                    gameTitle: n
                })
            })
        }
    }, [C, t, s, A]);
    return (0, a.jsxs)("div", {
        className: y.XK,
        children: [(0, a.jsxs)("div", {
            className: y.oK,
            children: [(0, a.jsx)(d.EpV, {
                size: "custom",
                color: "currentColor",
                className: 0 === C.length ? y.pH : y.JA,
                width: 16,
                height: 16
            }), (0, a.jsx)(d.Text, {
                variant: "text-xs/medium",
                children: I
            }), (0, a.jsx)(d.DUT, {
                className: l()(y.w, {
                    [y.r9]: E
                }),
                onClick: () => N(),
                children: c.render()
            })]
        }), (0, a.jsxs)("div", {
            className: l()({
                [y.Iu]: E
            }),
            children: [R(), 0 === C.length ? null : (0, a.jsx)(S, {
                children: o
            })]
        })]
    })
}
let N = function(e) {
    let {
        quest: t,
        taskDetails: n
    } = e, s = (0, o.bG)([c.A], () => c.A.useReducedMotion), l = (0, p.Du)(), r = i.useMemo(() => (0, f.bg)(t).filter(e => l.xboxAndPlaystationAccounts.find(t => t.type === e)), [l.xboxAndPlaystationAccounts, t]), {
        steps: d,
        hasConnectedAccounts: u,
        isProgressingQuestForLaunchedGame: m,
        isQuestComplete: x
    } = i.useMemo(() => {
        let e = r.length > 0,
            i = e && (0, v.YL)(t),
            s = t.config.messages.gameTitle,
            o = t.userStatus?.completedAt != null;
        return {
            steps: [{
                renderContent: () => (0, a.jsx)(A.Z, {
                    ...l,
                    quest: t,
                    sourceQuestContent: h.uF.QUEST_BAR_V2
                }),
                isComplete: e || i || o
            }, {
                renderContent: () => (0, a.jsx)(C.L5, {
                    children: (0, b.ui)(t) ? T.intl.string(T.t["5tXqFe"]) : T.intl.formatToPlainString(T.t["+8JB6Y"], {
                        gameTitle: s
                    })
                }),
                isComplete: i || o
            }, {
                renderContent: () => (0, a.jsx)(C.L5, {
                    children: T.intl.formatToPlainString(T.t.HhfrYS, {
                        numMinutes: n.targetMinutes
                    })
                }),
                isComplete: o
            }],
            hasConnectedAccounts: e,
            isProgressingQuestForLaunchedGame: i,
            isQuestComplete: o
        }
    }, [l, r.length, t, n.targetMinutes]);
    return (0, a.jsx)(C.Ay, {
        heading: T.intl.string(T.t.UPWlJu),
        steps: d,
        children: u && !m && !x && (0, a.jsx)(E, {
            useReducedMotion: s,
            quest: t
        })
    })
}