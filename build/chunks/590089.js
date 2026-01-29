/** Chunk was on 2827 **/
/** chunk id: 590089, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => c
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(158954),
    a = n(397927),
    o = n(411809);

function c(e) {
    let {
        headingColor: t = "text-strong",
        leadingElement: n,
        primaryTrailingElement: i,
        secondaryTrailingElement: c,
        title: d,
        description: u,
        onClick: _,
        ref: p,
        style: m
    } = e;
    return (0, r.jsxs)(a.DUT, {
        className: l()(o.EA, {
            [o.vk]: null != _
        }),
        onClick: _,
        innerRef: p,
        style: m,
        children: [null != n && (0, r.jsx)("div", {
            className: o._y,
            children: n
        }), (0, r.jsxs)("div", {
            className: o.jw,
            children: [(0, r.jsx)("div", {
                className: o.eg,
                children: (0, r.jsx)(s.DZT, {
                    variant: "heading-md/medium",
                    color: t,
                    children: d
                })
            }), null != u && (0, r.jsx)(s.EYj, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: u
            })]
        }), (null != i || null != c) && (0, r.jsxs)("div", {
            className: o.fW,
            children: [i, c]
        })]
    })
}