/** chunk id: 406140 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(263063),
    r = n(253932),
    s = n(218394),
    o = n(258335),
    d = n(249850);

function c(e) {
    let {
        coverImageAsset: t,
        title: n,
        guild: c,
        description: u,
        children: A
    } = e, h = r.kt.useSetting(), _ = (0, s.j)(), [m, g] = (0, o.A)(t, _ && h);
    return (0, i.jsxs)("div", {
        className: d.kL,
        children: [(0, i.jsx)("div", {
            ref: m,
            className: d.El,
            children: null != g && (0, i.jsx)("img", {
                src: g,
                alt: "",
                className: d.N4
            })
        }), (0, i.jsx)("div", {
            className: d._C,
            children: (0, i.jsx)(l.Ay, {
                guild: c,
                size: l.Ay.Sizes.XLARGE
            })
        }), (0, i.jsx)(a.Heading, {
            variant: "heading-xl/semibold",
            className: d.H1,
            children: n
        }), (0, i.jsx)(a.Text, {
            className: d.jr,
            variant: "text-md/normal",
            color: "text-default",
            children: u
        }), A]
    })
}