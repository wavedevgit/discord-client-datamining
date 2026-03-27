/** chunk id: 958449 params = (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => o
});
var i = n(627968),
    s = n(64700),
    l = n(416696),
    a = n(709562),
    r = n(985018);

function o(e) {
    let t, n, {
            hasPermission: o,
            streamActive: c,
            isSelfStream: d,
            centerButton: u,
            onMouseEnter: h,
            onMouseLeave: A,
            renderNUXHighlight: m,
            buttonRef: _,
            ...p
        } = e,
        g = u ? a.l : a.A;
    n = c ? d ? r.intl.string(r.t.S5anIc) : r.intl.string(r.t.q3O3J8) : o ? r.intl.string(r.t.fjBNo1) : r.intl.string(r.t.uQn9B8);
    let {
        Component: f,
        events: x,
        play: C
    } = (0, l.c)(c ? "disable" : "enable");
    return s.useEffect(() => () => C(), [c, C]), (0, i.jsx)(g, {
        buttonRef: _,
        isTrayButton: !0,
        label: n,
        disabled: !o,
        iconComponent: f,
        isActive: c,
        color: (m ? t = "premiumGradient" : c && (t = "green"), t),
        onMouseEnter: e => {
            h?.(e), x.onMouseEnter()
        },
        onMouseLeave: e => {
            A?.(e), x.onMouseLeave()
        },
        ...p
    })
}