/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => E,
    B5: () => g,
    BP: () => I,
    FQ: () => u,
    Uj: () => A,
    VF: () => f,
    _G: () => m
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(735438),
    o = n.n(s),
    c = n(397927),
    l = n(222875);

function _(e) {
    return `${e/16}rem`
}

function d() {
    return (0, i.jsx)("div", {
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
        className: s
    } = e, c = {
        width: _(t),
        opacity: null != a ? a : o().random(.02, .08)
    };
    return null != n && (c.height = _(n)), (0, i.jsx)("div", {
        className: r()(s, {
            [l.av]: !0
        }),
        style: c
    })
}

function b(e) {
    let t, {
            groupStart: n = !1,
            compact: a = !1,
            attachmentSpecs: s,
            usernameWidth: _,
            usernameOpacity: b,
            className: g,
            style: m
        } = e,
        I = a ? 50 : o().random(40, 50);
    return !a && n ? t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d, {}), (0, i.jsx)(c.H, {
            className: l.wx,
            children: (0, i.jsx)(u, {
                width: _,
                opacity: b,
                className: l.__invalid_username
            })
        })]
    }) : a && (t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u, {
            width: I,
            className: r()({
                [l.ce]: !0,
                [l.R]: !n
            })
        }), (0, i.jsx)(c.H, {
            className: l.wx,
            children: (0, i.jsx)(u, {
                width: _,
                opacity: b
            })
        })]
    })), (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: r()(g, {
            [l.iE]: !0,
            [l.oE]: a,
            [l.E]: !a
        }),
        style: m,
        children: [(0, i.jsxs)("div", {
            className: l.PG,
            children: [t, (0, i.jsx)("div", {
                className: l.Qs,
                children: Array(o().random(3, 8)).fill(null).map(() => o().random(30, 80)).map((e, t) => (0, i.jsx)(u, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, i.jsx)("div", {
            className: l.Dq,
            children: (0, i.jsx)("div", {
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
    m = 22,
    I = 26,
    A = 26,
    f = 6;

function E(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: a = !1,
        attachmentSpecs: r,
        className: s
    } = e, c = null != r ? r.last ? t - 1 : o().random(0, t - 1) : -1, l = o().random(80, 120), d = o().random(.1, .2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, i.jsx)(b, {
            compact: a,
            className: s,
            usernameWidth: l,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === c ? r : void 0,
            style: 0 === t ? {
                marginTop: _(n)
            } : void 0
        }, t))
    })
}