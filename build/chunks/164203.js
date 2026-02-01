/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => X
}), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    a = n(311907),
    s = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    _ = n(409626),
    p = n(834757),
    b = n(544028),
    m = n(461782),
    f = n(290863),
    g = n(287809),
    y = n(829219),
    S = n(859703),
    x = n(341915),
    h = n(245853),
    A = n(55738),
    v = n(943849),
    O = n(714510),
    E = n(890687),
    j = n(579473),
    T = n(18437),
    C = n(590202),
    N = n(651892),
    w = n(710969),
    I = n(639214),
    P = n(792620),
    M = n(814793),
    R = n(73473),
    D = n(270045),
    L = n(201805),
    U = n(212614),
    Q = n(251637),
    G = n(847641),
    k = n(646764),
    B = n(311243),
    F = n(545986),
    H = n(654487),
    q = n(652215),
    W = n(806931),
    V = n(985018),
    z = n(470699);

function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function Y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function $(e) {
    var t, n, o, m, A;
    let {
        channelId: R,
        quest: $,
        previewQuest: J,
        isParticipatingOverride: X
    } = e, Z = (0, T.Ut)(), [ee, et] = l.useState(!1), en = l.useCallback(() => et(!0), []), er = l.useCallback(() => et(!1), []), el = (0, a.bG)([g.default], () => g.default.getCurrentUser()), eo = (0, a.bG)([b.A], () => b.A.getState().theme), ei = (0, s.Mw)(eo) ? q.NJ8.DARK : q.NJ8.LIGHT, ea = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), es = (0, a.bG)([S.A], () => (0, w.t6)(S.A.quests, S.A.questToDeliverForPlacement, x.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: eu,
        isQuestInQuestBar: ec
    } = (0, a.cf)([f.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != $ && null != el && (e = f.A, ea.some(t => {
                if (t.type !== W.lp.STREAM || t.user.id !== el.id) return !1;
                let n = (0, p.nr)(t.stream, e);
                return null != n && (0, I.zS)(n, $)
            })),
            isQuestInQuestBar: (null == es ? void 0 : es.id) === (null == $ ? void 0 : $.id)
        }
    }, [el, $, ea, es]), ed = null == (t = (0, P.pU)($)) ? void 0 : t[0], e_ = (0, a.bG)([d.Ay, f.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, P.xZ)($) && null !== ed && e.includes(ed)) return !0;
        let t = null != el ? f.A.findActivity(el.id, e => e.type !== q.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, P.g5)($) && (0, I.zS)(t, $))
    }, [$, el, ed]), ep = !0 === X || eu || e_, eb = (0, a.bG)([S.A], () => null != $ && S.A.isEnrolling($.id), [$]), em = (0, a.bG)([c.A], () => ((null == el ? void 0 : el.id) == null ? null : c.A.getParticipant(R, el.id)) != null, [R, el]), {
        launchInGameActivity: ef
    } = (0, E.zW)($), eg = (0, E.S5)(null == $ ? void 0 : $.config.expiresAt), ey = (0, E.S5)(null == $ ? void 0 : $.config.rewardsConfig.rewardsExpireAt), eS = l.useCallback(() => {
        (0, y.Oy)($.id, {
            questContent: x.uF.QUEST_LIVE_STREAM,
            questContentCTA: C.Cy.ACCEPT_QUEST,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM
        }), (0, M.vA)($) && ef()
    }, [$, ef]), ex = l.useCallback(() => {
        Z({
            questId: $.id,
            questContent: x.uF.QUEST_LIVE_STREAM,
            questContentCTA: C.Cy.TRACK_PROGRESS,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM
        }), (0, F.navigateToQuestHome)({
            fromContent: x.uF.QUEST_LIVE_STREAM,
            questId: $.id
        })
    }, [$, Z]), eh = l.useCallback(() => {
        Z({
            questId: $.id,
            questContent: x.uF.QUEST_LIVE_STREAM,
            questContentCTA: C.Cy.LEARN_MORE,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM
        }), (0, F.navigateToQuestHome)({
            fromContent: x.uF.QUEST_LIVE_STREAM,
            questId: $.id
        })
    }, [$, Z]), eA = (0, L.ix)({
        quest: $,
        questContent: x.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), ev = l.useMemo(() => (0, v.L)({
        quest: $,
        location: H.rE.QUEST_CHANNEL_CALL_HEADER
    }), [$]), eO = (0, O.NA)({
        quest: $
    }), eE = (0, M.vA)($), ej = (0, E.LS)($), eT = (null == (n = $.userStatus) ? void 0 : n.enrolledAt) != null, eC = (null == (o = $.userStatus) ? void 0 : o.completedAt) != null, eN = null != $.userStatus && (0, w.gO)($.userStatus, x.uF.QUEST_LIVE_STREAM), ew = null != $.userStatus && (0, w.gO)($.userStatus, x.uF.QUEST_BAR), eI = ec && !ew, eP = h.t$.useConfig({
        location: H.rE.QUEST_CHANNEL_CALL_HEADER
    }).enabled;
    ev.info({
        isQuestCallHeaderDismissed: eN,
        isQuestExpired: ej,
        isQuestBarShowing: eI,
        isCurrentUserCallParticipant: em
    });
    let eM = null != J && (null == (m = $.userStatus) ? void 0 : m.claimedAt) == null;
    if (!eM && (eN || ej || eI) || !eM && !em) return null;
    let eR = (0, P.Yh)($),
        eD = (0, r.jsx)(k.A, {
            className: z.Qq,
            autoplay: ee,
            quest: $,
            questContent: x.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM
        });
    return (0, r.jsxs)("div", {
        className: i()(z.iE, {
            [z.rH]: eT
        }),
        onFocus: en,
        onMouseEnter: en,
        onBlur: er,
        onMouseLeave: er,
        children: [!eT && (0, r.jsxs)("div", {
            className: z.D9,
            children: [eD, (0, r.jsx)(G.A, {
                bgOpacity: .32,
                className: z.Pu
            })]
        }), (0, r.jsxs)("div", {
            className: z.Qs,
            children: [(0, r.jsxs)("div", {
                className: z.R_,
                children: [eT && ep ? eD : (0, r.jsx)("img", {
                    className: z.rC,
                    alt: $.config.messages.gameTitle,
                    src: (0, j.tW)($, j.fY.GAME_TILE, ei).url
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: z.Mg,
                        children: [(0, r.jsx)(u.Heading, {
                            className: z.bB,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ep ? (0, N.YT)({
                                quest: $,
                                taskDetails: eR
                            }) : V.intl.formatToPlainString(V.t.EQa7os, {
                                questName: $.config.messages.questName
                            })
                        }), (0, r.jsx)(D.C, {
                            questContent: x.uF.QUEST_LIVE_STREAM,
                            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                            quest: $,
                            preventIdle: !0,
                            shouldShowDisclosure: (null == (A = $.userStatus) ? void 0 : A.enrolledAt) == null,
                            children: e => (0, r.jsx)(u.DUT, Y(K({}, e), {
                                className: z.rb,
                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                children: (0, r.jsx)(u.jNK, {
                                    size: "md",
                                    color: "currentColor",
                                    className: z.Bx
                                })
                            }))
                        })]
                    }), (0, r.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-xs/medium",
                        children: eC ? V.intl.formatToPlainString(V.t.APddvF, {
                            expirationDate: ey
                        }) : V.intl.formatToPlainString(V.t["pX+fmn"], {
                            expirationDate: eg
                        })
                    })]
                })]
            }), eT && !eC && !ep && (0, r.jsx)(B.A, {
                autoplay: ee,
                quest: $,
                questContent: x.uF.QUEST_LIVE_STREAM,
                taskDetails: eR,
                location: H.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                gameProfileSource: _.Ob.QuestLiveStream
            }), (0, r.jsxs)("div", {
                className: z.uz,
                children: [!eT && (0, r.jsxs)(u.BJc, {
                    direction: "horizontal",
                    children: [(0, r.jsx)(u.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: V.intl.string(V.t.LLLLPD),
                        onClick: eh,
                        fullWidth: !eE || $.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
                    }), eP && !ej ? (0, r.jsx)(U.A, {
                        quest: $,
                        size: "sm",
                        analyticsCtxQuestContent: x.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: x.uF.QUEST_LIVE_STREAM
                    }) : (0, r.jsx)(u.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: eO,
                        onClick: eS,
                        loading: eb
                    })]
                }), eT && !eC && ep && (0, r.jsx)(Q.A, {
                    color: u.LU0.colors.BACKGROUND_BRAND,
                    quest: $
                }), eT && !eC && !ep && (0, r.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: V.intl.string(V.t.VN1Ajl),
                    onClick: ex
                }), eC && (0, r.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: V.intl.string(V.t.cfY4PE),
                    onClick: eA
                })]
            })]
        })]
    })
}

