/** chunk id: 432806 params = (module,exports,require) **/
r.d(t, {
    A: () => T
});
var o = r(627968),
    n = r(64700),
    a = r(942381),
    i = r(876230),
    s = r(645577),
    l = r(892358),
    d = r(544180),
    c = r(829219),
    u = r(341915),
    _ = r(405670),
    p = r(943849),
    f = r(579473),
    b = r(792620),
    m = r(753386),
    g = r(818049),
    C = r(717415),
    v = r(661417),
    S = r(246465),
    h = r(660171),
    x = r(853738),
    y = r(654487);

function T(e) {
    let {
        targetTimeSec: t,
        onOptimisticProgressUpdate: r,
        autoplay: T,
        parentTransitionState: P,
        performanceClockStartTime: A,
        orientation: E,
        videoUrlOverride: V
    } = e, {
        sourceQuestContent: k,
        quest: R,
        videoSessionId: I,
        setIsFullscreenEnabled: B
    } = n.useContext(C.VideoQuestModalContext), w = (0, n.useRef)(null), D = (0, b.Yh)(R), O = R.userStatus?.completedAt != null, U = n.useMemo(() => R.config.features.includes(y.Li.FULL_EPISODE_VIDEO_QUEST), [R.config.features]), L = (0, _.Kr)(e => e.videoProgress[R.id] ?? _.yc, a.x), j = (0, _.Kr)(e => e.setVideoProgress), F = (0, s.g)(O, L, D.progressSeconds), [N] = n.useState(() => d.A.getEffectiveConnectionSpeed()), W = O ? void 0 : Math.max(L.maxTimestampSec, D.progressSeconds), {
        videoAsset: M,
        videoAssetType: Q,
        hlsRef: q
    } = (0, S.A)(w, N, F, V), G = n.useMemo(() => (0, p.L)({
        quest: R,
        location: y.rE.VIDEO_MODAL
    }), [R]), H = (0, n.useRef)(0), K = (0, n.useRef)(!1), {
        trackQuestVideoLoadingStarted: Y,
        trackQuestVideoLoadingEnded: z,
        trackQuestVideoResumed: X,
        trackQuestVideoPaused: $,
        trackQuestVideoFocusChange: Z,
        trackQuestVideoBufferingStarted: J,
        trackQuestVideoBufferingEnded: ee,
        trackQuestVideoTimeToFirstFrame: et,
        trackQuestVideoFullscreenChanged: er,
        trackQuestVideoError: eo,
        trackQuestVideoVolumeChanged: en,
        trackQuestContentClick: ea,
        trackQuestVideoProgressed: ei
    } = (0, h.A)({
        questId: R.id,
        isQuestCompleted: O,
        videoRef: w,
        hlsRef: q,
        videoSessionId: I,
        videoAssetId: Q,
        sourceQuestContent: k,
        logger: G,
        isFullEpisodeVideoQuest: U
    });
    (0, x.A)({
        videoAssetUrl: M?.url,
        videoRef: w,
        hlsRef: q,
        videoAssetType: Q
    });
    let es = (0, n.useRef)(null),
        el = n.useCallback((e, t) => {
            if (e === i.Q6.PLAYING) w.current?.paused === !0 && X(es.current), es.current = null;
            else if (e === i.Q6.PAUSED) {
                let e = function(e) {
                    switch (e) {
                        case "user":
                            return u.Yg.PAUSE_BUTTON;
                        case "focus":
                            return u.Yg.LOST_FOCUS;
                        case "visibility":
                            return u.Yg.MODAL_CLOSED;
                        default:
                            return null
                    }
                }(t);
                null != e && (es.current = e, $(e))
            }
        }, [X, $]),
        ed = n.useCallback(() => {
            Y(N)
        }, [Y, N]),
        ec = n.useCallback(e => {
            B(e), er(e)
        }, [B, er]),
        eu = n.useCallback((e, o) => {
            j(R.id, e, o), (0, c.Gn)(R.id, D.taskType, e), r(e);
            let n = U && e >= t && !K.current;
            (e >= H.current || n) && (n && (K.current = !0), H.current = e + y.aA + Math.random() * y.A6, O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e), ei())
        }, [R, D.taskType, t, O, U, ei, j, r]),
        e_ = n.useCallback((e, t) => {
            null != w.current && j(R.id, t, w.current.duration)
        }, [R.id, j]),
        ep = n.useCallback(() => {
            if (null != w.current) {
                let e = w.current.duration;
                O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e + 1), j(R.id, e, e)
            }
        }, [R, O, j]),
        ef = n.useCallback(e => {
            eo(e)
        }, [eo]),
        eb = n.useMemo(() => (0, f.tW)(R, f.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [R]),
        em = n.useCallback(() => (0, o.jsx)(v.A, {}), []),
        eg = n.useCallback(() => (0, o.jsx)(g.A, {
            videoRef: w,
            onTrackQuestContentClick: ea,
            orientation: E
        }), [ea, E]);
    return (0, o.jsx)(l.Ft, {
        ref: w,
        targetTimeSec: t,
        parentTransitionState: P,
        onOptimisticProgressUpdate: r,
        autoplay: T,
        performanceClockStartTime: A,
        orientation: E,
        videoUrlOverride: V,
        src: M?.url,
        poster: void 0,
        initialTimeSec: F,
        maxSeekableTimeSec: W,
        seekForwardRestricted: !O,
        captionTrackUrl: eb?.url,
        onPlayerStateChange: el,
        onLoadStart: ed,
        onLoadEnd: z,
        onFirstFrame: et,
        onBufferingStart: J,
        onBufferingEnd: ee,
        onFocusChange: Z,
        onFullscreenChange: ec,
        onVolumeChange: en,
        onProgressUpdate: eu,
        onSeek: e_,
        onEnded: ep,
        onError: ef,
        renderOverlay: em,
        renderEndScreen: eg
    })
}