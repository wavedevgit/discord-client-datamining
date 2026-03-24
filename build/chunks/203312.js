/** chunk id: 203312 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => d
});
var n = r(627968);
r(64700);
var i = r(503698),
    s = r.n(i),
    a = r(397927),
    l = r(993408),
    c = r(985018),
    o = r(933122);
let d = e => {
    let {
        category: t,
        daysRemainingText: r = c.t.Io7ozn,
        className: i
    } = e;
    if (!(0, l.HF)(t.unpublishedAt)) return null;
    let d = (0, l.WU)(t.unpublishedAt),
        u = d > 1 ? c.intl.formatToPlainString(r, {
            days: d
        }) : c.intl.string(c.t.Bc13HF);
    return (0, n.jsx)(a.LpS, {
        disableColor: !0,
        text: u,
        className: s()(o.q, i)
    })
}