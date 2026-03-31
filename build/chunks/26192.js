/** chunk id: 26192 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(382222),
    o = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(397927),
    m = n(775602),
    E = n(892358),
    _ = n(406385),
    p = n(405670),
    f = n(795068),
    v = n(163961),
    S = n(985018),
    h = n(655833);

function g(e) {
    let {
        videoRef: t,
        playerState: n,
        animSpring: s,
        visible: g,
        seekForwardEnabled: A,
        hideCaptionBtn: C,
        hideTranscriptBtn: T,
        orientation: b,
        size: x,
        handlePlaybackBtnClick: D,
        handleTranscriptBtnClick: y,
        handleCaptionBtnClick: I,
        handleFullScreenBtnClick: L,
        handleSeekBackBtnClick: N,
        handleSeekForwardBtnClick: R,
        handleControlBarPendingInteraction: O,
        onVolumeChange: k
    } = e, {
        isFullscreenEnabled: M
    } = i.useContext(f.a), w = (0, p.Kr)(e => e.volume), P = (0, p.Kr)(e => e.setVolume), j = (0, p.Kr)(e => e.muted), V = (0, p.Kr)(e => e.setMuted), U = (0, p.Kr)(e => e.transcriptEnabled), Q = (0, p.Kr)(e => e.captionEnabled), B = (0, o.bG)([m.A], () => m.A.useReducedMotion), F = (0, o.bG)([m.A], () => m.A.keyboardModeEnabled), [K, Y] = i.useState(j ? 0 : w), [H, $] = i.useState(!1), [G, q] = i.useState(!1), [{
        volumeAnimSpring: W
    }, z] = (0, d.zhh)(() => ({
        from: {
            volumeAnimSpring: 0
        },
        config: {
            tension: 100,
            friction: 3,
            clamp: !0
        }
    })), J = i.useRef(null), X = i.useCallback(e => {
        null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== K && Y(e))
    }, [t, K]), Z = i.useCallback(() => {
        null != t.current && (0 === K ? (V(!1), 0 === w ? (P(E.$J), X(E.$J), k(E.$J)) : (X(w), k(w))) : (P(K), X(0), V(!0), k(0)))
    }, [t, K, X, w, V, P, k]), ee = () => {
        $(!0)
    }, et = () => {
        $(!1)
    }, en = i.useCallback(e => {
        switch (e.key) {
            case v.TJ.PLAYBACK:
                D();
                break;
            case v.TJ.SPACE:
                F || (e.preventDefault(), D());
                break;
            case v.TJ.SEEK_BACK:
                N();
                break;
            case v.TJ.SEEK_FORWARD:
                R();
                break;
            case v.TJ.CAPTION:
                I();
                break;
            case v.TJ.FULLSCREEN:
                L();
                break;
            case v.TJ.MUTE:
                Z()
        }
    }, [I, L, D, N, R, Z, F]);
    i.useEffect(() => {
        null != J.current && J.current.focus()
    }, []), i.useEffect(() => (z({
        volumeAnimSpring: G || H ? 1 : 0,
        immediate: B
    }), () => {
        W.stop()
    }), [G, H, z, B, W]), i.useEffect(() => (window.addEventListener("keydown", en), () => {
        window.removeEventListener("keydown", en)
    }), [en]);
    let er = 0 === K ? d._RO : K < .5 ? d.S24 : d.HKD,
        {
            icon: ei,
            label: es
        } = _.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: h.X3,
            children: [(0, r.jsx)(_.Ey, {
                iconComponent: ei,
                animationTime: s,
                visible: g,
                ariaLabel: es,
                tooltipLabel: es,
                shortcut: v.TJ.PLAYBACK,
                onClick: D,
                ref: J,
                buttonSize: _.AU[x],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), "portrait" !== b && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(_.Ey, {
                    iconComponent: E.qN,
                    animationTime: s,
                    visible: g,
                    onClick: N,
                    ariaLabel: S.intl.string(S.t.r9s3Uv),
                    tooltipLabel: S.intl.string(S.t.r9s3Uv),
                    shortcut: v.TJ.SEEK_BACK,
                    buttonSize: _.AU[x],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(_.Ey, {
                    iconComponent: E.i7,
                    animationTime: s,
                    visible: g,
                    onClick: R,
                    disabled: !A,
                    ariaLabel: A ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
                    tooltipLabel: A ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
                    tooltipDelayMs: A ? _.do : 0,
                    shortcut: v.TJ.SEEK_FORWARD,
                    buttonSize: _.AU[x],
                    "data-testid": "discord-web-video-player-seek-forward-btn"
                })]
            })]
        }), (0, r.jsxs)(l.animated.div, {
            className: a()(h.X3, h.L1),
            style: {
                opacity: (0, l.to)([s.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${g?e:Math.pow(e,8)}`)
            },
            children: [(0, r.jsxs)("div", {
                onMouseEnter: ee,
                onMouseLeave: et,
                onFocus: ee,
                onBlur: et,
                className: h.RD,
                "data-testid": "discord-web-video-player-volume-control",
                children: [(0, r.jsx)(_.Ey, {
                    iconComponent: er,
                    animationTime: s,
                    visible: g,
                    onClick: Z,
                    ariaLabel: S.intl.string(S.t["eIl+AK"]),
                    tooltipLabel: S.intl.string(S.t["eIl+AK"]),
                    shortcut: v.TJ.MUTE,
                    buttonSize: _.AU[x],
                    "data-testid": "discord-web-video-player-volume-btn"
                }), (0, r.jsx)(l.animated.div, {
                    className: h.MQ,
                    "data-testid": "discord-web-video-player-volume-slider",
                    style: {
                        opacity: (0, l.to)([W.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${g?e:Math.pow(e,8)}`),
                        width: (0, l.to)([W.to({
                            range: [0, 1],
                            output: [0, 100]
                        })], e => `${e}px`)
                    },
                    children: (0, r.jsx)(c.A, {
                        mini: !0,
                        value: K,
                        keyboardStep: .1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: e => {
                            X(e), P(e), k(e), G && (q(!1), O(!1)), j && e > 0 ? V(!1) : j || 0 !== e || V(!0)
                        },
                        asValueChanges: e => {
                            X(e), G || (q(!0), O(!0))
                        },
                        fillStyles: {
                            backgroundColor: u.A.colors.WHITE.css
                        },
                        orientation: "horizontal",
                        "aria-label": S.intl.string(S.t["eIl+AK"])
                    })
                })]
            }), (0, r.jsx)(_.QF, {
                current: t?.current?.currentTime,
                duration: t?.current?.duration
            })]
        }), (0, r.jsxs)("div", {
            className: a()(h.X3, h.ST),
            children: [!T && (0, r.jsx)(_.Ey, {
                iconComponent: d.ueQ,
                animationTime: s,
                visible: g,
                onClick: y,
                active: U && n !== v.Q6.ENDED,
                disabled: n === v.Q6.ENDED,
                ariaLabel: S.intl.string(S.t.KCzjTi),
                tooltipLabel: S.intl.string(S.t.KCzjTi),
                buttonSize: _.AU[x],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !C && (0, r.jsx)(_.Ey, {
                iconComponent: E.IT,
                animationTime: s,
                visible: g,
                active: Q,
                onClick: I,
                ariaLabel: S.intl.string(S.t.bDSZO1),
                tooltipLabel: S.intl.string(S.t.bDSZO1),
                shortcut: v.TJ.CAPTION,
                buttonSize: _.AU[x],
                "data-testid": "discord-web-video-player-captions-btn"
            }), (0, r.jsx)(_.Ey, {
                iconComponent: M ? d.z7w : d.TM1,
                animationTime: s,
                visible: g,
                onClick: L,
                ariaLabel: S.intl.string(S.t.vKZT5t),
                tooltipLabel: S.intl.string(S.t.vKZT5t),
                shortcut: v.TJ.FULLSCREEN,
                buttonSize: _.AU[x],
                "data-testid": "discord-web-video-player-fullscreen-btn"
            })]
        })]
    })
}