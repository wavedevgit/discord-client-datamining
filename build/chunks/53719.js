/** chunk id: 53719, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(990078),
    r = n(397927),
    o = n(290223);

function c(e) {
    let {
        icon: t,
        tooltip: n,
        onClick: s,
        className: c
    } = e;
    return (0, i.jsx)(l.m, {
        text: n,
        children: (0, i.jsx)(r.DUT, {
            "aria-label": n,
            onClick: e => {
                e.preventDefault(), e.stopPropagation(), s(e)
            },
            className: a()(o.hP, c),
            children: (0, i.jsx)(t, {
                className: o.Kk,
                color: "currentColor"
            })
        })
    })
}