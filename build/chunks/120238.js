/** chunk id: 120238 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(805866),
    r = n(774630),
    o = n(985018),
    d = n(752942);
let c = e => {
    let {
        onSubmit: t,
        disabled: n
    } = e, c = i.useCallback(async () => {
        await t({
            type: s.Ij.Empty
        }), window.location.reload()
    }, [t]);
    return (0, a.jsxs)("div", {
        className: d.kL,
        children: [(0, a.jsx)(l.Heading, {
            variant: "heading-lg/bold",
            className: d.DD,
            children: o.intl.string(r.default.v52itt)
        }), (0, a.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: d.h_,
            children: o.intl.string(r.default["5am8D3"])
        }), (0, a.jsx)(l.BJc, {
            direction: "horizontal",
            justify: "end",
            children: (0, a.jsx)(l.Button, {
                variant: "primary",
                text: o.intl.string(r.default["GDsHl+"]),
                onClick: c,
                disabled: n
            })
        })]
    })
}