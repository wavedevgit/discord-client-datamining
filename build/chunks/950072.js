/** chunk id: 950072, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    C: () => E
});
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(397927),
    s = n(417454),
    o = n(775602),
    u = n(967144),
    c = n(818348);

function E(e) {
    var t;
    let {
        role: n,
        guildId: r
    } = e, s = (0, u.X_)(r, null != n ? n : void 0, null == n ? void 0 : n.colorStrings), c = (0, a.bG)([o.A], () => o.A.roleStyle), E = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(), _ = null != (t = null == n ? void 0 : n.colorString) ? t : E;
    return null == n ? null : "dot" === c ? (0, l.jsx)(i.WYI, {
        color: null != _ ? _ : void 0,
        colors: s,
        background: !1,
        tooltip: !1
    }) : (0, l.jsx)(i.RYH, {
        color: null != _ ? _ : null,
        colors: s
    })
}

function _(e) {
    var t;
    let {
        guildId: n,
        role: a,
        className: o,
        canRemove: u = !1,
        onRemove: E = c.tE
    } = e, _ = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(), d = null != (t = null == a ? void 0 : a.colorString) ? t : _, g = r.useMemo(() => ({
        backgroundColor: "".concat(d, "27")
    }), [d]);
    return null == a ? null : (0, l.jsx)(i.DUT, {
        children: (0, l.jsx)(s.b_, {
            className: o,
            style: g,
            role: a,
            guildId: n,
            canRemove: u,
            onRemove: E
        })
    })
}