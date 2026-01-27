/** Chunk was on web.js **/
/** chunk id: 265565, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018),
    o = n(643850);

function s(e) {
    let {
        name: t,
        onRetry: n
    } = e, s = null != t ? t : a.intl.string(a.t["11pdXZ"]);
    return (0, r.jsx)("div", {
        className: o.kL,
        children: (0, r.jsxs)("div", {
            className: o.wR,
            children: [(0, r.jsx)(i.Heading, {
                variant: "heading-lg/medium",
                color: "text-strong",
                children: s
            }), (0, r.jsxs)(i.DUT, {
                className: o.z3,
                onClick: n,
                children: [(0, r.jsx)(i.EpV, {
                    size: "sm",
                    color: "currentColor"
                }), (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-warning",
                    children: a.intl.string(a.t.tmGHjc)
                })]
            })]
        })
    })
}