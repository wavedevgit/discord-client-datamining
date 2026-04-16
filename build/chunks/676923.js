/** chunk id: 676923 params = (module,exports,require) **/
n.d(t, {
    S: () => u
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(435371),
    a = n(397927),
    o = n(286596);

function u(e) {
    let {
        tooltipText: t,
        showTooltip: n = !0,
        className: r,
        ariaLabel: u,
        onClick: d,
        onMouseEnter: c,
        onMouseLeave: h,
        children: g
    } = e, m = u ?? t, f = (0, i.jsx)(a.DUT, {
        className: l()(o.k, r),
        "aria-label": m,
        onClick: d,
        onMouseEnter: c,
        onMouseLeave: h,
        role: "button",
        children: g
    });
    return n ? (0, i.jsx)(s.m_, {
        text: t,
        "aria-label": m,
        children: f
    }) : f
}