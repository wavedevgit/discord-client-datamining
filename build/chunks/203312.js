/** chunk id: 203312, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(993408),
    o = n(985018),
    c = n(933122);
let u = e => {
    let {
        category: t,
        daysRemainingText: n = o.t.Io7ozn,
        className: l
    } = e;
    if (!(0, s.HF)(t.unpublishedAt)) return null;
    let u = (0, s.WU)(t.unpublishedAt),
        d = u > 1 ? o.intl.formatToPlainString(n, {
            days: u
        }) : o.intl.string(o.t.Bc13HF);
    return (0, r.jsx)(a.LpS, {
        disableColor: !0,
        text: d,
        className: i()(c.q, l)
    })
}