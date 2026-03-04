/** chunk id: 713457, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
});
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(843282),
    r = n(732955),
    o = n(421380),
    d = n(397927),
    c = n(775602),
    u = n(403362),
    m = n(859703),
    h = n(341915),
    p = n(245853),
    x = n(33621),
    g = n(551456),
    _ = n(714510),
    f = n(890687),
    b = n(18437),
    v = n(590202),
    j = n(971649),
    A = n(651892),
    C = n(710969),
    T = n(901406),
    y = n(792620),
    S = n(814793),
    E = n(201805),
    N = n(212614),
    I = n(79545),
    k = n(545986),
    R = n(654487),
    O = n(985018),
    w = n(421193);
let D = [{
    value: R.fO.DESKTOP,
    get label() {
        return O.intl.string(O.t["QXc01+"])
    }
}, {
    value: R.fO.CONSOLE,
    get label() {
        return O.intl.string(O.t["8lAfuB"])
    }
}];

function M(e) {
    let t, n, {
        value: i
    } = e;
    switch (i) {
        case R.fO.DESKTOP:
            n = (0, a.jsx)(d.kN9, {}), t = O.intl.string(O.t["QXc01+"]);
            break;
        case R.fO.CONSOLE:
            n = (0, a.jsx)(d._xR, {}), t = O.intl.string(O.t["8lAfuB"]);
            break;
        default:
            return null
    }
    return (0, a.jsxs)("div", {
        className: w.FL,
        children: [n, t]
    })
}

function P(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case R.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: w.FL,
                children: [(0, a.jsx)(d.kN9, {}), O.intl.string(O.t.g6Dr44)]
            });
        case R.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: w.FL,
                children: [(0, a.jsx)(d._xR, {}), O.intl.string(O.t.iyNbj5)]
            });
        default:
            return (0, u.xb)(e[0].value)
    }
}

function U(e) {
    let {
        quest: t,
        sourceQuestContent: n
    } = e, a = (0, j.go)();
    return {
        externalLinkCta: (0, A.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, T.pu)(t, {
                content: h.uF.QUEST_HOME_DESKTOP,
                ctaContent: v.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: n
            })
        }, [t, n, a])
    }
}

function L(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: i,
        onClick: s,
        text: l
    } = e, {
        enabled: o
    } = g.K.useConfig({
        location: R.rE.QUEST_LEARN_MORE_CTA
    }), {
        externalLinkCta: c,
        handleOpenExternalLink: u
    } = U({
        quest: t,
        sourceQuestContent: i
    });
    return o ? (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [(0, a.jsx)(r.$nd, {
            variant: "secondary",
            text: c,
            onClick: u
        }), (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: s ?? void 0,
            text: l
        })]
    }) : (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [(0, a.jsx)(r.$nd, {
            variant: "secondary",
            icon: d.mqY,
            text: O.intl.string(O.t.YsCuyF),
            onClick: () => {
                (0, k.d5)({
                    quest: t,
                    questContent: n,
                    sourceQuestContent: i,
                    sourceQuestContentCTA: v.Cy.WATCH_VIDEO,
                    skipEnrollmentCheck: !0
                })
            }
        }), (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: s ?? void 0,
            text: l
        })]
    })
}

function B(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        formattedExpirationDate: i
    } = e, {
        enabled: s
    } = g.K.useConfig({
        location: R.rE.QUEST_LEARN_MORE_CTA
    }), {
        externalLinkCta: l,
        handleOpenExternalLink: o
    } = U({
        quest: t,
        sourceQuestContent: n
    }), d = O.intl.format(O.t["14o6QY"], {
        expiryDate: i
    });
    return s ? (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [(0, a.jsx)(r.$nd, {
            variant: "secondary",
            text: l,
            onClick: o
        }), (0, a.jsx)(r.$nd, {
            variant: "secondary",
            disabled: !0,
            text: d,
            fullWidth: !0
        })]
    }) : (0, a.jsx)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: (0, a.jsx)(r.$nd, {
            variant: "secondary",
            disabled: !0,
            text: d,
            fullWidth: !0
        })
    })
}

function G(e) {
    let {
        quest: t,
        questContent: n,
        onReceiveErrorHints: g,
        contentPosition: j,
        rowIndex: T,
        sourceQuestContent: U
    } = e, G = (0, s.bG)([c.A], () => c.A.useReducedMotion), F = (0, E.Xf)({
        useReducedMotion: G
    }), V = (0, b.Ut)(), W = (0, f.RR)({
        quest: t
    }), H = (0, f.Vn)(t), K = (0, f.S5)(t.config.expiresAt, {
        month: "numeric",
        day: "numeric"
    }), {
        isClaiming: z,
        isEnrolling: $,
        isQuestEnrollmentBlocked: q
    } = (0, s.cf)([m.A], () => ({
        isClaiming: m.A.isClaimingReward(t.id) || m.A.isFetchingRewardCode(t.id),
        isEnrolling: m.A.isEnrolling(t.id),
        isQuestEnrollmentBlocked: null != m.A.questEnrollmentBlockedUntil
    })), Q = t.userStatus?.enrolledAt != null, Y = t.userStatus?.completedAt != null, J = Y && t.userStatus?.claimedAt == null, X = (0, C.if)(t), Z = !(0, C.Ic)(t), ee = (0, f.In)(t), et = (0, y.IO)(t), en = (0, y.K$)(t), ea = (0, y.Cr)(t), ei = (0, f.fc)(t), [es, el, er] = (0, f.Qo)(t, ei), eo = Z && ee === f.F3.ACCEPTED, ed = eo && es === h.X0.SELECT, ec = eo && !ed && el.length > 1, eu = x.t.useConfig({
        location: R.rE.QUEST_HOME_DESKTOP
    }), em = (0, I.Pd)(t), eh = i.useCallback(e => {
        er(e), e === R.fO.DESKTOP && g([])
    }, [er, g]), {
        text: ep,
        onClick: ex
    } = (0, E._c)({
        progressState: ee,
        quest: t,
        questContent: n,
        questContentPosition: j,
        questContentRowIndex: T,
        inGiftInventory: !0,
        isVideoQuest: et,
        inGameQuest: ea,
        sourceQuestContent: U
    }), {
        startingConsoleQuest: eg,
        startConsoleQuest: e_
    } = (0, f.Wj)({
        questId: t.id,
        beforeRequest: () => {
            F.startAnimation(), V({
                questId: t.id,
                questContent: n,
                questContentCTA: v.Cy.DEFIBRILLATOR,
                questContentPosition: j,
                questContentRowIndex: T,
                sourceQuestContent: U
            })
        },
        afterRequest: e => {
            F.stopAnimation(), g(e)
        }
    }), ef = t.userStatus?.claimedAt != null, {
        launchInGameActivity: eb
    } = (0, f.zW)(t), ev = (0, _.NA)({
        quest: t,
        shortText: !0
    }), ej = (0, f.do)({
        quest: t,
        content: n,
        ctaContent: v.Cy.CONTEXT_MENU_OPEN_GAME_LINK_EXP_TREATMENT_ONE,
        sourceQuestContent: U
    }), eA = p.wK.useConfig({
        location: R.rE.QUESTS_CARD
    }), eC = eA.enabled && eA.variant === p.dF.NEXT_TO_PRIMARY_CTA, eT = null;
    if (eC) {
        let e = (0, A.wr)(t);
        eT = (0, a.jsx)(r.$nd, {
            variant: "secondary",
            text: e,
            onClick: ej
        })
    }
    let ey = null;
    return (X && J ? ey = (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            loading: z,
            onClick: ex ?? void 0,
            text: ep,
            fullWidth: !0
        })
    }) : Y ? ey = et ? (0, a.jsx)(L, {
        quest: t,
        questContent: n,
        sourceQuestContent: U,
        onClick: ex,
        text: ep
    }) : (0, S.vA)(t) ? (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [(0, a.jsx)(r.$nd, {
            variant: "secondary",
            icon: t.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
            text: ev,
            onClick: () => {
                eb()
            }
        }), (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: ex ?? void 0,
            text: ep
        })]
    }) : (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: ex ?? void 0,
            text: ep,
            fullWidth: !0
        })
    }) : Z ? Z && J ? ey = (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            loading: z,
            onClick: ex ?? void 0,
            text: ep,
            fullWidth: !0
        })
    }) : en ? ey = (0, a.jsx)("div", {
        className: w.x6,
        children: eu.enabled && em === I.UA.UNENROLLED && eu.enabledQuestStates.has(I.UA.UNENROLLED) ? (0, a.jsxs)(r.e2v, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [eT, (0, a.jsx)(N.A, {
                quest: t,
                surface: I.V3.QUEST_HOME_TILE_FOOTER,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: U,
                analyticsCtxQuestContentPosition: j
            })]
        }) : (0, a.jsx)(r.e2v, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: (0, a.jsx)(r.$nd, {
                variant: "primary",
                loading: $,
                onClick: ex ?? void 0,
                text: ep,
                fullWidth: !0
            })
        })
    }) : Z && Q && !ef ? ey = ed ? (0, a.jsx)(l.Pw, {
        className: w.dd,
        isSelected: () => !1,
        options: D,
        placeholder: O.intl.string(O.t.drVw4T),
        renderOptionLabel: M,
        renderOptionValue: P,
        select: eh,
        serialize: e => {
            switch (e) {
                case R.fO.DESKTOP:
                    return O.intl.string(O.t["QXc01+"]);
                case R.fO.CONSOLE:
                    return O.intl.string(O.t["8lAfuB"]);
                default:
                    return (0, u.xb)(e)
            }
        },
        size: "sm",
        "data-migration-pending": !0
    }) : (0, y.g5)(t) && !H && es !== h.X0.DESKTOP ? W ? (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "secondary",
            onClick: ex ?? void 0,
            text: ep,
            fullWidth: !0
        })
    }) : (0, a.jsx)(o.$n, {
        "data-migration-pending": !0,
        color: o.XD.PRIMARY,
        onClick: e_,
        disabled: eg,
        className: w.x6,
        children: (0, a.jsxs)("div", {
            className: w.tn,
            children: [F.render(), O.intl.string(O.t.nPThNb)]
        })
    }) : et ? (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: ex ?? void 0,
            text: ep,
            fullWidth: !0
        })
    }) : (0, S.vA)(t) ? (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            icon: (0, k.Oz)(t),
            onClick: ex ?? void 0,
            text: ep,
            fullWidth: !0
        })
    }) : (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "secondary",
            disabled: !0,
            text: O.intl.string(O.t["9KoPyB"]),
            fullWidth: !0
        })
    }) : Z && !Q && (ey = q ? (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [(0, a.jsx)(r.$nd, {
            variant: "secondary",
            disabled: !0,
            text: O.intl.string(O.t.V293qn)
        }), (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: () => (0, k.m6)(t, n, U),
            text: O.intl.string(O.t.vY9GgG)
        })]
    }) : (0, a.jsx)("div", {
        className: w.x6,
        children: (0, a.jsxs)(r.e2v, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [eT, eu.enabled && em === I.UA.UNENROLLED && eu.enabledQuestStates.has(I.UA.UNENROLLED) ? (0, a.jsx)(N.A, {
                quest: t,
                surface: I.V3.QUEST_HOME_TILE_FOOTER,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: U,
                analyticsCtxQuestContentPosition: j
            }) : (0, a.jsx)(r.$nd, {
                loading: $,
                variant: "primary",
                onClick: ex ?? void 0,
                text: ep,
                icon: (0, k.Oz)(t),
                fullWidth: !0
            })]
        })
    })) : ey = (0, a.jsx)(B, {
        quest: t,
        sourceQuestContent: U,
        formattedExpirationDate: K
    }), null == ey) ? null : (0, a.jsxs)("div", {
        className: w.kL,
        children: [(0, a.jsx)("div", {
            className: w.qz,
            children: ey
        }), ec && (0, a.jsx)("div", {
            className: w.qz,
            children: (0, a.jsx)(l.Pw, {
                className: w.xZ,
                isSelected: e => {
                    switch (es) {
                        case h.X0.DESKTOP:
                            return e === R.fO.DESKTOP;
                        case h.X0.CONSOLE:
                            return e === R.fO.CONSOLE;
                        default:
                            return !1
                    }
                },
                options: D,
                placeholder: O.intl.string(O.t.drVw4T),
                renderOptionLabel: M,
                renderOptionValue: P,
                select: eh,
                serialize: e => {
                    switch (e) {
                        case R.fO.DESKTOP:
                            return O.intl.string(O.t["QXc01+"]);
                        case R.fO.CONSOLE:
                            return O.intl.string(O.t["8lAfuB"])
                    }
                },
                size: "sm",
                "data-migration-pending": !0
            })
        })]
    })
}