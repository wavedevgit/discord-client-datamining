/** chunk id: 922283, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    a = n(990078),
    s = n(397927),
    r = n(223273),
    c = n(317607),
    o = n(880405),
    d = n(778591),
    u = n(985018),
    m = n(719187);
let x = function(e) {
    let {
        detectedGame: t
    } = e, {
        reviews: n,
        applicationId: x
    } = t, g = n?.steam ?? {
        rating: void 0,
        ratingCount: void 0
    }, h = (0, d.I)(x), f = (0, c.j)(g.rating, g.ratingCount), j = function(e) {
        switch (e) {
            case r.vI.NO_USER_REVIEWS:
                return "text-subtle";
            case r.vI.OVERWHELMINGLY_POSITIVE:
            case r.vI.VERY_POSITIVE:
            case r.vI.POSITIVE:
            case r.vI.MOSTLY_POSITIVE:
                return "steam-review-text-positive";
            case r.vI.MIXED:
                return "steam-review-text-mixed";
            case r.vI.MOSTLY_NEGATIVE:
            case r.vI.NEGATIVE:
            case r.vI.VERY_NEGATIVE:
            case r.vI.OVERWHELMINGLY_NEGATIVE:
                return "steam-review-text-negative";
            default:
                return "text-subtle"
        }
    }(f), [p, I] = l.useState(!1), v = l.useCallback(() => {
        I(!0)
    }, []), E = l.useCallback(() => {
        I(!1)
    }, []), A = l.useCallback(() => {
        null != h && window.open((0, o.L)(h), "_blank", "noreferrer noopener")
    }, [h]);
    return null == h ? null : (0, i.jsxs)("div", {
        className: m.uW,
        children: [(0, i.jsx)("div", {
            className: m.Gf,
            children: (0, i.jsx)(s.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: u.intl.string(u.t.GaAQXP)
            })
        }), (0, i.jsx)(a.m, {
            text: u.intl.string(u.t.YNC5Di),
            shouldShow: !p,
            children: (0, i.jsx)(s.DUT, {
                onClick: A,
                className: m.nf,
                role: "link",
                "aria-label": u.intl.string(u.t.YNC5Di),
                children: (0, i.jsx)("div", {
                    className: m.kL,
                    children: (0, i.jsx)("div", {
                        className: m.WH,
                        children: (0, i.jsxs)("div", {
                            className: m.U6,
                            children: [(0, i.jsxs)("div", {
                                className: m.tN,
                                children: [(0, i.jsx)(s.NXQ, {
                                    size: "sm",
                                    color: s.LU0.colors.ICON_STRONG.css
                                }), (0, i.jsx)(s.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    children: u.intl.string(u.t.whmopT)
                                })]
                            }), (0, i.jsx)(a.m, {
                                text: f === r.vI.NO_USER_REVIEWS ? u.intl.string(u.t.CLMt8J) : u.intl.format(u.t["lzANJ/"], {
                                    rating: g.rating,
                                    rating_count: g.ratingCount?.toLocaleString()
                                }).toString(),
                                onTooltipShow: v,
                                onTooltipHide: E,
                                children: (0, i.jsxs)("div", {
                                    className: m.Z0,
                                    children: [(0, i.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: j,
                                        children: function(e) {
                                            switch (e) {
                                                case r.vI.NO_USER_REVIEWS:
                                                    return u.intl.string(u.t.CLMt8J);
                                                case r.vI.OVERWHELMINGLY_POSITIVE:
                                                    return u.intl.string(u.t["75sx1S"]);
                                                case r.vI.VERY_POSITIVE:
                                                    return u.intl.string(u.t["EkOVg+"]);
                                                case r.vI.POSITIVE:
                                                    return u.intl.string(u.t.ZUkFtr);
                                                case r.vI.MOSTLY_POSITIVE:
                                                    return u.intl.string(u.t.M7Z09a);
                                                case r.vI.MIXED:
                                                    return u.intl.string(u.t.c8yuHR);
                                                case r.vI.MOSTLY_NEGATIVE:
                                                    return u.intl.string(u.t.H0MSjG);
                                                case r.vI.NEGATIVE:
                                                    return u.intl.string(u.t.vpLrgz);
                                                case r.vI.VERY_NEGATIVE:
                                                    return u.intl.string(u.t["5spYuX"]);
                                                case r.vI.OVERWHELMINGLY_NEGATIVE:
                                                    return u.intl.string(u.t.A8uk5J);
                                                default:
                                                    return null
                                            }
                                        }(f)
                                    }), null != g.ratingCount && f !== r.vI.NO_USER_REVIEWS && (0, i.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: u.intl.format(u.t.sgIoin, {
                                            rating_count: g.ratingCount?.toLocaleString()
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