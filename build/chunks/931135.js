/** chunk id: 931135 params = (module,exports,require) **/
a.d(t, {
    A: () => L
});
var r = a(627968),
    n = a(64700),
    o = a(942381),
    i = a(876230),
    s = a(645577),
    l = a(697397),
    d = a(931853),
    u = a(544180),
    c = a(723702),
    p = a(829219),
    m = a(341915),
    g = a(405670),
    f = a(579473),
    h = a(851936),
    S = a(792620),
    x = a(753386),
    v = a(795068),
    E = a(179615),
    b = a(576199),
    y = a(758423),
    T = a(458817),
    C = a(873856),
    A = a(142619),
    P = a(721092),
    V = a(654487),
    _ = a(985018),
    k = a(590358);

function L(e) {
    let {
        targetTimeSec: t,
        onOptimisticProgressUpdate: a,
        autoplay: L,
        autoFocus: I = !0,
        parentTransitionState: w,
        performanceClockStartTime: U,
        orientation: O,
        videoUrlOverride: R
    } = e, {
        sourceQuestContent: D,
        quest: F,
        videoSessionId: j,
        setIsFullscreenEnabled: Q,
        useNewProgressBarStyling: M
    } = n.useContext(v.a), N = (0, n.useRef)(null), q = (0, S.Yh)(F), B = F.userStatus?.completedAt != null, W = !B && M, K = n.useMemo(() => F.config.features.includes(V.Li.FULL_EPISODE_VIDEO_QUEST), [F.config.features]), Y = (0, g.Kr)(e => e.videoProgress[F.id] ?? g.yc, o.x), H = (0, g.Kr)(e => e.setVideoProgress), z = (0, g.Kr)(e => e.volume), G = (0, g.Kr)(e => e.muted), $ = (0, g.Kr)(e => e.setVolume), X = (0, g.Kr)(e => e.setMuted), Z = (0, s.g)(B, Y, q.progressSeconds), [J] = n.useState(() => u.A.getEffectiveConnectionSpeed()), ee = Math.max(Y.maxTimestampSec, q.progressSeconds), et = B ? void 0 : (0, x.vd)(ee, Y.duration), {
        videoAsset: ea,
        videoAssetType: er
    } = (0, y.A)(N, J, Z, R, !1), en = n.useCallback(e => {
        let {
            hasVideoAsset: t,
            playerState: a,
            pauseReason: r
        } = e;
        return t || null != er ? a === i.Q6.PAUSED && r === i.KB.FOCUS ? _.intl.string(_.t.w6PeBF) : (0, d.u)({
            hasVideoAsset: t,
            playerState: a,
            pauseReason: r
        }) : (0, c.isWeb)() ? _.intl.string(_.t["E1du/q"]) : _.intl.string(_.t["rStN/7"])
    }, [er]), eo = (0, n.useRef)(null), ei = n.useCallback(e => {
        eo.current = e
    }, []), es = n.useMemo(() => (0, h.L)({
        quest: F,
        location: V.rE.VIDEO_MODAL
    }), [F]), el = (0, n.useRef)(0), ed = (0, n.useRef)(!1), {
        trackQuestVideoLoadingStarted: eu,
        trackQuestVideoLoadingEnded: ec,
        trackQuestVideoResumed: ep,
        trackQuestVideoPaused: em,
        trackQuestVideoFocusChange: eg,
        trackQuestVideoBufferingStarted: ef,
        trackQuestVideoBufferingEnded: eh,
        trackQuestVideoTimeToFirstFrame: eS,
        trackQuestVideoFullscreenChanged: ex,
        trackQuestVideoError: ev,
        trackQuestVideoVolumeChanged: eE,
        trackQuestContentClick: eb,
        trackQuestVideoProgressed: ey,
        trackQuestVideoSegmentWatched: eT
    } = (0, T.A)({
        questId: F.id,
        isQuestCompleted: B,
        videoRef: N,
        hlsRef: eo,
        videoSessionId: j,
        videoAssetId: er,
        sourceQuestContent: D,
        logger: es,
        isFullEpisodeVideoQuest: K,
        listenForHlsErrors: !1
    });
    (0, C.A)({
        videoAssetUrl: ea?.url,
        videoRef: N,
        hlsRef: eo,
        videoAssetType: er
    });
    let eC = (0, A.A)(F),
        eA = (0, P.A)({
            targetSec: t,
            quest: F,
            sourceQuestContent: D,
            questConfig: F.config
        }),
        eP = n.useCallback(() => N.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eV,
            handleLoadEnd: e_,
            handleFirstFrame: ek,
            handleSeek: eL
        } = (0, l.Yr)({
            getCurrentVideoTime: eP,
            onAnalytics: eT,
            emitIntervalMs: l.KI,
            minSegmentDurationMs: l._4
        }),
        eI = (0, n.useRef)(null),
        ew = n.useCallback((e, t) => {
            switch (eV(e, t), e) {
                case i.Q6.PLAYING:
                    N.current?.paused === !0 && ep(eI.current), eI.current = null;
                    break;
                case i.Q6.PAUSED: {
                    let e = function(e) {
                        switch (e) {
                            case i.KB.USER:
                                return m.Yg.PAUSE_BUTTON;
                            case i.KB.FOCUS:
                                return m.Yg.LOST_FOCUS;
                            case i.KB.VISIBILITY:
                                return m.Yg.MODAL_CLOSED;
                            default:
                                return null
                        }
                    }(t);
                    null != e && (eI.current = e, em(e))
                }
                case i.Q6.ENDED:
            }
        }, [eV, ep, em]),
        eU = n.useCallback(() => {
            eu(J)
        }, [eu, J]),
        eO = n.useCallback(e => {
            e_(e), ec(e)
        }, [e_, ec]),
        eR = n.useCallback(e => {
            ek(e), eS(e)
        }, [ek, eS]),
        eD = n.useCallback(e => {
            Q(e), ex(e)
        }, [Q, ex]),
        eF = n.useCallback(e => {
            $(e), eE(e)
        }, [$, eE]),
        ej = n.useCallback((e, r) => {
            H(F.id, e, r), (0, p.Gn)(F.id, q.taskType, e), a(e);
            let n = K && e >= t && !ed.current;
            (e >= el.current || n) && (n && (ed.current = !0), el.current = e + V.aA + Math.random() * V.A6, B || F.userStatus?.enrolledAt == null || (0, x.zv)(F, e), ey())
        }, [F, q.taskType, t, B, K, ey, H, a]),
        eQ = n.useCallback((e, t) => {
            eL(), null != N.current && H(F.id, t, N.current.duration)
        }, [eL, F.id, H]),
        eM = n.useCallback(() => {
            if (null != N.current) {
                let e = N.current.duration;
                B || F.userStatus?.enrolledAt == null || (0, x.zv)(F, e + 1), H(F.id, e, e)
            }
        }, [F, B, H]),
        eN = n.useCallback((e, t) => {
            ev(e, t)
        }, [ev]),
        eq = n.useMemo(() => (0, f.tW)(F, f.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [F]),
        eB = n.useCallback(() => (0, r.jsx)(b.A, {}), []),
        eW = n.useCallback(() => (0, r.jsx)(E.A, {
            videoRef: N,
            onTrackQuestContentClick: eb,
            orientation: O
        }), [eb, O]);
    return (0, r.jsx)(l.Ft, {
        ref: N,
        targetTimeSec: t,
        parentTransitionState: w,
        onOptimisticProgressUpdate: a,
        autoplay: L,
        progressGlow: !0,
        progressFillClassName: W ? k.QR : k.UA,
        glowClassName: W ? k.Um : k.U5,
        persistTimeline: !0,
        persistGrabber: !1,
        pauseOnLostVisibility: !0,
        autoFocus: I,
        getPlaybackBlockedMessage: en,
        performanceClockStartTime: U,
        orientation: O,
        videoUrlOverride: R,
        src: ea?.url,
        poster: void 0,
        initialTimeSec: Z,
        maxSeekableTimeSec: et,
        captionTrackUrl: eq?.url,
        onPlayerStateChange: ew,
        onLoadStart: eU,
        onLoadEnd: eO,
        onFirstFrame: eR,
        onBufferingStart: ef,
        onBufferingEnd: eh,
        onFocusChange: eg,
        onFullscreenChange: eD,
        initialVolume: z,
        initialMuted: G,
        onVolumeChange: eF,
        onMutedChange: e => {
            X(e)
        },
        onProgressUpdate: ej,
        onSeek: eQ,
        onEnded: eM,
        onError: eN,
        onHlsInstance: ei,
        transcriptText: eC ?? void 0,
        renderOverlay: eB,
        renderEndScreen: eW,
        timelineIndicatorConfig: eA
    })
}