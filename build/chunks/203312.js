/** chunk id: 203312, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(397927),
    l = n(993408),
    c = n(985018),
    o = n(399508);
let d = e => {
    let {
        category: t,
        daysRemainingText: n = c.t.Io7ozn,
        className: r
    } = e;
    if (!(0, l.HF)(t.unpublishedAt)) return null;
    let d = (0, l.WU)(t.unpublishedAt),
        u = d > 1 ? c.intl.formatToPlainString(n, {
            days: d
        }) : c.intl.string(c.t.Bc13HF);
    return (0, a.jsx)(s.LpS, {
        disableColor: !0,
        text: u,
        className: i()(o.q, r)
    })
}