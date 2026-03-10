/** chunk id: 742589 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    I: () => g
});
var i = n(627968);
n(64700);
var a = n(607399),
    r = n(793574),
    l = n(688810),
    s = n(966597),
    o = n(922281),
    c = n(907745),
    d = n(723702),
    _ = n(837921),
    u = n(58736),
    h = n(746080),
    C = n(892513);
async function g(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? _.Ay.minimize() : "Maximize" === e && _.Ay.maximize()
    }
}

function A(e) {
    let {
        children: t,
        className: n,
        channelId: r,
        guildId: l,
        innerClassname: d,
        transparent: _ = !1,
        hidden: A = !1,
        toolbar: m,
        mobileToolbar: E,
        "aria-label": p,
        "aria-labelledby": b,
        scrollable: T,
        role: I,
        hideSearch: L,
        hideForLater: O,
        showDivider: y,
        disableDoubleClick: f
    } = e, {
        enabled: N,
        inInbox: M
    } = s.A.useConfig({
        location: "HeaderBar"
    });
    return (0, i.jsx)(u.Ay, {
        className: n,
        innerClassName: d,
        toolbar: function() {
            if (null == m) return null;
            let e = null != r && !L;
            return a.Fr ? E : (0, i.jsxs)(i.Fragment, {
                children: [m, e && !(0, h.jq)(r) ? (0, i.jsx)(c.Ay, {
                    guildId: l,
                    channelId: r,
                    className: C.$P
                }, l ?? r) : null, y && (0, i.jsx)(u.Ay.Divider, {}), O || !N || M ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: _,
        hidden: A,
        onDoubleClick: () => g(f),
        "aria-label": p,
        "aria-labelledby": b,
        role: I,
        scrollable: T,
        children: t
    })
}

function m(e) {
    let {
        children: t,
        className: n,
        "aria-label": a,
        "aria-labelledby": r,
        role: l,
        disableDoubleClick: s
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        onDoubleClick: () => g(s),
        "aria-label": a,
        "aria-labelledby": r,
        role: l,
        children: t
    })
}

function E(e) {
    let {
        isAuthenticated: t = !0,
        ...n
    } = e, {
        analyticsLocations: a
    } = (0, l.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(l.f5, {
        value: a,
        children: t ? (0, i.jsx)(A, {
            ...n,
            className: n.className
        }) : (0, i.jsx)(m, {
            ...n,
            className: n.className
        })
    })
}
E.Title = u.Ay.Title, E.Icon = u.Ay.Icon, E.ChannelIcon = u.Ay.ChannelIcon, E.Divider = u.Ay.Divider, E.Caret = u.Ay.Caret;
let p = E