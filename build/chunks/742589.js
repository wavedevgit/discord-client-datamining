/** chunk id: 742589 params = (module,exports,require) **/
n.d(e, {
    A: () => p,
    I: () => A
});
var i = n(627968);
n(64700);
var r = n(607399),
    l = n(793574),
    a = n(688810),
    s = n(966597),
    o = n(922281),
    c = n(907745),
    d = n(723702),
    u = n(837921),
    h = n(58736),
    C = n(746080),
    g = n(892513);
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
        guildId: a,
        innerClassname: d,
        transparent: u = !1,
        hidden: E = !1,
        toolbar: _,
        mobileToolbar: m,
        "aria-label": p,
        "aria-labelledby": L,
        scrollable: O,
        role: T,
        hideSearch: I,
        hideForLater: f,
        showDivider: R,
        disableDoubleClick: N
    } = t, {
        enabled: y,
        inInbox: M
    } = s.A.useConfig({
        location: "HeaderBar"
    });
    return (0, i.jsx)(h.Ay, {
        className: n,
        innerClassName: d,
        toolbar: function() {
            if (null == _) return null;
            let t = null != l && !I;
            return r.Fr ? m : (0, i.jsxs)(i.Fragment, {
                children: [_, t && !(0, C.jq)(l) ? (0, i.jsx)(c.Ay, {
                    guildId: a,
                    channelId: l,
                    className: g.$P
                }, a ?? l) : null, R && (0, i.jsx)(h.Ay.Divider, {}), f || !y || M ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: E,
        onDoubleClick: () => A(N),
        "aria-label": p,
        "aria-labelledby": L,
        role: T,
        scrollable: O,
        children: e
    })
}

function _(t) {
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
        onDoubleClick: () => A(s),
        "aria-label": r,
        "aria-labelledby": l,
        role: a,
        children: e
    })
}

function m(t) {
    let {
        isAuthenticated: e = !0,
        ...n
    } = t, {
        analyticsLocations: r
    } = (0, a.Ay)(l.A.HEADER_BAR);
    return (0, i.jsx)(a.f5, {
        value: r,
        children: e ? (0, i.jsx)(E, {
            ...n,
            className: n.className
        }) : (0, i.jsx)(_, {
            ...n,
            className: n.className
        })
    })
}
m.Title = h.Ay.Title, m.Icon = h.Ay.Icon, m.ChannelIcon = h.Ay.ChannelIcon, m.Divider = h.Ay.Divider, m.Caret = h.Ay.Caret;
let p = m