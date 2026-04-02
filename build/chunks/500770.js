/** chunk id: 500770 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(397927),
    s = n(915089),
    o = n(308234),
    d = n(724609),
    c = n(411342),
    u = n(985018),
    _ = n(576666);

function m(e) {
    let {
        hidePurchaseToUnlockBadge: t,
        showDraftBadge: n,
        className: a,
        children: s
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(_.v0, a),
        children: [s, !t && (0, i.jsxs)("div", {
            className: _.su,
            children: [(0, i.jsx)(l.XAi, {
                size: "xs",
                className: _.hz,
                color: "currentColor",
                "aria-hidden": !0
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                className: _.__invalid_unlockText,
                children: u.intl.string(u.t.YmIiSe)
            })]
        }), n && (0, i.jsx)("div", {
            className: _.vW,
            children: (0, i.jsx)(d.k, {})
        })]
    })
}

function h(e) {
    let {
        onShowFullDescription: t,
        variant: n
    } = e, a = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Text, {
            variant: n,
            color: null != t ? "text-link" : "interactive-text-hover",
            children: u.intl.string(u.t["5fmYjW"])
        }), (0, i.jsx)(l.EdP, {
            size: "xs",
            color: "currentColor",
            className: _.D6
        })]
    });
    return null == t ? (0, i.jsx)("div", {
        className: _.dO,
        children: a
    }) : (0, i.jsx)(l.DUT, {
        className: r()(_.dO, _.hY),
        onClick: e => {
            e.stopPropagation(), null != t && t()
        },
        children: a
    })
}

function p(e) {
    let {
        imageUrl: t,
        name: n,
        description: a,
        formattedPrice: d,
        role: p,
        ctaComponent: g,
        shouldShowFullDescriptionButton: A = !0,
        onShowFullDescription: x,
        productType: f,
        onTapCard: C,
        actionMenu: I,
        showOpaqueBackground: E = !1,
        hideRoleTag: v = !1,
        lineClamp: b = 1,
        cardWidth: T = 332,
        cardHeight: S,
        thumbnailHeight: y = 187,
        descriptionTextVariant: N = "text-sm/normal",
        isDraft: j = !1
    } = e, L = (0, s.Ld)(), R = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m, {
            showDraftBadge: j,
            hidePurchaseToUnlockBadge: !0,
            children: (0, i.jsx)("img", {
                alt: "",
                src: t,
                className: _.K_,
                style: {
                    height: y
                }
            })
        }), (0, i.jsxs)("div", {
            className: _.MS,
            children: [(0, i.jsxs)("div", {
                className: _.Ag,
                children: [(0, i.jsx)(l.Heading, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: _.tZ,
                    id: L,
                    children: n
                }), (0, i.jsx)(l.M1G, {
                    children: (0, i.jsx)(o.A, {
                        variant: N,
                        color: "text-muted",
                        lineClamp: b,
                        text: a
                    })
                }), A && (0, i.jsx)(h, {
                    onShowFullDescription: x,
                    variant: N
                }), v || null == p || "" === p.name ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.hKd, {
                        size: 16
                    }), (0, i.jsx)(c.A, {
                        role: p
                    })]
                })]
            }), I]
        }), (0, i.jsxs)("div", {
            className: _.kP,
            children: [(0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "interactive-text-active",
                className: _.__invalid_productPrice,
                children: d ?? u.intl.string(u.t["4uLhAp"])
            }), (0, i.jsx)(l.Text, {
                variant: "text-xxs/normal",
                color: "text-default",
                className: _.__invalid_productType,
                children: f
            }), (0, i.jsx)("div", {
                className: _.QW,
                onClick: e => {
                    e.stopPropagation()
                },
                children: g
            })]
        })]
    });
    return null == C ? (0, i.jsx)("article", {
        className: r()(_.Um, E ? _.sG : _.Wi),
        "aria-labelledby": L,
        children: R
    }) : (0, i.jsx)("div", {
        style: {
            width: T,
            height: S
        },
        children: (0, i.jsx)(l.sqX, {
            tag: "article",
            "aria-label": u.intl.formatToPlainString(u.t["e+TmJa"], {
                productName: n
            }),
            className: r()(_.Um, E ? _.sG : _.Wi, _.GA),
            onClick: C,
            children: R
        })
    })
}