/** chunk id: 742589, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m,
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
    C = n(746080),
    E = n(892513);
async function A(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.remoteApp.getDefaultDoubleClickAction?.() ?? "Maximize";
        "Minimize" === e ? u.Ay.minimize() : "Maximize" === e && u.Ay.maximize()
    }
}

function _(e) {
    let {
        children: t,
        className: n,
        channelId: l,
        guildId: s,
        innerClassname: d,
        transparent: u = !1,
        hidden: _ = !1,
        toolbar: g,
        mobileToolbar: p,
        "aria-label": m,
        "aria-labelledby": L,
        scrollable: O,
        role: f,
        hideSearch: T,
        hideForLater: I,
        showDivider: R,
        disableDoubleClick: v
    } = e, {
        enabled: N,
        inInbox: S
    } = a.A.useExperiment({
        location: "HeaderBar"
    });
    return (0, i.jsx)(h.Ay, {
        className: n,
        innerClassName: d,
        toolbar: function() {
            if (null == g) return null;
            let e = null != l && !T;
            return r.Fr ? p : (0, i.jsxs)(i.Fragment, {
                children: [g, e && !(0, C.jq)(l) ? (0, i.jsx)(c.Ay, {
                    guildId: s,
                    channelId: l,
                    className: E.$P
                }, s ?? l) : null, R && (0, i.jsx)(h.Ay.Divider, {}), I || !N || S ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: _,
        onDoubleClick: () => A(v),
        "aria-label": m,
        "aria-labelledby": L,
        role: f,
        scrollable: O,
        children: t
    })
}

function g(e) {
    let {
        children: t,
        className: n,
        "aria-label": r,
        "aria-labelledby": l,
        role: s,
        disableDoubleClick: a
    } = e;
    return (0, i.jsx)(h.Ay, {
        className: n,
        onDoubleClick: () => A(a),
        "aria-label": r,
        "aria-labelledby": l,
        role: s,
        children: t
    })
}

function p(e) {
    let {
        isAuthenticated: t = !0,
        ...n
    } = e, {
        analyticsLocations: r
    } = (0, s.Ay)(l.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: r,
        children: t ? (0, i.jsx)(_, {
            ...n,
            className: n.className
        }) : (0, i.jsx)(g, {
            ...n,
            className: n.className
        })
    })
}
p.Title = h.Ay.Title, p.Icon = h.Ay.Icon, p.ChannelIcon = h.Ay.ChannelIcon, p.Divider = h.Ay.Divider, p.Caret = h.Ay.Caret;
let m = p