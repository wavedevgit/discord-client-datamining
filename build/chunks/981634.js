/** chunk id: 981634, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(417597),
    a = n(397927),
    o = n(709066),
    c = n(351906),
    d = n(89200);

function u(e) {
    let {
        className: t,
        avatarURL: n,
        name: i,
        bot: u,
        verifiedBot: g,
        userTag: m
    } = e, p = (0, s.bG)([c.A], () => c.A.hidePersonalInformation);
    return (0, r.jsxs)("div", {
        className: l()(d.kL, t),
        children: [(0, r.jsx)(a.euF, {
            className: d.my,
            src: n,
            size: a._3J.SIZE_24,
            "aria-label": i
        }), (0, r.jsxs)("div", {
            className: d.FS,
            children: [(0, r.jsx)(a.Text, {
                tag: "span",
                className: d.UU,
                color: "text-strong",
                variant: "text-sm/semibold",
                children: i
            }), u ? (0, r.jsx)(o.A, {
                className: d.AO,
                verified: g
            }) : null, p ? null : (0, r.jsx)(a.Text, {
                tag: "span",
                color: "interactive-text-default",
                className: d.a1,
                variant: "text-sm/normal",
                children: m
            })]
        })]
    })
}