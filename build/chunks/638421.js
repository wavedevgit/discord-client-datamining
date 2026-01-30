/** chunk id: 638421, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => d
}), n(896048);
var r = n(627968),
    i = n(942381),
    a = n(311907),
    o = n(11057),
    s = n(721668),
    l = n(773669),
    c = n(985018),
    u = n(230661);

function d(e) {
    let {
        children: t
    } = e, n = (0, a.bG)([l.default], () => l.default.locale), [d, f] = (0, o.hs)(e => [e.isLoading, e.error], i.x);
    return null != f ? (0, r.jsx)(s.A, {
        title: c.intl.formatToPlainString(c.t["7basa2"], {
            locale: n
        }),
        note: (0, r.jsx)("span", {
            children: f.message
        })
    }) : d ? __OVERLAY__ ? null : (0, r.jsx)("div", {
        className: u.L
    }) : null != t ? t : null
}