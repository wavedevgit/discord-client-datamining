/** Chunk was on 77870 **/
/** chunk id: 963702, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(303727),
    s = n(985018),
    a = n(610688);

function o(e) {
    let {
        Icon: t,
        header: n,
        tip: o,
        disableStars: c
    } = e;
    return (0, r.jsxs)("div", {
        className: a.kL,
        children: [(0, r.jsxs)("div", {
            className: a.zc,
            children: [(0, r.jsx)(t, {
                color: "currentColor",
                size: "custom",
                className: a.Kk,
                width: 36,
                height: 36
            }), c ? null : (0, r.jsx)(i.A, {
                className: a.uf
            })]
        }), (0, r.jsx)(l.Heading, {
            className: a.wx,
            variant: "heading-xl/semibold",
            children: n
        }), (0, r.jsxs)(l.Text, {
            color: "text-default",
            variant: "text-xs/normal",
            children: [c ? null : (0, r.jsxs)(l.Text, {
                tag: "span",
                className: a.PP,
                variant: "text-xs/bold",
                color: "text-feedback-positive",
                children: [s.intl.string(s.t["8tvIiN"]), ":", " "]
            }), o]
        })]
    })
}