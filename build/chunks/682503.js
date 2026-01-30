/** chunk id: 682503, original params: e,t,a (module,exports,require) **/
a.d(t, {
    default: () => N
}), a(896048), a(693327), a(554719), a(680155), a(323874), a(14289), a(35956), a(747238);
var n = a(627968),
    i = a(64700),
    c = a(503698),
    o = a.n(c),
    r = a(732955),
    s = a(397927),
    l = a(793574),
    d = a(688810),
    u = a(855057),
    p = a(702211),
    _ = a(699576),
    m = a(954571),
    A = a(504974),
    f = a(439193),
    g = a(652215),
    h = a(339984),
    x = a(985018),
    b = a(392491);

function N(e) {
    let {
        transitionState: t,
        onClose: c,
        onComplete: N,
        uploadType: y,
        showUpsellHeader: E,
        analyticsPage: j
    } = e, [R, v] = i.useState(!1), w = (0, s.k34)(), {
        analyticsLocations: I,
        newestAnalyticsLocation: L
    } = (0, d.Ay)(l.A.GIF_PICKER);
    async function P(e) {
        let t, {
            gifSrc: i
        } = e;
        if (null == i || R) return;
        v(!0);
        let o = (0, f.s)(i),
            r = await fetch(o),
            l = await r.blob(),
            d = "" !== l.type ? l.type : function(e) {
                var t;
                switch (null == (t = new URL(e).pathname.split(".").pop()) ? void 0 : t.toLowerCase()) {
                    case "gif":
                    default:
                        return "image/gif";
                    case "webp":
                        return "image/webp";
                    case "png":
                        return "image/png";
                    case "jpg":
                    case "jpeg":
                        return "image/jpeg"
                }
            }(o),
            u = "jpeg" === (t = d.split("/")[1]) ? ".jpg" : null != t && "" !== t ? ".".concat(t) : ".gif",
            p = "selected".concat(u);
        c(), (0, s.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([a.e("35929"), a.e("74571"), a.e("67449")]).then(a.bind(a, 142630));
            return t => (0, n.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = a[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({
                imageUri: o,
                file: new File([l], p, {
                    type: d
                }),
                onCrop: N,
                uploadType: y,
                showUpsellHeader: E
            }, t))
        }, {
            contextKey: w
        })
    }
    i.useEffect(() => {
        m.default.track(g.HAw.OPEN_MODAL, {
            type: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: I,
            location: {
                page: j
            }
        })
    }, [I, j]);
    let S = y === h.HL.AVATAR || y === h.HL.BANNER,
        T = (0, p.b)(!S);
    return (0, n.jsx)(d.f5, {
        value: I,
        children: (0, n.jsxs)(r.dWK, {
            onClose: c,
            transitionState: t,
            children: [(0, n.jsx)(r.rQ0, {
                title: x.intl.string(x.t["xsC+/y"])
            }), E && !T && (0, n.jsx)("div", {
                className: b.It,
                children: (0, n.jsx)(A.A, {
                    type: y,
                    analyticsPage: j,
                    analyticsSection: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                    isGIF: !0
                })
            }), (0, n.jsxs)("div", {
                className: b.SD,
                children: [(0, n.jsx)(u.A, {
                    className: o()(b.XC, {
                        [b.bX]: R
                    }),
                    onSelectGIF: P,
                    headingColor: "text-subtle",
                    hideFavorites: !0
                }), R && (0, n.jsx)(s.y$y, {
                    className: b.u1
                }), E && T && (0, n.jsx)(_.A, {
                    uploadType: y,
                    analyticsSource: L,
                    showUpsell: !0,
                    className: b.Kt
                })]
            })]
        })
    })
}