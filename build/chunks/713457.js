/** chunk id: 713457 params = (module,exports,require) **/
n.d(t, {
    A: () => F
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
    m = n(178540),
    h = n(859703),
    x = n(341915),
    p = n(12251),
    g = n(551456),
    f = n(112142),
    _ = n(714510),
    v = n(890687),
    b = n(18437),
    j = n(590202),
    A = n(971649),
    C = n(651892),
    y = n(710969),
    E = n(901406),
    S = n(792620),
    T = n(814793),
    N = n(201805),
    I = n(212614),
    O = n(79545),
    R = n(545986),
    k = n(654487),
    w = n(985018),
    D = n(376936);
let M = [{
    value: k.fO.DESKTOP,
    get label() {
        return w.intl.string(w.t["QXc01+"])
    }
}, {
    value: k.fO.CONSOLE,
    get label() {
        return w.intl.string(w.t["8lAfuB"])
    }
}];

function P(e) {
    let t, n, {
        value: i
    } = e;
    switch (i) {
        case k.fO.DESKTOP:
            n = (0, a.jsx)(d.kN9, {}), t = w.intl.string(w.t["QXc01+"]);
            break;
        case k.fO.CONSOLE:
            n = (0, a.jsx)(d._xR, {}), t = w.intl.string(w.t["8lAfuB"]);
            break;
        default:
            return null
    }
    return (0, a.jsxs)("div", {
        className: D.FL,
        children: [n, t]
    })
}

function L(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case k.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: D.FL,
                children: [(0, a.jsx)(d.kN9, {}), w.intl.string(w.t.g6Dr44)]
            });
        case k.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: D.FL,
                children: [(0, a.jsx)(d._xR, {}), w.intl.string(w.t.iyNbj5)]
            });
        default:
            return (0, u.xb)(e[0].value)
    }
}

function U(e) {
    let {
        quest: t,
        sourceQuestContent: n
    } = e, a = (0, A.go)();
    return {
        externalLinkCta: (0, C.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, E.pu)(t, {
                content: x.uF.QUEST_HOME_DESKTOP,
                ctaContent: j.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: n
            })
        }, [t, n, a])
    }
}

