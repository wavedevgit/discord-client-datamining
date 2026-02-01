/** chunk id: 392567, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o,
    M: () => l
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018);

function l(e) {
    return null == e || null == e.end_time ? null : a.intl.formatToPlainString(a.t.j7h4AJ, {
        endTime: new Date(e.end_time).toLocaleString(a.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function o(e) {
    let {
        muteConfig: t,
        className: n
    } = e, a = l(t);
    return null != a ? (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: a
    }) : null
}