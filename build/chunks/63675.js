/** Chunk was on 60667 **/
/** chunk id: 63675, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
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

function h(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: i,
        onThemeColorsChange: s,
        preventDisabled: h,
        guildId: b,
        className: E,
        showPremiumIcon: x = !0,
        showResetThemeButton: O = !1,
        forcedDivider: C
    } = e, I = (0, u.Ay)(t.id, b), {
        primaryColor: T,
        secondaryColor: S
    } = (0, _.A)({
        user: t,
        displayProfile: I,
        pendingThemeColors: i,
        isPreview: !0
    }), j = p.Ay.canUsePremiumProfileCustomization(t), v = null != n ? n : t.getAvatarURL(b, 80), N = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), y = (0, d.rh)(v, N, !1);
    if (null == T || null == S) return null;
    let P = e => {
        s(a()(e, null == I ? void 0 : I.themeColors) ? void 0 : e)
    };
    return (0, r.jsx)(g.A, {
        title: A.intl.string(A.t.DMeO2X),
        disabled: !j && !h,
        className: l()(f.__invalid_profileThemesSection, E),
        showPremiumIcon: x,
        forcedDivider: C,
        children: (0, r.jsxs)("div", {
            className: f.hd,
            children: [(0, r.jsx)("div", {
                className: f.YX,
                children: (0, r.jsx)(m.A, {
                    onChange: e => P([e, S]),
                    color: T,
                    suggestedColors: y,
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
                    color: S,
                    suggestedColors: y,
                    showEyeDropper: !0,
                    label: (0, r.jsx)(c.Text, {
                        className: f.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: A.intl.string(A.t["8elvy6"])
                    })
                })
            }), O && null != b && (0, r.jsx)("div", {
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