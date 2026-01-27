/** Chunk was on 33563 **/
/** chunk id: 216410, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => c
}), t(228524);
var l = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    s = t(187322),
    u = t(158954),
    o = t(581444),
    a = t(671816);

function c(e) {
    let {
        title: n,
        description: t,
        headerImage: r,
        onDetails: c,
        onPurchase: d,
        PurchaseButton: p,
        GiftButton: m,
        availabilityLabel: b
    } = e;
    return (0, l.jsx)(s.vN, {
        children: (0, l.jsxs)("div", {
            className: i()(o.iE, a.t),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != d && d()
            },
            onKeyUp: e => {
                "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d())
            },
            children: [(0, l.jsx)("div", {
                className: o.Td,
                style: null != r ? {
                    backgroundImage: null != r ? "url(".concat(r.toString(), ")") : void 0
                } : void 0,
                children: null == r && (0, l.jsx)(u.qyI, {
                    color: "white",
                    size: "custom",
                    height: 80,
                    width: 80
                })
            }), (0, l.jsxs)("div", {
                className: o.zH,
                children: [(0, l.jsx)(u.EYj, {
                    color: "text-strong",
                    variant: "text-md/semibold",
                    children: n
                }), null != t && (0, l.jsx)(u.EYj, {
                    className: o.h_,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: t
                })]
            }), (null != p || null != m) && (0, l.jsxs)("div", {
                className: o.qr,
                children: [null != p && (0, l.jsx)(u.EYj, {
                    color: "interactive-text-default",
                    variant: "text-sm/normal",
                    children: b
                }), (0, l.jsxs)("div", {
                    className: o.GC,
                    children: [null != p && (0, l.jsx)(p, {
                        onClick: e => {
                            e.stopPropagation(), null == d || d()
                        }
                    }), null != m && (0, l.jsx)(m, {})]
                })]
            })]
        })
    })
}