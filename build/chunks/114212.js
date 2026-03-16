/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => f,
    B5: () => g,
    BP: () => A,
    FQ: () => u,
    Uj: () => m,
    VF: () => E,
    _G: () => b
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(735438),
    l = n.n(s),
    o = n(397927),
    c = n(406590);

function _(e) {
    return `${e/16}rem`
}

function d() {
    return (0, i.jsx)("div", {
        className: c.my,
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
        className: s
    } = e, o = {
        width: _(t),
        opacity: null != a ? a : l().random(.02, .08)
    };
    return null != n && (o.height = _(n)), (0, i.jsx)("div", {
        className: r()(s, {
            [c.av]: !0
        }),
        style: o
    })
}

function I(e) {
    let t, {
            groupStart: n = !1,
            compact: a = !1,
            attachmentSpecs: s,
            usernameWidth: _,
            usernameOpacity: I,
            className: g,
            style: b
        } = e,
        A = a ? 50 : l().random(40, 50);
    return !a && n ? t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d, {}), (0, i.jsx)(o.H, {
            className: c.wx,
            children: (0, i.jsx)(u, {
                width: _,
                opacity: I,
                className: c.__invalid_username
            })
        })]
    }) : a && (t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u, {
            width: A,
            className: r()({
                [c.ce]: !0,
                [c.R]: !n
            })
        }), (0, i.jsx)(o.H, {
            className: c.wx,
            children: (0, i.jsx)(u, {
                width: _,
                opacity: I
            })
        })]
    })), (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: r()(g, {
            [c.iE]: !0,
            [c.oE]: a,
            [c.E]: !a
        }),
        style: b,
        children: [(0, i.jsxs)("div", {
            className: c.PG,
            children: [t, (0, i.jsx)("div", {
                className: c.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, i.jsx)(u, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, i.jsx)("div", {
            className: c.Dq,
            children: (0, i.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...s
                }
            })
        })]
    })
}
let g = 44,
    b = 22,
    A = 26,
    m = 26,
    E = 6;

function f(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: a = !1,
        attachmentSpecs: r,
        className: s
    } = e, o = null != r ? r.last ? t - 1 : l().random(0, t - 1) : -1, c = l().random(80, 120), d = l().random(.1, .2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, i.jsx)(I, {
            compact: a,
            className: s,
            usernameWidth: c,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? r : void 0,
            style: 0 === t ? {
                marginTop: _(n)
            } : void 0
        }, t))
    })
}