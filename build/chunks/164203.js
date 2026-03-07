/** chunk id: 164203 params = (module,exports,require) **/
n.d(t, {
    A: () => J
});
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(311907),
    o = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    m = n(409626),
    A = n(834757),
    p = n(544028),
    h = n(461782),
    x = n(290863),
    E = n(287809),
    f = n(829219),
    N = n(859703),
    g = n(341915),
    S = n(55738),
    v = n(33621),
    T = n(943849),
    C = n(714510),
    _ = n(890687),
    j = n(579473),
    y = n(18437),
    M = n(590202),
    I = n(651892),
    b = n(710969),
    R = n(639214),
    L = n(792620),
    w = n(814793),
    U = n(73473),
    D = n(270045),
    O = n(201805),
    G = n(212614),
    Q = n(79545),
    k = n(251637),
    P = n(847641),
    F = n(646764),
    V = n(311243),
    q = n(545986),
    B = n(654487),
    z = n(652215),
    H = n(806931),
    W = n(985018),
    K = n(183509);

function $(e) {
    let {
        channelId: t,
        quest: n,
        previewQuest: a,
        isParticipatingOverride: h
    } = e, S = (0, y.Ut)(), [U, $] = s.useState(!1), Y = s.useCallback(() => $(!0), []), J = s.useCallback(() => $(!1), []), X = (0, r.bG)([E.default], () => E.default.getCurrentUser()), Z = (0, r.bG)([p.A], () => p.A.getState().theme), ee = (0, o.Mw)(Z) ? z.NJ8.DARK : z.NJ8.LIGHT, et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), en = (0, r.bG)([N.A], () => (0, b.t6)(N.A.quests, N.A.questToDeliverForPlacement, g.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: el,
        isQuestInQuestBar: es
    } = (0, r.cf)([x.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != n && null != X && (e = x.A, et.some(t => {
                if (t.type !== H.lp.STREAM || t.user.id !== X.id) return !1;
                let l = (0, A.nr)(t.stream, e);
                return null != l && (0, R.zS)(l, n)
            })),
            isQuestInQuestBar: en?.id === n?.id
        }
    }, [X, n, et, en]), ea = (0, L.pU)(n)?.[0], ei = (0, r.bG)([d.Ay, x.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, L.xZ)(n) && null !== ea && e.includes(ea)) return !0;
        let t = null != X ? x.A.findActivity(X.id, e => e.type !== z.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, L.g5)(n) && (0, R.zS)(t, n))
    }, [n, X, ea]), er = !0 === h || el || ei, eo = (0, r.bG)([N.A], () => null != n && N.A.isEnrolling(n.id), [n]), eu = (0, r.bG)([c.A], () => (X?.id == null ? null : c.A.getParticipant(t, X.id)) != null, [t, X]), {
        launchInGameActivity: ec
    } = (0, _.zW)(n), ed = (0, _.S5)(n?.config.expiresAt), em = (0, _.S5)(n?.config.rewardsConfig.rewardsExpireAt), eA = s.useCallback(() => {
        (0, f.Oy)(n.id, {
            questContent: g.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.ACCEPT_QUEST,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM
        }), (0, w.vA)(n) && ec()
    }, [n, ec]), ep = s.useCallback(() => {
        S({
            questId: n.id,
            questContent: g.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.TRACK_PROGRESS,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: g.uF.QUEST_LIVE_STREAM,
            questId: n.id
        })
    }, [n, S]), eh = s.useCallback(() => {
        S({
            questId: n.id,
            questContent: g.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.LEARN_MORE,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: g.uF.QUEST_LIVE_STREAM,
            questId: n.id
        })
    }, [n, S]), ex = (0, O.ix)({
        quest: n,
        questContent: g.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: g.uF.QUEST_LIVE_STREAM
    }), eE = s.useMemo(() => (0, T.L)({
        quest: n,
        location: B.rE.QUEST_CHANNEL_CALL_HEADER
    }), [n]), ef = (0, C.NA)({
        quest: n
    }), eN = (0, w.vA)(n), eg = (0, _.LS)(n), eS = n.userStatus?.enrolledAt != null, ev = n.userStatus?.completedAt != null, eT = null != n.userStatus && (0, b.gO)(n.userStatus, g.uF.QUEST_LIVE_STREAM), eC = null != n.userStatus && (0, b.gO)(n.userStatus, g.uF.QUEST_BAR), e_ = es && !eC, ej = v.t.useConfig({
        location: B.rE.QUEST_CHANNEL_CALL_HEADER
    }), ey = (0, Q.Pd)(n);
    eE.info({
        isQuestCallHeaderDismissed: eT,
        isQuestExpired: eg,
        isQuestBarShowing: e_,
        isCurrentUserCallParticipant: eu
    });
    let eM = null != a && n.userStatus?.claimedAt == null;
    if (!eM && (eT || eg || e_) || !eM && !eu) return null;
    let eI = (0, L.Yh)(n),
        eb = (0, l.jsx)(F.A, {
            className: K.Qq,
            autoplay: U,
            quest: n,
            questContent: g.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)("div", {
        className: i()(K.iE, {
            [K.rH]: eS
        }),
        onFocus: Y,
        onMouseEnter: Y,
        onBlur: J,
        onMouseLeave: J,
        children: [!eS && (0, l.jsxs)("div", {
            className: K.D9,
            children: [(0, l.jsx)(P.A, {
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
                    src: (0, j.tW)(n, j.fY.GAME_TILE, ee).url
                }), (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)("div", {
                        className: K.Mg,
                        children: [(0, l.jsx)(u.Heading, {
                            className: K.bB,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: er ? (0, I.YT)({
                                quest: n,
                                taskDetails: eI
                            }) : W.intl.formatToPlainString(W.t.EQa7os, {
                                questName: n.config.messages.questName
                            })
                        }), (0, l.jsx)(D.C, {
                            questContent: g.uF.QUEST_LIVE_STREAM,
                            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
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
                        children: ev ? W.intl.formatToPlainString(W.t.APddvF, {
                            expirationDate: em
                        }) : W.intl.formatToPlainString(W.t["pX+fmn"], {
                            expirationDate: ed
                        })
                    })]
                })]
            }), eS && !ev && !er && (0, l.jsx)(V.A, {
                autoplay: U,
                quest: n,
                questContent: g.uF.QUEST_LIVE_STREAM,
                taskDetails: eI,
                location: B.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                gameProfileSource: m.Ob.QuestLiveStream
            }), (0, l.jsxs)("div", {
                className: K.uz,
                children: [!eS && (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    children: [(0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: W.intl.string(W.t.LLLLPD),
                        onClick: eh,
                        fullWidth: !eN || n.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
                    }), ej.enabled && ey === Q.UA.UNENROLLED && ej.enabledQuestStates.has(Q.UA.UNENROLLED) && !eg ? (0, l.jsx)(G.A, {
                        quest: n,
                        surface: Q.V3.VOICE_CALL_HEADER,
                        size: "sm",
                        analyticsCtxQuestContent: g.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: g.uF.QUEST_LIVE_STREAM
                    }) : (0, l.jsx)(u.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: ef,
                        onClick: eA,
                        loading: eo
                    })]
                }), eS && !ev && er && (0, l.jsx)(k.A, {
                    color: u.LU0.colors.BACKGROUND_BRAND,
                    quest: n
                }), eS && !ev && !er && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.VN1Ajl),
                    onClick: ep
                }), ev && (0, l.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.cfY4PE),
                    onClick: ex
                })]
            })]
        })]
    })
}

