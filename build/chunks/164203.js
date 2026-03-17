/** chunk id: 164203 params = (module,exports,require) **/
n.d(t, {
    A: () => J
});
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(311907),
    o = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    m = n(409626),
    A = n(834757),
    E = n(544028),
    f = n(461782),
    p = n(290863),
    h = n(287809),
    x = n(829219),
    N = n(859703),
    S = n(341915),
    g = n(55738),
    T = n(33621),
    _ = n(943849),
    v = n(714510),
    C = n(890687),
    I = n(579473),
    j = n(18437),
    M = n(590202),
    y = n(651892),
    b = n(710969),
    R = n(639214),
    L = n(792620),
    U = n(814793),
    D = n(73473),
    w = n(270045),
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
    K = n(470699);

function Y(e) {
    let {
        channelId: t,
        quest: n,
        previewQuest: a,
        isParticipatingOverride: f
    } = e, g = (0, j.Ut)(), [D, Y] = l.useState(!1), $ = l.useCallback(() => Y(!0), []), J = l.useCallback(() => Y(!1), []), Z = (0, r.bG)([h.default], () => h.default.getCurrentUser()), X = (0, r.bG)([E.A], () => E.A.getState().theme), ee = (0, o.Mw)(X) ? z.NJ8.DARK : z.NJ8.LIGHT, et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), en = (0, r.bG)([N.A], () => (0, b.t6)(N.A.quests, N.A.questToDeliverForPlacement, S.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
        isCurrentUserStreamingQuestApplication: es,
        isQuestInQuestBar: el
    } = (0, r.cf)([p.A], () => {
        var e;
        return {
            isCurrentUserStreamingQuestApplication: null != n && null != Z && (e = p.A, et.some(t => {
                if (t.type !== H.lp.STREAM || t.user.id !== Z.id) return !1;
                let s = (0, A.nr)(t.stream, e);
                return null != s && (0, R.zS)(s, n)
            })),
            isQuestInQuestBar: en?.id === n?.id
        }
    }, [Z, n, et, en]), ea = (0, L.pU)(n)?.[0], ei = (0, r.bG)([d.Ay, p.A], () => {
        let e = d.Ay.getRunningGames().map(e => e.id);
        if ((0, L.xZ)(n) && null !== ea && e.includes(ea)) return !0;
        let t = null != Z ? p.A.findActivity(Z.id, e => e.type !== z.$pd.CUSTOM_STATUS) : null;
        return !!(null != t && (0, L.g5)(n) && (0, R.zS)(t, n))
    }, [n, Z, ea]), er = !0 === f || es || ei, eo = (0, r.bG)([N.A], () => null != n && N.A.isEnrolling(n.id), [n]), eu = (0, r.bG)([c.A], () => (Z?.id == null ? null : c.A.getParticipant(t, Z.id)) != null, [t, Z]), {
        launchInGameActivity: ec
    } = (0, C.zW)(n), ed = (0, C.S5)(n?.config.expiresAt), em = (0, C.S5)(n?.config.rewardsConfig.rewardsExpireAt), eA = l.useCallback(() => {
        (0, x.Oy)(n.id, {
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.ACCEPT_QUEST,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, U.vA)(n) && ec()
    }, [n, ec]), eE = l.useCallback(() => {
        g({
            questId: n.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.TRACK_PROGRESS,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: n.id
        })
    }, [n, g]), ef = l.useCallback(() => {
        g({
            questId: n.id,
            questContent: S.uF.QUEST_LIVE_STREAM,
            questContentCTA: M.Cy.LEARN_MORE,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        }), (0, q.navigateToQuestHome)({
            fromContent: S.uF.QUEST_LIVE_STREAM,
            questId: n.id
        })
    }, [n, g]), ep = (0, O.ix)({
        quest: n,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), eh = l.useMemo(() => (0, _.L)({
        quest: n,
        location: B.rE.QUEST_CHANNEL_CALL_HEADER
    }), [n]), ex = (0, v.NA)({
        quest: n
    }), eN = (0, U.vA)(n), eS = (0, C.LS)(n), eg = n.userStatus?.enrolledAt != null, eT = n.userStatus?.completedAt != null, e_ = null != n.userStatus && (0, b.gO)(n.userStatus, S.uF.QUEST_LIVE_STREAM), ev = null != n.userStatus && (0, b.gO)(n.userStatus, S.uF.QUEST_BAR), eC = el && !ev, eI = T.t.useConfig({
        location: B.rE.QUEST_CHANNEL_CALL_HEADER
    }), ej = (0, Q.Pd)(n);
    eh.info({
        isQuestCallHeaderDismissed: e_,
        isQuestExpired: eS,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: eu
    });
    let eM = null != a && n.userStatus?.claimedAt == null;
    if (!eM && (e_ || eS || eC) || !eM && !eu) return null;
    let ey = (0, L.Yh)(n),
        eb = (0, s.jsx)(F.A, {
            className: K.Qq,
            autoplay: D,
            quest: n,
            questContent: S.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: S.uF.QUEST_LIVE_STREAM
        });
    return (0, s.jsxs)("div", {
        className: i()(K.iE, {
            [K.rH]: eg
        }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [!eg && (0, s.jsxs)("div", {
            className: K.D9,
            children: [(0, s.jsx)(P.A, {
                bgOpacity: .32,
                className: K.Pu
            }), eb]
        }), (0, s.jsxs)("div", {
            className: K.Qs,
            children: [(0, s.jsxs)("div", {
                className: K.R_,
                children: [eg && er ? eb : (0, s.jsx)("img", {
                    className: K.rC,
                    alt: n.config.messages.gameTitle,
                    src: (0, I.tW)(n, I.fY.GAME_TILE, ee).url
                }), (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("div", {
                        className: K.Mg,
                        children: [(0, s.jsx)(u.Heading, {
                            className: K.bB,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: er ? (0, y.YT)({
                                quest: n,
                                taskDetails: ey
                            }) : W.intl.formatToPlainString(W.t.EQa7os, {
                                questName: n.config.messages.questName
                            })
                        }), (0, s.jsx)(w.C, {
                            questContent: S.uF.QUEST_LIVE_STREAM,
                            sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                            quest: n,
                            preventIdle: !0,
                            shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                            children: e => (0, s.jsx)(u.DUT, {
                                ...e,
                                className: K.rb,
                                "aria-label": W.intl.string(W.t.DEoVWZ),
                                children: (0, s.jsx)(u.jNK, {
                                    size: "md",
                                    color: "currentColor",
                                    className: K.Bx
                                })
                            })
                        })]
                    }), (0, s.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-xs/medium",
                        children: eT ? W.intl.formatToPlainString(W.t.APddvF, {
                            expirationDate: em
                        }) : W.intl.formatToPlainString(W.t["pX+fmn"], {
                            expirationDate: ed
                        })
                    })]
                })]
            }), eg && !eT && !er && (0, s.jsx)(V.A, {
                autoplay: D,
                quest: n,
                questContent: S.uF.QUEST_LIVE_STREAM,
                taskDetails: ey,
                location: B.rE.QUEST_CHANNEL_CALL_HEADER,
                sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
                gameProfileSource: m.Ob.QuestLiveStream
            }), (0, s.jsxs)("div", {
                className: K.uz,
                children: [!eg && (0, s.jsxs)(u.BJc, {
                    direction: "horizontal",
                    children: [(0, s.jsx)(u.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: W.intl.string(W.t.LLLLPD),
                        onClick: ef,
                        fullWidth: !eN || n.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
                    }), eI.enabled && ej === Q.UA.UNENROLLED && eI.enabledQuestStates.has(Q.UA.UNENROLLED) && !eS ? (0, s.jsx)(G.A, {
                        quest: n,
                        surface: Q.V3.VOICE_CALL_HEADER,
                        size: "sm",
                        analyticsCtxQuestContent: S.uF.QUEST_LIVE_STREAM,
                        analyticsCtxSourceQuestContent: S.uF.QUEST_LIVE_STREAM
                    }) : (0, s.jsx)(u.Button, {
                        size: "sm",
                        variant: "primary",
                        fullWidth: !0,
                        text: ex,
                        onClick: eA,
                        loading: eo
                    })]
                }), eg && !eT && er && (0, s.jsx)(k.A, {
                    color: u.LU0.colors.BACKGROUND_BRAND,
                    quest: n
                }), eg && !eT && !er && (0, s.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.VN1Ajl),
                    onClick: eE
                }), eT && (0, s.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    text: W.intl.string(W.t.cfY4PE),
                    onClick: ep
                })]
            })]
        })]
    })
}

