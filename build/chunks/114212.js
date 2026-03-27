/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Ay: () => _,
    B5: () => h,
    BP: () => f,
    FQ: () => m,
    Uj: () => v,
    VF: () => g,
    _G: () => x
});
var n = r(627968);
r(64700);
var i = r(503698),
    s = r.n(i),
    a = r(735438),
    l = r.n(a),
    o = r(397927),
    c = r(222875);

function d(e) {
    return `${e/16}rem`
}

function u() {
    return (0, n.jsx)("div", {
        className: c.my,
        style: {
            opacity: .08
        }
    })
}

function m(e) {
    let {
        width: t,
        height: r,
        opacity: i,
        className: a
    } = e, o = {
        width: d(t),
        opacity: null != i ? i : l().random(.02, .08)
    };
    return null != r && (o.height = d(r)), (0, n.jsx)("div", {
        className: s()(a, {
            [c.av]: !0
        }),
        style: o
    })
}

function p(e) {
    let t, {
            groupStart: r = !1,
            compact: i = !1,
            attachmentSpecs: a,
            usernameWidth: d,
            usernameOpacity: p,
            className: h,
            style: x
        } = e,
        f = i ? 50 : l().random(40, 50);
    return !i && r ? t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {}), (0, n.jsx)(o.H, {
            className: c.wx,
            children: (0, n.jsx)(m, {
                width: d,
                opacity: p,
                className: c.__invalid_username
            })
        })]
    }) : i && (t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(m, {
            width: f,
            className: s()({
                [c.ce]: !0,
                [c.R]: !r
            })
        }), (0, n.jsx)(o.H, {
            className: c.wx,
            children: (0, n.jsx)(m, {
                width: d,
                opacity: p
            })
        })]
    })), (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: s()(h, {
            [c.iE]: !0,
            [c.oE]: i,
            [c.E]: !i
        }),
        style: x,
        children: [(0, n.jsxs)("div", {
            className: c.PG,
            children: [t, (0, n.jsx)("div", {
                className: c.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, n.jsx)(m, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != a && (0, n.jsx)("div", {
            className: c.Dq,
            children: (0, n.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...a
                }
            })
        })]
    })
}
let h = 44,
    x = 22,
    f = 26,
    v = 26,
    g = 6;

function _(e) {
    let {
        messages: t,
        groupSpacing: r = 0,
        compact: i = !1,
        attachmentSpecs: s,
        className: a
    } = e, o = null != s ? s.last ? t - 1 : l().random(0, t - 1) : -1, c = l().random(80, 120), u = l().random(.1, .2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, n.jsx)(p, {
            compact: i,
            className: a,
            usernameWidth: c,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? s : void 0,
            style: 0 === t ? {
                marginTop: d(r)
            } : void 0
        }, t))
    })
}