function B(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: i,
        onClick: s,
        text: l
    } = e, {
        enabled: o
    } = g.K.useConfig({
        location: k.rE.QUEST_LEARN_MORE_CTA
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
            text: w.intl.string(w.t.YsCuyF),
            onClick: () => {
                (0, R.d5)({
                    quest: t,
                    questContent: n,
                    sourceQuestContent: i,
                    sourceQuestContentCTA: j.Cy.WATCH_VIDEO,
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

function G(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        formattedExpirationDate: i
    } = e, {
        enabled: s
    } = g.K.useConfig({
        location: k.rE.QUEST_LEARN_MORE_CTA
    }), {
        externalLinkCta: l,
        handleOpenExternalLink: o
    } = U({
        quest: t,
        sourceQuestContent: n
    }), d = w.intl.format(w.t["14o6QY"], {
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

function F(e) {
    let {
        quest: t,
        questContent: n,
        onReceiveErrorHints: g,
        contentPosition: A,
        rowIndex: E,
        sourceQuestContent: U
    } = e, F = (0, s.bG)([c.A], () => c.A.useReducedMotion), V = (0, N.Xf)({
        useReducedMotion: F
    }), W = (0, b.Ut)(), H = (0, v.RR)({
        quest: t
    }), K = (0, v.Vn)(t), z = (0, v.S5)(t.config.expiresAt, {
        month: "numeric",
        day: "numeric"
    }), {
        isClaiming: $,
        isEnrolling: q,
        isQuestEnrollmentBlocked: Y
    } = (0, s.cf)([h.A], () => ({
        isClaiming: h.A.isClaimingReward(t.id) || h.A.isFetchingRewardCode(t.id),
        isEnrolling: h.A.isEnrolling(t.id),
        isQuestEnrollmentBlocked: null != h.A.questEnrollmentBlockedUntil
    })), Q = t.userStatus?.enrolledAt != null, J = t.userStatus?.completedAt != null, X = J && t.userStatus?.claimedAt == null, Z = (0, y.if)(t), ee = !(0, y.Ic)(t), et = (0, v.In)(t), en = (0, S.IO)(t), ea = (0, S.K$)(t), ei = (0, S.Cr)(t), es = (0, v.fc)(t), [el, er, eo] = (0, v.Qo)(t, es), ed = ee && et === v.F3.ACCEPTED, ec = ed && el === x.X0.SELECT, eu = ed && !ec && er.length > 1, em = f.t.useConfig({
        location: k.rE.QUEST_HOME_DESKTOP
    }), eh = (0, O.Pd)(t), ex = (0, m.O)(e => e.clearErrorHints), ep = i.useCallback(e => {
        eo(e), e === k.fO.DESKTOP && (g([]), ex(t.id))
    }, [eo, g, ex, t.id]), {
        text: eg,
        onClick: ef
    } = (0, N._c)({
        progressState: et,
        quest: t,
        questContent: n,
        questContentPosition: A,
        questContentRowIndex: E,
        inGiftInventory: !0,
        isVideoQuest: en,
        inGameQuest: ei,
        sourceQuestContent: U
    }), {
        startingConsoleQuest: e_,
        startConsoleQuest: ev
    } = (0, v.Wj)({
        questId: t.id,
        beforeRequest: () => {
            V.startAnimation(), W({
                questId: t.id,
                questContent: n,
                questContentCTA: j.Cy.DEFIBRILLATOR,
                questContentPosition: A,
                questContentRowIndex: E,
                sourceQuestContent: U
            })
        },
        afterRequest: e => {
            V.stopAnimation(), g(e)
        }
    }), eb = t.userStatus?.claimedAt != null, {
        launchInGameActivity: ej
    } = (0, v.zW)(t), eA = (0, _.NA)({
        quest: t,
        shortText: !0
    }), eC = p.s5.useConfig({
        location: k.rE.QUESTS_CARD
    }), ey = eC.enabled && (eC.variant === p.tL.LEARN_MORE_CTA_ONLY || eC.variant === p.tL.COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON), eE = (0, v.do)({
        quest: t,
        content: n,
        ctaContent: eC.variant === p.tL.LEARN_MORE_CTA_ONLY ? j.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_TWO_OPEN_GAME_LINK : j.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_THREE_OPEN_GAME_LINK,
        sourceQuestContent: U
    }), eS = null;
    if (ey) {
        let e = (0, C.wr)(t);
        eS = (0, a.jsx)(r.$nd, {
            variant: "secondary",
            text: e,
            onClick: eE
        })
    }
    let eT = null;
    return (Z && X ? eT = (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            loading: $,
            onClick: ef ?? void 0,
            text: eg,
            fullWidth: !0
        })
    }) : J ? eT = en ? (0, a.jsx)(B, {
        quest: t,
        questContent: n,
        sourceQuestContent: U,
        onClick: ef,
        text: eg
    }) : (0, T.vA)(t) ? (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [(0, a.jsx)(r.$nd, {
            variant: "secondary",
            icon: t.config.features.includes(k.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
            text: eA,
            onClick: () => {
                ej()
            }
        }), (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: ef ?? void 0,
            text: eg
        })]
    }) : (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: ef ?? void 0,
            text: eg,
            fullWidth: !0
        })
    }) : ee ? X ? eT = (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            loading: $,
            onClick: ef ?? void 0,
            text: eg,
            fullWidth: !0
        })
    }) : ea ? eT = (0, a.jsx)("div", {
        className: D.x6,
        children: em.enabled && (eh === O.UA.UNENROLLED || eh === O.UA.ENROLLED || eh === O.UA.INCOMPLETE) && em.enabledQuestStates.has(eh) ? (0, a.jsxs)(r.e2v, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [eh === O.UA.UNENROLLED ? eS : null, (0, a.jsx)(I.A, {
                quest: t,
                surface: O.V3.QUEST_HOME_TILE_FOOTER,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: U,
                analyticsCtxQuestContentPosition: A
            })]
        }) : (0, a.jsx)(r.e2v, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: (0, a.jsx)(r.$nd, {
                variant: "primary",
                loading: q,
                onClick: ef ?? void 0,
                text: eg,
                fullWidth: !0
            })
        })
    }) : Q && !eb ? eT = ec ? (0, a.jsx)(l.Pw, {
        className: D.dd,
        isSelected: () => !1,
        options: M,
        placeholder: w.intl.string(w.t.drVw4T),
        renderOptionLabel: P,
        renderOptionValue: L,
        select: ep,
        serialize: e => {
            switch (e) {
                case k.fO.DESKTOP:
                    return w.intl.string(w.t["QXc01+"]);
                case k.fO.CONSOLE:
                    return w.intl.string(w.t["8lAfuB"]);
                default:
                    return (0, u.xb)(e)
            }
        },
        size: "sm",
        "data-migration-pending": !0
    }) : em.enabled && (eh === O.UA.ENROLLED || eh === O.UA.INCOMPLETE) && em.enabledQuestStates.has(eh) ? (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(I.A, {
            quest: t,
            surface: O.V3.QUEST_HOME_TILE_FOOTER,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: U,
            analyticsCtxQuestContentPosition: A
        })
    }) : (0, S.g5)(t) && !K && el !== x.X0.DESKTOP ? H ? (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "secondary",
            onClick: ef ?? void 0,
            text: eg,
            fullWidth: !0
        })
    }) : (0, a.jsx)(o.$n, {
        "data-migration-pending": !0,
        color: o.XD.PRIMARY,
        onClick: ev,
        disabled: e_,
        className: D.x6,
        children: (0, a.jsxs)("div", {
            className: D.tn,
            children: [V.render(), w.intl.string(w.t.nPThNb)]
        })
    }) : en ? (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: ef ?? void 0,
            text: eg,
            fullWidth: !0
        })
    }) : (0, T.vA)(t) ? (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "primary",
            icon: (0, R.Oz)(t),
            onClick: ef ?? void 0,
            text: eg,
            fullWidth: !0
        })
    }) : (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsx)(r.$nd, {
            variant: "secondary",
            disabled: !0,
            text: w.intl.string(w.t["9KoPyB"]),
            fullWidth: !0
        })
    }) : Q || (eT = Y ? (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [(0, a.jsx)(r.$nd, {
            variant: "secondary",
            disabled: !0,
            text: w.intl.string(w.t.V293qn)
        }), (0, a.jsx)(r.$nd, {
            variant: "primary",
            onClick: () => (0, R.m6)(t, n, U),
            text: w.intl.string(w.t.vY9GgG)
        })]
    }) : (0, a.jsx)("div", {
        className: D.x6,
        children: (0, a.jsxs)(r.e2v, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [eS, em.enabled && eh === O.UA.UNENROLLED && em.enabledQuestStates.has(O.UA.UNENROLLED) ? (0, a.jsx)(I.A, {
                quest: t,
                surface: O.V3.QUEST_HOME_TILE_FOOTER,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: U,
                analyticsCtxQuestContentPosition: A
            }) : (0, a.jsx)(r.$nd, {
                loading: q,
                variant: "primary",
                onClick: ef ?? void 0,
                text: eg,
                icon: (0, R.Oz)(t),
                fullWidth: !0
            })]
        })
    })) : eT = (0, a.jsx)(G, {
        quest: t,
        sourceQuestContent: U,
        formattedExpirationDate: z
    }), null == eT) ? null : (0, a.jsxs)("div", {
        className: D.kL,
        children: [(0, a.jsx)("div", {
            className: D.qz,
            children: eT
        }), eu && (0, a.jsx)("div", {
            className: D.qz,
            children: (0, a.jsx)(l.Pw, {
                className: D.xZ,
                isSelected: e => {
                    switch (el) {
                        case x.X0.DESKTOP:
                            return e === k.fO.DESKTOP;
                        case x.X0.CONSOLE:
                            return e === k.fO.CONSOLE;
                        default:
                            return !1
                    }
                },
                options: M,
                placeholder: w.intl.string(w.t.drVw4T),
                renderOptionLabel: P,
                renderOptionValue: L,
                select: ep,
                serialize: e => {
                    switch (e) {
                        case k.fO.DESKTOP:
                            return w.intl.string(w.t["QXc01+"]);
                        case k.fO.CONSOLE:
                            return w.intl.string(w.t["8lAfuB"])
                    }
                },
                size: "sm",
                "data-migration-pending": !0
            })
        })]
    })
}