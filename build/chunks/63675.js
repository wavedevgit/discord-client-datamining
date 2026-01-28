/** Chunk was on 5606 **/
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
    p = n(101928),
    _ = n(927578),
    m = n(911180),
    g = n(128450),
    f = n(985018),
    b = n(114403);

function h(e) {
    let {
        user: t,
        pendingAvatarSrc: n,
        pendingColors: i,
        onThemeColorsChange: s,
        preventDisabled: h,
        guildId: A,
        className: E,
        showPremiumIcon: x = !0,
        showResetThemeButton: O = !1,
        forcedDivider: C
    } = e, y = (0, u.Ay)(t.id, A), {
        primaryColor: j,
        secondaryColor: T
    } = (0, p.A)({
        user: t,
        displayProfile: y,
        pendingThemeColors: i,
        isPreview: !0
    }), v = _.Ay.canUsePremiumProfileCustomization(t), S = null != n ? n : t.getAvatarURL(A, 80), I = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), N = (0, d.rh)(S, I, !1);
    if (null == j || null == T) return null;
    let P = e => {
        s(a()(e, null == y ? void 0 : y.themeColors) ? void 0 : e)
    };
    return (0, r.jsx)(g.A, {
        title: f.intl.string(f.t.DMeO2X),
        disabled: !v && !h,
        className: l()(b.__invalid_profileThemesSection, E),
        showPremiumIcon: x,
        forcedDivider: C,
        children: (0, r.jsxs)("div", {
            className: b.hd,
            children: [(0, r.jsx)("div", {
                className: b.YX,
                children: (0, r.jsx)(m.A, {
                    onChange: e => P([e, T]),
                    color: j,
                    suggestedColors: N,
                    showEyeDropper: !0,
                    label: (0, r.jsx)(c.Text, {
                        className: b.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: f.intl.string(f.t.C3KTQk)
                    })
                })
            }), (0, r.jsx)("div", {
                className: b.YX,
                children: (0, r.jsx)(m.A, {
                    onChange: e => P([j, e]),
                    color: T,
                    suggestedColors: N,
                    showEyeDropper: !0,
                    label: (0, r.jsx)(c.Text, {
                        className: b.yz,
                        color: "text-default",
                        variant: "text-xs/normal",
                        "aria-hidden": !0,
                        children: f.intl.string(f.t["8elvy6"])
                    })
                })
            }), O && null != A && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: b.WA,
                children: (0, r.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: f.intl.string(f.t["L+GmoR"]),
                    onClick: () => P([null, null])
                })
            })]
        })
    })
}