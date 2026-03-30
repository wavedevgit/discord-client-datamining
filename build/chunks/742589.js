/** chunk id: 742589 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    I: () => A
});
var i = n(627968);
n(64700);
var l = n(607399),
    r = n(793574),
    s = n(688810),
    a = n(966597),
    o = n(922281),
    c = n(907745),
    d = n(723702),
    u = n(837921),
    _ = n(58736),
    E = n(746080),
    T = n(374850);
async function A(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? u.Ay.minimize() : "Maximize" === e && u.Ay.maximize()
    }
}

function I(e) {
    let {
        children: t,
        className: n,
        channelId: r,
        guildId: s,
        innerClassname: d,
        transparent: u = !1,
        hidden: I = !1,
        toolbar: p,
        mobileToolbar: N,
        "aria-label": m,
        "aria-labelledby": R,
        scrollable: h,
        role: S,
        hideSearch: g,
        hideForLater: C,
        disableDoubleClick: O
    } = e, {
        enabled: y,
        inInbox: x
    } = a.A.useConfig({
        location: "HeaderBar"
    });
    return (0, i.jsx)(_.Ay, {
        className: n,
        innerClassName: d,
        toolbar: function() {
            if (null == p) return null;
            let e = null != r && !g;
            return l.Fr ? N : (0, i.jsxs)(i.Fragment, {
                children: [p, e && !(0, E.jq)(r) ? (0, i.jsx)(c.Ay, {
                    guildId: s,
                    channelId: r,
                    className: T.$P
                }, s ?? r) : null, C || !y || x ? null : (0, i.jsx)(o.A, {})]
            })
        }(),
        transparent: u,
        hidden: I,
        onDoubleClick: () => A(O),
        "aria-label": m,
        "aria-labelledby": R,
        role: S,
        scrollable: h,
        children: t
    })
}

function p(e) {
    let {
        children: t,
        className: n,
        "aria-label": l,
        "aria-labelledby": r,
        role: s,
        disableDoubleClick: a
    } = e;
    return (0, i.jsx)(_.Ay, {
        className: n,
        onDoubleClick: () => A(a),
        "aria-label": l,
        "aria-labelledby": r,
        role: s,
        children: t
    })
}

function N(e) {
    let {
        isAuthenticated: t = !0,
        ...n
    } = e, {
        analyticsLocations: l
    } = (0, s.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: l,
        children: t ? (0, i.jsx)(I, {
            ...n,
            className: n.className
        }) : (0, i.jsx)(p, {
            ...n,
            className: n.className
        })
    })
}
N.Title = _.Ay.Title, N.Icon = _.Ay.Icon, N.ChannelIcon = _.Ay.ChannelIcon, N.Divider = _.Ay.Divider, N.Caret = _.Ay.Caret;
let m = N