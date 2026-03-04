/** chunk id: 114212, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    Ay: () => b,
    B5: () => m,
    BP: () => f,
    FQ: () => _,
    Uj: () => g,
    VF: () => x,
    _G: () => p
});
var n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(735438),
    i = r.n(l),
    c = r(397927),
    o = r(406590);

function u(e) {
    return `${e/16}rem`
}

function d() {
    return (0, n.jsx)("div", {
        className: o.my,
        style: {
            opacity: .08
        }
    })
}

function _(e) {
    let {
        width: t,
        height: r,
        opacity: a,
        className: l
    } = e, c = {
        width: u(t),
        opacity: null != a ? a : i().random(.02, .08)
    };
    return null != r && (c.height = u(r)), (0, n.jsx)("div", {
        className: s()(l, {
            [o.av]: !0
        }),
        style: c
    })
}

function h(e) {
    let t, {
            groupStart: r = !1,
            compact: a = !1,
            attachmentSpecs: l,
            usernameWidth: u,
            usernameOpacity: h,
            className: m,
            style: p
        } = e,
        f = a ? 50 : i().random(40, 50);
    return !a && r ? t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d, {}), (0, n.jsx)(c.H, {
            className: o.wx,
            children: (0, n.jsx)(_, {
                width: u,
                opacity: h,
                className: o.__invalid_username
            })
        })]
    }) : a && (t = (0, n.jsxs)(n.Fragment, {
        children: [a && (0, n.jsx)(_, {
            width: f,
            className: s()({
                [o.ce]: !0,
                [o.R]: !r
            })
        }), (0, n.jsx)(c.H, {
            className: o.wx,
            children: (0, n.jsx)(_, {
                width: u,
                opacity: h
            })
        })]
    })), (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: s()(m, {
            [o.iE]: !0,
            [o.oE]: a,
            [o.E]: !a
        }),
        style: p,
        children: [(0, n.jsxs)("div", {
            className: o.PG,
            children: [t, (0, n.jsx)("div", {
                className: o.Qs,
                children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, n.jsx)(_, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != l && (0, n.jsx)("div", {
            className: o.Dq,
            children: (0, n.jsx)("div", {
                className: o.oh,
                style: {
                    opacity: .03,
                    ...l
                }
            })
        })]
    })
}
let m = 44,
    p = 22,
    f = 26,
    g = 26,
    x = 6;

function b(e) {
    let {
        messages: t,
        groupSpacing: r = 0,
        compact: a = !1,
        attachmentSpecs: s,
        className: l
    } = e, c = null != s ? s.last ? t - 1 : i().random(0, t - 1) : -1, o = i().random(80, 120), d = i().random(.1, .2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, n.jsx)(h, {
            compact: a,
            className: l,
            usernameWidth: o,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === c ? s : void 0,
            style: 0 === t ? {
                marginTop: u(r)
            } : void 0
        }, t))
    })
}