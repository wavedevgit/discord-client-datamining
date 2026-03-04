/** chunk id: 392567, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u,
    M: () => l
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(985018);

function l(e) {
    return null == e || null == e.end_time ? null : r.intl.formatToPlainString(r.t.j7h4AJ, {
        endTime: new Date(e.end_time).toLocaleString(r.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function u(e) {
    let {
        muteConfig: t,
        className: n
    } = e, r = l(t);
    return null != r ? (0, i.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: r
    }) : null
}