/** Chunk was on web.js **/
/** chunk id: 655053, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    i: () => s
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(683071),
    o = n(22789);

function s(e) {
    let {
        message: t,
        type: n
    } = e, s = null == t || 0 === t.length || null == n, [l, c] = i.useState(null != n ? n : "info"), [u, d] = i.useState(null != t ? t : "");
    return i.useEffect(() => {
        null != n && c(n), null != t && d(t)
    }, [n, t]), (0, r.jsx)("div", {
        className: s ? o.sectionHidden : o.section,
        children: (0, r.jsx)(a.w, {
            type: l,
            hidden: s,
            children: u
        })
    })
}