function J(e) {
    var t;
    let n = l.useContext(m.vG),
        o = (0, a.bG)([S.A], () => null != S.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: i
        } = A.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        s = (0, a.bG)([S.A], () => S.A.quests),
        u = (0, E.oH)(Array.from(s.values())),
        d = l.useMemo(() => (0, M.$e)(s, H.Ls), [s]),
        _ = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        b = (0, a.bG)([f.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
            for (let i of e) {
                var r, l, o;
                if (i.type === W.lp.STREAM) {
                    let e = null != (r = (0, p.nr)(i.stream, n)) ? r : null,
                        o = (0, I.nq)(t, e);
                    if (null != o && (null == (l = o.userStatus) ? void 0 : l.claimedAt) == null) return o
                }
                for (let r of e)
                    if (!(0, W.PJ)(r))
                        for (let e of n.getActivities(r.user.id)) {
                            let n = (0, I.nq)(t, e);
                            if (null != n && (null == (o = n.userStatus) ? void 0 : o.claimedAt) == null) return n
                        }
            }
            return null
        }(_, d, f.A), [_, d, u, e.previewQuest]),
        g = l.useMemo(() => {
            var e;
            return i && null != (e = null == b ? void 0 : b.id) ? e : null
        }, [b, i]);
    l.useEffect(() => {
        null == e.previewQuest && null != g && (0, y.yO)([g], x.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [g, e.previewQuest]);
    let h = (0, a.bG)([S.A], () => {
            var e;
            let t = S.A.earnedQuestForPlacement.get(x.uF.QUEST_LIVE_STREAM);
            return null == t || null == g ? null : null != (e = t.quests.get(g)) ? e : null
        }, [g]),
        [v, O] = l.useState(null);
    l.useEffect(() => {
        null != h ? O(h) : null === g && O(null)
    }, [h, g]);
    let j = null != h ? h : null !== g ? v : null,
        T = null != (t = e.previewQuest) ? t : i ? j : b;
    return null == T || o ? null : (0, r.jsx)(R.R, {
        questOrQuests: T,
        overrideVisibility: !n,
        questContent: x.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        children: () => (0, r.jsx)($, Y(K({}, e), {
            quest: T
        }))
    })
}
let X = function(e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser());
    return (0, a.bG)([c.A], () => ((null == t ? void 0 : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(J, K({}, e)) : null
}