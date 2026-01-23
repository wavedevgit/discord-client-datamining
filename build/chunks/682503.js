/** Chunk was on 87916 **/
/** chunk id: 682503, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => h
}), n(896048);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(732955),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(855057),
    _ = n(702211),
    A = n(699576),
    f = n(954571),
    g = n(504974),
    m = n(248067),
    p = n(652215),
    x = n(339984),
    N = n(985018),
    b = n(392491);

function h(e) {
    let {
        transitionState: t,
        onClose: l,
        onComplete: h,
        uploadType: y,
        showUpsellHeader: E,
        analyticsPage: R
    } = e, [j, v] = i.useState(!1), I = (0, o.k34)(), {
        analyticsLocations: L,
        newestAnalyticsLocation: P
    } = (0, d.Ay)(c.A.GIF_PICKER);
    async function w(e) {
        let {
            gifSrc: t
        } = e;
        if (null == t || j) return;
        v(!0);
        let i = (0, m.g)(t),
            r = await fetch(i),
            s = await r.blob();
        l(), (0, o.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("35929"), n.e("74571"), n.e("67449")]).then(n.bind(n, 142630));
            return t => (0, a.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), a.forEach(function(t) {
                        var a;
                        a = n[t], t in e ? Object.defineProperty(e, t, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = a
                    })
                }
                return e
            }({
                imageUri: i,
                file: new File([s], "tenor.gif", {
                    type: "image/gif"
                }),
                onCrop: h,
                uploadType: y,
                showUpsellHeader: E
            }, t))
        }, {
            contextKey: I
        })
    }
    i.useEffect(() => {
        f.default.track(p.HAw.OPEN_MODAL, {
            type: p.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: L,
            location: {
                page: R
            }
        })
    }, [L, R]);
    let S = y === x.HL.AVATAR || y === x.HL.BANNER,
        U = (0, _.b)(!S);
    return (0, a.jsx)(d.f5, {
        value: L,
        children: (0, a.jsxs)(s.dWK, {
            onClose: l,
            transitionState: t,
            children: [(0, a.jsx)(s.rQ0, {
                title: N.intl.string(N.t["xsC+/y"])
            }), E && !U && (0, a.jsx)("div", {
                className: b.It,
                children: (0, a.jsx)(g.A, {
                    type: y,
                    analyticsPage: R,
                    analyticsSection: p.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                    isGIF: !0
                })
            }), (0, a.jsxs)("div", {
                className: b.SD,
                children: [(0, a.jsx)(u.A, {
                    className: r()(b.XC, {
                        [b.bX]: j
                    }),
                    onSelectGIF: w,
                    headingColor: "text-subtle",
                    hideFavorites: !0
                }), j && (0, a.jsx)(o.y$y, {
                    className: b.u1
                }), E && U && (0, a.jsx)(A.A, {
                    uploadType: y,
                    analyticsSource: P,
                    showUpsell: !0,
                    className: b.Kt
                })]
            })]
        })
    })
}