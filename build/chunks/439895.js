/** chunk id: 439895, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048), n(733351);
var a = n(627968),
    l = n(64700),
    r = n(417597),
    i = n(397927),
    s = n(793574),
    o = n(287809),
    c = n(590180),
    d = n(4227),
    u = n(841702),
    m = n(751304),
    p = n(61750),
    h = n(841015);
let x = e => {
        let [t, n] = l.useState(0);
        return l.useLayoutEffect(() => {
            let e = d.A.getPurchase;
            return d.A.getPurchase = e => void 0, d.A.emitChange(), n(1), () => {
                d.A.getPurchase = e, d.A.emitChange()
            }
        }, []), (0, a.jsx)("div", {
            className: h.Do,
            children: (0, a.jsx)(m.A, function(e) {
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
            }({}, e), t)
        })
    },
    g = () => {
        let e = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
            t = (0, r.bG)([c.A], () => c.A.categories),
            n = (0, r.bG)([d.A], () => d.A.purchases),
            m = (0, r.bG)([c.A], () => c.A.lastSuccessfulFetch),
            g = t.size > 0 && n.size > 0 && null != m,
            {
                isFetching: f,
                categories: b
            } = (0, u.Ay)({
                logPerf: !1,
                stalePurchasesOK: !0,
                noOp: g
            }),
            v = g ? t : b,
            j = g || !f && v.size > 0,
            [_, y] = l.useState(""),
            [A, C] = l.useState(null),
            [S, O] = l.useState(null);
        return (l.useEffect(() => {
            if ("" === _.trim() || !j) {
                C(null), O(null);
                return
            }
            let e = c.A.getProduct(_),
                t = c.A.getCategoryForProduct(_);
            null != e && null != t ? (C(e), O(t)) : (C(null), O(null))
        }, [_, j]), f) ? (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: "Loading categories and collectibles..."
        }) : null == e ? (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: "No user found"
        }) : (0, a.jsxs)("div", {
            className: h.kL,
            children: [(0, a.jsxs)("div", {
                className: h.uW,
                children: [(0, a.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Product Configuration"
                }), (0, a.jsxs)("div", {
                    className: h.qp,
                    children: [(0, a.jsx)(i.Text, {
                        variant: "text-md/semibold",
                        className: h.NB,
                        children: "Primary Product SKU ID"
                    }), (0, a.jsx)(i.ksK, {
                        value: _,
                        onChange: y,
                        placeholder: "Enter product SKU ID"
                    }), !j && "" !== _.trim() && (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        className: h.KQ,
                        children: "Loading products..."
                    }), j && "" !== _.trim() && null == A && (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        className: h.kc,
                        children: "Product not found"
                    }), null != A && (0, a.jsxs)(i.Text, {
                        variant: "text-sm/normal",
                        className: h.xT,
                        children: ["Found: ", A.name]
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: h.uW,
                children: [(0, a.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Product Preview"
                }), null != A && null != S ? (0, a.jsxs)("div", {
                    className: h.i1,
                    children: [(0, a.jsx)(x, {
                        skuId: A.skuId
                    }), (0, a.jsx)(i.Button, {
                        variant: "primary",
                        onClick: () => {
                            null != A && null != e && (0, p.A)({
                                product: A,
                                analyticsLocations: [s.A.COLLECTIBLES_SHOP_CARD]
                            })
                        },
                        text: "Show Collectibles Collected Modal"
                    })]
                }) : (0, a.jsx)("div", {
                    className: h.qf,
                    children: (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        className: h.X2,
                        children: "Enter a valid product SKU ID to see the preview"
                    })
                })]
            })]
        })
    }