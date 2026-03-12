/** chunk id: 742589 params = (module,exports,require) **/
i.d(e, {
    A: () => p,
    I: () => A
});
var n = i(627968);
i(64700);
var r = i(607399),
    l = i(793574),
    s = i(688810),
    a = i(966597),
    o = i(922281),
    c = i(907745),
    d = i(723702),
    u = i(837921),
    h = i(58736),
    C = i(746080),
    g = i(512147);
async function A(t) {
    if (!t && (0, d.isMac)() && d.isPlatformEmbedded) {
        let t = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === t ? u.Ay.minimize() : "Maximize" === t && u.Ay.maximize()
    }
}

function E(t) {
    let {
        children: e,
        className: i,
        channelId: l,
        guildId: s,
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
    } = a.A.useConfig({
        location: "HeaderBar"
    });
    return (0, n.jsx)(h.Ay, {
        className: i,
        innerClassName: d,
        toolbar: function() {
            if (null == _) return null;
            let t = null != l && !I;
            return r.Fr ? m : (0, n.jsxs)(n.Fragment, {
                children: [_, t && !(0, C.jq)(l) ? (0, n.jsx)(c.Ay, {
                    guildId: s,
                    channelId: l,
                    className: g.$P
                }, s ?? l) : null, R && (0, n.jsx)(h.Ay.Divider, {}), f || !y || M ? null : (0, n.jsx)(o.A, {})]
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
        className: i,
        "aria-label": r,
        "aria-labelledby": l,
        role: s,
        disableDoubleClick: a
    } = t;
    return (0, n.jsx)(h.Ay, {
        className: i,
        onDoubleClick: () => A(a),
        "aria-label": r,
        "aria-labelledby": l,
        role: s,
        children: e
    })
}

function m(t) {
    let {
        isAuthenticated: e = !0,
        ...i
    } = t, {
        analyticsLocations: r
    } = (0, s.Ay)(l.A.HEADER_BAR);
    return (0, n.jsx)(s.f5, {
        value: r,
        children: e ? (0, n.jsx)(E, {
            ...i,
            className: i.className
        }) : (0, n.jsx)(_, {
            ...i,
            className: i.className
        })
    })
}
m.Title = h.Ay.Title, m.Icon = h.Ay.Icon, m.ChannelIcon = h.Ay.ChannelIcon, m.Divider = h.Ay.Divider, m.Caret = h.Ay.Caret;
let p = m