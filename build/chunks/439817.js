/** chunk id: 439817 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => h
});
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(397927),
    o = i(855790),
    d = i(652215),
    c = i(985018),
    u = i(959607);
let h = function(e) {
    let t, {
            title: i,
            header: a,
            children: h,
            renderSettings: _,
            onDragStart: p
        } = e,
        f = s.useRef(null);
    return t = null != i ? (0, n.jsxs)(o.Ay.Bar, {
        className: l()(u.wx, u.bl),
        onMouseDown: p,
        children: [(0, n.jsx)(o.Ay.Content, {
            className: l()(u.qd, u.bl),
            dynamicSize: !0,
            children: i
        }), (0, n.jsx)(o.Ay.Content, {
            children: (0, n.jsx)(r.YNO, {
                targetElementRef: f,
                position: "right",
                renderPopout: _ ?? d.tEg,
                autoInvert: !1,
                children: e => (0, n.jsx)(o.Ay.Icon, {
                    ...e,
                    icon: r.Zes,
                    label: c.intl.string(c.t["3D5yo/"]),
                    ref: f
                })
            })
        })]
    }) : a, (0, n.jsxs)("div", {
        className: u.pz,
        children: [t, (0, n.jsx)("div", {
            className: u.Y_,
            children: h
        })]
    })
}