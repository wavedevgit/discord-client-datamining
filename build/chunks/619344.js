/** chunk id: 619344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(709562),
    a = n(985018);

function r(e) {
    let {
        popoutWindowAlwaysOnTop: t,
        onToggleStayOnTop: n,
        ...r
    } = e, o = t ? a.intl.string(a.t.YdyDM9) : a.intl.string(a.t.ZVGHwP), c = t ? s.hl9 : s.qgw;
    return (0, i.jsx)(l.A, {
        onClick: () => n(!t),
        label: o,
        iconComponent: c,
        ...r
    })
}