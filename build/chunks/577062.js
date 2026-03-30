/** chunk id: 577062 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(688810),
    r = n(980923),
    o = n(384059),
    c = n(277342),
    d = n(709562);

function u(e) {
    let {
        selfMute: t,
        serverMute: n,
        suppress: u,
        centerButton: h = !1,
        awaitingRemote: A,
        onMouseEnter: m,
        onMouseLeave: _,
        onClick: g,
        ...p
    } = e, {
        parentAnalyticsLocation: f
    } = (0, a.Ay)(), x = t || n || u, E = h ? d.l : d.A, C = (0, r.A)(t, n, u, A), {
        events: I,
        play: N,
        Component: S
    } = (0, c.q)(x), b = n || u ? l.O1p : S;
    return s.useEffect(() => () => N(), [N, x]), (0, i.jsx)(E, {
        iconComponent: b,
        isTrayButton: !0,
        caretColor: x ? "red" : "primaryDark",
        color: x ? "red" : void 0,
        label: C,
        onMouseEnter: e => {
            m?.(e), I.onMouseEnter()
        },
        onMouseLeave: e => {
            _?.(e), I.onMouseLeave()
        },
        onClick: e => {
            g?.(e), (0, o.X)(f, o.O.MIC, t)
        },
        ...p
    })
}