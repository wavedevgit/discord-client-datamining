/** Chunk was on 11810 **/
/** chunk id: 557420, original params: e,t,n (module,exports,require) **/
n.d(t, {
    d: () => c
});
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(397927),
    o = n(40462);

function c(e) {
    let {
        text: t,
        tooltipText: n,
        onClick: c,
        disabled: s
    } = e;
    return s ? (0, r.jsxs)("div", {
        className: o.k,
        children: [(0, r.jsx)(l.j96, {
            size: "md",
            color: "currentColor",
            className: o.K
        }), (0, r.jsx)(l.Text, {
            color: "interactive-text-active",
            variant: "text-md/semibold",
            children: t
        })]
    }) : (0, r.jsx)(i.m, {
        text: n,
        shouldShow: null != n,
        children: (0, r.jsxs)(l.DUT, {
            className: o.k,
            onClick: c,
            children: [(0, r.jsx)(l.j96, {
                size: "md",
                color: "currentColor",
                className: o.K
            }), (0, r.jsx)(l.Text, {
                color: "interactive-text-active",
                variant: "text-md/semibold",
                children: t
            })]
        })
    })
}