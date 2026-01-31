/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => X
}), n(896048);
var l = n(627968),
    r = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(311907),
    o = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    p = n(409626),
    f = n(834757),
    m = n(544028),
    b = n(461782),
    y = n(290863),
    E = n(287809),
    v = n(829219),
    A = n(859703),
    S = n(341915),
    O = n(245853),
    j = n(55738),
    h = n(943849),
    x = n(714510),
    g = n(890687),
    N = n(579473),
    T = n(18437),
    _ = n(590202),
    C = n(651892),
    P = n(710969),
    I = n(639214),
    w = n(792620),
    M = n(814793),
    R = n(73473),
    D = n(270045),
    L = n(201805),
    U = n(212614),
    Q = n(251637),
    G = n(847641),
    k = n(646764),
    F = n(311243),
    q = n(545986),
    H = n(654487),
    V = n(652215),
    B = n(806931),
    z = n(985018),
    K = n(470699);

function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function Y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function $(e) {
    var t, n, s, b, j;
    let {
        channelId: R,
        quest: $,
        previewQuest: J,
        isParticipatingOverride: X
    } = e, Z = (0, T.Ut)(), [ee, et] = r.useState(!1), en = r.useCallback(() => et(!0), []), el = r.useCallback(() => et(!1), []), er = (0, a.bG)([E.default], () => E.default.getCurrentUser()), es = (0, a.bG)([m.A], () => m.A.getState().theme), ei = (0, o.Mw)(es) ? V.NJ8.DARK : V.NJ8.LIGHT, ea = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), eo = (0, a.bG)([A.A], () => (0, P.t6)(A.A.quests, A.A.questToDeliverForPlacement, S.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: eu,
        isQuestInQuestBar: ec
    } = (0, a.cf)([y.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != $ && null != er && (e = y.A, ea.some(t => {
                if (t.type !== B.lp.STREAM || t.user.id !== er.id) return !1;
                let n = (0, f.nr)(t.stream, e);
                return null != n && (0, I.zS)(n, $)
            })),
            isQuestInQuestBar: (null == eo ? void 0 : eo.id) === (null == $ ? void 0 : $.id)
        }
    }, [er, $, ea, eo]), ed = null == (t = (0, w.pU)($)) ? void 0 : t[0], ep = (0, a.bG)([d.Ay, y.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, w.xZ)($) && null !== ed && e.includes(ed)) return !0;
        let t = null != er ? y.A.findActivity(er.id, e => e.type !== V.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, w.g5)($) && (0, I.zS)(t, $))
    }, [$, er, ed]), ef = !0 === X || eu || ep, em = (0, a.bG)([A.A], () => null != $ && A.A.isEnrolling($.id), [$]), eb = (0, a.bG)([c.A], () => ((null == er ? void 0 : er.id) == null ? null : c.A.getParticipant(R, er.id)) != null, [R, er]), {
        launchInGameActivity: ey
    } = (0, g.zW)($), eE = (0, g.S5)(null == $ ? void 0 : $.config.expiresAt), ev = (0, g.S5)(null == $ ? void 0 : $.config.rewardsConfig.rewardsExpireAt), eA = r.useCallback(() => {
        (0, v.Oy)($.id, {
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: _.Cy.ACCEPT_QUEST,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, M.vA)($) && ey()
    }, [$, ey]), eS = r.useCallback(() => {
        Z({
            questId: $.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: _.Cy.TRACK_PROGRESS,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: $.id
        })
    }, [$, Z]), eO = r.useCallback(() => {
        Z({
            questId: $.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: _.Cy.LEARN_MORE,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: $.id
        })
    }, [$, Z]), ej = (0, L.ix)({
        quest: $,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), eh = r.useMemo(() => (0, h.L)({
        quest: $,
        location: H.rE.QUEST_CHANNEL_CALL_HEADER
    }), [$]), ex = (0, x.NA)({
        quest: $
    }), eg = (0, M.vA)($), eN = (0, g.LS)($), eT = (null == (n = $.userStatus) ? void 0 : n.enrolledAt) != null, e_ = (null == (s = $.userStatus) ? void 0 : s.completedAt) != null, eC = null != $.userStatus && (0, P.gO)($.userStatus, S.uF.QUEST_LIVE_STREAM), eP = null != $.userStatus && (0, P.gO)($.userStatus, S.uF.QUEST_BAR), eI = ec && !eP, ew = O.t$.useConfig({
        location: H.rE.QUEST_CHANNEL_CALL_HEADER
    }).enabled;
    eh.info({
        isQuestCallHeaderDismissed: eC,
        isQuestExpired: eN,
        isQuestBarShowing: eI,
        isCurrentUserCallParticipant: eb
    });
    let eM = null != J && (null == (b = $.userStatus) ? void 0 : b.claimedAt) == null;
    if (!eM && (eC || eN || eI) || !eM && !eb) return null;
    let eR = (0, w.Yh)($),
        eD = (0, l.jsx)(k.A, {
            className: K.Qq,
            autoplay: ee,
            quest: $,
            questContent: S.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)("div", {
        className: i()(K.iE, {
            [K.rH]: eT
        }),
        onFocus: en,
        onMouseEnter: en,
        onBlur: el,
        onMouseLeave: el,
        children: [!eT && (0, l.jsxs)("div", {
            className: K.D9,
            children: [eD, (0, l.jsx)(G.A, {
                bgOpacity: .32,
                className: K.Pu
            })]
        }), (0, l.jsxs)("div", {
            className: K.Qs,
            children: [(0, l.jsxs)("div", {
                className: K.R_,
                children: [eT && ef ? eD : (0, l.jsx)("img", {
                    className: K.rC,
                    alt: $.config.messages.gameTitle,
                    src: (0, N.tW)($, N.fY.GAME_TILE, ei).url
                }), (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)("div", {
                        className: K.Mg,
                        children: [(0, l.jsx)(u.Heading, {
                            className: K.bB,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ef ? (0, C.YT)({
                                quest: $,
                                taskDetails: eR
                            }) : z.intl.formatToPlainString(z.t.EQa7os, {
                                questName: $.config.messages.questName
                            })
                        }), (0, l.jsx)(D.C, {
                            questContent: S.uF.QUEST_LIVE_STREAM,
                            sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                            quest: $,
                            preventIdle: !0,
                            shouldShowDisclosure: (null == (j = $.userStatus) ? void 0 : j.enrolledAt) == null,
                            children: e => (0, l.jsx)(u.DUT, Y(W({}, e), {
                                className: K.rb,
                                "aria-label": z.intl.string(z.t.DEoVWZ),
                                children: (0, l.jsx)(u.jNK, {
                                    size: "md",
                                    color: "currentColor",
                                    className: K.Bx
                                })
                            }))
                        })]
                    }), (0, l.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-xs/medium",
                        children: e_ ? z.intl.formatToPlainString(z.t.APddvF, {
                            expirationDate: ev
                        }) : z.intl.formatToPlainString(z.t["pX+fmn"], {
                            expirationDate: eE
                        })
                    })]
                })]
            }), eT && !e_ && !ef && (0, l.jsx)(F.A, {
                autoplay: ee,
                quest: $,
                questContent: S.uF.QUEST_LIVE_STREAM,
                taskDetails: eR,
                location: H.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                gameProfileSource: p.Ob.QuestLiveStream
            }), (0, l.jsxs)("div", {
                className: K.uz,
                children: [!eT && (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    children: [(0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: z.intl.string(z.t.LLLLPD),
                        onClick: eO,
                        fullWidth: !eg || $.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
                    }), ew && !eN ? (0, l.jsx)(U.A, {
                        quest: $,
                        size: "sm",
                        analyticsCtxQuestContent: S.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: S.uF.QUEST_LIVE_STREAM
                    }) : (0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: ex,
                        onClick: eA,
                        loading: em
                    })]
                }), eT && !e_ && ef && (0, l.jsx)(Q.A, {
                    color: u.LU0.colors.BACKGROUND_BRAND,
                    quest: $
                }), eT && !e_ && !ef && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: z.intl.string(z.t.VN1Ajl),
                    onClick: eS
                }), e_ && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: z.intl.string(z.t.cfY4PE),
                    onClick: ej
                })]
            })]
        })]
    })
}

