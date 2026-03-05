/** chunk id: 164203 params = (module,exports,require) **/
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
    h = s(290863),
    E = s(287809),
    f = s(829219),
    N = s(859703),
    S = s(341915),
    v = s(55738),
    T = s(33621),
    g = s(943849),
    _ = s(714510),
    C = s(890687),
    j = s(579473),
    M = s(18437),
    I = s(590202),
    y = s(651892),
    b = s(710969),
    R = s(639214),
    L = s(792620),
    U = s(814793),
    D = s(73473),
    w = s(270045),
    O = s(201805),
    G = s(212614),
    Q = s(79545),
    P = s(251637),
    k = s(847641),
    F = s(646764),
    V = s(311243),
    q = s(545986),
    B = s(654487),
    z = s(652215),
    H = s(806931),
    W = s(985018),
    K = s(183509);

function $(e) {
    let {
        channelId: t,
        quest: s,
        previewQuest: a,
        isParticipatingOverride: x
    } = e, v = (0, M.Ut)(), [D, $] = n.useState(!1), Y = n.useCallback(() => $(!0), []), J = n.useCallback(() => $(!1), []), X = (0, r.bG)([E.default], () => E.default.getCurrentUser()), Z = (0, r.bG)([p.A], () => p.A.getState().theme), ee = (0, o.Mw)(Z) ? z.NJ8.DARK : z.NJ8.LIGHT, et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), es = (0, r.bG)([N.A], () => (0, b.t6)(N.A.quests, N.A.questToDeliverForPlacement, S.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: el,
        isQuestInQuestBar: en
    } = (0, r.cf)([h.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != s && null != X && (e = h.A, et.some(t => {
                if (t.type !== H.lp.STREAM || t.user.id !== X.id) return !1;
                let l = (0, A.nr)(t.stream, e);
                return null != l && (0, R.zS)(l, s)
            })),
            isQuestInQuestBar: es?.id === s?.id
        }
    }, [X, s, et, es]), ea = (0, L.pU)(s)?.[0], ei = (0, r.bG)([d.Ay, h.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, L.xZ)(s) && null !== ea && e.includes(ea)) return !0;
        let t = null != X ? h.A.findActivity(X.id, e => e.type !== z.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, L.g5)(s) && (0, R.zS)(t, s))
    }, [s, X, ea]), er = !0 === x || el || ei, eo = (0, r.bG)([N.A], () => null != s && N.A.isEnrolling(s.id), [s]), eu = (0, r.bG)([c.A], () => (X?.id == null ? null : c.A.getParticipant(t, X.id)) != null, [t, X]), {
        launchInGameActivity: ec
    } = (0, C.zW)(s), ed = (0, C.S5)(s?.config.expiresAt), em = (0, C.S5)(s?.config.rewardsConfig.rewardsExpireAt), eA = n.useCallback(() => {
        (0, f.Oy)(s.id, {
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: I.Cy.ACCEPT_QUEST,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, U.vA)(s) && ec()
    }, [s, ec]), ep = n.useCallback(() => {
        v({
            questId: s.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: I.Cy.TRACK_PROGRESS,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: s.id
        })
    }, [s, v]), ex = n.useCallback(() => {
        v({
            questId: s.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: I.Cy.LEARN_MORE,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: s.id
        })
    }, [s, v]), eh = (0, O.ix)({
        quest: s,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), eE = n.useMemo(() => (0, g.L)({
        quest: s,
        location: B.rE.QUEST_CHANNEL_CALL_HEADER
    }), [s]), ef = (0, _.NA)({
        quest: s
    }), eN = (0, U.vA)(s), eS = (0, C.LS)(s), ev = s.userStatus?.enrolledAt != null, eT = s.userStatus?.completedAt != null, eg = null != s.userStatus && (0, b.gO)(s.userStatus, S.uF.QUEST_LIVE_STREAM), e_ = null != s.userStatus && (0, b.gO)(s.userStatus, S.uF.QUEST_BAR), eC = en && !e_, ej = T.t.useConfig({
        location: B.rE.QUEST_CHANNEL_CALL_HEADER
    }), eM = (0, Q.Pd)(s);
    eE.info({
        isQuestCallHeaderDismissed: eg,
        isQuestExpired: eS,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: eu
    });
    let eI = null != a && s.userStatus?.claimedAt == null;
    if (!eI && (eg || eS || eC) || !eI && !eu) return null;
    let ey = (0, L.Yh)(s),
        eb = (0, l.jsx)(F.A, {
            className: K.Qq,
            autoplay: D,
            quest: s,
            questContent: S.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)("div", {
        className: i()(K.iE, {
            [K.rH]: ev
        }),
        onFocus: Y,
        onMouseEnter: Y,
        onBlur: J,
        onMouseLeave: J,
        children: [!ev && (0, l.jsxs)("div", {
            className: K.D9,
            children: [(0, l.jsx)(k.A, {
                bgOpacity: .32,
                className: K.Pu
            }), eb]
        }), (0, l.jsxs)("div", {
            className: K.Qs,
            children: [(0, l.jsxs)("div", {
                className: K.R_,
                children: [ev && er ? eb : (0, l.jsx)("img", {
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
                            children: er ? (0, y.YT)({
                                quest: s,
                                taskDetails: ey
                            }) : W.intl.formatToPlainString(W.t.EQa7os, {
                                questName: s.config.messages.questName
                            })
                        }), (0, l.jsx)(w.C, {
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
                        children: eT ? W.intl.formatToPlainString(W.t.APddvF, {
                            expirationDate: em
                        }) : W.intl.formatToPlainString(W.t["pX+fmn"], {
                            expirationDate: ed
                        })
                    })]
                })]
            }), ev && !eT && !er && (0, l.jsx)(V.A, {
                autoplay: D,
                quest: s,
                questContent: S.uF.QUEST_LIVE_STREAM,
                taskDetails: ey,
                location: B.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                gameProfileSource: m.Ob.QuestLiveStream
            }), (0, l.jsxs)("div", {
                className: K.uz,
                children: [!ev && (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    children: [(0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: W.intl.string(W.t.LLLLPD),
                        onClick: ex,
                        fullWidth: !eN || s.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
                    }), ej.enabled && eM === Q.UA.UNENROLLED && ej.enabledQuestStates.has(Q.UA.UNENROLLED) && !eS ? (0, l.jsx)(G.A, {
                        quest: s,
                        surface: Q.V3.VOICE_CALL_HEADER,
                        size: "sm",
                        analyticsCtxQuestContent: S.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: S.uF.QUEST_LIVE_STREAM
                    }) : (0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: ef,
                        onClick: eA,
                        loading: eo
                    })]
                }), ev && !eT && er && (0, l.jsx)(P.A, {
                    color: u.LU0.colors.BACKGROUND_BRAND,
                    quest: s
                }), ev && !eT && !er && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.VN1Ajl),
                    onClick: ep
                }), eT && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.cfY4PE),
                    onClick: eh
                })]
            })]
        })]
    })
}

