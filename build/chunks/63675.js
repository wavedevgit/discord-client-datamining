/** chunk id: 63675 params = (module,exports,require) **/
n.d(t, {
    A: () => p
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
    _ = n(101928),
    m = n(927578),
    g = n(911180),
    A = n(128450),
    h = n(985018),
    x = n(114403);

function p(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: s,
        onThemeColorsChange: a,
        preventDisabled: p,
        guildId: T,
        className: E,
        showPremiumIcon: S = !0,
        showResetThemeButton: C = !1,
        forcedDivider: f
    } = e, b = (0, u.Ay)(t.id, T), {
        primaryColor: N,
        secondaryColor: I
    } = (0, _.A)({
        user: t,
        displayProfile: b,
        pendingThemeColors: s,
        isPreview: !0
    }), v = m.Ay.canUsePremiumProfileCustomization(t), j = null != n ? n : t.getAvatarURL(T, 80), y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), R = (0, c.rh)(j, y, !1);
    if (null == N || null == I) return null;
    let O = e => {
        a(r()(e, b?.themeColors) ? void 0 : e)
    };
    return (0, i.jsx)(A.A, {
        title: h.intl.string(h.t.DMeO2X),
        disabled: !v && !p,
        className: l()(x.__invalid_profileThemesSection, E),
        showPremiumIcon: S,
        forcedDivider: f,
        children: (0, i.jsxs)("div", {
            className: x.hd,
            children: [(0, i.jsx)("div", {
                className: x.YX,
                children: (0, i.jsx)(g.A, {
                    onChange: e => O([e, I]),
                    color: N,
                    suggestedColors: R,
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
                    onChange: e => O([N, e]),
                    color: I,
                    suggestedColors: R,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: x.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: h.intl.string(h.t["8elvy6"])
                    })
                })
            }), C && null != T && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: x.WA,
                children: (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: h.intl.string(h.t["L+GmoR"]),
                    onClick: () => O([null, null])
                })
            })]
        })
    })
}