/** Chunk was on 47841 **/
/** chunk id: 139497, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(713654),
    a = n(199940),
    o = n(985018),
    c = n(659233);
let d = function(e) {
    var t;
    let {
        channel: n,
        end: d
    } = e, u = i.useCallback(() => {
        (0, a.px)({
            channelId: n.id,
            title: n.name,
            description: "",
            emoji: null,
            icon: null
        })
    }, [n]), g = null != (t = (0, s.gU)(n)) ? t : l.N$i;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: c.TG,
            children: [(0, r.jsx)(g, {
                className: c.cC
            }), (0, r.jsx)(l.Text, {
                className: c.g7,
                variant: "text-sm/normal",
                children: n.name
            }), (0, r.jsx)(l.Button, {
                size: "sm",
                variant: "primary",
                onClick: u,
                text: o.intl.string(o.t.OYkgVk)
            })]
        }), d && (0, r.jsx)("div", {
            className: c.p3
        })]
    })
}