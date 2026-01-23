/** Chunk was on 47841 **/
/** chunk id: 694012, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(985018),
    o = n(257554);

function c(e) {
    let {
        className: t,
        enabled: n,
        previewCTA: i,
        onPreview: c,
        onToggle: d,
        animateStatus: u,
        firstLine: g,
        secondLine: m,
        disabled: p
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(t, o.TV),
        children: [n ? (0, r.jsx)(s.A9s, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: l()(o.nu, {
                [o.i0]: u
            })
        }) : (0, r.jsx)(s.R2l, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
            className: l()(o.Vi, {
                [o.i0]: u
            })
        }), (0, r.jsxs)("div", {
            className: o.A5,
            children: [(0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: g
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: m
            })]
        }), (0, r.jsxs)("div", {
            className: o.UD,
            children: [null == c ? null : (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: o.jc,
                children: (0, r.jsx)(s.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != i ? i : a.intl.string(a.t["5U0kL8"]),
                    onClick: c,
                    disabled: p
                })
            }), (0, r.jsx)(s.Button, {
                variant: n ? "critical-primary" : "primary",
                size: "sm",
                disabled: null == d || !n || p,
                text: n ? a.intl.string(a.t.R9GHya) : a.intl.string(a.t.JFfins),
                onClick: d
            })]
        })]
    })
}