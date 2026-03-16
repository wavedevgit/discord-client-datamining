/** chunk id: 470208 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(497766),
    o = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    p = n(775602),
    f = n(406385),
    E = n(68507),
    h = n(475357),
    v = n(13229),
    x = n(985018),
    g = n(681636);

function S(e) {
    let {
        videoRef: t,
        playerState: n,
        animSpring: i,
        visible: S,
        seekForwardEnabled: A,
        hideCaptionBtn: C,
        hideTranscriptBtn: _,
        hideSkipButtons: b,
        size: y,
        volume: T,
        muted: N,
        transcriptEnabled: D,
        captionEnabled: R,
        fullScreenEnabled: L,
        handlePlaybackBtnClick: M,
        handleTranscriptBtnClick: j,
        handleCaptionBtnClick: I,
        handleFullScreenBtnClick: w,
        handleSeekBackBtnClick: k,
        handleSeekForwardBtnClick: O,
        handleControlBarPendingInteraction: P,
        onVolumeChange: Q,
        onMutedChange: U
    } = e, V = (0, o.bG)([p.A], () => p.A.useReducedMotion), B = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled), [F, G] = l.useState(N ? 0 : T), [K, $] = l.useState(!1), [Y, H] = l.useState(!1), [{
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
    })), q = l.useRef(null), X = l.useCallback(e => {
        null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== F && G(e))
    }, [t, F]), J = l.useCallback(() => {
        null != t.current && (0 === F ? (X(T), U(!1), Q(T)) : (Q(F), X(0), U(!0)))
    }, [t, F, X, T, U, Q]), Z = () => {
        $(!0)
    }, ee = () => {
        $(!1)
    }, et = l.useCallback(e => {
        switch (e.key) {
            case c.TJ.PLAYBACK:
                M();
                break;
            case c.TJ.SPACE:
                B || (e.preventDefault(), M());
                break;
            case c.TJ.SEEK_BACK:
                k();
                break;
            case c.TJ.SEEK_FORWARD:
                O();
                break;
            case c.TJ.CAPTION:
                I();
                break;
            case c.TJ.FULLSCREEN:
                w();
                break;
            case c.TJ.MUTE:
                J()
        }
    }, [I, w, M, k, O, J, B]);
    l.useEffect(() => {
        null != q.current && q.current.focus()
    }, []), l.useEffect(() => (W({
        volumeAnimSpring: Y || K ? 1 : 0,
        immediate: V
    }), () => {
        z.stop()
    }), [Y, K, W, V, z]), l.useEffect(() => (window.addEventListener("keydown", et), () => {
        window.removeEventListener("keydown", et)
    }), [et]);
    let en = 0 === F ? m._RO : F < .5 ? m.S24 : m.HKD,
        {
            icon: er,
            label: el
        } = f.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: g.X3,
            children: [(0, r.jsx)(f.Ey, {
                iconComponent: er,
                animationTime: i,
                visible: S,
                ariaLabel: el,
                tooltipLabel: el,
                shortcut: c.TJ.PLAYBACK,
                onClick: M,
                ref: q,
                buttonSize: f.AU[y],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), !b && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(f.Ey, {
                    iconComponent: h.q,
                    animationTime: i,
                    visible: S,
                    onClick: k,
                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                    shortcut: c.TJ.SEEK_BACK,
                    buttonSize: f.AU[y],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(f.Ey, {
                    iconComponent: v.i,
                    animationTime: i,
                    visible: S,
                    onClick: O,
                    disabled: !A,
                    ariaLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipDelayMs: A ? f.do : 0,
                    shortcut: c.TJ.SEEK_FORWARD,
                    buttonSize: f.AU[y],
                    "data-testid": "discord-web-video-player-seek-forward-btn"
                })]
            })]
        }), (0, r.jsxs)(a.animated.div, {
            className: s()(g.X3, g.L1),
            style: {
                opacity: (0, a.to)([i.to({
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
                children: [(0, r.jsx)(f.Ey, {
                    iconComponent: en,
                    animationTime: i,
                    visible: S,
                    onClick: J,
                    ariaLabel: x.intl.string(x.t["eIl+AK"]),
                    tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                    shortcut: c.TJ.MUTE,
                    buttonSize: f.AU[y],
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
                            X(e), Q(e), Y && (H(!1), P(!1)), N && e > 0 && U(!1)
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
            }), (0, r.jsx)(f.QF, {
                current: t?.current?.currentTime,
                duration: t?.current?.duration
            })]
        }), (0, r.jsxs)("div", {
            className: s()(g.X3, g.ST),
            children: [!_ && (0, r.jsx)(f.Ey, {
                iconComponent: m.ueQ,
                animationTime: i,
                visible: S,
                onClick: j,
                active: D && n !== c.Q6.ENDED,
                disabled: n === c.Q6.ENDED,
                ariaLabel: x.intl.string(x.t.KCzjTi),
                tooltipLabel: x.intl.string(x.t.KCzjTi),
                buttonSize: f.AU[y],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !C && (0, r.jsx)(f.Ey, {
                iconComponent: E.I,
                animationTime: i,
                visible: S,
                active: R,
                onClick: I,
                ariaLabel: x.intl.string(x.t.bDSZO1),
                tooltipLabel: x.intl.string(x.t.bDSZO1),
                shortcut: c.TJ.CAPTION,
                buttonSize: f.AU[y],
                "data-testid": "discord-web-video-player-captions-btn"
            }), (0, r.jsx)(f.Ey, {
                iconComponent: L ? m.z7w : m.TM1,
                animationTime: i,
                visible: S,
                onClick: w,
                ariaLabel: x.intl.string(x.t.vKZT5t),
                tooltipLabel: x.intl.string(x.t.vKZT5t),
                shortcut: c.TJ.FULLSCREEN,
                buttonSize: f.AU[y],
                "data-testid": "discord-web-video-player-fullscreen-btn"
            })]
        })]
    })
}