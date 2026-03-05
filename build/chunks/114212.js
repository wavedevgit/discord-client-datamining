/** chunk id: 114212, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => A,
    B5: () => h,
    BP: () => b,
    FQ: () => _,
    Uj: () => f,
    VF: () => g,
    _G: () => p
});
var a = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(735438),
    i = n.n(r),
    o = n(397927),
    c = n(167216);

function d(e) {
    return `${e/16}rem`
}

function u() {
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
        opacity: l,
        className: r
    } = e, o = {
        width: d(t),
        opacity: null != l ? l : i().random(.02, .08)
    };
    return null != n && (o.height = d(n)), (0, a.jsx)("div", {
        className: s()(r, {
            [c.av]: !0
        }),
        style: o
    })
}

function m(e) {
    let t, {
            groupStart: n = !1,
            compact: l = !1,
            attachmentSpecs: r,
            usernameWidth: d,
            usernameOpacity: m,
            className: h,
            style: p
        } = e,
        b = l ? 50 : i().random(40, 50);
    return !l && n ? t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u, {}), (0, a.jsx)(o.H, {
            className: c.wx,
            children: (0, a.jsx)(_, {
                width: d,
                opacity: m,
                className: c.__invalid_username
            })
        })]
    }) : l && (t = (0, a.jsxs)(a.Fragment, {
        children: [l && (0, a.jsx)(_, {
            width: b,
            className: s()({
                [c.ce]: !0,
                [c.R]: !n
            })
        }), (0, a.jsx)(o.H, {
            className: c.wx,
            children: (0, a.jsx)(_, {
                width: d,
                opacity: m
            })
        })]
    })), (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: s()(h, {
            [c.iE]: !0,
            [c.oE]: l,
            [c.E]: !l
        }),
        style: p,
        children: [(0, a.jsxs)("div", {
            className: c.PG,
            children: [t, (0, a.jsx)("div", {
                className: c.Qs,
                children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, a.jsx)(_, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != r && (0, a.jsx)("div", {
            className: c.Dq,
            children: (0, a.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...r
                }
            })
        })]
    })
}
let h = 44,
    p = 22,
    b = 26,
    f = 26,
    g = 6;

function A(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: l = !1,
        attachmentSpecs: s,
        className: r
    } = e, o = null != s ? s.last ? t - 1 : i().random(0, t - 1) : -1, c = i().random(80, 120), u = i().random(.1, .2);
    return (0, a.jsx)(a.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, a.jsx)(m, {
            compact: l,
            className: r,
            usernameWidth: c,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? s : void 0,
            style: 0 === t ? {
                marginTop: d(n)
            } : void 0
        }, t))
    })
}