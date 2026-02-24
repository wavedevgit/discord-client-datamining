/** chunk id: 660171, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(64700),
    i = n(771253),
    s = n(731738),
    l = n(311907),
    a = n(831062),
    o = n(544180),
    u = n(18437),
    c = n(753386),
    d = n(261331),
    m = n(652215);

function p(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel ? {
        hls_level_index: -100,
        hls_segment_res_width: -100,
        hls_segment_res_height: -100
    } : {
        hls_level_index: e.current.currentLevel,
        hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
        hls_segment_res_height: e.current.levels[e.current.currentLevel].height
    }
}

function E(e) {
    let {
        videoRef: t,
        hlsRef: n,
        videoSessionId: E,
        videoAssetId: f,
        sourceQuestContent: v,
        logger: h,
        questId: x,
        isQuestCompleted: g,
        isFullEpisodeVideoQuest: S
    } = e, C = (0, u.u0)(), A = (0, u.Ut)(), _ = (0, l.bG)([o.A], () => o.A.getEffectiveConnectionSpeed()), b = (0, r.useRef)(-1), T = r.useCallback(e => {
        null != t.current && C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_LOADING_STARTED,
            properties: {
                video_asset_id: f,
                network_connection_speed: e,
                video_session_id: E,
                is_hls_supported: i.Ay.isSupported(),
                ...p(n)
            },
            sourceQuestContent: v
        })
    }, [x, t, f, E, n, C, v]), y = r.useCallback(e => {
        null != t.current && null != e && C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_LOADING_ENDED,
            properties: {
                video_asset_id: f,
                network_connection_speed: _,
                duration: e,
                video_session_id: E,
                ...p(n)
            },
            sourceQuestContent: v
        })
    }, [x, t, f, E, n, C, v, _]), N = r.useCallback(e => {
        null != t.current && C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
            properties: {
                duration_ms: e,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: v
        })
    }, [x, t, f, E, n, C, v]), D = r.useCallback(() => {
        null != t.current && C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_PROGRESSED,
            properties: {
                progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                video_timestamp_seconds: t.current.currentTime,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: v
        })
    }, [x, t, E, n, C, f, v]), L = r.useCallback(e => {
        null != t.current && C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_RESUMED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                pause_reason: e,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: v
        })
    }, [x, t, E, n, C, f, v]), j = r.useCallback(e => {
        null != t.current && null != e && C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_PAUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                reason: e,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: v
        })
    }, [x, t, E, n, C, f, v]), I = r.useCallback((e, n) => {
        null != t.current && C({
            questId: x,
            event: e ? m.HAw.QUEST_VIDEO_APP_FOCUSED : m.HAw.QUEST_VIDEO_APP_UNFOCUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                video_state: n,
                video_session_id: E,
                video_asset_id: f
            },
            sourceQuestContent: v
        })
    }, [x, t, E, C, f, v]), M = r.useCallback(() => {
        null != t.current && (b.current += 1, C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_BUFFERING_STARTED,
            properties: {
                video_asset_id: f,
                network_connection_speed: _,
                buffer_index: b.current,
                video_session_id: E,
                ...p(n)
            },
            sourceQuestContent: v
        }))
    }, [x, t, f, E, n, C, v, _]), k = r.useCallback(e => {
        null != t.current && (b.current += 1, C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_BUFFERING_ENDED,
            properties: {
                video_asset_id: f,
                network_connection_speed: _,
                duration: e,
                buffer_index: b.current,
                video_session_id: E,
                ...p(n)
            },
            sourceQuestContent: v
        }))
    }, [x, t, f, E, n, C, v, _]), R = r.useCallback((e, t) => {
        A({
            questId: x,
            questContent: e,
            questContentCTA: t,
            sourceQuestContent: v
        })
    }, [x, v, A]), w = r.useCallback(e => {
        null != t.current && C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
            properties: {
                ...e,
                video_asset_id: f,
                quest_completed: g,
                video_duration_sec: t.current.duration,
                video_progress: (0, c.zh)(e.segment_end_sec, t.current.duration),
                video_session_id: E,
                ...p(n)
            },
            sourceQuestContent: v
        })
    }, [C, x, f, g, E, n, t, v]), O = r.useCallback((e, r) => {
        if (null == t.current) return;
        let l = t.current?.error,
            o = t.current?.networkState,
            u = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
            h = null != r ? {
                hls_error_subtype: r.errorDetails,
                hls_error_fatal: r.fatal
            } : {};
        C({
            questId: x,
            event: m.HAw.QUEST_VIDEO_ERROR,
            properties: {
                video_progress: u,
                video_error_type: e,
                video_asset_id: f,
                network_connection_speed: _,
                video_session_id: E,
                video_error_code: l?.code,
                video_error_message: l?.message,
                video_network_state: o,
                is_full_episode_video_quest: S,
                is_hls_supported: i.Ay.isSupported(),
                ...p(n),
                ...h
            },
            sourceQuestContent: v
        }), (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) && a.A.increment({
            name: s.K.QUEST_VIDEO_ERROR,
            tags: [`quest_id:${x}`, `error_type:${e}`]
        })
    }, [x, t, f, E, n, C, v, _, S]), P = r.useCallback((e, t) => {
        let n;
        switch (h.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type) {
            case i.Ay.ErrorTypes.NETWORK_ERROR:
                n = d.SB.HLS_NETWORK_ERROR;
                break;
            case i.Ay.ErrorTypes.MEDIA_ERROR:
                n = d.SB.HLS_MEDIA_ERROR;
                break;
            case i.Ay.ErrorTypes.MUX_ERROR:
                n = d.SB.HLS_MUX_ERROR;
                break;
            case i.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                n = d.SB.HLS_KEY_SYSTEM_ERROR;
                break;
            default:
                n = d.SB.HLS_OTHER_ERROR
        }
        O(n, {
            errorDetails: t.details,
            fatal: t.fatal
        })
    }, [h, O]);
    r.useEffect(() => {
        if (null == n.current) return;
        let e = n.current;
        return e.on(i.Ay.Events.ERROR, P), () => {
            e.off(i.Ay.Events.ERROR, P)
        }
    }, [n, P]);
    let V = r.useCallback(e => {
            null != t.current && C({
                questId: x,
                event: e ? m.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : m.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: {
                    video_session_id: E,
                    video_asset_id: f,
                    ...p(n)
                },
                sourceQuestContent: v
            })
        }, [x, t, E, n, C, f, v]),
        Q = r.useCallback(e => {
            null != t.current && C({
                questId: x,
                event: m.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                properties: {
                    volume_threshold: e > 0 && e < 1 ? .5 : e,
                    video_session_id: E,
                    video_asset_id: f,
                    ...p(n)
                },
                sourceQuestContent: v
            })
        }, [x, t, f, E, n, C, v]);
    return {
        trackQuestVideoLoadingStarted: T,
        trackQuestVideoLoadingEnded: y,
        trackQuestVideoTimeToFirstFrame: N,
        trackQuestVideoProgressed: D,
        trackQuestVideoResumed: L,
        trackQuestVideoPaused: j,
        trackQuestVideoFocusChange: I,
        trackQuestContentClick: R,
        trackQuestVideoBufferingStarted: M,
        trackQuestVideoBufferingEnded: k,
        trackWatchTimeAnalytics: w,
        trackQuestVideoFullscreenChanged: V,
        trackQuestVideoError: O,
        trackQuestVideoVolumeChanged: Q
    }
}