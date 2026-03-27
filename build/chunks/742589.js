/** chunk id: 742589 params = (module,exports,require) **/
n.d(e, {
    A: () => f,
    I: () => A
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
    _ = n(746080),
    C = n(374850);
async function A(t) {
    if (!t && (0, d.isMac)() && d.isPlatformEmbedded) {
        let t = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === t ? u.Ay.minimize() : "Maximize" === t && u.Ay.maximize()
    }
}

function E(t) {
    let {
        children: e,
        className: n,
        channelId: l,
        guildId: s,
        innerClassname: d,
        transparent: u = !1,
        hidden: E = !1,
        toolbar: T,
        mobileToolbar: g,
        "aria-label": f,
        "aria-labelledby": O,
        scrollable: p,
        role: L,
        hideSearch: I,
        hideForLater: S,
        disableDoubleClick: R
    } = t, {
        enabled: b,
        inInbox: N
    } = a.A.useConfig({
        location: "HeaderBar"
    });
    return (0, i.jsx)(h.Ay, {
        className: n,
        innerClassName: d,
        toolbar: function() {
            if (null == T) return null;
            let t = null != l && !I;
            return r.Fr ? g : (0, i.jsxs)(i.Fragment, {
                children: [T, t && !(0, _.jq)(l) ? (0, i.jsx)(c.Ay, {
                    guildId: s,
                    channelId: l,
                    className: C.$P
                }, s ?? l) : null, S || !b || N ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: E,
        onDoubleClick: () => A(R),
        "aria-label": f,
        "aria-labelledby": O,
        role: L,
        scrollable: p,
        children: e
    })
}

function T(t) {
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
        onDoubleClick: () => A(a),
        "aria-label": r,
        "aria-labelledby": l,
        role: s,
        children: e
    })
}

function g(t) {
    let {
        isAuthenticated: e = !0,
        ...n
    } = t, {
        analyticsLocations: r
    } = (0, s.Ay)(l.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: r,
        children: e ? (0, i.jsx)(E, {
            ...n,
            className: n.className
        }) : (0, i.jsx)(T, {
            ...n,
            className: n.className
        })
    })
}
g.Title = h.Ay.Title, g.Icon = h.Ay.Icon, g.ChannelIcon = h.Ay.ChannelIcon, g.Divider = h.Ay.Divider, g.Caret = h.Ay.Caret;
let f = g