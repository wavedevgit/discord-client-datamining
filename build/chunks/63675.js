/** chunk id: 63675 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(33851),
    r = n.n(a),
    o = n(827734),
    d = n(397927),
    c = n(654107),
    u = n(950191),
    m = n(101928),
    _ = n(927578),
    g = n(911180),
    A = n(128450),
    x = n(985018),
    p = n(114403);

function h(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: s,
        onThemeColorsChange: a,
        preventDisabled: h,
        guildId: f,
        className: T,
        showPremiumIcon: E = !0,
        showResetThemeButton: S = !1,
        forcedDivider: b
    } = e, C = (0, u.Ay)(t.id, f), {
        primaryColor: N,
        secondaryColor: v
    } = (0, m.A)({
        user: t,
        displayProfile: C,
        pendingThemeColors: s,
        isPreview: !0
    }), I = _.Ay.canUsePremiumProfileCustomization(t), j = null != n ? n : t.getAvatarURL(f, 80), y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), O = (0, c.rh)(j, y, !1);
    if (null == N || null == v) return null;
    let R = e => {
        a(r()(e, C?.themeColors) ? void 0 : e)
    };
    return (0, i.jsx)(A.A, {
        title: x.intl.string(x.t.DMeO2X),
        disabled: !I && !h,
        className: l()(p.__invalid_profileThemesSection, T),
        showPremiumIcon: E,
        forcedDivider: b,
        children: (0, i.jsxs)("div", {
            className: p.hd,
            children: [(0, i.jsx)("div", {
                className: p.YX,
                children: (0, i.jsx)(g.A, {
                    onChange: e => R([e, v]),
                    color: N,
                    suggestedColors: O,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: p.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: x.intl.string(x.t.C3KTQk)
                    })
                })
            }), (0, i.jsx)("div", {
                className: p.YX,
                children: (0, i.jsx)(g.A, {
                    onChange: e => R([N, e]),
                    color: v,
                    suggestedColors: O,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: p.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: x.intl.string(x.t["8elvy6"])
                    })
                })
            }), S && null != f && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.WA,
                children: (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: x.intl.string(x.t["L+GmoR"]),
                    onClick: () => R([null, null])
                })
            })]
        })
    })
}