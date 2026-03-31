/** chunk id: 743790 params = (module,exports,require) **/
n.d(t, {
    $: () => o
});
var i = n(627968),
    r = n(397927),
    s = n(573435),
    a = n(260509),
    l = n(799390);

function o(e) {
    let {
        guild: t,
        size: n
    } = e, o = (0, a.Iv)(t, n, !1, !0), d = (0, a.Rb)(t);
    return (0, i.jsx)(s.Ay, {
        className: l.z,
        mask: s.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: null != o ? (0, i.jsx)("img", {
            src: o,
            alt: t.name,
            height: n,
            width: n
        }) : (0, i.jsx)("div", {
            className: l.F,
            children: (0, i.jsx)(r.Text, {
                color: "text-subtle",
                variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                children: d
            })
        })
    })
}