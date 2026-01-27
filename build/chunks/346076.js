/** Chunk was on 39048 **/
/** chunk id: 346076, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(2242),
    s = n(985018),
    a = n(911002),
    o = n(348437),
    c = n(80098),
    d = n(142699);

function u(e) {
    let {
        imageSrc: t,
        description: n
    } = e;
    return (0, r.jsxs)("div", {
        className: a.kD,
        children: [(0, r.jsx)("div", {
            className: a.sM,
            children: (0, r.jsx)("img", {
                className: a.Bp,
                src: t,
                alt: ""
            })
        }), (0, r.jsx)("div", {
            className: a.Q7,
            children: (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: n
            })
        })]
    })
}

function g() {
    let e = [{
        imageSrc: d,
        description: s.intl.string(s.t.lT0ZNS)
    }, {
        imageSrc: o,
        description: s.intl.string(s.t.ihN2Wb)
    }, {
        imageSrc: c,
        description: s.intl.string(s.t.c8krDQ)
    }];
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: s.intl.string(s.t.R9rNIk)
        }), (0, r.jsx)(i.hKd, {
            size: 24
        }), (0, r.jsx)("div", {
            className: a.LL,
            children: e.map(e => (0, r.jsx)(u, {
                imageSrc: e.imageSrc,
                description: e.description
            }, e.imageSrc))
        }), (0, r.jsx)(i.hKd, {
            size: 24
        }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: s.intl.format(s.t.oxW30N, {
                creatorPortalUrl: l.nd
            })
        })]
    })
}