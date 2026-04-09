/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => f,
    B5: () => b,
    BP: () => g,
    FQ: () => d,
    Uj: () => h,
    VF: () => E,
    _G: () => p
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    o = n(735438),
    s = n.n(o),
    c = n(397927),
    l = n(816480);

function _(e) {
    return `${e/16}rem`
}

function u() {
    return (0, a.jsx)("div", {
        className: l.my,
        style: {
            opacity: .08
        }
    })
}

function d(e) {
    let {
        width: t,
        height: n,
        opacity: r,
        className: o
    } = e, c = {
        width: _(t),
        opacity: null != r ? r : s().random(.02, .08)
    };
    return null != n && (c.height = _(n)), (0, a.jsx)("div", {
        className: i()(o, {
            [l.av]: !0
        }),
        style: c
    })
}

function m(e) {
    let t, {
            groupStart: n = !1,
            compact: r = !1,
            attachmentSpecs: o,
            usernameWidth: _,
            usernameOpacity: m,
            className: b,
            style: p
        } = e,
        g = r ? 50 : s().random(40, 50);
    return !r && n ? t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u, {}), (0, a.jsx)(c.H, {
            className: l.wx,
            children: (0, a.jsx)(d, {
                width: _,
                opacity: m,
                className: l.__invalid_username
            })
        })]
    }) : r && (t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d, {
            width: g,
            className: i()({
                [l.ce]: !0,
                [l.R]: !n
            })
        }), (0, a.jsx)(c.H, {
            className: l.wx,
            children: (0, a.jsx)(d, {
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
        style: p,
        children: [(0, a.jsxs)("div", {
            className: l.PG,
            children: [t, (0, a.jsx)("div", {
                className: l.Qs,
                children: Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80)).map((e, t) => (0, a.jsx)(d, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != o && (0, a.jsx)("div", {
            className: l.Dq,
            children: (0, a.jsx)("div", {
                className: l.oh,
                style: {
                    opacity: .03,
                    ...o
                }
            })
        })]
    })
}
let b = 44,
    p = 22,
    g = 26,
    h = 26,
    E = 6;

function f(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: r = !1,
        attachmentSpecs: i,
        className: o
    } = e, c = null != i ? i.last ? t - 1 : s().random(0, t - 1) : -1, l = s().random(80, 120), u = s().random(.1, .2);
    return (0, a.jsx)(a.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, a.jsx)(m, {
            compact: r,
            className: o,
            usernameWidth: l,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === c ? i : void 0,
            style: 0 === t ? {
                marginTop: _(n)
            } : void 0
        }, t))
    })
}