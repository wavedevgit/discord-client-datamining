/** chunk id: 114212 params = (module,exports,require) **/
"use strict";
l.d(t, {
    Ay: () => x,
    B5: () => h,
    BP: () => g,
    FQ: () => _,
    Uj: () => b,
    VF: () => f,
    _G: () => p
});
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    s = l(735438),
    i = l.n(s),
    o = l(397927),
    d = l(406590);

function c(e) {
    return `${e/16}rem`
}

function u() {
    return (0, a.jsx)("div", {
        className: d.my,
        style: {
            opacity: .08
        }
    })
}

function _(e) {
    let {
        width: t,
        height: l,
        opacity: n,
        className: s
    } = e, o = {
        width: c(t),
        opacity: null != n ? n : i().random(.02, .08)
    };
    return null != l && (o.height = c(l)), (0, a.jsx)("div", {
        className: r()(s, {
            [d.av]: !0
        }),
        style: o
    })
}

function m(e) {
    let t, {
            groupStart: l = !1,
            compact: n = !1,
            attachmentSpecs: s,
            usernameWidth: c,
            usernameOpacity: m,
            className: h,
            style: p
        } = e,
        g = n ? 50 : i().random(40, 50);
    return !n && l ? t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u, {}), (0, a.jsx)(o.H, {
            className: d.wx,
            children: (0, a.jsx)(_, {
                width: c,
                opacity: m,
                className: d.__invalid_username
            })
        })]
    }) : n && (t = (0, a.jsxs)(a.Fragment, {
        children: [n && (0, a.jsx)(_, {
            width: g,
            className: r()({
                [d.ce]: !0,
                [d.R]: !l
            })
        }), (0, a.jsx)(o.H, {
            className: d.wx,
            children: (0, a.jsx)(_, {
                width: c,
                opacity: m
            })
        })]
    })), (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: r()(h, {
            [d.iE]: !0,
            [d.oE]: n,
            [d.E]: !n
        }),
        style: p,
        children: [(0, a.jsxs)("div", {
            className: d.PG,
            children: [t, (0, a.jsx)("div", {
                className: d.Qs,
                children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, a.jsx)(_, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, a.jsx)("div", {
            className: d.Dq,
            children: (0, a.jsx)("div", {
                className: d.oh,
                style: {
                    opacity: .03,
                    ...s
                }
            })
        })]
    })
}
let h = 44,
    p = 22,
    g = 26,
    b = 26,
    f = 6;

function x(e) {
    let {
        messages: t,
        groupSpacing: l = 0,
        compact: n = !1,
        attachmentSpecs: r,
        className: s
    } = e, o = null != r ? r.last ? t - 1 : i().random(0, t - 1) : -1, d = i().random(80, 120), u = i().random(.1, .2);
    return (0, a.jsx)(a.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, a.jsx)(m, {
            compact: n,
            className: s,
            usernameWidth: d,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? r : void 0,
            style: 0 === t ? {
                marginTop: c(l)
            } : void 0
        }, t))
    })
}