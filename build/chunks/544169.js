/** chunk id: 544169, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => r
});
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(47167),
    a = n(985018);

function r(e) {
    let {
        channel: t,
        category: n,
        ...r
    } = e, o = (0, l.Ay)(t, !0), c = (0, l.Ay)(n);
    return (0, i.jsx)(s.ConfirmModal, {
        title: a.intl.string(a.t.YWMtRe),
        subtitle: a.intl.format(a.t["iKW+jY"], {
            channelName: o,
            categoryName: c
        }),
        confirmText: a.intl.string(a.t.eW8Gy4),
        ...r
    })
}