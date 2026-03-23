/** chunk id: 766569 params = (module,exports,require) **/
n.d(t, {
    A: () => P
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(974544),
    u = n(793574),
    m = n(688810),
    _ = n(550111),
    g = n(919395),
    A = n(884546),
    x = n(287070),
    p = n(101058),
    h = n(836602),
    f = n(622543),
    T = n(696451),
    E = n(351906),
    S = n(287809),
    b = n(975571),
    C = n(927578),
    N = n(159001),
    v = n(65767),
    I = n(281052),
    j = n(687021),
    y = n(652215),
    O = n(985018),
    R = n(764121);

function L(e) {
    (0, o.mMO)(async () => {
        let {
            default: t
        } = await n.e("65281").then(n.bind(n, 547352));
        return n => (0, i.jsx)(t, {
            source: {
                ...e,
                page: y.liQ.GUILD_MEMBER_PROFILE_SETTINGS
            },
            ...n
        })
    })
}

function P(e) {
    let {
        selectedGuild: t,
        onGuildChange: n
    } = e, {
        analyticsLocations: l
    } = (0, m.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE), P = (0, r.bG)([S.default], () => {
        let e = S.default.getCurrentUser();
        return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
    }), D = (0, r.bG)([T.Ay], () => null != t ? T.Ay.getMember(t.id, P.id) : null), M = (0, r.bG)([f.A], () => !f.A.isFetchingProfile(P.id, t?.id)), G = (0, r.bG)([E.A], () => E.A.hidePersonalInformation), {
        pendingAvatar: k,
        pendingNameplate: U,
        ...w
    } = (0, r.cf)([h.A], () => h.A.getPendingChanges(t?.id)), V = (0, p.V7)({
        userId: P.id,
        image: k
    }), B = (0, g.lw)({
        pendingValue: U,
        userValue: P?.collectibles?.nameplate,
        guildValue: D?.collectibles?.nameplate,
        guildId: t?.id
    }), {
        pendingDisplayNameStyles: F
    } = (0, g.B0)(P, t?.id);
    return (s.useEffect(() => () => d.h.wait(N.IM), []), G) ? (0, i.jsx)(c.A, {}) : M ? (0, i.jsxs)(m.f5, {
        value: l,
        children: [(0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: O.intl.format(O.t["/PTB2E"], {
                helpCenterLink: b.A.getArticleURL(y.MVz.GUILD_PROFILES)
            })
        }), null != t ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(j.A, {
                guildId: t.id,
                onChange: n
            }), (0, i.jsx)(A.A, {
                profilePreviewTitle: (0, i.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    className: R.Y,
                    children: O.intl.formatToPlainString(O.t.Tc0slG, {
                        guildName: t?.name
                    })
                }),
                profilePreview: (0, i.jsx)(x.A, {
                    ...w,
                    pendingAvatar: V,
                    pendingDisplayNameStyles: F,
                    user: P,
                    guild: t,
                    canUsePremiumCustomization: C.Ay.canUsePremiumProfileCustomization(P),
                    onUpsellClick: L
                }),
                nameplatePreview: (0, i.jsx)(_.A, {
                    ...w,
                    pendingDisplayNameStyles: F,
                    user: P,
                    guildId: t?.id,
                    nameplate: B,
                    className: null == B ? R.t : void 0,
                    isHighlighted: !0
                }),
                children: (0, i.jsx)(I.A, {})
            })]
        }) : (0, i.jsx)(v.A, {})]
    }) : (0, i.jsx)(o.y$y, {})
}