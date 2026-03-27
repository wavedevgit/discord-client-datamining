/** chunk id: 750338 params = (module,exports,require) **/
a.d(t, {
    A: () => x
});
var r = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(735438),
    d = a(230109),
    o = a(732955),
    c = a(397927),
    u = a(241524),
    _ = a(303136),
    m = a(607470),
    p = a(954571),
    b = a(676279),
    f = a(23003),
    g = a(652215),
    h = a(693591),
    A = a(992284);
let x = e => {
    let {
        name: t,
        title: a,
        description: i,
        descriptionCta: x,
        previewImage: R,
        videoUrl: C,
        shouldLoadVideo: v,
        index: E,
        customVideoStyle: N,
        isReducedMotion: I,
        onClick: S,
        badgeText: y,
        badgeVariant: T = "gradient",
        size: P,
        backgroundVideoUrl: D,
        previewImageStyle: j = f.Tb.CONTAINED,
        actions: O
    } = e, U = (0, b.TM)(), M = n.useRef(null), L = n.useRef(0), w = n.useRef(null), B = n.useRef(!1), k = (0, u.A)("(min-width: 1140px)"), G = j === f.Tb.OVERLAY && (P !== f.A0.LARGE || !k), V = P === f.A0.LARGE && k && j === f.Tb.OVERLAY, W = null != D && k && P === f.A0.LARGE, Y = n.useMemo(() => (0, l.debounce)(() => {
        p.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
            box_type: (0, l.snakeCase)(t)
        })
    }, 800), [t]), H = () => {
        null == M.current || I || (M.current.currentTime = L.current, M.current.play())
    }, F = () => {
        null == M.current || I || (L.current = M.current.currentTime, M.current.pause())
    }, K = P === f.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", z = () => {
        let e = null != x && null != S,
            t = null != O && O.length > 0;
        if (!e && !t) return null;
        let a = e ? [{
            variant: "secondary",
            onClick: S,
            text: x
        }] : O;
        return (0, r.jsx)("div", {
            className: A.bentoBoxButton,
            children: (0, r.jsx)(c.ButtonGroup, {
                children: a?.map((e, t) => {
                    let {
                        onClick: a,
                        ...n
                    } = e;
                    return (0, r.jsx)(o.$nd, {
                        ...n,
                        onClick: e => {
                            Y(), a?.(e)
                        }
                    }, t)
                })
            })
        })
    }, q = () => (0, r.jsxs)("div", {
        className: s()(A.textBox, A[`${P}`], V && A.overlayTextBox),
        children: [(0, r.jsxs)("div", {
            children: [null == y ? null : "gradient" === T ? (0, r.jsx)("div", {
                className: A.badgeContainer,
                children: (0, r.jsx)("div", {
                    className: A.badge,
                    children: (0, r.jsx)(c.Heading, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: y
                    })
                })
            }) : (0, r.jsx)("div", {
                className: A.badgeContainer,
                children: (0, r.jsx)(o.Exy, {
                    type: {
                        text: y
                    },
                    variant: T
                })
            }), (0, r.jsx)(c.Heading, {
                variant: K,
                color: "text-strong",
                className: A.header,
                children: a
            })]
        }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: A.description,
            children: i
        }), (0, r.jsx)(z, {})]
    }), X = () => (0, r.jsx)("div", {
        className: s()(A.boxArtContainer, A[`${P}`]),
        children: (0, r.jsx)(m.A, {
            playsInline: !0,
            preload: v ? "auto" : "none",
            muted: !0,
            poster: R,
            loop: !0,
            className: s()(V ? A.overlayImage : A.boxVideo, {
                [N]: null != N
            }),
            ref: M,
            children: (0, r.jsx)("source", {
                src: C,
                type: U ? h.a.MP4 : h.a.WEBM
            })
        }, C)
    }), $ = E % 2 != 0;
    return (0, r.jsx)(d.L, {
        innerRef: w,
        onChange: e => {
            e && !B.current && (B.current = !0, p.default.track(g.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                box_type: (0, l.snakeCase)(t)
            }))
        },
        threshold: .5,
        children: (0, r.jsxs)(c.hLv, {
            ref: w,
            id: t,
            className: s()(A.backgroundColor, A.boxContainer, A[`${P}`], A.gradientBackground, G && A.overlayImageMode, V && A.overlayMode),
            onMouseEnter: H,
            onFocus: H,
            onBlur: F,
            onMouseLeave: F,
            color: "purple",
            children: [W && (0, r.jsx)("div", {
                className: A.backgroundVideoContainer,
                children: (0, r.jsx)(_.A, {
                    preload: v ? "auto" : "none",
                    className: A.backgroundVideo,
                    src: D
                })
            }), (0, r.jsx)(() => $ ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(q, {}), (0, r.jsx)(X, {})]
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(X, {}), (0, r.jsx)(q, {})]
            }), {})]
        })
    })
}