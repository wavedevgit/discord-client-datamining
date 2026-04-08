/** chunk id: 508384 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(582754),
    d = n(397927),
    c = n(442433),
    u = n(665013),
    h = n(246199),
    g = n(967144),
    m = n(665556);

function x(e) {
    let {
        role: t,
        guild: s
    } = e, [r, o] = i.useState(!1);
    return (0, u.x)(s, t) ? (0, l.jsx)(d.DUT, {
        onClick: e => {
            o(!0), (0, c.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 665013));
                return n => (0, l.jsx)(e, {
                    ...n,
                    role: t,
                    guild: s
                })
            }, {
                onClose: () => o(!1)
            })
        },
        className: a()(m.X2, {
            [m.ho]: r
        }),
        children: (0, l.jsx)(d.jNK, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        })
    }) : null
}

function p(e) {
    let {
        color: t,
        id: i,
        role: s,
        guild: a,
        children: c,
        isDragging: u,
        selectedItem: p,
        onItemSelect: A,
        itemType: f,
        locked: C,
        lockTooltip: b,
        showContextMenu: j,
        theme: N,
        roleStyle: v,
        onContextMenu: _,
        "aria-label": y
    } = e, T = (0, g.X_)(a.id, s, s?.colorStrings);
    return u ? (0, l.jsx)("div", {
        className: m.rz
    }) : (0, l.jsx)(d.VQ0.Item, {
        className: m.JC,
        id: i,
        selectedItem: p,
        onItemSelect: A,
        itemType: f,
        "aria-label": null != b ? `${y}, ${b}` : y,
        onContextMenu: _,
        children: (0, l.jsxs)("div", {
            className: m.yl,
            children: ["dot" === v ? (0, l.jsx)(d.WYI, {
                color: t ?? void 0,
                colors: T,
                className: m.m4,
                background: !1,
                tooltip: !1
            }) : (0, l.jsx)(d.RYH, {
                color: t ?? null,
                colors: T,
                className: m.Ni
            }), function() {
                if (!C) return null;
                let e = (0, o.Mw)(N) ? n(454554) : n(470474);
                return (0, l.jsx)(r.m, {
                    text: b,
                    children: (0, l.jsx)(h.A, {
                        className: m.s2,
                        src: e
                    })
                })
            }(), (0, l.jsx)("div", {
                className: m.dD,
                children: c
            }), j && null != s ? (0, l.jsx)(x, {
                guild: a,
                role: s
            }) : null]
        })
    })
}