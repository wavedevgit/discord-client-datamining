/** chunk id: 161290 params = (module,exports,require) **/
n.d(t, {
    A: () => D
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
    g = n(200790),
    m = n(230084),
    A = n(339442),
    h = n(900254),
    p = n(431982),
    x = n(730588),
    E = n(593629),
    T = n(164599),
    S = n(63675),
    C = n(617514),
    f = n(546849),
    I = n(101058),
    b = n(207803),
    N = n(836602),
    v = n(622543),
    j = n(950191),
    O = n(287809),
    R = n(927578),
    y = n(985018),
    P = n(961618);

function D() {
    let e = (0, a.bG)([O.default], () => {
            let e = O.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
        }),
        t = (0, a.bG)([v.A], () => v.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: D,
            pendingBio: L,
            pendingPronouns: G,
            pendingAccentColor: M,
            pendingThemeColors: U,
            pendingLegacyUsernameDisabled: k,
            pendingPrimaryGuildId: V,
            errors: w
        } = (0, a.cf)([N.A], () => {
            let e = N.A.getPendingChanges(),
                t = N.A.getErrors();
            return {
                ...e,
                errors: t
            }
        }),
        H = (0, I.V7)({
            userId: e.id,
            image: n
        }),
        B = (0, o.EC)(),
        F = R.Ay.canUsePremiumProfileCustomization(e),
        Y = (0, u.z5)(n, e.avatar),
        z = (0, u.Ac)(D, t?.banner),
        X = (0, j.Ay)(e.id),
        W = X?.getLegacyUsername(),
        K = (w.global_name?.length ?? 0) > 0 ? w.global_name : B?.nick ?? [],
        Z = (w.bio?.length ?? 0) > 0 ? w.bio : B?.bio ?? [],
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
            sectionTitle: y.intl.string(y.t["+T3RI/"]),
            errors: w.pronouns,
            onPronounsChange: b.Oz,
            pendingPronouns: G,
            currentPronouns: t?.pronouns ?? ""
        }, "pronouns"), (0, i.jsx)(C.A, {}), (0, i.jsx)(m.A, {
            onAvatarChange: r.zq,
            showRemoveAvatarButton: Y,
            errors: w.avatar,
            sectionTitle: y.intl.string(y.t.lqaIxI),
            forcedDivider: !0
        }, "avatar"), (0, i.jsx)(g.A, {
            user: e,
            sectionTitle: y.intl.string(y.t["7v0T9P"])
        }, "decoration"), (0, i.jsx)(p.A, {
            user: e
        }), (0, i.jsx)(T.A, {
            user: e,
            sectionTitle: y.intl.string(y.t.wR5wOo)
        }, "effect"), F ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.A, {
                showRemoveBannerButton: z,
                errors: w.banner,
                onBannerChange: b.Iz,
                forcedDivider: !0
            }, "banner"), (0, i.jsx)(S.A, {
                user: e,
                pendingAvatarSrc: H,
                pendingColors: U,
                onThemeColorsChange: b.Zz,
                forcedDivider: !0
            })]
        }) : (0, i.jsx)(E.A, {
            user: e,
            savedUserColor: t?.accentColor,
            pendingColor: M,
            setPendingAccentColor: b.XW
        }, "color"), (0, i.jsx)(_.A, {
            sectionTitle: y.intl.string(y.t.ZzAR2Y),
            errors: Z,
            onBioChange: e => (0, u.Ru)(e, t?.bio),
            pendingBio: L,
            currentBio: t?.bio ?? ""
        }, "bio"), q.length > 0 && (0, i.jsx)(d.A, {
            availablePrimaryGuilds: q,
            pendingPrimaryGuildId: V,
            onChange: e => (0, r.Ch)(e)
        }), null != W && (0, i.jsx)(h.A, {
            legacyUsername: W,
            pendingLegacyUsernameDisabled: k
        }, "legacy_username")]
    })
}