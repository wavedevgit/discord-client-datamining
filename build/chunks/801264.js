/** chunk id: 801264, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d,
    k: () => l
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(51130),
    l = function(e) {
        return e.INFO = "info", e.WARNING = "warning", e
    }({});
let c = {
        info: s.pq,
        warning: s.$e
    },
    u = {
        info: o.mir,
        warning: o.EpV
    };

function d(e) {
    let {
        children: t,
        className: n,
        look: i = "info"
    } = e, l = u[i];
    return (0, r.jsxs)("div", {
        className: a()(s.zr, n, c[i]),
        children: [(0, r.jsx)(l, {
            className: s.Kk,
            color: "currentColor"
        }), (0, r.jsx)(o.Text, {
            className: s.Qq,
            variant: "text-sm/medium",
            color: "text-default",
            children: t
        })]
    })
}