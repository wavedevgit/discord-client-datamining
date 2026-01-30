/** chunk id: 119191, original params: e,t,n (module,exports,require) **/
n.d(t, {
    bi: () => b,
    sI: () => y
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(15285),
    s = n(523527),
    o = n(942405),
    c = n(780964),
    u = n(840065),
    d = n(994322),
    p = n(22802),
    f = n(652215),
    m = n(985018),
    g = n(352143);

function y(e, t, n) {
    let {
        highlightAdminWarningIfElevated: l,
        useFlexboxLayout: i,
        keybindClassName: a
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (0, r.jsx)(_, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: l,
        useFlexboxLayout: i,
        keybindClassName: a
    })
}
let b = (e, t) => (0, r.jsx)(r.Fragment, {
    children: m.intl.format(t, {
        keybind: e,
        keybindHook: (t, n) => (0, r.jsx)(i.e7I, {
            shortcut: e,
            className: g.w,
            keyClassName: g.bx
        }, n)
    })
});

function _(e) {
    let {
        keybind: t,
        message: n,
        messageWithoutKeybind: y,
        highlightAdminWarningIfElevated: b = !1,
        useFlexboxLayout: _ = !1,
        keybindClassName: A
    } = e, h = (0, d.F)(), v = (0, l.bG)([a.Ay], () => {
        let e = a.Ay.getVisibleGame();
        return null != e && e.elevated && a.Ay.canShowAdminWarning
    }), O = (0, o.NP)();
    return v ? (0, r.jsx)(i.Text, {
        variant: "text-xxs/semibold",
        color: b ? "text-feedback-warning" : "text-muted",
        children: O ? m.intl.format(m.t.MVS9pV, {
            onSettingsClick: e => {
                e.stopPropagation(), (0, s.A)(void 0, !0), (0, u.openUserSettings)(c.X.OVERLAY_PANEL, {
                    section: f.nc_.OVERLAY
                })
            }
        }) : m.intl.string(m.t.PIeSHF)
    }) : h ? _ ? (0, r.jsx)("div", {
        className: g.FH,
        children: m.intl.format(n, {
            keybind: t,
            keybindHook: e => (0, r.jsx)(p.G, {
                keybind: t,
                className: A
            }, t.join("+"))
        })
    }) : (0, r.jsx)(r.Fragment, {
        children: m.intl.format(n, {
            keybind: t,
            keybindHook: e => (0, r.jsx)(p.b, {
                keybind: t
            }, t.join("+"))
        })
    }) : y
}