/** chunk id: 168754, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var s = n(697744),
    l = n(709562);

function a(e) {
    let {
        isActivityActive: t,
        onMouseEnter: n,
        onMouseLeave: a,
        onClick: r,
        ...o
    } = e, {
        Component: c,
        events: d,
        play: u
    } = (0, s.c)();
    return (0, i.jsx)(l.l, {
        isTrayButton: !0,
        isActive: t,
        color: t ? "green" : void 0,
        iconComponent: c,
        onMouseEnter: e => {
            n?.(e), d.onMouseEnter()
        },
        onMouseLeave: e => {
            a?.(e), d.onMouseLeave()
        },
        onClick: e => {
            r?.(e), u()
        },
        ...o
    })
}