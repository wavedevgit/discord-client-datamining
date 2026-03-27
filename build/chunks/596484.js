/** chunk id: 596484 params = (module,exports,require) **/
l.d(t, {
    z: () => u
});
var n = l(627968);
l(64700);
var i = l(503698),
    a = l.n(i),
    r = l(990078),
    s = l(397927),
    o = l(423024);

function u(e) {
    let {
        pills: t,
        pillClassName: l
    } = e;
    return (0, n.jsx)("div", {
        className: o.kL,
        children: t.map(e => (0, n.jsx)(r.m, {
            __unsupportedReactNodeAsText: e.tooltipText,
            shouldShow: null != e.tooltipText,
            children: (0, n.jsx)(s.DUT, {
                className: a()(o.Io, {
                    [o.r9]: e.disabled
                }, l),
                onClick: e.disabled ? void 0 : e.onClick,
                children: (0, n.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    children: e.text
                })
            })
        }, e.text))
    })
}