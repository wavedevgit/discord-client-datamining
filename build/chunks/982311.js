/** chunk id: 982311 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(421380),
    a = n(397927),
    o = n(416052),
    d = n(793574),
    c = n(688810),
    u = n(915089),
    m = n(264779),
    g = n(985018),
    _ = n(961302);

function x(e) {
    let {
        onClose: t,
        transitionState: n
    } = e;
    return (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        input: (0, i.jsx)("div", {
            className: _.aR
        }),
        onClose: async () => await t(),
        actions: [{
            text: g.intl.string(g.t.cpT0Cq),
            variant: "primary",
            onClick: t
        }],
        transitionState: n,
        children: (0, i.jsxs)("div", {
            className: _.t4,
            children: [(0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t.iufib1)
            }), (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                className: _.G3,
                children: g.intl.string(g.t.eAn6z2)
            })]
        })
    })
}
let h = function(e) {
    let {
        onClose: t,
        onClaim: n,
        code: h,
        outboundPromotion: A,
        transitionState: p
    } = e, [T, f] = s.useState(null), S = (0, u.GV)(), {
        analyticsLocations: E
    } = (0, c.Ay)(d.A.USER_SETTINGS_GIFT_INVENTORY);
    return (s.useEffect(() => {
        null == h && (0, m.kd)({
            promotionId: A.id,
            analyticsLocations: E
        }).then(e => n(e)).catch(e => f(e?.body?.code))
    }, [h, A.id, n, E]), null != T) ? (0, i.jsx)(x, {
        onClose: t,
        transitionState: p
    }) : null == h ? (0, i.jsx)(a.y$y, {
        className: _.Lq
    }) : (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: (0, i.jsxs)("div", {
            className: _.N1,
            children: [(0, i.jsx)("div", {
                className: _.Qw
            }), (0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t["23BfZh"])
            }), (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                className: _.G3,
                children: A.outboundRedemptionModalBody
            })]
        }),
        actions: [{
            text: g.intl.string(g.t.TulDPl),
            variant: "secondary",
            onClick: async () => await t()
        }, {
            text: g.intl.string(g.t["+zx47d"]),
            variant: "primary",
            onClick: () => {
                let e = (0, m.kc)(h, A);
                window.open(e, "_blank")
            }
        }],
        transitionState: p,
        "aria-label": S,
        children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(a.cGx, {
                className: _.M5
            }), (0, i.jsx)(l.D0$, {
                label: g.intl.string(g.t.s9LFQh),
                helperText: g.intl.string(g.t["F+nFTZ"]),
                children: (0, i.jsx)(o.A, {
                    value: h,
                    buttonColor: r.$n.Colors.BRAND,
                    buttonLook: r.$n.Looks.FILLED,
                    delay: 1e3
                })
            })]
        })
    })
}