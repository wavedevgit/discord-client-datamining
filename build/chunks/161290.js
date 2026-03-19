/** chunk id: 161290 params = (module,exports,require) **/
n.d(t, {
    A: () => L
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(631670),
    o = n(81400),
    d = n(185955),
    c = n(318785),
    u = n(919395),
    _ = n(124064),
    m = n(200790),
    g = n(230084),
    A = n(339442),
    x = n(900254),
    h = n(431982),
    p = n(730588),
    T = n(593629),
    E = n(164599),
    S = n(63675),
    C = n(617514),
    f = n(546849),
    b = n(101058),
    N = n(207803),
    I = n(836602),
    v = n(622543),
    j = n(950191),
    y = n(287809),
    R = n(927578),
    O = n(985018),
    P = n(961618);

function L() {
    let e = (0, a.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
        }),
        t = (0, a.bG)([v.A], () => v.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: L,
            pendingBio: D,
            pendingPronouns: M,
            pendingAccentColor: G,
            pendingThemeColors: U,
            pendingLegacyUsernameDisabled: k,
            pendingPrimaryGuildId: V,
            errors: w
        } = (0, a.cf)([I.A], () => {
            let e = I.A.getPendingChanges(),
                t = I.A.getErrors();
            return {
                ...e,
                errors: t
            }
        }),
        B = (0, b.V7)({
            userId: e.id,
            image: n
        }),
        H = (0, o.EC)(),
        F = R.Ay.canUsePremiumProfileCustomization(e),
        Y = (0, u.z5)(n, e.avatar),
        z = (0, u.Ac)(L, t?.banner),
        X = (0, j.Ay)(e.id),
        W = X?.getLegacyUsername(),
        K = (w.global_name?.length ?? 0) > 0 ? w.global_name : H?.nick ?? [],
        Z = (w.bio?.length ?? 0) > 0 ? w.bio : H?.bio ?? [],
        q = (0, c.b)();
    return (0, i.jsxs)("div", {
        className: P.Q,
        children: [(0, i.jsx)(A.A, {
            placeholder: e.username,
            errors: K,
            currentGlobalName: e.globalName,
            pendingGlobalName: s,
            onGlobalNameChange: r.U6,
            user: e
        }), (0, i.jsx)(f.A, {
            sectionTitle: O.intl.string(O.t["+T3RI/"]),
            errors: w.pronouns,
            onPronounsChange: N.Oz,
            pendingPronouns: M,
            currentPronouns: t?.pronouns ?? ""
        }, "pronouns"), (0, i.jsx)(C.A, {}), (0, i.jsx)(g.A, {
            onAvatarChange: r.zq,
            showRemoveAvatarButton: Y,
            errors: w.avatar,
            sectionTitle: O.intl.string(O.t.lqaIxI),
            forcedDivider: !0
        }, "avatar"), (0, i.jsx)(m.A, {
            user: e,
            sectionTitle: O.intl.string(O.t["7v0T9P"])
        }, "decoration"), (0, i.jsx)(h.A, {
            user: e
        }), (0, i.jsx)(E.A, {
            user: e,
            sectionTitle: O.intl.string(O.t.wR5wOo)
        }, "effect"), F ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.A, {
                showRemoveBannerButton: z,
                errors: w.banner,
                onBannerChange: N.Iz,
                forcedDivider: !0
            }, "banner"), (0, i.jsx)(S.A, {
                user: e,
                pendingAvatarSrc: B,
                pendingColors: U,
                onThemeColorsChange: N.Zz,
                forcedDivider: !0
            })]
        }) : (0, i.jsx)(T.A, {
            user: e,
            savedUserColor: t?.accentColor,
            pendingColor: G,
            setPendingAccentColor: N.XW
        }, "color"), (0, i.jsx)(_.A, {
            sectionTitle: O.intl.string(O.t.ZzAR2Y),
            errors: Z,
            onBioChange: e => (0, u.Ru)(e, t?.bio),
            pendingBio: D,
            currentBio: t?.bio ?? ""
        }, "bio"), q.length > 0 && (0, i.jsx)(d.A, {
            availablePrimaryGuilds: q,
            pendingPrimaryGuildId: V,
            onChange: e => (0, r.Ch)(e)
        }), null != W && (0, i.jsx)(x.A, {
            legacyUsername: W,
            pendingLegacyUsernameDisabled: k
        }, "legacy_username")]
    })
}