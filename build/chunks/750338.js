/** chunk id: 750338 params = (module,exports,require) **/
r.d(t, {
    A: () => C
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(735438),
    d = r(230109),
    o = r(732955),
    c = r(397927),
    u = r(241524),
    m = r(303136),
    _ = r(607470),
    p = r(954571),
    f = r(676279),
    h = r(23003),
    b = r(652215),
    g = r(693591),
    x = r(992284);
let C = e => {
    let {
        name: t,
        title: r,
        description: i,
        descriptionCta: C,
        previewImage: A,
        videoUrl: R,
        shouldLoadVideo: v,
        index: E,
        customVideoStyle: j,
        isReducedMotion: N,
        onClick: y,
        badgeText: I,
        badgeVariant: P = "gradient",
        size: S,
        backgroundVideoUrl: T,
        previewImageStyle: w = h.Tb.CONTAINED,
        actions: O
    } = e, D = (0, f.TM)(), M = a.useRef(null), U = a.useRef(0), L = a.useRef(null), B = a.useRef(!1), k = (0, u.A)("(min-width: 1140px)"), G = w === h.Tb.OVERLAY && (S !== h.A0.LARGE || !k), V = S === h.A0.LARGE && k && w === h.Tb.OVERLAY, F = null != T && k && S === h.A0.LARGE, H = a.useMemo(() => (0, l.debounce)(() => {
        p.default.track(b.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
            box_type: (0, l.snakeCase)(t)
        })
    }, 800), [t]), Y = () => {
        null == M.current || N || (M.current.currentTime = U.current, M.current.play())
    }, W = () => {
        null == M.current || N || (U.current = M.current.currentTime, M.current.pause())
    }, K = S === h.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", z = () => {
        let e = null != C && null != y,
            t = null != O && O.length > 0;
        if (!e && !t) return null;
        let r = e ? [{
            variant: "secondary",
            onClick: y,
            text: C
        }] : O;
        return (0, n.jsx)("div", {
            className: x.bentoBoxButton,
            children: (0, n.jsx)(c.ButtonGroup, {
                children: r?.map((e, t) => {
                    let {
                        onClick: r,
                        ...a
                    } = e;
                    return (0, n.jsx)(o.$nd, {
                        ...a,
                        onClick: e => {
                            H(), r?.(e)
                        }
                    }, t)
                })
            })
        })
    }, Z = () => (0, n.jsxs)("div", {
        className: s()(x.textBox, x[`${S}`], V && x.overlayTextBox),
        children: [(0, n.jsxs)("div", {
            children: [null == I ? null : "gradient" === P ? (0, n.jsx)("div", {
                className: x.badgeContainer,
                children: (0, n.jsx)("div", {
                    className: x.badge,
                    children: (0, n.jsx)(c.Heading, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: I
                    })
                })
            }) : (0, n.jsx)("div", {
                className: x.badgeContainer,
                children: (0, n.jsx)(o.Exy, {
                    type: {
                        text: I
                    },
                    variant: P
                })
            }), (0, n.jsx)(c.Heading, {
                variant: K,
                color: "text-strong",
                className: x.header,
                children: r
            })]
        }), (0, n.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: x.description,
            children: i
        }), (0, n.jsx)(z, {})]
    }), X = () => (0, n.jsx)("div", {
        className: s()(x.boxArtContainer, x[`${S}`]),
        children: (0, n.jsx)(_.A, {
            playsInline: !0,
            preload: v ? "auto" : "none",
            muted: !0,
            poster: A,
            loop: !0,
            className: s()(V ? x.overlayImage : x.boxVideo, {
                [j]: null != j
            }),
            ref: M,
            children: (0, n.jsx)("source", {
                src: R,
                type: D ? g.a.MP4 : g.a.WEBM
            })
        }, R)
    }), $ = E % 2 != 0;
    return (0, n.jsx)(d.L, {
        innerRef: L,
        onChange: e => {
            e && !B.current && (B.current = !0, p.default.track(b.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                box_type: (0, l.snakeCase)(t)
            }))
        },
        threshold: .5,
        children: (0, n.jsxs)(c.hLv, {
            ref: L,
            id: t,
            className: s()(x.backgroundColor, x.boxContainer, x[`${S}`], x.gradientBackground, G && x.overlayImageMode, V && x.overlayMode),
            onMouseEnter: Y,
            onFocus: Y,
            onBlur: W,
            onMouseLeave: W,
            color: "purple",
            children: [F && (0, n.jsx)("div", {
                className: x.backgroundVideoContainer,
                children: (0, n.jsx)(m.A, {
                    preload: v ? "auto" : "none",
                    className: x.backgroundVideo,
                    src: T
                })
            }), (0, n.jsx)(() => $ ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(Z, {}), (0, n.jsx)(X, {})]
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(X, {}), (0, n.jsx)(Z, {})]
            }), {})]
        })
    })
}