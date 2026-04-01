/** chunk id: 750338 params = (module,exports,require) **/
r.d(t, {
    A: () => C
});
var a = r(627968),
    n = r(64700),
    s = r(503698),
    i = r.n(s),
    l = r(735438),
    o = r(230109),
    d = r(732955),
    c = r(397927),
    u = r(241524),
    m = r(303136),
    _ = r(607470),
    p = r(954571),
    f = r(676279),
    h = r(23003),
    b = r(652215),
    x = r(693591),
    g = r(992284);
let C = e => {
    let {
        name: t,
        title: r,
        description: s,
        descriptionCta: C,
        previewImage: A,
        videoUrl: R,
        shouldLoadVideo: v,
        index: E,
        customVideoStyle: N,
        isReducedMotion: j,
        onClick: I,
        badgeText: y,
        badgeVariant: P = "gradient",
        size: S,
        backgroundVideoUrl: T,
        previewImageStyle: w = h.Tb.CONTAINED,
        actions: O
    } = e, D = (0, f.TM)(), M = n.useRef(null), U = n.useRef(0), L = n.useRef(null), B = n.useRef(!1), k = (0, u.A)("(min-width: 1140px)"), G = w === h.Tb.OVERLAY && (S !== h.A0.LARGE || !k), V = S === h.A0.LARGE && k && w === h.Tb.OVERLAY, F = null != T && k && S === h.A0.LARGE, H = n.useMemo(() => (0, l.debounce)(() => {
        p.default.track(b.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
            box_type: (0, l.snakeCase)(t)
        })
    }, 800), [t]), Y = () => {
        null == M.current || j || (M.current.currentTime = U.current, M.current.play())
    }, W = () => {
        null == M.current || j || (U.current = M.current.currentTime, M.current.pause())
    }, K = S === h.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", z = () => {
        let e = null != C && null != I,
            t = null != O && O.length > 0;
        if (!e && !t) return null;
        let r = e ? [{
            variant: "secondary",
            onClick: I,
            text: C
        }] : O;
        return (0, a.jsx)("div", {
            className: g.bentoBoxButton,
            children: (0, a.jsx)(c.ButtonGroup, {
                children: r?.map((e, t) => {
                    let {
                        onClick: r,
                        ...n
                    } = e;
                    return (0, a.jsx)(d.$nd, {
                        ...n,
                        onClick: e => {
                            H(), r?.(e)
                        }
                    }, t)
                })
            })
        })
    }, Z = () => (0, a.jsxs)("div", {
        className: i()(g.textBox, g[`${S}`], V && g.overlayTextBox),
        children: [(0, a.jsxs)("div", {
            children: [null == y ? null : "gradient" === P ? (0, a.jsx)("div", {
                className: g.badgeContainer,
                children: (0, a.jsx)("div", {
                    className: g.badge,
                    children: (0, a.jsx)(c.Heading, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: y
                    })
                })
            }) : (0, a.jsx)("div", {
                className: g.badgeContainer,
                children: (0, a.jsx)(d.Exy, {
                    type: {
                        text: y
                    },
                    variant: P
                })
            }), (0, a.jsx)(c.Heading, {
                variant: K,
                color: "text-strong",
                className: g.header,
                children: r
            })]
        }), (0, a.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: g.description,
            children: s
        }), (0, a.jsx)(z, {})]
    }), X = () => (0, a.jsx)("div", {
        className: i()(g.boxArtContainer, g[`${S}`]),
        children: (0, a.jsx)(_.A, {
            playsInline: !0,
            preload: v ? "auto" : "none",
            muted: !0,
            poster: A,
            loop: !0,
            className: i()(V ? g.overlayImage : g.boxVideo, {
                [N]: null != N
            }),
            ref: M,
            children: (0, a.jsx)("source", {
                src: R,
                type: D ? x.a.MP4 : x.a.WEBM
            })
        }, R)
    }), $ = E % 2 != 0;
    return (0, a.jsx)(o.L, {
        innerRef: L,
        onChange: e => {
            e && !B.current && (B.current = !0, p.default.track(b.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                box_type: (0, l.snakeCase)(t)
            }))
        },
        threshold: .5,
        children: (0, a.jsxs)(c.hLv, {
            ref: L,
            id: t,
            className: i()(g.backgroundColor, g.boxContainer, g[`${S}`], g.gradientBackground, G && g.overlayImageMode, V && g.overlayMode),
            onMouseEnter: Y,
            onFocus: Y,
            onBlur: W,
            onMouseLeave: W,
            color: "purple",
            children: [F && (0, a.jsx)("div", {
                className: g.backgroundVideoContainer,
                children: (0, a.jsx)(m.A, {
                    preload: v ? "auto" : "none",
                    className: g.backgroundVideo,
                    src: T
                })
            }), (0, a.jsx)(() => $ ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(Z, {}), (0, a.jsx)(X, {})]
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(X, {}), (0, a.jsx)(Z, {})]
            }), {})]
        })
    })
}