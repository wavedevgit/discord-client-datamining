/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => f,
    B5: () => g,
    BP: () => b,
    FQ: () => u,
    Uj: () => A,
    VF: () => E,
    _G: () => I
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(735438),
    c = n.n(s),
    o = n(397927),
    l = n(406590);

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
        className: s
    } = e, o = {
        width: _(t),
        opacity: null != r ? r : c().random(.02, .08)
    };
    return null != n && (o.height = _(n)), (0, a.jsx)("div", {
        className: i()(s, {
            [l.av]: !0
        }),
        style: o
    })
}

function m(e) {
    let t, {
            groupStart: n = !1,
            compact: r = !1,
            attachmentSpecs: s,
            usernameWidth: _,
            usernameOpacity: m,
            className: g,
            style: I
        } = e,
        b = r ? 50 : c().random(40, 50);
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
        children: [r && (0, a.jsx)(u, {
            width: b,
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
        className: i()(g, {
            [l.iE]: !0,
            [l.oE]: r,
            [l.E]: !r
        }),
        style: I,
        children: [(0, a.jsxs)("div", {
            className: l.PG,
            children: [t, (0, a.jsx)("div", {
                className: l.Qs,
                children: Array(c().random(3, 8)).fill(null).map(() => c().random(30, 80)).map((e, t) => (0, a.jsx)(u, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, a.jsx)("div", {
            className: l.Dq,
            children: (0, a.jsx)("div", {
                className: l.oh,
                style: {
                    opacity: .03,
                    ...s
                }
            })
        })]
    })
}
let g = 44,
    I = 22,
    b = 26,
    A = 26,
    E = 6;

function f(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: r = !1,
        attachmentSpecs: i,
        className: s
    } = e, o = null != i ? i.last ? t - 1 : c().random(0, t - 1) : -1, l = c().random(80, 120), d = c().random(.1, .2);
    return (0, a.jsx)(a.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, a.jsx)(m, {
            compact: r,
            className: s,
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