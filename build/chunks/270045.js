/** chunk id: 270045 params = (module,exports,require) **/
n.d(t, {
    C: () => R
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(181658),
    d = n(976860),
    c = n(246356),
    u = n(957565),
    _ = n(829219),
    m = n(859703),
    h = n(341915),
    p = n(807876),
    g = n(890687),
    A = n(18437),
    x = n(590202),
    f = n(971649),
    C = n(651892),
    I = n(710969),
    E = n(792620),
    v = n(814793),
    b = n(201805),
    T = n(545986),
    S = n(654487),
    y = n(652215),
    N = n(818348),
    j = n(985018);

function L(e) {
    let t = (0, l.bG)([m.A], () => m.A.questDeliveryOverride, []),
        n = (0, I.vy)(e.questContent),
        c = [h.uF.QUEST_BAR_V2, h.uF.QUEST_BAR].includes(e.questContent),
        L = (0, A.Ut)(),
        R = (0, f.go)(),
        P = (0, C.wr)(e.quest),
        M = !0 === e.showShareLink && (0, v.E0)(e.quest.config),
        {
            handleComplete: D,
            handleProgress: w,
            handleResetDismissibilityClick: O,
            handleResetStatusClick: k,
            handleOverrideDeliveryClick: U
        } = (0, g.j$)(e.quest.id),
        G = (0, g.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: x.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent
        }),
        B = (0, b.Lk)({
            isShareable: M,
            questId: e.quest.id,
            trackingCtx: r.useMemo(() => ({
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: x.Cy.CONTEXT_MENU_COPY_LINK,
                impressionId: R,
                sourceQuestContent: e.sourceQuestContent
            }), [e.questContent, e.questContentPosition, e.sourceQuestContent, R])
        }),
        F = e => (0, a.showToast)((0, a.createToast)(new o.A(e, e.status).message, a.ToastType.FAILURE)),
        H = () => (0, _.CV)(e.quest.id).catch(F),
        V = (0, g.nv)(e.quest),
        W = r.useMemo(() => (0, i.jsx)(a.sLh, {
            id: "delivery",
            label: "Show in Quest Bar",
            checked: t?.id === e.quest.id,
            action: U
        }), [U, e.quest.id, t?.id]),
        q = r.useCallback(() => {
            (0, d.pX)(y.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id))
        }, [e.quest.id]),
        Y = e.shouldShowDisclosure && e.quest.id !== S.Fw;
    return (0, i.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, s.Z_)()
        },
        navId: "quests-entry",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: e?.onClose ?? N.tE,
        children: [(0, i.jsxs)(a.rXV, {
            children: [(0, i.jsx)(a.Drp, {
                id: "play-game",
                label: P,
                action: G,
                icon: a.We5,
                leadingAccessory: {
                    type: "icon",
                    icon: a.We5
                }
            }), M && (0, i.jsx)(a.Drp, {
                id: "share-link",
                label: j.intl.string(j.t.RDE0Sc),
                action: B,
                icon: a.TdU,
                leadingAccessory: {
                    type: "icon",
                    icon: a.TdU
                }
            }), V && W]
        }, "major-actions"), (0, i.jsxs)(a.rXV, {
            children: [!e.hideLearnMore && (0, i.jsx)(a.Drp, {
                id: "learn-more",
                label: j.intl.string(j.t["Ws2Bl+"]),
                action: () => {
                    L({
                        questId: e.quest.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: x.Cy.CONTEXT_MENU_LEARN_MORE,
                        sourceQuestContent: e.sourceQuestContent
                    }), (0, T.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: e.quest.id
                    })
                },
                icon: a.r2v,
                leadingAccessory: {
                    type: "icon",
                    icon: a.r2v
                }
            }), Y && (0, i.jsx)(a.Drp, {
                id: "display-disclosure",
                label: j.intl.string(j.t.GcsZKJ),
                action: () => {
                    (0, T.Zc)(e.quest, {
                        content: e.questContent,
                        position: e.questContentPosition,
                        ctaContent: x.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                        impressionId: R,
                        sourceQuestContent: e.sourceQuestContent
                    })
                }
            }), n && (0, i.jsx)(a.Drp, {
                id: "hide-entrypoint",
                label: j.intl.string(j.t.NN79E9),
                action: () => {
                    L({
                        questId: e.quest.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: x.Cy.CONTEXT_MENU_HIDE_CONTENT,
                        sourceQuestContent: e.sourceQuestContent
                    }), (0, I.vy)(e.questContent) && ((0, _.g5)(e.quest.id, e.questContent), c && (0, T.z6)(e.quest))
                },
                subtext: j.intl.string(j.t.RK9gxo)
            })]
        }, "minor-actions"), e.quest.preview && (0, i.jsxs)(a.rXV, {
            label: j.intl.string(j.t["Ape+mm"]),
            children: [(0, i.jsx)(a.Drp, {
                id: "dismiss",
                label: j.intl.string(j.t.JF6W66),
                action: O
            }), (0, i.jsx)(a.Drp, {
                id: "enrollment",
                label: j.intl.string(j.t.taqkwK),
                action: () => {
                    k(), H()
                }
            }), (0, i.jsx)(a.Drp, {
                id: "progress",
                label: j.intl.string(j.t.cKSLr4),
                action: () => {
                    w(.9 * Math.random() + .03)
                }
            }), (0, i.jsx)(a.Drp, {
                id: "complete",
                label: j.intl.string(j.t.jQEfRT),
                action: D
            }), (0, E.g5)(e.quest) && (0, i.jsxs)(a.Drp, {
                id: "console",
                label: "Console Heartbeat",
                children: [(0, i.jsx)(a.Drp, {
                    disabled: !0,
                    id: "status",
                    label: `Status: ${(0,E.YL)(e.quest)?"alive":"dead"}`
                }), (0, i.jsx)(a.Drp, {
                    id: "start",
                    label: "Start heartbeat (cheatmode)",
                    action: () => (0, _.vD)(e.quest.id, !0).catch(F)
                }), (0, i.jsx)(a.Drp, {
                    id: "stop",
                    label: "Stop heartbeat",
                    action: H
                })]
            }), (0, i.jsx)(a.Drp, {
                id: "copy-quest-id",
                label: j.intl.string(j.t.oisrFi),
                action: () => {
                    (0, u.C)(e.quest.id)
                }
            }), (0, p.U)({
                location: S.rE.QUEST_PREVIEW_TOOL_2
            }) && (0, i.jsx)(a.Drp, {
                id: "preview",
                label: j.intl.string(j.t.tx5Ax5),
                action: q
            })]
        }, "preview-controls")]
    })
}

function R(e) {
    let {
        children: t,
        onOpen: n,
        onClose: l,
        preventIdle: s,
        quest: o,
        questContent: d,
        questContentPosition: u,
        sourceQuestContent: _,
        ...m
    } = e, h = (0, A.Ut)(), p = r.useRef(null), g = r.useCallback(() => {
        h({
            questId: o.id,
            questContent: d,
            questContentCTA: x.Cy.OPEN_CONTEXT_MENU,
            questContentPosition: u,
            sourceQuestContent: _
        }), null != n && n()
    }, [n, o.id, d, u, h, _]);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: p,
        onRequestOpen: g,
        onRequestClose: l,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return s ? (0, i.jsx)(c.A, {
                children: (0, i.jsx)(L, {
                    ...m,
                    quest: o,
                    questContent: d,
                    questContentPosition: u,
                    onClose: t,
                    sourceQuestContent: _
                })
            }) : (0, i.jsx)(L, {
                ...m,
                quest: o,
                questContent: d,
                questContentPosition: u,
                onClose: t,
                sourceQuestContent: _
            })
        },
        animation: a.YNO.Animation.NONE,
        children: e => (0, i.jsx)("div", {
            ref: p,
            children: t(e)
        })
    })
}