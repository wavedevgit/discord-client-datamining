/** chunk id: 922283 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var a = n(627968),
    l = n(64700),
    i = n(990078),
    r = n(397927),
    s = n(223273),
    o = n(317607),
    c = n(676937),
    d = n(37948),
    u = n(778591),
    m = n(985018),
    x = n(719187);
let _ = function(e) {
    let {
        detectedGame: t
    } = e, {
        reviews: n,
        applicationId: _
    } = t, g = n?.steam ?? {
        rating: void 0,
        ratingCount: void 0
    }, f = (0, u.I)(_), p = (0, d.A)(), h = (0, o.j)(g.rating, g.ratingCount), v = (0, c.y)(h), A = l.useCallback(() => {
        p(f)
    }, [p, f]);
    return null == f ? null : (0, a.jsxs)("div", {
        className: x.uW,
        children: [(0, a.jsx)("div", {
            className: x.Gf,
            children: (0, a.jsx)(r.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: m.intl.string(m.t.GaAQXP)
            })
        }), (0, a.jsx)(r.DUT, {
            onClick: A,
            className: x.nf,
            role: "link",
            "aria-label": m.intl.string(m.t.YNC5Di),
            children: (0, a.jsx)("div", {
                className: x.kL,
                children: (0, a.jsx)("div", {
                    className: x.WH,
                    children: (0, a.jsxs)("div", {
                        className: x.U6,
                        children: [(0, a.jsxs)("div", {
                            className: x.tN,
                            children: [(0, a.jsx)(r.NXQ, {
                                size: "sm",
                                color: r.LU0.colors.ICON_STRONG.css
                            }), (0, a.jsx)(r.Heading, {
                                variant: "heading-sm/medium",
                                color: "text-strong",
                                children: m.intl.string(m.t.whmopT)
                            })]
                        }), (0, a.jsx)(i.m, {
                            text: h === s.vI.NO_USER_REVIEWS ? m.intl.string(m.t.CLMt8J) : m.intl.format(m.t["lzANJ/"], {
                                rating: g.rating,
                                rating_count: g.ratingCount?.toLocaleString()
                            }).toString(),
                            children: (0, a.jsxs)("div", {
                                className: x.Z0,
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    color: v,
                                    children: (0, c.a)(h)
                                }), null != g.ratingCount && h !== s.vI.NO_USER_REVIEWS && (0, a.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    children: m.intl.format(m.t.sgIoin, {
                                        rating_count: g.ratingCount?.toLocaleString()
                                    }).toString()
                                })]
                            })
                        }, "open-steam-page")]
                    })
                })
            })
        })]
    })
}