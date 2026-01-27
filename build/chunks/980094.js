/** Chunk was on web.js **/
/** chunk id: 980094, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => l
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(665711),
    o = n(108788);
let s = 20,
    l = e => {
        let {
            application: t,
            iconSize: n = s
        } = e;
        return null == t ? null : (0, r.jsxs)("div", {
            className: o.k,
            children: [(0, r.jsx)(a.W, {
                application: t,
                iconSize: n
            }), (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: t.name
            })]
        })
    }