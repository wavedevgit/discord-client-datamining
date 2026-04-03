/** chunk id: 931135 params = (module,exports,require) **/
n.d(t, {
    A: () => P
});
var r = n(627968),
    a = n(64700),
    o = n(942381),
    i = n(876230),
    s = n(645577),
    l = n(697397),
    c = n(544180),
    d = n(829219),
    u = n(341915),
    p = n(405670),
    b = n(579473),
    m = n(851936),
    _ = n(792620),
    S = n(753386),
    g = n(795068),
    f = n(179615),
    v = n(576199),
    C = n(758423),
    h = n(458817),
    x = n(873856),
    y = n(142619),
    T = n(721092),
    E = n(654487);

function P(e) {
    let {
        targetTimeSec: t,
        onOptimisticProgressUpdate: n,
        autoplay: P,
        parentTransitionState: I,
        performanceClockStartTime: A,
        orientation: V,
        videoUrlOverride: k
    } = e, {
        sourceQuestContent: R,
        quest: U,
        videoSessionId: L,
        setIsFullscreenEnabled: O
    } = a.useContext(g.a), w = (0, a.useRef)(null), B = (0, _.Yh)(U), D = U.userStatus?.completedAt != null, M = a.useMemo(() => U.config.features.includes(E.Li.FULL_EPISODE_VIDEO_QUEST), [U.config.features]), j = (0, p.Kr)(e => e.videoProgress[U.id] ?? p.yc, o.x), F = (0, p.Kr)(e => e.setVideoProgress), Q = (0, s.g)(D, j, B.progressSeconds), [N] = a.useState(() => c.A.getEffectiveConnectionSpeed()), W = D ? void 0 : Math.max(j.maxTimestampSec, B.progressSeconds), {
        videoAsset: G,
        videoAssetType: q
    } = (0, C.A)(w, N, Q, k, !1), H = (0, a.useRef)(null), K = a.useCallback(e => {
        H.current = e
    }, []), Y = a.useMemo(() => (0, m.L)({
        quest: U,
        location: E.rE.VIDEO_MODAL
    }), [U]), z = (0, a.useRef)(0), $ = (0, a.useRef)(!1), {
        trackQuestVideoLoadingStarted: X,
        trackQuestVideoLoadingEnded: Z,
        trackQuestVideoResumed: J,
        trackQuestVideoPaused: ee,
        trackQuestVideoFocusChange: et,
        trackQuestVideoBufferingStarted: en,
        trackQuestVideoBufferingEnded: er,
        trackQuestVideoTimeToFirstFrame: ea,
        trackQuestVideoFullscreenChanged: eo,
        trackQuestVideoError: ei,
        trackQuestVideoVolumeChanged: es,
        trackQuestContentClick: el,
        trackQuestVideoProgressed: ec,
        trackQuestVideoSegmentWatched: ed
    } = (0, h.A)({
        questId: U.id,
        isQuestCompleted: D,
        videoRef: w,
        hlsRef: H,
        videoSessionId: L,
        videoAssetId: q,
        sourceQuestContent: R,
        logger: Y,
        isFullEpisodeVideoQuest: M,
        listenForHlsErrors: !1
    });
    (0, x.A)({
        videoAssetUrl: G?.url,
        videoRef: w,
        hlsRef: H,
        videoAssetType: q
    });
    let eu = (0, y.A)(U),
        ep = (0, T.A)({
            targetSec: t,
            quest: U,
            sourceQuestContent: R,
            questConfig: U.config
        }),
        [eb, em] = a.useState(!1),
        [e_, eS] = a.useState(!1),
        [eg, ef] = a.useState(!1),
        ev = a.useCallback(() => w.current?.currentTime ?? null, []),
        {
            forceSendCurrentSegment: eC
        } = (0, l.Yr)({
            getCurrentVideoTime: ev,
            isPlaying: eb,
            isMetadataLoaded: e_,
            isInitialSeekComplete: eg,
            onAnalytics: ed,
            emitIntervalMs: l.KI,
            minSegmentDurationMs: l._4
        }),
        eh = (0, a.useRef)(null),
        ex = a.useCallback((e, t) => {
            switch (e) {
                case i.Q6.PLAYING:
                    em(!0), w.current?.paused === !0 && J(eh.current), eh.current = null;
                    break;
                case i.Q6.PAUSED:
                    em(!1), eC();
                    {
                        let e = function(e) {
                            switch (e) {
                                case i.KB.USER:
                                    return u.Yg.PAUSE_BUTTON;
                                case i.KB.FOCUS:
                                    return u.Yg.LOST_FOCUS;
                                case i.KB.VISIBILITY:
                                    return u.Yg.MODAL_CLOSED;
                                default:
                                    return null
                            }
                        }(t);
                        null != e && (eh.current = e, ee(e))
                    }
                    break;
                case i.Q6.ENDED:
                    em(!1)
            }
        }, [J, ee, eC]),
        ey = a.useCallback(() => {
            X(N)
        }, [X, N]),
        eT = a.useCallback(e => {
            eS(!0), Z(e)
        }, [Z]),
        eE = a.useCallback(e => {
            ef(!0), ea(e)
        }, [ea]),
        eP = a.useCallback(e => {
            O(e), eo(e)
        }, [O, eo]),
        eI = a.useCallback((e, r) => {
            F(U.id, e, r), (0, d.Gn)(U.id, B.taskType, e), n(e);
            let a = M && e >= t && !$.current;
            (e >= z.current || a) && (a && ($.current = !0), z.current = e + E.aA + Math.random() * E.A6, D || U.userStatus?.enrolledAt == null || (0, S.zv)(U, e), ec())
        }, [U, B.taskType, t, D, M, ec, F, n]),
        eA = a.useCallback((e, t) => {
            eC(), null != w.current && F(U.id, t, w.current.duration)
        }, [U.id, F, eC]),
        eV = a.useCallback(() => {
            if (eC(), null != w.current) {
                let e = w.current.duration;
                D || U.userStatus?.enrolledAt == null || (0, S.zv)(U, e + 1), F(U.id, e, e)
            }
        }, [U, D, F, eC]),
        ek = a.useCallback((e, t) => {
            ei(e, t)
        }, [ei]),
        eR = a.useMemo(() => (0, b.tW)(U, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [U]),
        eU = a.useCallback(() => (0, r.jsx)(v.A, {}), []),
        eL = a.useCallback(() => (0, r.jsx)(f.A, {
            videoRef: w,
            onTrackQuestContentClick: el,
            orientation: V
        }), [el, V]);
    return (0, r.jsx)(l.Ft, {
        ref: w,
        targetTimeSec: t,
        parentTransitionState: I,
        onOptimisticProgressUpdate: n,
        autoplay: P,
        progressGlow: !0,
        pauseOnLostVisibility: !0,
        autoFocus: !0,
        performanceClockStartTime: A,
        orientation: V,
        videoUrlOverride: k,
        src: G?.url,
        poster: void 0,
        initialTimeSec: Q,
        maxSeekableTimeSec: W,
        captionTrackUrl: eR?.url,
        onPlayerStateChange: ex,
        onLoadStart: ey,
        onLoadEnd: eT,
        onFirstFrame: eE,
        onBufferingStart: en,
        onBufferingEnd: er,
        onFocusChange: et,
        onFullscreenChange: eP,
        onVolumeChange: es,
        onProgressUpdate: eI,
        onSeek: eA,
        onEnded: eV,
        onError: ek,
        onHlsInstance: K,
        transcriptText: eu ?? void 0,
        renderOverlay: eU,
        renderEndScreen: eL,
        timelineIndicatorConfig: ep
    })
}