/** Chunk was on 5606 **/
/** chunk id: 896005, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(641324),
    c = n(112715),
    d = n(702421);
let u = i.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        useSubtitle: l,
        layout: u,
        initialize: p
    } = t, _ = null == n ? void 0 : n(), m = null == l ? void 0 : l(), g = i.useId(), f = null != _ && "" !== _, b = null != m && "" !== m;
    return (0, c.Z)(p), (0, r.jsxs)("fieldset", {
        "aria-describedby": b ? g : void 0,
        children: [f ? (0, r.jsx)(a.Text, {
            tag: "legend",
            variant: "text-md/semibold",
            color: "text-strong",
            className: s()(d.DD, {
                [d.h0]: b
            }),
            children: _
        }) : null, b ? (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            id: g,
            className: d.VA,
            children: m
        }) : null, (0, r.jsx)(a.BJc, {
            direction: "vertical",
            gap: 8,
            padding: {
                top: 16
            },
            children: u.map(e => (0, r.jsx)(o.A, {
                node: e
            }, e.key))
        })]
    })
})