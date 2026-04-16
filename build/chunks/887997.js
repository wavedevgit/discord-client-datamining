/** chunk id: 887997 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(366999),
    o = n(927578),
    d = n(788868),
    c = n(466919),
    u = n(985018),
    m = n(441924);

function g(e) {
    let t, n, {
        showChargingUpState: s,
        rowValueText: a,
        endsAt: o,
        fractionalState: g,
        activationDate: _,
        hasPremiumGroup: x
    } = e;
    x ? (t = u.intl.string(c.default["/S02sx"]), n = u.intl.string(c.default.OPJNST)) : s ? (t = u.intl.string(u.t["hT6i/0"]), n = null != _ ? u.intl.format(u.t["0Vwb/l"], {
        activateDate: _
    }) : null) : (t = u.intl.string(u.t["3G0CTC"]), n = g === d.xc.FP_SUB_PAUSED ? u.intl.format(u.t.MMvaIG, {
        resumeDate: o.toDate()
    }) : null);
    let h = l()({
            [m.Hs]: s,
            [m.mT]: !s
        }),
        A = l()({
            [m.CQ]: s,
            [m.ZM]: !s
        }),
        p = l()({
            [m.EM]: !s
        });
    return (0, i.jsxs)("div", {
        className: m.r6,
        children: [(0, i.jsxs)("div", {
            className: m.Nv,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: p,
                children: t
            }), null !== n && (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: n
            })]
        }), !x && (0, i.jsx)("div", {
            className: m.ZS,
            children: (0, i.jsx)("div", {
                className: h,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/semibold",
                    className: A,
                    children: a
                })
            })
        })]
    })
}
let _ = function(e) {
    let {
        fractionalPremiumInfo: t,
        className: n,
        activationDate: s,
        hasPremiumGroup: d
    } = e, c = (0, o.kX)(t), _ = c.length > 0, x = (0, a.Ay)(t.endsAt, a.yE.SHORT_TIME), h = _ ? c : x;
    return (0, i.jsx)("div", {
        children: (0, i.jsxs)("div", {
            className: l()(n, m.f8),
            children: [(0, i.jsx)("div", {
                className: m.J_,
                children: (0, i.jsxs)("div", {
                    className: m.Bh,
                    children: [(0, i.jsx)("div", {
                        className: m.xt,
                        children: (0, i.jsx)(r.tvc, {
                            size: "md",
                            color: "white",
                            className: m.T8
                        })
                    }), (0, i.jsx)("div", {
                        className: m.pt,
                        children: (0, i.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: u.intl.string(u.t.DFMPWS)
                        })
                    }), (0, i.jsx)(r.Text, {
                        className: m.PJ,
                        variant: "text-md/semibold",
                        children: c.length > 0 ? c : u.intl.string(u.t["B66Z+f"])
                    })]
                })
            }), (0, i.jsx)(g, {
                showChargingUpState: _,
                rowValueText: h,
                endsAt: t.endsAt,
                fractionalState: t.fractionalState,
                activationDate: s,
                hasPremiumGroup: d
            })]
        })
    })
}