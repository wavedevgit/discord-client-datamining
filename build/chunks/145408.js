/** chunk id: 145408 params = (module,exports,require) **/
n.d(e, {
    A: () => d,
    M: () => r
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(985018);

function r(t) {
    return null == t || null == t.end_time ? null : a.intl.formatToPlainString(a.t.j7h4AJ, {
        endTime: new Date(t.end_time).toLocaleString(a.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function d(t) {
    let {
        muteConfig: e,
        className: n
    } = t, a = r(e);
    return null != a ? (0, i.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: a
    }) : null
}