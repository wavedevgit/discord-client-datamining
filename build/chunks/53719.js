/** chunk id: 53719 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(990078),
    r = n(397927),
    o = n(709609);

function d(e) {
    let {
        icon: t,
        tooltip: n,
        onClick: s,
        className: d
    } = e;
    return (0, i.jsx)(a.m, {
        text: n,
        children: (0, i.jsx)(r.DUT, {
            "aria-label": n,
            onClick: e => {
                e.preventDefault(), e.stopPropagation(), s(e)
            },
            className: l()(o.hP, d),
            children: (0, i.jsx)(t, {
                className: o.Kk,
                color: "currentColor"
            })
        })
    })
}