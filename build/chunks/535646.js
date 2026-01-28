/** Chunk was on 5606 **/
/** chunk id: 535646, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(775602),
    o = n(201805),
    c = n(461797),
    d = n(985018),
    u = n(428208);

function p(e) {
    let {
        preset: t,
        onShuffle: n
    } = e, p = (0, l.bG)([a.A], () => a.A.useReducedMotion), _ = (0, o.Xf)({
        useReducedMotion: p
    }), {
        name: m,
        header: g
    } = i.useMemo(() => {
        let e = (0, c.Wt)(t);
        return {
            name: e.getName(),
            header: e.getHeaderSrc()
        }
    }, [t]);
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [(0, r.jsx)(s.DUT, {
            onClick: () => {
                n(), _.startAnimation(!1)
            },
            className: u.x6,
            "aria-label": d.intl.string(d.t["44yJxh"]),
            children: _.render()
        }), (0, r.jsxs)(s.DUT, {
            onClick: () => {
                n(), _.startAnimation(!1)
            },
            "aria-label": "".concat(m, ": ").concat(d.intl.string(d.t["44yJxh"])),
            className: u.Lt,
            children: [(0, r.jsx)("img", {
                alt: "",
                "aria-hidden": !0,
                src: g,
                className: u.L_
            }), (0, r.jsx)(s.Text, {
                className: u._e,
                variant: "text-sm/bold",
                color: "always-white",
                children: m
            })]
        })]
    })
}