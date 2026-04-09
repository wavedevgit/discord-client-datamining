/** chunk id: 922283 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var a = n(627968),
    l = n(64700),
    i = n(792216),
    r = n(990078),
    s = n(397927),
    o = n(223273),
    c = n(317607),
    d = n(409626),
    u = n(676937),
    m = n(133580),
    x = n(37948),
    h = n(778591),
    f = n(465736),
    g = n(985018),
    p = n(928976);

function _(e) {
    let {
        game: t,
        url: n,
        trackAction: i
    } = e, {
        reviews: m
    } = t, h = m?.steam ?? {
        rating: void 0,
        ratingCount: void 0
    }, f = (0, x.A)(), _ = (0, c.j)(h.rating, h.ratingCount), v = (0, u.y)(_), A = l.useCallback(() => {
        i(d.Ws.SteamReviews), f(n)
    }, [f, i, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: A,
        className: p.nf,
        role: "link",
        "aria-label": g.intl.string(g.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: p.U6,
            children: [(0, a.jsxs)("div", {
                className: p.tN,
                children: [(0, a.jsx)(s.NXQ, {
                    size: "sm",
                    color: s.LU0.colors.ICON_STRONG.css
                }), (0, a.jsx)(s.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: g.intl.string(g.t.whmopT)
                })]
            }), (0, a.jsx)(r.m, {
                text: _ === o.vI.NO_USER_REVIEWS ? g.intl.string(g.t.CLMt8J) : g.intl.format(g.t["lzANJ/"], {
                    rating: h.rating,
                    rating_count: h.ratingCount?.toLocaleString()
                }).toString(),
                children: (0, a.jsxs)("div", {
                    className: p.Z0,
                    children: [(0, a.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: v,
                        children: (0, u.a)(_)
                    }), null != h.ratingCount && _ !== o.vI.NO_USER_REVIEWS && (0, a.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: g.intl.format(g.t.sgIoin, {
                            rating_count: h.ratingCount?.toLocaleString()
                        }).toString()
                    })]
                })
            }, "open-steam-page")]
        })
    })
}

function v(e) {
    let {
        game: t,
        url: n,
        trackAction: i
    } = e, {
        reviews: r
    } = t, c = r?.opencritic ?? {
        topCriticRating: void 0,
        topCriticRatingCount: void 0,
        tier: void 0
    }, m = c.tier, h = c.topCriticRating ?? -1, f = c.topCriticRatingCount ?? -1, _ = (h <= 0 || f <= 0) && null == m, v = (0, x.A)(), E = l.useCallback(() => {
        i(d.Ws.OpenCriticReviews), v(n)
    }, [v, i, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: E,
        className: p.nf,
        role: "link",
        "aria-label": g.intl.string(g.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: p.Ur,
            children: [(0, a.jsx)(s.Heading, {
                variant: "heading-sm/medium",
                color: "text-strong",
                children: g.intl.string(g.t["UxvER+"])
            }), (0, a.jsxs)("div", {
                className: p.WA,
                children: [null != m ? (0, a.jsx)(A, {
                    tier: m
                }) : null, null != m && h > 0 && f > 0 ? (0, a.jsx)(b, {
                    rating: h,
                    tier: m
                }) : null, _ ? (0, a.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: (0, u.y)(o.vI.NO_USER_REVIEWS),
                    children: g.intl.string(g.t["0xYzpO"])
                }) : null]
            })]
        })
    })
}

function A(e) {
    let {
        tier: t
    } = e, n = (0, m.a)(t), l = (0, m.GE)(t);
    return (0, a.jsx)(r.m, {
        text: n,
        children: (0, a.jsx)("div", {
            className: p.TE,
            children: (0, a.jsx)("img", {
                src: l,
                alt: n,
                width: 32,
                height: 32,
                draggable: !1
            })
        })
    }, "open-critic-tier")
}

function b(e) {
    let {
        rating: t,
        tier: n
    } = e, {
        foregroundColor: l,
        backgroundColor: i
    } = (0, m.ff)(n);
    return (0, a.jsx)(r.m, {
        text: g.intl.string(g.t.Ub4YR1),
        children: (0, a.jsxs)("div", {
            className: p.TE,
            style: {
                backgroundColor: i
            },
            children: [(0, a.jsx)(f.A, {
                rating: t,
                strokeColor: l
            }), (0, a.jsx)(s.Text, {
                variant: "text-xs/bold",
                color: "always-white",
                className: p.ti,
                children: Math.floor(t)
            })]
        })
    }, "open-critic-rating")
}
let E = function(e) {
    let {
        game: t,
        trackAction: n
    } = e, {
        applicationId: l
    } = t, r = (0, h.I)(l), o = t.opencriticUrl, c = t.steamReleaseStatus !== i.Y.RETIRED_ABANDONED && null != r, d = t.reviews?.opencritic != null && null != o;
    return c || d ? (0, a.jsxs)("div", {
        className: p.uW,
        children: [(0, a.jsx)("div", {
            className: p.Gf,
            children: (0, a.jsx)(s.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: g.intl.string(g.t.GaAQXP)
            })
        }), (0, a.jsxs)("div", {
            className: p.kL,
            children: [c ? (0, a.jsx)("div", {
                className: p.WH,
                children: (0, a.jsx)(_, {
                    game: t,
                    url: r,
                    trackAction: n
                })
            }) : null, d ? (0, a.jsx)("div", {
                className: p.WH,
                children: (0, a.jsx)(v, {
                    game: t,
                    url: o,
                    trackAction: n
                })
            }) : null]
        })]
    }) : null
}