/** chunk id: 620700, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(591487), n(727858), n(747238), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(380610),
    o = n(348056),
    s = n(833291),
    l = n(100392),
    c = n(950980),
    u = n(836156);
let d = i.lazy(() => n.e("67696").then(n.bind(n, 881267)).then(e => ({
        default: e.PlaygroundEmbed
    }))),
    f = RegExp("^" + s.st.source, s.st.flags);

function p(e) {
    return {
        match: (e, t) => t.allowLinks && t.allowDevLinks ? f.exec(e) : null,
        parse: (e, t) => ({
            target: e,
            type: "devLink"
        }),
        react: (e, t, n) => {
            let s = e.target[0];
            return (0, a.h4)(s) ? (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)("span", {
                    children: s
                }), (0, r.jsx)(o.A, {
                    url: s
                }, s)]
            }, n.key) : (0, l.W0)(s) ? (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)("span", {
                    children: s
                }), (0, r.jsx)(c.Z, {
                    url: s
                })]
            }, n.key) : (0, u.i)(s) ? (0, r.jsx)(i.Fragment, {
                children: (0, r.jsxs)(i.Suspense, {
                    fallback: null,
                    children: [(0, r.jsx)("span", {
                        children: s
                    }), (0, r.jsx)(d, {
                        url: s
                    })]
                })
            }, n.key) : (0, r.jsx)("span", {
                children: s
            }, n.key)
        },
        order: 6
    }
}