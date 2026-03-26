/** chunk id: 458817 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(64700),
    l = n(771253),
    a = n(731738),
    i = n(311907),
    s = n(831062),
    o = n(544180),
    u = n(18437),
    c = n(753386),
    d = n(163961),
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
        sourceQuestContent: h,
        logger: v,
        questId: x,
        isQuestCompleted: g,
        isFullEpisodeVideoQuest: S,
        listenForHlsErrors: A = !0
    } = e, b = (0, u.u0)(), _ = (0, u.Ut)(), C = (0, i.bG)([o.A], () => o.A.getEffectiveConnectionSpeed()), y = (0, r.useRef)(-1), T = r.useCallback(e => {
        null != t.current && b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_LOADING_STARTED,
            properties: {
                video_asset_id: f,
                network_connection_speed: e,
                video_session_id: E,
                is_hls_supported: l.Ay.isSupported(),
                ...p(n)
            },
            sourceQuestContent: h
        })
    }, [x, t, f, E, n, b, h]), N = r.useCallback(e => {
        null != t.current && null != e && b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_LOADING_ENDED,
            properties: {
                video_asset_id: f,
                network_connection_speed: C,
                duration: e,
                video_session_id: E,
                ...p(n)
            },
            sourceQuestContent: h
        })
    }, [x, t, f, E, n, b, h, C]), D = r.useCallback(e => {
        null != t.current && b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
            properties: {
                duration_ms: e,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: h
        })
    }, [x, t, f, E, n, b, h]), I = r.useCallback(() => {
        null != t.current && b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_PROGRESSED,
            properties: {
                progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                video_timestamp_seconds: t.current.currentTime,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: h
        })
    }, [x, t, E, n, b, f, h]), R = r.useCallback(e => {
        null != t.current && b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_RESUMED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                pause_reason: e,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: h
        })
    }, [x, t, E, n, b, f, h]), L = r.useCallback(e => {
        null != t.current && null != e && b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_PAUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                reason: e,
                video_session_id: E,
                video_asset_id: f,
                ...p(n)
            },
            sourceQuestContent: h
        })
    }, [x, t, E, n, b, f, h]), w = r.useCallback((e, n) => {
        null != t.current && b({
            questId: x,
            event: e ? m.HAw.QUEST_VIDEO_APP_FOCUSED : m.HAw.QUEST_VIDEO_APP_UNFOCUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                video_state: n,
                video_session_id: E,
                video_asset_id: f
            },
            sourceQuestContent: h
        })
    }, [x, t, E, b, f, h]), M = r.useCallback(() => {
        null != t.current && (y.current += 1, b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_BUFFERING_STARTED,
            properties: {
                video_asset_id: f,
                network_connection_speed: C,
                buffer_index: y.current,
                video_session_id: E,
                ...p(n)
            },
            sourceQuestContent: h
        }))
    }, [x, t, f, E, n, b, h, C]), k = r.useCallback(e => {
        null != t.current && (y.current += 1, b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_BUFFERING_ENDED,
            properties: {
                video_asset_id: f,
                network_connection_speed: C,
                duration: e,
                buffer_index: y.current,
                video_session_id: E,
                ...p(n)
            },
            sourceQuestContent: h
        }))
    }, [x, t, f, E, n, b, h, C]), P = r.useCallback((e, t) => {
        _({
            questId: x,
            questContent: e,
            questContentCTA: t,
            sourceQuestContent: h
        })
    }, [x, h, _]), j = r.useCallback(e => {
        null != t.current && b({
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
            sourceQuestContent: h
        })
    }, [b, x, f, g, E, n, t, h]), O = r.useCallback((e, r) => {
        if (null == t.current) return;
        let i = t.current?.error,
            o = t.current?.networkState,
            u = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
            v = null != r ? {
                hls_error_subtype: r.errorDetails,
                hls_error_fatal: r.fatal
            } : {};
        b({
            questId: x,
            event: m.HAw.QUEST_VIDEO_ERROR,
            properties: {
                video_progress: u,
                video_error_type: e,
                video_asset_id: f,
                network_connection_speed: C,
                video_session_id: E,
                video_error_code: i?.code,
                video_error_message: i?.message,
                video_network_state: o,
                is_full_episode_video_quest: S,
                is_hls_supported: l.Ay.isSupported(),
                ...p(n),
                ...v
            },
            sourceQuestContent: h
        }), (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) && s.A.increment({
            name: a.K.QUEST_VIDEO_ERROR,
            tags: [`quest_id:${x}`, `error_type:${e}`]
        })
    }, [x, t, f, E, n, b, h, C, S]);
    r.useEffect(() => {
        if (!A || null == n.current) return;
        let e = n.current,
            t = (e, t) => {
                let n;
                switch (v.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type) {
                    case l.Ay.ErrorTypes.NETWORK_ERROR:
                        n = d.SB.HLS_NETWORK_ERROR;
                        break;
                    case l.Ay.ErrorTypes.MEDIA_ERROR:
                        n = d.SB.HLS_MEDIA_ERROR;
                        break;
                    case l.Ay.ErrorTypes.MUX_ERROR:
                        n = d.SB.HLS_MUX_ERROR;
                        break;
                    case l.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = d.SB.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = d.SB.HLS_OTHER_ERROR
                }
                O(n, {
                    errorDetails: t.details,
                    fatal: t.fatal
                })
            };
        return e.on(l.Ay.Events.ERROR, t), () => {
            e.off(l.Ay.Events.ERROR, t)
        }
    }, [A, n, v, O]);
    let U = r.useCallback(e => {
            null != t.current && b({
                questId: x,
                event: e ? m.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : m.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: {
                    video_session_id: E,
                    video_asset_id: f,
                    ...p(n)
                },
                sourceQuestContent: h
            })
        }, [x, t, E, n, b, f, h]),
        B = r.useCallback(e => {
            null != t.current && b({
                questId: x,
                event: m.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                properties: {
                    volume_threshold: e > 0 && e < 1 ? .5 : e,
                    video_session_id: E,
                    video_asset_id: f,
                    ...p(n)
                },
                sourceQuestContent: h
            })
        }, [x, t, f, E, n, b, h]);
    return {
        trackQuestVideoLoadingStarted: T,
        trackQuestVideoLoadingEnded: N,
        trackQuestVideoTimeToFirstFrame: D,
        trackQuestVideoProgressed: I,
        trackQuestVideoResumed: R,
        trackQuestVideoPaused: L,
        trackQuestVideoFocusChange: w,
        trackQuestContentClick: P,
        trackQuestVideoBufferingStarted: M,
        trackQuestVideoBufferingEnded: k,
        trackQuestVideoSegmentWatched: j,
        trackQuestVideoFullscreenChanged: U,
        trackQuestVideoError: O,
        trackQuestVideoVolumeChanged: B
    }
}