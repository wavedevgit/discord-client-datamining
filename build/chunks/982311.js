/** chunk id: 982311, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    a = n(158954),
    l = n(421380),
    r = n(397927),
    o = n(416052),
    c = n(793574),
    d = n(688810),
    u = n(915089),
    _ = n(264779),
    m = n(985018),
    A = n(712569);

function g(e) {
    let {
        onClose: t,
        transitionState: n
    } = e;
    return (0, i.jsx)(a.Modal, {
        title: "",
        size: "md",
        input: (0, i.jsx)("div", {
            className: A.aR
        }),
        onClose: async () => await t(),
        actions: [{
            text: m.intl.string(m.t.cpT0Cq),
            variant: "primary",
            onClick: t
        }],
        transitionState: n,
        children: (0, i.jsxs)("div", {
            className: A.t4,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t.iufib1)
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: A.G3,
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
    } = e, [E, C] = s.useState(null), T = (0, u.GV)(), {
        analyticsLocations: S
    } = (0, d.Ay)(c.A.USER_SETTINGS_GIFT_INVENTORY);
    return (s.useEffect(() => {
        null == h && (0, _.kd)({
            promotionId: x.id,
            analyticsLocations: S
        }).then(e => n(e)).catch(e => C(e?.body?.code))
    }, [h, x.id, n, S]), null != E) ? (0, i.jsx)(g, {
        onClose: t,
        transitionState: p
    }) : null == h ? (0, i.jsx)(r.y$y, {
        className: A.Lq
    }) : (0, i.jsx)(a.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: (0, i.jsxs)("div", {
            className: A.N1,
            children: [(0, i.jsx)("div", {
                className: A.Qw
            }), (0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t["23BfZh"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: A.G3,
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
        "aria-label": T,
        children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.cGx, {
                className: A.M5
            }), (0, i.jsx)(a.D0$, {
                label: m.intl.string(m.t.s9LFQh),
                helperText: m.intl.string(m.t["F+nFTZ"]),
                children: (0, i.jsx)(o.A, {
                    value: h,
                    buttonColor: l.$n.Colors.BRAND,
                    buttonLook: l.$n.Looks.FILLED,
                    delay: 1e3
                })
            })]
        })
    })
}