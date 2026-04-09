/** chunk id: 933378 params = (module,exports,require) **/
n.d(t, {
    A: () => T
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
    m = n(341915),
    h = n(890687),
    x = n(18437),
    p = n(590202),
    g = n(971649),
    f = n(901406),
    v = n(792620),
    _ = n(814793),
    b = n(201805),
    j = n(495242),
    A = n(52093),
    C = n(985018),
    y = n(146567);

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
    } = e, s = (0, b.H1)(t.id, m.uF.QUEST_BAR_V2, m.uF.QUEST_BAR_V2), o = (0, b.Xf)({
        useReducedMotion: n
    }), c = (0, x.Ut)(), v = (0, g.go)(), {
        errorHints: j,
        startingConsoleQuest: A,
        startConsoleQuest: E
    } = (0, h.Wj)({
        questId: t.id,
        beforeRequest: () => {
            c({
                questId: t.id,
                questContent: m.uF.QUEST_BAR_V2,
                questContentCTA: p.Cy.DEFIBRILLATOR,
                sourceQuestContent: m.uF.QUEST_BAR_V2
            }), o.startAnimation()
        },
        afterRequest: o.stopAnimation
    }), {
        header: T,
        renderBody: N
    } = i.useMemo(() => {
        let e = j.length > 0,
            n = t.config.messages.gameTitle;
        return {
            header: e ? (0, _.ui)(t) ? C.intl.string(C.t.N33EuL) : C.intl.formatToPlainString(C.t["28Ql27"], {
                gameTitle: n
            }) : (0, _.ui)(t) ? C.intl.string(C.t.YstzGO) : C.intl.formatToPlainString(C.t.gX0Qcx, {
                gameTitle: n
            }),
            renderBody: e ? () => (0, a.jsx)(a.Fragment, {
                children: j.map((e, n) => {
                    if (e.type === r._.EXPIRED_CREDENTIAL) {
                        let i = u.A.getAccount(e.connected_account_id, e.connected_account_type),
                            s = (0, f.IG)(e),
                            l = (0, f.$J)(e);
                        return (0, a.jsx)(S, {
                            children: C.intl.format(s, {
                                account_name: i?.name,
                                onClick: () => {
                                    (0, f.v0)({
                                        quest: t,
                                        platformType: l
                                    }, {
                                        content: m.uF.QUEST_BAR,
                                        ctaContent: p.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                        impressionId: v,
                                        sourceQuestContent: m.uF.QUEST_BAR_V2
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
                children: (0, _.ui)(t) ? C.intl.string(C.t.bUyEZZ) : C.intl.format(C.t.GXqvC1, {
                    gameTitle: n
                })
            })
        }
    }, [j, t, v]);
    return (0, a.jsxs)("div", {
        className: y.XK,
        children: [(0, a.jsxs)("div", {
            className: y.oK,
            children: [(0, a.jsx)(d.EpV, {
                size: "custom",
                color: "currentColor",
                className: 0 === j.length ? y.pH : y.JA,
                width: 16,
                height: 16
            }), (0, a.jsx)(d.Text, {
                variant: "text-xs/medium",
                children: T
            }), (0, a.jsx)(d.DUT, {
                className: l()(y.w, {
                    [y.r9]: A
                }),
                onClick: () => E(),
                children: o.render()
            })]
        }), (0, a.jsxs)("div", {
            className: l()({
                [y.Iu]: A
            }),
            children: [N(), 0 === j.length ? null : (0, a.jsx)(S, {
                children: s
            })]
        })]
    })
}
let T = function(e) {
    let {
        quest: t,
        taskDetails: n
    } = e, s = (0, o.bG)([c.A], () => c.A.useReducedMotion), l = (0, h.Du)(), r = i.useMemo(() => (0, f.bg)(t).filter(e => l.xboxAndPlaystationAccounts.find(t => t.type === e)), [l.xboxAndPlaystationAccounts, t]), {
        steps: d,
        hasConnectedAccounts: u,
        isProgressingQuestForLaunchedGame: x,
        isQuestComplete: p
    } = i.useMemo(() => {
        let e = r.length > 0,
            i = e && (0, v.YL)(t),
            s = t.config.messages.gameTitle,
            o = t.userStatus?.completedAt != null;
        return {
            steps: [{
                renderContent: () => (0, a.jsx)(j.Z, {
                    ...l,
                    quest: t,
                    sourceQuestContent: m.uF.QUEST_BAR_V2
                }),
                isComplete: e || i || o
            }, {
                renderContent: () => (0, a.jsx)(A.L5, {
                    children: (0, _.ui)(t) ? C.intl.string(C.t["5tXqFe"]) : C.intl.formatToPlainString(C.t["+8JB6Y"], {
                        gameTitle: s
                    })
                }),
                isComplete: i || o
            }, {
                renderContent: () => (0, a.jsx)(A.L5, {
                    children: C.intl.formatToPlainString(C.t.HhfrYS, {
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
    return (0, a.jsx)(A.Ay, {
        heading: C.intl.string(C.t.UPWlJu),
        steps: d,
        children: u && !x && !p && (0, a.jsx)(E, {
            useReducedMotion: s,
            quest: t
        })
    })
}