/** chunk id: 470208, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(475539),
    o = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    p = n(775602),
    E = n(406385),
    f = n(68507),
    v = n(475357),
    h = n(13229),
    x = n(985018),
    g = n(681636);

function S(e) {
    let {
        videoRef: t,
        playerState: n,
        animSpring: s,
        visible: S,
        seekForwardEnabled: C,
        hideCaptionBtn: A,
        hideTranscriptBtn: _,
        hideSkipButtons: b,
        size: T,
        volume: y,
        muted: N,
        transcriptEnabled: D,
        captionEnabled: L,
        fullScreenEnabled: j,
        handlePlaybackBtnClick: I,
        handleTranscriptBtnClick: M,
        handleCaptionBtnClick: k,
        handleFullScreenBtnClick: R,
        handleSeekBackBtnClick: w,
        handleSeekForwardBtnClick: O,
        handleControlBarPendingInteraction: P,
        onVolumeChange: V,
        onMutedChange: Q
    } = e, U = (0, o.bG)([p.A], () => p.A.useReducedMotion), B = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled), [F, G] = i.useState(N ? 0 : y), [$, K] = i.useState(!1), [Y, H] = i.useState(!1), [{
        volumeAnimSpring: z
    }, W] = (0, m.zhh)(() => ({
        from: {
            volumeAnimSpring: 0
        },
        config: {
            tension: 100,
            friction: 3,
            clamp: !0
        }
    })), q = i.useRef(null), X = i.useCallback(e => {
        null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== F && G(e))
    }, [t, F]), J = i.useCallback(() => {
        null != t.current && (0 === F ? (X(y), Q(!1), V(y)) : (V(F), X(0), Q(!0)))
    }, [t, F, X, y, Q, V]), Z = () => {
        K(!0)
    }, ee = () => {
        K(!1)
    }, et = i.useCallback(e => {
        switch (e.key) {
            case c.TJ.PLAYBACK:
                I();
                break;
            case c.TJ.SPACE:
                B || (e.preventDefault(), I());
                break;
            case c.TJ.SEEK_BACK:
                w();
                break;
            case c.TJ.SEEK_FORWARD:
                O();
                break;
            case c.TJ.CAPTION:
                k();
                break;
            case c.TJ.FULLSCREEN:
                R();
                break;
            case c.TJ.MUTE:
                J()
        }
    }, [k, R, I, w, O, J, B]);
    i.useEffect(() => {
        null != q.current && q.current.focus()
    }, []), i.useEffect(() => (W({
        volumeAnimSpring: Y || $ ? 1 : 0,
        immediate: U
    }), () => {
        z.stop()
    }), [Y, $, W, U, z]), i.useEffect(() => (window.addEventListener("keydown", et), () => {
        window.removeEventListener("keydown", et)
    }), [et]);
    let en = 0 === F ? m._RO : F < .5 ? m.S24 : m.HKD,
        {
            icon: er,
            label: ei
        } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: g.X3,
            children: [(0, r.jsx)(E.Ey, {
                iconComponent: er,
                animationTime: s,
                visible: S,
                ariaLabel: ei,
                tooltipLabel: ei,
                shortcut: c.TJ.PLAYBACK,
                onClick: I,
                ref: q,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), !b && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(E.Ey, {
                    iconComponent: v.q,
                    animationTime: s,
                    visible: S,
                    onClick: w,
                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                    shortcut: c.TJ.SEEK_BACK,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(E.Ey, {
                    iconComponent: h.i,
                    animationTime: s,
                    visible: S,
                    onClick: O,
                    disabled: !C,
                    ariaLabel: C ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipLabel: C ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipDelayMs: C ? E.do : 0,
                    shortcut: c.TJ.SEEK_FORWARD,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-seek-forward-btn"
                })]
            })]
        }), (0, r.jsxs)(a.animated.div, {
            className: l()(g.X3, g.L1),
            style: {
                opacity: (0, a.to)([s.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${S?e:Math.pow(e,8)}`)
            },
            children: [(0, r.jsxs)("div", {
                onMouseEnter: Z,
                onMouseLeave: ee,
                onFocus: Z,
                onBlur: ee,
                className: g.RD,
                "data-testid": "discord-web-video-player-volume-control",
                children: [(0, r.jsx)(E.Ey, {
                    iconComponent: en,
                    animationTime: s,
                    visible: S,
                    onClick: J,
                    ariaLabel: x.intl.string(x.t["eIl+AK"]),
                    tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                    shortcut: c.TJ.MUTE,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-volume-btn"
                }), (0, r.jsx)(a.animated.div, {
                    className: g.MQ,
                    "data-testid": "discord-web-video-player-volume-slider",
                    style: {
                        opacity: (0, a.to)([z.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${S?e:Math.pow(e,8)}`),
                        width: (0, a.to)([z.to({
                            range: [0, 1],
                            output: [0, 100]
                        })], e => `${e}px`)
                    },
                    children: (0, r.jsx)(d.A, {
                        mini: !0,
                        initialValue: F,
                        keyboardStep: .1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: e => {
                            X(e), V(e), Y && (H(!1), P(!1)), N && e > 0 && Q(!1)
                        },
                        asValueChanges: e => {
                            X(e), Y || (H(!0), P(!0))
                        },
                        fillStyles: {
                            backgroundColor: u.A.colors.WHITE.css
                        },
                        orientation: "horizontal",
                        "aria-label": x.intl.string(x.t["eIl+AK"])
                    })
                })]
            }), (0, r.jsx)(E.QF, {
                current: t?.current?.currentTime,
                duration: t?.current?.duration
            })]
        }), (0, r.jsxs)("div", {
            className: l()(g.X3, g.ST),
            children: [!_ && (0, r.jsx)(E.Ey, {
                iconComponent: m.ueQ,
                animationTime: s,
                visible: S,
                onClick: M,
                active: D && n !== c.Q6.ENDED,
                disabled: n === c.Q6.ENDED,
                ariaLabel: x.intl.string(x.t.KCzjTi),
                tooltipLabel: x.intl.string(x.t.KCzjTi),
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !A && (0, r.jsx)(E.Ey, {
                iconComponent: f.I,
                animationTime: s,
                visible: S,
                active: L,
                onClick: k,
                ariaLabel: x.intl.string(x.t.bDSZO1),
                tooltipLabel: x.intl.string(x.t.bDSZO1),
                shortcut: c.TJ.CAPTION,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-captions-btn"
            }), (0, r.jsx)(E.Ey, {
                iconComponent: j ? m.z7w : m.TM1,
                animationTime: s,
                visible: S,
                onClick: R,
                ariaLabel: x.intl.string(x.t.vKZT5t),
                tooltipLabel: x.intl.string(x.t.vKZT5t),
                shortcut: c.TJ.FULLSCREEN,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-fullscreen-btn"
            })]
        })]
    })
}