/** chunk id: 203312 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    s = a(397927),
    l = a(993408),
    o = a(985018),
    c = a(490852);
let d = e => {
    let {
        category: t,
        daysRemainingText: a = o.t.Io7ozn,
        className: r
    } = e;
    if (!(0, l.HF)(t.unpublishedAt)) return null;
    let d = (0, l.WU)(t.unpublishedAt),
        u = d > 1 ? o.intl.formatToPlainString(a, {
            days: d
        }) : o.intl.string(o.t.Bc13HF);
    return (0, n.jsx)(s.LpS, {
        disableColor: !0,
        text: u,
        className: i()(c.q, r)
    })
}