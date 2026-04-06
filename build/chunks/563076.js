/** chunk id: 563076 params = (module,exports,require) **/
l.d(t, {
    A: () => g
}), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(735438),
    s = l(194498),
    r = l(607470),
    o = l(372684),
    d = l(226421),
    c = l(252449),
    u = l(429364),
    m = l(696016),
    h = l(14363),
    p = l(695241);

function x(e, t) {
    let {
        applicationAudioEnabled: l,
        voiceAudioEnabled: a,
        soundboardAudioEnabled: n,
        isVoiceClip: i
    } = t;
    if (!i && l && a && n)
        if (e.includes(m.gC.ALL)) return !1;
        else return !0;
    return e.includes(m.gC.APPLICATION) ? !l : e.includes(m.gC.VOICE) ? !a : !e.includes(m.gC.SOUNDBOARD) || !n
}

function f(e) {
    let {
        setRef: t,
        audioTrackLabel: l,
        src: i,
        muted: s
    } = e, r = n.useCallback(e => {
        t(e, l)
    }, [t, l]), o = n.useCallback(e => {
        Object.values(e.currentTarget.audioTracks).forEach(e => {
            e.enabled = l === e.label
        })
    }, [l]);
    return (0, a.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: r,
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: p.R,
        onLoadedMetadata: o
    })
}
let g = n.forwardRef(function(e, t) {
    let {
        clip: l,
        applicationAudioEnabled: g,
        voiceAudioEnabled: v,
        soundboardAudioEnabled: j
    } = e, {
        cropStart: b,
        cropEnd: C,
        setVideoPlayerRef: y,
        videoURL: N,
        audioURL: A
    } = (0, u.T)(), E = n.useRef({}), k = n.useRef(!1), [I, S] = n.useState([]), w = n.useCallback(() => {
        let e = E.current.main;
        if (null == e) return;
        let t = (0, i.round)(e.currentTime, 3),
            l = (0, i.round)(b, 3);
        if (t >= (null != C ? (0, i.round)(C, 3) : (0, i.round)(e.duration, 3)) || t < l) {
            for (let e of Object.values(E.current)) null != e && (e.currentTime = b);
            return !0
        }
    }, [b, C]), L = n.useCallback(e => {
        let t = [];
        for (let l of Object.values(e.currentTarget.audioTracks)) l.label.includes(m.gC.APPLICATION) ? l.enabled = !0 : l.label.includes(m.gC.VOICE) || l.label.includes(m.gC.SOUNDBOARD) ? (l.enabled = !1, t.includes(l.label) || t.push(l.label)) : l.enabled = !1;
        S(t)
    }, []);
    (0, s.A)(() => {
        k.current && w() && M()
    });
    let M = n.useCallback(() => {
            for (let e of (k.current = !0, w(), Object.values(E.current))) null != e && e.play()
        }, [w]),
        T = n.useCallback(() => {
            for (let e of Object.values(E.current)) null != e && e.pause()
        }, []),
        R = n.useCallback(e => {
            for (let t of (E.current.main?.paused && (k.current = !1), Object.values(E.current))) null != t && (t.currentTime = e)
        }, []),
        D = n.useCallback(() => {
            E.current.main?.paused ? M() : T()
        }, [M, T]),
        O = n.useCallback(e => {
            E.current.main = e
        }, []),
        P = n.useCallback((e, t) => {
            E.current[t] = e
        }, []);
    n.useImperativeHandle(t, () => {
        let e = {
            play: M,
            seek: R,
            pause: T,
            videoElement: E.current.main
        };
        return y(e), e
    }, [M, R, T, y]);
    let U = n.useCallback(() => {
        R(b)
    }, [R, b]);
    if (null == N) return null;
    let G = l.type === o.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: h.DV,
        children: [G ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("audio", {
                ref: O,
                src: N,
                muted: !0,
                preload: "auto"
            }), (0, a.jsx)(d.A, {
                className: h.Ap
            })]
        }) : (0, a.jsx)(r.A, {
            onClick: D,
            className: h.Ap,
            ref: O,
            src: N,
            muted: x(":all", {
                applicationAudioEnabled: g,
                voiceAudioEnabled: v,
                soundboardAudioEnabled: j,
                isVoiceClip: G
            }),
            preload: "auto",
            onLoadedData: U
        }), (0, a.jsx)(c.E, {
            soundboardAudioEnabled: j,
            voiceAudioEnabled: v,
            clip: l
        }), (0, a.jsx)("audio", {
            id: "ClipsPlayerAudioTrack:application",
            src: A ?? void 0,
            muted: x(":application", {
                applicationAudioEnabled: g,
                voiceAudioEnabled: v,
                soundboardAudioEnabled: j,
                isVoiceClip: G
            }),
            className: p.R,
            preload: "auto",
            ref: e => P(e, "main:application"),
            onLoadedMetadata: L
        }), I.map(e => (0, a.jsx)(f, {
            setRef: P,
            audioTrackLabel: e,
            src: A,
            muted: x(e, {
                applicationAudioEnabled: g,
                voiceAudioEnabled: v,
                soundboardAudioEnabled: j,
                isVoiceClip: G
            })
        }, e))]
    })
})