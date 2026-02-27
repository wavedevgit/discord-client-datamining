/** chunk id: 164203, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => J
});
var n = l(627968),
    s = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(311907),
    u = l(582754),
    o = l(397927),
    c = l(313961),
    d = l(15285),
    m = l(409626),
    A = l(834757),
    p = l(544028),
    x = l(461782),
    f = l(290863),
    E = l(287809),
    h = l(829219),
    N = l(859703),
    S = l(341915),
    T = l(55738),
    C = l(33621),
    v = l(943849),
    g = l(714510),
    _ = l(890687),
    j = l(579473),
    y = l(18437),
    M = l(590202),
    I = l(651892),
    b = l(710969),
    L = l(639214),
    R = l(792620),
    U = l(814793),
    w = l(73473),
    D = l(270045),
    Q = l(201805),
    G = l(212614),
    O = l(79545),
    P = l(251637),
    F = l(847641),
    k = l(646764),
    V = l(311243),
    q = l(545986),
    H = l(654487),
    z = l(652215),
    B = l(806931),
    W = l(985018),
    K = l(470699);

function Y(e) {
    let {
        channelId: t,
        quest: l,
        previewQuest: a,
        isParticipatingOverride: x
    } = e, T = (0, y.Ut)(), [w, Y] = s.useState(!1), $ = s.useCallback(() => Y(!0), []), J = s.useCallback(() => Y(!1), []), X = (0, r.bG)([E.default], () => E.default.getCurrentUser()), Z = (0, r.bG)([p.A], () => p.A.getState().theme), ee = (0, u.Mw)(Z) ? z.NJ8.DARK : z.NJ8.LIGHT, et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), el = (0, r.bG)([N.A], () => (0, b.t6)(N.A.quests, N.A.questToDeliverForPlacement, S.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: en,
        isQuestInQuestBar: es
    } = (0, r.cf)([f.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != l && null != X && (e = f.A, et.some(t => {
                if (t.type !== B.lp.STREAM || t.user.id !== X.id) return !1;
                let n = (0, A.nr)(t.stream, e);
                return null != n && (0, L.zS)(n, l)
            })),
            isQuestInQuestBar: el?.id === l?.id
        }
    }, [X, l, et, el]), ea = (0, R.pU)(l)?.[0], ei = (0, r.bG)([d.Ay, f.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, R.xZ)(l) && null !== ea && e.includes(ea)) return !0;
        let t = null != X ? f.A.findActivity(X.id, e => e.type !== z.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, R.g5)(l) && (0, L.zS)(t, l))
    }, [l, X, ea]), er = !0 === x || en || ei, eu = (0, r.bG)([N.A], () => null != l && N.A.isEnrolling(l.id), [l]), eo = (0, r.bG)([c.A], () => (X?.id == null ? null : c.A.getParticipant(t, X.id)) != null, [t, X]), {
        launchInGameActivity: ec
    } = (0, _.zW)(l), ed = (0, _.S5)(l?.config.expiresAt), em = (0, _.S5)(l?.config.rewardsConfig.rewardsExpireAt), eA = s.useCallback(() => {
        (0, h.Oy)(l.id, {
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.ACCEPT_QUEST,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, U.vA)(l) && ec()
    }, [l, ec]), ep = s.useCallback(() => {
        T({
            questId: l.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.TRACK_PROGRESS,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: l.id
        })
    }, [l, T]), ex = s.useCallback(() => {
        T({
            questId: l.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.LEARN_MORE,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: l.id
        })
    }, [l, T]), ef = (0, Q.ix)({
        quest: l,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), eE = s.useMemo(() => (0, v.L)({
        quest: l,
        location: H.rE.QUEST_CHANNEL_CALL_HEADER
    }), [l]), eh = (0, g.NA)({
        quest: l
    }), eN = (0, U.vA)(l), eS = (0, _.LS)(l), eT = l.userStatus?.enrolledAt != null, eC = l.userStatus?.completedAt != null, ev = null != l.userStatus && (0, b.gO)(l.userStatus, S.uF.QUEST_LIVE_STREAM), eg = null != l.userStatus && (0, b.gO)(l.userStatus, S.uF.QUEST_BAR), e_ = es && !eg, ej = C.t.useConfig({
        location: H.rE.QUEST_CHANNEL_CALL_HEADER
    }), ey = (0, O.Pd)(l);
    eE.info({
        isQuestCallHeaderDismissed: ev,
        isQuestExpired: eS,
        isQuestBarShowing: e_,
        isCurrentUserCallParticipant: eo
    });
    let eM = null != a && l.userStatus?.claimedAt == null;
    if (!eM && (ev || eS || e_) || !eM && !eo) return null;
    let eI = (0, R.Yh)(l),
        eb = (0, n.jsx)(k.A, {
            className: K.Qq,
            autoplay: w,
            quest: l,
            questContent: S.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        });
    return (0, n.jsxs)("div", {
        className: i()(K.iE, {
            [K.rH]: eT
        }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [!eT && (0, n.jsxs)("div", {
            className: K.D9,
            children: [(0, n.jsx)(F.A, {
                bgOpacity: .32,
                className: K.Pu
            }), eb]
        }), (0, n.jsxs)("div", {
            className: K.Qs,
            children: [(0, n.jsxs)("div", {
                className: K.R_,
                children: [eT && er ? eb : (0, n.jsx)("img", {
                    className: K.rC,
                    alt: l.config.messages.gameTitle,
                    src: (0, j.tW)(l, j.fY.GAME_TILE, ee).url
                }), (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("div", {
                        className: K.Mg,
                        children: [(0, n.jsx)(o.Heading, {
                            className: K.bB,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: er ? (0, I.YT)({
                                quest: l,
                                taskDetails: eI
                            }) : W.intl.formatToPlainString(W.t.EQa7os, {
                                questName: l.config.messages.questName
                            })
                        }), (0, n.jsx)(D.C, {
                            questContent: S.uF.QUEST_LIVE_STREAM,
                            sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                            quest: l,
                            preventIdle: !0,
                            shouldShowDisclosure: l.userStatus?.enrolledAt == null,
                            children: e => (0, n.jsx)(o.DUT, {
                                ...e,
                                className: K.rb,
                                "aria-label": W.intl.string(W.t.DEoVWZ),
                                children: (0, n.jsx)(o.jNK, {
                                    size: "md",
                                    color: "currentColor",
                                    className: K.Bx
                                })
                            })
                        })]
                    }), (0, n.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-xs/medium",
                        children: eC ? W.intl.formatToPlainString(W.t.APddvF, {
                            expirationDate: em
                        }) : W.intl.formatToPlainString(W.t["pX+fmn"], {
                            expirationDate: ed
                        })
                    })]
                })]
            }), eT && !eC && !er && (0, n.jsx)(V.A, {
                autoplay: w,
                quest: l,
                questContent: S.uF.QUEST_LIVE_STREAM,
                taskDetails: eI,
                location: H.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                gameProfileSource: m.Ob.QuestLiveStream
            }), (0, n.jsxs)("div", {
                className: K.uz,
                children: [!eT && (0, n.jsxs)(o.BJc, {
                    direction: "horizontal",
                    children: [(0, n.jsx)(o.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: W.intl.string(W.t.LLLLPD),
                        onClick: ex,
                        fullWidth: !eN || l.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
                    }), ej.enabled && ey === O.UA.UNENROLLED && ej.enabledQuestStates.has(O.UA.UNENROLLED) && !eS ? (0, n.jsx)(G.A, {
                        quest: l,
                        surface: O.V3.VOICE_CALL_HEADER,
                        size: "sm",
                        analyticsCtxQuestContent: S.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: S.uF.QUEST_LIVE_STREAM
                    }) : (0, n.jsx)(o.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: eh,
                        onClick: eA,
                        loading: eu
                    })]
                }), eT && !eC && er && (0, n.jsx)(P.A, {
                    color: o.LU0.colors.BACKGROUND_BRAND,
                    quest: l
                }), eT && !eC && !er && (0, n.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.VN1Ajl),
                    onClick: ep
                }), eC && (0, n.jsx)(o.Button, {
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
    let t = s.useContext(x.vG),
        l = (0, r.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: a
        } = T.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        i = (0, r.bG)([N.A], () => N.A.quests),
        u = (0, _.oH)(Array.from(i.values())),
        o = s.useMemo(() => (0, U.$e)(i, H.Ls), [i]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, r.bG)([f.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, l) {
            for (let n of e) {
                if (n.type === B.lp.STREAM) {
                    let e = (0, A.nr)(n.stream, l) ?? null,
                        s = (0, L.nq)(t, e);
                    if (null != s && s.userStatus?.claimedAt == null) return s
                }
                for (let n of e)
                    if (!(0, B.PJ)(n))
                        for (let e of l.getActivities(n.user.id)) {
                            let l = (0, L.nq)(t, e);
                            if (null != l && l.userStatus?.claimedAt == null) return l
                        }
            }
            return null
        }(d, o, f.A), [d, o, u, e.previewQuest]),
        p = s.useMemo(() => a ? m?.id ?? null : null, [m, a]);
    s.useEffect(() => {
        null == e.previewQuest && null != p && (0, h.yO)([p], S.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [p, e.previewQuest]);
    let E = (0, r.bG)([N.A], () => {
            let e = N.A.earnedQuestForPlacement.get(S.uF.QUEST_LIVE_STREAM);
            return null == e || null == p ? null : e.quests.get(p) ?? null
        }, [p]),
        [C, v] = s.useState(null);
    s.useEffect(() => {
        null != E ? v(E) : null === p && v(null)
    }, [E, p]);
    let g = E ?? (null !== p ? C : null),
        j = e.previewQuest ?? (a ? g : m);
    return null == j || l ? null : (0, n.jsx)(w.R, {
        questOrQuests: j,
        overrideVisibility: !t,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        children: () => (0, n.jsx)(Y, {
            ...e,
            quest: j
        })
    })
}
let J = function(e) {
    let t = (0, r.bG)([E.default], () => E.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, n.jsx)($, {
        ...e
    }) : null
}