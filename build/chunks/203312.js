/** chunk id: 203312, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => d
});
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(397927),
    i = s(993408),
    o = s(985018),
    c = s(933122);
let d = e => {
    let {
        category: t,
        daysRemainingText: s = o.t.Io7ozn,
        className: l
    } = e;
    if (!(0, i.HF)(t.unpublishedAt)) return null;
    let d = (0, i.WU)(t.unpublishedAt),
        u = d > 1 ? o.intl.formatToPlainString(s, {
            days: d
        }) : o.intl.string(o.t.Bc13HF);
    return (0, n.jsx)(a.LpS, {
        disableColor: !0,
        text: u,
        className: r()(c.q, l)
    })
}