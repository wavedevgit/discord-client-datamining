/** chunk id: 500770 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(397927),
    a = n(915089),
    o = n(308234),
    d = n(724609),
    c = n(411342),
    u = n(985018),
    m = n(576666);

function _(e) {
    let {
        hidePurchaseToUnlockBadge: t,
        showDraftBadge: n,
        className: l,
        children: a
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(m.v0, l),
        children: [a, !t && (0, i.jsxs)("div", {
            className: m.su,
            children: [(0, i.jsx)(r.XAi, {
                size: "xs",
                className: m.hz,
                color: "currentColor",
                "aria-hidden": !0
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                className: m.__invalid_unlockText,
                children: u.intl.string(u.t.YmIiSe)
            })]
        }), n && (0, i.jsx)("div", {
            className: m.vW,
            children: (0, i.jsx)(d.k, {})
        })]
    })
}

function h(e) {
    let {
        onShowFullDescription: t,
        variant: n
    } = e, l = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.Text, {
            variant: n,
            color: null != t ? "text-link" : "interactive-text-hover",
            children: u.intl.string(u.t["5fmYjW"])
        }), (0, i.jsx)(r.EdP, {
            size: "xs",
            color: "currentColor",
            className: m.D6
        })]
    });
    return null == t ? (0, i.jsx)("div", {
        className: m.dO,
        children: l
    }) : (0, i.jsx)(r.DUT, {
        className: s()(m.dO, m.hY),
        onClick: e => {
            e.stopPropagation(), null != t && t()
        },
        children: l
    })
}

function p(e) {
    let {
        imageUrl: t,
        name: n,
        description: l,
        formattedPrice: d,
        role: p,
        ctaComponent: g,
        shouldShowFullDescriptionButton: A = !0,
        onShowFullDescription: x,
        productType: f,
        onTapCard: C,
        actionMenu: E,
        showOpaqueBackground: I = !1,
        hideRoleTag: v = !1,
        lineClamp: b = 1,
        cardWidth: T = 332,
        cardHeight: y,
        thumbnailHeight: N = 187,
        descriptionTextVariant: S = "text-sm/normal",
        isDraft: j = !1
    } = e, L = (0, a.Ld)(), R = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_, {
            showDraftBadge: j,
            hidePurchaseToUnlockBadge: !0,
            children: (0, i.jsx)("img", {
                alt: "",
                src: t,
                className: m.K_,
                style: {
                    height: N
                }
            })
        }), (0, i.jsxs)("div", {
            className: m.MS,
            children: [(0, i.jsxs)("div", {
                className: m.Ag,
                children: [(0, i.jsx)(r.Heading, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: m.tZ,
                    id: L,
                    children: n
                }), (0, i.jsx)(r.M1G, {
                    children: (0, i.jsx)(o.A, {
                        variant: S,
                        color: "text-muted",
                        lineClamp: b,
                        text: l
                    })
                }), A && (0, i.jsx)(h, {
                    onShowFullDescription: x,
                    variant: S
                }), v || null == p || "" === p.name ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.hKd, {
                        size: 16
                    }), (0, i.jsx)(c.A, {
                        role: p
                    })]
                })]
            }), E]
        }), (0, i.jsxs)("div", {
            className: m.kP,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "interactive-text-active",
                className: m.__invalid_productPrice,
                children: d ?? u.intl.string(u.t["4uLhAp"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-xxs/normal",
                color: "text-default",
                className: m.__invalid_productType,
                children: f
            }), (0, i.jsx)("div", {
                className: m.QW,
                onClick: e => {
                    e.stopPropagation()
                },
                children: g
            })]
        })]
    });
    return null == C ? (0, i.jsx)("article", {
        className: s()(m.Um, I ? m.sG : m.Wi),
        "aria-labelledby": L,
        children: R
    }) : (0, i.jsx)("div", {
        style: {
            width: T,
            height: y
        },
        children: (0, i.jsx)(r.sqX, {
            tag: "article",
            "aria-label": u.intl.formatToPlainString(u.t["e+TmJa"], {
                productName: n
            }),
            className: s()(m.Um, I ? m.sG : m.Wi, m.GA),
            onClick: C,
            children: R
        })
    })
}