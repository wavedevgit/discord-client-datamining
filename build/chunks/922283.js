/** chunk id: 922283, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => x
});
var n = i(627968),
    l = i(64700),
    a = i(505779),
    s = i(990078),
    r = i(397927),
    c = i(524799),
    o = i(223273),
    d = i(880405),
    u = i(985018),
    m = i(719187);
let x = function(e) {
    let {
        websites: t,
        reviews: i
    } = e, x = i?.steam ?? {
        rating: void 0,
        ratingCount: void 0
    }, g = t.find(e => e.category === a.V.STEAM), h = (0, c.j)(x.rating, x.ratingCount), f = function(e) {
        switch (e) {
            case o.vI.NO_USER_REVIEWS:
                return "text-subtle";
            case o.vI.OVERWHELMINGLY_POSITIVE:
            case o.vI.VERY_POSITIVE:
            case o.vI.POSITIVE:
            case o.vI.MOSTLY_POSITIVE:
                return "steam-review-text-positive";
            case o.vI.MIXED:
                return "steam-review-text-mixed";
            case o.vI.MOSTLY_NEGATIVE:
            case o.vI.NEGATIVE:
            case o.vI.VERY_NEGATIVE:
            case o.vI.OVERWHELMINGLY_NEGATIVE:
                return "steam-review-text-negative";
            default:
                return "text-subtle"
        }
    }(h), [j, p] = l.useState(!1), v = l.useCallback(() => {
        p(!0)
    }, []), A = l.useCallback(() => {
        p(!1)
    }, []), E = l.useCallback(() => {
        null != g && window.open((0, d.L)(g.url), "_blank", "noreferrer noopener")
    }, [g]);
    return null == g ? null : (0, n.jsxs)("div", {
        className: m.uW,
        children: [(0, n.jsx)("div", {
            className: m.Gf,
            children: (0, n.jsx)(r.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: u.intl.string(u.t.GaAQXP)
            })
        }), (0, n.jsx)(s.m, {
            text: u.intl.string(u.t.YNC5Di),
            shouldShow: !j,
            children: (0, n.jsx)(r.DUT, {
                onClick: E,
                className: m.nf,
                role: "link",
                "aria-label": u.intl.string(u.t.YNC5Di),
                children: (0, n.jsx)("div", {
                    className: m.kL,
                    children: (0, n.jsx)("div", {
                        className: m.WH,
                        children: (0, n.jsxs)("div", {
                            className: m.U6,
                            children: [(0, n.jsxs)("div", {
                                className: m.tN,
                                children: [(0, n.jsx)(r.NXQ, {
                                    size: "sm",
                                    color: r.LU0.colors.ICON_STRONG.css
                                }), (0, n.jsx)(r.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    children: u.intl.string(u.t.whmopT)
                                })]
                            }), (0, n.jsx)(s.m, {
                                text: h === o.vI.NO_USER_REVIEWS ? u.intl.string(u.t.CLMt8J) : u.intl.format(u.t["lzANJ/"], {
                                    rating: x.rating,
                                    rating_count: x.ratingCount?.toLocaleString()
                                }).toString(),
                                onTooltipShow: v,
                                onTooltipHide: A,
                                children: (0, n.jsxs)("div", {
                                    className: m.Z0,
                                    children: [(0, n.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        color: f,
                                        children: function(e) {
                                            switch (e) {
                                                case o.vI.NO_USER_REVIEWS:
                                                    return u.intl.string(u.t.CLMt8J);
                                                case o.vI.OVERWHELMINGLY_POSITIVE:
                                                    return u.intl.string(u.t["75sx1S"]);
                                                case o.vI.VERY_POSITIVE:
                                                    return u.intl.string(u.t["EkOVg+"]);
                                                case o.vI.POSITIVE:
                                                    return u.intl.string(u.t.ZUkFtr);
                                                case o.vI.MOSTLY_POSITIVE:
                                                    return u.intl.string(u.t.M7Z09a);
                                                case o.vI.MIXED:
                                                    return u.intl.string(u.t.c8yuHR);
                                                case o.vI.MOSTLY_NEGATIVE:
                                                    return u.intl.string(u.t.H0MSjG);
                                                case o.vI.NEGATIVE:
                                                    return u.intl.string(u.t.vpLrgz);
                                                case o.vI.VERY_NEGATIVE:
                                                    return u.intl.string(u.t["5spYuX"]);
                                                case o.vI.OVERWHELMINGLY_NEGATIVE:
                                                    return u.intl.string(u.t.A8uk5J);
                                                default:
                                                    return null
                                            }
                                        }(h)
                                    }), null != x.ratingCount && h !== o.vI.NO_USER_REVIEWS && (0, n.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: u.intl.format(u.t.sgIoin, {
                                            rating_count: x.ratingCount?.toLocaleString()
                                        }).toString()
                                    })]
                                })
                            }, "open-steam-page")]
                        })
                    })
                })
            })
        })]
    })
}