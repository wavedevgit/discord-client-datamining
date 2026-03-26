/** chunk id: 458817 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(64700),
    i = n(771253),
    s = n(731738),
    a = n(311907),
    l = n(831062),
    o = n(544180),
    u = n(18437),
    c = n(753386),
    d = n(163961),
    m = n(652215);

function E(e) {
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

function p(e) {
    let {
        videoRef: t,
        hlsRef: n,
        videoSessionId: p,
        videoAssetId: _,
        sourceQuestContent: f,
        logger: v,
        questId: S,
        isQuestCompleted: h,
        isFullEpisodeVideoQuest: g,
        listenForHlsErrors: A = !0
    } = e, x = (0, u.u0)(), C = (0, u.Ut)(), T = (0, a.bG)([o.A], () => o.A.getEffectiveConnectionSpeed()), b = (0, r.useRef)(-1), D = r.useCallback(e => {
        null != t.current && x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_LOADING_STARTED,
            properties: {
                video_asset_id: _,
                network_connection_speed: e,
                video_session_id: p,
                is_hls_supported: i.Ay.isSupported(),
                ...E(n)
            },
            sourceQuestContent: f
        })
    }, [S, t, _, p, n, x, f]), y = r.useCallback(e => {
        null != t.current && null != e && x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_LOADING_ENDED,
            properties: {
                video_asset_id: _,
                network_connection_speed: T,
                duration: e,
                video_session_id: p,
                ...E(n)
            },
            sourceQuestContent: f
        })
    }, [S, t, _, p, n, x, f, T]), I = r.useCallback(e => {
        null != t.current && x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
            properties: {
                duration_ms: e,
                video_session_id: p,
                video_asset_id: _,
                ...E(n)
            },
            sourceQuestContent: f
        })
    }, [S, t, _, p, n, x, f]), N = r.useCallback(() => {
        null != t.current && x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_PROGRESSED,
            properties: {
                progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                video_timestamp_seconds: t.current.currentTime,
                video_session_id: p,
                video_asset_id: _,
                ...E(n)
            },
            sourceQuestContent: f
        })
    }, [S, t, p, n, x, _, f]), L = r.useCallback(e => {
        null != t.current && x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_RESUMED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                pause_reason: e,
                video_session_id: p,
                video_asset_id: _,
                ...E(n)
            },
            sourceQuestContent: f
        })
    }, [S, t, p, n, x, _, f]), R = r.useCallback(e => {
        null != t.current && null != e && x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_PAUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                reason: e,
                video_session_id: p,
                video_asset_id: _,
                ...E(n)
            },
            sourceQuestContent: f
        })
    }, [S, t, p, n, x, _, f]), O = r.useCallback((e, n) => {
        null != t.current && x({
            questId: S,
            event: e ? m.HAw.QUEST_VIDEO_APP_FOCUSED : m.HAw.QUEST_VIDEO_APP_UNFOCUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                video_state: n,
                video_session_id: p,
                video_asset_id: _
            },
            sourceQuestContent: f
        })
    }, [S, t, p, x, _, f]), M = r.useCallback(() => {
        null != t.current && (b.current += 1, x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_BUFFERING_STARTED,
            properties: {
                video_asset_id: _,
                network_connection_speed: T,
                buffer_index: b.current,
                video_session_id: p,
                ...E(n)
            },
            sourceQuestContent: f
        }))
    }, [S, t, _, p, n, x, f, T]), k = r.useCallback(e => {
        null != t.current && (b.current += 1, x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_BUFFERING_ENDED,
            properties: {
                video_asset_id: _,
                network_connection_speed: T,
                duration: e,
                buffer_index: b.current,
                video_session_id: p,
                ...E(n)
            },
            sourceQuestContent: f
        }))
    }, [S, t, _, p, n, x, f, T]), w = r.useCallback((e, t) => {
        C({
            questId: S,
            questContent: e,
            questContentCTA: t,
            sourceQuestContent: f
        })
    }, [S, f, C]), P = r.useCallback(e => {
        null != t.current && x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
            properties: {
                ...e,
                video_asset_id: _,
                quest_completed: h,
                video_duration_sec: t.current.duration,
                video_progress: (0, c.zh)(e.segment_end_sec, t.current.duration),
                video_session_id: p,
                ...E(n)
            },
            sourceQuestContent: f
        })
    }, [x, S, _, h, p, n, t, f]), j = r.useCallback((e, r) => {
        if (null == t.current) return;
        let a = t.current?.error,
            o = t.current?.networkState,
            u = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
            v = null != r ? {
                hls_error_subtype: r.errorDetails,
                hls_error_fatal: r.fatal
            } : {};
        x({
            questId: S,
            event: m.HAw.QUEST_VIDEO_ERROR,
            properties: {
                video_progress: u,
                video_error_type: e,
                video_asset_id: _,
                network_connection_speed: T,
                video_session_id: p,
                video_error_code: a?.code,
                video_error_message: a?.message,
                video_network_state: o,
                is_full_episode_video_quest: g,
                is_hls_supported: i.Ay.isSupported(),
                ...E(n),
                ...v
            },
            sourceQuestContent: f
        }), (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) && l.A.increment({
            name: s.K.QUEST_VIDEO_ERROR,
            tags: [`quest_id:${S}`, `error_type:${e}`]
        })
    }, [S, t, _, p, n, x, f, T, g]);
    r.useEffect(() => {
        if (!A || null == n.current) return;
        let e = n.current,
            t = (e, t) => {
                let n;
                switch (v.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type) {
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
                j(n, {
                    errorDetails: t.details,
                    fatal: t.fatal
                })
            };
        return e.on(i.Ay.Events.ERROR, t), () => {
            e.off(i.Ay.Events.ERROR, t)
        }
    }, [A, n, v, j]);
    let V = r.useCallback(e => {
            null != t.current && x({
                questId: S,
                event: e ? m.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : m.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: {
                    video_session_id: p,
                    video_asset_id: _,
                    ...E(n)
                },
                sourceQuestContent: f
            })
        }, [S, t, p, n, x, _, f]),
        U = r.useCallback(e => {
            null != t.current && x({
                questId: S,
                event: m.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                properties: {
                    volume_threshold: e > 0 && e < 1 ? .5 : e,
                    video_session_id: p,
                    video_asset_id: _,
                    ...E(n)
                },
                sourceQuestContent: f
            })
        }, [S, t, _, p, n, x, f]);
    return {
        trackQuestVideoLoadingStarted: D,
        trackQuestVideoLoadingEnded: y,
        trackQuestVideoTimeToFirstFrame: I,
        trackQuestVideoProgressed: N,
        trackQuestVideoResumed: L,
        trackQuestVideoPaused: R,
        trackQuestVideoFocusChange: O,
        trackQuestContentClick: w,
        trackQuestVideoBufferingStarted: M,
        trackQuestVideoBufferingEnded: k,
        trackQuestVideoSegmentWatched: P,
        trackQuestVideoFullscreenChanged: V,
        trackQuestVideoError: j,
        trackQuestVideoVolumeChanged: U
    }
}