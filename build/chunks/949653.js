/** Chunk was on 41917 **/
/** chunk id: 949653, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var o = n(397927),
    s = n(573648),
    i = n(414121),
    a = n(975571),
    l = n(236863),
    c = n(652215),
    d = n(544105),
    p = n(985018),
    u = n(552762),
    f = n(326513);

function b() {
    return (0, r.jsxs)("div", {
        className: u.rV,
        children: [(0, r.jsxs)("div", {
            className: u.bF,
            children: [(0, r.jsxs)(o.Heading, {
                className: u.n5,
                variant: "text-lg/semibold",
                children: [(0, r.jsx)("div", {
                    className: u.YD,
                    children: (0, r.jsx)("img", {
                        src: s.A.get(c.fg2.XBOX).icon.whiteSVG,
                        alt: ""
                    })
                }), p.intl.string(p.t["12Kx2v"])]
            }), (0, r.jsx)(o.Text, {
                tag: "p",
                variant: "text-md/normal",
                color: "text-default",
                children: p.intl.string(p.t.M5yEcb)
            }), (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: (0, r.jsx)(o.MzZ, {
                    href: a.A.getArticleURL(c.MVz.XBOX_CONNECTION),
                    children: p.intl.string(p.t.hvVgAZ)
                })
            })]
        }), (0, r.jsx)(i.Ay, {
            className: u.C9,
            text: d.EY,
            size: 90
        })]
    })
}

function g(e) {
    let {
        onClose: t
    } = e;
    return (0, r.jsx)(l.b, {
        img: (0, r.jsx)("img", {
            src: f.A,
            width: "124",
            height: "160",
            alt: ""
        }),
        title: p.intl.string(p.t["7QsHmh"]),
        body: p.intl.string(p.t.byYNPX),
        content: (0, r.jsx)(b, {}),
        onClose: t
    })
}