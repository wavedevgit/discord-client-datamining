/** Chunk was on web.js **/
/** chunk id: 244027, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(569794),
    s = n(930607),
    l = n(647848),
    c = n(397927),
    u = n(210273),
    d = n(508155),
    f = n(652215),
    p = n(985018),
    _ = n(333354),
    h = n(251983);

function m(e) {
    let {
        tier: t,
        isActive: n
    } = e, i = t === f.TVA.TIER_1, c = t === f.TVA.TIER_3, u = t === f.TVA.TIER_1 ? o.v : t === f.TVA.TIER_2 ? s.w : l.H;
    return (0, r.jsxs)("div", {
        className: h.MY,
        children: [(0, r.jsx)("div", {
            className: a()(h.hr, {
                [h.ti]: n,
                [h.YO]: !n,
                [h.JQ]: i,
                [h.Uz]: c
            })
        }), (0, r.jsx)("div", {
            className: a()(h.Zj, {
                [h.jv]: n,
                [h.ip]: t === f.TVA.TIER_1,
                [h.p3]: t === f.TVA.TIER_2,
                [h.wF]: t === f.TVA.TIER_3
            }),
            children: (0, r.jsx)(u, {
                alt: "",
                ariaHidden: !0,
                size: 24
            })
        })]
    })
}

function g(e) {
    let {
        guild: t,
        definition: n
    } = e, {
        tier: i,
        perks: o
    } = n, s = t.premiumTier >= i, l = f.M2T[i];
    return (0, r.jsxs)("div", {
        className: a()(h.Nr, {
            [h.Bm]: s,
            [h.c]: !s
        }),
        children: [(0, r.jsx)(m, {
            tier: i,
            isActive: s
        }), (0, r.jsxs)("div", {
            className: h.zI,
            children: [(0, r.jsxs)("div", {
                className: h.$h,
                children: [(0, r.jsx)(c.Heading, {
                    className: a()(h.JJ, {
                        [h.eX]: !s
                    }),
                    variant: "heading-xl/semibold",
                    color: s ? "text-strong" : void 0,
                    children: p.intl.string(i === f.TVA.TIER_1 ? p.t.nzXtaS : i === f.TVA.TIER_2 ? p.t["h33/uW"] : p.t.BfF6ED)
                }), (0, r.jsxs)("div", {
                    className: h.yC,
                    children: [(0, r.jsx)(c._Jp, {
                        size: "xs",
                        color: "currentColor"
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: p.intl.format(p.t["pob/cL"], {
                            subscriptions: l
                        })
                    })]
                })]
            }), (0, r.jsxs)("div", {
                className: h.PJ,
                children: [o.slice(0, 4).map((e, t) => {
                    if (null != e.predicate && !e.predicate()) return null;
                    let n = (0, u.X)(e.perkIcon);
                    return (0, r.jsxs)("div", {
                        className: a()(h.bK, {
                            [h.o]: !s
                        }),
                        children: [(0, r.jsx)(n, {
                            className: h.kf,
                            color: s ? "var(--text-default)" : "currentColor",
                            size: "sm"
                        }), (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: s ? "text-default" : void 0,
                            children: e.getCopy()
                        })]
                    }, t)
                }), (0, r.jsx)(c.Text, {
                    className: h.wx,
                    variant: "text-md/medium",
                    children: p.intl.string(_.default.nIj3LZ)
                })]
            })]
        })]
    })
}

function E(e) {
    let {
        guild: t,
        className: n
    } = e;
    return (0, r.jsx)("div", {
        className: a()(h.iE, n),
        children: d.t.map(e => (0, r.jsx)(g, {
            guild: t,
            definition: e
        }, e.tier))
    })
}