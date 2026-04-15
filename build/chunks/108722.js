/** chunk id: 108722 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(926466),
    a = n(975571),
    r = n(652215),
    s = n(49999),
    o = n(985018),
    d = n(183292);

function c(e) {
    let {
        guild: t,
        markAsDismissed: n
    } = e;
    return (0, i.jsx)(l.A, {
        image: d,
        guild: t,
        onDismissed: () => n(s.i.UNKNOWN),
        onClick: () => {
            open(a.A.getArticleURL(r.MVz.CONNECTION_DETAILS)), n(s.i.UNKNOWN)
        },
        title: o.intl.string(o.t.YMgaJt),
        message: o.intl.string(o.t["AV/9eW"]),
        cta: o.intl.string(o.t.hvVgAZ),
        trackingSource: r.kZU.LINKED_ROLES_ADMIN_NUX,
        type: r.n5X.LINKED_ROLES_ADMIN
    })
}