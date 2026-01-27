/** Chunk was on web.js **/
/** chunk id: 603880, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(990078),
    u = n(397927),
    d = n(653523),
    f = n(350972),
    p = n(677056),
    _ = n(635917),
    h = n(652215),
    m = n(985018),
    g = n(649542);
let E = () => [m.intl.string(m.t["EgWTY+"]), m.intl.string(m.t.umBn5f), m.intl.string(m.t.dG1wD1), m.intl.string(m.t.SesI4S), m.intl.string(m.t.RnMLvl)],
    y = () => {
        var e;
        return null != (e = l().sample(E())) ? e : m.intl.string(m.t["EgWTY+"])
    };

function b(e) {
    let {
        id: t,
        className: n,
        onSelect: a,
        isSelected: s = !1,
        tabIndex: l,
        children: p,
        locked: m = !1
    } = e, [E, b] = i.useState((0, _.gG)(t).name), O = t === f.Ic.PIRATE;
    return (0, r.jsx)(c.m, {
        text: E,
        onTooltipShow: () => O && b(y()),
        children: (0, r.jsxs)("div", {
            className: g.Co,
            children: [(0, r.jsx)(u.DUT, {
                role: "radio",
                "aria-label": E,
                "aria-checked": s,
                tabIndex: null != l ? l : s ? 0 : -1,
                className: o()(g.Ni, {
                    [g.wH]: s
                }, n),
                onClick: s ? h.tEg : () => null == a ? void 0 : a(t),
                children: p
            }), s && (0, r.jsx)(d.H$, {}), m && (0, r.jsx)("div", {
                className: g.RK,
                children: (0, r.jsx)(u.XAi, {
                    className: g.AA,
                    color: "currentColor"
                })
            })]
        })
    })
}

function O(e) {
    let {
        icon: t,
        isSelected: n,
        disabled: i,
        tabIndex: a,
        onSelect: o,
        locked: s
    } = e;
    return (0, r.jsx)(b, {
        onSelect: i ? void 0 : o,
        isSelected: n,
        id: t.id,
        className: i ? g.r9 : void 0,
        tabIndex: a,
        locked: s,
        children: (0, r.jsx)(p.A, {
            id: t.id,
            width: _.Kl
        })
    })
}