/** chunk id: 933378 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
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
    _ = n(901406),
    f = n(792620),
    v = n(814793),
    b = n(201805),
    j = n(495242),
    A = n(52093),
    C = n(985018),
    y = n(757978);

function T(e) {
    return (0, a.jsx)(d.Text, {
        className: y.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children
    })
}

function S(e) {
    let {
        quest: t,
        useReducedMotion: n
    } = e, l = (0, b.H1)(t.id, m.uF.QUEST_BAR_V2, m.uF.QUEST_BAR_V2), o = (0, b.Xf)({
        useReducedMotion: n
    }), c = (0, x.Ut)(), f = (0, g.go)(), {
        errorHints: j,
        startingConsoleQuest: A,
        startConsoleQuest: S
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
        header: E,
        renderBody: N
    } = i.useMemo(() => {
        let e = j.length > 0,
            n = t.config.messages.gameTitle;
        return {
            header: e ? (0, v.ui)(t) ? C.intl.string(C.t.N33EuL) : C.intl.formatToPlainString(C.t["28Ql27"], {
                gameTitle: n
            }) : (0, v.ui)(t) ? C.intl.string(C.t.YstzGO) : C.intl.formatToPlainString(C.t.gX0Qcx, {
                gameTitle: n
            }),
            renderBody: e ? () => (0, a.jsx)(a.Fragment, {
                children: j.map((e, n) => {
                    if (e.type === r._.EXPIRED_CREDENTIAL) {
                        let i = u.A.getAccount(e.connected_account_id, e.connected_account_type),
                            l = (0, _.IG)(e),
                            s = (0, _.$J)(e);
                        return (0, a.jsx)(T, {
                            children: C.intl.format(l, {
                                account_name: i?.name,
                                onClick: () => {
                                    (0, _.v0)({
                                        quest: t,
                                        platformType: s
                                    }, {
                                        content: m.uF.QUEST_BAR,
                                        ctaContent: p.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                        impressionId: f,
                                        sourceQuestContent: m.uF.QUEST_BAR_V2
                                    })
                                }
                            })
                        }, n)
                    }
                    return (0, a.jsx)(T, {
                        children: e.message
                    }, n)
                })
            }) : () => (0, a.jsx)(d.Text, {
                className: y.eW,
                color: "text-muted",
                variant: "text-xxs/normal",
                children: (0, v.ui)(t) ? C.intl.string(C.t.bUyEZZ) : C.intl.format(C.t.GXqvC1, {
                    gameTitle: n
                })
            })
        }
    }, [j, t, f]);
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
                children: E
            }), (0, a.jsx)(d.DUT, {
                className: s()(y.w, {
                    [y.r9]: A
                }),
                onClick: () => S(),
                children: o.render()
            })]
        }), (0, a.jsxs)("div", {
            className: s()({
                [y.Iu]: A
            }),
            children: [N(), 0 === j.length ? null : (0, a.jsx)(T, {
                children: l
            })]
        })]
    })
}
let E = function(e) {
    let {
        quest: t,
        taskDetails: n
    } = e, l = (0, o.bG)([c.A], () => c.A.useReducedMotion), s = (0, h.Du)(), r = i.useMemo(() => (0, _.bg)(t).filter(e => s.xboxAndPlaystationAccounts.find(t => t.type === e)), [s.xboxAndPlaystationAccounts, t]), {
        steps: d,
        hasConnectedAccounts: u,
        isProgressingQuestForLaunchedGame: x,
        isQuestComplete: p
    } = i.useMemo(() => {
        let e = r.length > 0,
            i = e && (0, f.YL)(t),
            l = t.config.messages.gameTitle,
            o = t.userStatus?.completedAt != null;
        return {
            steps: [{
                renderContent: () => (0, a.jsx)(j.Z, {
                    ...s,
                    quest: t,
                    sourceQuestContent: m.uF.QUEST_BAR_V2
                }),
                isComplete: e || i || o
            }, {
                renderContent: () => (0, a.jsx)(A.L5, {
                    children: (0, v.ui)(t) ? C.intl.string(C.t["5tXqFe"]) : C.intl.formatToPlainString(C.t["+8JB6Y"], {
                        gameTitle: l
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
    }, [s, r.length, t, n.targetMinutes]);
    return (0, a.jsx)(A.Ay, {
        heading: C.intl.string(C.t.UPWlJu),
        steps: d,
        children: u && !x && !p && (0, a.jsx)(S, {
            useReducedMotion: l,
            quest: t
        })
    })
}