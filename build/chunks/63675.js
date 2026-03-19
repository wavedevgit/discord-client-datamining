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
    x = n(985018),
    h = n(114403);

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
    } = e, N = (0, u.Ay)(t.id, T), {
        primaryColor: I,
        secondaryColor: b
    } = (0, _.A)({
        user: t,
        displayProfile: N,
        pendingThemeColors: s,
        isPreview: !0
    }), v = m.Ay.canUsePremiumProfileCustomization(t), j = null != n ? n : t.getAvatarURL(T, 80), y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), O = (0, c.rh)(j, y, !1);
    if (null == I || null == b) return null;
    let R = e => {
        a(r()(e, N?.themeColors) ? void 0 : e)
    };
    return (0, i.jsx)(A.A, {
        title: x.intl.string(x.t.DMeO2X),
        disabled: !v && !p,
        className: l()(h.__invalid_profileThemesSection, E),
        showPremiumIcon: S,
        forcedDivider: f,
        children: (0, i.jsxs)("div", {
            className: h.hd,
            children: [(0, i.jsx)("div", {
                className: h.YX,
                children: (0, i.jsx)(g.A, {
                    onChange: e => R([e, b]),
                    color: I,
                    suggestedColors: O,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: h.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: x.intl.string(x.t.C3KTQk)
                    })
                })
            }), (0, i.jsx)("div", {
                className: h.YX,
                children: (0, i.jsx)(g.A, {
                    onChange: e => R([I, e]),
                    color: b,
                    suggestedColors: O,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: h.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: x.intl.string(x.t["8elvy6"])
                    })
                })
            }), C && null != T && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: h.WA,
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