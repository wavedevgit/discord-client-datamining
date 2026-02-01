/** chunk id: 63675, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(33851),
    a = n.n(s),
    o = n(827734),
    c = n(397927),
    d = n(654107),
    u = n(950191),
    _ = n(101928),
    p = n(927578),
    m = n(911180),
    g = n(128450),
    A = n(985018),
    f = n(114403);

function b(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: i,
        onThemeColorsChange: s,
        preventDisabled: b,
        guildId: h,
        className: E,
        showPremiumIcon: O = !0,
        showResetThemeButton: x = !1,
        forcedDivider: C
    } = e, S = (0, u.Ay)(t.id, h), {
        primaryColor: T,
        secondaryColor: I
    } = (0, _.A)({
        user: t,
        displayProfile: S,
        pendingThemeColors: i,
        isPreview: !0
    }), N = p.Ay.canUsePremiumProfileCustomization(t), y = null != n ? n : t.getAvatarURL(h, 80), j = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), v = (0, d.rh)(y, j, !1);
    if (null == T || null == I) return null;
    let P = e => {
        s(a()(e, null == S ? void 0 : S.themeColors) ? void 0 : e)
    };
    return (0, r.jsx)(g.A, {
        title: A.intl.string(A.t.DMeO2X),
        disabled: !N && !b,
        className: l()(f.__invalid_profileThemesSection, E),
        showPremiumIcon: O,
        forcedDivider: C,
        children: (0, r.jsxs)("div", {
            className: f.hd,
            children: [(0, r.jsx)("div", {
                className: f.YX,
                children: (0, r.jsx)(m.A, {
                    onChange: e => P([e, I]),
                    color: T,
                    suggestedColors: v,
                    showEyeDropper: !0,
                    label: (0, r.jsx)(c.Text, {
                        className: f.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: A.intl.string(A.t.C3KTQk)
                    })
                })
            }), (0, r.jsx)("div", {
                className: f.YX,
                children: (0, r.jsx)(m.A, {
                    onChange: e => P([T, e]),
                    color: I,
                    suggestedColors: v,
                    showEyeDropper: !0,
                    label: (0, r.jsx)(c.Text, {
                        className: f.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: A.intl.string(A.t["8elvy6"])
                    })
                })
            }), x && null != h && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: f.WA,
                children: (0, r.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: A.intl.string(A.t["L+GmoR"]),
                    onClick: () => P([null, null])
                })
            })]
        })
    })
}