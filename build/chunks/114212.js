/** chunk id: 114212 params = (module,exports,require) **/
n.d(t, {
    Ay: () => f,
    B5: () => x,
    BP: () => p,
    FQ: () => h,
    Uj: () => v,
    VF: () => j,
    _G: () => g
});
var l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(735438),
    i = n.n(r),
    o = n(397927),
    c = n(222875);

function d(e) {
    return `${e/16}rem`
}

function u() {
    return (0, l.jsx)("div", {
        className: c.my,
        style: {
            opacity: .08
        }
    })
}

function h(e) {
    let {
        width: t,
        height: n,
        opacity: s,
        className: r
    } = e, o = {
        width: d(t),
        opacity: null != s ? s : i().random(.02, .08)
    };
    return null != n && (o.height = d(n)), (0, l.jsx)("div", {
        className: a()(r, {
            [c.av]: !0
        }),
        style: o
    })
}

function m(e) {
    let t, {
            groupStart: n = !1,
            compact: s = !1,
            attachmentSpecs: r,
            usernameWidth: d,
            usernameOpacity: m,
            className: x,
            style: g
        } = e,
        p = s ? 50 : i().random(40, 50);
    return !s && n ? t = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u, {}), (0, l.jsx)(o.H, {
            className: c.wx,
            children: (0, l.jsx)(h, {
                width: d,
                opacity: m,
                className: c.__invalid_username
            })
        })]
    }) : s && (t = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(h, {
            width: p,
            className: a()({
                [c.ce]: !0,
                [c.R]: !n
            })
        }), (0, l.jsx)(o.H, {
            className: c.wx,
            children: (0, l.jsx)(h, {
                width: d,
                opacity: m
            })
        })]
    })), (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: a()(x, {
            [c.iE]: !0,
            [c.oE]: s,
            [c.E]: !s
        }),
        style: g,
        children: [(0, l.jsxs)("div", {
            className: c.PG,
            children: [t, (0, l.jsx)("div", {
                className: c.Qs,
                children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, l.jsx)(h, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != r && (0, l.jsx)("div", {
            className: c.Dq,
            children: (0, l.jsx)("div", {
                className: c.oh,
                style: {
                    opacity: .03,
                    ...r
                }
            })
        })]
    })
}
let x = 44,
    g = 22,
    p = 26,
    v = 26,
    j = 6;

function f(e) {
    let {
        messages: t,
        groupSpacing: n = 0,
        compact: s = !1,
        attachmentSpecs: a,
        className: r
    } = e, o = null != a ? a.last ? t - 1 : i().random(0, t - 1) : -1, c = i().random(80, 120), u = i().random(.1, .2);
    return (0, l.jsx)(l.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, l.jsx)(m, {
            compact: s,
            className: r,
            usernameWidth: c,
            usernameOpacity: u,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? a : void 0,
            style: 0 === t ? {
                marginTop: d(n)
            } : void 0
        }, t))
    })
}