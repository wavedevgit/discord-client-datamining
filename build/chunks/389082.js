/** chunk id: 389082, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(317097),
    o = n(827734),
    c = n(421380),
    d = n(397927),
    u = n(765671),
    g = n(268218),
    m = n(652215),
    p = n(985018),
    f = n(637900);

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let x = (0, g.Fe)({
    createPromise: () => n.e("66147").then(n.bind(n, 48736)),
    webpackId: 48736
});

function j(e) {
    return (0, a.OK)(e) > .25 ? o.A.unsafe_rawColors.WHITE.css : o.A.unsafe_rawColors.PRIMARY_530.css
}

function _(e) {
    let {
        value: t,
        onChange: n,
        disabled: l = !1
    } = e, o = i.useRef(null), [u, g] = i.useState(t);

    function x() {
        n(u)
    }

    function _(e) {
        n(e), g(e)
    }
    let O = t === m.TGz,
        v = O ? u : t,
        y = (0, r.jsx)(d.A9s, {
            size: "custom",
            width: 32,
            height: 24,
            color: j(t)
        }),
        A = (0, c._u)({
            orientation: "horizontal",
            isDisabled: l
        }),
        {
            ref: E
        } = A,
        N = function(e, t) {
            if (null == e) return {};
            var n, r, i, l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l
            }
            if (l = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i
                }(e, t), Object.getOwnPropertySymbols)
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }(A, ["ref"]),
        S = (0, c.Gx)({
            isSelected: O,
            label: p.intl.formatToPlainString(p.t.ZC69mL, {
                colorHex: m.TpD
            })
        }),
        I = (0, c.Gx)({
            isSelected: !O,
            label: p.intl.formatToPlainString(p.t["3kiLZZ"], {
                colorHex: (0, a.Hl)(t)
            })
        });
    return (0, r.jsxs)("div", b(h({
        className: f.NC,
        "aria-label": p.intl.string(p.t["FJjrI/"]),
        ref: E
    }, N), {
        children: [(0, r.jsx)("div", {
            className: s()(f.oP, {
                [f.r9]: l
            }),
            children: (0, r.jsxs)(d.DUT, b(h({
                onClick: l ? void 0 : function() {
                    n(m.TGz)
                },
                "aria-disabled": l
            }, S), {
                children: [(0, r.jsx)("div", {
                    className: f.nf,
                    style: {
                        backgroundColor: m.TpD
                    },
                    children: O ? y : null
                }), (0, r.jsx)(d.Text, {
                    className: f.br,
                    color: "text-default",
                    variant: "text-xs/normal",
                    "aria-hidden": !0,
                    children: p.intl.string(p.t.Mcfzar)
                })]
            }))
        }), (0, r.jsxs)("div", {
            className: s()(f.oP, {
                [f.r9]: l
            }),
            children: [(0, r.jsxs)(d.DUT, b(h({
                onClick: l ? void 0 : x,
                "aria-disabled": l
            }, I), {
                children: [(0, r.jsx)("div", {
                    className: s()(f.yB, {
                        [f.MU]: v === m.TGz
                    }),
                    style: {
                        "--custom-color": (0, a.Hl)(v)
                    },
                    children: O ? null : y
                }), (0, r.jsx)(d.Text, {
                    className: f.br,
                    color: "text-default",
                    variant: "text-xs/normal",
                    "aria-hidden": !0,
                    children: p.intl.string(p.t["2ArXy1"])
                })]
            })), !l && (0, r.jsx)(d.YNO, {
                targetElementRef: o,
                onRequestOpen: x,
                renderPopout: e => (0, r.jsx)(d.VNw, b(h({}, e), {
                    value: t,
                    onChange: _
                })),
                children: e => (0, r.jsx)(d.DUT, b(h({}, e), {
                    innerRef: o,
                    className: f.MC,
                    "aria-label": p.intl.string(p.t.Qp04hK),
                    children: (0, r.jsx)(d.dDg, {
                        size: "custom",
                        className: f.cE,
                        width: 14,
                        height: 14,
                        color: j(v)
                    })
                }))
            })]
        })]
    }))
}

function O(e) {
    let t, {
            value: n,
            onChange: i,
            disabled: l = !1
        } = e,
        {
            ref: s,
            width: a
        } = (0, u.Ay)();
    return t = null == a || a < 440 ? (0, r.jsx)(_, {
        value: n,
        onChange: i,
        disabled: l
    }) : (0, r.jsx)(x, {
        defaultColor: m.TGz,
        colors: m._tK,
        value: n,
        onChange: i,
        disabled: l
    }), (0, r.jsx)("div", {
        ref: s,
        children: t
    })
}