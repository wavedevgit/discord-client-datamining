/** chunk id: 32246 params = (module,exports,require) **/
a.d(t, {
    A: () => g
});
var n = a(627968);
a(64700);
var s = a(503698),
    l = a.n(s),
    r = a(559949),
    i = a(158954),
    o = a(990078),
    c = a(397927),
    d = a(945096),
    u = a(73392),
    m = a(750656),
    _ = a(486844),
    p = a(985018),
    h = a(399778),
    x = a(696270);

function g(e) {
    let {
        selectedFontId: t,
        setSelectedFontId: a,
        displayName: s,
        className: g
    } = e, f = t !== r.x.DEFAULT, C = (0, d.Xr)(s);
    return (0, n.jsxs)("div", {
        className: g,
        children: [(0, n.jsxs)(i.DZT, {
            variant: "heading-md/semibold",
            className: h.s,
            children: [p.intl.string(_.default.nP0ngb), (0, n.jsx)(c.tvc, {
                size: "xs",
                color: c.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, n.jsx)(i.BJc, {
            direction: "horizontal",
            align: "center",
            wrap: !0,
            children: m.rA.map(e => {
                let s = (0, u.p)(e),
                    r = e === t;
                return (0, n.jsx)(o.m, {
                    text: p.intl.string(s.name),
                    asContainer: !0,
                    children: (0, n.jsx)(c.DUT, {
                        className: l()(x.SO, {
                            [x.wH]: r
                        }),
                        onClick: () => a(e),
                        "aria-label": p.intl.string(s.name),
                        children: (0, n.jsx)(i.EYj, {
                            variant: "text-lg/semibold",
                            color: r ? "text-strong" : "text-default",
                            className: l()(x.FH, s.className),
                            children: "Gg"
                        })
                    })
                }, e)
            })
        }), f && C && (0, n.jsxs)("div", {
            className: x.Lb,
            children: [(0, n.jsx)(i.mir, {
                size: "lg"
            }), (0, n.jsx)(i.EYj, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: p.intl.string(_.default["+O1xL2"])
            })]
        })]
    })
}