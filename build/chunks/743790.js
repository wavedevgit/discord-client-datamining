/** chunk id: 743790 params = (module,exports,require) **/
n.d(t, {
    $: () => a
});
var i = n(627968),
    l = n(397927),
    r = n(573435),
    s = n(260509),
    o = n(369752);

function a(e) {
    let {
        guild: t,
        size: n
    } = e, a = (0, s.Iv)(t, n, !1, !0), d = (0, s.Rb)(t);
    return (0, i.jsx)(r.Ay, {
        className: o.z,
        mask: r.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: null != a ? (0, i.jsx)("img", {
            src: a,
            alt: t.name,
            height: n,
            width: n
        }) : (0, i.jsx)("div", {
            className: o.F,
            children: (0, i.jsx)(l.Text, {
                color: "text-subtle",
                variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                children: d
            })
        })
    })
}