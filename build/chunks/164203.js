/** chunk id: 164203, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => J
});
var l = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(311907),
    o = s(582754),
    u = s(397927),
    c = s(313961),
    d = s(15285),
    m = s(409626),
    A = s(834757),
    p = s(544028),
    x = s(461782),
    E = s(290863),
    f = s(287809),
    h = s(829219),
    N = s(859703),
    S = s(341915),
    T = s(55738),
    C = s(33621),
    v = s(943849),
    _ = s(714510),
    g = s(890687),
    j = s(579473),
    y = s(18437),
    M = s(590202),
    b = s(651892),
    I = s(710969),
    L = s(639214),
    R = s(792620),
    U = s(814793),
    w = s(73473),
    D = s(270045),
    Q = s(201805),
    G = s(212614),
    O = s(79545),
    P = s(251637),
    k = s(847641),
    F = s(646764),
    V = s(311243),
    q = s(545986),
    z = s(654487),
    H = s(652215),
    B = s(806931),
    W = s(985018),
    K = s(470699);

function Y(e) {
    let {
        channelId: t,
        quest: s,
        previewQuest: a,
        isParticipatingOverride: x
    } = e, T = (0, y.Ut)(), [w, Y] = n.useState(!1), $ = n.useCallback(() => Y(!0), []), J = n.useCallback(() => Y(!1), []), X = (0, r.bG)([f.default], () => f.default.getCurrentUser()), Z = (0, r.bG)([p.A], () => p.A.getState().theme), ee = (0, o.Mw)(Z) ? H.NJ8.DARK : H.NJ8.LIGHT, et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), es = (0, r.bG)([N.A], () => (0, I.t6)(N.A.quests, N.A.questToDeliverForPlacement, S.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: el,
        isQuestInQuestBar: en
    } = (0, r.cf)([E.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != s && null != X && (e = E.A, et.some(t => {
                if (t.type !== B.lp.STREAM || t.user.id !== X.id) return !1;
                let l = (0, A.nr)(t.stream, e);
                return null != l && (0, L.zS)(l, s)
            })),
            isQuestInQuestBar: es?.id === s?.id
        }
    }, [X, s, et, es]), ea = (0, R.pU)(s)?.[0], ei = (0, r.bG)([d.Ay, E.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, R.xZ)(s) && null !== ea && e.includes(ea)) return !0;
        let t = null != X ? E.A.findActivity(X.id, e => e.type !== H.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, R.g5)(s) && (0, L.zS)(t, s))
    }, [s, X, ea]), er = !0 === x || el || ei, eo = (0, r.bG)([N.A], () => null != s && N.A.isEnrolling(s.id), [s]), eu = (0, r.bG)([c.A], () => (X?.id == null ? null : c.A.getParticipant(t, X.id)) != null, [t, X]), {
        launchInGameActivity: ec
    } = (0, g.zW)(s), ed = (0, g.S5)(s?.config.expiresAt), em = (0, g.S5)(s?.config.rewardsConfig.rewardsExpireAt), eA = n.useCallback(() => {
        (0, h.Oy)(s.id, {
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.ACCEPT_QUEST,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, U.vA)(s) && ec()
    }, [s, ec]), ep = n.useCallback(() => {
        T({
            questId: s.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.TRACK_PROGRESS,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: s.id
        })
    }, [s, T]), ex = n.useCallback(() => {
        T({
            questId: s.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.LEARN_MORE,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: s.id
        })
    }, [s, T]), eE = (0, Q.ix)({
        quest: s,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), ef = n.useMemo(() => (0, v.L)({
        quest: s,
        location: z.rE.QUEST_CHANNEL_CALL_HEADER
    }), [s]), eh = (0, _.NA)({
        quest: s
    }), eN = (0, U.vA)(s), eS = (0, g.LS)(s), eT = s.userStatus?.enrolledAt != null, eC = s.userStatus?.completedAt != null, ev = null != s.userStatus && (0, I.gO)(s.userStatus, S.uF.QUEST_LIVE_STREAM), e_ = null != s.userStatus && (0, I.gO)(s.userStatus, S.uF.QUEST_BAR), eg = en && !e_, ej = C.t.useConfig({
        location: z.rE.QUEST_CHANNEL_CALL_HEADER
    }), ey = (0, O.Pd)(s);
    ef.info({
        isQuestCallHeaderDismissed: ev,
        isQuestExpired: eS,
        isQuestBarShowing: eg,
        isCurrentUserCallParticipant: eu
    });
    let eM = null != a && s.userStatus?.claimedAt == null;
    if (!eM && (ev || eS || eg) || !eM && !eu) return null;
    let eb = (0, R.Yh)(s),
        eI = (0, l.jsx)(F.A, {
            className: K.Qq,
            autoplay: w,
            quest: s,
            questContent: S.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)("div", {
        className: i()(K.iE, {
            [K.rH]: eT
        }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [!eT && (0, l.jsxs)("div", {
            className: K.D9,
            children: [(0, l.jsx)(k.A, {
                bgOpacity: .32,
                className: K.Pu
            }), eI]
        }), (0, l.jsxs)("div", {
            className: K.Qs,
            children: [(0, l.jsxs)("div", {
                className: K.R_,
                children: [eT && er ? eI : (0, l.jsx)("img", {
                    className: K.rC,
                    alt: s.config.messages.gameTitle,
                    src: (0, j.tW)(s, j.fY.GAME_TILE, ee).url
                }), (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)("div", {
                        className: K.Mg,
                        children: [(0, l.jsx)(u.Heading, {
                            className: K.bB,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: er ? (0, b.YT)({
                                quest: s,
                                taskDetails: eb
                            }) : W.intl.formatToPlainString(W.t.EQa7os, {
                                questName: s.config.messages.questName
                            })
                        }), (0, l.jsx)(D.C, {
                            questContent: S.uF.QUEST_LIVE_STREAM,
                            sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                            quest: s,
                            preventIdle: !0,
                            shouldShowDisclosure: s.userStatus?.enrolledAt == null,
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
                            expirationDate: em
                        }) : W.intl.formatToPlainString(W.t["pX+fmn"], {
                            expirationDate: ed
                        })
                    })]
                })]
            }), eT && !eC && !er && (0, l.jsx)(V.A, {
                autoplay: w,
                quest: s,
                questContent: S.uF.QUEST_LIVE_STREAM,
                taskDetails: eb,
                location: z.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                gameProfileSource: m.Ob.QuestLiveStream
            }), (0, l.jsxs)("div", {
                className: K.uz,
                children: [!eT && (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    children: [(0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: W.intl.string(W.t.LLLLPD),
                        onClick: ex,
                        fullWidth: !eN || s.config.features.includes(z.Li.CLOUD_GAMING_ACTIVITY)
                    }), ej.enabled && ey === O.UA.UNENROLLED && ej.enabledQuestStates.has(O.UA.UNENROLLED) && !eS ? (0, l.jsx)(G.A, {
                        quest: s,
                        surface: O.V3.VOICE_CALL_HEADER,
                        size: "sm",
                        analyticsCtxQuestContent: S.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: S.uF.QUEST_LIVE_STREAM
                    }) : (0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: eh,
                        onClick: eA,
                        loading: eo
                    })]
                }), eT && !eC && er && (0, l.jsx)(P.A, {
                    color: u.LU0.colors.BACKGROUND_BRAND,
                    quest: s
                }), eT && !eC && !er && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.VN1Ajl),
                    onClick: ep
                }), eC && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.cfY4PE),
                    onClick: eE
                })]
            })]
        })]
    })
}

function $(e) {
    let t = n.useContext(x.vG),
        s = (0, r.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: a
        } = T.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        i = (0, r.bG)([N.A], () => N.A.quests),
        o = (0, g.oH)(Array.from(i.values())),
        u = n.useMemo(() => (0, U.$e)(i, z.Ls), [i]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, r.bG)([E.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, s) {
            for (let l of e) {
                if (l.type === B.lp.STREAM) {
                    let e = (0, A.nr)(l.stream, s) ?? null,
                        n = (0, L.nq)(t, e);
                    if (null != n && n.userStatus?.claimedAt == null) return n
                }
                for (let l of e)
                    if (!(0, B.PJ)(l))
                        for (let e of s.getActivities(l.user.id)) {
                            let s = (0, L.nq)(t, e);
                            if (null != s && s.userStatus?.claimedAt == null) return s
                        }
            }
            return null
        }(d, u, E.A), [d, u, o, e.previewQuest]),
        p = n.useMemo(() => a ? m?.id ?? null : null, [m, a]);
    n.useEffect(() => {
        null == e.previewQuest && null != p && (0, h.yO)([p], S.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [p, e.previewQuest]);
    let f = (0, r.bG)([N.A], () => {
            let e = N.A.earnedQuestForPlacement.get(S.uF.QUEST_LIVE_STREAM);
            return null == e || null == p ? null : e.quests.get(p) ?? null
        }, [p]),
        [C, v] = n.useState(null);
    n.useEffect(() => {
        null != f ? v(f) : null === p && v(null)
    }, [f, p]);
    let _ = f ?? (null !== p ? C : null),
        j = e.previewQuest ?? (a ? _ : m);
    return null == j || s ? null : (0, l.jsx)(w.R, {
        questOrQuests: j,
        overrideVisibility: !t,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        children: () => (0, l.jsx)(Y, {
            ...e,
            quest: j
        })
    })
}
let J = function(e) {
    let t = (0, r.bG)([f.default], () => f.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)($, {
        ...e
    }) : null
}