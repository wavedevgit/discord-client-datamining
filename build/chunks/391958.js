/** Chunk was on 39048 **/
/** chunk id: 391958, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(727904),
    c = n(985018),
    d = n(973184);

function u(e) {
    let {
        onChangeText: t,
        maxWordCount: n,
        className: l,
        textAreaClassName: u,
        subtitleText: g,
        initialValue: m
    } = e, p = i.useMemo(() => null != m ? m : [], [m]), {
        value: f,
        onChange: h,
        errorMessage: b
    } = (0, o.A)(t, m, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(d.Qn, l),
            children: [(0, r.jsx)(a.d4u, {
                className: s()(d.To, u),
                value: f,
                onChange: h,
                placeholder: c.intl.string(c.t.UyaxJy)
            }), (0, r.jsx)(a.Text, {
                className: d.fE,
                variant: "text-xs/normal",
                color: "text-muted",
                children: "".concat(p.length, " / ").concat(n)
            })]
        }), null != b ? (0, r.jsx)(a.Text, {
            className: s()(d.dG, d.kc),
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: b
        }) : (0, r.jsx)(a.Text, {
            className: d.dG,
            variant: "text-xs/normal",
            color: "text-default",
            children: null != g ? g : c.intl.string(c.t.Gm6G5x)
        })]
    })
}