/** chunk id: 114212 params = (module,exports,require) **/
a.d(t, {
    Ay: () => h,
    B5: () => p,
    BP: () => b,
    FQ: () => u,
    Uj: () => g,
    VF: () => C,
    _G: () => f
});
var r = a(627968);
a(64700);
var n = a(503698),
    o = a.n(n),
    i = a(735438),
    c = a.n(i),
    _ = a(397927),
    d = a(814635);

function s(e) {
    return `${e/16}rem`
}

function l() {
    return (0, r.jsx)("div", {
        className: d.my,
        style: {
            opacity: .08
        }
    })
}

function u(e) {
    let {
        width: t,
        height: a,
        opacity: n,
        className: i
    } = e, _ = {
        width: s(t),
        opacity: null != n ? n : c().random(.02, .08)
    };
    return null != a && (_.height = s(a)), (0, r.jsx)("div", {
        className: o()(i, {
            [d.av]: !0
        }),
        style: _
    })
}

function m(e) {
    let t, {
            groupStart: a = !1,
            compact: n = !1,
            attachmentSpecs: i,
            usernameWidth: s,
            usernameOpacity: m,
            className: p,
            style: f
        } = e,
        b = n ? 50 : c().random(40, 50);
    return !n && a ? t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l, {}), (0, r.jsx)(_.H, {
            className: d.wx,
            children: (0, r.jsx)(u, {
                width: s,
                opacity: m,
                className: d.__invalid_username
            })
        })]
    }) : n && (t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u, {
            width: b,
            className: o()({
                [d.ce]: !0,
                [d.R]: !a
            })
        }), (0, r.jsx)(_.H, {
            className: d.wx,
            children: (0, r.jsx)(u, {
                width: s,
                opacity: m
            })
        })]
    })), (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: o()(p, {
            [d.iE]: !0,
            [d.oE]: n,
            [d.E]: !n
        }),
        style: f,
        children: [(0, r.jsxs)("div", {
            className: d.PG,
            children: [t, (0, r.jsx)("div", {
                className: d.Qs,
                children: Array(c().random(3, 8)).fill(null).map(() => c().random(30, 80)).map((e, t) => (0, r.jsx)(u, {
                    width: e,
                    opacity: .06
                }, t))
            })]
        }), null != i && (0, r.jsx)("div", {
            className: d.Dq,
            children: (0, r.jsx)("div", {
                className: d.oh,
                style: {
                    opacity: .03,
                    ...i
                }
            })
        })]
    })
}
let p = 44,
    f = 22,
    b = 26,
    g = 26,
    C = 6;

function h(e) {
    let {
        messages: t,
        groupSpacing: a = 0,
        compact: n = !1,
        attachmentSpecs: o,
        className: i
    } = e, _ = null != o ? o.last ? t - 1 : c().random(0, t - 1) : -1, d = c().random(80, 120), l = c().random(.1, .2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, r.jsx)(m, {
            compact: n,
            className: i,
            usernameWidth: d,
            usernameOpacity: l,
            groupStart: 0 === t,
            attachmentSpecs: t === _ ? o : void 0,
            style: 0 === t ? {
                marginTop: s(a)
            } : void 0
        }, t))
    })
}