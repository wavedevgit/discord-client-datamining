/** chunk id: 114212, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => v,
    B5: () => _,
    BP: () => x,
    FQ: () => m,
    Uj: () => g,
    VF: () => f,
    _G: () => h
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(735438),
    l = n.n(s),
    c = n(397927),
    o = n(167216);

function d(e) {
    return `${e/16}rem`
}

function u() {
    return (0, a.jsx)("div", {
        className: o.my,
        style: {
            opacity: .08
        }
    })
}

function m(e) {
    let {
        width: t,
        height: n,
        opacity: r,
        className: s
    } = e, c = {
        width: d(t),
        opacity: null != r ? r : l().random(.02, .08)
    };
    return null != n && (c.height = d(n)), (0, a.jsx)("div", {
        className: i()(s, {
            [o.av]: !0
        }),
        style: c
    })
}

function p(e) {
    let t, {
            groupStart: n = !1,
            compact: r = !1,
            attachmentSpecs: s,
            usernameWidth: d,
            usernameOpacity: p,
            className: _,
            style: h
        } = e,
        x = r ? 50 : l().random(40, 50);
    return !r && n ? t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u, {}), (0, a.jsx)(c.H, {
            className: o.wx,
            children: (0, a.jsx)(m, {
                width: d,
                opacity: p,
                className: o.__invalid_username
            })
        })]
    }) : r && (t = (0, a.jsxs)(a.Fragment, {
        children: [r && (0, a.jsx)(m, {
            width: x,
            className: i()({
                [o.ce]: !0,
                [o.R]: !n
            })
        }), (0, a.jsx)(c.H, {
            className: o.wx,
            children: (0, a.jsx)(m, {
                width: d,
                opacity: p
            })
        })]
    })), (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: i()(_, {
            [o.iE]: !0,
            [o.oE]: r,
            [o.E]: !r
        }),
        style: h,
        children: [(0, a.jsxs)("div", {
            className: o.PG,
            children: [t, (0, a.jsx)("div", {
                className: o.Qs,
                children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, a.jsx)(m, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != s && (0, a.jsx)("div", {
            className: o.Dq,
            children: (0, a.jsx)("div", {
                className: o.oh,
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
    g = 26,
    f = 6;

function v(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: r = !1,
        attachmentSpecs: i,
        className: s
    } = e, c = null != i ? i.last ? t - 1 : l().random(0, t - 1) : -1, o = l().random(80, 120), u = l().random(.1, .2);
    return (0, a.jsx)(a.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, a.jsx)(p, {
            compact: r,
            className: s,
            usernameWidth: o,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === c ? i : void 0,
            style: 0 === t ? {
                marginTop: d(n)
            } : void 0
        }, t))
    })
}