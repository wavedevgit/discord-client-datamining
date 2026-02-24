/** chunk id: 114212, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    Ay: () => b,
    B5: () => f,
    BP: () => h,
    FQ: () => u,
    Uj: () => C,
    VF: () => g,
    _G: () => m
});
var r = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    o = a(735438),
    s = a.n(o),
    l = a(397927),
    c = a(167216);

function _(e) {
    return `${e/16}rem`
}

function d() {
    return (0, r.jsx)("div", {
        className: c.my,
        style: {
            opacity: .08
        }
    })
}

function u(e) {
    let {
        width: t,
        height: a,
        opacity: n,
        className: o
    } = e, l = {
        width: _(t),
        opacity: null != n ? n : s().random(.02, .08)
    };
    return null != a && (l.height = _(a)), (0, r.jsx)("div", {
        className: i()(o, {
            [c.av]: !0
        }),
        style: l
    })
}

function p(e) {
    let t, {
            groupStart: a = !1,
            compact: n = !1,
            attachmentSpecs: o,
            usernameWidth: _,
            usernameOpacity: p,
            className: f,
            style: m
        } = e,
        h = n ? 50 : s().random(40, 50);
    return !n && a ? t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d, {}), (0, r.jsx)(l.H, {
            className: c.wx,
            children: (0, r.jsx)(u, {
                width: _,
                opacity: p,
                className: c.__invalid_username
            })
        })]
    }) : n && (t = (0, r.jsxs)(r.Fragment, {
        children: [n && (0, r.jsx)(u, {
            width: h,
            className: i()({
                [c.ce]: !0,
                [c.R]: !a
            })
        }), (0, r.jsx)(l.H, {
            className: c.wx,
            children: (0, r.jsx)(u, {
                width: _,
                opacity: p
            })
        })]
    })), (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: i()(f, {
            [c.iE]: !0,
            [c.oE]: n,
            [c.E]: !n
        }),
        style: m,
        children: [(0, r.jsxs)("div", {
            className: c.PG,
            children: [t, (0, r.jsx)("div", {
                className: c.Qs,
                children: Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80)).map((e, t) => (0, r.jsx)(u, {
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
let f = 44,
    m = 22,
    h = 26,
    C = 26,
    g = 6;

function b(e) {
    let {
        messages: t,
        groupSpacing: a = 0,
        compact: n = !1,
        attachmentSpecs: i,
        className: o
    } = e, l = null != i ? i.last ? t - 1 : s().random(0, t - 1) : -1, c = s().random(80, 120), d = s().random(.1, .2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, r.jsx)(p, {
            compact: n,
            className: o,
            usernameWidth: c,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === l ? i : void 0,
            style: 0 === t ? {
                marginTop: _(a)
            } : void 0
        }, t))
    })
}