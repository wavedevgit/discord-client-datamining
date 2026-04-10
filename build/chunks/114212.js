/** chunk id: 114212 params = (module,exports,require) **/
n.d(t, {
    Ay: () => p,
    B5: () => x,
    BP: () => f,
    FQ: () => m,
    Uj: () => v,
    VF: () => j,
    _G: () => g
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(735438),
    s = n.n(a),
    o = n(397927),
    d = n(222875);

function c(e) {
    return `${e/16}rem`
}

function u() {
    return (0, r.jsx)("div", {
        className: d.my,
        style: {
            opacity: .08
        }
    })
}

function m(e) {
    let {
        width: t,
        height: n,
        opacity: l,
        className: a
    } = e, o = {
        width: c(t),
        opacity: null != l ? l : s().random(.02, .08)
    };
    return null != n && (o.height = c(n)), (0, r.jsx)("div", {
        className: i()(a, {
            [d.av]: !0
        }),
        style: o
    })
}

function h(e) {
    let t, {
            groupStart: n = !1,
            compact: l = !1,
            attachmentSpecs: a,
            usernameWidth: c,
            usernameOpacity: h,
            className: x,
            style: g
        } = e,
        f = l ? 50 : s().random(40, 50);
    return !l && n ? t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u, {}), (0, r.jsx)(o.H, {
            className: d.wx,
            children: (0, r.jsx)(m, {
                width: c,
                opacity: h,
                className: d.__invalid_username
            })
        })]
    }) : l && (t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m, {
            width: f,
            className: i()({
                [d.ce]: !0,
                [d.R]: !n
            })
        }), (0, r.jsx)(o.H, {
            className: d.wx,
            children: (0, r.jsx)(m, {
                width: c,
                opacity: h
            })
        })]
    })), (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: i()(x, {
            [d.iE]: !0,
            [d.oE]: l,
            [d.E]: !l
        }),
        style: g,
        children: [(0, r.jsxs)("div", {
            className: d.PG,
            children: [t, (0, r.jsx)("div", {
                className: d.Qs,
                children: Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80)).map((e, t) => (0, r.jsx)(m, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != a && (0, r.jsx)("div", {
            className: d.Dq,
            children: (0, r.jsx)("div", {
                className: d.oh,
                style: {
                    opacity: .03,
                    ...a
                }
            })
        })]
    })
}
let x = 44,
    g = 22,
    f = 26,
    v = 26,
    j = 6;

function p(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: l = !1,
        attachmentSpecs: i,
        className: a
    } = e, o = null != i ? i.last ? t - 1 : s().random(0, t - 1) : -1, d = s().random(80, 120), u = s().random(.1, .2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, r.jsx)(h, {
            compact: l,
            className: a,
            usernameWidth: d,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? i : void 0,
            style: 0 === t ? {
                marginTop: c(n)
            } : void 0
        }, t))
    })
}