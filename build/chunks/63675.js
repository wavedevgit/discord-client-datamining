/** chunk id: 63675 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(33851),
    a = n.n(r),
    o = n(827734),
    d = n(397927),
    c = n(654107),
    u = n(950191),
    _ = n(101928),
    m = n(927578),
    g = n(911180),
    A = n(128450),
    h = n(985018),
    x = n(890069);

function p(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: s,
        onThemeColorsChange: r,
        preventDisabled: p,
        guildId: T,
        className: E,
        showPremiumIcon: C = !0,
        showResetThemeButton: S = !1,
        forcedDivider: f
    } = e, N = (0, u.Ay)(t.id, T), {
        primaryColor: b,
        secondaryColor: I
    } = (0, _.A)({
        user: t,
        displayProfile: N,
        pendingThemeColors: s,
        isPreview: !0
    }), v = m.Ay.canUsePremiumProfileCustomization(t), j = null != n ? n : t.getAvatarURL(T, 80), O = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), y = (0, c.rh)(j, O, !1);
    if (null == b || null == I) return null;
    let R = e => {
        r(a()(e, N?.themeColors) ? void 0 : e)
    };
    return (0, i.jsx)(A.A, {
        title: h.intl.string(h.t.DMeO2X),
        disabled: !v && !p,
        className: l()(x.__invalid_profileThemesSection, E),
        showPremiumIcon: C,
        forcedDivider: f,
        children: (0, i.jsxs)("div", {
            className: x.hd,
            children: [(0, i.jsx)("div", {
                className: x.YX,
                children: (0, i.jsx)(g.A, {
                    onChange: e => R([e, I]),
                    color: b,
                    suggestedColors: y,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: x.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: h.intl.string(h.t.C3KTQk)
                    })
                })
            }), (0, i.jsx)("div", {
                className: x.YX,
                children: (0, i.jsx)(g.A, {
                    onChange: e => R([b, e]),
                    color: I,
                    suggestedColors: y,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: x.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: h.intl.string(h.t["8elvy6"])
                    })
                })
            }), S && null != T && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: x.WA,
                children: (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: h.intl.string(h.t["L+GmoR"]),
                    onClick: () => R([null, null])
                })
            })]
        })
    })
}