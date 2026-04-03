/** chunk id: 743790 params = (module,exports,require) **/
n.d(t, {
    $: () => o
});
var i = n(627968),
    r = n(397927),
    a = n(573435),
    l = n(260509),
    s = n(229095);

function o(e) {
    let {
        guild: t,
        size: n
    } = e, o = (0, l.Iv)(t, n, !1, !0), d = (0, l.Rb)(t);
    return (0, i.jsx)(a.Ay, {
        className: s.z,
        mask: a.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: null != o ? (0, i.jsx)("img", {
            src: o,
            alt: t.name,
            height: n,
            width: n
        }) : (0, i.jsx)("div", {
            className: s.F,
            children: (0, i.jsx)(r.Text, {
                color: "text-subtle",
                variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                children: d
            })
        })
    })
}