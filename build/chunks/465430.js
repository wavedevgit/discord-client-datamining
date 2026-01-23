/** Chunk was on web.js **/
/** chunk id: 465430, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Nz: () => m
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(359778),
    o = n(235986),
    l = n(244367),
    c = n(742158),
    u = n(512240);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            d(e, t, n[t])
        })
    }
    return e
}

function p(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = _(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function _(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
s.Z.Types;
let h = "right";

function m(e) {
    let t, n, {
            type: i = s.Z.Types.DANGER,
            imageData: d,
            button: _,
            className: m,
            iconClassName: g,
            title: E,
            body: y,
            style: b,
            align: O = o.A.Align.START
        } = e,
        v = o.A.Direction.HORIZONTAL;
    if (null != d) {
        let {
            position: e
        } = d, n = p(d, ["position"]);
        t = (0, r.jsx)(o.A.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)("img", f({
                alt: "",
                className: a()(u.Kk, g)
            }, n))
        }), e === h && (v = o.A.Direction.HORIZONTAL_REVERSE)
    } else null != _ && (n = _);
    let A = !0;
    return i === s.Z.Types.PRIMARY && (A = !1), (0, r.jsx)(s.Z, {
        className: a()(u.RJ, m),
        type: i,
        style: b,
        children: (0, r.jsxs)(o.A, {
            direction: v,
            align: O,
            children: [t, (0, r.jsxs)(o.A.Child, {
                children: [null != E && "" !== E ? (0, r.jsx)(c.z, {
                    className: a()(u.$G, {
                        [u.vV]: A
                    }),
                    children: E
                }) : null, (0, r.jsx)(l.a, {
                    className: a()(u.Vz, {
                        [u.vV]: A
                    }),
                    children: y
                }), n]
            })]
        })
    })
}
m.Types = s.Z.Types