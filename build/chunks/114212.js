/** chunk id: 114212, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => x,
    B5: () => g,
    BP: () => b,
    FQ: () => _,
    Uj: () => f,
    VF: () => h,
    _G: () => p
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(735438),
    l = n.n(s),
    o = n(397927),
    c = n(406590);

function u(e) {
    return `${e/16}rem`
}

function d() {
    return (0, a.jsx)("div", {
        className: c.my,
        style: {
            opacity: .08
        }
    })
}

function _(e) {
    let {
        width: t,
        height: n,
        opacity: r,
        className: s
    } = e, o = {
        width: u(t),
        opacity: null != r ? r : l().random(.02, .08)
    };
    return null != n && (o.height = u(n)), (0, a.jsx)("div", {
        className: i()(s, {
            [c.av]: !0
        }),
        style: o
    })
}

function m(e) {
    let t, {
            groupStart: n = !1,
            compact: r = !1,
            attachmentSpecs: s,
            usernameWidth: u,
            usernameOpacity: m,
            className: g,
            style: p
        } = e,
        b = r ? 50 : l().random(40, 50);
    return !r && n ? t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d, {}), (0, a.jsx)(o.H, {
            className: c.wx,
            children: (0, a.jsx)(_, {
                width: u,
                opacity: m,
                className: c.__invalid_username
            })
        })]
    }) : r && (t = (0, a.jsxs)(a.Fragment, {
        children: [r && (0, a.jsx)(_, {
            width: b,
            className: i()({
                [c.ce]: !0,
                [c.R]: !n
            })
        }), (0, a.jsx)(o.H, {
            className: c.wx,
            children: (0, a.jsx)(_, {
                width: u,
                opacity: m
            })
        })]
    })), (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: i()(g, {
            [c.iE]: !0,
            [c.oE]: r,
            [c.E]: !r
        }),
        style: p,
        children: [(0, a.jsxs)("div", {
            className: c.PG,
            children: [t, (0, a.jsx)("div", {
                className: c.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, a.jsx)(_, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, a.jsx)("div", {
            className: c.Dq,
            children: (0, a.jsx)("div", {
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
    p = 22,
    b = 26,
    f = 26,
    h = 6;

function x(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: r = !1,
        attachmentSpecs: i,
        className: s
    } = e, o = null != i ? i.last ? t - 1 : l().random(0, t - 1) : -1, c = l().random(80, 120), d = l().random(.1, .2);
    return (0, a.jsx)(a.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, a.jsx)(m, {
            compact: r,
            className: s,
            usernameWidth: c,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? i : void 0,
            style: 0 === t ? {
                marginTop: u(n)
            } : void 0
        }, t))
    })
}