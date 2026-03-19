/** chunk id: 114212 params = (module,exports,require) **/
n.d(t, {
    Ay: () => g,
    B5: () => b,
    BP: () => m,
    FQ: () => u,
    Uj: () => C,
    VF: () => h,
    _G: () => p
});
var r = n(627968);
n(64700);
var a = n(503698),
    o = n.n(a),
    _ = n(735438),
    i = n.n(_),
    d = n(397927),
    l = n(167216);

function c(e) {
    return `${e/16}rem`
}

function s() {
    return (0, r.jsx)("div", {
        className: l.my,
        style: {
            opacity: .08
        }
    })
}

function u(e) {
    let {
        width: t,
        height: n,
        opacity: a,
        className: _
    } = e, d = {
        width: c(t),
        opacity: null != a ? a : i().random(.02, .08)
    };
    return null != n && (d.height = c(n)), (0, r.jsx)("div", {
        className: o()(_, {
            [l.av]: !0
        }),
        style: d
    })
}

function f(e) {
    let t, {
            groupStart: n = !1,
            compact: a = !1,
            attachmentSpecs: _,
            usernameWidth: c,
            usernameOpacity: f,
            className: b,
            style: p
        } = e,
        m = a ? 50 : i().random(40, 50);
    return !a && n ? t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s, {}), (0, r.jsx)(d.H, {
            className: l.wx,
            children: (0, r.jsx)(u, {
                width: c,
                opacity: f,
                className: l.__invalid_username
            })
        })]
    }) : a && (t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u, {
            width: m,
            className: o()({
                [l.ce]: !0,
                [l.R]: !n
            })
        }), (0, r.jsx)(d.H, {
            className: l.wx,
            children: (0, r.jsx)(u, {
                width: c,
                opacity: f
            })
        })]
    })), (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: o()(b, {
            [l.iE]: !0,
            [l.oE]: a,
            [l.E]: !a
        }),
        style: p,
        children: [(0, r.jsxs)("div", {
            className: l.PG,
            children: [t, (0, r.jsx)("div", {
                className: l.Qs,
                children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, r.jsx)(u, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != _ && (0, r.jsx)("div", {
            className: l.Dq,
            children: (0, r.jsx)("div", {
                className: l.oh,
                style: {
                    opacity: .03,
                    ..._
                }
            })
        })]
    })
}
let b = 44,
    p = 22,
    m = 26,
    C = 26,
    h = 6;

function g(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: a = !1,
        attachmentSpecs: o,
        className: _
    } = e, d = null != o ? o.last ? t - 1 : i().random(0, t - 1) : -1, l = i().random(80, 120), s = i().random(.1, .2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, r.jsx)(f, {
            compact: a,
            className: _,
            usernameWidth: l,
            usernameOpacity: s,
            groupStart: 0 === t,
            attachmentSpecs: t === d ? o : void 0,
            style: 0 === t ? {
                marginTop: c(n)
            } : void 0
        }, t))
    })
}