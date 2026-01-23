/** Chunk was on 47841 **/
/** chunk id: 596484, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    z: () => c
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(990078),
    a = n(397927),
    o = n(958178);

function c(e) {
    let {
        pills: t,
        pillClassName: n
    } = e;
    return (0, r.jsx)("div", {
        className: o.kL,
        children: t.map(e => (0, r.jsx)(s.m, {
            __unsupportedReactNodeAsText: e.tooltipText,
            shouldShow: null != e.tooltipText,
            children: (0, r.jsx)(a.DUT, {
                className: l()(o.Io, {
                    [o.r9]: e.disabled
                }, n),
                onClick: e.disabled ? void 0 : e.onClick,
                children: (0, r.jsx)(a.Text, {
                    tag: "span",
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    children: e.text
                })
            })
        }, e.text))
    })
}