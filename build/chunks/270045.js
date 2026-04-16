/** chunk id: 270045 params = (module,exports,require) **/
n.d(t, {
    C: () => L
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(397927),
    r = n(442433),
    o = n(181658),
    d = n(976860),
    c = n(246356),
    u = n(957565),
    _ = n(829219),
    m = n(859703),
    h = n(341915),
    p = n(890687),
    g = n(18437),
    A = n(590202),
    x = n(971649),
    f = n(651892),
    C = n(710969),
    E = n(792620),
    I = n(814793),
    v = n(201805),
    b = n(545986),
    T = n(654487),
    y = n(652215),
    S = n(818348),
    N = n(985018);

function j(e) {
    let t = (0, l.bG)([m.A], () => m.A.questDeliveryOverride, []),
        n = (0, C.vy)(e.questContent),
        c = [h.uF.QUEST_BAR_V2, h.uF.QUEST_BAR].includes(e.questContent),
        j = (0, g.Ut)(),
        L = (0, x.go)(),
        R = (0, f.wr)(e.quest),
        P = !0 === e.showShareLink && (0, I.E0)(e.quest.config),
        {
            handleComplete: w,
            handleProgress: M,
            handleResetDismissibilityClick: D,
            handleResetStatusClick: O,
            handleOverrideDeliveryClick: k
        } = (0, p.j$)(e.quest.id),
        U = (0, p.do)({
            quest: e.quest,
            content: e.questContent,
            ctaContent: A.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
            sourceQuestContent: e.sourceQuestContent
        }),
        B = (0, v.Lk)({
            isShareable: P,
            questId: e.quest.id,
            trackingCtx: a.useMemo(() => ({
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: A.Cy.CONTEXT_MENU_COPY_LINK,
                impressionId: L,
                sourceQuestContent: e.sourceQuestContent
            }), [e.questContent, e.questContentPosition, e.sourceQuestContent, L])
        }),
        G = e => (0, s.showToast)((0, s.createToast)(new o.A(e, e.status).message, s.ToastType.FAILURE)),
        F = () => (0, _.CV)(e.quest.id).catch(G),
        H = (0, p.nv)(e.quest),
        V = a.useMemo(() => (0, i.jsx)(s.sLh, {
            id: "delivery",
            label: "Show in Quest Bar",
            checked: t?.id === e.quest.id,
            action: k
        }), [k, e.quest.id, t?.id]),
        q = a.useCallback(() => {
            (0, d.pX)(y.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id))
        }, [e.quest.id]),
        W = e.shouldShowDisclosure && e.quest.id !== T.Fw;
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Z_)()
        },
        navId: "quests-entry",
        "aria-label": N.intl.string(N.t.ogxXGq),
        onClose: e?.onClose ?? S.tE,
        children: [(0, i.jsxs)(s.rXV, {
            children: [(0, i.jsx)(s.Drp, {
                id: "play-game",
                label: R,
                action: U,
                icon: s.We5,
                leadingAccessory: {
                    type: "icon",
                    icon: s.We5
                }
            }), P && (0, i.jsx)(s.Drp, {
                id: "share-link",
                label: N.intl.string(N.t.RDE0Sc),
                action: B,
                icon: s.TdU,
                leadingAccessory: {
                    type: "icon",
                    icon: s.TdU
                }
            }), H && V]
        }, "major-actions"), (0, i.jsxs)(s.rXV, {
            children: [!e.hideLearnMore && (0, i.jsx)(s.Drp, {
                id: "learn-more",
                label: N.intl.string(N.t["Ws2Bl+"]),
                action: () => {
                    j({
                        questId: e.quest.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: A.Cy.CONTEXT_MENU_LEARN_MORE,
                        sourceQuestContent: e.sourceQuestContent
                    }), (0, b.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: e.quest.id
                    })
                },
                icon: s.r2v,
                leadingAccessory: {
                    type: "icon",
                    icon: s.r2v
                }
            }), W && (0, i.jsx)(s.Drp, {
                id: "display-disclosure",
                label: N.intl.string(N.t.GcsZKJ),
                action: () => {
                    (0, b.Zc)(e.quest, {
                        content: e.questContent,
                        position: e.questContentPosition,
                        ctaContent: A.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                        impressionId: L,
                        sourceQuestContent: e.sourceQuestContent
                    })
                }
            }), n && (0, i.jsx)(s.Drp, {
                id: "hide-entrypoint",
                label: N.intl.string(N.t.NN79E9),
                action: () => {
                    j({
                        questId: e.quest.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: A.Cy.CONTEXT_MENU_HIDE_CONTENT,
                        sourceQuestContent: e.sourceQuestContent
                    }), (0, C.vy)(e.questContent) && ((0, _.g5)(e.quest.id, e.questContent), c && (0, b.z6)(e.quest))
                },
                subtext: N.intl.string(N.t.RK9gxo)
            })]
        }, "minor-actions"), e.quest.preview && (0, i.jsxs)(s.rXV, {
            label: N.intl.string(N.t["Ape+mm"]),
            children: [(0, i.jsx)(s.Drp, {
                id: "dismiss",
                label: N.intl.string(N.t.JF6W66),
                action: D
            }), (0, i.jsx)(s.Drp, {
                id: "enrollment",
                label: N.intl.string(N.t.taqkwK),
                action: () => {
                    O(), F()
                }
            }), (0, i.jsx)(s.Drp, {
                id: "progress",
                label: N.intl.string(N.t.cKSLr4),
                action: () => {
                    M(.9 * Math.random() + .03)
                }
            }), (0, i.jsx)(s.Drp, {
                id: "complete",
                label: N.intl.string(N.t.jQEfRT),
                action: w
            }), (0, E.g5)(e.quest) && (0, i.jsxs)(s.Drp, {
                id: "console",
                label: "Console Heartbeat",
                children: [(0, i.jsx)(s.Drp, {
                    disabled: !0,
                    id: "status",
                    label: `Status: ${(0,E.YL)(e.quest)?"alive":"dead"}`
                }), (0, i.jsx)(s.Drp, {
                    id: "start",
                    label: "Start heartbeat (cheatmode)",
                    action: () => (0, _.vD)(e.quest.id, !0).catch(G)
                }), (0, i.jsx)(s.Drp, {
                    id: "stop",
                    label: "Stop heartbeat",
                    action: F
                })]
            }), (0, i.jsx)(s.Drp, {
                id: "copy-quest-id",
                label: N.intl.string(N.t.oisrFi),
                action: () => {
                    (0, u.C)(e.quest.id)
                }
            }), (0, i.jsx)(s.Drp, {
                id: "preview",
                label: N.intl.string(N.t.tx5Ax5),
                action: q
            })]
        }, "preview-controls")]
    })
}

