/** chunk id: 742589 params = (module,exports,require) **/
n.d(e, {
    A: () => I,
    I: () => C
});
var i = n(627968);
n(64700);
var r = n(607399),
    l = n(793574),
    a = n(688810),
    s = n(966597),
    o = n(922281),
    d = n(907745),
    c = n(723702),
    u = n(837921),
    h = n(58736),
    _ = n(746080),
    A = n(892513);
async function C(t) {
    if (!t && (0, c.isMac)() && c.isPlatformEmbedded) {
        let t = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === t ? u.Ay.minimize() : "Maximize" === t && u.Ay.maximize()
    }
}

function g(t) {
    let {
        children: e,
        className: n,
        channelId: l,
        guildId: a,
        innerClassname: c,
        transparent: u = !1,
        hidden: g = !1,
        toolbar: E,
        mobileToolbar: T,
        "aria-label": I,
        "aria-labelledby": O,
        scrollable: f,
        role: L,
        hideSearch: p,
        hideForLater: S,
        disableDoubleClick: b
    } = t, {
        enabled: R,
        inInbox: m
    } = s.A.useConfig({
        location: "HeaderBar"
    });
    return (0, i.jsx)(h.Ay, {
        className: n,
        innerClassName: c,
        toolbar: function() {
            if (null == E) return null;
            let t = null != l && !p;
            return r.Fr ? T : (0, i.jsxs)(i.Fragment, {
                children: [E, t && !(0, _.jq)(l) ? (0, i.jsx)(d.Ay, {
                    guildId: a,
                    channelId: l,
                    className: A.$P
                }, a ?? l) : null, S || !R || m ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: g,
        onDoubleClick: () => C(b),
        "aria-label": I,
        "aria-labelledby": O,
        role: L,
        scrollable: f,
        children: e
    })
}

function E(t) {
    let {
        children: e,
        className: n,
        "aria-label": r,
        "aria-labelledby": l,
        role: a,
        disableDoubleClick: s
    } = t;
    return (0, i.jsx)(h.Ay, {
        className: n,
        onDoubleClick: () => C(s),
        "aria-label": r,
        "aria-labelledby": l,
        role: a,
        children: e
    })
}

function T(t) {
    let {
        isAuthenticated: e = !0,
        ...n
    } = t, {
        analyticsLocations: r
    } = (0, a.Ay)(l.A.HEADER_BAR);
    return (0, i.jsx)(a.f5, {
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