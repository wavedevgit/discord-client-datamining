/** chunk id: 750338 params = (module,exports,require) **/
a.d(t, {
    A: () => x
});
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    d = a(735438),
    l = a(230109),
    o = a(732955),
    c = a(397927),
    u = a(241524),
    _ = a(303136),
    m = a(607470),
    p = a(954571),
    b = a(676279),
    f = a(23003),
    g = a(652215),
    A = a(693591),
    h = a(150605);
let x = e => {
    let {
        name: t,
        title: a,
        description: s,
        descriptionCta: x,
        previewImage: R,
        videoUrl: C,
        shouldLoadVideo: E,
        index: v,
        customVideoStyle: N,
        isReducedMotion: I,
        onClick: T,
        badgeText: S,
        badgeVariant: y = "gradient",
        size: P,
        backgroundVideoUrl: j,
        previewImageStyle: D = f.Tb.CONTAINED,
        actions: U
    } = e, O = (0, b.TM)(), M = r.useRef(null), L = r.useRef(0), w = r.useRef(null), B = r.useRef(!1), k = (0, u.A)("(min-width: 1140px)"), G = D === f.Tb.OVERLAY && (P !== f.A0.LARGE || !k), V = P === f.A0.LARGE && k && D === f.Tb.OVERLAY, W = null != j && k && P === f.A0.LARGE, Y = r.useMemo(() => (0, d.debounce)(() => {
        p.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
            box_type: (0, d.snakeCase)(t)
        })
    }, 800), [t]), H = () => {
        null == M.current || I || (M.current.currentTime = L.current, M.current.play())
    }, F = () => {
        null == M.current || I || (L.current = M.current.currentTime, M.current.pause())
    }, K = P === f.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", X = () => {
        let e = null != x && null != T,
            t = null != U && U.length > 0;
        if (!e && !t) return null;
        let a = e ? [{
            variant: "secondary",
            onClick: T,
            text: x
        }] : U;
        return (0, n.jsx)("div", {
            className: h.bentoBoxButton,
            children: (0, n.jsx)(c.ButtonGroup, {
                children: a?.map((e, t) => {
                    let {
                        onClick: a,
                        ...r
                    } = e;
                    return (0, n.jsx)(o.$nd, {
                        ...r,
                        onClick: e => {
                            Y(), a?.(e)
                        }
                    }, t)
                })
            })
        })
    }, q = () => (0, n.jsxs)("div", {
        className: i()(h.textBox, h[`${P}`], V && h.overlayTextBox),
        children: [(0, n.jsxs)("div", {
            children: [null == S ? null : "gradient" === y ? (0, n.jsx)("div", {
                className: h.badgeContainer,
                children: (0, n.jsx)("div", {
                    className: h.badge,
                    children: (0, n.jsx)(c.Heading, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: S
                    })
                })
            }) : (0, n.jsx)("div", {
                className: h.badgeContainer,
                children: (0, n.jsx)(o.Exy, {
                    type: {
                        text: S
                    },
                    variant: y
                })
            }), (0, n.jsx)(c.Heading, {
                variant: K,
                color: "text-strong",
                className: h.header,
                children: a
            })]
        }), (0, n.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: h.description,
            children: s
        }), (0, n.jsx)(X, {})]
    }), z = () => (0, n.jsx)("div", {
        className: i()(h.boxArtContainer, h[`${P}`]),
        children: (0, n.jsx)(m.A, {
            playsInline: !0,
            preload: E ? "auto" : "none",
            muted: !0,
            poster: R,
            loop: !0,
            className: i()(V ? h.overlayImage : h.boxVideo, {
                [N]: null != N
            }),
            ref: M,
            children: (0, n.jsx)("source", {
                src: C,
                type: O ? A.a.MP4 : A.a.WEBM
            })
        }, C)
    }), $ = v % 2 != 0;
    return (0, n.jsx)(l.L, {
        innerRef: w,
        onChange: e => {
            e && !B.current && (B.current = !0, p.default.track(g.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                box_type: (0, d.snakeCase)(t)
            }))
        },
        threshold: .5,
        children: (0, n.jsxs)(c.hLv, {
            ref: w,
            id: t,
            className: i()(h.backgroundColor, h.boxContainer, h[`${P}`], h.gradientBackground, G && h.overlayImageMode, V && h.overlayMode),
            onMouseEnter: H,
            onFocus: H,
            onBlur: F,
            onMouseLeave: F,
            color: "purple",
            children: [W && (0, n.jsx)("div", {
                className: h.backgroundVideoContainer,
                children: (0, n.jsx)(_.A, {
                    preload: E ? "auto" : "none",
                    className: h.backgroundVideo,
                    src: j
                })
            }), (0, n.jsx)(() => $ ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(q, {}), (0, n.jsx)(z, {})]
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(z, {}), (0, n.jsx)(q, {})]
            }), {})]
        })
    })
}