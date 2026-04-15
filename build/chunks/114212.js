/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => f,
    B5: () => b,
    BP: () => h,
    FQ: () => u,
    Uj: () => p,
    VF: () => C,
    _G: () => g
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    c = n(735438),
    s = n.n(c),
    o = n(397927),
    l = n(222875);

function _(e) {
    return `${e/16}rem`
}

function d() {
    return (0, a.jsx)("div", {
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
        opacity: r,
        className: c
    } = e, o = {
        width: _(t),
        opacity: null != r ? r : s().random(.02, .08)
    };
    return null != n && (o.height = _(n)), (0, a.jsx)("div", {
        className: i()(c, {
            [l.av]: !0
        }),
        style: o
    })
}

function m(e) {
    let t, {
            groupStart: n = !1,
            compact: r = !1,
            attachmentSpecs: c,
            usernameWidth: _,
            usernameOpacity: m,
            className: b,
            style: g
        } = e,
        h = r ? 50 : s().random(40, 50);
    return !r && n ? t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d, {}), (0, a.jsx)(o.H, {
            className: l.wx,
            children: (0, a.jsx)(u, {
                width: _,
                opacity: m,
                className: l.__invalid_username
            })
        })]
    }) : r && (t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u, {
            width: h,
            className: i()({
                [l.ce]: !0,
                [l.R]: !n
            })
        }), (0, a.jsx)(o.H, {
            className: l.wx,
            children: (0, a.jsx)(u, {
                width: _,
                opacity: m
            })
        })]
    })), (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: i()(b, {
            [l.iE]: !0,
            [l.oE]: r,
            [l.E]: !r
        }),
        style: g,
        children: [(0, a.jsxs)("div", {
            className: l.PG,
            children: [t, (0, a.jsx)("div", {
                className: l.Qs,
                children: Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80)).map((e, t) => (0, a.jsx)(u, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != c && (0, a.jsx)("div", {
            className: l.Dq,
            children: (0, a.jsx)("div", {
                className: l.oh,
                style: {
                    opacity: .03,
                    ...c
                }
            })
        })]
    })
}
let b = 44,
    g = 22,
    h = 26,
    p = 26,
    C = 6;

function f(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: r = !1,
        attachmentSpecs: i,
        className: c
    } = e, o = null != i ? i.last ? t - 1 : s().random(0, t - 1) : -1, l = s().random(80, 120), d = s().random(.1, .2);
    return (0, a.jsx)(a.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, a.jsx)(m, {
            compact: r,
            className: c,
            usernameWidth: l,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? i : void 0,
            style: 0 === t ? {
                marginTop: _(n)
            } : void 0
        }, t))
    })
}