/** Chunk was on web.js **/
/** chunk id: 881343, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(891694),
    o = n(10879);

function s(e) {
    let {
        imageBackground: t,
        applicationName: n,
        imageClassName: s,
        imageNotFoundClassName: l
    } = e, [c, u] = i.useState(!1);
    return "not-found" === t.state || c ? (0, r.jsx)("div", {
        className: l,
        children: (0, r.jsx)(a.A, {
            className: o.i
        })
    }) : "loading" === t.state ? null : (0, r.jsx)("img", {
        alt: n,
        className: s,
        src: t.url,
        onError: () => u(!0)
    })
}