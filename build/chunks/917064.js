/** chunk id: 917064, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(985018),
    l = n(463006),
    c = n(93364);

function u(e) {
    let {
        className: t
    } = e;
    return (0, r.jsx)("img", {
        className: a()(t, l.Dp),
        src: c,
        alt: ""
    })
}
let d = [{
    icon: o._Jp,
    getText: () => s.intl.string(s.t.TZigSO)
}, {
    icon: u,
    getText: () => s.intl.string(s.t.hjQuV2)
}, {
    icon: o.iTF,
    getText: () => s.intl.string(s.t["2RUcaM"])
}, {
    icon: o.C3E,
    getText: () => s.intl.string(s.t.bJoZKV)
}];

function f(e) {
    let {
        className: t
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.iE, t),
        children: [(0, r.jsx)(o.Heading, {
            className: l.R_,
            variant: "heading-xxl/semibold",
            children: s.intl.string(s.t.IzKs3o)
        }), (0, r.jsx)("div", {
            className: l.kR,
            children: d.map((e, t) => {
                let n = e.icon;
                return (0, r.jsxs)("div", {
                    className: l.Nr,
                    children: [(0, r.jsx)(n, {
                        className: l.Kk
                    }), (0, r.jsx)(o.Text, {
                        className: l.h_,
                        color: "text-muted",
                        variant: "text-md/medium",
                        children: e.getText()
                    })]
                }, t)
            })
        })]
    })
}