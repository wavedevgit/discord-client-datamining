/** chunk id: 337953 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(311907),
    o = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    f = n(775602),
    h = n(954571),
    p = n(768146),
    E = n(91034),
    x = n(710434),
    v = n(634156),
    b = n(652215),
    g = n(445563),
    y = n(985018),
    S = n(834926);

function A(e) {
    let {
        videoRef: t,
        playerState: n,
        animSpring: a,
        visible: A,
        seekForwardEnabled: C,
        hideCaptionBtn: N,
        hideTranscriptBtn: R,
        hideSkipButtons: L,
        size: w,
        downloadUrl: T,
        downloadContentType: P,
        autoFocus: D = !1,
        keyDownHandlerRef: j,
        volume: M,
        muted: k,
        transcriptEnabled: I,
        captionEnabled: B,
        fullScreenEnabled: U,
        handlePlaybackBtnClick: F,
        handleTranscriptBtnClick: G,
        handleCaptionBtnClick: Q,
        handleFullScreenBtnClick: $,
        handleSeekBackBtnClick: O,
        handleSeekForwardBtnClick: _,
        autoHideVolumeSlider: K = !1,
        handleControlBarPendingInteraction: Y,
        onVolumeChange: X,
        onMutedChange: z
    } = e, V = (0, u.bG)([f.A], () => f.A.useReducedMotion), W = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled), [H, Z] = l.useState(k ? 0 : M), [J, q] = l.useState(!1), [ee, et] = l.useState(!1), [{
        volumeAnimSpring: en
    }, er] = (0, m.zhh)(() => ({
        from: {
            volumeAnimSpring: 0
        },
        config: {
            tension: 100,
            friction: 3,
            clamp: !0
        }
    })), el = l.useRef(null), ea = l.useCallback(() => {
        if (null == T) return;
        let e = P?.split("/");
        h.default.track(b.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
            attachment_type: e?.[0],
            attachment_subtype: e?.[1]
        }), window.open(T, "_blank")
    }, [T, P]), ei = l.useCallback(e => {
        null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== H && Z(e))
    }, [t, H]), es = l.useCallback(() => {
        if (null != t.current)
            if (0 === H) {
                let e = 0 === M ? .3 : M;
                ei(e), z(!1), X(e)
            } else X(H), ei(0), z(!0)
    }, [t, H, ei, M, z, X]), eu = () => {
        q(!0)
    }, eo = () => {
        q(!1)
    }, ec = l.useCallback(e => {
        switch (e.key) {
            case c.TJ.PLAYBACK:
                F();
                break;
            case c.TJ.SPACE:
                W || (e.preventDefault(), F());
                break;
            case c.TJ.SEEK_BACK:
                O();
                break;
            case c.TJ.SEEK_FORWARD:
                _();
                break;
            case c.TJ.CAPTION:
                Q();
                break;
            case c.TJ.FULLSCREEN:
                $();
                break;
            case c.TJ.MUTE:
                es()
        }
    }, [Q, $, F, O, _, es, W]);
    l.useEffect(() => {
        D && null != el.current && el.current.focus()
    }, [D]), l.useEffect(() => (null != j && (j.current = ec), () => {
        null != j && (j.current = null)
    }), [ec, j]), l.useEffect(() => (er({
        volumeAnimSpring: !K || ee || J ? 1 : 0,
        immediate: V
    }), () => {
        en.stop()
    }), [K, ee, J, er, V, en]);
    let ed = 0 === H ? m._RO : H < .5 ? m.S24 : m.HKD,
        {
            icon: em,
            label: ef
        } = p.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: S.X3,
            children: [(0, r.jsx)(p.Ey, {
                iconComponent: em,
                animationTime: a,
                visible: A,
                ariaLabel: ef,
                tooltipLabel: ef,
                shortcut: c.TJ.PLAYBACK,
                onClick: F,
                ref: el,
                buttonSize: p.AU[w],
                "data-testid": "discord-web-video-player-play-pause-btn"
            }), !L && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(p.Ey, {
                    iconComponent: x.q,
                    animationTime: a,
                    visible: A,
                    onClick: O,
                    ariaLabel: y.intl.string(g.default["dRVF+Z"]),
                    tooltipLabel: y.intl.string(g.default["dRVF+Z"]),
                    shortcut: c.TJ.SEEK_BACK,
                    buttonSize: p.AU[w],
                    "data-testid": "discord-web-video-player-seek-backward-btn"
                }), (0, r.jsx)(p.Ey, {
                    iconComponent: v.i,
                    animationTime: a,
                    visible: A,
                    onClick: _,
                    disabled: !C,
                    ariaLabel: C ? y.intl.string(g.default.yV2FLL) : y.intl.string(g.default.YWbiPw),
                    tooltipLabel: C ? y.intl.string(g.default.yV2FLL) : y.intl.string(g.default.YWbiPw),
                    tooltipDelayMs: C ? p.do : 0,
                    shortcut: c.TJ.SEEK_FORWARD,
                    buttonSize: p.AU[w],
                    "data-testid": "discord-web-video-player-seek-forward-btn"
                })]
            })]
        }), (0, r.jsxs)(s.animated.div, {
            className: i()(S.X3, S.L1),
            style: {
                opacity: (0, s.to)([a.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${A?e:Math.pow(e,8)}`)
            },
            children: [(0, r.jsxs)("div", {
                onMouseEnter: eu,
                onMouseLeave: eo,
                onFocus: eu,
                onBlur: eo,
                className: S.RD,
                "data-testid": "discord-web-video-player-volume-control",
                children: [(0, r.jsx)(p.Ey, {
                    iconComponent: ed,
                    animationTime: a,
                    visible: A,
                    onClick: es,
                    ariaLabel: y.intl.string(g.default.XiLvuG),
                    tooltipLabel: y.intl.string(g.default.XiLvuG),
                    shortcut: c.TJ.MUTE,
                    buttonSize: p.AU[w],
                    "data-testid": "discord-web-video-player-volume-btn"
                }), (0, r.jsx)(s.animated.div, {
                    className: S.MQ,
                    "data-testid": "discord-web-video-player-volume-slider",
                    style: {
                        opacity: (0, s.to)([en.to({
                            range: [0, 1],
                            output: [0, 1]
                        })], e => `${A?e:Math.pow(e,8)}`),
                        width: (0, s.to)([en.to({
                            range: [0, 1],
                            output: [0, 100]
                        })], e => `${e}px`)
                    },
                    children: (0, r.jsx)(d.A, {
                        mini: !0,
                        value: H,
                        keyboardStep: .1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: e => {
                            ei(e), X(e), ee && (et(!1), Y(!1)), k && e > 0 ? z(!1) : k || 0 !== e || z(!0)
                        },
                        asValueChanges: e => {
                            ei(e), ee || (et(!0), Y(!0))
                        },
                        fillStyles: {
                            backgroundColor: o.A.colors.WHITE.css
                        },
                        orientation: "horizontal",
                        "aria-label": y.intl.string(g.default.XiLvuG)
                    })
                })]
            }), (0, r.jsx)(p.QF, {
                current: t?.current?.currentTime,
                duration: t?.current?.duration
            })]
        }), (0, r.jsxs)("div", {
            className: i()(S.X3, S.ST),
            children: [!R && (0, r.jsx)(p.Ey, {
                iconComponent: m.ueQ,
                animationTime: a,
                visible: A,
                onClick: G,
                active: I && n !== c.Q6.ENDED,
                disabled: n === c.Q6.ENDED,
                ariaLabel: y.intl.string(g.default["6EjGUv"]),
                tooltipLabel: y.intl.string(g.default["6EjGUv"]),
                buttonSize: p.AU[w],
                "data-testid": "discord-web-video-player-transcript-btn"
            }), !N && (0, r.jsx)(p.Ey, {
                iconComponent: E.I,
                animationTime: a,
                visible: A,
                active: B,
                onClick: Q,
                ariaLabel: y.intl.string(g.default["0DbPcL"]),
                tooltipLabel: y.intl.string(g.default["0DbPcL"]),
                shortcut: c.TJ.CAPTION,
                buttonSize: p.AU[w],
                "data-testid": "discord-web-video-player-captions-btn"
            }), null != T && (0, r.jsx)(p.Ey, {
                iconComponent: m.s3U,
                animationTime: a,
                visible: A,
                onClick: ea,
                ariaLabel: y.intl.string(y.t["1WjMbC"]),
                tooltipLabel: y.intl.string(y.t["1WjMbC"]),
                buttonSize: p.AU[w],
                "data-testid": "discord-web-video-player-download-btn"
            }), (0, r.jsx)(p.Ey, {
                iconComponent: U ? m.z7w : m.TM1,
                animationTime: a,
                visible: A,
                onClick: $,
                ariaLabel: y.intl.string(g.default.z9Cnzv),
                tooltipLabel: y.intl.string(g.default.z9Cnzv),
                shortcut: c.TJ.FULLSCREEN,
                buttonSize: p.AU[w],
                "data-testid": "discord-web-video-player-fullscreen-btn"
            })]
        })]
    })
}