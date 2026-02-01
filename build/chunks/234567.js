/** chunk id: 234567, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(397927),
    s = n(569989),
    o = n(630487);

function c(e) {
    let {
        className: t,
        roleColor: n,
        roleName: r,
        hasRemoveIcon: c = !1,
        onClick: u,
        disabled: d = !1,
        verified: h = !1
    } = e;
    return (0, l.jsx)(a.DUT, {
        className: i()(t, o.x6, {
            [o.r9]: d
        }),
        onClick: d ? void 0 : u,
        "aria-disabled": d,
        role: "button",
        children: (0, l.jsx)(s.A, {
            className: o.JC,
            roleColor: n,
            roleName: r,
            verified: h,
            children: c && (0, l.jsx)(a.PGe, {
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