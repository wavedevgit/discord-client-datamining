/** chunk id: 742589, original params: e,t,n (module,exports,require) **/
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
    C = n(892513);
async function g(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.remoteApp.getDefaultDoubleClickAction?.() ?? "Maximize";
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
        toolbar: E,
        mobileToolbar: m,
        "aria-label": p,
        "aria-labelledby": I,
        scrollable: T,
        role: b,
        hideSearch: L,
        hideForLater: f,
        showDivider: O,
        disableDoubleClick: R
    } = e, {
        enabled: N,
        inInbox: v
    } = s.A.useExperiment({
        location: "HeaderBar"
    });
    return (0, i.jsx)(_.Ay, {
        className: n,
        innerClassName: d,
        toolbar: function() {
            if (null == E) return null;
            let e = null != r && !L;
            return a.Fr ? m : (0, i.jsxs)(i.Fragment, {
                children: [E, e && !(0, h.jq)(r) ? (0, i.jsx)(c.Ay, {
                    guildId: l,
                    channelId: r,
                    className: C.$P
                }, l ?? r) : null, O && (0, i.jsx)(_.Ay.Divider, {}), f || !N || v ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: A,
        onDoubleClick: () => g(R),
        "aria-label": p,
        "aria-labelledby": I,
        role: b,
        scrollable: T,
        children: t
    })
}

function E(e) {
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

function m(e) {
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
        }) : (0, i.jsx)(E, {
            ...n,
            className: n.className
        })
    })
}
m.Title = _.Ay.Title, m.Icon = _.Ay.Icon, m.ChannelIcon = _.Ay.ChannelIcon, m.Divider = _.Ay.Divider, m.Caret = _.Ay.Caret;
let p = m