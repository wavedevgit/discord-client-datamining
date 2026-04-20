/** chunk id: 286498 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(837381),
    r = n(311907),
    o = n(397927),
    c = n(297413),
    d = n(966327),
    u = n(235986),
    h = n(290863),
    m = n(427262),
    A = n(973081);

function g(e) {
    let {
        user: t,
        row: n,
        hideDiscriminator: l,
        comparator: g,
        selected: _,
        checked: p,
        disabled: f = !1,
        onClick: E,
        onMouseEnter: C,
        "aria-setsize": x,
        "aria-posinset": S
    } = e, I = (0, r.bG)([h.A], () => h.A.getStatus(t.id)), T = (0, s.rm)(String(t.id));
    return (0, i.jsx)(o.DUT, {
        id: `user-row-${n}`,
        className: a()(A.Se, {
            [A.r9]: f
        }),
        onClick: () => {
            E?.(t.id)
        },
        onMouseEnter: () => {
            C?.(n)
        },
        ...T,
        role: "option",
        "aria-selected": p,
        "aria-disabled": f,
        "aria-setsize": x,
        "aria-posinset": S,
        children: (0, i.jsxs)(u.A, {
            align: u.A.Align.CENTER,
            className: a()(A.Bc, {
                [A.oz]: _
            }),
            children: [(0, i.jsx)(d.A, {
                user: t,
                status: I,
                className: A.my
            }), (0, i.jsxs)("div", {
                className: A.YW,
                children: [(0, i.jsx)(o.Text, {
                    tag: "strong",
                    className: A.$R,
                    "aria-hidden": !0,
                    variant: "text-md/medium",
                    children: null != g && g === t.tag ? m.Ay.getName(t) : null != g && "" !== g ? g : m.Ay.getName(t)
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: (0, i.jsx)(c.A, {
                        user: t,
                        hideDiscriminator: l,
                        className: A.xK,
                        forceUsername: !0
                    })
                })]
            }), (0, i.jsx)(o.P7L, {
                checked: p,
                disabled: f
            })]
        })
    })
}