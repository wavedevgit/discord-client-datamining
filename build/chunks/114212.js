/** chunk id: 114212 params = (module,exports,require) **/
n.d(t, {
    Ay: () => g,
    B5: () => m,
    BP: () => p,
    FQ: () => _,
    Uj: () => f,
    VF: () => h,
    _G: () => x
});
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(735438),
    l = n.n(a),
    o = n(397927),
    d = n(406590);

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

function _(e) {
    let {
        width: t,
        height: n,
        opacity: s,
        className: a
    } = e, o = {
        width: c(t),
        opacity: null != s ? s : l().random(.02, .08)
    };
    return null != n && (o.height = c(n)), (0, i.jsx)("div", {
        className: r()(a, {
            [d.av]: !0
        }),
        style: o
    })
}

function A(e) {
    let t, {
            groupStart: n = !1,
            compact: s = !1,
            attachmentSpecs: a,
            usernameWidth: c,
            usernameOpacity: A,
            className: m,
            style: x
        } = e,
        p = s ? 50 : l().random(40, 50);
    return !s && n ? t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u, {}), (0, i.jsx)(o.H, {
            className: d.wx,
            children: (0, i.jsx)(_, {
                width: c,
                opacity: A,
                className: d.__invalid_username
            })
        })]
    }) : s && (t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_, {
            width: p,
            className: r()({
                [d.ce]: !0,
                [d.R]: !n
            })
        }), (0, i.jsx)(o.H, {
            className: d.wx,
            children: (0, i.jsx)(_, {
                width: c,
                opacity: A
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
            children: [t, (0, i.jsx)("div", {
                className: d.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, i.jsx)(_, {
                    width: e,
                    opacity: .06
                }, t))
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
        messages: t,
        groupSpacing: n = 0,
        compact: s = !1,
        attachmentSpecs: r,
        className: a
    } = e, o = null != r ? r.last ? t - 1 : l().random(0, t - 1) : -1, d = l().random(80, 120), u = l().random(.1, .2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, i.jsx)(A, {
            compact: s,
            className: a,
            usernameWidth: d,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? r : void 0,
            style: 0 === t ? {
                marginTop: c(n)
            } : void 0
        }, t))
    })
}