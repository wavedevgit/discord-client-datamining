/** chunk id: 63675, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(33851),
    r = n.n(l),
    o = n(827734),
    c = n(397927),
    d = n(654107),
    u = n(950191),
    _ = n(101928),
    m = n(927578),
    A = n(911180),
    g = n(128450),
    h = n(985018),
    x = n(890069);

function p(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: s,
        onThemeColorsChange: l,
        preventDisabled: p,
        guildId: E,
        className: C,
        showPremiumIcon: T = !0,
        showResetThemeButton: S = !1,
        forcedDivider: I
    } = e, f = (0, u.Ay)(t.id, E), {
        primaryColor: N,
        secondaryColor: b
    } = (0, _.A)({
        user: t,
        displayProfile: f,
        pendingThemeColors: s,
        isPreview: !0
    }), j = m.Ay.canUsePremiumProfileCustomization(t), v = null != n ? n : t.getAvatarURL(E, 80), O = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), R = (0, d.rh)(v, O, !1);
    if (null == N || null == b) return null;
    let y = e => {
        l(r()(e, f?.themeColors) ? void 0 : e)
    };
    return (0, i.jsx)(g.A, {
        title: h.intl.string(h.t.DMeO2X),
        disabled: !j && !p,
        className: a()(x.__invalid_profileThemesSection, C),
        showPremiumIcon: T,
        forcedDivider: I,
        children: (0, i.jsxs)("div", {
            className: x.hd,
            children: [(0, i.jsx)("div", {
                className: x.YX,
                children: (0, i.jsx)(A.A, {
                    onChange: e => y([e, b]),
                    color: N,
                    suggestedColors: R,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(c.Text, {
                        className: x.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: h.intl.string(h.t.C3KTQk)
                    })
                })
            }), (0, i.jsx)("div", {
                className: x.YX,
                children: (0, i.jsx)(A.A, {
                    onChange: e => y([N, e]),
                    color: b,
                    suggestedColors: R,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(c.Text, {
                        className: x.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: h.intl.string(h.t["8elvy6"])
                    })
                })
            }), S && null != E && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: x.WA,
                children: (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: h.intl.string(h.t["L+GmoR"]),
                    onClick: () => y([null, null])
                })
            })]
        })
    })
}