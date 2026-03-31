/** chunk id: 145408 params = (module,exports,require) **/
e.d(n, {
    A: () => o,
    M: () => r
});
var i = e(627968);
e(64700);
var l = e(397927),
    a = e(985018);

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

function o(t) {
    let {
        muteConfig: n,
        className: e
    } = t, a = r(n);
    return null != a ? (0, i.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: e,
        children: a
    }) : null
}