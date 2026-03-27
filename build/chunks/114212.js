/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => p,
    B5: () => m,
    BP: () => h,
    FQ: () => d,
    Uj: () => g,
    VF: () => E,
    _G: () => f
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(735438),
    s = n.n(o),
    l = n(397927),
    c = n(222875);

function u(e) {
    return `${e/16}rem`
}

function _() {
    return (0, r.jsx)("div", {
        className: c.my,
        style: {
            opacity: .08
        }
    })
}

function d(e) {
    let {
        width: t,
        height: n,
        opacity: i,
        className: o
    } = e, l = {
        width: u(t),
        opacity: null != i ? i : s().random(.02, .08)
    };
    return null != n && (l.height = u(n)), (0, r.jsx)("div", {
        className: a()(o, {
            [c.av]: !0
        }),
        style: l
    })
}

function b(e) {
    let t, {
            groupStart: n = !1,
            compact: i = !1,
            attachmentSpecs: o,
            usernameWidth: u,
            usernameOpacity: b,
            className: m,
            style: f
        } = e,
        h = i ? 50 : s().random(40, 50);
    return !i && n ? t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_, {}), (0, r.jsx)(l.H, {
            className: c.wx,
            children: (0, r.jsx)(d, {
                width: u,
                opacity: b,
                className: c.__invalid_username
            })
        })]
    }) : i && (t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d, {
            width: h,
            className: a()({
                [c.ce]: !0,
                [c.R]: !n
            })
        }), (0, r.jsx)(l.H, {
            className: c.wx,
            children: (0, r.jsx)(d, {
                width: u,
                opacity: b
            })
        })]
    })), (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: a()(m, {
            [c.iE]: !0,
            [c.oE]: i,
            [c.E]: !i
        }),
        style: f,
        children: [(0, r.jsxs)("div", {
            className: c.PG,
            children: [t, (0, r.jsx)("div", {
                className: c.Qs,
                children: Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80)).map((e, t) => (0, r.jsx)(d, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != o && (0, r.jsx)("div", {
            className: c.Dq,
            children: (0, r.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...o
                }
            })
        })]
    })
}
let m = 44,
    f = 22,
    h = 26,
    g = 26,
    E = 6;

function p(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: i = !1,
        attachmentSpecs: a,
        className: o
    } = e, l = null != a ? a.last ? t - 1 : s().random(0, t - 1) : -1, c = s().random(80, 120), _ = s().random(.1, .2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, r.jsx)(b, {
            compact: i,
            className: o,
            usernameWidth: c,
            usernameOpacity: _,
            groupStart: 0 === t,
            attachmentSpecs: t === l ? a : void 0,
            style: 0 === t ? {
                marginTop: u(n)
            } : void 0
        }, t))
    })
}