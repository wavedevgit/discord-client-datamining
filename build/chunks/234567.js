/** Chunk was on 41727 **/
/** chunk id: 234567, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(397927),
    a = n(569989),
    o = n(630487);

function c(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: c = !1,
        onClick: u,
        disabled: d = !1,
        verified: p = !1
    } = e;
    return (0, r.jsx)(s.DUT, {
        className: i()(t, o.x6, {
            [o.r9]: d
        }),
        onClick: d ? void 0 : u,
        "aria-disabled": d,
        role: "button",
        children: (0, r.jsx)(a.A, {
            className: o.JC,
            roleColor: n,
            roleName: l,
            verified: p,
            children: c && (0, r.jsx)(s.PGe, {
                size: "custom",
                color: "currentColor",
                height: 6,
                width: 6,
                className: o.Tj,
                colorClass: o.eG
            })
        })
    })
}