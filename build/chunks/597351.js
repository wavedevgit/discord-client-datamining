/** chunk id: 597351 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(990078),
    o = n(397927),
    s = n(922118);

function u(e) {
    let {
        onClick: t,
        icon: n,
        tooltip: r,
        className: u
    } = e, d = n({
        color: "currentColor",
        size: "custom",
        width: 20,
        height: 20
    });
    return (0, i.jsx)(l.m, {
        text: r,
        position: "bottom",
        children: (0, i.jsx)(o.DUT, {
            onClick: e => {
                t(e)
            },
            "aria-label": r,
            className: a()(s.x, u),
            children: (0, i.jsx)("div", {
                className: s.h,
                children: d
            })
        })
    })
}