function $(e) {
    let t = l.useContext(f.vG),
        n = (0, r.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        {
            use_api_call: a
        } = g.Y.getConfig({
            location: "QuestChannelCallHeader"
        }),
        i = (0, r.bG)([N.A], () => N.A.quests),
        o = (0, C.oH)(Array.from(i.values())),
        u = l.useMemo(() => (0, U.$e)(i, B.Ls), [i]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, r.bG)([p.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
            for (let s of e) {
                if (s.type === H.lp.STREAM) {
                    let e = (0, A.nr)(s.stream, n) ?? null,
                        l = (0, R.nq)(t, e);
                    if (null != l && l.userStatus?.claimedAt == null) return l
                }
                for (let s of e)
                    if (!(0, H.PJ)(s))
                        for (let e of n.getActivities(s.user.id)) {
                            let n = (0, R.nq)(t, e);
                            if (null != n && n.userStatus?.claimedAt == null) return n
                        }
            }
            return null
        }(d, u, p.A), [d, u, o, e.previewQuest]),
        E = l.useMemo(() => a ? m?.id ?? null : null, [m, a]);
    l.useEffect(() => {
        null == e.previewQuest && null != E && (0, x.yO)([E], S.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
    }, [E, e.previewQuest]);
    let h = (0, r.bG)([N.A], () => {
            let e = N.A.earnedQuestForPlacement.get(S.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.quests.get(E);
            return (0, b.Oh)(t) ? t.questWithUserStatus : null
        }, [E]),
        [T, _] = l.useState(null);
    l.useEffect(() => {
        null != h ? _(h) : null === E && _(null)
    }, [h, E]);
    let v = h ?? (null !== E ? T : null),
        I = e.previewQuest ?? (a ? v : m);
    return null == I || n ? null : (0, s.jsx)(D.R, {
        questOrQuests: I,
        overrideVisibility: !t,
        questContent: S.uF.QUEST_LIVE_STREAM,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        children: () => (0, s.jsx)(Y, {
            ...e,
            quest: I
        })
    })
}
let J = function(e) {
    let t = (0, r.bG)([h.default], () => h.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, s.jsx)($, {
        ...e
    }) : null
}