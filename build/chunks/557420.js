/** chunk id: 557420 params = (module,exports,require) **/
n.d(t, {
    d: () => a
});
var i = n(627968);
n(64700);
var r = n(990078),
    s = n(397927),
    l = n(783931);

function a(e) {
    let {
        text: t,
        tooltipText: n,
        onClick: a,
        disabled: o
    } = e;
    return o ? (0, i.jsxs)("div", {
        className: l.k,
        children: [(0, i.jsx)(s.j96, {
            size: "md",
            color: "currentColor",
            className: l.K
        }), (0, i.jsx)(s.Text, {
            color: "interactive-text-active",
            variant: "text-md/semibold",
            children: t
        })]
    }) : (0, i.jsx)(r.m, {
        text: n,
        shouldShow: null != n,
        children: (0, i.jsxs)(s.DUT, {
            className: l.k,
            onClick: a,
            children: [(0, i.jsx)(s.j96, {
                size: "md",
                color: "currentColor",
                className: l.K
            }), (0, i.jsx)(s.Text, {
                color: "interactive-text-active",
                variant: "text-md/semibold",
                children: t
            })]
        })
    })
}