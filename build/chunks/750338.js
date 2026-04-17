/** chunk id: 750338 params = (module,exports,require) **/
a.d(t, {
    A: () => R
});
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    l = a(735438),
    o = a(230109),
    d = a(732955),
    c = a(745396),
    u = a(397927),
    p = a(241524),
    m = a(303136),
    b = a(607470),
    f = a(954571),
    g = a(676279),
    h = a(23003),
    A = a(652215),
    x = a(693591),
    v = a(856556);
let R = e => {
    let {
        name: t,
        title: a,
        description: n,
        descriptionCta: R,
        previewImage: y,
        videoUrl: E,
        shouldLoadVideo: M,
        index: I,
        customVideoStyle: P,
        isReducedMotion: N,
        onClick: S,
        badgeText: U,
        badgeVariant: T = "gradient",
        size: O,
        backgroundVideoUrl: _,
        previewImageStyle: j = h.Tb.CONTAINED,
        actions: w,
        mediaRef: C
    } = e, L = (0, g.TM)(), k = r.useRef(null), B = r.useRef(0), V = r.useRef(null), G = r.useRef(!1), Y = (0, p.A)("(min-width: 1140px)"), D = j === h.Tb.OVERLAY && (O !== h.A0.LARGE || !Y), H = O === h.A0.LARGE && Y && j === h.Tb.OVERLAY, F = null != _ && Y && O === h.A0.LARGE, W = r.useMemo(() => (0, l.debounce)(() => {
        f.default.track(A.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
            box_type: (0, l.snakeCase)(t)
        })
    }, 800), [t]), X = () => {
        null == k.current || N || (k.current.currentTime = B.current, k.current.play()), N || C?.current?.play()
    }, z = () => {
        null == k.current || N || (B.current = k.current.currentTime, k.current.pause()), N || C?.current?.pause()
    }, K = O === h.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", Q = () => {
        let e = null != R && null != S,
            t = null != w && w.length > 0;
        if (!e && !t) return null;
        let a = e ? [{
            variant: "secondary",
            onClick: S,
            text: R
        }] : w;
        return (0, s.jsx)("div", {
            className: v.bentoBoxButton,
            children: (0, s.jsx)(u.ButtonGroup, {
                children: a?.map((e, t) => {
                    let {
                        onClick: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(d.$nd, {
                        ...r,
                        onClick: e => {
                            W(), a?.(e)
                        }
                    }, t)
                })
            })
        })
    }, Z = () => (0, s.jsxs)("div", {
        className: i()(v.textBox, v[`${O}`], H && v.overlayTextBox),
        children: [(0, s.jsxs)("div", {
            children: [null == U ? null : "gradient" === T ? (0, s.jsx)("div", {
                className: v.badgeContainer,
                children: (0, s.jsx)("div", {
                    className: v.badge,
                    children: (0, s.jsx)(u.Heading, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: U
                    })
                })
            }) : (0, s.jsx)("div", {
                className: v.badgeContainer,
                children: (0, s.jsx)(d.Exy, {
                    type: {
                        text: U
                    },
                    variant: T
                })
            }), (0, s.jsx)(u.Heading, {
                variant: K,
                color: "text-strong",
                className: v.header,
                children: a
            })]
        }), (0, s.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: v.description,
            children: n
        }), (0, s.jsx)(Q, {})]
    }), J = () => (0, s.jsx)("div", {
        className: i()(v.boxArtContainer, v[`${O}`]),
        children: null == E && (0, c.O)(y) && "string" != typeof y ? y : (0, s.jsx)(b.A, {
            playsInline: !0,
            preload: M ? "auto" : "none",
            muted: !0,
            poster: y,
            loop: !0,
            className: i()(H ? v.overlayImage : v.boxVideo, {
                [P]: null != P
            }),
            ref: k,
            children: (0, s.jsx)("source", {
                src: E,
                type: L ? x.a.MP4 : x.a.WEBM
            })
        }, E)
    }), $ = I % 2 != 0;
    return (0, s.jsx)(o.L, {
        innerRef: V,
        onChange: e => {
            e && !G.current && (G.current = !0, f.default.track(A.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                box_type: (0, l.snakeCase)(t)
            }))
        },
        threshold: .5,
        children: (0, s.jsxs)(u.hLv, {
            ref: V,
            id: t,
            className: i()(v.backgroundColor, v.boxContainer, v[`${O}`], v.gradientBackground, D && v.overlayImageMode, H && v.overlayMode),
            onMouseEnter: X,
            onFocus: X,
            onBlur: z,
            onMouseLeave: z,
            color: "purple",
            children: [F && (0, s.jsx)("div", {
                className: v.backgroundVideoContainer,
                children: (0, s.jsx)(m.A, {
                    preload: M ? "auto" : "none",
                    className: v.backgroundVideo,
                    src: _
                })
            }), (0, s.jsx)(() => $ ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(Z, {}), (0, s.jsx)(J, {})]
            }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(J, {}), (0, s.jsx)(Z, {})]
            }), {})]
        })
    })
}