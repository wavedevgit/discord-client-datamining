/** Chunk was on 28636 **/
/** chunk id: 841985, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(775602),
    c = n(435582),
    d = n(283488),
    u = n(735991),
    p = n(607470),
    h = n(486020),
    m = n(928194),
    g = n(590354);
let _ = 16 / 9,
    b = 325 / 72;

function f(e) {
    let {
        application: t,
        isHovered: n,
        botBannerUrl: i,
        botBannerUrlAnimated: s,
        iconURL: o
    } = e, h = (0, d.A)({
        applicationId: t.id,
        size: 600,
        names: ["embedded_cover"]
    }), m = l.useMemo(() => {
        let e = (0, u.Cx)(t);
        return null != e && null != e.activity_preview_video_asset_id ? (0, c.A)(t.id, e.activity_preview_video_asset_id) : null
    }, [t]), {
        imageUrl: _,
        imageUrlAnimated: b
    } = l.useMemo(() => "fetched" === h.state && null != h.url ? {
        imageUrl: h.url
    } : {
        imageUrl: i,
        imageUrlAnimated: s
    }, [h.state, h.url, i, s]), f = null != _, A = null != m;
    return "loading" === h.state ? null : A ? (0, r.jsxs)(r.Fragment, {
        children: [f ? (0, r.jsx)(x, {
            isHovered: n,
            url: _,
            animatedUrl: void 0
        }) : (0, r.jsx)(p.A, {
            src: m,
            className: a()(g._e, g.IH),
            muted: !0
        }), (0, r.jsx)(v, {
            isHovered: n,
            url: m,
            isVideo: !0
        })]
    }) : f ? (0, r.jsx)(x, {
        isHovered: n,
        url: _,
        animatedUrl: b
    }) : (0, r.jsx)(j, {
        iconURL: o
    })
}

function x(e) {
    let {
        isHovered: t,
        url: n,
        animatedUrl: i
    } = e, [s, o] = l.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
            src: n,
            alt: "",
            className: a()(g._e, g.IH, {
                [g.Kc]: s
            }),
            onLoad: () => o(!0)
        }), null != i ? (0, r.jsx)(v, {
            isHovered: t,
            url: i,
            isVideo: !1
        }) : null]
    })
}

function v(e) {
    let {
        isHovered: t,
        url: n,
        isVideo: i
    } = e, [s, o] = l.useState(!1), [c, d] = l.useState(t);
    return (l.useEffect(() => {
        t && d(!0)
    }, [t]), c) ? (0, r.jsx)("div", {
        className: a()(g.hY, {
            [g.Q]: !t,
            [g.nR]: t && s
        }),
        onAnimationEnd: () => t ? null : d(!1),
        children: i ? (0, r.jsx)(p.A, {
            src: n,
            loop: !0,
            autoPlay: !0,
            muted: !0,
            className: g.IH,
            onLoadedData: () => o(!0)
        }) : (0, r.jsx)("img", {
            src: n,
            alt: "",
            className: g.IH,
            onLoad: () => o(!0)
        })
    }) : null
}

function j(e) {
    let {
        iconURL: t
    } = e, {
        backgroundGradient: n,
        hasFetchedColors: l
    } = (0, m.d)(t);
    return (0, r.jsx)("div", {
        className: a()(g.IH, g.nY, {
            [g.Kc]: l
        }),
        style: {
            backgroundImage: n
        }
    })
}
let A = function(e) {
    let {
        application: t,
        bannerType: n,
        iconURL: i
    } = e, a = (0, s.bG)([o.A], () => o.A.useReducedMotion), [c, d] = l.useState(!1), p = l.useCallback(() => {
        d(!0)
    }, []), m = l.useCallback(() => d(!1), []), v = (0, u.Ag)(t), A = t.bot, {
        botBannerUrl: y,
        botBannerUrlAnimated: C
    } = l.useMemo(() => (null == A ? void 0 : A.id) == null || (null == A ? void 0 : A.banner) == null ? {} : {
        botBannerUrl: (0, h.z)({
            id: A.id,
            banner: A.banner,
            canAnimate: !1,
            size: 600
        }),
        botBannerUrlAnimated: a ? void 0 : (0, h.z)({
            id: A.id,
            banner: A.banner,
            canAnimate: !0,
            size: 600
        })
    }, [null == A ? void 0 : A.id, null == A ? void 0 : A.banner, a]);
    return (0, r.jsx)("div", {
        className: g.cI,
        style: {
            aspectRatio: "card" === n ? _ : b
        },
        onMouseEnter: p,
        onFocus: p,
        onMouseLeave: m,
        onBlur: m,
        children: "card" === n && v ? (0, r.jsx)(f, {
            application: t,
            isHovered: c,
            botBannerUrl: null == y ? void 0 : y,
            botBannerUrlAnimated: null == C ? void 0 : C
        }) : null != y ? (0, r.jsx)(x, {
            isHovered: c,
            url: y,
            animatedUrl: C
        }) : (0, r.jsx)(j, {
            iconURL: i
        })
    })
}