/** chunk id: 114212 params = (module,exports,require) **/
a.d(t, {
    Ay: () => C,
    B5: () => p,
    BP: () => x,
    FQ: () => m,
    Uj: () => g,
    VF: () => f,
    _G: () => h
});
var n = a(627968);
a(64700);
var s = a(503698),
    l = a.n(s),
    r = a(735438),
    i = a.n(r),
    o = a(397927),
    c = a(222875);

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
        height: a,
        opacity: s,
        className: r
    } = e, o = {
        width: d(t),
        opacity: null != s ? s : i().random(.02, .08)
    };
    return null != a && (o.height = d(a)), (0, n.jsx)("div", {
        className: l()(r, {
            [c.av]: !0
        }),
        style: o
    })
}

function _(e) {
    let t, {
            groupStart: a = !1,
            compact: s = !1,
            attachmentSpecs: r,
            usernameWidth: d,
            usernameOpacity: _,
            className: p,
            style: h
        } = e,
        x = s ? 50 : i().random(40, 50);
    return !s && a ? t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {}), (0, n.jsx)(o.H, {
            className: c.wx,
            children: (0, n.jsx)(m, {
                width: d,
                opacity: _,
                className: c.__invalid_username
            })
        })]
    }) : s && (t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(m, {
            width: x,
            className: l()({
                [c.ce]: !0,
                [c.R]: !a
            })
        }), (0, n.jsx)(o.H, {
            className: c.wx,
            children: (0, n.jsx)(m, {
                width: d,
                opacity: _
            })
        })]
    })), (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: l()(p, {
            [c.iE]: !0,
            [c.oE]: s,
            [c.E]: !s
        }),
        style: h,
        children: [(0, n.jsxs)("div", {
            className: c.PG,
            children: [t, (0, n.jsx)("div", {
                className: c.Qs,
                children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, n.jsx)(m, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != r && (0, n.jsx)("div", {
            className: c.Dq,
            children: (0, n.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...r
                }
            })
        })]
    })
}
let p = 44,
    h = 22,
    x = 26,
    g = 26,
    f = 6;

function C(e) {
    let {
        messages: t,
        groupSpacing: a = 0,
        compact: s = !1,
        attachmentSpecs: l,
        className: r
    } = e, o = null != l ? l.last ? t - 1 : i().random(0, t - 1) : -1, c = i().random(80, 120), u = i().random(.1, .2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, n.jsx)(_, {
            compact: s,
            className: r,
            usernameWidth: c,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? l : void 0,
            style: 0 === t ? {
                marginTop: d(a)
            } : void 0
        }, t))
    })
}