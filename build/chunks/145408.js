/** chunk id: 145408 params = (module,exports,require) **/
i.d(n, {
    A: () => s,
    M: () => a
});
var e = i(627968);
i(64700);
var l = i(397927),
    r = i(985018);

function a(t) {
    return null == t || null == t.end_time ? null : r.intl.formatToPlainString(r.t.j7h4AJ, {
        endTime: new Date(t.end_time).toLocaleString(r.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function s(t) {
    let {
        muteConfig: n,
        className: i
    } = t, r = a(n);
    return null != r ? (0, e.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: i,
        children: r
    }) : null
}