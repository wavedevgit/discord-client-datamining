/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Ay: () => b,
    B5: () => p,
    BP: () => m,
    FQ: () => u,
    Uj: () => C,
    VF: () => g,
    _G: () => h
});
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    o = r(735438),
    s = r.n(o),
    l = r(397927),
    _ = r(406590);

function c(e) {
    return `${e/16}rem`
}

function d() {
    return (0, n.jsx)("div", {
        className: _.my,
        style: {
            opacity: .08
        }
    })
}

function u(e) {
    let {
        width: t,
        height: r,
        opacity: i,
        className: o
    } = e, l = {
        width: c(t),
        opacity: null != i ? i : s().random(.02, .08)
    };
    return null != r && (l.height = c(r)), (0, n.jsx)("div", {
        className: a()(o, {
            [_.av]: !0
        }),
        style: l
    })
}

function f(e) {
    let t, {
            groupStart: r = !1,
            compact: i = !1,
            attachmentSpecs: o,
            usernameWidth: c,
            usernameOpacity: f,
            className: p,
            style: h
        } = e,
        m = i ? 50 : s().random(40, 50);
    return !i && r ? t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d, {}), (0, n.jsx)(l.H, {
            className: _.wx,
            children: (0, n.jsx)(u, {
                width: c,
                opacity: f,
                className: _.__invalid_username
            })
        })]
    }) : i && (t = (0, n.jsxs)(n.Fragment, {
        children: [i && (0, n.jsx)(u, {
            width: m,
            className: a()({
                [_.ce]: !0,
                [_.R]: !r
            })
        }), (0, n.jsx)(l.H, {
            className: _.wx,
            children: (0, n.jsx)(u, {
                width: c,
                opacity: f
            })
        })]
    })), (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: a()(p, {
            [_.iE]: !0,
            [_.oE]: i,
            [_.E]: !i
        }),
        style: h,
        children: [(0, n.jsxs)("div", {
            className: _.PG,
            children: [t, (0, n.jsx)("div", {
                className: _.Qs,
                children: Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80)).map((e, t) => (0, n.jsx)(u, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != o && (0, n.jsx)("div", {
            className: _.Dq,
            children: (0, n.jsx)("div", {
                className: _.oh,
                style: {
                    opacity: .03,
                    ...o
                }
            })
        })]
    })
}
let p = 44,
    h = 22,
    m = 26,
    C = 26,
    g = 6;

function b(e) {
    let {
        messages: t,
        groupSpacing: r = 0,
        compact: i = !1,
        attachmentSpecs: a,
        className: o
    } = e, l = null != a ? a.last ? t - 1 : s().random(0, t - 1) : -1, _ = s().random(80, 120), d = s().random(.1, .2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, n.jsx)(f, {
            compact: i,
            className: o,
            usernameWidth: _,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === l ? a : void 0,
            style: 0 === t ? {
                marginTop: c(r)
            } : void 0
        }, t))
    })
}