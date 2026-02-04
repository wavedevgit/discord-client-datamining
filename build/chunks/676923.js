/** chunk id: 676923, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => u
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(435371),
    a = n(397927),
    o = n(791895);

function u(e) {
    let {
        tooltipText: t,
        showTooltip: n = !0,
        className: r,
        ariaLabel: u,
        onClick: c,
        onMouseEnter: d,
        onMouseLeave: h,
        children: g
    } = e, f = null != u ? u : t, p = (0, l.jsx)(a.DUT, {
        className: i()(o.k, r),
        "aria-label": f,
        onClick: c,
        onMouseEnter: d,
        onMouseLeave: h,
        role: "button",
        children: g
    });
    return n ? (0, l.jsx)(s.m_, {
        text: t,
        "aria-label": f,
        children: p
    }) : p
}