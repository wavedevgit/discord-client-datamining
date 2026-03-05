/** chunk id: 982311, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
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
    g = n(985018),
    m = n(424019);

function A(e) {
    let {
        onClose: t,
        transitionState: n
    } = e;
    return (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        input: (0, i.jsx)("div", {
            className: m.aR
        }),
        onClose: async () => await t(),
        actions: [{
            text: g.intl.string(g.t.cpT0Cq),
            variant: "primary",
            onClick: t
        }],
        transitionState: n,
        children: (0, i.jsxs)("div", {
            className: m.t4,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t.iufib1)
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: m.G3,
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
        outboundPromotion: p,
        transitionState: x
    } = e, [E, T] = s.useState(null), S = (0, u.GV)(), {
        analyticsLocations: C
    } = (0, c.Ay)(d.A.USER_SETTINGS_GIFT_INVENTORY);
    return (s.useEffect(() => {
        null == h && (0, _.kd)({
            promotionId: p.id,
            analyticsLocations: C
        }).then(e => n(e)).catch(e => T(e?.body?.code))
    }, [h, p.id, n, C]), null != E) ? (0, i.jsx)(A, {
        onClose: t,
        transitionState: x
    }) : null == h ? (0, i.jsx)(r.y$y, {
        className: m.Lq
    }) : (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: (0, i.jsxs)("div", {
            className: m.N1,
            children: [(0, i.jsx)("div", {
                className: m.Qw
            }), (0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t["23BfZh"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: m.G3,
                children: p.outboundRedemptionModalBody
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
                let e = (0, _.kc)(h, p);
                window.open(e, "_blank")
            }
        }],
        transitionState: x,
        "aria-label": S,
        children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.cGx, {
                className: m.M5
            }), (0, i.jsx)(l.D0$, {
                label: g.intl.string(g.t.s9LFQh),
                helperText: g.intl.string(g.t["F+nFTZ"]),
                children: (0, i.jsx)(o.A, {
                    value: h,
                    buttonColor: a.$n.Colors.BRAND,
                    buttonLook: a.$n.Looks.FILLED,
                    delay: 1e3
                })
            })]
        })
    })
}