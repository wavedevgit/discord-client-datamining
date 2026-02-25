/** chunk id: 470208, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(442215),
    o = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    p = n(775602),
    E = n(406385),
    f = n(68507),
    h = n(475357),
    v = n(13229),
    x = n(985018),
    g = n(221190);

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
        size: T,
        volume: y,
        muted: N,
        transcriptEnabled: D,
        captionEnabled: I,
        fullScreenEnabled: L,
        handlePlaybackBtnClick: j,
        handleTranscriptBtnClick: M,
        handleCaptionBtnClick: w,
        handleFullScreenBtnClick: k,
        handleSeekBackBtnClick: R,
        handleSeekForwardBtnClick: P,
        handleControlBarPendingInteraction: O,
        onVolumeChange: Q,
        onMutedChange: V
    } = e, U = (0, o.bG)([p.A], () => p.A.useReducedMotion), B = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled), [F, G] = l.useState(N ? 0 : y), [$, Y] = l.useState(!1), [K, H] = l.useState(!1), [{
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
        null != t.current && (0 === F ? (X(y), V(!1), Q(y)) : (Q(F), X(0), V(!0)))
    }, [t, F, X, y, V, Q]), Z = () => {
        Y(!0)
    }, ee = () => {
        Y(!1)
    }, et = l.useCallback(e => {
        switch (e.key) {
            case c.TJ.PLAYBACK:
                j();
                break;
            case c.TJ.SPACE:
                B || (e.preventDefault(), j());
                break;
            case c.TJ.SEEK_BACK:
                R();
                break;
            case c.TJ.SEEK_FORWARD:
                P();
                break;
            case c.TJ.CAPTION:
                w();
                break;
            case c.TJ.FULLSCREEN:
                k();
                break;
            case c.TJ.MUTE:
                J()
        }
    }, [w, k, j, R, P, J, B]);
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
        } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: g.X3,
            children: [(0, r.jsx)(E.Ey, {
                iconComponent: er,
                animationTime: i,
                visible: S,
                ariaLabel: el,
                tooltipLabel: el,
                shortcut: c.TJ.PLAYBACK,
                onClick: j,
                ref: z,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), !b && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(E.Ey, {
                    iconComponent: h.q,
                    animationTime: i,
                    visible: S,
                    onClick: R,
                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                    shortcut: c.TJ.SEEK_BACK,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(E.Ey, {
                    iconComponent: v.i,
                    animationTime: i,
                    visible: S,
                    onClick: P,
                    disabled: !A,
                    ariaLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipDelayMs: A ? E.do : 0,
                    shortcut: c.TJ.SEEK_FORWARD,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-seek-forward-btn"
                })]
            })]
        }), (0, r.jsxs)(s.animated.div, {
            className: a()(g.X3, g.L1),
            style: {
                opacity: (0, s.to)([i.to({
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
                    animationTime: i,
                    visible: S,
                    onClick: J,
                    ariaLabel: x.intl.string(x.t["eIl+AK"]),
                    tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                    shortcut: c.TJ.MUTE,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-volume-btn"
                }), (0, r.jsx)(s.animated.div, {
                    className: g.MQ,
                    "data-testid": "discord-web-video-player-volume-slider",
                    style: {
                        opacity: (0, s.to)([W.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${S?e:Math.pow(e,8)}`),
                        width: (0, s.to)([W.to({
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
                            X(e), Q(e), K && (H(!1), O(!1)), N && e > 0 && V(!1)
                        },
                        asValueChanges: e => {
                            X(e), K || (H(!0), O(!0))
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
            className: a()(g.X3, g.ST),
            children: [!_ && (0, r.jsx)(E.Ey, {
                iconComponent: m.ueQ,
                animationTime: i,
                visible: S,
                onClick: M,
                active: D && n !== c.Q6.ENDED,
                disabled: n === c.Q6.ENDED,
                ariaLabel: x.intl.string(x.t.KCzjTi),
                tooltipLabel: x.intl.string(x.t.KCzjTi),
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !C && (0, r.jsx)(E.Ey, {
                iconComponent: f.I,
                animationTime: i,
                visible: S,
                active: I,
                onClick: w,
                ariaLabel: x.intl.string(x.t.bDSZO1),
                tooltipLabel: x.intl.string(x.t.bDSZO1),
                shortcut: c.TJ.CAPTION,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-captions-btn"
            }), (0, r.jsx)(E.Ey, {
                iconComponent: L ? m.z7w : m.TM1,
                animationTime: i,
                visible: S,
                onClick: k,
                ariaLabel: x.intl.string(x.t.vKZT5t),
                tooltipLabel: x.intl.string(x.t.vKZT5t),
                shortcut: c.TJ.FULLSCREEN,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-fullscreen-btn"
            })]
        })]
    })
}