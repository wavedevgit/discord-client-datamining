/** chunk id: 535646 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(775602),
    o = n(201805),
    d = n(461797),
    c = n(985018),
    u = n(458525);

function m(e) {
    let {
        preset: t,
        onShuffle: n
    } = e, m = (0, l.bG)([r.A], () => r.A.useReducedMotion), g = (0, o.Xf)({
        useReducedMotion: m
    }), {
        name: _,
        header: x
    } = s.useMemo(() => {
        let e = (0, d.Wt)(t);
        return {
            name: e.getName(),
            header: e.getHeaderSrc()
        }
    }, [t]);
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [(0, i.jsx)(a.DUT, {
            onClick: () => {
                n(), g.startAnimation(!1)
            },
            className: u.x6,
            "aria-label": c.intl.string(c.t["44yJxh"]),
            children: g.render()
        }), (0, i.jsxs)(a.DUT, {
            onClick: () => {
                n(), g.startAnimation(!1)
            },
            "aria-label": `${_}: ${c.intl.string(c.t["44yJxh"])}`,
            className: u.Lt,
            children: [(0, i.jsx)("img", {
                alt: "",
                "aria-hidden": !0,
                src: x,
                className: u.L_
            }), (0, i.jsx)(a.Text, {
                className: u._e,
                variant: "text-sm/bold",
                color: "always-white",
                children: _
            })]
        })]
    })
}