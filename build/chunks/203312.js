/** chunk id: 203312 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => d
});
var n = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    a = s(397927),
    i = s(993408),
    o = s(985018),
    c = s(490852);
let d = e => {
    let {
        category: t,
        daysRemainingText: s = o.t.Io7ozn,
        className: r
    } = e;
    if (!(0, i.HF)(t.unpublishedAt)) return null;
    let d = (0, i.WU)(t.unpublishedAt),
        u = d > 1 ? o.intl.formatToPlainString(s, {
            days: d
        }) : o.intl.string(o.t.Bc13HF);
    return (0, n.jsx)(a.LpS, {
        disableColor: !0,
        text: u,
        className: l()(c.q, r)
    })
}