function Y(e) {
    let t = s.useContext(h.vG),
        n = (0, r.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: a
        } = S.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        i = (0, r.bG)([N.A], () => N.A.quests),
        o = (0, _.oH)(Array.from(i.values())),
        u = s.useMemo(() => (0, w.$e)(i, B.Ls), [i]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, r.bG)([x.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
            for (let l of e) {
                if (l.type === H.lp.STREAM) {
                    let e = (0, A.nr)(l.stream, n) ?? null,
                        s = (0, R.nq)(t, e);
                    if (null != s && s.userStatus?.claimedAt == null) return s
                }
                for (let l of e)
                    if (!(0, H.PJ)(l))
                        for (let e of n.getActivities(l.user.id)) {
                            let n = (0, R.nq)(t, e);
                            if (null != n && n.userStatus?.claimedAt == null) return n
                        }
            }
            return null
        }(d, u, x.A), [d, u, o, e.previewQuest]),
        p = s.useMemo(() => a ? m?.id ?? null : null, [m, a]);
    s.useEffect(() => {
        null == e.previewQuest && null != p && (0, f.yO)([p], g.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [p, e.previewQuest]);
    let E = (0, r.bG)([N.A], () => {
            let e = N.A.earnedQuestForPlacement.get(g.uF.QUEST_LIVE_STREAM);
            return null == e || null == p ? null : e.quests.get(p) ?? null
        }, [p]),
        [v, T] = s.useState(null);
    s.useEffect(() => {
        null != E ? T(E) : null === p && T(null)
    }, [E, p]);
    let C = E ?? (null !== p ? v : null),
        j = e.previewQuest ?? (a ? C : m);
    return null == j || n ? null : (0, l.jsx)(U.R, {
        questOrQuests: j,
        overrideVisibility: !t,
        questContent: g.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
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