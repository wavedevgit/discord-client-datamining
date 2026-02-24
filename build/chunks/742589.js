/** chunk id: 742589, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => m,
    I: () => A
});
var n = i(627968);
i(64700);
var r = i(607399),
    l = i(793574),
    a = i(688810),
    s = i(966597),
    o = i(922281),
    c = i(907745),
    d = i(723702),
    u = i(837921),
    h = i(58736),
    C = i(746080),
    E = i(892513);
async function A(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.remoteApp.getDefaultDoubleClickAction?.() ?? "Maximize";
        "Minimize" === e ? u.Ay.minimize() : "Maximize" === e && u.Ay.maximize()
    }
}

function g(e) {
    let {
        children: t,
        className: i,
        channelId: l,
        guildId: a,
        innerClassname: d,
        transparent: u = !1,
        hidden: g = !1,
        toolbar: _,
        mobileToolbar: p,
        "aria-label": m,
        "aria-labelledby": L,
        scrollable: O,
        role: f,
        hideSearch: I,
        showDivider: T,
        disableDoubleClick: S
    } = e, {
        enabled: R,
        inInbox: v
    } = s.A.useExperiment({
        location: "HeaderBar"
    });
    return (0, n.jsx)(h.Ay, {
        className: i,
        innerClassName: d,
        toolbar: function() {
            if (null == _) return null;
            let e = null != l && !I;
            return r.Fr ? p : (0, n.jsxs)(n.Fragment, {
                children: [_, e && !(0, C.jq)(l) ? (0, n.jsx)(c.Ay, {
                    guildId: a,
                    channelId: l,
                    className: E.$P
                }, a ?? l) : null, T && (0, n.jsx)(h.Ay.Divider, {}), R && !v ? (0, n.jsx)(o.A, {}) : null]
            })
        }(),
        transparent: u,
        hidden: g,
        onDoubleClick: () => A(S),
        "aria-label": m,
        "aria-labelledby": L,
        role: f,
        scrollable: O,
        children: t
    })
}

function _(e) {
    let {
        children: t,
        className: i,
        "aria-label": r,
        "aria-labelledby": l,
        role: a,
        disableDoubleClick: s
    } = e;
    return (0, n.jsx)(h.Ay, {
        className: i,
        onDoubleClick: () => A(s),
        "aria-label": r,
        "aria-labelledby": l,
        role: a,
        children: t
    })
}

function p(e) {
    let {
        isAuthenticated: t = !0,
        ...i
    } = e, {
        analyticsLocations: r
    } = (0, a.Ay)(l.A.HEADER_BAR);
    return (0, n.jsx)(a.f5, {
        value: r,
        children: t ? (0, n.jsx)(g, {
            ...i,
            className: i.className
        }) : (0, n.jsx)(_, {
            ...i,
            className: i.className
        })
    })
}
p.Title = h.Ay.Title, p.Icon = h.Ay.Icon, p.ChannelIcon = h.Ay.ChannelIcon, p.Divider = h.Ay.Divider, p.Caret = h.Ay.Caret;
let m = p