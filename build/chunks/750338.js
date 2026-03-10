/** chunk id: 750338 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(230109),
    d = n(732955),
    c = n(397927),
    u = n(241524),
    _ = n(303136),
    g = n(607470),
    m = n(954571),
    A = n(676279),
    h = n(23003),
    p = n(652215),
    x = n(693591),
    E = n(150605);
let T = e => {
        let {
            descriptionCta: t,
            onClick: n,
            debouncedOnClickAnalytics: s
        } = e;
        return (0, i.jsx)("div", {
            className: E.bentoBoxButton,
            children: (0, i.jsx)(d.$nd, {
                variant: "secondary",
                onClick: () => {
                    s(), n()
                },
                text: t
            })
        })
    },
    S = e => {
        let {
            name: t,
            title: n,
            description: l,
            descriptionCta: S,
            previewImage: C,
            videoUrl: f,
            shouldLoadVideo: I,
            index: b,
            customVideoStyle: N,
            isReducedMotion: v,
            onClick: j,
            badgeText: O,
            badgeVariant: R = "gradient",
            size: y,
            backgroundVideoUrl: P,
            previewImageStyle: D = h.Tb.CONTAINED
        } = e, L = (0, A.TM)(), G = s.useRef(null), M = s.useRef(0), U = s.useRef(null), k = s.useRef(!1), V = (0, u.A)("(min-width: 1140px)"), w = D === h.Tb.OVERLAY && (y !== h.A0.LARGE || !V), H = y === h.A0.LARGE && V && D === h.Tb.OVERLAY, B = null != P && V && y === h.A0.LARGE, F = s.useMemo(() => (0, r.debounce)(() => {
            m.default.track(p.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
                box_type: (0, r.snakeCase)(t)
            })
        }, 800), [t]), Y = () => {
            null == G.current || v || (G.current.currentTime = M.current, G.current.play())
        }, z = () => {
            null == G.current || v || (M.current = G.current.currentTime, G.current.pause())
        }, X = y === h.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", W = () => (0, i.jsxs)("div", {
            className: a()(E.textBox, E[`${y}`], H && E.overlayTextBox),
            children: [(0, i.jsxs)("div", {
                children: [null == O ? null : "gradient" === R ? (0, i.jsx)("div", {
                    className: E.badgeContainer,
                    children: (0, i.jsx)("div", {
                        className: E.badge,
                        children: (0, i.jsx)(c.Heading, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: O
                        })
                    })
                }) : (0, i.jsx)("div", {
                    className: E.badgeContainer,
                    children: (0, i.jsx)(d.Exy, {
                        type: {
                            text: O
                        },
                        variant: R
                    })
                }), (0, i.jsx)(c.Heading, {
                    variant: X,
                    color: "text-strong",
                    className: E.header,
                    children: n
                })]
            }), (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: E.description,
                children: l
            }), null != S && null != j && (0, i.jsx)(T, {
                descriptionCta: S,
                onClick: j,
                debouncedOnClickAnalytics: F
            })]
        }), K = () => (0, i.jsx)("div", {
            className: a()(E.boxArtContainer, E[`${y}`]),
            children: (0, i.jsx)(g.A, {
                playsInline: !0,
                preload: I ? "auto" : "none",
                muted: !0,
                poster: C,
                loop: !0,
                className: a()(H ? E.overlayImage : E.boxVideo, {
                    [N]: null != N
                }),
                ref: G,
                children: (0, i.jsx)("source", {
                    src: f,
                    type: L ? x.a.MP4 : x.a.WEBM
                })
            }, f)
        }), Z = b % 2 != 0;
        return (0, i.jsx)(o.L, {
            innerRef: U,
            onChange: e => {
                e && !k.current && (k.current = !0, m.default.track(p.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                    box_type: (0, r.snakeCase)(t)
                }))
            },
            threshold: .5,
            children: (0, i.jsxs)(c.hLv, {
                ref: U,
                id: t,
                className: a()(E.backgroundColor, E.boxContainer, E[`${y}`], E.gradientBackground, w && E.overlayImageMode, H && E.overlayMode),
                onMouseEnter: Y,
                onFocus: Y,
                onBlur: z,
                onMouseLeave: z,
                color: "purple",
                children: [B && (0, i.jsx)("div", {
                    className: E.backgroundVideoContainer,
                    children: (0, i.jsx)(_.A, {
                        preload: I ? "auto" : "none",
                        className: E.backgroundVideo,
                        src: P
                    })
                }), (0, i.jsx)(() => Z ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(W, {}), (0, i.jsx)(K, {})]
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(K, {}), (0, i.jsx)(W, {})]
                }), {})]
            })
        })
    }