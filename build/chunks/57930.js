/** chunk id: 57930, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => x
});
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(241524),
    d = i(573435),
    c = i(263063),
    o = i(260509),
    u = i(486020),
    m = i(492171);

function x(e) {
    let {
        guild: t,
        outline: i
    } = e, a = (0, r.A)("(max-width: 600px), (max-height: 600px)") ? c.DN.LARGER : c.DN.XLARGE, x = c.iu[a], _ = c.s[a], h = n.useMemo(() => u.Ay.getGuildIconURL({
        id: t.id,
        icon: t.icon,
        size: x
    }), [t.icon, t.id, x]), g = (0, o.Rb)(t), A = null != h ? (0, l.jsx)("img", {
        src: h,
        alt: "",
        className: m.OV
    }) : (0, l.jsx)("div", {
        className: m.ef,
        style: {
            fontSize: _[g.length] ?? _[_.length - 1]
        },
        children: g
    });
    return i ? (0, l.jsx)("div", {
        className: s()(m._C, m.AY),
        children: (0, l.jsx)(d.Ay, {
            mask: d.Ay.Masks.SQUIRCLE,
            width: x + 8,
            height: x + 8,
            children: (0, l.jsx)("div", {
                className: m.$d,
                children: (0, l.jsx)(d.Ay, {
                    mask: d.Ay.Masks.SQUIRCLE,
                    width: x,
                    height: x,
                    children: A
                })
            })
        })
    }) : (0, l.jsx)("div", {
        className: m._C,
        children: (0, l.jsx)(d.Ay, {
            mask: d.Ay.Masks.SQUIRCLE,
            width: x,
            height: x,
            children: A
        })
    })
}