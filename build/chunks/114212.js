/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => g,
    B5: () => m,
    BP: () => _,
    FQ: () => h,
    Uj: () => v,
    VF: () => y,
    _G: () => p
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(735438),
    s = n.n(a),
    o = n(397927),
    u = n(222875);

function c(e) {
    return `${e/16}rem`
}

function d() {
    return (0, r.jsx)("div", {
        className: u.my,
        style: {
            opacity: .08
        }
    })
}

function h(e) {
    let {
        width: t,
        height: n,
        opacity: i,
        className: a
    } = e, o = {
        width: c(t),
        opacity: null != i ? i : s().random(.02, .08)
    };
    return null != n && (o.height = c(n)), (0, r.jsx)("div", {
        className: l()(a, {
            [u.av]: !0
        }),
        style: o
    })
}

function f(e) {
    let t, {
            groupStart: n = !1,
            compact: i = !1,
            attachmentSpecs: a,
            usernameWidth: c,
            usernameOpacity: f,
            className: m,
            style: p
        } = e,
        _ = i ? 50 : s().random(40, 50);
    return !i && n ? t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d, {}), (0, r.jsx)(o.H, {
            className: u.wx,
            children: (0, r.jsx)(h, {
                width: c,
                opacity: f,
                className: u.__invalid_username
            })
        })]
    }) : i && (t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h, {
            width: _,
            className: l()({
                [u.ce]: !0,
                [u.R]: !n
            })
        }), (0, r.jsx)(o.H, {
            className: u.wx,
            children: (0, r.jsx)(h, {
                width: c,
                opacity: f
            })
        })]
    })), (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()(m, {
            [u.iE]: !0,
            [u.oE]: i,
            [u.E]: !i
        }),
        style: p,
        children: [(0, r.jsxs)("div", {
            className: u.PG,
            children: [t, (0, r.jsx)("div", {
                className: u.Qs,
                children: Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80)).map((e, t) => (0, r.jsx)(h, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != a && (0, r.jsx)("div", {
            className: u.Dq,
            children: (0, r.jsx)("div", {
                className: u.oh,
                style: {
                    opacity: .03,
                    ...a
                }
            })
        })]
    })
}
let m = 44,
    p = 22,
    _ = 26,
    v = 26,
    y = 6;

function g(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: i = !1,
        attachmentSpecs: l,
        className: a
    } = e, o = null != l ? l.last ? t - 1 : s().random(0, t - 1) : -1, u = s().random(80, 120), d = s().random(.1, .2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, r.jsx)(f, {
            compact: i,
            className: a,
            usernameWidth: u,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? l : void 0,
            style: 0 === t ? {
                marginTop: c(n)
            } : void 0
        }, t))
    })
}