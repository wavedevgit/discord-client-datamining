/** chunk id: 796878 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(877624),
    r = n(990078),
    a = n(397927),
    s = n(549996),
    o = n(807098),
    d = n(984029);

function c(e) {
    let {
        children: t
    } = e, n = (0, s.c)(l.C.PREMIUM_TAB_TOOLTIP), c = null != n && "premiumTabTooltip" === n.properties.properties.oneofKind ? n.properties.properties.premiumTabTooltip : null, u = (0, o.T)(c?.asset);
    if (null == c) return t;
    let A = (0, i.jsxs)("div", {
        className: d.$e,
        children: [null != u && (0, i.jsx)("img", {
            className: d.NC,
            src: u,
            alt: ""
        }), (0, i.jsxs)("div", {
            className: d.Vm,
            children: [(0, i.jsx)(a.Heading, {
                variant: "heading-md/bold",
                color: "text-strong",
                children: c.header
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: c.body
            })]
        })]
    });
    return (0, i.jsx)(r.m, {
        __unsupportedReactNodeAsText: A,
        position: "right",
        "aria-label": c.header,
        asContainer: !0,
        children: (0, i.jsx)("div", {
            children: t
        })
    })
}