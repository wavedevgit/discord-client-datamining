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
    u = n(837921),
    _ = n(58736),
    h = n(746080),
    C = n(512147);
async function g(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? u.Ay.minimize() : "Maximize" === e && u.Ay.maximize()
    }
}

function A(e) {
    let {
        children: t,
        className: n,
        channelId: r,
        guildId: l,
        innerClassname: d,
        transparent: u = !1,
        hidden: A = !1,
        toolbar: m,
        mobileToolbar: E,
        "aria-label": p,
        "aria-labelledby": b,
        scrollable: T,
        role: I,
        hideSearch: L,
        hideForLater: O,
        showDivider: f,
        disableDoubleClick: y
    } = e, {
        enabled: N,
        inInbox: M
    } = s.A.useExperiment({
        location: "HeaderBar"
    });
    return (0, i.jsx)(_.Ay, {
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
                }, l ?? r) : null, f && (0, i.jsx)(_.Ay.Divider, {}), O || !N || M ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: A,
        onDoubleClick: () => g(y),
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
    return (0, i.jsx)(_.Ay, {
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
E.Title = _.Ay.Title, E.Icon = _.Ay.Icon, E.ChannelIcon = _.Ay.ChannelIcon, E.Divider = _.Ay.Divider, E.Caret = _.Ay.Caret;
let p = E