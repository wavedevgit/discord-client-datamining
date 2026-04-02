/** chunk id: 145408 params = (module,exports,require) **/
e.d(t, {
    A: () => s,
    M: () => r
});
var i = e(627968);
e(64700);
var l = e(397927),
    a = e(985018);

function r(n) {
    return null == n || null == n.end_time ? null : a.intl.formatToPlainString(a.t.j7h4AJ, {
        endTime: new Date(n.end_time).toLocaleString(a.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function s(n) {
    let {
        muteConfig: t,
        className: e
    } = n, a = r(t);
    return null != a ? (0, i.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: e,
        children: a
    }) : null
}