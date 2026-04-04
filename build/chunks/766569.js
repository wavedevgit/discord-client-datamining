/** chunk id: 766569 params = (module,exports,require) **/
n.d(t, {
    A: () => L
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
    g = n(512213),
    _ = n(919395),
    x = n(884546),
    A = n(287070),
    h = n(101058),
    p = n(836602),
    T = n(622543),
    f = n(696451),
    S = n(351906),
    E = n(287809),
    b = n(975571),
    C = n(927578),
    N = n(159001),
    v = n(65767),
    I = n(281052),
    j = n(687021),
    y = n(652215),
    O = n(985018),
    R = n(595254);

function P(e) {
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

function L(e) {
    let {
        selectedGuild: t,
        onGuildChange: n
    } = e, {
        analyticsLocations: l
    } = (0, m.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE), L = (0, r.bG)([E.default], () => {
        let e = E.default.getCurrentUser();
        return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
    }), D = (0, r.bG)([f.Ay], () => null != t ? f.Ay.getMember(t.id, L.id) : null), G = (0, r.bG)([T.A], () => !T.A.isFetchingProfile(L.id, t?.id)), M = (0, r.bG)([S.A], () => S.A.hidePersonalInformation), {
        pendingAvatar: k,
        pendingNameplate: U,
        ...w
    } = (0, r.cf)([p.A], () => p.A.getPendingChanges(t?.id)), V = (0, h.V7)({
        userId: L.id,
        image: k
    }), B = (0, _.lw)({
        pendingValue: U,
        userValue: L?.collectibles?.nameplate,
        guildValue: D?.collectibles?.nameplate,
        guildId: t?.id
    }), {
        pendingDisplayNameStyles: F
    } = (0, _.B0)(L, t?.id);
    return (s.useEffect(() => () => d.h.wait(N.IM), []), M) ? (0, i.jsx)(c.A, {}) : G ? (0, i.jsxs)(m.f5, {
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
            }), (0, i.jsx)(x.A, {
                profilePreviewTitle: (0, i.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    className: R.Y,
                    children: O.intl.formatToPlainString(O.t.Tc0slG, {
                        guildName: t?.name
                    })
                }),
                profilePreview: (0, i.jsx)(A.A, {
                    ...w,
                    pendingAvatar: V,
                    pendingDisplayNameStyles: F,
                    user: L,
                    guild: t,
                    canUsePremiumCustomization: C.Ay.canUsePremiumProfileCustomization(L),
                    onUpsellClick: P
                }),
                nameplatePreview: (0, i.jsx)(g.A, {
                    ...w,
                    pendingDisplayNameStyles: F,
                    user: L,
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