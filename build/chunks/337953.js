/** chunk id: 337953 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(311907),
    u = n(827734),
    d = n(876230),
    c = n(106236),
    m = n(397927),
    h = n(775602),
    p = n(954571),
    f = n(768146),
    x = n(91034),
    b = n(710434),
    E = n(634156),
    v = n(652215),
    g = n(961432),
    y = n(985018),
    S = n(246878);

function C(e) {
    let {
        videoRef: t,
        playerState: n,
        animSpring: a,
        visible: C,
        seekForwardEnabled: A,
        hideCaptionBtn: N,
        hideTranscriptBtn: R,
        hideSkipButtons: T,
        size: w,
        downloadUrl: j,
        downloadContentType: L,
        autoFocus: P = !1,
        keyDownHandlerRef: D,
        volume: M,
        muted: k,
        transcriptEnabled: I,
        captionEnabled: B,
        fullScreenEnabled: U,
        handlePlaybackBtnClick: G,
        handleTranscriptBtnClick: O,
        handleCaptionBtnClick: _,
        handleFullScreenBtnClick: Q,
        handleSeekBackBtnClick: K,
        handleSeekForwardBtnClick: F,
        handleControlBarPendingInteraction: $,
        onVolumeChange: Y,
        onMutedChange: z
    } = e, X = (0, o.bG)([h.A], () => h.A.useReducedMotion), W = (0, o.bG)([h.A], () => h.A.keyboardModeEnabled), [V, H] = l.useState(k ? 0 : M), [J, Z] = l.useState(!1), [q, ee] = l.useState(!1), [{
        volumeAnimSpring: et
    }, en] = (0, m.zhh)(() => ({
        from: {
            volumeAnimSpring: 0
        },
        config: {
            tension: 100,
            friction: 3,
            clamp: !0
        }
    })), er = l.useRef(null), el = l.useCallback(() => {
        if (null == j) return;
        let e = L?.split("/");
        p.default.track(v.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
            attachment_type: e?.[0],
            attachment_subtype: e?.[1]
        }), window.open(j, "_blank")
    }, [j, L]), ea = l.useCallback(e => {
        null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== V && H(e))
    }, [t, V]), ei = l.useCallback(() => {
        if (null != t.current)
            if (0 === V) {
                let e = 0 === M ? .3 : M;
                ea(e), z(!1), Y(e)
            } else Y(V), ea(0), z(!0)
    }, [t, V, ea, M, z, Y]), es = () => {
        Z(!0)
    }, eo = () => {
        Z(!1)
    }, eu = l.useCallback(e => {
        switch (e.key) {
            case d.TJ.PLAYBACK:
                G();
                break;
            case d.TJ.SPACE:
                W || (e.preventDefault(), G());
                break;
            case d.TJ.SEEK_BACK:
                K();
                break;
            case d.TJ.SEEK_FORWARD:
                F();
                break;
            case d.TJ.CAPTION:
                _();
                break;
            case d.TJ.FULLSCREEN:
                Q();
                break;
            case d.TJ.MUTE:
                ei()
        }
    }, [_, Q, G, K, F, ei, W]);
    l.useEffect(() => {
        P && null != er.current && er.current.focus()
    }, [P]), l.useEffect(() => (null != D && (D.current = eu), () => {
        null != D && (D.current = null)
    }), [eu, D]), l.useEffect(() => (en({
        volumeAnimSpring: q || J ? 1 : 0,
        immediate: X
    }), () => {
        et.stop()
    }), [q, J, en, X, et]);
    let ed = 0 === V ? m._RO : V < .5 ? m.S24 : m.HKD,
        {
            icon: ec,
            label: em
        } = f.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: S.X3,
            children: [(0, r.jsx)(f.Ey, {
                iconComponent: ec,
                animationTime: a,
                visible: C,
                ariaLabel: em,
                tooltipLabel: em,
                shortcut: d.TJ.PLAYBACK,
                onClick: G,
                ref: er,
                buttonSize: f.AU[w],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), !T && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(f.Ey, {
                    iconComponent: b.q,
                    animationTime: a,
                    visible: C,
                    onClick: K,
                    ariaLabel: y.intl.string(g.default["dRVF+Z"]),
                    tooltipLabel: y.intl.string(g.default["dRVF+Z"]),
                    shortcut: d.TJ.SEEK_BACK,
                    buttonSize: f.AU[w],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(f.Ey, {
                    iconComponent: E.i,
                    animationTime: a,
                    visible: C,
                    onClick: F,
                    disabled: !A,
                    ariaLabel: A ? y.intl.string(g.default.yV2FLL) : y.intl.string(g.default.YWbiPw),
                    tooltipLabel: A ? y.intl.string(g.default.yV2FLL) : y.intl.string(g.default.YWbiPw),
                    tooltipDelayMs: A ? f.do : 0,
                    shortcut: d.TJ.SEEK_FORWARD,
                    buttonSize: f.AU[w],
                    "data-testid": "discord-web-video-player-seek-forward-btn"
                })]
            })]
        }), (0, r.jsxs)(s.animated.div, {
            className: i()(S.X3, S.L1),
            style: {
                opacity: (0, s.to)([a.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${C?e:Math.pow(e,8)}`)
            },
            children: [(0, r.jsxs)("div", {
                onMouseEnter: es,
                onMouseLeave: eo,
                onFocus: es,
                onBlur: eo,
                className: S.RD,
                "data-testid": "discord-web-video-player-volume-control",
                children: [(0, r.jsx)(f.Ey, {
                    iconComponent: ed,
                    animationTime: a,
                    visible: C,
                    onClick: ei,
                    ariaLabel: y.intl.string(g.default.XiLvuG),
                    tooltipLabel: y.intl.string(g.default.XiLvuG),
                    shortcut: d.TJ.MUTE,
                    buttonSize: f.AU[w],
                    "data-testid": "discord-web-video-player-volume-btn"
                }), (0, r.jsx)(s.animated.div, {
                    className: S.MQ,
                    "data-testid": "discord-web-video-player-volume-slider",
                    style: {
                        opacity: (0, s.to)([et.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${C?e:Math.pow(e,8)}`),
                        width: (0, s.to)([et.to({
                            range: [0, 1],
                            output: [0, 100]
                        })], e => `${e}px`)
                    },
                    children: (0, r.jsx)(c.A, {
                        mini: !0,
                        value: V,
                        keyboardStep: .1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: e => {
                            ea(e), Y(e), q && (ee(!1), $(!1)), k && e > 0 ? z(!1) : k || 0 !== e || z(!0)
                        },
                        asValueChanges: e => {
                            ea(e), q || (ee(!0), $(!0))
                        },
                        fillStyles: {
                            backgroundColor: u.A.colors.WHITE.css
                        },
                        orientation: "horizontal",
                        "aria-label": y.intl.string(g.default.XiLvuG)
                    })
                })]
            }), (0, r.jsx)(f.QF, {
                current: t?.current?.currentTime,
                duration: t?.current?.duration
            })]
        }), (0, r.jsxs)("div", {
            className: i()(S.X3, S.ST),
            children: [!R && (0, r.jsx)(f.Ey, {
                iconComponent: m.ueQ,
                animationTime: a,
                visible: C,
                onClick: O,
                active: I && n !== d.Q6.ENDED,
                disabled: n === d.Q6.ENDED,
                ariaLabel: y.intl.string(g.default["6EjGUv"]),
                tooltipLabel: y.intl.string(g.default["6EjGUv"]),
                buttonSize: f.AU[w],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !N && (0, r.jsx)(f.Ey, {
                iconComponent: x.I,
                animationTime: a,
                visible: C,
                active: B,
                onClick: _,
                ariaLabel: y.intl.string(g.default["0DbPcL"]),
                tooltipLabel: y.intl.string(g.default["0DbPcL"]),
                shortcut: d.TJ.CAPTION,
                buttonSize: f.AU[w],
                "data-testid": "discord-web-video-player-captions-btn"
            }), null != j && (0, r.jsx)(f.Ey, {
                iconComponent: m.s3U,
                animationTime: a,
                visible: C,
                onClick: el,
                ariaLabel: y.intl.string(y.t["1WjMbC"]),
                tooltipLabel: y.intl.string(y.t["1WjMbC"]),
                buttonSize: f.AU[w],
                "data-testid": "discord-web-video-player-download-btn"
            }), (0, r.jsx)(f.Ey, {
                iconComponent: U ? m.z7w : m.TM1,
                animationTime: a,
                visible: C,
                onClick: Q,
                ariaLabel: y.intl.string(g.default.z9Cnzv),
                tooltipLabel: y.intl.string(g.default.z9Cnzv),
                shortcut: d.TJ.FULLSCREEN,
                buttonSize: f.AU[w],
                "data-testid": "discord-web-video-player-fullscreen-btn"
            })]
        })]
    })
}