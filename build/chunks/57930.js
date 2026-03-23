/** chunk id: 57930 params = (module,exports,require) **/
i.d(t, {
    A: () => x
});
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(241524),
    o = i(573435),
    d = i(263063),
    c = i(260509),
    u = i(486020),
    m = i(492171);

function x(e) {
    let {
        guild: t,
        outline: i
    } = e, a = (0, r.A)("(max-width: 600px), (max-height: 600px)") ? d.DN.LARGER : d.DN.XLARGE, x = d.iu[a], g = d.s[a], h = n.useMemo(() => u.Ay.getGuildIconURL({
        id: t.id,
        icon: t.icon,
        size: x
    }), [t.icon, t.id, x]), _ = (0, c.Rb)(t), p = null != h ? (0, l.jsx)("img", {
        src: h,
        alt: "",
        className: m.OV
    }) : (0, l.jsx)("div", {
        className: m.ef,
        style: {
            fontSize: g[_.length] ?? g[g.length - 1]
        },
        children: _
    });
    return i ? (0, l.jsx)("div", {
        className: s()(m._C, m.AY),
        children: (0, l.jsx)(o.Ay, {
            mask: o.Ay.Masks.SQUIRCLE,
            width: x + 8,
            height: x + 8,
            children: (0, l.jsx)("div", {
                className: m.$d,
                children: (0, l.jsx)(o.Ay, {
                    mask: o.Ay.Masks.SQUIRCLE,
                    width: x,
                    height: x,
                    children: p
                })
            })
        })
    }) : (0, l.jsx)("div", {
        className: m._C,
        children: (0, l.jsx)(o.Ay, {
            mask: o.Ay.Masks.SQUIRCLE,
            width: x,
            height: x,
            children: p
        })
    })
}