function Y(e) {
    let t = n.useContext(x.vG),
        s = (0, r.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: a
        } = v.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        i = (0, r.bG)([N.A], () => N.A.quests),
        o = (0, C.oH)(Array.from(i.values())),
        u = n.useMemo(() => (0, U.$e)(i, B.Ls), [i]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, r.bG)([h.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, s) {
            for (let l of e) {
                if (l.type === H.lp.STREAM) {
                    let e = (0, A.nr)(l.stream, s) ?? null,
                        n = (0, R.nq)(t, e);
                    if (null != n && n.userStatus?.claimedAt == null) return n
                }
                for (let l of e)
                    if (!(0, H.PJ)(l))
                        for (let e of s.getActivities(l.user.id)) {
                            let s = (0, R.nq)(t, e);
                            if (null != s && s.userStatus?.claimedAt == null) return s
                        }
            }
            return null
        }(d, u, h.A), [d, u, o, e.previewQuest]),
        p = n.useMemo(() => a ? m?.id ?? null : null, [m, a]);
    n.useEffect(() => {
        null == e.previewQuest && null != p && (0, f.yO)([p], S.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [p, e.previewQuest]);
    let E = (0, r.bG)([N.A], () => {
            let e = N.A.earnedQuestForPlacement.get(S.uF.QUEST_LIVE_STREAM);
            return null == e || null == p ? null : e.quests.get(p) ?? null
        }, [p]),
        [T, g] = n.useState(null);
    n.useEffect(() => {
        null != E ? g(E) : null === p && g(null)
    }, [E, p]);
    let _ = E ?? (null !== p ? T : null),
        j = e.previewQuest ?? (a ? _ : m);
    return null == j || s ? null : (0, l.jsx)(D.R, {
        questOrQuests: j,
        overrideVisibility: !t,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        children: () => (0, l.jsx)($, {
            ...e,
            quest: j
        })
    })
}
let J = function(e) {
    let t = (0, r.bG)([E.default], () => E.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(Y, {
        ...e
    }) : null
}