/** chunk id: 203312 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(397927),
    s = n(993408),
    c = n(985018),
    o = n(399508);
let d = e => {
    let {
        category: t,
        daysRemainingText: n = c.t.Io7ozn,
        className: a
    } = e;
    if (!(0, s.HF)(t.unpublishedAt)) return null;
    let d = (0, s.WU)(t.unpublishedAt),
        u = d > 1 ? c.intl.formatToPlainString(n, {
            days: d
        }) : c.intl.string(c.t.Bc13HF);
    return (0, r.jsx)(l.LpS, {
        disableColor: !0,
        text: u,
        className: i()(o.q, a)
    })
}