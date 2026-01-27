/** Chunk was on 60667 **/
/** chunk id: 743790, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => d
});
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(573435),
    o = n(260509),
    c = n(369752);

function d(e) {
    let {
        guild: t,
        size: n
    } = e, i = (0, o.Iv)(t, n, !1, !0), d = (0, o.Rb)(t);
    return (0, r.jsx)(a.Ay, {
        className: c.zc,
        mask: a.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: null != i ? (0, r.jsx)("img", {
            src: i,
            alt: t.name,
            height: n,
            width: n
        }) : (0, r.jsx)("div", {
            className: c.FS,
            children: (0, r.jsx)(s.Text, {
                className: l()({
                    [c.ri]: 20 === n
                }),
                color: "text-subtle",
                variant: "text-md/semibold",
                children: d
            })
        })
    })
}