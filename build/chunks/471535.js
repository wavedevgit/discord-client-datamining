/** chunk id: 471535, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => $
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(771253),
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
    A = n(341915),
    S = n(405670),
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

function $(e) {
    let {
        targetTimeSec: t,
        onOptimisticProgressUpdate: n,
        autoplay: i,
        parentTransitionState: $,
        performanceClockStartTime: Y,
        orientation: K,
        videoUrlOverride: H
    } = e, {
        sourceQuestContent: W,
        quest: q,
        videoSessionId: z,
        onClose: X,
        isFullscreenEnabled: J,
        setIsFullscreenEnabled: Z,
        useNewProgressBarStyling: ee
    } = l.useContext(L.VideoQuestModalContext), et = (0, S.Kr)(e => e.transcriptEnabled), en = (0, S.Kr)(e => e.setTranscriptEnabled), er = (0, S.Kr)(e => e.captionEnabled), el = (0, S.Kr)(e => e.setCaptionEnabled), {
        focused: ei,
        focusedChanged: es
    } = (0, h.A7)(), {
        visible: ea,
        visibleChanged: eo,
        targetRef: eu
    } = (0, h.O7)(), [ec, ed] = l.useState(!0 === i ? w.Q6.PLAYING : w.Q6.PAUSED), [em, ep] = l.useState(!1), [ef, eE] = l.useState(!1), eh = (0, T.Yh)(q), [ev, ex] = l.useState(eh.percentComplete), eg = l.useCallback(e => {
        eV(null), ex(e)
    }, []), [eA, eS] = l.useState(!1), [eC, e_] = l.useState(!0), [eb, ey] = l.useState(!1), [eT, eN] = l.useState([]), [eD, eR] = l.useState(v.A.getEffectiveConnectionSpeed()), [eL, eI] = l.useState(0), [ej, eM] = l.useState(0), [ew, ek] = l.useState(!1), [eO, eP] = l.useState(!1), [eQ, eV] = l.useState(null), eU = l.useRef(!0), eB = l.useRef(null), eF = l.useRef(null), eG = (0, S.Kr)(e => e.videoProgress[q.id] ?? S.yc, u.x), e$ = (0, S.Kr)(e => e.setVideoProgress), eY = (0, S.Kr)(e => e.muted), eK = (0, S.Kr)(e => e.volume), eH = (0, c.bG)([f.A], () => f.A.useReducedMotion), eW = (0, l.useRef)(null), eq = (0, l.useRef)(null), ez = l.useRef(!0), eX = q.userStatus?.completedAt != null, eJ = l.useMemo(() => q.config.features.includes(V.Li.FULL_EPISODE_VIDEO_QUEST), [q.config.features]), eZ = l.useRef(!1), [e0, e1] = l.useState(null), [e6, e2] = l.useState(!1), [e7, e4] = l.useState(!1), [e9, e8] = l.useState(!1), [e3, e5] = l.useState(null), te = eX ? eW.current?.duration ?? 0 : Math.max(eG.maxTimestampSec, eh.progressSeconds), tt = l.useMemo(() => (0, C.L)({
        quest: q,
        location: V.rE.VIDEO_MODAL
    }), [q]), tn = (0, d.g)(eX, eG, eh.progressSeconds), [tr, tl] = l.useState(w.oA.MD), ti = {
        [w.oA.MD]: ee ? 56 : 50,
        [w.oA.LG]: ee ? 64 : 58
    };
    (0, p.u5)(() => {
        ez.current && (ez.current = !1, eR(v.A.getEffectiveConnectionSpeed()), eX && eG.timestampSec >= eG.duration && e$(q.id, 0, eG.duration))
    });
    let {
        videoAsset: ts,
        videoAssetType: ta,
        hlsRef: to,
        onFirstChunkLoaded: tu
    } = (0, O.A)(eW, eD, tn, H), {
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
        trackQuestVideoTimeToFirstFrame: tA,
        trackQuestVideoFullscreenChanged: tS,
        trackQuestVideoError: tC,
        trackQuestVideoVolumeChanged: t_
    } = (0, P.A)({
        questId: q.id,
        isQuestCompleted: eX,
        videoRef: eW,
        hlsRef: to,
        videoSessionId: z,
        videoAssetId: ta,
        sourceQuestContent: W,
        logger: tt,
        isFullEpisodeVideoQuest: eJ
    });
    (0, Q.A)({
        videoAssetUrl: ts?.url,
        videoRef: eW,
        hlsRef: to,
        videoAssetType: ta
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
    let tT = l.useCallback(() => eW.current?.currentTime ?? null, []),
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
            if (tt.info(`[QV] | updatePlayerState | playerState: ${e}`), ed(e), null != eW.current) switch (e) {
                case w.Q6.PLAYING:
                    eW.current.paused && tp(e0), e1(null), eW.current.play();
                    break;
                case w.Q6.PAUSED:
                    eW.current.paused || tN(), eW.current.pause(), eU.current = !1;
                    break;
                case w.Q6.ENDED:
                    tN(), en(!1)
            }
        }, [tp, e0, tN, en, tt]);
    l.useEffect(() => {
        tf(e0)
    }, [e0, tf]), l.useEffect(() => {
        es && tE(ei, ec)
    }, [ei, es, ec, tE]);
    let tR = l.useCallback(e => {
        eX || q.userStatus?.enrolledAt == null || (tt.info(`[QV] sendServerProgressUpdate: ${e}`), (0, N.zv)(q, e)), tm()
    }, [eX, q, tt, tm]);
    l.useEffect(() => {
        $ !== m.ip4.HIDDEN && $ !== m.ip4.EXITING && $ !== m.ip4.EXITED && (null == $ || !eo || ea || eX) && (!es || ei || eX) || null == eW.current || ec !== w.Q6.PLAYING || (tt.info(`[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${$}, visible: ${ea}, focused: ${ei}, isQuestCompleted: ${eX}`), tD(w.Q6.PAUSED), eX ? eJ && e1(A.Yg.ANOTHER_MODAL_OPENED) : e1(A.Yg.LOST_FOCUS))
    }, [$, ei, es, ea, eo, ec, eX, tD, tR, tt, eJ]), l.useEffect(() => {
        e0 === A.Yg.ANOTHER_MODAL_OPENED && $ === m.ip4.ENTERED && ec === w.Q6.PAUSED && eJ && ei && (tt.info("[QV] | Resuming full episode video after modal re-entered"), tD(w.Q6.PLAYING))
    }, [$, ec, tt, tD, e0, eJ, ei]);
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
            let e = (0, x.qf)(eW.current?.parentNode, eW.current);
            null == e || (0, x._U)(e) || (e.removeEventListener(x.Wb, tP), Z(!1), tS(!1), tl(w.oA.MD))
        }, [Z, tt, tS]),
        tQ = () => {
            if (null == eW.current) return;
            let e = Math.max(eW.current.currentTime - 10, 0);
            tt.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`), tU(e), ec === w.Q6.ENDED && tD(w.Q6.PAUSED), th(A.uF.VIDEO_MODAL, y.Cy.SEEK_BACKWARD)
        },
        tV = () => {
            if (null == eW.current || !t6) return;
            let e = Math.min(eW.current.currentTime + 10, te);
            tt.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`), tU(e), ec !== w.Q6.ENDED && e >= eW.current.duration && tD(w.Q6.ENDED), th(A.uF.VIDEO_MODAL, y.Cy.SEEK_FORWARD)
        };
    l.useEffect(() => {
        let e = eW.current;
        return () => {
            let t = (0, x.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(x.Wb, tP)
        }
    }, [tP]);
    let tU = l.useCallback(e => {
        null != eW.current && (tt.info(`[QV] | seekTimeline | timeSec: ${e}`), eV(e / (eW.current.duration ?? 1) * 100), tN(), eS(!0), e4(!1), eW.current.currentTime = e, e$(q.id, e, eW.current.duration))
    }, [eW, e$, q.id, tN, tt]);
    l.useEffect(() => {
        let e = eW.current;
        if (null == e) return;
        let t = () => {
            null != to.current && to.current.mainForwardBufferInfo?.len === 0 && to.current.trigger(a.sV.BUFFER_FLUSHING, {
                startOffset: e.currentTime,
                endOffset: 1 / 0,
                type: "video"
            })
        };
        return e.addEventListener("seeking", t), () => {
            e.removeEventListener("seeking", t)
        }
    }, [eW, to]);
    let tB = () => {
            if (null != eW.current) switch (tt.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), ty(), ec) {
                case w.Q6.ENDED:
                    tU(0), tD(w.Q6.PLAYING);
                    break;
                case w.Q6.PLAYING:
                    tD(w.Q6.PAUSED), e1(A.Yg.PAUSE_BUTTON);
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
        t$ = l.useCallback(() => {
            if (null == eW.current || (tt.info(`[QV] | handleTracksLoaded: textTracks.length: ${eW.current.textTracks.length}`), 0 === eW.current.textTracks.length)) return;
            let e = eW.current.textTracks[0];
            if (e.mode = "hidden", null != e.cues)
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, h.Ce)(n) && (n.id = `cue-${t}`, n.onenter = () => tF(n), n.onexit = () => tG(n))
                }
        }, [eW, tt]);
    l.useEffect(() => {
        if (null == eq.current) return;
        let e = eq.current;
        return e.addEventListener("load", t$), () => {
            null != e && e.removeEventListener("load", t$)
        }
    }, [eq, t$]);
    let tY = l.useCallback(e => {
            tt.info(`[QV] | logVideoError: errorType: ${e}, videoProgress: ${eW.current?.currentTime}, videoAssetId: ${ta}, connectionSpeed: ${eD}`), tC(e)
        }, [eD, tC, eW, ta, tt]),
        tK = l.useRef(!1);
    l.useEffect(() => {
        null != ts || tK.current || (tK.current = !0, tC(w.SB.NO_VALID_SOURCE))
    }, [ts, tC, tK]);
    let tH = e => {
        tt.info(`[QV] | handleCanPlay: playerState: ${ec}`), null != eW.current && ec === w.Q6.PLAYING && (tt.info("[QV] | handleCanPlay: did NOT early return"), eC && (tt.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eC}`), e_(!1)), eb && (tt.info(`[QV] | handleCanPlay: waitingForChunk: ${eb}`), tx(null != eF.current ? performance.now() - eF.current : null), ey(!1)), tt.info("[QV] | handleCanPlay: updating player state to playing"), tD(w.Q6.PLAYING))
    };
    l.useEffect(() => {
        if (!eA) return;
        let e = setTimeout(() => {
            eS(!1)
        }, 1e3);
        return () => clearTimeout(e)
    }, [eA]);
    let [{
        controlBarAnimSpring: tW
    }, tq] = (0, m.zhh)(() => ({
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
    })), tz = (0, l.useRef)(null), [{
        captionHeightSpring: tX
    }, tJ] = (0, m.zhh)(() => ({
        from: {
            captionHeightSpring: 0
        },
        config: G
    }));
    l.useEffect(() => (tJ({
        captionHeightSpring: er && null != e3 ? tz.current?.clientHeight ?? 0 : 0,
        immediate: eH
    }), () => {
        tX.stop()
    }), [er, tJ, eH, e3, tX]), l.useEffect(() => (tq({
        controlBarAnimSpring: tO || ew ? 1 : 0,
        immediate: eH
    }), () => {
        tW.stop()
    }), [tO, tq, eH, ew, tW]);
    let tZ = ec === w.Q6.ENDED,
        t0 = l.useMemo(() => (0, b.tW)(q, b.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [q]),
        t1 = l.useMemo(() => (0, b.tW)(q, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [q]),
        t6 = eX || eG.maxTimestampSec >= (eW.current?.currentTime ?? 0) + 1,
        t2 = l.useMemo(() => null === (0, b.tW)(q, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [q]),
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
            className: s()(F.NS, {
                [F.DO]: "portrait" === K,
                [F.r7]: "landscape" === K
            }),
            style: {
                "--custom-footer-bottom": `${ee?4:2}px`
            },
            children: [tZ && (0, r.jsx)(R.A, {
                videoRef: eW,
                onTrackQuestContentClick: th,
                orientation: K
            }), (0, r.jsxs)(E.A, {
                ref: e => {
                    eW.current = e, eu.current = e
                },
                autoPlay: i,
                playsInline: !0,
                mediaLayoutType: J ? U.dG.STATIC : U.dG.RESPONSIVE,
                className: s()({
                    [F.R]: tZ,
                    [F.IR]: !0
                }),
                controls: !1,
                poster: t0?.url,
                disablePictureInPicture: !0,
                "data-testid": "discord-web-video-player-video",
                onTimeUpdate: e => {
                    if (null == eW.current) return;
                    let r = eW.current.currentTime >= t && !eZ.current && eJ;
                    if (eW.current.currentTime >= eL || r) {
                        var l;
                        tt.info(`[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eW.current.currentTime}`), (l = eW.current.currentTime) >= t && (eZ.current = !0), eI(l + V.aA + Math.random() * V.A6), tR(l)
                    }
                    eW.current.currentTime >= ej && (eM(eW.current.currentTime + 1), (0, g.Gn)(q.id, eh.taskType, eW.current.currentTime), n(eW.current.currentTime)), e$(q.id, eW.current.currentTime, eW.current.duration), eg(eW.current.currentTime / eW.current.duration * 100)
                },
                onEnded: e => {
                    null != eW.current && (tR(eW.current.duration + 1), tt.info(`[QV] | handleEnded: sending progress update: ${eW.current.duration+1}`), e$(q.id, eW.current.duration, eW.current.duration)), tD(w.Q6.ENDED), ey(!1)
                },
                onLoadedData: e => {
                    tt.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eC}`), eC && (td(null != eB.current ? performance.now() - eB.current : null), e_(!1), tu())
                },
                onLoadedMetadata: e => {
                    null != eW.current && (tt.info(`[QV] | handleLoadedMetadata | videoAssetId: ${ta}`), e2(!0), ta !== b.fY.VIDEO_PLAYER_VIDEO_HLS && tU(tn), eY ? eW.current.volume = 0 : eW.current.volume = eK)
                },
                onLoadStart: () => {
                    eB.current = performance.now(), tc(eD), tt.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`)
                },
                onPlaying: () => {
                    if (!eU.current) return;
                    let e = performance.now() - Y;
                    tt.info(`[QV] | ⏰ Video FCP: ${e}ms`), tA(e), eU.current = !1
                },
                onWaiting: e => {
                    eF.current = performance.now(), tt.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`), tv(), ey(!0)
                },
                onProgress: e => {
                    if (null == eW.current) return;
                    tt.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eW.current.buffered.length}`);
                    let t = [];
                    for (let e = 0; e < eW.current.buffered.length; e++) {
                        let n = eW.current.buffered.start(e),
                            r = eW.current.buffered.end(e);
                        r - n < 1 || t.push({
                            start: n / eW.current.duration,
                            size: (r - n) / eW.current.duration
                        })
                    }
                    eN(t)
                },
                onCanPlay: tH,
                onCanPlayThrough: tH,
                onSeeked: () => {
                    tt.info("[QV] | handleSeeked"), e4(!0)
                },
                onAbort: () => tY(w.SB.ABORT),
                onError: () => tY(w.SB.ERROR),
                onEmptied: () => tY(w.SB.EMPTIED),
                onStalled: () => tY(w.SB.STALLED),
                onClick: () => {
                    tt.info("[QV] | handleVideoClick"), tB()
                },
                crossOrigin: "anonymous",
                children: [null != t1 && (0, r.jsx)("track", {
                    ref: eq,
                    src: t1.url,
                    label: "English",
                    kind: "captions",
                    srcLang: "en",
                    default: !0
                }), null != ts && ta !== b.fY.VIDEO_PLAYER_VIDEO_HLS && null != ts.mimetype && (0, r.jsx)("source", {
                    onError: () => tY(w.SB.SOURCE_ERROR),
                    src: ts.url,
                    type: ts.mimetype
                })]
            }), (eC || eb) && ec === w.Q6.PLAYING && null != ts && (0, r.jsx)("span", {
                className: F.S,
                "data-testid": "discord-web-video-player-loading-spinner",
                children: (0, r.jsx)(m.y$y, {
                    type: m.y$y.Type.WANDERING_CUBES
                })
            }), (0, r.jsx)(k.A, {
                hasVideoAsset: null != ts,
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
                    opacity: (0, o.to)([tW.to({
                        range: [0, 1],
                        output: [0, 1]
                    })], e => `${e}`),
                    visibility: (0, o.to)([tW.to({
                        range: [0, 1],
                        output: [0, 1]
                    })], e => e < .1 ? "hidden" : "visible"),
                    pointerEvents: (0, o.to)([tW.to({
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
                    className: s()(F.xr, {
                        [F.MZ]: "portrait" === K
                    }),
                    "data-testid": "discord-web-video-player-transcript",
                    style: {
                        marginBottom: (0, o.to)([tW, tX], (e, t) => `${e*ti[tr]+t}px`)
                    },
                    children: (0, r.jsx)(M.y, {
                        quest: q,
                        onClose: () => {
                            en(!1), th(A.uF.VIDEO_MODAL, y.Cy.TRANSCRIPT_DISABLE)
                        }
                    })
                })]
            }), (0, r.jsx)(o.animated.div, {
                className: F.Jp,
                style: {
                    opacity: (0, o.to)([tW.to({
                        range: [0, 1],
                        output: [0, 1]
                    })], e => `${e}`)
                }
            }), e9 && (0, r.jsx)("div", {
                className: s()(F.yf, {
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
                ref: tz,
                "data-testid": "discord-web-video-player-captions",
                style: {
                    translateY: (0, o.to)([tW.to({
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
                    height: (0, o.to)([tW.to({
                        range: [0, 1],
                        output: [0, ti[tr]]
                    })], e => `${e}px`)
                },
                children: [(0, r.jsx)(o.animated.div, {
                    style: {
                        transform: (0, o.to)([tW.to({
                            range: [1, 0],
                            output: [0, 1]
                        })], e => `translateY(-${e*t4}px)`)
                    },
                    children: (0, r.jsx)(j.A, {
                        percent: null != eQ ? eQ : ev,
                        animate: !0 !== ez.current && !eA,
                        interactionEnabled: t9,
                        playerState: ec,
                        preloadedBuffers: tO ? eT : void 0,
                        duration: eW.current?.duration ?? 1,
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
                        paddingTop: (0, o.to)([tW.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${e*e*t7}px`),
                        paddingBottom: (0, o.to)([tW.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${e*e*12}px`),
                        pointerEvents: (0, o.to)([tW.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => e < .3 ? "none" : "auto")
                    },
                    onFocus: () => eE(!0),
                    onBlur: () => eE(!1),
                    children: (0, r.jsx)(D.A, {
                        videoRef: eW,
                        orientation: K,
                        playerState: ec,
                        animSpring: tW,
                        visible: tO,
                        seekForwardEnabled: t6,
                        hideCaptionBtn: null == t1,
                        hideTranscriptBtn: t2,
                        size: tr,
                        handlePlaybackBtnClick: tB,
                        handleTranscriptBtnClick: () => {
                            en(!et), th(A.uF.VIDEO_MODAL, et ? y.Cy.TRANSCRIPT_DISABLE : y.Cy.TRANSCRIPT_ENABLE)
                        },
                        handleCaptionBtnClick: () => {
                            el(!er), th(A.uF.VIDEO_MODAL, er ? y.Cy.CLOSED_CAPTIONING_DISABLE : y.Cy.CLOSED_CAPTIONING_ENABLE)
                        },
                        handleFullScreenBtnClick: () => {
                            let e = !J;
                            tt.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                            let t = (0, x.qf)(eW.current?.parentNode, eW.current);
                            e && null != t ? ((0, x.tl)(t), t.addEventListener(x.Wb, tP), tS(!0), tl(w.oA.LG)) : e || null == t || (t.removeEventListener(x.Wb, tP), tS(!1), (0, x.sP)(t), tl(w.oA.MD)), Z(e)
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