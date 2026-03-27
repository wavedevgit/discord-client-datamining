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
    o = r(985018),
    c = r(601051);
let d = e => {
    let {
        category: t,
        daysRemainingText: r = o.t.Io7ozn,
        className: i
    } = e;
    if (!(0, l.HF)(t.unpublishedAt)) return null;
    let d = (0, l.WU)(t.unpublishedAt),
        u = d > 1 ? o.intl.formatToPlainString(r, {
            days: d
        }) : o.intl.string(o.t.Bc13HF);
    return (0, n.jsx)(a.LpS, {
        disableColor: !0,
        text: u,
        className: s()(c.q, i)
    })
}