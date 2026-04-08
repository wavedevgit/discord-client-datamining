/** chunk id: 742589 params = (module,exports,require) **/
n.d(e, {
    A: () => g,
    I: () => C
});
var i = n(627968);
n(64700);
var r = n(607399),
    s = n(793574),
    l = n(688810),
    a = n(907745),
    o = n(723702),
    c = n(837921),
    d = n(58736),
    h = n(746080),
    u = n(374850);
async function C(t) {
    if (!t && (0, o.isMac)() && o.isPlatformEmbedded) {
        let t = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === t ? c.Ay.minimize() : "Maximize" === t && c.Ay.maximize()
    }
}

function _(t) {
    let {
        children: e,
        className: n,
        channelId: s,
        guildId: l,
        innerClassname: o,
        transparent: c = !1,
        hidden: _ = !1,
        toolbar: A,
        mobileToolbar: E,
        "aria-label": g,
        "aria-labelledby": T,
        scrollable: L,
        role: O,
        hideSearch: S,
        disableDoubleClick: p
    } = t;
    return (0, i.jsx)(d.Ay, {
        className: n,
        innerClassName: o,
        toolbar: function() {
            if (null == A) return null;
            let t = null != s && !S;
            return r.Fr ? E : (0, i.jsxs)(i.Fragment, {
                children: [A, t && !(0, h.jq)(s) ? (0, i.jsx)(a.Ay, {
                    guildId: l,
                    channelId: s,
                    className: u.$P
                }, l ?? s) : null]
            })
        }(),
        transparent: c,
        hidden: _,
        onDoubleClick: () => C(p),
        "aria-label": g,
        "aria-labelledby": T,
        role: O,
        scrollable: L,
        children: e
    })
}

function A(t) {
    let {
        children: e,
        className: n,
        "aria-label": r,
        "aria-labelledby": s,
        role: l,
        disableDoubleClick: a
    } = t;
    return (0, i.jsx)(d.Ay, {
        className: n,
        onDoubleClick: () => C(a),
        "aria-label": r,
        "aria-labelledby": s,
        role: l,
        children: e
    })
}

function E(t) {
    let {
        isAuthenticated: e = !0,
        ...n
    } = t, {
        analyticsLocations: r
    } = (0, l.Ay)(s.A.HEADER_BAR);
    return (0, i.jsx)(l.f5, {
        value: r,
        children: e ? (0, i.jsx)(_, {
            ...n,
            className: n.className
        }) : (0, i.jsx)(A, {
            ...n,
            className: n.className
        })
    })
}
E.Title = d.Ay.Title, E.Icon = d.Ay.Icon, E.ChannelIcon = d.Ay.ChannelIcon, E.Divider = d.Ay.Divider, E.Caret = d.Ay.Caret;
let g = E