/** chunk id: 742589 params = (module,exports,require) **/
a.d(t, {
    A: () => I,
    I: () => u
});
var s = a(627968);
a(64700);
var n = a(607399),
    i = a(793574),
    l = a(688810),
    r = a(907745),
    c = a(723702),
    o = a(837921),
    d = a(58736),
    _ = a(746080),
    h = a(374850);
async function u(e) {
    if (!e && (0, c.isMac)() && c.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? o.Ay.minimize() : "Maximize" === e && o.Ay.maximize()
    }
}

function A(e) {
    let {
        children: t,
        className: a,
        channelId: i,
        guildId: l,
        innerClassname: c,
        transparent: o = !1,
        hidden: A = !1,
        toolbar: m,
        mobileToolbar: p,
        "aria-label": I,
        "aria-labelledby": b,
        scrollable: E,
        role: N,
        hideSearch: x,
        disableDoubleClick: L
    } = e;
    return (0, s.jsx)(d.Ay, {
        className: a,
        innerClassName: c,
        toolbar: function() {
            if (null == m) return null;
            let e = null != i && !x;
            return n.Fr ? p : (0, s.jsxs)(s.Fragment, {
                children: [m, e && !(0, _.jq)(i) ? (0, s.jsx)(r.Ay, {
                    guildId: l,
                    channelId: i,
                    className: h.$P
                }, l ?? i) : null]
            })
        }(),
        transparent: o,
        hidden: A,
        onDoubleClick: () => u(L),
        "aria-label": I,
        "aria-labelledby": b,
        role: N,
        scrollable: E,
        children: t
    })
}

function m(e) {
    let {
        children: t,
        className: a,
        "aria-label": n,
        "aria-labelledby": i,
        role: l,
        disableDoubleClick: r
    } = e;
    return (0, s.jsx)(d.Ay, {
        className: a,
        onDoubleClick: () => u(r),
        "aria-label": n,
        "aria-labelledby": i,
        role: l,
        children: t
    })
}

function p(e) {
    let {
        isAuthenticated: t = !0,
        ...a
    } = e, {
        analyticsLocations: n
    } = (0, l.Ay)(i.A.HEADER_BAR);
    return (0, s.jsx)(l.f5, {
        value: n,
        children: t ? (0, s.jsx)(A, {
            ...a,
            className: a.className
        }) : (0, s.jsx)(m, {
            ...a,
            className: a.className
        })
    })
}
p.Title = d.Ay.Title, p.Icon = d.Ay.Icon, p.ChannelIcon = d.Ay.ChannelIcon, p.Divider = d.Ay.Divider, p.Caret = d.Ay.Caret;
let I = p