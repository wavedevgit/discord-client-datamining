/** chunk id: 178856, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(391526);
let l = e => {
    let {
        label: t,
        onClick: n,
        submitting: l
    } = e;
    return (0, i.jsx)(s.DUT, {
        onClick: l ? void 0 : n,
        className: a.x6,
        children: (0, i.jsxs)("div", {
            className: a.hQ,
            children: [l ? (0, i.jsx)(s.y$y, {
                type: s.y$y.Type.PULSING_ELLIPSIS,
                className: a.__invalid_spinner
            }) : (0, i.jsx)(s.Text, {
                variant: "text-md/medium",
                className: a.Pf,
                children: t
            }), (0, i.jsx)(s.abt, {
                size: "md",
                color: "currentColor",
                className: a.UE
            })]
        })
    })
}