/** chunk id: 164203 params = (module,exports,require) **/
n.d(t, {
    A: () => J
});
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(311907),
    o = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    A = n(409626),
    m = n(834757),
    E = n(544028),
    _ = n(461782),
    f = n(290863),
    N = n(287809),
    T = n(829219),
    p = n(859703),
    h = n(341915),
    S = n(55738),
    C = n(112142),
    g = n(714510),
    x = n(890687),
    v = n(579473),
    I = n(18437),
    R = n(590202),
    M = n(851936),
    j = n(651892),
    b = n(710969),
    y = n(639214),
    L = n(792620),
    U = n(814793),
    D = n(73473),
    O = n(270045),
    G = n(201805),
    w = n(212614),
    Q = n(79545),
    P = n(251637),
    F = n(847641),
    V = n(646764),
    k = n(311243),
    B = n(545986),
    q = n(654487),
    H = n(652215),
    z = n(806931),
    W = n(985018),
    K = n(43322);

function Y(e) {
    let {
        channelId: t,
        quest: n,
        previewQuest: i,
        isParticipatingOverride: _
    } = e, S = (0, I.Ut)(), [D, Y] = s.useState(!1), $ = s.useCallback(() => Y(!0), []), J = s.useCallback(() => Y(!1), []), X = (0, r.bG)([N.default], () => N.default.getCurrentUser()), Z = (0, r.bG)([E.A], () => E.A.getState().theme), ee = (0, o.Mw)(Z) ? H.NJ8.DARK : H.NJ8.LIGHT, et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), en = (0, r.bG)([p.A], () => (0, b.t6)(p.A.quests, p.A.questToDeliverForPlacement, h.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: el,
        isQuestInQuestBar: es
    } = (0, r.cf)([f.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != n && null != X && (e = f.A, et.some(t => {
                if (t.type !== z.lp.STREAM || t.user.id !== X.id) return !1;
                let l = (0, m.nr)(t.stream, e);
                return null != l && (0, y.zS)(l, n)
            })),
            isQuestInQuestBar: en?.id === n?.id
        }
    }, [X, n, et, en]), ei = (0, L.pU)(n)?.[0], ea = (0, r.bG)([d.Ay, f.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, L.xZ)(n) && null !== ei && e.includes(ei)) return !0;
        let t = null != X ? f.A.findActivity(X.id, e => e.type !== H.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, L.g5)(n) && (0, y.zS)(t, n))
    }, [n, X, ei]), er = !0 === _ || el || ea, eo = (0, r.bG)([p.A], () => null != n && p.A.isEnrolling(n.id), [n]), eu = (0, r.bG)([c.A], () => (X?.id == null ? null : c.A.getParticipant(t, X.id)) != null, [t, X]), {
        launchInGameActivity: ec
    } = (0, x.zW)(n), ed = (0, x.S5)(n?.config.expiresAt), eA = (0, x.S5)(n?.config.rewardsConfig.rewardsExpireAt), em = s.useCallback(() => {
        (0, T.Oy)(n.id, {
            questContent: h.uF.QUEST_LIVE_STREAM,
            questContentCTA: R.Cy.ACCEPT_QUEST,
            sourceQuestContent: h.uF.QUEST_LIVE_STREAM
        }), (0, U.vA)(n) && ec()
    }, [n, ec]), eE = s.useCallback(() => {
        S({
            questId: n.id,
            questContent: h.uF.QUEST_LIVE_STREAM,
            questContentCTA: R.Cy.TRACK_PROGRESS,
            sourceQuestContent: h.uF.QUEST_LIVE_STREAM
        }), (0, B.navigateToQuestHome)({
            fromContent: h.uF.QUEST_LIVE_STREAM,
            questId: n.id
        })
    }, [n, S]), e_ = s.useCallback(() => {
        S({
            questId: n.id,
            questContent: h.uF.QUEST_LIVE_STREAM,
            questContentCTA: R.Cy.LEARN_MORE,
            sourceQuestContent: h.uF.QUEST_LIVE_STREAM
        }), (0, B.navigateToQuestHome)({
            fromContent: h.uF.QUEST_LIVE_STREAM,
            questId: n.id
        })
    }, [n, S]), ef = (0, G.ix)({
        quest: n,
        questContent: h.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: h.uF.QUEST_LIVE_STREAM
    }), eN = s.useMemo(() => (0, M.L)({
        quest: n,
        location: q.rE.QUEST_CHANNEL_CALL_HEADER
    }), [n]), eT = (0, g.NA)({
        quest: n
    }), ep = (0, U.vA)(n), eh = (0, x.LS)(n), eS = n.userStatus?.enrolledAt != null, eC = n.userStatus?.completedAt != null, eg = null != n.userStatus && (0, b.gO)(n.userStatus, h.uF.QUEST_LIVE_STREAM), ex = null != n.userStatus && (0, b.gO)(n.userStatus, h.uF.QUEST_BAR), ev = es && !ex, eI = C.t.useConfig({
        location: q.rE.QUEST_CHANNEL_CALL_HEADER
    }), eR = (0, Q.Pd)(n);
    eN.info({
        isQuestCallHeaderDismissed: eg,
        isQuestExpired: eh,
        isQuestBarShowing: ev,
        isCurrentUserCallParticipant: eu
    });
    let eM = null != i && n.userStatus?.claimedAt == null;
    if (!eM && (eg || eh || ev) || !eM && !eu) return null;
    let ej = (0, L.Yh)(n),
        eb = (0, l.jsx)(V.A, {
            className: K.Qq,
            autoplay: D,
            quest: n,
            questContent: h.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: h.uF.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)("div", {
        className: a()(K.iE, {
            [K.rH]: eS
        }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [!eS && (0, l.jsxs)("div", {
            className: K.D9,
            children: [(0, l.jsx)(F.A, {
                bgOpacity: .32,
                className: K.Pu
            }), eb]
        }), (0, l.jsxs)("div", {
            className: K.Qs,
            children: [(0, l.jsxs)("div", {
                className: K.R_,
                children: [eS && er ? eb : (0, l.jsx)("img", {
                    className: K.rC,
                    alt: n.config.messages.gameTitle,
                    src: (0, v.tW)(n, v.fY.GAME_TILE, ee).url
                }), (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)("div", {
                        className: K.Mg,
                        children: [(0, l.jsx)(u.Heading, {
                            className: K.bB,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: er ? (0, j.YT)({
                                quest: n,
                                taskDetails: ej
                            }) : W.intl.formatToPlainString(W.t.EQa7os, {
                                questName: n.config.messages.questName
                            })
                        }), (0, l.jsx)(O.C, {
                            questContent: h.uF.QUEST_LIVE_STREAM,
                            sourceQuestContent: h.uF.QUEST_LIVE_STREAM,
                            quest: n,
                            preventIdle: !0,
                            shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                            children: e => (0, l.jsx)(u.DUT, {
                                ...e,
                                className: K.rb,
                                "aria-label": W.intl.string(W.t.DEoVWZ),
                                children: (0, l.jsx)(u.jNK, {
                                    size: "md",
                                    color: "currentColor",
                                    className: K.Bx
                                })
                            })
                        })]
                    }), (0, l.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-xs/medium",
                        children: eC ? W.intl.formatToPlainString(W.t.APddvF, {
                            expirationDate: eA
                        }) : W.intl.formatToPlainString(W.t["pX+fmn"], {
                            expirationDate: ed
                        })
                    })]
                })]
            }), eS && !eC && !er && (0, l.jsx)(k.A, {
                autoplay: D,
                quest: n,
                questContent: h.uF.QUEST_LIVE_STREAM,
                taskDetails: ej,
                location: q.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: h.uF.QUEST_LIVE_STREAM,
                gameProfileSource: A.Ob.QuestLiveStream
            }), (0, l.jsxs)("div", {
                className: K.uz,
                children: [!eS && (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    children: [(0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: W.intl.string(W.t.LLLLPD),
                        onClick: e_,
                        fullWidth: !ep || n.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY)
                    }), eI.enabled && eR === Q.UA.UNENROLLED && eI.enabledQuestStates.has(Q.UA.UNENROLLED) && !eh ? (0, l.jsx)(w.A, {
                        quest: n,
                        surface: Q.V3.VOICE_CALL_HEADER,
                        size: "sm",
                        analyticsCtxQuestContent: h.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: h.uF.QUEST_LIVE_STREAM
                    }) : (0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: eT,
                        onClick: em,
                        loading: eo
                    })]
                }), eS && !eC && er && (0, l.jsx)(P.A, {
                    color: u.LU0.colors.BACKGROUND_BRAND,
                    quest: n
                }), eS && !eC && !er && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.VN1Ajl),
                    onClick: eE
                }), eC && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.cfY4PE),
                    onClick: ef
                })]
            })]
        })]
    })
}

