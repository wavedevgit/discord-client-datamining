/** chunk id: 145408 params = (module,exports,require) **/
n.d(e, {
    A: () => o,
    M: () => r
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(985018);

function r(t) {
    return null == t || null == t.end_time ? null : l.intl.formatToPlainString(l.t.j7h4AJ, {
        endTime: new Date(t.end_time).toLocaleString(l.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function o(t) {
    let {
        muteConfig: e,
        className: n
    } = t, l = r(e);
    return null != l ? (0, i.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: l
    }) : null
}