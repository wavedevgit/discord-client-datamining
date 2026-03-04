/** chunk id: 470208, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(396181),
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

function A(e) {
    let {
        videoRef: t,
        playerState: n,
        animSpring: i,
        visible: A,
        seekForwardEnabled: S,
        hideCaptionBtn: C,
        hideTranscriptBtn: _,
        hideSkipButtons: b,
        size: y,
        volume: T,
        muted: N,
        transcriptEnabled: D,
        captionEnabled: R,
        fullScreenEnabled: L,
        handlePlaybackBtnClick: I,
        handleTranscriptBtnClick: M,
        handleCaptionBtnClick: j,
        handleFullScreenBtnClick: w,
        handleSeekBackBtnClick: k,
        handleSeekForwardBtnClick: O,
        handleControlBarPendingInteraction: P,
        onVolumeChange: Q,
        onMutedChange: V
    } = e, U = (0, o.bG)([p.A], () => p.A.useReducedMotion), B = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled), [F, G] = l.useState(N ? 0 : T), [$, Y] = l.useState(!1), [K, H] = l.useState(!1), [{
        volumeAnimSpring: W
    }, q] = (0, m.zhh)(() => ({
        from: {
            volumeAnimSpring: 0
        },
        config: {
            tension: 100,
            friction: 3,
            clamp: !0
        }
    })), z = l.useRef(null), X = l.useCallback(e => {
        null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== F && G(e))
    }, [t, F]), J = l.useCallback(() => {
        null != t.current && (0 === F ? (X(T), V(!1), Q(T)) : (Q(F), X(0), V(!0)))
    }, [t, F, X, T, V, Q]), Z = () => {
        Y(!0)
    }, ee = () => {
        Y(!1)
    }, et = l.useCallback(e => {
        switch (e.key) {
            case c.TJ.PLAYBACK:
                I();
                break;
            case c.TJ.SPACE:
                B || (e.preventDefault(), I());
                break;
            case c.TJ.SEEK_BACK:
                k();
                break;
            case c.TJ.SEEK_FORWARD:
                O();
                break;
            case c.TJ.CAPTION:
                j();
                break;
            case c.TJ.FULLSCREEN:
                w();
                break;
            case c.TJ.MUTE:
                J()
        }
    }, [j, w, I, k, O, J, B]);
    l.useEffect(() => {
        null != z.current && z.current.focus()
    }, []), l.useEffect(() => (q({
        volumeAnimSpring: K || $ ? 1 : 0,
        immediate: U
    }), () => {
        W.stop()
    }), [K, $, q, U, W]), l.useEffect(() => (window.addEventListener("keydown", et), () => {
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
                visible: A,
                ariaLabel: el,
                tooltipLabel: el,
                shortcut: c.TJ.PLAYBACK,
                onClick: I,
                ref: z,
                buttonSize: f.AU[y],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), !b && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(f.Ey, {
                    iconComponent: h.q,
                    animationTime: i,
                    visible: A,
                    onClick: k,
                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                    shortcut: c.TJ.SEEK_BACK,
                    buttonSize: f.AU[y],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(f.Ey, {
                    iconComponent: v.i,
                    animationTime: i,
                    visible: A,
                    onClick: O,
                    disabled: !S,
                    ariaLabel: S ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipLabel: S ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipDelayMs: S ? f.do : 0,
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
                })], e => `${A?e:Math.pow(e,8)}`)
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
                    visible: A,
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
                        opacity: (0, a.to)([W.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${A?e:Math.pow(e,8)}`),
                        width: (0, a.to)([W.to({
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
                            X(e), Q(e), K && (H(!1), P(!1)), N && e > 0 && V(!1)
                        },
                        asValueChanges: e => {
                            X(e), K || (H(!0), P(!0))
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
                visible: A,
                onClick: M,
                active: D && n !== c.Q6.ENDED,
                disabled: n === c.Q6.ENDED,
                ariaLabel: x.intl.string(x.t.KCzjTi),
                tooltipLabel: x.intl.string(x.t.KCzjTi),
                buttonSize: f.AU[y],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !C && (0, r.jsx)(f.Ey, {
                iconComponent: E.I,
                animationTime: i,
                visible: A,
                active: R,
                onClick: j,
                ariaLabel: x.intl.string(x.t.bDSZO1),
                tooltipLabel: x.intl.string(x.t.bDSZO1),
                shortcut: c.TJ.CAPTION,
                buttonSize: f.AU[y],
                "data-testid": "discord-web-video-player-captions-btn"
            }), (0, r.jsx)(f.Ey, {
                iconComponent: L ? m.z7w : m.TM1,
                animationTime: i,
                visible: A,
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