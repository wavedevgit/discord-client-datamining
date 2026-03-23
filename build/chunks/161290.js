/** chunk id: 161290 params = (module,exports,require) **/
n.d(t, {
    A: () => L
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(81400),
    o = n(185955),
    d = n(318785),
    c = n(919395),
    u = n(124064),
    m = n(200790),
    _ = n(230084),
    g = n(339442),
    A = n(900254),
    x = n(431982),
    p = n(730588),
    h = n(593629),
    f = n(164599),
    T = n(63675),
    E = n(617514),
    S = n(546849),
    b = n(101058),
    C = n(84540),
    N = n(836602),
    v = n(622543),
    I = n(950191),
    j = n(287809),
    y = n(927578),
    O = n(985018),
    R = n(264671);

function L() {
    let e = (0, a.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
        }),
        t = (0, a.bG)([v.A], () => v.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: L,
            pendingBio: P,
            pendingPronouns: D,
            pendingAccentColor: M,
            pendingThemeColors: G,
            pendingLegacyUsernameDisabled: k,
            pendingPrimaryGuildId: U,
            errors: w
        } = (0, a.cf)([N.A], () => {
            let e = N.A.getPendingChanges(),
                t = N.A.getErrors();
            return {
                ...e,
                errors: t
            }
        }),
        V = (0, b.V7)({
            userId: e.id,
            image: n
        }),
        B = (0, r.EC)(),
        F = y.Ay.canUsePremiumProfileCustomization(e),
        H = (0, c.z5)(n, e.avatar),
        Y = (0, c.Ac)(L, t?.banner),
        z = (0, I.Ay)(e.id),
        X = z?.getLegacyUsername(),
        W = (w.global_name?.length ?? 0) > 0 ? w.global_name : B?.nick ?? [],
        K = (w.bio?.length ?? 0) > 0 ? w.bio : B?.bio ?? [],
        Z = (0, d.b)();
    return (0, i.jsxs)("div", {
        className: R.Q,
        children: [(0, i.jsx)(g.A, {
            placeholder: e.username,
            errors: W,
            currentGlobalName: e.globalName,
            pendingGlobalName: s,
            onGlobalNameChange: e => (0, C.p)({
                globalName: e
            }),
            user: e
        }), (0, i.jsx)(S.A, {
            sectionTitle: O.intl.string(O.t["+T3RI/"]),
            errors: w.pronouns,
            onPronounsChange: e => (0, C.p)({
                pronouns: e
            }),
            pendingPronouns: D,
            currentPronouns: t?.pronouns ?? ""
        }, "pronouns"), (0, i.jsx)(E.A, {}), (0, i.jsx)(_.A, {
            onAvatarChange: e => {
                (0, C.p)({
                    avatar: e
                }), (0, c.WU)(e)
            },
            showRemoveAvatarButton: H,
            errors: w.avatar,
            sectionTitle: O.intl.string(O.t.lqaIxI),
            forcedDivider: !0
        }, "avatar"), (0, i.jsx)(m.A, {
            user: e,
            sectionTitle: O.intl.string(O.t["7v0T9P"])
        }, "decoration"), (0, i.jsx)(x.A, {
            user: e
        }), (0, i.jsx)(f.A, {
            user: e,
            sectionTitle: O.intl.string(O.t.wR5wOo)
        }, "effect"), F ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.A, {
                showRemoveBannerButton: Y,
                errors: w.banner,
                onBannerChange: e => (0, C.p)({
                    banner: e
                }),
                forcedDivider: !0
            }, "banner"), (0, i.jsx)(T.A, {
                user: e,
                pendingAvatarSrc: V,
                pendingColors: G,
                onThemeColorsChange: e => (0, C.p)({
                    themeColors: e
                }),
                forcedDivider: !0
            })]
        }) : (0, i.jsx)(h.A, {
            user: e,
            savedUserColor: t?.accentColor,
            pendingColor: M,
            setPendingAccentColor: e => (0, C.p)({
                accentColor: e
            })
        }, "color"), (0, i.jsx)(u.A, {
            sectionTitle: O.intl.string(O.t.ZzAR2Y),
            errors: K,
            onBioChange: e => (0, C.p)({
                bio: e
            }),
            pendingBio: P,
            currentBio: t?.bio ?? ""
        }, "bio"), Z.length > 0 && (0, i.jsx)(o.A, {
            availablePrimaryGuilds: Z,
            pendingPrimaryGuildId: U,
            onChange: e => (0, C.p)({
                primaryGuildId: e
            })
        }), null != X && (0, i.jsx)(A.A, {
            legacyUsername: X,
            pendingLegacyUsernameDisabled: k
        }, "legacy_username")]
    })
}