function $(e) {
    let t = s.useContext(_.vG),
        n = (0, r.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: i
        } = S.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        a = (0, r.bG)([p.A], () => p.A.quests),
        o = (0, x.oH)(Array.from(a.values())),
        u = s.useMemo(() => (0, U.$e)(a, q.Ls), [a]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        A = (0, r.bG)([f.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
            for (let l of e) {
                if (l.type === z.lp.STREAM) {
                    let e = (0, m.nr)(l.stream, n) ?? null,
                        s = (0, y.nq)(t, e);
                    if (null != s && s.userStatus?.claimedAt == null) return s
                }
                for (let l of e)
                    if (!(0, z.PJ)(l))
                        for (let e of n.getActivities(l.user.id)) {
                            let n = (0, y.nq)(t, e);
                            if (null != n && n.userStatus?.claimedAt == null) return n
                        }
            }
            return null
        }(d, u, f.A), [d, u, o, e.previewQuest]),
        E = s.useMemo(() => i ? A?.id ?? null : null, [A, i]);
    s.useEffect(() => {
        null == e.previewQuest && null != E && (0, T.yO)([E], h.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [E, e.previewQuest]);
    let N = (0, r.bG)([p.A], () => {
            let e = p.A.earnedQuestForPlacement.get(h.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.quests.get(E);
            return (0, b.Oh)(t) ? t.questWithUserStatus : null
        }, [E]),
        [C, g] = s.useState(null);
    s.useEffect(() => {
        null != N ? g(N) : null === E && g(null)
    }, [N, E]);
    let v = N ?? (null !== E ? C : null),
        I = e.previewQuest ?? (i ? v : A);
    return null == I || n ? null : (0, l.jsx)(D.R, {
        questOrQuests: I,
        overrideVisibility: !t,
        questContent: h.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: h.uF.QUEST_LIVE_STREAM,
        children: () => (0, l.jsx)(Y, {
            ...e,
            quest: I
        })
    })
}
let J = function(e) {
    let t = (0, r.bG)([N.default], () => N.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)($, {
        ...e
    }) : null
}