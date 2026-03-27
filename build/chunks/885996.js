/** chunk id: 885996 params = (module,exports,require) **/
i.d(e, {
    FY: () => I,
    GS: () => S,
    OP: () => p
});
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    a = i(187322),
    r = i(855522),
    u = i(158954),
    o = i(827734),
    c = i(592136),
    d = i(276438);
let S = 5;

function p(t) {
    let {
        description: e,
        imgSrc: i,
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
                    children: [(0, n.jsx)(u.EYj, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: I
                    }), (0, n.jsx)("div", {
                        className: c.Sl,
                        children: null != i ? (0, n.jsx)("img", {
                            src: i.toString(),
                            alt: ""
                        }) : (0, n.jsx)(u.bhD, {
                            color: o.A.colors.ICON_STRONG,
                            size: "custom",
                            height: 48,
                            width: 48
                        })
                    }), null != l ? l({
                        onClick: t => {
                            t.stopPropagation(), p?.()
                        }
                    }) : null, E, null != e && "" !== e && (0, n.jsx)(u.EYj, {
                        className: c.h_,
                        color: "text-default",
                        variant: "text-sm/medium",
                        children: e
                    })]
                })
            }), null != T && (0, n.jsx)("div", {
                className: c.xl,
                children: (0, n.jsx)(u.EYj, {
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
                        children: [(0, n.jsx)(u.EYj, {
                            color: "text-default",
                            variant: "eyebrow",
                            children: r.A.Messages.STOREFRONT_BENEFITS_TITLE
                        }), _.length > C ? (0, n.jsxs)(n.Fragment, {
                            children: [_.slice(0, C), (0, n.jsx)(u.EYj, {
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
        icon: e,
        header: i,
        description: l
    } = t;
    return (0, n.jsxs)("div", {
        className: c.w2,
        children: [(0, n.jsx)("div", {
            className: c.z8,
            children: e
        }), (0, n.jsxs)("div", {
            children: [null != i && (0, n.jsx)(u.EYj, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: i
            }), (0, n.jsx)(u.EYj, {
                variant: "text-sm/normal",
                children: l
            })]
        })]
    })
}