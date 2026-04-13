/** chunk id: 742589 params = (module,exports,require) **/
a.d(t, {
    A: () => p,
    I: () => u
});
var n = a(627968);
a(64700);
var i = a(607399),
    s = a(793574),
    r = a(688810),
    l = a(907745),
    d = a(723702),
    _ = a(837921),
    o = a(58736),
    c = a(746080),
    h = a(374850);
async function u(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? _.Ay.minimize() : "Maximize" === e && _.Ay.maximize()
    }
}

function m(e) {
    let {
        children: t,
        className: a,
        channelId: s,
        guildId: r,
        innerClassname: d,
        transparent: _ = !1,
        hidden: m = !1,
        toolbar: A,
        mobileToolbar: b,
        "aria-label": p,
        "aria-labelledby": I,
        scrollable: E,
        role: g,
        hideSearch: N,
        disableDoubleClick: x
    } = e;
    return (0, n.jsx)(o.Ay, {
        className: a,
        innerClassName: d,
        toolbar: function() {
            if (null == A) return null;
            let e = null != s && !N;
            return i.Fr ? b : (0, n.jsxs)(n.Fragment, {
                children: [A, e && !(0, c.jq)(s) ? (0, n.jsx)(l.Ay, {
                    guildId: r,
                    channelId: s,
                    className: h.$P
                }, r ?? s) : null]
            })
        }(),
        transparent: _,
        hidden: m,
        onDoubleClick: () => u(x),
        "aria-label": p,
        "aria-labelledby": I,
        role: g,
        scrollable: E,
        children: t
    })
}

function A(e) {
    let {
        children: t,
        className: a,
        "aria-label": i,
        "aria-labelledby": s,
        role: r,
        disableDoubleClick: l
    } = e;
    return (0, n.jsx)(o.Ay, {
        className: a,
        onDoubleClick: () => u(l),
        "aria-label": i,
        "aria-labelledby": s,
        role: r,
        children: t
    })
}

function b(e) {
    let {
        isAuthenticated: t = !0,
        ...a
    } = e, {
        analyticsLocations: i
    } = (0, r.Ay)(s.A.HEADER_BAR);
    return (0, n.jsx)(r.f5, {
        value: i,
        children: t ? (0, n.jsx)(m, {
            ...a,
            className: a.className
        }) : (0, n.jsx)(A, {
            ...a,
            className: a.className
        })
    })
}
b.Title = o.Ay.Title, b.Icon = o.Ay.Icon, b.ChannelIcon = o.Ay.ChannelIcon, b.Divider = o.Ay.Divider, b.Caret = o.Ay.Caret;
let p = b