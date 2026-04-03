/** chunk id: 664111 params = (module,exports,require) **/
n.d(t, {
    A: () => L
}), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(311907),
    u = n(876230),
    d = n(649658),
    c = n(397927),
    m = n(964486),
    h = n(775602),
    p = n(607470),
    f = n(475815),
    x = n(662903),
    b = n(337953),
    E = n(183494),
    v = n(408121),
    g = n(984212),
    y = n(739416),
    S = n(931853),
    C = n(652215),
    A = n(838541),
    N = n(985018),
    R = n(246878);
let T = {
        tension: 250,
        friction: 5,
        clamp: !0
    },
    w = l.forwardRef(function(e, t) {
        let {
            targetTimeSec: n = 1 / 0,
            parentTransitionState: a,
            onOptimisticProgressUpdate: d = () => {},
            autoplay: C = !1,
            performanceClockStartTime: N = 0,
            orientation: w = "landscape",
            videoUrlOverride: j,
            src: L,
            poster: P,
            initialTimeSec: D = 0,
            onProgressUpdate: M,
            onEnded: k,
            onError: I,
            maxSeekableTimeSec: B,
            captionTrackUrl: U,
            transcriptText: G,
            renderEndScreen: O,
            onPlayerStateChange: _,
            onFullscreenChange: Q,
            onVolumeChange: K,
            onLoadStart: F,
            onLoadEnd: $,
            onFirstFrame: Y,
            onBufferingStart: z,
            onBufferingEnd: X,
            onFocusChange: W,
            onVisibilityChange: V,
            onSeek: H,
            renderOverlay: J,
            renderPersistentOverlay: Z,
            onHlsInstance: q,
            preload: ee,
            downloadUrl: et,
            downloadContentType: en,
            progressGlow: er,
            pauseOnLostVisibility: el = !1,
            autoFocus: ea = !1,
            timelineIndicatorConfig: ei
        } = e, es = j ?? L, {
            focused: eo,
            focusedChanged: eu
        } = (0, y.A7)(), {
            visible: ed,
            visibleChanged: ec,
            targetRef: em
        } = (0, y.O7)(), [eh, ep] = l.useState(C ? u.Q6.PLAYING : u.Q6.PAUSED), [ef, ex] = l.useState(!1), [eb, eE] = l.useState(!1), [ev, eg] = l.useState(0), [ey, eS] = l.useState(null), eC = l.useCallback(e => {
            eS(null), eg(e)
        }, []), [eA, eN] = l.useState(!1), [eR, eT] = l.useState(!0), [ew, ej] = l.useState(!1), [eL, eP] = l.useState([]), [eD, eM] = l.useState(!1), [ek, eI] = l.useState(!1), eB = l.useRef(!0), eU = l.useRef(null), eG = l.useRef(null), eO = l.useRef(0);
        l.useLayoutEffect(() => {
            eO.current = performance.now()
        }, []);
        let [e_, eQ] = l.useState(.3), [eK, eF] = l.useState(!1), [e$, eY] = l.useState(!1), [ez, eX] = l.useState(!1), [eW, eV] = l.useState(!1), eH = (0, o.bG)([h.A], () => h.A.useReducedMotion), eJ = (0, l.useRef)(null), eZ = (0, l.useRef)(null), eq = l.useRef(!0), [e0, e1] = l.useState(null), e6 = l.useCallback((e, t) => {
            I?.(e, t)
        }, [I]), {
            isHlsActive: e2
        } = (0, x.Ay)(eJ, {
            src: es,
            initialTimeSec: D,
            onError: e6,
            onHlsInstance: q
        }), [e9, e4] = l.useState(!1), [e8, e7] = l.useState(null), [e3, e5] = l.useState(0), te = B ?? eJ.current?.duration ?? 0, [tt, tn] = l.useState(u.oA.MD), tr = {
            [u.oA.MD]: 50,
            [u.oA.LG]: 58
        };
        (0, m.u5)(() => {
            eq.current && (eq.current = !1)
        });
        let tl = l.useCallback(function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (ep(e), _?.(e, t), null != eJ.current) switch (e) {
                case u.Q6.PLAYING:
                    e1(null), eJ.current.play();
                    break;
                case u.Q6.PAUSED:
                    eJ.current.pause(), eB.current = !1;
                    break;
                case u.Q6.ENDED:
                    eY(!1)
            }
        }, [_]);
        l.useEffect(() => {
            if (!el) return;
            let e = null != a && (a === c.ip4.HIDDEN || a === c.ip4.EXITING || a === c.ip4.EXITED),
                t = null != a && ec && !ed,
                n = eu && !eo;
            if ((e || t || n) && null != eJ.current && eh === u.Q6.PLAYING) {
                let n = e || t ? u.KB.VISIBILITY : u.KB.FOCUS;
                e1(n), tl(u.Q6.PAUSED, n)
            }
        }, [el, a, eo, eu, ed, ec, eh, tl]), l.useEffect(() => {
            eu && W?.(eo, eh)
        }, [eo, eu, eh, W]), l.useEffect(() => {
            ec && V?.(ed, eh)
        }, [ed, ec, eh, V]);
        let [ta, ti] = l.useState(!1), ts = l.useRef(null), to = l.useRef(0);
        l.useLayoutEffect(() => {
            to.current = performance.now()
        }, []);
        let tu = l.useCallback(() => {
                null != ts.current && clearTimeout(ts.current), eh !== u.Q6.PLAYING || (ts.current = setTimeout(() => {
                    eh === u.Q6.PLAYING && ti(!0)
                }, Math.max(0, 3e3 - (performance.now() - to.current))))
            }, [eh]),
            td = l.useCallback(() => {
                ti(!1), to.current = performance.now(), tu()
            }, [tu]);
        l.useEffect(() => {
            if (eh !== u.Q6.PLAYING) {
                ti(!1), null != ts.current && clearTimeout(ts.current);
                return
            }
            return tu(), () => {
                null != ts.current && clearTimeout(ts.current)
            }
        }, [eh, tu]);
        let tc = !ta && (eb || ef || eh === u.Q6.ENDED),
            tm = l.useCallback(() => {
                let e = (0, f.qf)(eJ.current?.parentNode, eJ.current);
                null == e || (0, f._U)(e) || (e.removeEventListener(f.Wb, tm), eV(!1), Q?.(!1), tn(u.oA.MD))
            }, [Q]),
            th = () => {
                null == eJ.current || (tf(Math.max(eJ.current.currentTime - 10, 0)), eh === u.Q6.ENDED && tl(u.Q6.PAUSED, u.KB.SEEK))
            },
            tp = () => {
                if (null == eJ.current) return;
                let e = Math.min(eJ.current.currentTime + 10, te);
                tf(e), eh !== u.Q6.ENDED && e >= eJ.current.duration && tl(u.Q6.ENDED, u.KB.SEEK)
            };
        l.useEffect(() => {
            let e = eJ.current;
            return () => {
                let t = (0, f.qf)(e?.parentNode, e);
                null != t && t.removeEventListener(f.Wb, tm)
            }
        }, [tm]);
        let tf = l.useCallback(function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == eJ.current) return;
                let n = eJ.current.currentTime;
                eS(e / (eJ.current.duration ?? 1) * 100), eN(!0), e4(!1), eJ.current.currentTime = e, t && H?.(n, e)
            }, [H]),
            tx = () => {
                if (null != eJ.current) switch (eh) {
                    case u.Q6.ENDED:
                        tf(0), tl(u.Q6.PLAYING, u.KB.USER);
                        break;
                    case u.Q6.PLAYING:
                        e1(u.KB.USER), tl(u.Q6.PAUSED, u.KB.USER);
                        break;
                    default:
                        tl(u.Q6.PLAYING, u.KB.USER)
                }
            },
            tb = e => {
                e7(e)
            },
            tE = e => {
                e7(t => t?.id === e.id ? null : t)
            },
            tv = l.useCallback(() => {
                if (null == eJ.current || 0 === eJ.current.textTracks.length) return;
                let e = eJ.current.textTracks[0];
                if (e.mode = "hidden", null != e.cues)
                    for (let t = 0; t < e.cues.length; t++) {
                        let n = e.cues[t];
                        (0, g.C)(n) && (n.id = `cue-${t}`, n.onenter = () => tb(n), n.onexit = () => tE(n))
                    }
            }, []);
        l.useEffect(() => {
            if (null == eZ.current) return;
            let e = eZ.current;
            return e.addEventListener("load", tv), () => {
                null != e && e.removeEventListener("load", tv)
            }
        }, [tv]);
        let tg = e => {
            if (null != eJ.current && eh === u.Q6.PLAYING) {
                if (eR && eT(!1), ew) {
                    let e = null != eG.current ? performance.now() - eG.current : null;
                    X?.(e), ej(!1)
                }
                tl(u.Q6.PLAYING, u.KB.BUFFERING_RECOVERY)
            }
        };
        l.useEffect(() => {
            if (!eA) return;
            let e = setTimeout(() => {
                eN(!1)
            }, 1e3);
            return () => clearTimeout(e)
        }, [eA]);
        let [{
            controlBarAnimSpring: ty
        }, tS] = (0, c.zhh)(() => ({
            from: {
                controlBarAnimSpring: 0
            },
            config: T,
            onStart: () => {
                eI(!1)
            },
            onRest: e => {
                1 === e.value && eI(!0)
            }
        })), tC = (0, l.useRef)(null), [{
            captionHeightSpring: tA
        }, tN] = (0, c.zhh)(() => ({
            from: {
                captionHeightSpring: 0
            },
            config: T
        }));
        l.useEffect(() => (tN({
            captionHeightSpring: ez && null != e8 ? tC.current?.clientHeight ?? 0 : 0,
            immediate: eH
        }), () => {
            tA.stop()
        }), [ez, tN, eH, e8, tA]), l.useEffect(() => (tS({
            controlBarAnimSpring: tc || eD ? 1 : 0,
            immediate: eH
        }), () => {
            ty.stop()
        }), [tc, tS, eH, eD, ty]);
        let tR = eh === u.Q6.ENDED && null != O,
            tT = l.useCallback(function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.KB.USER;
                null != eJ.current && (tf(0), tl(u.Q6.PLAYING, e))
            }, [tf, tl]),
            tw = l.useRef(null),
            tj = l.useCallback(e => {
                td(), tw.current?.(e.nativeEvent)
            }, [td]);
        return (0, r.jsx)(c.DUT, {
            className: R.W6,
            "data-fullscreen": eW,
            "data-testid": "discord-web-video-player-container",
            tabIndex: -1,
            onMouseEnter: () => {
                ex(!0), ti(!1), to.current = performance.now(), null != ts.current && clearTimeout(ts.current)
            },
            onMouseLeave: () => {
                ex(!1), ti(!1)
            },
            onMouseMove: td,
            onKeyDown: tj,
            children: (0, r.jsxs)("div", {
                className: i()(R.NS, {
                    [R.DO]: "portrait" === w,
                    [R.r7]: "landscape" === w
                }),
                style: {
                    "--custom-footer-horizontal-padding": "20px",
                    "--custom-footer-bottom": "4px"
                },
                children: [tR && O?.({
                    replay: tT
                }), (0, r.jsxs)(p.A, {
                    ref: e => {
                        eJ.current = e, em.current = e, "function" == typeof t ? t(e) : null != t && (t.current = e)
                    },
                    autoPlay: C,
                    playsInline: !0,
                    mediaLayoutType: eW ? A.dG.STATIC : A.dG.RESPONSIVE,
                    className: i()({
                        [R.R]: tR,
                        [R.IR]: !0
                    }),
                    controls: !1,
                    poster: P,
                    preload: ee,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: e => {
                        null != eJ.current && (M?.(eJ.current.currentTime, eJ.current.duration), eC(eJ.current.currentTime / eJ.current.duration * 100))
                    },
                    onEnded: e => {
                        tl(u.Q6.ENDED, u.KB.PLAYBACK_COMPLETE), ej(!1), k?.()
                    },
                    onLoadedData: e => {
                        if (eR) {
                            let e = null != eU.current ? performance.now() - eU.current : null;
                            $?.(e), eT(!1)
                        }
                    },
                    onLoadedMetadata: e => {
                        if (null == eJ.current) return;
                        D > 0 && tf(D, !1), eK ? eJ.current.volume = 0 : eJ.current.volume = e_;
                        let t = eJ.current.duration;
                        t > 0 && isFinite(t) && e5(t)
                    },
                    onLoadStart: () => {
                        eU.current = performance.now(), F?.()
                    },
                    onPlaying: () => {
                        if (!eB.current) return;
                        let e = 0 !== N ? N : eO.current,
                            t = performance.now() - e;
                        Y?.(t), eB.current = !1
                    },
                    onWaiting: e => {
                        eG.current = performance.now(), z?.(), ej(!0)
                    },
                    onProgress: e => {
                        if (null == eJ.current) return;
                        let t = [];
                        for (let e = 0; e < eJ.current.buffered.length; e++) {
                            let n = eJ.current.buffered.start(e),
                                r = eJ.current.buffered.end(e);
                            r - n < 1 || t.push({
                                start: n / eJ.current.duration,
                                size: (r - n) / eJ.current.duration
                            })
                        }
                        eP(t)
                    },
                    onCanPlay: tg,
                    onCanPlayThrough: tg,
                    onSeeked: () => {
                        e4(!0)
                    },
                    onAbort: () => e6(u.SB.ABORT),
                    onError: () => e6(u.SB.ERROR),
                    onEmptied: () => e6(u.SB.EMPTIED),
                    onStalled: () => e6(u.SB.STALLED),
                    onClick: () => {
                        tx()
                    },
                    crossOrigin: "anonymous",
                    children: [null != U && (0, r.jsx)("track", {
                        ref: eZ,
                        src: U,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0
                    }), !e2 && (0, r.jsx)("source", {
                        onError: () => e6(u.SB.SOURCE_ERROR),
                        src: es,
                        type: "video/mp4"
                    })]
                }), (eR || ew) && eh === u.Q6.PLAYING && null != es && (0, r.jsx)("span", {
                    className: R.S,
                    "data-testid": "discord-web-video-player-loading-spinner",
                    children: (0, r.jsx)(c.y$y, {
                        type: c.y$y.Type.WANDERING_CUBES
                    })
                }), (0, r.jsx)(S.A, {
                    message: (0, S.u)({
                        hasVideoAsset: null != es,
                        playerState: eh,
                        pauseReason: e0
                    }),
                    showOverlay: null == es
                }), null != J && (0, r.jsx)(s.animated.div, {
                    className: R.MU,
                    style: {
                        opacity: (0, s.to)([ty.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${e}`),
                        visibility: (0, s.to)([ty.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => e < .1 ? "hidden" : "visible"),
                        pointerEvents: (0, s.to)([ty.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => e < .3 ? "none" : "auto")
                    },
                    children: J()
                }), null != Z && (0, r.jsx)("div", {
                    className: R.MU,
                    children: Z({
                        playerState: eh,
                        isControlBarExpanded: tc
                    })
                }), e$ && eh !== u.Q6.ENDED && null != G && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.DUT, {
                        onClick: () => {
                            eh === u.Q6.PAUSED && tl(u.Q6.PLAYING, u.KB.USER), eY(!1)
                        },
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                            className: R.BG
                        })
                    }), (0, r.jsx)(s.animated.div, {
                        className: i()(R.xr, {
                            [R.MZ]: "portrait" === w
                        }),
                        "data-testid": "discord-web-video-player-transcript",
                        style: {
                            marginBottom: (0, s.to)([ty, tA], (e, t) => `${e*tr[tt]+t}px`)
                        },
                        children: (0, r.jsx)(v.X, {
                            text: G,
                            onClose: () => {
                                eY(!1)
                            }
                        })
                    })]
                }), (0, r.jsx)(s.animated.div, {
                    className: R.Jp,
                    style: {
                        opacity: (0, s.to)([ty.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${e}`)
                    }
                }), (0, r.jsx)("div", {
                    className: i()(R.yf, {
                        [R.ZH]: eh === u.Q6.PLAYING,
                        [R.v7]: eh === u.Q6.PAUSED
                    }),
                    style: {
                        "--custom-play-pause-pop-ms": "1000ms"
                    },
                    children: eh === u.Q6.PLAYING ? (0, r.jsx)(c.udU, {
                        className: R.PK
                    }) : (0, r.jsx)(c.E$n, {
                        className: R.PK
                    })
                }, eh), ez && null != e8 && !tR && (0, r.jsx)(s.animated.div, {
                    className: R.o$,
                    ref: tC,
                    "data-testid": "discord-web-video-player-captions",
                    style: {
                        translateY: (0, s.to)([ty.to({
                            range: [0, 1],
                            output: [-20, -tr[tt]]
                        })], e => `${e}px`)
                    },
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-lg/semibold",
                        color: "always-white",
                        className: R.qh,
                        children: e8.text
                    })
                }), (0, r.jsxs)(s.animated.div, {
                    className: R.r8,
                    style: {
                        height: (0, s.to)([ty.to({
                            range: [0, 1],
                            output: [0, tr[tt]]
                        })], e => `${e}px`)
                    },
                    children: [(0, r.jsx)(s.animated.div, {
                        style: {
                            transform: (0, s.to)([ty.to({
                                range: [1, 0],
                                output: [0, 1]
                            })], e => `translateY(-${20*e}px)`)
                        },
                        children: (0, r.jsx)(E.Ay, {
                            percent: null != ey ? ey : ev,
                            animate: !0 !== eq.current && !eA,
                            interactionEnabled: ek && te > 0,
                            backgroundColor: tc ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: eh,
                            preloadedBuffers: tc ? eL : void 0,
                            durationSec: e3 > 0 ? e3 : 1,
                            isFullyVisible: tc && ek,
                            maxSeekableTime: te > 0 ? te : void 0,
                            progressGlow: er,
                            onClick: e => {
                                tf(e), eh === u.Q6.ENDED && tl(u.Q6.PLAYING, u.KB.USER)
                            },
                            onScrubBack: th,
                            onScrubForward: tp,
                            indicatorConfig: ei,
                            "data-testid": "discord-web-video-player-timeline"
                        })
                    }), (0, r.jsx)(s.animated.div, {
                        className: R.uN,
                        "data-testid": "discord-web-video-player-controls",
                        style: {
                            paddingTop: (0, s.to)([ty.to({
                                range: [0, 1],
                                output: [0, 1]
                            })], e => `${e*e*12}px`),
                            paddingBottom: (0, s.to)([ty.to({
                                range: [0, 1],
                                output: [0, 1]
                            })], e => `${e*e*12}px`),
                            pointerEvents: (0, s.to)([ty.to({
                                range: [0, 1],
                                output: [0, 1]
                            })], e => e < .3 ? "none" : "auto")
                        },
                        onFocus: () => eE(!0),
                        onBlur: () => eE(!1),
                        children: (0, r.jsx)(b.A, {
                            videoRef: eJ,
                            playerState: eh,
                            animSpring: ty,
                            visible: tc,
                            seekForwardEnabled: null == B || (eJ.current?.currentTime ?? 0) + 1 < te,
                            hideCaptionBtn: null == U,
                            hideTranscriptBtn: null == G,
                            hideSkipButtons: "portrait" === w,
                            size: tt,
                            downloadUrl: et,
                            downloadContentType: en,
                            autoFocus: ea,
                            keyDownHandlerRef: tw,
                            volume: e_,
                            muted: eK,
                            transcriptEnabled: e$,
                            captionEnabled: ez,
                            fullScreenEnabled: eW,
                            handlePlaybackBtnClick: tx,
                            handleTranscriptBtnClick: () => {
                                eY(!e$)
                            },
                            handleCaptionBtnClick: () => {
                                eX(!ez)
                            },
                            handleFullScreenBtnClick: () => {
                                let e = !eW,
                                    t = (0, f.qf)(eJ.current?.parentNode, eJ.current);
                                e && null != t ? ((0, f.tl)(t), t.addEventListener(f.Wb, tm), Q?.(!0), tn(u.oA.LG)) : e || null == t || (t.removeEventListener(f.Wb, tm), Q?.(!1), (0, f.sP)(t), tn(u.oA.MD)), eV(e)
                            },
                            handleSeekBackBtnClick: th,
                            handleSeekForwardBtnClick: tp,
                            handleControlBarPendingInteraction: eM,
                            onVolumeChange: e => {
                                eQ(e), K?.(e)
                            },
                            onMutedChange: e => {
                                eF(e)
                            }
                        })
                    })]
                })]
            })
        })
    });

