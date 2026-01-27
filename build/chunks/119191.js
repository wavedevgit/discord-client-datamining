/** Chunk was on 21425 **/
/** chunk id: 119191, original params: e,t,n (module,exports,require) **/
n.d(t, {
    bi: () => _,
    sI: () => y
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
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
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: l,
        keybindClassName: a
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (0, r.jsx)(b, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: l,
        keybindClassName: a
    })
}
let _ = (e, t) => (0, r.jsx)(r.Fragment, {
    children: m.intl.format(t, {
        keybind: e,
        keybindHook: (t, n) => (0, r.jsx)(l.e7I, {
            shortcut: e,
            className: g.w,
            keyClassName: g.bx
        }, n)
    })
});

function b(e) {
    let {
        keybind: t,
        message: n,
        messageWithoutKeybind: y,
        highlightAdminWarningIfElevated: _ = !1,
        useFlexboxLayout: b = !1,
        keybindClassName: A
    } = e, h = (0, d.F)(), v = (0, i.bG)([a.Ay], () => {
        let e = a.Ay.getVisibleGame();
        return null != e && e.elevated && a.Ay.canShowAdminWarning
    }), O = (0, o.NP)();
    return v ? (0, r.jsx)(l.Text, {
        variant: "text-xxs/semibold",
        color: _ ? "text-feedback-warning" : "text-muted",
        children: O ? m.intl.format(m.t.MVS9pV, {
            onSettingsClick: e => {
                e.stopPropagation(), (0, s.A)(void 0, !0), (0, u.openUserSettings)(c.X.OVERLAY_PANEL, {
                    section: f.nc_.OVERLAY
                })
            }
        }) : m.intl.string(m.t.PIeSHF)
    }) : h ? b ? (0, r.jsx)("div", {
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