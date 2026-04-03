/** chunk id: 114212 params = (module,exports,require) **/
n.d(t, {
    Ay: () => _,
    B5: () => p,
    BP: () => f,
    FQ: () => m,
    Uj: () => v,
    VF: () => g,
    _G: () => x
});
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(735438),
    l = n.n(s),
    o = n(397927),
    c = n(222875);

function d(e) {
    return `${e/16}rem`
}

function u() {
    return (0, r.jsx)("div", {
        className: c.my,
        style: {
            opacity: .08
        }
    })
}

function m(e) {
    let {
        width: t,
        height: n,
        opacity: a,
        className: s
    } = e, o = {
        width: d(t),
        opacity: null != a ? a : l().random(.02, .08)
    };
    return null != n && (o.height = d(n)), (0, r.jsx)("div", {
        className: i()(s, {
            [c.av]: !0
        }),
        style: o
    })
}

function h(e) {
    let t, {
            groupStart: n = !1,
            compact: a = !1,
            attachmentSpecs: s,
            usernameWidth: d,
            usernameOpacity: h,
            className: p,
            style: x
        } = e,
        f = a ? 50 : l().random(40, 50);
    return !a && n ? t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u, {}), (0, r.jsx)(o.H, {
            className: c.wx,
            children: (0, r.jsx)(m, {
                width: d,
                opacity: h,
                className: c.__invalid_username
            })
        })]
    }) : a && (t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m, {
            width: f,
            className: i()({
                [c.ce]: !0,
                [c.R]: !n
            })
        }), (0, r.jsx)(o.H, {
            className: c.wx,
            children: (0, r.jsx)(m, {
                width: d,
                opacity: h
            })
        })]
    })), (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: i()(p, {
            [c.iE]: !0,
            [c.oE]: a,
            [c.E]: !a
        }),
        style: x,
        children: [(0, r.jsxs)("div", {
            className: c.PG,
            children: [t, (0, r.jsx)("div", {
                className: c.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, r.jsx)(m, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, r.jsx)("div", {
            className: c.Dq,
            children: (0, r.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...s
                }
            })
        })]
    })
}
let p = 44,
    x = 22,
    f = 26,
    v = 26,
    g = 6;

function _(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: a = !1,
        attachmentSpecs: i,
        className: s
    } = e, o = null != i ? i.last ? t - 1 : l().random(0, t - 1) : -1, c = l().random(80, 120), u = l().random(.1, .2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, r.jsx)(h, {
            compact: a,
            className: s,
            usernameWidth: c,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? i : void 0,
            style: 0 === t ? {
                marginTop: d(n)
            } : void 0
        }, t))
    })
}