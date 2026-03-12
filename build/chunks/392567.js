/** chunk id: 392567 params = (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => u,
    M: () => s
});
var i = t(627968);
t(64700);
var l = t(397927),
    r = t(985018);

function s(e) {
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
        muteConfig: n,
        className: t
    } = e, r = s(n);
    return null != r ? (0, i.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: t,
        children: r
    }) : null
}