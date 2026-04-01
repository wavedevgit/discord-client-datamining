/** chunk id: 429364 params = (module,exports,require) **/
a.d(t, {
    T: () => h,
    p: () => m
}), a(323874), a(14289), a(35956), a(321073);
var l = a(627968),
    n = a(64700),
    i = a(735438),
    s = a(194498),
    r = a(77729),
    o = a(372684),
    u = a(399925),
    c = a(956050);
let d = n.createContext(null);

function m(e) {
    var t, m, h;
    let p, f, g, v, x, b, j, {
            children: _,
            clip: C
        } = e,
        k = C.type === o.nQ.SCREENSHOT,
        {
            initialDuration: N,
            initialCropStart: y,
            initialCropEnd: E,
            initialCurrentTime: A
        } = (p = C.length / 1e3, f = C.editMetadata?.start ?? 0, g = C.editMetadata?.end ?? 0, v = 0 !== f || 0 !== g && g !== p, {
            initialDuration: p,
            initialCropStart: f,
            initialCropEnd: g,
            isCropped: v,
            initialCurrentTime: v ? f : p / 2
        }),
        S = n.useMemo(() => null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(C.filepath), [C.filepath]),
        [w, I] = n.useState({
            clipName: C.name,
            isTemporary: C.isTemporary ?? !1,
            cropStart: y,
            cropEnd: 0 === E ? N : E,
            voiceAudioEnabled: C.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: C.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: C.editMetadata?.soundboardAudio ?? !0
        }),
        {
            clipName: T,
            isTemporary: L,
            cropStart: R,
            cropEnd: M,
            voiceAudioEnabled: O,
            applicationAudioEnabled: U,
            soundboardAudioEnabled: D
        } = w,
        P = n.useRef(null),
        z = n.useRef(A),
        [$, G] = n.useState(N),
        [B, V] = n.useState(!1),
        [F, K] = n.useState(!1),
        H = n.useRef(new Set),
        W = n.useRef(!1),
        [J, X] = n.useState(null),
        [q, Q] = n.useState(null),
        [Y, Z] = n.useState(null),
        [ee, et] = n.useState([]),
        [ea, el] = n.useState(!1),
        en = n.useCallback(() => ({
            ...C,
            name: T,
            editMetadata: {
                start: R,
                end: M,
                applicationAudio: U,
                voiceAudio: O,
                soundboardAudio: D
            }
        }), [C, T, R, M, U, O, D]),
        ei = n.useCallback(e => {
            P.current = e, X(e.videoElement)
        }, []),
        es = n.useCallback((e, t, a) => {
            Q(e), et(t), Z(a)
        }, []),
        er = n.useCallback(() => {
            el(!0)
        }, []);
    t = C.filepath, n.useEffect(() => {
        let e = new Worker(new URL("/assets/" + a.u("91363"), a.b));
        return async function() {
            let a;
            try {
                a = await r.A.clips.loadClip(t)
            } catch {
                er();
                return
            }
            e.onmessage = e => {
                let {
                    videoBuffer: t,
                    audioTracks: a,
                    audioBuffer: l
                } = e.data, n = URL.createObjectURL(new Blob([t], {
                    type: "video/mp4"
                })), i = [];
                for (let e of a) {
                    let t = URL.createObjectURL(new Blob([e.buffer], {
                        type: "audio/mp4"
                    }));
                    i.push({
                        arrayBuffer: e.buffer,
                        url: t,
                        trackName: e.trackName
                    })
                }
                es(n, i, URL.createObjectURL(new Blob([l], {
                    type: "audio/mp4"
                })))
            }, e.postMessage({
                videoBuffer: a.data.buffer
            }, [a.data.buffer])
        }(), () => {
            e.terminate()
        }
    }, [t, es, er]), n.useEffect(() => () => {
        null != q && URL.revokeObjectURL(q)
    }, [q]), n.useEffect(() => () => {
        for (let e of ee) URL.revokeObjectURL(e.url)
    }, [ee]), n.useEffect(() => () => {
        null != Y && URL.revokeObjectURL(Y)
    }, [Y]), m = C.id, h = {
        name: T,
        editMetadata: {
            start: R,
            end: M,
            voiceAudio: O,
            applicationAudio: U,
            soundboardAudio: D
        }
    }, (x = n.useRef(h)).current = h, n.useEffect(() => {
        async function e() {
            let e = {},
                t = x.current;
            k || null == S || (e = {
                thumbnail: await (0, c.m)(S, t.editMetadata.start)
            }), (0, u.Yy)(m, {
                ...t,
                ...e
            })
        }
        return () => {
            e()
        }
    }, [m, S, k, x]), n.useEffect(() => {
        $ > 0 && M <= 0 && N <= 0 && I(e => ({
            ...e,
            cropEnd: $
        }))
    }, [$, M, N]);
    let eo = n.useMemo(() => M - R, [R, M]),
        eu = n.useCallback(e => (H.current.add(e), () => {
            H.current.delete(e)
        }), [H]),
        {
            setCropStart: ec,
            setCropEnd: ed,
            setCrop: em
        } = (b = n.useCallback(e => {
            let t = (0, i.clamp)(e, 0, M - 1);
            I(e => ({
                ...e,
                cropStart: t
            })), P?.current?.seek(t)
        }, [M, I, P]), {
            setCropStart: b,
            setCropEnd: n.useCallback(e => {
                let t = (0, i.clamp)(e, R + 1, $);
                I(e => ({
                    ...e,
                    cropEnd: t
                })), P?.current?.seek(t)
            }, [R, $, I, P]),
            setCrop: n.useCallback((e, t) => {
                I(a => ({
                    ...a,
                    cropStart: e,
                    cropEnd: t
                }))
            }, [I])
        }),
        {
            play: eh,
            pause: ep,
            seek: ef
        } = (j = n.useCallback(() => {
            P?.current?.play()
        }, [P]), {
            play: j,
            pause: n.useCallback(() => {
                P?.current?.pause()
            }, [P]),
            seek: n.useCallback(e => {
                P?.current?.seek(e)
            }, [P])
        });
    (0, s.A)(() => {
        let e = P.current?.videoElement;
        if (null == e || !W.current) return;
        let t = e.currentTime;
        z.current !== t && (z.current = t, H.current.forEach(e => e.onTimeUpdate?.(t)))
    }), n.useEffect(() => {
        if (null == J) return;
        let e = () => {
                V(!0), H.current.forEach(e => e.onPlay?.())
            },
            t = () => {
                V(!1), H.current.forEach(e => e.onPause?.())
            },
            a = () => {
                G(J.duration)
            },
            l = () => {
                K(!0), G(J.duration), P?.current?.seek(A)
            },
            n = () => {
                W.current = !0
            };
        return J.addEventListener("play", e), J.addEventListener("pause", t), J.addEventListener("durationchange", a), J.addEventListener("loadedmetadata", l), J.addEventListener("seeked", n), J.duration > 0 && G(J.duration), J.readyState >= 1 && (K(!0), P?.current?.seek(A)), V(!J.paused), () => {
            J.removeEventListener("play", e), J.removeEventListener("pause", t), J.removeEventListener("durationchange", a), J.removeEventListener("loadedmetadata", l), J.removeEventListener("seeked", n)
        }
    }, [J, A, P, H, V, K, G, W]);
    let eg = n.useCallback(e => {
            I(t => ({
                ...t,
                clipName: e
            }))
        }, []),
        ev = n.useCallback(e => {
            I(t => ({
                ...t,
                isTemporary: e
            }))
        }, []),
        ex = n.useCallback(e => {
            I(t => ({
                ...t,
                applicationAudioEnabled: e
            }))
        }, []),
        eb = n.useCallback(e => {
            I(t => ({
                ...t,
                voiceAudioEnabled: e
            }))
        }, []),
        ej = n.useCallback(e => {
            I(t => ({
                ...t,
                soundboardAudioEnabled: e
            }))
        }, []),
        e_ = n.useMemo(() => function() {
            let [e, t] = n.useState(z.current);
            return n.useEffect(() => {
                let e = {
                    onTimeUpdate: e => {
                        t(e)
                    }
                };
                return H.current.add(e), () => {
                    H.current.delete(e)
                }
            }, []), e
        }, [z, H]),
        eC = n.useMemo(() => ({
            useCurrentTime: e_,
            duration: $,
            isPlaying: B,
            isLoaded: F,
            cropStart: R,
            cropEnd: M,
            cropDuration: eo,
            setCropStart: ec,
            setCropEnd: ed,
            setCrop: em,
            play: eh,
            pause: ep,
            seek: ef,
            subscribe: eu,
            setVideoPlayerRef: ei,
            videoPlayerRef: P,
            videoURL: q,
            audioTracks: ee,
            hasError: ea,
            applicationAudioEnabled: U,
            setApplicationAudioEnabled: ex,
            voiceAudioEnabled: O,
            setVoiceAudioEnabled: eb,
            soundboardAudioEnabled: D,
            setSoundboardAudioEnabled: ej,
            getEditedClip: en,
            clipName: T,
            setClipName: eg,
            isTemporary: L,
            audioURL: Y,
            setIsTemporary: ev
        }), [e_, $, B, F, R, M, eo, ec, ed, em, eh, ep, ef, Y, eu, ei, q, ee, ea, U, ex, O, eb, D, ej, en, T, eg, L, ev]);
    return (0, l.jsx)(d.Provider, {
        value: eC,
        children: _
    })
}

function h() {
    let e = n.useContext(d);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e
}