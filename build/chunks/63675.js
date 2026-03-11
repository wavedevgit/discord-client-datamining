/** chunk id: 63675 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    g = n(927578),
    A = n(911180),
    m = n(128450),
    h = n(985018),
    p = n(114403);

function x(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: s,
        onThemeColorsChange: a,
        preventDisabled: x,
        guildId: E,
        className: T,
        showPremiumIcon: S = !0,
        showResetThemeButton: C = !1,
        forcedDivider: I
    } = e, f = (0, u.Ay)(t.id, E), {
        primaryColor: N,
        secondaryColor: b
    } = (0, _.A)({
        user: t,
        displayProfile: f,
        pendingThemeColors: s,
        isPreview: !0
    }), v = g.Ay.canUsePremiumProfileCustomization(t), O = null != n ? n : t.getAvatarURL(E, 80), j = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), R = (0, c.rh)(O, j, !1);
    if (null == N || null == b) return null;
    let y = e => {
        a(r()(e, f?.themeColors) ? void 0 : e)
    };
    return (0, i.jsx)(m.A, {
        title: h.intl.string(h.t.DMeO2X),
        disabled: !v && !x,
        className: l()(p.__invalid_profileThemesSection, T),
        showPremiumIcon: S,
        forcedDivider: I,
        children: (0, i.jsxs)("div", {
            className: p.hd,
            children: [(0, i.jsx)("div", {
                className: p.YX,
                children: (0, i.jsx)(A.A, {
                    onChange: e => y([e, b]),
                    color: N,
                    suggestedColors: R,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: p.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: h.intl.string(h.t.C3KTQk)
                    })
                })
            }), (0, i.jsx)("div", {
                className: p.YX,
                children: (0, i.jsx)(A.A, {
                    onChange: e => y([N, e]),
                    color: b,
                    suggestedColors: R,
                    showEyeDropper: !0,
                    label: (0, i.jsx)(d.Text, {
                        className: p.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: h.intl.string(h.t["8elvy6"])
                    })
                })
            }), C && null != E && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.WA,
                children: (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: h.intl.string(h.t["L+GmoR"]),
                    onClick: () => y([null, null])
                })
            })]
        })
    })
}