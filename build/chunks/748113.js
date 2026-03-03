/** chunk id: 748113, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968);
n(64700);
var a = n(397927),
    i = n(573435),
    r = n(486020),
    s = n(985018),
    o = n(248065);
let d = e => {
    let {
        entry: t
    } = e, {
        id: n,
        icon: d,
        name: c
    } = t, u = r.Ay.getGuildIconURL({
        id: n,
        icon: d,
        size: 32
    }) ?? void 0;
    return (0, l.jsxs)("div", {
        className: o.kL,
        children: [(0, l.jsx)(a.Heading, {
            className: o.wx,
            variant: "heading-sm/semibold",
            children: s.intl.string(s.t.nTe4HC)
        }), (0, l.jsx)("div", {
            className: o.bo,
            children: (0, l.jsxs)("div", {
                className: o.OA,
                children: [(0, l.jsx)(i.Ay, {
                    mask: i.Ay.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: o.$d,
                    children: (0, l.jsx)("img", {
                        src: u,
                        alt: "",
                        className: o.$f
                    })
                }), (0, l.jsx)(a.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: c
                })]
            })
        })]
    })
}