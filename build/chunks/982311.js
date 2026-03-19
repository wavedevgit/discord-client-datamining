/** chunk id: 982311 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(421380),
    r = n(397927),
    o = n(416052),
    d = n(793574),
    c = n(688810),
    u = n(915089),
    _ = n(264779),
    m = n(985018),
    g = n(712569);

function A(e) {
    let {
        onClose: t,
        transitionState: n
    } = e;
    return (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        input: (0, i.jsx)("div", {
            className: g.aR
        }),
        onClose: async () => await t(),
        actions: [{
            text: m.intl.string(m.t.cpT0Cq),
            variant: "primary",
            onClick: t
        }],
        transitionState: n,
        children: (0, i.jsxs)("div", {
            className: g.t4,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t.iufib1)
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: g.G3,
                children: m.intl.string(m.t.eAn6z2)
            })]
        })
    })
}
let x = function(e) {
    let {
        onClose: t,
        onClaim: n,
        code: x,
        outboundPromotion: h,
        transitionState: p
    } = e, [T, E] = s.useState(null), S = (0, u.GV)(), {
        analyticsLocations: C
    } = (0, c.Ay)(d.A.USER_SETTINGS_GIFT_INVENTORY);
    return (s.useEffect(() => {
        null == x && (0, _.kd)({
            promotionId: h.id,
            analyticsLocations: C
        }).then(e => n(e)).catch(e => E(e?.body?.code))
    }, [x, h.id, n, C]), null != T) ? (0, i.jsx)(A, {
        onClose: t,
        transitionState: p
    }) : null == x ? (0, i.jsx)(r.y$y, {
        className: g.Lq
    }) : (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: (0, i.jsxs)("div", {
            className: g.N1,
            children: [(0, i.jsx)("div", {
                className: g.Qw
            }), (0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t["23BfZh"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: g.G3,
                children: h.outboundRedemptionModalBody
            })]
        }),
        actions: [{
            text: m.intl.string(m.t.TulDPl),
            variant: "secondary",
            onClick: async () => await t()
        }, {
            text: m.intl.string(m.t["+zx47d"]),
            variant: "primary",
            onClick: () => {
                let e = (0, _.kc)(x, h);
                window.open(e, "_blank")
            }
        }],
        transitionState: p,
        "aria-label": S,
        children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.cGx, {
                className: g.M5
            }), (0, i.jsx)(l.D0$, {
                label: m.intl.string(m.t.s9LFQh),
                helperText: m.intl.string(m.t["F+nFTZ"]),
                children: (0, i.jsx)(o.A, {
                    value: x,
                    buttonColor: a.$n.Colors.BRAND,
                    buttonLook: a.$n.Looks.FILLED,
                    delay: 1e3
                })
            })]
        })
    })
}