function j(e) {
    let {
        poster: t,
        posterPlaceholder: n,
        posterPlaceholderVersion: a,
        orientation: i
    } = e, [s, o] = l.useState(!1), u = l.useCallback(() => o(!0), []);
    return null == t ? null : (0, r.jsx)(d.y, {
        readyState: s ? C.Rv1.READY : C.Rv1.LOADING,
        aspectRatio: "portrait" === i ? 9 / 16 : 16 / 9,
        placeholder: n,
        placeholderVersion: a ?? 1,
        placeholderStyle: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        disableSpinner: !0,
        children: (0, r.jsx)("img", {
            src: t,
            className: R.zH,
            alt: "",
            onLoad: u
        })
    })
}
let L = l.forwardRef(function(e, t) {
    let {
        active: n = !0,
        ...a
    } = e, {
        autoplay: s,
        poster: o,
        orientation: d = "landscape",
        posterPlaceholder: m,
        posterPlaceholderVersion: h,
        renderOverlay: p,
        renderPersistentOverlay: f
    } = a, [x, b] = l.useState(!1), E = l.useCallback(() => {
        b(!0)
    }, []), v = l.useRef(null);
    return n || x ? (0, r.jsx)(w, {
        ...a,
        autoplay: s || x,
        ref: t
    }) : (0, r.jsx)(c.DUT, {
        className: R.W6,
        "data-testid": "discord-web-video-player-container",
        tabIndex: 0,
        onClick: E,
        "aria-label": N.intl.string(N.t.RscU7I),
        focusProps: {
            ringTarget: v
        },
        children: (0, r.jsxs)("div", {
            className: i()(R.NS, {
                [R.DO]: "portrait" === d,
                [R.r7]: "landscape" === d
            }),
            children: [(0, r.jsx)(j, {
                poster: o,
                posterPlaceholder: m,
                posterPlaceholderVersion: h,
                orientation: d
            }), null != p && (0, r.jsx)("div", {
                className: R.MU,
                children: p()
            }), null != f && (0, r.jsx)("div", {
                className: R.MU,
                children: f({
                    playerState: u.Q6.PAUSED,
                    isControlBarExpanded: !0
                })
            }), (0, r.jsx)("div", {
                className: R.mF,
                ref: v,
                children: (0, r.jsx)(c.udU, {
                    size: "xs",
                    color: "currentColor",
                    className: R.z_
                })
            })]
        })
    })
})