/** chunk id: 215050 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(397927),
    s = n(775602),
    d = n(607470),
    u = n(930125),
    h = n(282108),
    c = n(619517),
    m = n(644447),
    p = n(608214),
    g = n(838541),
    f = n(985018),
    A = n(713737);

function x(e) {
    return `media-view-scroll-thumbnail-${e}`
}
let y = r.memo(function(e) {
    let {
        item: t,
        enabledContentHarmTypeFlags: n = 0
    } = e, r = function(e) {
        if ("IMAGE" === e.type) return (0, m.E)({
            proxyURL: e.proxyUrl,
            url: e.url
        });
        if ("VIDEO" === e.type) {
            if (null != e.poster) return e.poster;
            if (null != e.proxyUrl) return (0, p.VZ)(e.proxyUrl)
        }
        return null
    }(t);
    return null == r && "VIDEO" === t.type ? (0, i.jsx)(d.A, {
        src: `${t.url}#t=1`,
        preload: "metadata",
        muted: !0,
        style: {
            width: 40,
            height: 40,
            objectFit: "cover"
        }
    }) : null == r ? null : (0, h.qo)({
        type: u.D.GenericMedia,
        media: t
    }, n) ? (0, i.jsx)(o.BJc, {
        align: "center",
        justify: "center",
        className: A.cd,
        style: {
            width: 40,
            height: 40
        },
        children: (0, i.jsx)(o.DAq, {
            size: "sm",
            color: "white"
        })
    }) : (0, i.jsx)(c.Ay, {
        width: t.width ?? 40,
        height: t.height ?? 40,
        maxWidth: 40,
        maxHeight: 40,
        useFullWidth: !0,
        src: r,
        shouldAnimate: !1,
        shouldRenderAccessory: !1,
        srcIsAnimated: t.srcIsAnimated,
        alt: t.alt,
        mediaLayoutType: g.dG.MOSAIC
    })
});

function w(e) {
    let {
        items: t,
        currentIndex: n,
        onGalleryItemClick: a,
        className: d,
        enabledContentHarmTypeFlags: u
    } = e, h = r.useRef(null);
    return r.useLayoutEffect(() => {
        let e = document.getElementById(x(n));
        null != h.current && null != e && h.current.scrollIntoViewNode({
            node: e,
            animate: !s.A.useReducedMotion,
            padding: 20
        })
    }, [n]), (0, i.jsx)("div", {
        className: l()(A.IL, d),
        children: (0, i.jsx)(o.ChK, {
            orientation: "horizontal",
            className: l()(A.nV, d),
            ref: h,
            onClick: e => e.stopPropagation(),
            children: t.map((e, r) => {
                let s = r === n,
                    d = s ? f.t["qv/U5V"] : f.t.zviMAG;
                return (0, i.jsx)(o.DUT, {
                    id: x(r),
                    className: l()(A.Qq, {
                        [A.AD]: !s,
                        [A.$1]: 0 === r,
                        [A.HV]: r === t.length - 1
                    }),
                    "aria-label": f.intl.formatToPlainString(d, {
                        pageNumber: r + 1,
                        totalPages: t.length
                    }),
                    onClick: () => a(r),
                    children: (0, i.jsx)(y, {
                        item: e,
                        enabledContentHarmTypeFlags: u
                    })
                }, r)
            })
        })
    })
}