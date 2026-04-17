/** chunk id: 429364 params = (module,exports,require) **/
l.d(t, {
    T: () => h,
    p: () => m
}), l(323874), l(14289), l(35956), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(735438),
    s = l(194498),
    r = l(77729),
    d = l(372684),
    o = l(399925),
    c = l(956050);
let u = a.createContext(null);

function m(e) {
    var t, m, h;
    let p, x, g, f, v, j, b, {
            children: C,
            clip: y,
            modalContainerRef: A
        } = e,
        N = y.type === d.nQ.SCREENSHOT,
        {
            initialDuration: E,
            initialCropStart: k,
            initialCropEnd: I,
            initialCurrentTime: S
        } = (p = y.length / 1e3, x = y.editMetadata?.start ?? 0, g = y.editMetadata?.end ?? 0, f = 0 !== x || 0 !== g && g !== p, {
            initialDuration: p,
            initialCropStart: x,
            initialCropEnd: g,
            isCropped: f,
            initialCurrentTime: f ? x : p / 2
        }),
        w = a.useMemo(() => null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(y.filepath), [y.filepath]),
        [L, M] = a.useState({
            clipName: y.name,
            isTemporary: y.isTemporary ?? !1,
            cropStart: k,
            cropEnd: 0 === I ? E : I,
            voiceAudioEnabled: y.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: y.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: y.editMetadata?.soundboardAudio ?? !0
        }),
        {
            clipName: T,
            isTemporary: R,
            cropStart: D,
            cropEnd: O,
            voiceAudioEnabled: P,
            applicationAudioEnabled: U,
            soundboardAudioEnabled: G
        } = L,
        V = a.useRef(null),
        z = a.useRef(S),
        [H, $] = a.useState(E),
        [_, K] = a.useState(!1),
        [B, F] = a.useState(!1),
        X = a.useRef(new Set),
        Y = a.useRef(!1),
        [Q, q] = a.useState(null),
        [W, Z] = a.useState(null),
        [J, ee] = a.useState(null),
        [et, el] = a.useState([]),
        [en, ea] = a.useState(!1),
        ei = a.useCallback(() => ({
            ...y,
            name: T,
            editMetadata: {
                start: D,
                end: O,
                applicationAudio: U,
                voiceAudio: P,
                soundboardAudio: G
            }
        }), [y, T, D, O, U, P, G]),
        es = a.useCallback(e => {
            V.current = e, q(e.videoElement)
        }, []),
        er = a.useCallback((e, t, l) => {
            Z(e), el(t), ee(l)
        }, []),
        ed = a.useCallback(() => {
            ea(!0)
        }, []);
    t = y.filepath, a.useEffect(() => {
        let e = new Worker(new URL("/assets/" + l.u("91363"), l.b));
        return async function() {
            let l;
            try {
                l = await r.A.clips.loadClip(t)
            } catch {
                ed();
                return
            }
            e.onmessage = e => {
                let {
                    videoBuffer: t,
                    audioTracks: l,
                    audioBuffer: n
                } = e.data, a = URL.createObjectURL(new Blob([t], {
                    type: "video/mp4"
                })), i = [];
                for (let e of l) {
                    let t = URL.createObjectURL(new Blob([e.buffer], {
                        type: "audio/mp4"
                    }));
                    i.push({
                        arrayBuffer: e.buffer,
                        url: t,
                        trackName: e.trackName
                    })
                }
                er(a, i, URL.createObjectURL(new Blob([n], {
                    type: "audio/mp4"
                })))
            }, e.postMessage({
                videoBuffer: l.data.buffer
            }, [l.data.buffer])
        }(), () => {
            e.terminate()
        }
    }, [t, er, ed]), a.useEffect(() => () => {
        null != W && URL.revokeObjectURL(W)
    }, [W]), a.useEffect(() => () => {
        for (let e of et) URL.revokeObjectURL(e.url)
    }, [et]), a.useEffect(() => () => {
        null != J && URL.revokeObjectURL(J)
    }, [J]), m = y.id, h = {
        name: T,
        editMetadata: {
            start: D,
            end: O,
            voiceAudio: P,
            applicationAudio: U,
            soundboardAudio: G
        }
    }, (v = a.useRef(h)).current = h, a.useEffect(() => {
        async function e() {
            let e = {},
                t = v.current;
            N || null == w || (e = {
                thumbnail: await (0, c.m)(w, t.editMetadata.start)
            }), (0, o.Yy)(m, {
                ...t,
                ...e
            })
        }
        return () => {
            e()
        }
    }, [m, w, N, v]), a.useEffect(() => {
        H > 0 && O <= 0 && E <= 0 && M(e => ({
            ...e,
            cropEnd: H
        }))
    }, [H, O, E]);
    let eo = a.useMemo(() => O - D, [D, O]),
        ec = a.useCallback(e => (X.current.add(e), () => {
            X.current.delete(e)
        }), [X]),
        {
            setCropStart: eu,
            setCropEnd: em,
            setCrop: eh
        } = (j = a.useCallback(e => {
            let t = (0, i.clamp)(e, 0, O - 1);
            M(e => ({
                ...e,
                cropStart: t
            })), V?.current?.seek(t)
        }, [O, M, V]), {
            setCropStart: j,
            setCropEnd: a.useCallback(e => {
                let t = (0, i.clamp)(e, D + 1, H);
                M(e => ({
                    ...e,
                    cropEnd: t
                })), V?.current?.seek(t)
            }, [D, H, M, V]),
            setCrop: a.useCallback((e, t) => {
                M(l => ({
                    ...l,
                    cropStart: e,
                    cropEnd: t
                }))
            }, [M])
        }),
        {
            play: ep,
            pause: ex,
            seek: eg
        } = (b = a.useCallback(() => {
            V?.current?.play()
        }, [V]), {
            play: b,
            pause: a.useCallback(() => {
                V?.current?.pause()
            }, [V]),
            seek: a.useCallback(e => {
                V?.current?.seek(e)
            }, [V])
        });
    (0, s.A)(() => {
        let e = V.current?.videoElement;
        if (null == e || !Y.current) return;
        let t = e.currentTime;
        z.current !== t && (z.current = t, X.current.forEach(e => e.onTimeUpdate?.(t))), A.current?.style.setProperty("--custom-video-progress", `${t/e.duration*100}%`)
    }), a.useEffect(() => {
        if (null == Q) return;
        let e = () => {
                K(!0), X.current.forEach(e => e.onPlay?.())
            },
            t = () => {
                K(!1), X.current.forEach(e => e.onPause?.())
            },
            l = () => {
                $(Q.duration)
            },
            n = () => {
                F(!0), $(Q.duration), V?.current?.seek(S)
            },
            a = () => {
                Y.current = !0
            };
        return Q.addEventListener("play", e), Q.addEventListener("pause", t), Q.addEventListener("durationchange", l), Q.addEventListener("loadedmetadata", n), Q.addEventListener("seeked", a), Q.duration > 0 && $(Q.duration), Q.readyState >= 1 && (F(!0), V?.current?.seek(S)), K(!Q.paused), () => {
            Q.removeEventListener("play", e), Q.removeEventListener("pause", t), Q.removeEventListener("durationchange", l), Q.removeEventListener("loadedmetadata", n), Q.removeEventListener("seeked", a)
        }
    }, [Q, S, V, X, K, F, $, Y]);
    let ef = a.useCallback(e => {
            M(t => ({
                ...t,
                clipName: e
            }))
        }, []),
        ev = a.useCallback(e => {
            M(t => ({
                ...t,
                isTemporary: e
            }))
        }, []),
        ej = a.useCallback(e => {
            M(t => ({
                ...t,
                applicationAudioEnabled: e
            }))
        }, []),
        eb = a.useCallback(e => {
            M(t => ({
                ...t,
                voiceAudioEnabled: e
            }))
        }, []),
        eC = a.useCallback(e => {
            M(t => ({
                ...t,
                soundboardAudioEnabled: e
            }))
        }, []),
        ey = a.useMemo(() => function() {
            let [e, t] = a.useState(z.current);
            return a.useEffect(() => {
                let e = {
                    onTimeUpdate: e => {
                        t(e)
                    }
                };
                return X.current.add(e), () => {
                    X.current.delete(e)
                }
            }, []), e
        }, [z, X]),
        eA = a.useMemo(() => ({
            useCurrentTime: ey,
            duration: H,
            isPlaying: _,
            isLoaded: B,
            cropStart: D,
            cropEnd: O,
            cropDuration: eo,
            setCropStart: eu,
            setCropEnd: em,
            setCrop: eh,
            play: ep,
            pause: ex,
            seek: eg,
            subscribe: ec,
            setVideoPlayerRef: es,
            videoPlayerRef: V,
            videoURL: W,
            audioTracks: et,
            hasError: en,
            applicationAudioEnabled: U,
            setApplicationAudioEnabled: ej,
            voiceAudioEnabled: P,
            setVoiceAudioEnabled: eb,
            soundboardAudioEnabled: G,
            setSoundboardAudioEnabled: eC,
            getEditedClip: ei,
            clipName: T,
            setClipName: ef,
            isTemporary: R,
            audioURL: J,
            setIsTemporary: ev
        }), [ey, H, _, B, D, O, eo, eu, em, eh, ep, ex, eg, J, ec, es, W, et, en, U, ej, P, eb, G, eC, ei, T, ef, R, ev]);
    return (0, n.jsx)(u.Provider, {
        value: eA,
        children: C
    })
}

function h() {
    let e = a.useContext(u);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e
}