function J(e) {
    var t;
    let n = r.useContext(b.vG),
        s = (0, a.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: i
        } = j.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        o = (0, a.bG)([A.A], () => A.A.quests),
        u = (0, g.oH)(Array.from(o.values())),
        d = r.useMemo(() => (0, M.$e)(o, H.Ls), [o]),
        p = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, a.bG)([y.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
            for (let i of e) {
                var l, r, s;
                if (i.type === B.lp.STREAM) {
                    let e = null != (l = (0, f.nr)(i.stream, n)) ? l : null,
                        s = (0, I.nq)(t, e);
                    if (null != s && (null == (r = s.userStatus) ? void 0 : r.claimedAt) == null) return s
                }
                for (let l of e)
                    if (!(0, B.PJ)(l))
                        for (let e of n.getActivities(l.user.id)) {
                            let n = (0, I.nq)(t, e);
                            if (null != n && (null == (s = n.userStatus) ? void 0 : s.claimedAt) == null) return n
                        }
            }
            return null
        }(p, d, y.A), [p, d, u, e.previewQuest]),
        E = r.useMemo(() => {
            var e;
            return i && null != (e = null == m ? void 0 : m.id) ? e : null
        }, [m, i]);
    r.useEffect(() => {
        null == e.previewQuest && null != E && (0, v.yO)([E], S.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [E, e.previewQuest]);
    let O = (0, a.bG)([A.A], () => {
            var e;
            let t = A.A.earnedQuestForPlacement.get(S.uF.QUEST_LIVE_STREAM);
            return null == t || null == E ? null : null != (e = t.quests.get(E)) ? e : null
        }, [E]),
        [h, x] = r.useState(null);
    r.useEffect(() => {
        null != O ? x(O) : null === E && x(null)
    }, [O, E]);
    let N = null != O ? O : null !== E ? h : null,
        T = null != (t = e.previewQuest) ? t : i ? N : m;
    return null == T || s ? null : (0, l.jsx)(R.R, {
        questOrQuests: T,
        overrideVisibility: !n,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        children: () => (0, l.jsx)($, Y(W({}, e), {
            quest: T
        }))
    })
}
let X = function(e) {
    let t = (0, a.bG)([E.default], () => E.default.getCurrentUser());
    return (0, a.bG)([c.A], () => ((null == t ? void 0 : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(J, W({}, e)) : null
}