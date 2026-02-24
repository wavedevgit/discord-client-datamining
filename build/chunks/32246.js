/** chunk id: 32246, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => g
});
var l = s(627968);
s(64700);
var a = s(503698),
    n = s.n(a),
    i = s(559949),
    r = s(158954),
    o = s(990078),
    d = s(397927),
    c = s(945096),
    u = s(73392),
    m = s(750656),
    _ = s(927961),
    x = s(985018),
    h = s(880203),
    p = s(248997);

function g(e) {
    let {
        selectedFontId: t,
        setSelectedFontId: s,
        displayName: a,
        className: g
    } = e, f = t !== i.x.DEFAULT, N = (0, c.Xr)(a);
    return (0, l.jsxs)("div", {
        className: g,
        children: [(0, l.jsxs)(r.DZT, {
            variant: "heading-md/semibold",
            className: h.s,
            children: [x.intl.string(_.default.nP0ngb), (0, l.jsx)(d.tvc, {
                size: "xs",
                color: d.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, l.jsx)(r.BJc, {
            direction: "horizontal",
            align: "center",
            wrap: !0,
            children: m.rA.map(e => {
                let a = (0, u.p)(e),
                    i = e === t;
                return (0, l.jsx)(o.m, {
                    text: x.intl.string(a.name),
                    asContainer: !0,
                    children: (0, l.jsx)(d.DUT, {
                        className: n()(p.SO, {
                            [p.wH]: i
                        }),
                        onClick: () => s(e),
                        "aria-label": x.intl.string(a.name),
                        children: (0, l.jsx)(r.EYj, {
                            variant: "text-lg/semibold",
                            color: i ? "text-strong" : "text-default",
                            className: n()(p.FH, a.className),
                            children: "Gg"
                        })
                    })
                }, e)
            })
        }), f && N && (0, l.jsxs)("div", {
            className: p.Lb,
            children: [(0, l.jsx)(r.mir, {
                size: "lg"
            }), (0, l.jsx)(r.EYj, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: x.intl.string(_.default["+O1xL2"])
            })]
        })]
    })
}