/** chunk id: 743790 params = (module,exports,require) **/
n.d(t, {
    $: () => a
});
var i = n(627968),
    r = n(397927),
    l = n(573435),
    o = n(260509),
    s = n(229095);

function a(e) {
    let {
        guild: t,
        size: n
    } = e, a = (0, o.Iv)(t, n, !1, !0), d = (0, o.Rb)(t);
    return (0, i.jsx)(l.Ay, {
        className: s.z,
        mask: l.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: null != a ? (0, i.jsx)("img", {
            src: a,
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