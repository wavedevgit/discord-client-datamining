/** chunk id: 471535 params = (module,exports,require) **/
n.d(t, {
    A: () => K
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(771253),
    o = n(380278),
    u = n(942381),
    c = n(311907),
    d = n(645577),
    m = n(397927),
    p = n(964486),
    f = n(775602),
    E = n(607470),
    h = n(892358),
    v = n(544180),
    x = n(475815),
    g = n(829219),
    S = n(341915),
    A = n(405670),
    C = n(943849),
    _ = n(991484),
    b = n(579473),
    y = n(590202),
    T = n(792620),
    N = n(753386),
    D = n(880080),
    R = n(818049),
    L = n(717415),
    I = n(661417),
    j = n(882291),
    M = n(224284),
    w = n(261331),
    k = n(602871),
    O = n(246465),
    P = n(660171),
    Q = n(853738),
    V = n(654487),
    U = n(838541),
    B = n(985018),
    F = n(221190);
let G = {
    tension: 250,
    friction: 5,
    clamp: !0
};

function K(e) {
    let {
        targetTimeSec: t,
        onOptimisticProgressUpdate: n,
        autoplay: i,
        parentTransitionState: K,
        performanceClockStartTime: $,
        orientation: Y,
        videoUrlOverride: H
    } = e, {
        sourceQuestContent: z,
        quest: W,
        videoSessionId: q,
        onClose: X,
        isFullscreenEnabled: J,
        setIsFullscreenEnabled: Z,
        useNewProgressBarStyling: ee
    } = l.useContext(L.VideoQuestModalContext), et = (0, A.Kr)(e => e.transcriptEnabled), en = (0, A.Kr)(e => e.setTranscriptEnabled), er = (0, A.Kr)(e => e.captionEnabled), el = (0, A.Kr)(e => e.setCaptionEnabled), {
        focused: ei,
        focusedChanged: ea
    } = (0, h.A7)(), {
        visible: es,
        visibleChanged: eo,
        targetRef: eu
    } = (0, h.O7)(), [ec, ed] = l.useState(!0 === i ? w.Q6.PLAYING : w.Q6.PAUSED), [em, ep] = l.useState(!1), [ef, eE] = l.useState(!1), eh = (0, T.Yh)(W), [ev, ex] = l.useState(eh.percentComplete), eg = l.useCallback(e => {
        eV(null), ex(e)
    }, []), [eS, eA] = l.useState(!1), [eC, e_] = l.useState(!0), [eb, ey] = l.useState(!1), [eT, eN] = l.useState([]), [eD, eR] = l.useState(v.A.getEffectiveConnectionSpeed()), [eL, eI] = l.useState(0), [ej, eM] = l.useState(0), [ew, ek] = l.useState(!1), [eO, eP] = l.useState(!1), [eQ, eV] = l.useState(null), eU = l.useRef(!0), eB = l.useRef(null), eF = l.useRef(null), eG = (0, A.Kr)(e => e.videoProgress[W.id] ?? A.yc, u.x), eK = (0, A.Kr)(e => e.setVideoProgress), e$ = (0, A.Kr)(e => e.muted), eY = (0, A.Kr)(e => e.volume), eH = (0, c.bG)([f.A], () => f.A.useReducedMotion), ez = (0, l.useRef)(null), eW = (0, l.useRef)(null), eq = l.useRef(!0), eX = W.userStatus?.completedAt != null, eJ = l.useMemo(() => W.config.features.includes(V.Li.FULL_EPISODE_VIDEO_QUEST), [W.config.features]), eZ = l.useRef(!1), [e0, e1] = l.useState(null), [e6, e2] = l.useState(!1), [e7, e4] = l.useState(!1), [e9, e8] = l.useState(!1), [e3, e5] = l.useState(null), te = eX ? ez.current?.duration ?? 0 : Math.max(eG.maxTimestampSec, eh.progressSeconds), tt = l.useMemo(() => (0, C.L)({
        quest: W,
        location: V.rE.VIDEO_MODAL
    }), [W]), tn = (0, d.g)(eX, eG, eh.progressSeconds), [tr, tl] = l.useState(w.oA.MD), ti = {
        [w.oA.MD]: ee ? 56 : 50,
        [w.oA.LG]: ee ? 64 : 58
    };
    (0, p.u5)(() => {
        eq.current && (eq.current = !1, eR(v.A.getEffectiveConnectionSpeed()), eX && eG.timestampSec >= eG.duration && eK(W.id, 0, eG.duration))
    });
    let {
        videoAsset: ta,
        videoAssetType: ts,
        hlsRef: to,
        onFirstChunkLoaded: tu
    } = (0, O.A)(ez, eD, tn, H), {
        trackQuestVideoLoadingStarted: tc,
        trackQuestVideoLoadingEnded: td,
        trackQuestVideoProgressed: tm,
        trackQuestVideoResumed: tp,
        trackQuestVideoPaused: tf,
        trackQuestVideoFocusChange: tE,
        trackQuestContentClick: th,
        trackQuestVideoBufferingStarted: tv,
        trackQuestVideoBufferingEnded: tx,
        trackWatchTimeAnalytics: tg,
        trackQuestVideoTimeToFirstFrame: tS,
        trackQuestVideoFullscreenChanged: tA,
        trackQuestVideoError: tC,
        trackQuestVideoVolumeChanged: t_
    } = (0, P.A)({
        questId: W.id,
        isQuestCompleted: eX,
        videoRef: ez,
        hlsRef: to,
        videoSessionId: q,
        videoAssetId: ts,
        sourceQuestContent: z,
        logger: tt,
        isFullEpisodeVideoQuest: eJ
    });
    (0, Q.A)({
        videoAssetUrl: ta?.url,
        videoRef: ez,
        hlsRef: to,
        videoAssetType: ts
    });
    let tb = l.useRef(null),
        ty = l.useCallback(() => {
            clearTimeout(tb.current), e8(!0), tb.current = setTimeout(() => {
                e8(!1)
            }, 1e3)
        }, []);
    l.useEffect(() => () => {
        null != tb.current && clearTimeout(tb.current)
    }, []);
    let tT = l.useCallback(() => ez.current?.currentTime ?? null, []),
        {
            forceSendCurrentSegment: tN
        } = (0, _.A)({
            getCurrentVideoTime: tT,
            isPlaying: ec === w.Q6.PLAYING,
            isMetadataLoaded: e6,
            isInitialSeekComplete: e7,
            onAnalytics: tg,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3
        }),
        tD = l.useCallback(e => {
            if (tt.info(`[QV] | updatePlayerState | playerState: ${e}`), ed(e), null != ez.current) switch (e) {
                case w.Q6.PLAYING:
                    ez.current.paused && tp(e0), e1(null), ez.current.play();
                    break;
                case w.Q6.PAUSED:
                    ez.current.paused || tN(), ez.current.pause(), eU.current = !1;
                    break;
                case w.Q6.ENDED:
                    tN(), en(!1)
            }
        }, [tp, e0, tN, en, tt]);
    l.useEffect(() => {
        tf(e0)
    }, [e0, tf]), l.useEffect(() => {
        ea && tE(ei, ec)
    }, [ei, ea, ec, tE]);
    let tR = l.useCallback(e => {
        eX || W.userStatus?.enrolledAt == null || (tt.info(`[QV] sendServerProgressUpdate: ${e}`), (0, N.zv)(W, e)), tm()
    }, [eX, W, tt, tm]);
    l.useEffect(() => {
        K !== m.ip4.HIDDEN && K !== m.ip4.EXITING && K !== m.ip4.EXITED && (null == K || !eo || es || eX) && (!ea || ei || eX) || null == ez.current || ec !== w.Q6.PLAYING || (tt.info(`[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${K}, visible: ${es}, focused: ${ei}, isQuestCompleted: ${eX}`), tD(w.Q6.PAUSED), eX ? eJ && e1(S.Yg.ANOTHER_MODAL_OPENED) : e1(S.Yg.LOST_FOCUS))
    }, [K, ei, ea, es, eo, ec, eX, tD, tR, tt, eJ]), l.useEffect(() => {
        e0 === S.Yg.ANOTHER_MODAL_OPENED && K === m.ip4.ENTERED && ec === w.Q6.PAUSED && eJ && ei && (tt.info("[QV] | Resuming full episode video after modal re-entered"), tD(w.Q6.PLAYING))
    }, [K, ec, tt, tD, e0, eJ, ei]);
    let [tL, tI] = l.useState(!1), tj = l.useRef(null), tM = l.useRef(performance.now()), tw = l.useCallback(() => {
        null != tj.current && clearTimeout(tj.current), ec !== w.Q6.PLAYING || (tj.current = setTimeout(() => {
            ec === w.Q6.PLAYING && tI(!0)
        }, Math.max(0, 3e3 - (performance.now() - tM.current))))
    }, [ec]), tk = () => {
        tI(!1), tM.current = performance.now(), tw()
    };
    l.useEffect(() => {
        if (ec !== w.Q6.PLAYING) {
            tI(!1), null != tj.current && clearTimeout(tj.current);
            return
        }
        return tw(), () => {
            null != tj.current && clearTimeout(tj.current)
        }
    }, [ec, tw]);
    let tO = !tL && (ef || em || ec === w.Q6.ENDED),
        tP = l.useCallback(() => {
            tt.info("[QV] | handleFullScreenExit");
            let e = (0, x.qf)(ez.current?.parentNode, ez.current);
            null == e || (0, x._U)(e) || (e.removeEventListener(x.Wb, tP), Z(!1), tA(!1), tl(w.oA.MD))
        }, [Z, tt, tA]),
        tQ = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            tt.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`), tU(e), ec === w.Q6.ENDED && tD(w.Q6.PAUSED), th(S.uF.VIDEO_MODAL, y.Cy.SEEK_BACKWARD)
        },
        tV = () => {
            if (null == ez.current || !t6) return;
            let e = Math.min(ez.current.currentTime + 10, te);
            tt.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`), tU(e), ec !== w.Q6.ENDED && e >= ez.current.duration && tD(w.Q6.ENDED), th(S.uF.VIDEO_MODAL, y.Cy.SEEK_FORWARD)
        };
    l.useEffect(() => {
        let e = ez.current;
        return () => {
            let t = (0, x.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(x.Wb, tP)
        }
    }, [tP]);
    let tU = l.useCallback(e => {
        null != ez.current && (tt.info(`[QV] | seekTimeline | timeSec: ${e}`), eV(e / (ez.current.duration ?? 1) * 100), tN(), eA(!0), e4(!1), ez.current.currentTime = e, eK(W.id, e, ez.current.duration))
    }, [ez, eK, W.id, tN, tt]);
    l.useEffect(() => {
        let e = ez.current;
        if (null == e) return;
        let t = () => {
            null != to.current && to.current.mainForwardBufferInfo?.len === 0 && to.current.trigger(s.sV.BUFFER_FLUSHING, {
                startOffset: e.currentTime,
                endOffset: 1 / 0,
                type: "video"
            })
        };
        return e.addEventListener("seeking", t), () => {
            e.removeEventListener("seeking", t)
        }
    }, [ez, to]);
    let tB = () => {
            if (null != ez.current) switch (tt.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), ty(), ec) {
                case w.Q6.ENDED:
                    tU(0), tD(w.Q6.PLAYING);
                    break;
                case w.Q6.PLAYING:
                    tD(w.Q6.PAUSED), e1(S.Yg.PAUSE_BUTTON);
                    break;
                default:
                    tD(w.Q6.PLAYING)
            }
        },
        tF = e => {
            e5(e)
        },
        tG = e => {
            e5(t => t?.id === e.id ? null : t)
        },
        tK = l.useCallback(() => {
            if (null == ez.current || (tt.info(`[QV] | handleTracksLoaded: textTracks.length: ${ez.current.textTracks.length}`), 0 === ez.current.textTracks.length)) return;
            let e = ez.current.textTracks[0];
            if (e.mode = "hidden", null != e.cues)
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, h.Ce)(n) && (n.id = `cue-${t}`, n.onenter = () => tF(n), n.onexit = () => tG(n))
                }
        }, [ez, tt]);
    l.useEffect(() => {
        if (null == eW.current) return;
        let e = eW.current;
        return e.addEventListener("load", tK), () => {
            null != e && e.removeEventListener("load", tK)
        }
    }, [eW, tK]);
    let t$ = l.useCallback(e => {
            tt.info(`[QV] | logVideoError: errorType: ${e}, videoProgress: ${ez.current?.currentTime}, videoAssetId: ${ts}, connectionSpeed: ${eD}`), tC(e)
        }, [eD, tC, ez, ts, tt]),
        tY = l.useRef(!1);
    l.useEffect(() => {
        null != ta || tY.current || (tY.current = !0, tC(w.SB.NO_VALID_SOURCE))
    }, [ta, tC, tY]);
    let tH = e => {
        tt.info(`[QV] | handleCanPlay: playerState: ${ec}`), null != ez.current && ec === w.Q6.PLAYING && (tt.info("[QV] | handleCanPlay: did NOT early return"), eC && (tt.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eC}`), e_(!1)), eb && (tt.info(`[QV] | handleCanPlay: waitingForChunk: ${eb}`), tx(null != eF.current ? performance.now() - eF.current : null), ey(!1)), tt.info("[QV] | handleCanPlay: updating player state to playing"), tD(w.Q6.PLAYING))
    };
    l.useEffect(() => {
        if (!eS) return;
        let e = setTimeout(() => {
            eA(!1)
        }, 1e3);
        return () => clearTimeout(e)
    }, [eS]);
    let [{
        controlBarAnimSpring: tz
    }, tW] = (0, m.zhh)(() => ({
        from: {
            controlBarAnimSpring: 0
        },
        config: G,
        onStart: () => {
            eP(!1)
        },
        onRest: e => {
            1 === e.value && eP(!0)
        }
    })), tq = (0, l.useRef)(null), [{
        captionHeightSpring: tX
    }, tJ] = (0, m.zhh)(() => ({
        from: {
            captionHeightSpring: 0
        },
        config: G
    }));
    l.useEffect(() => (tJ({
        captionHeightSpring: er && null != e3 ? tq.current?.clientHeight ?? 0 : 0,
        immediate: eH
    }), () => {
        tX.stop()
    }), [er, tJ, eH, e3, tX]), l.useEffect(() => (tW({
        controlBarAnimSpring: tO || ew ? 1 : 0,
        immediate: eH
    }), () => {
        tz.stop()
    }), [tO, tW, eH, ew, tz]);
    let tZ = ec === w.Q6.ENDED,
        t0 = l.useMemo(() => (0, b.tW)(W, b.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [W]),
        t1 = l.useMemo(() => (0, b.tW)(W, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [W]),
        t6 = eX || eG.maxTimestampSec >= (ez.current?.currentTime ?? 0) + 1,
        t2 = l.useMemo(() => null === (0, b.tW)(W, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [W]),
        t7 = ee ? 20 : 12,
        t4 = 20 * !!ee,
        t9 = eX && eO;
    return (0, r.jsx)(m.DUT, {
        className: F.W6,
        "data-fullscreen": J,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            ep(!0), tI(!1), tM.current = performance.now(), null != tj.current && clearTimeout(tj.current)
        },
        onMouseLeave: () => {
            ep(!1), tI(!1)
        },
        onMouseMove: tk,
        onKeyDown: tk,
        children: (0, r.jsxs)("div", {
            className: a()(F.NS, {
                [F.DO]: "portrait" === Y,
                [F.r7]: "landscape" === Y
            }),
            style: {
                "--custom-footer-bottom": `${ee?4:2}px`
            },
            children: [tZ && (0, r.jsx)(R.A, {
                videoRef: ez,
                onTrackQuestContentClick: th,
                orientation: Y
            }), (0, r.jsxs)(E.A, {
                ref: e => {
                    ez.current = e, eu.current = e
                },
                autoPlay: i,
                playsInline: !0,
                mediaLayoutType: J ? U.dG.STATIC : U.dG.RESPONSIVE,
                className: a()({
                    [F.R]: tZ,
                    [F.IR]: !0
                }),
                controls: !1,
                poster: t0?.url,
                disablePictureInPicture: !0,
                "data-testid": "discord-web-video-player-video",
                onTimeUpdate: e => {
                    if (null == ez.current) return;
                    let r = ez.current.currentTime >= t && !eZ.current && eJ;
                    if (ez.current.currentTime >= eL || r) {
                        var l;
                        tt.info(`[QV] | handleTimeUpdate: capturing server time update: currentTime: ${ez.current.currentTime}`), (l = ez.current.currentTime) >= t && (eZ.current = !0), eI(l + V.aA + Math.random() * V.A6), tR(l)
                    }
                    ez.current.currentTime >= ej && (eM(ez.current.currentTime + 1), (0, g.Gn)(W.id, eh.taskType, ez.current.currentTime), n(ez.current.currentTime)), eK(W.id, ez.current.currentTime, ez.current.duration), eg(ez.current.currentTime / ez.current.duration * 100)
                },
                onEnded: e => {
                    null != ez.current && (tR(ez.current.duration + 1), tt.info(`[QV] | handleEnded: sending progress update: ${ez.current.duration+1}`), eK(W.id, ez.current.duration, ez.current.duration)), tD(w.Q6.ENDED), ey(!1)
                },
                onLoadedData: e => {
                    tt.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eC}`), eC && (td(null != eB.current ? performance.now() - eB.current : null), e_(!1), tu())
                },
                onLoadedMetadata: e => {
                    null != ez.current && (tt.info(`[QV] | handleLoadedMetadata | videoAssetId: ${ts}`), e2(!0), ts !== b.fY.VIDEO_PLAYER_VIDEO_HLS && tU(tn), e$ ? ez.current.volume = 0 : ez.current.volume = eY)
                },
                onLoadStart: () => {
                    eB.current = performance.now(), tc(eD), tt.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`)
                },
                onPlaying: () => {
                    if (!eU.current) return;
                    let e = performance.now() - $;
                    tt.info(`[QV] | ⏰ Video FCP: ${e}ms`), tS(e), eU.current = !1
                },
                onWaiting: e => {
                    eF.current = performance.now(), tt.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`), tv(), ey(!0)
                },
                onProgress: e => {
                    if (null == ez.current) return;
                    tt.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${ez.current.buffered.length}`);
                    let t = [];
                    for (let e = 0; e < ez.current.buffered.length; e++) {
                        let n = ez.current.buffered.start(e),
                            r = ez.current.buffered.end(e);
                        r - n < 1 || t.push({
                            start: n / ez.current.duration,
                            size: (r - n) / ez.current.duration
                        })
                    }
                    eN(t)
                },
                onCanPlay: tH,
                onCanPlayThrough: tH,
                onSeeked: () => {
                    tt.info("[QV] | handleSeeked"), e4(!0)
                },
                onAbort: () => t$(w.SB.ABORT),
                onError: () => t$(w.SB.ERROR),
                onEmptied: () => t$(w.SB.EMPTIED),
                onStalled: () => t$(w.SB.STALLED),
                onClick: () => {
                    tt.info("[QV] | handleVideoClick"), tB()
                },
                crossOrigin: "anonymous",
                children: [null != t1 && (0, r.jsx)("track", {
                    ref: eW,
                    src: t1.url,
                    label: "English",
                    kind: "captions",
                    srcLang: "en",
                    default: !0
                }), null != ta && ts !== b.fY.VIDEO_PLAYER_VIDEO_HLS && null != ta.mimetype && (0, r.jsx)("source", {
                    onError: () => t$(w.SB.SOURCE_ERROR),
                    src: ta.url,
                    type: ta.mimetype
                })]
            }), (eC || eb) && ec === w.Q6.PLAYING && null != ta && (0, r.jsx)("span", {
                className: F.S,
                "data-testid": "discord-web-video-player-loading-spinner",
                children: (0, r.jsx)(m.y$y, {
                    type: m.y$y.Type.WANDERING_CUBES
                })
            }), (0, r.jsx)(k.A, {
                hasVideoAsset: null != ta,
                playerState: ec,
                pauseReason: e0
            }), ee ? (0, r.jsxs)("div", {
                className: F.R4,
                "data-testid": "discord-web-video-player-share-btn",
                children: [(0, r.jsx)(I.A, {}), (0, r.jsx)(m.K0, {
                    variant: "overlay-secondary",
                    icon: m.PGe,
                    "aria-label": B.intl.string(B.t.cpT0Cq),
                    onClick: X
                })]
            }) : (0, r.jsx)(o.animated.div, {
                className: F.R4,
                "data-testid": "discord-web-video-player-share-btn",
                style: {
                    opacity: (0, o.to)([tz.to({
                        range: [0, 1],
                        output: [0, 1]
                    })], e => `${e}`),
                    visibility: (0, o.to)([tz.to({
                        range: [0, 1],
                        output: [0, 1]
                    })], e => e < .1 ? "hidden" : "visible"),
                    pointerEvents: (0, o.to)([tz.to({
                        range: [0, 1],
                        output: [0, 1]
                    })], e => e < .3 ? "none" : "auto")
                },
                children: (0, r.jsx)(I.A, {})
            }), et && ec !== w.Q6.ENDED && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(m.DUT, {
                    onClick: () => {
                        ec === w.Q6.PAUSED && tD(w.Q6.PLAYING), en(!1)
                    },
                    tabIndex: -1,
                    children: (0, r.jsx)("div", {
                        className: F.BG
                    })
                }), (0, r.jsx)(o.animated.div, {
                    className: a()(F.xr, {
                        [F.MZ]: "portrait" === Y
                    }),
                    "data-testid": "discord-web-video-player-transcript",
                    style: {
                        marginBottom: (0, o.to)([tz, tX], (e, t) => `${e*ti[tr]+t}px`)
                    },
                    children: (0, r.jsx)(M.y, {
                        quest: W,
                        onClose: () => {
                            en(!1), th(S.uF.VIDEO_MODAL, y.Cy.TRANSCRIPT_DISABLE)
                        }
                    })
                })]
            }), (0, r.jsx)(o.animated.div, {
                className: F.Jp,
                style: {
                    opacity: (0, o.to)([tz.to({
                        range: [0, 1],
                        output: [0, 1]
                    })], e => `${e}`)
                }
            }), e9 && (0, r.jsx)("div", {
                className: a()(F.yf, {
                    [F.ZH]: ec === w.Q6.PLAYING,
                    [F.v7]: ec === w.Q6.PAUSED
                }),
                style: {
                    "--custom-play-pause-pop-ms": "1000ms"
                },
                children: ec === w.Q6.PLAYING ? (0, r.jsx)(m.udU, {
                    className: F.PK
                }) : (0, r.jsx)(m.E$n, {
                    className: F.PK
                })
            }, ec), er && null != e3 && !tZ && (0, r.jsx)(o.animated.div, {
                className: F.o$,
                ref: tq,
                "data-testid": "discord-web-video-player-captions",
                style: {
                    translateY: (0, o.to)([tz.to({
                        range: [0, 1],
                        output: [-t4, -ti[tr]]
                    })], e => `${e}px`)
                },
                children: (0, r.jsx)(m.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    className: F.qh,
                    children: e3.text
                })
            }), (0, r.jsxs)(o.animated.div, {
                className: F.r8,
                style: {
                    height: (0, o.to)([tz.to({
                        range: [0, 1],
                        output: [0, ti[tr]]
                    })], e => `${e}px`)
                },
                children: [(0, r.jsx)(o.animated.div, {
                    style: {
                        transform: (0, o.to)([tz.to({
                            range: [1, 0],
                            output: [0, 1]
                        })], e => `translateY(-${e*t4}px)`)
                    },
                    children: (0, r.jsx)(j.A, {
                        percent: null != eQ ? eQ : ev,
                        animate: !0 !== eq.current && !eS,
                        interactionEnabled: t9,
                        playerState: ec,
                        preloadedBuffers: tO ? eT : void 0,
                        duration: ez.current?.duration ?? 1,
                        isFullyVisible: tO && eO,
                        maxSeekableTime: tO && eO ? te : void 0,
                        onClick: e => {
                            t9 && (tU(e), ec === w.Q6.ENDED && tD(w.Q6.PLAYING))
                        },
                        onScrubBack: tQ,
                        onScrubForward: tV,
                        isQuestCompleted: eX,
                        targetSec: t,
                        "data-testid": "discord-web-video-player-timeline"
                    })
                }), (0, r.jsx)(o.animated.div, {
                    className: F.uN,
                    "data-testid": "discord-web-video-player-controls",
                    style: {
                        paddingTop: (0, o.to)([tz.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${e*e*t7}px`),
                        paddingBottom: (0, o.to)([tz.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${e*e*12}px`),
                        pointerEvents: (0, o.to)([tz.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => e < .3 ? "none" : "auto")
                    },
                    onFocus: () => eE(!0),
                    onBlur: () => eE(!1),
                    children: (0, r.jsx)(D.A, {
                        videoRef: ez,
                        orientation: Y,
                        playerState: ec,
                        animSpring: tz,
                        visible: tO,
                        seekForwardEnabled: t6,
                        hideCaptionBtn: null == t1,
                        hideTranscriptBtn: t2,
                        size: tr,
                        handlePlaybackBtnClick: tB,
                        handleTranscriptBtnClick: () => {
                            en(!et), th(S.uF.VIDEO_MODAL, et ? y.Cy.TRANSCRIPT_DISABLE : y.Cy.TRANSCRIPT_ENABLE)
                        },
                        handleCaptionBtnClick: () => {
                            el(!er), th(S.uF.VIDEO_MODAL, er ? y.Cy.CLOSED_CAPTIONING_DISABLE : y.Cy.CLOSED_CAPTIONING_ENABLE)
                        },
                        handleFullScreenBtnClick: () => {
                            let e = !J;
                            tt.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                            let t = (0, x.qf)(ez.current?.parentNode, ez.current);
                            e && null != t ? ((0, x.tl)(t), t.addEventListener(x.Wb, tP), tA(!0), tl(w.oA.LG)) : e || null == t || (t.removeEventListener(x.Wb, tP), tA(!1), (0, x.sP)(t), tl(w.oA.MD)), Z(e)
                        },
                        handleSeekBackBtnClick: tQ,
                        handleSeekForwardBtnClick: tV,
                        handleControlBarPendingInteraction: ek,
                        onVolumeChange: t_
                    })
                })]
            })]
        })
    })
}