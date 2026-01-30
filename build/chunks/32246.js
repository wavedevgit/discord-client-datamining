/** chunk id: 32246, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => x
});
var n = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(559949),
    o = l(158954),
    i = l(990078),
    c = l(397927),
    d = l(945096),
    u = l(73392),
    m = l(750656),
    p = l(927961),
    f = l(985018),
    g = l(880203),
    _ = l(248997);

function x(e) {
    let {
        selectedFontId: t,
        setSelectedFontId: l,
        displayName: r,
        className: x
    } = e, b = t !== a.x.DEFAULT, h = (0, d.Xr)(r);
    return (0, n.jsxs)("div", {
        className: x,
        children: [(0, n.jsxs)(o.DZT, {
            variant: "heading-md/semibold",
            className: g.s,
            children: [f.intl.string(p.default.nP0ngb), (0, n.jsx)(c.tvc, {
                size: "xs",
                color: c.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, n.jsx)(o.BJc, {
            direction: "horizontal",
            align: "center",
            wrap: !0,
            children: m.rA.map(e => {
                let r = (0, u.p)(e),
                    a = e === t;
                return (0, n.jsx)(i.m, {
                    text: f.intl.string(r.name),
                    asContainer: !0,
                    children: (0, n.jsx)(c.DUT, {
                        className: s()(_.SO, {
                            [_.wH]: a
                        }),
                        onClick: () => l(e),
                        "aria-label": f.intl.string(r.name),
                        children: (0, n.jsx)(o.EYj, {
                            variant: "text-lg/semibold",
                            color: a ? "text-strong" : "text-default",
                            className: s()(_.FH, r.className),
                            children: "Gg"
                        })
                    })
                }, e)
            })
        }), b && h && (0, n.jsxs)("div", {
            className: _.Lb,
            children: [(0, n.jsx)(o.mir, {
                size: "lg"
            }), (0, n.jsx)(o.EYj, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: f.intl.string(p.default["+O1xL2"])
            })]
        })]
    })
}