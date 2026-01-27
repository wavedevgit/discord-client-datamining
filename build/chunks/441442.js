/** Chunk was on 39048 **/
/** chunk id: 441442, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(620216),
    o = n(445180);

function c(e) {
    let {
        title: t,
        description: n,
        action: i,
        highlightColor: c = a.t.NONE,
        selected: d = !1,
        subsection: u = null,
        onClick: g,
        className: m,
        disabled: p
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(o.container, m),
        children: [(0, r.jsx)(s.DUT, {
            className: l()(o.clickableContainer, {
                [o.noAction]: null == g,
                [o.disabled]: p
            }, m),
            onClick: p ? void 0 : g,
            children: (0, r.jsxs)("div", {
                className: l()(o.backgroundModifierContainer, o[c], {
                    [o.selected]: d,
                    [o.disabled]: p,
                    [o.noAction]: null == g
                }),
                children: [(0, r.jsxs)("div", {
                    className: o.settingsDescriptionContainer,
                    children: [(0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "interactive-text-active",
                        children: t
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "interactive-text-default",
                        className: o.description,
                        children: n
                    })]
                }), (0, r.jsx)("div", {
                    className: o.__invalid_action,
                    children: i
                })]
            })
        }), null != u && (0, r.jsx)("div", {
            className: o.subsectionContainer,
            children: u
        })]
    })
}