/** chunk id: 880080, original params: e,t,n (module,exports,require) **/
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
    c = n(106236),
    d = n(397927),
    m = n(775602),
    p = n(892358),
    E = n(406385),
    f = n(405670),
    h = n(717415),
    v = n(261331),
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
        orientation: b,
        size: T,
        handlePlaybackBtnClick: y,
        handleTranscriptBtnClick: N,
        handleCaptionBtnClick: D,
        handleFullScreenBtnClick: I,
        handleSeekBackBtnClick: L,
        handleSeekForwardBtnClick: j,
        handleControlBarPendingInteraction: M,
        onVolumeChange: w
    } = e, {
        isFullscreenEnabled: k
    } = l.useContext(h.VideoQuestModalContext), R = (0, f.Kr)(e => e.volume), P = (0, f.Kr)(e => e.setVolume), O = (0, f.Kr)(e => e.muted), Q = (0, f.Kr)(e => e.setMuted), V = (0, f.Kr)(e => e.transcriptEnabled), U = (0, f.Kr)(e => e.captionEnabled), B = (0, o.bG)([m.A], () => m.A.useReducedMotion), F = (0, o.bG)([m.A], () => m.A.keyboardModeEnabled), [G, $] = l.useState(O ? 0 : R), [Y, K] = l.useState(!1), [H, W] = l.useState(!1), [{
        volumeAnimSpring: q
    }, z] = (0, d.zhh)(() => ({
        from: {
            volumeAnimSpring: 0
        },
        config: {
            tension: 100,
            friction: 3,
            clamp: !0
        }
    })), X = l.useRef(null), J = l.useCallback(e => {
        null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== G && $(e))
    }, [t, G]), Z = l.useCallback(() => {
        null != t.current && (0 === G ? (J(R), Q(!1), w(R)) : (P(G), J(0), Q(!0), w(0)))
    }, [t, G, J, R, Q, P, w]), ee = () => {
        K(!0)
    }, et = () => {
        K(!1)
    }, en = l.useCallback(e => {
        switch (e.key) {
            case v.TJ.PLAYBACK:
                y();
                break;
            case v.TJ.SPACE:
                F || (e.preventDefault(), y());
                break;
            case v.TJ.SEEK_BACK:
                L();
                break;
            case v.TJ.SEEK_FORWARD:
                j();
                break;
            case v.TJ.CAPTION:
                D();
                break;
            case v.TJ.FULLSCREEN:
                I();
                break;
            case v.TJ.MUTE:
                Z()
        }
    }, [D, I, y, L, j, Z, F]);
    l.useEffect(() => {
        null != X.current && X.current.focus()
    }, []), l.useEffect(() => (z({
        volumeAnimSpring: H || Y ? 1 : 0,
        immediate: B
    }), () => {
        q.stop()
    }), [H, Y, z, B, q]), l.useEffect(() => (window.addEventListener("keydown", en), () => {
        window.removeEventListener("keydown", en)
    }), [en]);
    let er = 0 === G ? d._RO : G < .5 ? d.S24 : d.HKD,
        {
            icon: el,
            label: ei
        } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: g.X3,
            children: [(0, r.jsx)(E.Ey, {
                iconComponent: el,
                animationTime: i,
                visible: S,
                ariaLabel: ei,
                tooltipLabel: ei,
                shortcut: v.TJ.PLAYBACK,
                onClick: y,
                ref: X,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), "portrait" !== b && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(E.Ey, {
                    iconComponent: p.qN,
                    animationTime: i,
                    visible: S,
                    onClick: L,
                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                    shortcut: v.TJ.SEEK_BACK,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(E.Ey, {
                    iconComponent: p.i7,
                    animationTime: i,
                    visible: S,
                    onClick: j,
                    disabled: !A,
                    ariaLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                    tooltipDelayMs: A ? E.do : 0,
                    shortcut: v.TJ.SEEK_FORWARD,
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
                onMouseEnter: ee,
                onMouseLeave: et,
                onFocus: ee,
                onBlur: et,
                className: g.RD,
                "data-testid": "discord-web-video-player-volume-control",
                children: [(0, r.jsx)(E.Ey, {
                    iconComponent: er,
                    animationTime: i,
                    visible: S,
                    onClick: Z,
                    ariaLabel: x.intl.string(x.t["eIl+AK"]),
                    tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                    shortcut: v.TJ.MUTE,
                    buttonSize: E.AU[T],
                    "data-testid": "discord-web-video-player-volume-btn"
                }), (0, r.jsx)(s.animated.div, {
                    className: g.MQ,
                    "data-testid": "discord-web-video-player-volume-slider",
                    style: {
                        opacity: (0, s.to)([q.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${S?e:Math.pow(e,8)}`),
                        width: (0, s.to)([q.to({
                            range: [0, 1],
                            output: [0, 100]
                        })], e => `${e}px`)
                    },
                    children: (0, r.jsx)(c.A, {
                        mini: !0,
                        initialValue: G,
                        keyboardStep: .1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: e => {
                            J(e), P(e), w(e), H && (W(!1), M(!1)), O && e > 0 && Q(!1)
                        },
                        asValueChanges: e => {
                            J(e), H || (W(!0), M(!0))
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
                iconComponent: d.ueQ,
                animationTime: i,
                visible: S,
                onClick: N,
                active: V && n !== v.Q6.ENDED,
                disabled: n === v.Q6.ENDED,
                ariaLabel: x.intl.string(x.t.KCzjTi),
                tooltipLabel: x.intl.string(x.t.KCzjTi),
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !C && (0, r.jsx)(E.Ey, {
                iconComponent: p.IT,
                animationTime: i,
                visible: S,
                active: U,
                onClick: D,
                ariaLabel: x.intl.string(x.t.bDSZO1),
                tooltipLabel: x.intl.string(x.t.bDSZO1),
                shortcut: v.TJ.CAPTION,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-captions-btn"
            }), (0, r.jsx)(E.Ey, {
                iconComponent: k ? d.z7w : d.TM1,
                animationTime: i,
                visible: S,
                onClick: I,
                ariaLabel: x.intl.string(x.t.vKZT5t),
                tooltipLabel: x.intl.string(x.t.vKZT5t),
                shortcut: v.TJ.FULLSCREEN,
                buttonSize: E.AU[T],
                "data-testid": "discord-web-video-player-fullscreen-btn"
            })]
        })]
    })
}