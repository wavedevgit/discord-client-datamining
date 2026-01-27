/** Chunk was on 46132 **/
/** chunk id: 233503, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => f
}), n(747238);
var i = n(627968),
    l = n(64700),
    r = n(477782),
    o = n(397927),
    a = n(442433),
    c = n(50268),
    u = n(253925),
    s = n(378058),
    g = n(253932),
    p = n(957565),
    d = n(690521),
    b = n(60587),
    y = n(985018);

function f(t) {
    let {
        target: e,
        onSelect: n
    } = t, f = e.getAttribute("data-type"), O = e.getAttribute("data-id"), j = e.getAttribute("data-name"), m = e.getAttribute("data-surrogates"), A = "true" === e.getAttribute("data-animated"), v = e.getAttribute("data-format-type"), E = f === b.g.EMOJI, S = f === b.g.STICKER, C = g.Q_.useSetting(), I = (0, u.A)({
        type: f,
        id: O,
        name: j,
        isInExpressionPicker: !0
    }), x = null != m ? (0, i.jsx)(r.Dr, {
        id: "copy",
        label: y.intl.string(y.t.ad58UB),
        action: () => (0, p.C)(m)
    }) : null, P = (0, c.A)({
        id: O,
        shiftId: f === b.g.EMOJI ? "<".concat(A ? "a" : "", ":").concat(null == j ? void 0 : j.split("~")[0], ":").concat(O, ">") : void 0,
        label: f === b.g.STICKER ? y.intl.string(y.t.SJ3249) : y.intl.string(y.t.Ap2oVy)
    }), h = l.useCallback(() => {
        if (null != O && null != j) {
            if (E)(0, p.C)((0, d.Ez)({
                id: O,
                name: j,
                animated: A
            }));
            else if (S && null != v) {
                let t = (0, s.zg)({
                    id: O,
                    name: j,
                    format_type: Number(v)
                });
                null != t && (0, p.C)(t)
            }
        }
    }, [O, j, A, E, S, v]), w = null != O && null != j && (E && null == m || S && null != v) ? (0, i.jsx)(r.Dr, {
        id: "copy-image-link",
        label: y.intl.string(y.t["8xHmxo"]),
        action: h,
        icon: o.qYV
    }) : null;
    return (0, i.jsx)(o.W1t, {
        "data-menu-mixed": !0,
        navId: "expression-picker",
        onClose: a.Z_,
        "aria-label": y.intl.string(y.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, i.jsxs)(o.rXV, {
            children: [I, p.p5 && C ? null != x ? x : P : null, p.p5 && C ? w : null]
        })
    })
}