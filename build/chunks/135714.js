/** chunk id: 135714, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(35368);
let l = e => {
        let {
            data: t,
            disabled: n
        } = e, {
            content: i,
            className: l,
            onClick: c,
            disabled: u
        } = t;
        return (0, r.jsx)(o.vN3, {
            children: (0, r.jsx)("button", {
                type: "button",
                className: a()(s.A, l),
                onClick: c,
                disabled: n || u,
                children: i
            })
        })
    },
    c = e => {
        let {
            buttons: t,
            disabled: n,
            className: i
        } = e;
        return (0, r.jsx)("div", {
            role: "group",
            className: a()(s.O, i),
            children: t.map((e, t) => (0, r.jsx)(l, {
                data: e,
                disabled: n
            }, t))
        })
    }