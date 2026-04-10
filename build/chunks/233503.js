/** chunk id: 233503 params = (module,exports,require) **/
l.d(e, {
    default: () => A
});
var i = l(627968),
    n = l(64700),
    a = l(477782),
    r = l(397927),
    s = l(442433),
    u = l(50268),
    d = l(253925),
    c = l(378058),
    o = l(253932),
    g = l(957565),
    p = l(690521),
    b = l(60587),
    m = l(985018);

function A(t) {
    let {
        target: e,
        onSelect: l
    } = t, A = e.getAttribute("data-type"), C = e.getAttribute("data-id"), f = e.getAttribute("data-name"), h = e.getAttribute("data-surrogates"), k = "true" === e.getAttribute("data-animated"), x = e.getAttribute("data-format-type"), y = A === b.g.EMOJI, I = A === b.g.STICKER, E = o.Q_.useSetting(), S = (0, d.A)({
        type: A,
        id: C,
        name: f,
        isInExpressionPicker: !0
    }), _ = null != h ? (0, i.jsx)(a.Dr, {
        id: "copy",
        label: m.intl.string(m.t.ad58UB),
        action: () => (0, g.C)(h)
    }) : null, j = (0, u.A)({
        id: C,
        shiftId: A === b.g.EMOJI ? `<${k?"a":""}:${f?.split("~")[0]}:${C}>` : void 0,
        label: A === b.g.STICKER ? m.intl.string(m.t.SJ3249) : m.intl.string(m.t.Ap2oVy)
    }), V = n.useCallback(() => {
        if (null != C && null != f) {
            if (y)(0, g.C)((0, p.Ez)({
                id: C,
                name: f,
                animated: k
            }));
            else if (I && null != x) {
                let t = (0, c.zg)({
                    id: C,
                    name: f,
                    format_type: Number(x)
                });
                null != t && (0, g.C)(t)
            }
        }
    }, [C, f, k, y, I, x]), v = null != C && null != f && (y && null == h || I && null != x) ? (0, i.jsx)(a.Dr, {
        id: "copy-image-link",
        label: m.intl.string(I ? m.t.B1ubHx : m.t.cIoudn),
        action: V,
        icon: r.qYV,
        leadingAccessory: {
            type: "icon",
            icon: r.qYV
        }
    }) : null;
    return (0, i.jsx)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "expression-picker",
        onClose: s.Z_,
        "aria-label": m.intl.string(m.t.XoasSC),
        onSelect: l,
        className: "context-menu",
        children: (0, i.jsxs)(r.rXV, {
            children: [S, g.p5 && E ? _ ?? j : null, g.p5 && E ? v : null]
        })
    })
}