/** chunk id: 864436, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(990078),
    s = n(397927);
n(851883);
var l = n(123511);

function c(e) {
    let {
        icon: t,
        tooltipText: n,
        tooltipAriaLabel: i,
        className: c,
        onTooltipShow: u
    } = e, d = (0, s.S31)(s.clD.ONLINE);
    return null == n ? (0, r.jsx)(t, {
        size: "custom",
        color: d,
        className: a()(l.Kk, c)
    }) : (0, r.jsx)(o.m, {
        ariaHidden: !0,
        text: n,
        delay: 150,
        onTooltipShow: u,
        children: (0, r.jsx)(t, {
            size: "custom",
            color: d,
            className: a()(l.Kk, c),
            "aria-label": i
        })
    })
}