function L(e) {
    let {
        children: t,
        onOpen: n,
        onClose: l,
        preventIdle: r,
        quest: o,
        questContent: d,
        questContentPosition: u,
        sourceQuestContent: _,
        ...m
    } = e, h = (0, g.Ut)(), p = a.useRef(null), x = a.useCallback(() => {
        h({
            questId: o.id,
            questContent: d,
            questContentCTA: A.Cy.OPEN_CONTEXT_MENU,
            questContentPosition: u,
            sourceQuestContent: _
        }), null != n && n()
    }, [n, o.id, d, u, h, _]);
    return (0, i.jsx)(s.YNO, {
        targetElementRef: p,
        onRequestOpen: x,
        onRequestClose: l,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return r ? (0, i.jsx)(c.A, {
                children: (0, i.jsx)(j, {
                    ...m,
                    quest: o,
                    questContent: d,
                    questContentPosition: u,
                    onClose: t,
                    sourceQuestContent: _
                })
            }) : (0, i.jsx)(j, {
                ...m,
                quest: o,
                questContent: d,
                questContentPosition: u,
                onClose: t,
                sourceQuestContent: _
            })
        },
        animation: s.YNO.Animation.NONE,
        children: e => (0, i.jsx)("div", {
            ref: p,
            children: t(e)
        })
    })
}