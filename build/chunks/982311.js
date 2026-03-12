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
            children: [(0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t.iufib1)
            }), (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                className: g.G3,
                children: m.intl.string(m.t.eAn6z2)
            })]
        })
    })
}
let h = function(e) {
    let {
        onClose: t,
        onClaim: n,
        code: h,
        outboundPromotion: x,
        transitionState: p
    } = e, [T, E] = s.useState(null), C = (0, u.GV)(), {
        analyticsLocations: S
    } = (0, c.Ay)(d.A.USER_SETTINGS_GIFT_INVENTORY);
    return (s.useEffect(() => {
        null == h && (0, _.kd)({
            promotionId: x.id,
            analyticsLocations: S
        }).then(e => n(e)).catch(e => E(e?.body?.code))
    }, [h, x.id, n, S]), null != T) ? (0, i.jsx)(A, {
        onClose: t,
        transitionState: p
    }) : null == h ? (0, i.jsx)(a.y$y, {
        className: g.Lq
    }) : (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: (0, i.jsxs)("div", {
            className: g.N1,
            children: [(0, i.jsx)("div", {
                className: g.Qw
            }), (0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t["23BfZh"])
            }), (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                className: g.G3,
                children: x.outboundRedemptionModalBody
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
                let e = (0, _.kc)(h, x);
                window.open(e, "_blank")
            }
        }],
        transitionState: p,
        "aria-label": C,
        children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(a.cGx, {
                className: g.M5
            }), (0, i.jsx)(l.D0$, {
                label: m.intl.string(m.t.s9LFQh),
                helperText: m.intl.string(m.t["F+nFTZ"]),
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