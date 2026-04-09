/** chunk id: 750338 params = (module,exports,require) **/
a.d(t, {
    A: () => v
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
    A = a(23003),
    h = a(652215),
    R = a(693591),
    x = a(992284);
let v = e => {
    let {
        name: t,
        title: a,
        description: n,
        descriptionCta: v,
        previewImage: E,
        videoUrl: y,
        shouldLoadVideo: M,
        index: P,
        customVideoStyle: I,
        isReducedMotion: N,
        onClick: S,
        badgeText: T,
        badgeVariant: U = "gradient",
        size: O,
        backgroundVideoUrl: _,
        previewImageStyle: C = A.Tb.CONTAINED,
        actions: j,
        mediaRef: w
    } = e, L = (0, g.TM)(), k = r.useRef(null), B = r.useRef(0), G = r.useRef(null), V = r.useRef(!1), Y = (0, p.A)("(min-width: 1140px)"), D = C === A.Tb.OVERLAY && (O !== A.A0.LARGE || !Y), H = O === A.A0.LARGE && Y && C === A.Tb.OVERLAY, F = null != _ && Y && O === A.A0.LARGE, X = r.useMemo(() => (0, l.debounce)(() => {
        f.default.track(h.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
            box_type: (0, l.snakeCase)(t)
        })
    }, 800), [t]), W = () => {
        null == k.current || N || (k.current.currentTime = B.current, k.current.play()), N || w?.current?.play()
    }, z = () => {
        null == k.current || N || (B.current = k.current.currentTime, k.current.pause()), N || w?.current?.pause()
    }, K = O === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", Q = () => {
        let e = null != v && null != S,
            t = null != j && j.length > 0;
        if (!e && !t) return null;
        let a = e ? [{
            variant: "secondary",
            onClick: S,
            text: v
        }] : j;
        return (0, s.jsx)("div", {
            className: x.bentoBoxButton,
            children: (0, s.jsx)(u.ButtonGroup, {
                children: a?.map((e, t) => {
                    let {
                        onClick: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(d.$nd, {
                        ...r,
                        onClick: e => {
                            X(), a?.(e)
                        }
                    }, t)
                })
            })
        })
    }, Z = () => (0, s.jsxs)("div", {
        className: i()(x.textBox, x[`${O}`], H && x.overlayTextBox),
        children: [(0, s.jsxs)("div", {
            children: [null == T ? null : "gradient" === U ? (0, s.jsx)("div", {
                className: x.badgeContainer,
                children: (0, s.jsx)("div", {
                    className: x.badge,
                    children: (0, s.jsx)(u.Heading, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: T
                    })
                })
            }) : (0, s.jsx)("div", {
                className: x.badgeContainer,
                children: (0, s.jsx)(d.Exy, {
                    type: {
                        text: T
                    },
                    variant: U
                })
            }), (0, s.jsx)(u.Heading, {
                variant: K,
                color: "text-strong",
                className: x.header,
                children: a
            })]
        }), (0, s.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: x.description,
            children: n
        }), (0, s.jsx)(Q, {})]
    }), J = () => (0, s.jsx)("div", {
        className: i()(x.boxArtContainer, x[`${O}`]),
        children: null == y && (0, c.O)(E) && "string" != typeof E ? E : (0, s.jsx)(b.A, {
            playsInline: !0,
            preload: M ? "auto" : "none",
            muted: !0,
            poster: E,
            loop: !0,
            className: i()(H ? x.overlayImage : x.boxVideo, {
                [I]: null != I
            }),
            ref: k,
            children: (0, s.jsx)("source", {
                src: y,
                type: L ? R.a.MP4 : R.a.WEBM
            })
        }, y)
    }), $ = P % 2 != 0;
    return (0, s.jsx)(o.L, {
        innerRef: G,
        onChange: e => {
            e && !V.current && (V.current = !0, f.default.track(h.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, {
                box_type: (0, l.snakeCase)(t)
            }))
        },
        threshold: .5,
        children: (0, s.jsxs)(u.hLv, {
            ref: G,
            id: t,
            className: i()(x.backgroundColor, x.boxContainer, x[`${O}`], x.gradientBackground, D && x.overlayImageMode, H && x.overlayMode),
            onMouseEnter: W,
            onFocus: W,
            onBlur: z,
            onMouseLeave: z,
            color: "purple",
            children: [F && (0, s.jsx)("div", {
                className: x.backgroundVideoContainer,
                children: (0, s.jsx)(m.A, {
                    preload: M ? "auto" : "none",
                    className: x.backgroundVideo,
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