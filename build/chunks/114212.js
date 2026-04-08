/** chunk id: 114212 params = (module,exports,require) **/
a.d(t, {
    Ay: () => v,
    B5: () => _,
    BP: () => x,
    FQ: () => m,
    Uj: () => f,
    VF: () => g,
    _G: () => h
});
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    s = a(735438),
    l = a.n(s),
    o = a(397927),
    c = a(816480);

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
        opacity: r,
        className: s
    } = e, o = {
        width: d(t),
        opacity: null != r ? r : l().random(.02, .08)
    };
    return null != a && (o.height = d(a)), (0, n.jsx)("div", {
        className: i()(s, {
            [c.av]: !0
        }),
        style: o
    })
}

function p(e) {
    let t, {
            groupStart: a = !1,
            compact: r = !1,
            attachmentSpecs: s,
            usernameWidth: d,
            usernameOpacity: p,
            className: _,
            style: h
        } = e,
        x = r ? 50 : l().random(40, 50);
    return !r && a ? t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {}), (0, n.jsx)(o.H, {
            className: c.wx,
            children: (0, n.jsx)(m, {
                width: d,
                opacity: p,
                className: c.__invalid_username
            })
        })]
    }) : r && (t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(m, {
            width: x,
            className: i()({
                [c.ce]: !0,
                [c.R]: !a
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
        className: i()(_, {
            [c.iE]: !0,
            [c.oE]: r,
            [c.E]: !r
        }),
        style: h,
        children: [(0, n.jsxs)("div", {
            className: c.PG,
            children: [t, (0, n.jsx)("div", {
                className: c.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, n.jsx)(m, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, n.jsx)("div", {
            className: c.Dq,
            children: (0, n.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...s
                }
            })
        })]
    })
}
let _ = 44,
    h = 22,
    x = 26,
    f = 26,
    g = 6;

function v(e) {
    let {
        messages: t,
        groupSpacing: a = 0,
        compact: r = !1,
        attachmentSpecs: i,
        className: s
    } = e, o = null != i ? i.last ? t - 1 : l().random(0, t - 1) : -1, c = l().random(80, 120), u = l().random(.1, .2);
    return (0, n.jsx)(n.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, n.jsx)(p, {
            compact: r,
            className: s,
            usernameWidth: c,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? i : void 0,
            style: 0 === t ? {
                marginTop: d(a)
            } : void 0
        }, t))
    })
}