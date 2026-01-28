/** Chunk was on 5606 **/
/** chunk id: 964003, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n(732955),
    c = n(397927),
    d = n(241524),
    u = n(607470),
    p = n(954571),
    _ = n(676279),
    m = n(57978),
    g = n(652215),
    f = n(693591),
    b = n(847652);
let h = e => {
        let {
            descriptionCta: t,
            onClick: n,
            debouncedOnClickAnalytics: i
        } = e;
        return (0, r.jsx)("div", {
            className: b.bentoBoxButton,
            children: (0, r.jsx)(o.$nd, {
                variant: "secondary",
                onClick: () => {
                    i(), n()
                },
                text: t
            })
        })
    },
    A = e => {
        let {
            name: t,
            title: n,
            description: l,
            descriptionCta: A,
            previewImage: E,
            videoUrl: x,
            shouldLoadVideo: O,
            index: C,
            customVideoStyle: y,
            isReducedMotion: j,
            onClick: T,
            badgeText: v,
            badgeVariant: S = "gradient",
            size: I,
            backgroundVideoUrl: N,
            previewImageStyle: P = m.Tb.CONTAINED
        } = e, R = (0, _.TM)(), D = i.useRef(null), w = i.useRef(0), L = (0, d.A)("(min-width: ".concat(1140, "px)")), M = P === m.Tb.OVERLAY && (I !== m.A0.LARGE || !L), G = I === m.A0.LARGE && L && P === m.Tb.OVERLAY, U = null != N && L && I === m.A0.LARGE, k = i.useMemo(() => (0, a.debounce)(() => {
            p.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
                box_type: (0, a.snakeCase)(t)
            })
        }, 800), [t]), H = () => {
            null == D.current || j || (D.current.currentTime = w.current, D.current.play())
        }, B = () => {
            null == D.current || j || (w.current = D.current.currentTime, D.current.pause())
        }, V = I === m.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", F = () => (0, r.jsxs)("div", {
            className: s()(b.textBox, b["".concat(I)], G && b.overlayTextBox),
            children: [(0, r.jsxs)("div", {
                children: [null == v ? null : "gradient" === S ? (0, r.jsx)("div", {
                    className: b.badgeContainer,
                    children: (0, r.jsx)("div", {
                        className: b.badge,
                        children: (0, r.jsx)(c.Heading, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: v
                        })
                    })
                }) : (0, r.jsx)("div", {
                    className: b.badgeContainer,
                    children: (0, r.jsx)(o.Exy, {
                        type: {
                            text: v
                        },
                        variant: S
                    })
                }), (0, r.jsx)(c.Heading, {
                    variant: V,
                    color: "text-strong",
                    className: b.header,
                    children: n
                })]
            }), (0, r.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: b.description,
                children: l
            }), null != A && null != T && (0, r.jsx)(h, {
                descriptionCta: A,
                onClick: T,
                debouncedOnClickAnalytics: k
            })]
        }), Y = () => (0, r.jsx)("div", {
            className: s()(b.boxArtContainer, b["".concat(I)]),
            children: (0, r.jsx)(u.A, {
                playsInline: !0,
                preload: O ? "auto" : "none",
                muted: !0,
                poster: E,
                loop: !0,
                className: s()(G ? b.overlayImage : b.boxVideo, {
                    [y]: null != y
                }),
                ref: D,
                children: (0, r.jsx)("source", {
                    src: x,
                    type: R ? f.a.MP4 : f.a.WEBM
                })
            }, x)
        }), W = C % 2 != 0;
        return (0, r.jsxs)(c.hLv, {
            id: t,
            className: s()(b.backgroundColor, b.boxContainer, b["".concat(I)], b.gradientBackground, M && b.overlayImageMode, G && b.overlayMode),
            onMouseEnter: H,
            onFocus: H,
            onBlur: B,
            onMouseLeave: B,
            color: "purple",
            children: [U && (0, r.jsx)("div", {
                className: b.backgroundVideoContainer,
                children: (0, r.jsx)(u.A, {
                    muted: !0,
                    autoPlay: !j,
                    playsInline: !0,
                    loop: !0,
                    preload: O ? "auto" : "none",
                    className: b.backgroundVideo,
                    src: N
                })
            }), (0, r.jsx)(() => W ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(F, {}), (0, r.jsx)(Y, {})]
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(Y, {}), (0, r.jsx)(F, {})]
            }), {})]
        })
    }