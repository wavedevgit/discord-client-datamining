/** Chunk was on web.js **/
/** chunk id: 386971, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    mc: () => u
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(565645),
    l = n(3432),
    c = n(233883);

function u(e) {
    let t, {
        applicationId: n,
        storeListingBenefits: i,
        skuBenefits: a,
        className: o
    } = e;
    return null != i ? t = i.map(e => (0, r.jsx)(f, {
        applicationId: n,
        benefit: e,
        className: o
    }, e.id)) : null != a && (t = a.map((e, t) => (0, r.jsx)(d, {
        benefit: e,
        className: o
    }, t))), t
}

function d(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: i,
        showsDescription: l = !0,
        nameTextVariant: u = "text-md/medium",
        nameTextColor: d = "text-strong"
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c.kL, n),
        children: [null != t.emoji && (0, r.jsx)("div", {
            className: a()(c.qq, i),
            children: (0, r.jsx)(s.A, {
                emojiId: t.emoji.id,
                emojiName: t.emoji.name,
                animated: t.emoji.animated
            })
        }), (0, r.jsxs)("div", {
            className: c.op,
            children: [(0, r.jsx)(o.Text, {
                variant: u,
                color: d,
                className: c.UU,
                children: t.name
            }), l && (0, r.jsx)(o.Text, {
                color: "interactive-text-default",
                variant: "text-sm/normal",
                children: t.description
            })]
        })]
    })
}

function f(e) {
    let {
        applicationId: t,
        benefit: n,
        className: i,
        emojiContainerClassName: s,
        showsDescription: u = !0,
        nameTextVariant: d = "text-md/medium",
        nameTextColor: f = "text-strong"
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c.kL, i),
        children: [(0, r.jsx)("div", {
            className: a()(c.qq, s),
            children: (0, l.N)(t, n.icon)
        }), (0, r.jsxs)("div", {
            className: c.op,
            children: [(0, r.jsx)(o.Text, {
                variant: d,
                color: f,
                className: c.UU,
                children: n.name
            }), u && (0, r.jsx)(o.Text, {
                color: "interactive-text-default",
                variant: "text-sm/normal",
                children: n.description
            })]
        })]
    })
}