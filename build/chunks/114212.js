/** chunk id: 114212 params = (module,exports,require) **/
t.d(n, {
    Ay: () => g,
    B5: () => m,
    BP: () => p,
    FQ: () => A,
    Uj: () => f,
    VF: () => h,
    _G: () => x
});
var i = t(627968);
t(64700);
var s = t(503698),
    r = t.n(s),
    a = t(735438),
    l = t.n(a),
    o = t(397927),
    d = t(816480);

function c(e) {
    return `${e/16}rem`
}

function u() {
    return (0, i.jsx)("div", {
        className: d.my,
        style: {
            opacity: .08
        }
    })
}

function A(e) {
    let {
        width: n,
        height: t,
        opacity: s,
        className: a
    } = e, o = {
        width: c(n),
        opacity: null != s ? s : l().random(.02, .08)
    };
    return null != t && (o.height = c(t)), (0, i.jsx)("div", {
        className: r()(a, {
            [d.av]: !0
        }),
        style: o
    })
}

function _(e) {
    let n, {
            groupStart: t = !1,
            compact: s = !1,
            attachmentSpecs: a,
            usernameWidth: c,
            usernameOpacity: _,
            className: m,
            style: x
        } = e,
        p = s ? 50 : l().random(40, 50);
    return !s && t ? n = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u, {}), (0, i.jsx)(o.H, {
            className: d.wx,
            children: (0, i.jsx)(A, {
                width: c,
                opacity: _,
                className: d.__invalid_username
            })
        })]
    }) : s && (n = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(A, {
            width: p,
            className: r()({
                [d.ce]: !0,
                [d.R]: !t
            })
        }), (0, i.jsx)(o.H, {
            className: d.wx,
            children: (0, i.jsx)(A, {
                width: c,
                opacity: _
            })
        })]
    })), (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: r()(m, {
            [d.iE]: !0,
            [d.oE]: s,
            [d.E]: !s
        }),
        style: x,
        children: [(0, i.jsxs)("div", {
            className: d.PG,
            children: [n, (0, i.jsx)("div", {
                className: d.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, n) => (0, i.jsx)(A, {
                    width: e,
                    opacity: .06
                }, n))
            })]
        }), null != a && (0, i.jsx)("div", {
            className: d.Dq,
            children: (0, i.jsx)("div", {
                className: d.oh,
                style: {
                    opacity: .03,
                    ...a
                }
            })
        })]
    })
}
let m = 44,
    x = 22,
    p = 26,
    f = 26,
    h = 6;

function g(e) {
    let {
        messages: n,
        groupSpacing: t = 0,
        compact: s = !1,
        attachmentSpecs: r,
        className: a
    } = e, o = null != r ? r.last ? n - 1 : l().random(0, n - 1) : -1, d = l().random(80, 120), u = l().random(.1, .2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(n).fill(null).map((e, n) => (0, i.jsx)(_, {
            compact: s,
            className: a,
            usernameWidth: d,
            usernameOpacity: u,
            groupStart: 0 === n,
            attachmentSpecs: n === o ? r : void 0,
            style: 0 === n ? {
                marginTop: c(t)
            } : void 0
        }, n))
    })
}