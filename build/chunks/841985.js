/** chunk id: 841985 params = (module,exports,require) **/
a.d(t, {
    A: () => v
});
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(311907),
    o = a(775602),
    c = a(435582),
    d = a(283488),
    u = a(735991),
    m = a(607470),
    h = a(486020),
    p = a(928194),
    _ = a(857679);
let g = 16 / 9,
    x = 325 / 72;

function A(e) {
    let {
        application: t,
        isHovered: a,
        botBannerUrl: l,
        botBannerUrlAnimated: r,
        iconURL: o
    } = e, h = (0, d.A)({
        applicationId: t.id,
        size: 600,
        names: ["embedded_cover"]
    }), p = i.useMemo(() => {
        let e = (0, u.Cx)(t);
        return null != e && null != e.activity_preview_video_asset_id ? (0, c.A)(t.id, e.activity_preview_video_asset_id) : null
    }, [t]), {
        imageUrl: g,
        imageUrlAnimated: x
    } = i.useMemo(() => "fetched" === h.state && null != h.url ? {
        imageUrl: h.url
    } : {
        imageUrl: l,
        imageUrlAnimated: r
    }, [h.state, h.url, l, r]), A = null != g, v = null != p;
    return "loading" === h.state ? null : v ? (0, n.jsxs)(n.Fragment, {
        children: [A ? (0, n.jsx)(f, {
            isHovered: a,
            url: g,
            animatedUrl: void 0
        }) : (0, n.jsx)(m.A, {
            src: p,
            className: s()(_._e, _.IH),
            muted: !0
        }), (0, n.jsx)(b, {
            isHovered: a,
            url: p,
            isVideo: !0
        })]
    }) : A ? (0, n.jsx)(f, {
        isHovered: a,
        url: g,
        animatedUrl: x
    }) : (0, n.jsx)(C, {
        iconURL: o
    })
}

function f(e) {
    let {
        isHovered: t,
        url: a,
        animatedUrl: l
    } = e, [r, o] = i.useState(!1);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("img", {
            src: a,
            alt: "",
            className: s()(_._e, _.IH, {
                [_.Kc]: r
            }),
            onLoad: () => o(!0)
        }), null != l ? (0, n.jsx)(b, {
            isHovered: t,
            url: l,
            isVideo: !1
        }) : null]
    })
}

function b(e) {
    let {
        isHovered: t,
        url: a,
        isVideo: l
    } = e, [r, o] = i.useState(!1), [c, d] = i.useState(t);
    return (i.useEffect(() => {
        t && d(!0)
    }, [t]), c) ? (0, n.jsx)("div", {
        className: s()(_.hY, {
            [_.Q]: !t,
            [_.nR]: t && r
        }),
        onAnimationEnd: () => t ? null : d(!1),
        children: l ? (0, n.jsx)(m.A, {
            src: a,
            loop: !0,
            autoPlay: !0,
            muted: !0,
            className: _.IH,
            onLoadedData: () => o(!0)
        }) : (0, n.jsx)("img", {
            src: a,
            alt: "",
            className: _.IH,
            onLoad: () => o(!0)
        })
    }) : null
}

function C(e) {
    let {
        iconURL: t
    } = e, {
        backgroundGradient: a,
        hasFetchedColors: i
    } = (0, p.d)(t);
    return (0, n.jsx)("div", {
        className: s()(_.IH, _.nY, {
            [_.Kc]: i
        }),
        style: {
            backgroundImage: a
        }
    })
}
let v = function(e) {
    let {
        application: t,
        bannerType: a,
        iconURL: l
    } = e, s = (0, r.bG)([o.A], () => o.A.useReducedMotion), [c, d] = i.useState(!1), m = i.useCallback(() => {
        d(!0)
    }, []), p = i.useCallback(() => d(!1), []), b = (0, u.Ag)(t), v = t.bot, {
        botBannerUrl: j,
        botBannerUrlAnimated: I
    } = i.useMemo(() => v?.id == null || v?.banner == null ? {} : {
        botBannerUrl: (0, h.z)({
            id: v.id,
            banner: v.banner,
            canAnimate: !1,
            size: 600
        }),
        botBannerUrlAnimated: s ? void 0 : (0, h.z)({
            id: v.id,
            banner: v.banner,
            canAnimate: !0,
            size: 600
        })
    }, [v?.id, v?.banner, s]);
    return (0, n.jsx)("div", {
        className: _.cI,
        style: {
            aspectRatio: "card" === a ? g : x
        },
        onMouseEnter: m,
        onFocus: m,
        onMouseLeave: p,
        onBlur: p,
        children: "card" === a && b ? (0, n.jsx)(A, {
            application: t,
            isHovered: c,
            botBannerUrl: null == j ? void 0 : j,
            botBannerUrlAnimated: null == I ? void 0 : I
        }) : null != j ? (0, n.jsx)(f, {
            isHovered: c,
            url: j,
            animatedUrl: I
        }) : (0, n.jsx)(C, {
            iconURL: l
        })
    })
}