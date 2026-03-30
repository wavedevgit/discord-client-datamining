/** chunk id: 145408 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    M: () => o
});
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(985018);

function o(e) {
    return null == e || null == e.end_time ? null : a.intl.formatToPlainString(a.t.j7h4AJ, {
        endTime: new Date(e.end_time).toLocaleString(a.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        })
    })
}

function l(e) {
    let {
        muteConfig: t,
        className: n
    } = e, a = o(t);
    return null != a ? (0, i.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: a
    }) : null
}