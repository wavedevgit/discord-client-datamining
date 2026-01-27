/** Chunk was on web.js **/
/** chunk id: 825484, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => s
});
var r = n(627968),
    i = n(64700),
    a = n(331322),
    o = n(977067);

function s(e) {
    let {
        size: t = "md",
        direction: n = "horizontal",
        justify: s,
        align: l,
        padding: c,
        className: u,
        children: d,
        wrap: f = !0,
        fullWidth: p = !1,
        fullWidthContainer: _ = !1
    } = e, h = i.useMemo(() => ({
        size: t,
        fullWidth: p
    }), [t, p]);
    return (0, r.jsx)(a.B, {
        direction: n,
        gap: 8,
        justify: s,
        align: l,
        wrap: f,
        padding: c,
        className: u,
        fullWidth: !!_ || p,
        children: (0, r.jsx)(o.Z.Provider, {
            value: h,
            children: d
        })
    })
}