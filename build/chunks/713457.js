/** Chunk was on 36054 **/
/** chunk id: 713457, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(843282),
    s = n(732955),
    o = n(421380),
    c = n(397927),
    d = n(775602),
    u = n(403362),
    m = n(216456),
    p = n(859703),
    h = n(341915),
    x = n(245853),
    g = n(714510),
    f = n(890687),
    b = n(710969),
    v = n(792620),
    j = n(814793),
    _ = n(201805),
    y = n(212614),
    A = n(545986),
    C = n(654487),
    S = n(985018),
    O = n(421193);
let T = [{
    value: C.fO.DESKTOP,
    get label() {
        return S.intl.string(S.t["QXc01+"])
    }
}, {
    value: C.fO.CONSOLE,
    get label() {
        return S.intl.string(S.t["8lAfuB"])
    }
}];

function E(e) {
    let t, n, {
        value: l
    } = e;
    switch (l) {
        case C.fO.DESKTOP:
            n = (0, a.jsx)(c.kN9, {}), t = S.intl.string(S.t["QXc01+"]);
            break;
        case C.fO.CONSOLE:
            n = (0, a.jsx)(c._xR, {}), t = S.intl.string(S.t["8lAfuB"]);
            break;
        default:
            return null
    }
    return (0, a.jsxs)("div", {
        className: O.FL,
        children: [n, t]
    })
}

function N(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case C.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: O.FL,
                children: [(0, a.jsx)(c.kN9, {}), S.intl.string(S.t.g6Dr44)]
            });
        case C.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: O.FL,
                children: [(0, a.jsx)(c._xR, {}), S.intl.string(S.t.iyNbj5)]
            });
        default:
            return (0, u.xb)(e[0].value)
    }
}

function w(e) {
    var t, n, w, I;
    let {
        quest: k,
        questContent: P,
        onReceiveErrorHints: R,
        contentPosition: D,
        rowIndex: M,
        sourceQuestContent: L
    } = e, U = (0, r.bG)([d.A], () => d.A.useReducedMotion), B = (0, _.Xf)({
        useReducedMotion: U
    }), G = (0, m.Ut)(), F = (0, f.RR)({
        quest: k
    }), V = (0, f.Vn)(k), W = (0, f.S5)(k.config.expiresAt, {
        month: "numeric",
        day: "numeric"
    }), {
        isClaiming: H,
        isEnrolling: K,
        isQuestEnrollmentBlocked: z
    } = (0, r.cf)([p.A], () => ({
        isClaiming: p.A.isClaimingReward(k.id) || p.A.isFetchingRewardCode(k.id),
        isEnrolling: p.A.isEnrolling(k.id),
        isQuestEnrollmentBlocked: null != p.A.questEnrollmentBlockedUntil
    })), q = (null == (t = k.userStatus) ? void 0 : t.enrolledAt) != null, Q = (null == (n = k.userStatus) ? void 0 : n.completedAt) != null, Y = Q && (null == (w = k.userStatus) ? void 0 : w.claimedAt) == null, J = (0, b.if)(k), X = !(0, b.Ic)(k), $ = (0, f.In)(k), Z = (0, v.IO)(k), ee = (0, v.BS)(k), et = (0, v.Cr)(k), en = (0, f.fc)(k), [ea, el, er] = (0, f.Qo)(k, en), ei = X && $ === f.F3.ACCEPTED, es = ei && ea === h.X0.SELECT, eo = ei && !es && el.length > 1, ec = x.t$.useConfig({
        location: C.rE.QUEST_HOME_DESKTOP
    }).enabled, ed = l.useCallback(e => {
        er(e), e === C.fO.DESKTOP && R([])
    }, [er, R]), {
        text: eu,
        onClick: em
    } = (0, _._c)({
        progressState: $,
        quest: k,
        questContent: P,
        questContentPosition: D,
        questContentRowIndex: M,
        inGiftInventory: !0,
        isVideoQuest: Z,
        inGameQuest: et,
        sourceQuestContent: L
    }), {
        startingConsoleQuest: ep,
        startConsoleQuest: eh
    } = (0, f.Wj)({
        questId: k.id,
        beforeRequest: () => {
            B.startAnimation(), G({
                questId: k.id,
                questContent: P,
                questContentCTA: m.Cy.DEFIBRILLATOR,
                questContentPosition: D,
                questContentRowIndex: M,
                sourceQuestContent: L
            })
        },
        afterRequest: e => {
            B.stopAnimation(), R(e)
        }
    }), ex = (null == (I = k.userStatus) ? void 0 : I.claimedAt) != null, {
        launchInGameActivity: eg
    } = (0, f.zW)(k), ef = (0, g.NA)({
        quest: k,
        shortText: !0
    }), eb = null;
    return (J && Y ? eb = (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "primary",
            loading: H,
            onClick: null != em ? em : void 0,
            text: eu,
            fullWidth: !0
        })
    }) : Q ? eb = Z ? (0, a.jsxs)(s.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        children: [(0, a.jsx)(s.$nd, {
            variant: "secondary",
            icon: c.mqY,
            text: S.intl.string(S.t.YsCuyF),
            onClick: () => {
                (0, A.d5)({
                    quest: k,
                    questContent: P,
                    sourceQuestContent: L,
                    sourceQuestContentCTA: m.Cy.WATCH_VIDEO,
                    skipEnrollmentCheck: !0
                })
            }
        }), (0, a.jsx)(s.$nd, {
            variant: "primary",
            onClick: null != em ? em : void 0,
            text: eu
        })]
    }) : (0, j.vA)(k) ? (0, a.jsxs)(s.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        children: [(0, a.jsx)(s.$nd, {
            variant: "secondary",
            icon: k.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY) ? c.hpF : c._xR,
            text: ef,
            onClick: () => {
                eg()
            }
        }), (0, a.jsx)(s.$nd, {
            variant: "primary",
            onClick: null != em ? em : void 0,
            text: eu
        })]
    }) : (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "primary",
            onClick: null != em ? em : void 0,
            text: eu,
            fullWidth: !0
        })
    }) : X ? X && Y ? eb = (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "primary",
            loading: H,
            onClick: null != em ? em : void 0,
            text: eu,
            fullWidth: !0
        })
    }) : ee ? eb = ec && !q ? (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(y.A, {
            quest: k,
            analyticsCtxQuestContent: P,
            analyticsCtxSourceQuestContent: L,
            analyticsCtxQuestContentPosition: D
        })
    }) : (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "primary",
            loading: K,
            onClick: null != em ? em : void 0,
            text: eu,
            fullWidth: !0
        })
    }) : X && q && !ex ? eb = es ? (0, a.jsx)(i.Pw, {
        className: O.dd,
        isSelected: () => !1,
        options: T,
        placeholder: S.intl.string(S.t.drVw4T),
        renderOptionLabel: E,
        renderOptionValue: N,
        select: ed,
        serialize: e => {
            switch (e) {
                case C.fO.DESKTOP:
                    return S.intl.string(S.t["QXc01+"]);
                case C.fO.CONSOLE:
                    return S.intl.string(S.t["8lAfuB"]);
                default:
                    return (0, u.xb)(e)
            }
        },
        size: "sm",
        "data-migration-pending": !0
    }) : (0, v.g5)(k) && !V && ea !== h.X0.DESKTOP ? F ? (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "secondary",
            onClick: null != em ? em : void 0,
            text: eu,
            fullWidth: !0
        })
    }) : (0, a.jsx)(o.$n, {
        "data-migration-pending": !0,
        color: o.XD.PRIMARY,
        onClick: eh,
        disabled: ep,
        className: O.x6,
        children: (0, a.jsxs)("div", {
            className: O.tn,
            children: [B.render(), S.intl.string(S.t.nPThNb)]
        })
    }) : Z ? (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "primary",
            onClick: null != em ? em : void 0,
            text: eu,
            fullWidth: !0
        })
    }) : (0, j.vA)(k) ? (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "primary",
            icon: (0, A.Oz)(k),
            onClick: null != em ? em : void 0,
            text: eu,
            fullWidth: !0
        })
    }) : (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "secondary",
            disabled: !0,
            text: S.intl.string(S.t["9KoPyB"]),
            fullWidth: !0
        })
    }) : X && !q && (eb = z ? (0, a.jsxs)(s.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        children: [(0, a.jsx)(s.$nd, {
            variant: "secondary",
            disabled: !0,
            text: S.intl.string(S.t.V293qn)
        }), (0, a.jsx)(s.$nd, {
            variant: "primary",
            onClick: () => (0, A.m6)(k, P, L),
            text: S.intl.string(S.t.vY9GgG)
        })]
    }) : (0, a.jsx)("div", {
        className: O.x6,
        children: ec ? (0, a.jsx)(y.A, {
            quest: k,
            analyticsCtxQuestContent: P,
            analyticsCtxSourceQuestContent: L,
            analyticsCtxQuestContentPosition: D
        }) : (0, a.jsx)(s.$nd, {
            loading: K,
            variant: "primary",
            onClick: null != em ? em : void 0,
            text: eu,
            icon: (0, A.Oz)(k),
            fullWidth: !0
        })
    })) : eb = (0, a.jsx)("div", {
        className: O.x6,
        children: (0, a.jsx)(s.$nd, {
            variant: "secondary",
            disabled: !0,
            text: S.intl.format(S.t["14o6QY"], {
                expiryDate: W
            }),
            fullWidth: !0
        })
    }), null == eb) ? null : (0, a.jsxs)("div", {
        className: O.kL,
        children: [(0, a.jsx)("div", {
            className: O.qz,
            children: eb
        }), eo && (0, a.jsx)("div", {
            className: O.qz,
            children: (0, a.jsx)(i.Pw, {
                className: O.xZ,
                isSelected: e => {
                    switch (ea) {
                        case h.X0.DESKTOP:
                            return e === C.fO.DESKTOP;
                        case h.X0.CONSOLE:
                            return e === C.fO.CONSOLE;
                        default:
                            return !1
                    }
                },
                options: T,
                placeholder: S.intl.string(S.t.drVw4T),
                renderOptionLabel: E,
                renderOptionValue: N,
                select: ed,
                serialize: e => {
                    switch (e) {
                        case C.fO.DESKTOP:
                            return S.intl.string(S.t["QXc01+"]);
                        case C.fO.CONSOLE:
                            return S.intl.string(S.t["8lAfuB"])
                    }
                },
                size: "sm",
                "data-migration-pending": !0
            })
        })]
    })
}