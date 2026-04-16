/** chunk id: 57930 params = (module,exports,require) **/
l.d(t, {
    A: () => g
});
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(241524),
    c = l(573435),
    u = l(263063),
    d = l(260509),
    o = l(486020),
    m = l(963120);

function g(e) {
    let {
        guild: t,
        outline: l
    } = e, a = (0, r.A)("(max-width: 600px), (max-height: 600px)") ? u.DN.LARGER : u.DN.XLARGE, g = u.iu[a], x = u.s[a], h = i.useMemo(() => o.Ay.getGuildIconURL({
        id: t.id,
        icon: t.icon,
        size: g
    }), [t.icon, t.id, g]), j = (0, d.Rb)(t), A = null != h ? (0, n.jsx)("img", {
        src: h,
        alt: "",
        className: m.OV
    }) : (0, n.jsx)("div", {
        className: m.ef,
        style: {
            fontSize: x[j.length] ?? x[x.length - 1]
        },
        children: j
    });
    return l ? (0, n.jsx)("div", {
        className: s()(m._C, m.AY),
        children: (0, n.jsx)(c.Ay, {
            mask: c.Ay.Masks.SQUIRCLE,
            width: g + 8,
            height: g + 8,
            children: (0, n.jsx)("div", {
                className: m.$d,
                children: (0, n.jsx)(c.Ay, {
                    mask: c.Ay.Masks.SQUIRCLE,
                    width: g,
                    height: g,
                    children: A
                })
            })
        })
    }) : (0, n.jsx)("div", {
        className: m._C,
        children: (0, n.jsx)(c.Ay, {
            mask: c.Ay.Masks.SQUIRCLE,
            width: g,
            height: g,
            children: A
        })
    })
}