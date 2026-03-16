/** chunk id: 392567 params = (module,exports,require) **/
t.d(n, {
    A: () => d,
    M: () => a
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(985018);

function a(e) {
    return null == e || null == e.end_time ? null : l.intl.formatToPlainString(l.t.j7h4AJ, {
        endTime: new Date(e.end_time).toLocaleString(l.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function d(e) {
    let {
        muteConfig: n,
        className: t
    } = e, l = a(n);
    return null != l ? (0, i.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: t,
        children: l
    }) : null
}