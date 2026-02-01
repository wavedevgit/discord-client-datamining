/** chunk id: 114212, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => y,
    B5: () => h,
    BP: () => p,
    FQ: () => _,
    Uj: () => g,
    VF: () => f,
    _G: () => b
});
var n = r(627968);
r(64700);
var o = r(503698),
    l = r.n(o),
    a = r(735438),
    i = r.n(a),
    c = r(397927),
    d = r(406590);

function s(e) {
    return "".concat(e / 16, "rem")
}

function u() {
    return (0, n.jsx)("div", {
        className: d.my,
        style: {
            opacity: .08
        }
    })
}

function _(e) {
    let {
        width: t,
        height: r,
        opacity: o,
        className: a
    } = e, c = {
        width: s(t),
        opacity: null != o ? o : i().random(.02, .08)
    };
    return null != r && (c.height = s(r)), (0, n.jsx)("div", {
        className: l()(a, {
            [d.av]: !0
        }),
        style: c
    })
}

function m(e) {
    let t, {
            groupStart: r = !1,
            compact: o = !1,
            attachmentSpecs: a,
            usernameWidth: s,
            usernameOpacity: m,
            className: h,
            style: b
        } = e,
        p = o ? 50 : i().random(40, 50);
    return !o && r ? t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {}), (0, n.jsx)(c.H, {
            className: d.wx,
            children: (0, n.jsx)(_, {
                width: s,
                opacity: m,
                className: d.__invalid_username
            })
        })]
    }) : o && (t = (0, n.jsxs)(n.Fragment, {
        children: [o && (0, n.jsx)(_, {
            width: p,
            className: l()({
                [d.ce]: !0,
                [d.R]: !r
            })
        }), (0, n.jsx)(c.H, {
            className: d.wx,
            children: (0, n.jsx)(_, {
                width: s,
                opacity: m
            })
        })]
    })), (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: l()(h, {
            [d.iE]: !0,
            [d.oE]: o,
            [d.E]: !o
        }),
        style: b,
        children: [(0, n.jsxs)("div", {
            className: d.PG,
            children: [t, (0, n.jsx)("div", {
                className: d.Qs,
                children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, n.jsx)(_, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != a && (0, n.jsx)("div", {
            className: d.Dq,
            children: (0, n.jsx)("div", {
                className: d.oh,
                style: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({
                    opacity: .03
                }, a)
            })
        })]
    })
}
let h = 44,
    b = 22,
    p = 26,
    g = 26,
    f = 6;

function y(e) {
    let {
        messages: t,
        groupSpacing: r = 0,
        compact: o = !1,
        attachmentSpecs: l,
        className: a
    } = e, c = null != l ? l.last ? t - 1 : i().random(0, t - 1) : -1, d = i().random(80, 120), u = i().random(.1, .2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, n.jsx)(m, {
            compact: o,
            className: a,
            usernameWidth: d,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === c ? l : void 0,
            style: 0 === t ? {
                marginTop: s(r)
            } : void 0
        }, t))
    })
}