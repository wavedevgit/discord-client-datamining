/** chunk id: 392567 params = (module,exports,require) **/
n.d(e, {
    A: () => u,
    M: () => a
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(985018);

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

function u(t) {
    let {
        muteConfig: e,
        className: n
    } = t, r = a(e);
    return null != r ? (0, i.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: r
    }) : null
}