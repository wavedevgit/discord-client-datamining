/** chunk id: 392567, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => o,
    M: () => l
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018);

function l(t) {
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
        muteConfig: e,
        className: n
    } = t, a = l(e);
    return null != a ? (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: a
    }) : null
}