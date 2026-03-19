/** chunk id: 742589 params = (module,exports,require) **/
n.d(e, {
    A: () => I,
    I: () => C
});
var i = n(627968);
n(64700);
var r = n(607399),
    l = n(793574),
    s = n(688810),
    a = n(966597),
    o = n(922281),
    c = n(907745),
    d = n(723702),
    u = n(837921),
    h = n(58736),
    A = n(746080),
    _ = n(512147);
async function C(t) {
    if (!t && (0, d.isMac)() && d.isPlatformEmbedded) {
        let t = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === t ? u.Ay.minimize() : "Maximize" === t && u.Ay.maximize()
    }
}

function g(t) {
    let {
        children: e,
        className: n,
        channelId: l,
        guildId: s,
        innerClassname: d,
        transparent: u = !1,
        hidden: g = !1,
        toolbar: E,
        mobileToolbar: T,
        "aria-label": I,
        "aria-labelledby": L,
        scrollable: O,
        role: S,
        hideSearch: m,
        hideForLater: p,
        showDivider: f,
        disableDoubleClick: R
    } = t, {
        enabled: N,
        inInbox: b
    } = a.A.useConfig({
        location: "HeaderBar"
    });
    return (0, i.jsx)(h.Ay, {
        className: n,
        innerClassName: d,
        toolbar: function() {
            if (null == E) return null;
            let t = null != l && !m;
            return r.Fr ? T : (0, i.jsxs)(i.Fragment, {
                children: [E, t && !(0, A.jq)(l) ? (0, i.jsx)(c.Ay, {
                    guildId: s,
                    channelId: l,
                    className: _.$P
                }, s ?? l) : null, f && (0, i.jsx)(h.Ay.Divider, {}), p || !N || b ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: g,
        onDoubleClick: () => C(R),
        "aria-label": I,
        "aria-labelledby": L,
        role: S,
        scrollable: O,
        children: e
    })
}

function E(t) {
    let {
        children: e,
        className: n,
        "aria-label": r,
        "aria-labelledby": l,
        role: s,
        disableDoubleClick: a
    } = t;
    return (0, i.jsx)(h.Ay, {
        className: n,
        onDoubleClick: () => C(a),
        "aria-label": r,
        "aria-labelledby": l,
        role: s,
        children: e
    })
}

function T(t) {
    let {
        isAuthenticated: e = !0,
        ...n
    } = t, {
        analyticsLocations: r
    } = (0, s.Ay)(l.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: r,
        children: e ? (0, i.jsx)(g, {
            ...n,
            className: n.className
        }) : (0, i.jsx)(E, {
            ...n,
            className: n.className
        })
    })
}
T.Title = h.Ay.Title, T.Icon = h.Ay.Icon, T.ChannelIcon = h.Ay.ChannelIcon, T.Divider = h.Ay.Divider, T.Caret = h.Ay.Caret;
let I = T