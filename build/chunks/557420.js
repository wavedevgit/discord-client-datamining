/** Chunk was on 47841 **/
/** chunk id: 557420, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    d: () => a
});
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(397927),
    s = n(40462);

function a(e) {
    let {
        text: t,
        tooltipText: n,
        onClick: a,
        disabled: o
    } = e;
    return o ? (0, r.jsxs)("div", {
        className: s.k,
        children: [(0, r.jsx)(l.j96, {
            size: "md",
            color: "currentColor",
            className: s.K
        }), (0, r.jsx)(l.Text, {
            color: "interactive-text-active",
            variant: "text-md/semibold",
            children: t
        })]
    }) : (0, r.jsx)(i.m, {
        text: n,
        shouldShow: null != n,
        children: (0, r.jsxs)(l.DUT, {
            className: s.k,
            onClick: a,
            children: [(0, r.jsx)(l.j96, {
                size: "md",
                color: "currentColor",
                className: s.K
            }), (0, r.jsx)(l.Text, {
                color: "interactive-text-active",
                variant: "text-md/semibold",
                children: t
            })]
        })
    })
}