/** chunk id: 885996 params = (module,exports,require) **/
e.d(i, {
    FY: () => I,
    GS: () => S,
    OP: () => p
});
var n = e(627968);
e(64700);
var l = e(503698),
    s = e.n(l),
    a = e(187322),
    r = e(855522),
    o = e(158954),
    u = e(827734),
    c = e(989335),
    d = e(940113);
let S = 5;

function p(t) {
    let {
        description: i,
        imgSrc: e,
        renderPurchaseButton: l,
        onPurchase: p,
        title: I,
        onDetails: A,
        benefitItems: _,
        benefitsSummary: T,
        subtitle: E,
        maxBenefits: C = S
    } = t;
    return (0, n.jsx)(a.vN, {
        children: (0, n.jsxs)("div", {
            className: s()(c.kL, d.t),
            tabIndex: 0,
            onClick: () => {
                null != A ? A() : null != p && p()
            },
            onKeyUp: t => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != A ? A() : null != p && p())
            },
            children: [(0, n.jsx)("div", {
                className: c.Nr,
                children: (0, n.jsxs)("div", {
                    className: c.rf,
                    children: [(0, n.jsx)(o.EYj, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: I
                    }), (0, n.jsx)("div", {
                        className: c.Sl,
                        children: null != e ? (0, n.jsx)("img", {
                            src: e.toString(),
                            alt: ""
                        }) : (0, n.jsx)(o.bhD, {
                            color: u.A.colors.ICON_STRONG,
                            size: "custom",
                            height: 48,
                            width: 48
                        })
                    }), null != l ? l({
                        onClick: t => {
                            t.stopPropagation(), p?.()
                        }
                    }) : null, E, null != i && "" !== i && (0, n.jsx)(o.EYj, {
                        className: c.h_,
                        color: "text-default",
                        variant: "text-sm/medium",
                        children: i
                    })]
                })
            }), null != T && (0, n.jsx)("div", {
                className: c.xl,
                children: (0, n.jsx)(o.EYj, {
                    color: "interactive-text-default",
                    variant: "text-sm/medium",
                    children: r.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                        count: T
                    })
                })
            }), null != _ && _.length > 0 && (0, n.jsx)("div", {
                className: c.PX,
                children: (0, n.jsx)("div", {
                    className: c.iq,
                    children: (0, n.jsxs)("div", {
                        className: c.Pp,
                        children: [(0, n.jsx)(o.EYj, {
                            color: "text-default",
                            variant: "eyebrow",
                            children: r.A.Messages.STOREFRONT_BENEFITS_TITLE
                        }), _.length > C ? (0, n.jsxs)(n.Fragment, {
                            children: [_.slice(0, C), (0, n.jsx)(o.EYj, {
                                variant: "text-md/semibold",
                                color: "text-subtle",
                                children: r.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                    count: _.length - C
                                })
                            })]
                        }) : _]
                    })
                })
            })]
        })
    })
}

function I(t) {
    let {
        icon: i,
        header: e,
        description: l
    } = t;
    return (0, n.jsxs)("div", {
        className: c.w2,
        children: [(0, n.jsx)("div", {
            className: c.z8,
            children: i
        }), (0, n.jsxs)("div", {
            children: [null != e && (0, n.jsx)(o.EYj, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: e
            }), (0, n.jsx)(o.EYj, {
                variant: "text-sm/normal",
                children: l
            })]
        })]
    })
}