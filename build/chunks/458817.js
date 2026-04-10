/** chunk id: 458817 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(64700),
    s = n(771253),
    i = n(731738),
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

function _(e) {
    let {
        videoRef: t,
        hlsRef: n,
        videoSessionId: _,
        videoAssetId: f,
        sourceQuestContent: p,
        logger: S,
        questId: v,
        isQuestCompleted: h,
        isFullEpisodeVideoQuest: g,
        listenForHlsErrors: A = !0
    } = e, C = (0, u.u0)(), x = (0, u.Ut)(), T = (0, a.bG)([o.A], () => o.A.getEffectiveConnectionSpeed()), D = (0, r.useRef)(-1), I = r.useCallback(e => {
        null != t.current && C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_LOADING_STARTED,
            properties: {
                video_asset_id: f,
                network_connection_speed: e,
                video_session_id: _,
                is_hls_supported: s.Ay.isSupported(),
                ...E(n)
            },
            sourceQuestContent: p
        })
    }, [v, t, f, _, n, C, p]), y = r.useCallback(e => {
        null != t.current && null != e && C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_LOADING_ENDED,
            properties: {
                video_asset_id: f,
                network_connection_speed: T,
                duration: e,
                video_session_id: _,
                ...E(n)
            },
            sourceQuestContent: p
        })
    }, [v, t, f, _, n, C, p, T]), R = r.useCallback(e => {
        null != t.current && C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
            properties: {
                duration_ms: e,
                video_session_id: _,
                video_asset_id: f,
                ...E(n)
            },
            sourceQuestContent: p
        })
    }, [v, t, f, _, n, C, p]), N = r.useCallback(() => {
        null != t.current && C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_PROGRESSED,
            properties: {
                progress: (0, c.zh)(t.current.currentTime, t.current.duration),
                video_timestamp_seconds: t.current.currentTime,
                video_session_id: _,
                video_asset_id: f,
                ...E(n)
            },
            sourceQuestContent: p
        })
    }, [v, t, _, n, C, f, p]), b = r.useCallback(e => {
        null != t.current && C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_RESUMED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                pause_reason: e,
                video_session_id: _,
                video_asset_id: f,
                ...E(n)
            },
            sourceQuestContent: p
        })
    }, [v, t, _, n, C, f, p]), O = r.useCallback(e => {
        null != t.current && null != e && C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_PAUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                reason: e,
                video_session_id: _,
                video_asset_id: f,
                ...E(n)
            },
            sourceQuestContent: p
        })
    }, [v, t, _, n, C, f, p]), L = r.useCallback((e, n) => {
        null != t.current && C({
            questId: v,
            event: e ? m.HAw.QUEST_VIDEO_APP_FOCUSED : m.HAw.QUEST_VIDEO_APP_UNFOCUSED,
            properties: {
                video_timestamp_seconds: t.current.currentTime,
                video_state: n,
                video_session_id: _,
                video_asset_id: f
            },
            sourceQuestContent: p
        })
    }, [v, t, _, C, f, p]), M = r.useCallback(() => {
        null != t.current && (D.current += 1, C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_BUFFERING_STARTED,
            properties: {
                video_asset_id: f,
                network_connection_speed: T,
                buffer_index: D.current,
                video_session_id: _,
                ...E(n)
            },
            sourceQuestContent: p
        }))
    }, [v, t, f, _, n, C, p, T]), k = r.useCallback(e => {
        null != t.current && (D.current += 1, C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_BUFFERING_ENDED,
            properties: {
                video_asset_id: f,
                network_connection_speed: T,
                duration: e,
                buffer_index: D.current,
                video_session_id: _,
                ...E(n)
            },
            sourceQuestContent: p
        }))
    }, [v, t, f, _, n, C, p, T]), P = r.useCallback((e, t) => {
        x({
            questId: v,
            questContent: e,
            questContentCTA: t,
            sourceQuestContent: p
        })
    }, [v, p, x]), w = r.useCallback(e => {
        null != t.current && C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
            properties: {
                ...e,
                video_asset_id: f,
                quest_completed: h,
                video_duration_sec: t.current.duration,
                video_progress: (0, c.zh)(e.segment_end_sec, t.current.duration),
                video_session_id: _,
                ...E(n)
            },
            sourceQuestContent: p
        })
    }, [C, v, f, h, _, n, t, p]), V = r.useCallback((e, r) => {
        if (null == t.current) return;
        let a = t.current?.error,
            o = t.current?.networkState,
            u = null != t.current ? (0, c.zh)(t.current.currentTime, t.current.duration) : void 0,
            S = null != r ? {
                hls_error_subtype: r.errorDetails,
                hls_error_fatal: r.fatal
            } : {};
        C({
            questId: v,
            event: m.HAw.QUEST_VIDEO_ERROR,
            properties: {
                video_progress: u,
                video_error_type: e,
                video_asset_id: f,
                network_connection_speed: T,
                video_session_id: _,
                video_error_code: a?.code,
                video_error_message: a?.message,
                video_network_state: o,
                is_full_episode_video_quest: g,
                is_hls_supported: s.Ay.isSupported(),
                ...E(n),
                ...S
            },
            sourceQuestContent: p
        }), (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) && l.A.increment({
            name: i.K.QUEST_VIDEO_ERROR,
            tags: [`quest_id:${v}`, `error_type:${e}`]
        })
    }, [v, t, f, _, n, C, p, T, g]);
    r.useEffect(() => {
        if (!A || null == n.current) return;
        let e = n.current,
            t = (e, t) => {
                let n;
                switch (S.info(`[QV] | HLS Error: type=${t.type}, details=${t.details}, fatal=${t.fatal}`), t.type) {
                    case s.Ay.ErrorTypes.NETWORK_ERROR:
                        n = d.SB.HLS_NETWORK_ERROR;
                        break;
                    case s.Ay.ErrorTypes.MEDIA_ERROR:
                        n = d.SB.HLS_MEDIA_ERROR;
                        break;
                    case s.Ay.ErrorTypes.MUX_ERROR:
                        n = d.SB.HLS_MUX_ERROR;
                        break;
                    case s.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = d.SB.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = d.SB.HLS_OTHER_ERROR
                }
                V(n, {
                    errorDetails: t.details,
                    fatal: t.fatal
                })
            };
        return e.on(s.Ay.Events.ERROR, t), () => {
            e.off(s.Ay.Events.ERROR, t)
        }
    }, [A, n, S, V]);
    let j = r.useCallback(e => {
            null != t.current && C({
                questId: v,
                event: e ? m.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : m.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: {
                    video_session_id: _,
                    video_asset_id: f,
                    ...E(n)
                },
                sourceQuestContent: p
            })
        }, [v, t, _, n, C, f, p]),
        Q = r.useCallback(e => {
            null != t.current && C({
                questId: v,
                event: m.HAw.QUEST_VIDEO_VOLUME_CHANGED,
                properties: {
                    volume_threshold: e > 0 && e < 1 ? .5 : e,
                    video_session_id: _,
                    video_asset_id: f,
                    ...E(n)
                },
                sourceQuestContent: p
            })
        }, [v, t, f, _, n, C, p]);
    return {
        trackQuestVideoLoadingStarted: I,
        trackQuestVideoLoadingEnded: y,
        trackQuestVideoTimeToFirstFrame: R,
        trackQuestVideoProgressed: N,
        trackQuestVideoResumed: b,
        trackQuestVideoPaused: O,
        trackQuestVideoFocusChange: L,
        trackQuestContentClick: P,
        trackQuestVideoBufferingStarted: M,
        trackQuestVideoBufferingEnded: k,
        trackQuestVideoSegmentWatched: w,
        trackQuestVideoFullscreenChanged: j,
        trackQuestVideoError: V,
        trackQuestVideoVolumeChanged: Q
    }
}