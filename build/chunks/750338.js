/** chunk id: 750338 params = (module,exports,require) **/
a.d(t, {
    A: () => R
});
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(735438),
    d = a(230109),
    o = a(732955),
    c = a(397927),
    u = a(241524),
    m = a(303136),
    p = a(607470),
    f = a(954571),
    b = a(676279),
    A = a(23003),
    _ = a(652215),
    h = a(693591),
    g = a(678783);
let R = e => {
    let {
        name: t,
        title: a,
        description: s,
        descriptionCta: R,
        previewImage: x,
        videoUrl: E,
        shouldLoadVideo: C,
        index: N,
        customVideoStyle: v,
        isReducedMotion: I,
        onClick: S,
        badgeText: T,
        badgeVariant: P = "gradient",
        size: y,
        backgroundVideoUrl: D,
        previewImageStyle: O = A.Tb.CONTAINED,
        actions: j
    } = e, U = (0, b.TM)(), M = r.useRef(null), L = r.useRef(0), w = r.useRef(null), B = r.useRef(!1), k = (0, u.A)("(min-width: 1140px)"), G = O === A.Tb.OVERLAY && (y !== A.A0.LARGE || !k), V = y === A.A0.LARGE && k && O === A.Tb.OVERLAY, Y = null != D && k && y === A.A0.LARGE, W = r.useMemo(() => (0, i.debounce)(() => {
        f.default.track(_.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
            box_type: (0, i.snakeCase)(t)
        })
    }, 800), [t]), H = () => {
        null == M.current || I || (M.current.currentTime = L.current, M.current.play())
    }, F = () => {
        null == M.current || I || (L.current = M.current.currentTime, M.current.pause())
    }, K = y === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", X = () => {
        let e = null != R && null != S,
            t = null != j && j.length > 0;
        if (!e && !t) return null;
        let a = e ? [{
            variant: "secondary",
            onClick: S,
            text: R
        }] : j;
        return (0, n.jsx)("div", {
            className: g.bentoBoxButton,
            children: (0, n.jsx)(c.ButtonGroup, {
                children: a?.map((e, t) => {
                    let {
                        onClick: a,
                        ...r
                    } = e;
                    return (0, n.jsx)(o.$nd, {
                        ...r,
                        onClick: e => {
                            W(), a?.(e)
                        }
                    }, t)
                })
            })
        })
    }, $ = () => (0, n.jsxs)("div", {
        className: l()(g.textBox, g[`${y}`], V && g.overlayTextBox),
        children: [(0, n.jsxs)("div", {
            children: [null == T ? null : "gradient" === P ? (0, n.jsx)("div", {
                className: g.badgeContainer,
                children: (0, n.jsx)("div", {
                    className: g.badge,
                    children: (0, n.jsx)(c.Heading, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: T
                    })
                })
            }) : (0, n.jsx)("div", {
                className: g.badgeContainer,
                children: (0, n.jsx)(o.Exy, {
                    type: {
                        text: T
                    },
                    variant: P
                })
            }), (0, n.jsx)(c.Heading, {
                variant: K,
                color: "text-strong",
                className: g.header,
                children: a
            })]
        }), (0, n.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: g.description,
            children: s
        }), (0, n.jsx)(X, {})]
    }), z = () => (0, n.jsx)("div", {
        className: l()(g.boxArtContainer, g[`${y}`]),
        children: (0, n.jsx)(p.A, {
            playsInline: !0,
            preload: C ? "auto" : "none",
            muted: !0,
            poster: x,
            loop: !0,
            className: l()(V ? g.overlayImage : g.boxVideo, {
                [v]: null != v
            }),
            ref: M,
            children: (0, n.jsx)("source", {
                src: E,
                type: U ? h.a.MP4 : h.a.WEBM
            })
        }, E)
    }), J = N % 2 != 0;
    return (0, n.jsx)(d.L, {
        innerRef: w,
        onChange: e => {
            e && !B.current && (B.current = !0, f.default.track(_.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                box_type: (0, i.snakeCase)(t)
            }))
        },
        threshold: .5,
        children: (0, n.jsxs)(c.hLv, {
            ref: w,
            id: t,
            className: l()(g.backgroundColor, g.boxContainer, g[`${y}`], g.gradientBackground, G && g.overlayImageMode, V && g.overlayMode),
            onMouseEnter: H,
            onFocus: H,
            onBlur: F,
            onMouseLeave: F,
            color: "purple",
            children: [Y && (0, n.jsx)("div", {
                className: g.backgroundVideoContainer,
                children: (0, n.jsx)(m.A, {
                    preload: C ? "auto" : "none",
                    className: g.backgroundVideo,
                    src: D
                })
            }), (0, n.jsx)(() => J ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)($, {}), (0, n.jsx)(z, {})]
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(z, {}), (0, n.jsx)($, {})]
            }), {})]
        })
    })
}