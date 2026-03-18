/** chunk id: 887997 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(366999),
    o = n(927578),
    d = n(788868),
    c = n(519412),
    u = n(985018),
    _ = n(802937);

function m(e) {
    let t, n, {
        showChargingUpState: s,
        rowValueText: r,
        endsAt: o,
        fractionalState: m,
        activationDate: g,
        hasPremiumGroup: A
    } = e;
    A ? (t = u.intl.string(c.default["/S02sx"]), n = u.intl.string(c.default.OPJNST)) : s ? (t = u.intl.string(u.t["hT6i/0"]), n = null != g ? u.intl.format(u.t["0Vwb/l"], {
        activateDate: g
    }) : null) : (t = u.intl.string(u.t["3G0CTC"]), n = m === d.xc.FP_SUB_PAUSED ? u.intl.format(u.t.MMvaIG, {
        resumeDate: o.toDate()
    }) : null);
    let x = l()({
            [_.Hs]: s,
            [_.mT]: !s
        }),
        h = l()({
            [_.CQ]: s,
            [_.ZM]: !s
        }),
        p = l()({
            [_.EM]: !s
        });
    return (0, i.jsxs)("div", {
        className: _.r6,
        children: [(0, i.jsxs)("div", {
            className: _.Nv,
            children: [(0, i.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                className: p,
                children: t
            }), null !== n && (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: n
            })]
        }), !A && (0, i.jsx)("div", {
            className: _.ZS,
            children: (0, i.jsx)("div", {
                className: x,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    className: h,
                    children: r
                })
            })
        })]
    })
}
let g = function(e) {
    let {
        fractionalPremiumInfo: t,
        className: n,
        activationDate: s,
        hasPremiumGroup: d
    } = e, c = (0, o.kX)(t), g = c.length > 0, A = (0, r.Ay)(t.endsAt, r.yE.SHORT_TIME), x = g ? c : A;
    return (0, i.jsx)("div", {
        children: (0, i.jsxs)("div", {
            className: l()(n, _.f8),
            children: [(0, i.jsx)("div", {
                className: _.J_,
                children: (0, i.jsxs)("div", {
                    className: _.Bh,
                    children: [(0, i.jsx)("div", {
                        className: _.xt,
                        children: (0, i.jsx)(a.tvc, {
                            size: "md",
                            color: "white",
                            className: _.T8
                        })
                    }), (0, i.jsx)("div", {
                        className: _.pt,
                        children: (0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: u.intl.string(u.t.DFMPWS)
                        })
                    }), (0, i.jsx)(a.Text, {
                        className: _.PJ,
                        variant: "text-md/semibold",
                        children: c.length > 0 ? c : u.intl.string(u.t["B66Z+f"])
                    })]
                })
            }), (0, i.jsx)(m, {
                showChargingUpState: g,
                rowValueText: x,
                endsAt: t.endsAt,
                fractionalState: t.fractionalState,
                activationDate: s,
                hasPremiumGroup: d
            })]
        })
    })
}