/** chunk id: 161290, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
});
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(311907),
    a = n(631670),
    o = n(81400),
    c = n(185955),
    d = n(318785),
    u = n(919395),
    _ = n(124064),
    p = n(200790),
    m = n(230084),
    g = n(339442),
    A = n(900254),
    f = n(431982),
    b = n(730588),
    h = n(593629),
    E = n(164599),
    O = n(63675),
    x = n(617514),
    C = n(546849),
    S = n(101058),
    T = n(207803),
    I = n(836602),
    N = n(622543),
    j = n(950191),
    y = n(287809),
    v = n(927578),
    P = n(985018),
    R = n(264671);

function D() {
    var e, t, n, i, D, L, w, M;
    let G = (0, s.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
        }),
        U = (0, s.bG)([N.A], () => N.A.getUserProfile(G.id)),
        {
            pendingAvatar: k,
            pendingGlobalName: B,
            pendingBanner: H,
            pendingBio: V,
            pendingPronouns: F,
            pendingAccentColor: Y,
            pendingThemeColors: W,
            pendingLegacyUsernameDisabled: K,
            pendingPrimaryGuildId: z,
            errors: Z
        } = (0, s.cf)([I.A], () => {
            var e, t;
            let n = I.A.getPendingChanges(),
                r = I.A.getErrors();
            return e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, n), t = t = {
                errors: r
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
        }),
        X = (0, S.V7)({
            userId: G.id,
            image: k
        }),
        q = (0, o.EC)(),
        J = v.Ay.canUsePremiumProfileCustomization(G),
        Q = (0, u.z5)(k, G.avatar),
        $ = (0, u.Ac)(H, null == U ? void 0 : U.banner),
        ee = (0, j.Ay)(G.id),
        et = null == ee ? void 0 : ee.getLegacyUsername(),
        en = (null != (e = null == (w = Z.global_name) ? void 0 : w.length) ? e : 0) > 0 ? Z.global_name : null != (t = null == q ? void 0 : q.nick) ? t : [],
        er = (null != (n = null == (M = Z.bio) ? void 0 : M.length) ? n : 0) > 0 ? Z.bio : null != (i = null == q ? void 0 : q.bio) ? i : [],
        ei = (0, d.b)();
    return (0, r.jsxs)("div", {
        className: R.Q,
        children: [(0, r.jsx)(g.A, {
            placeholder: G.username,
            errors: en,
            currentGlobalName: G.globalName,
            pendingGlobalName: B,
            onGlobalNameChange: a.U6,
            user: G
        }), (0, r.jsx)(C.A, {
            sectionTitle: P.intl.string(P.t["+T3RI/"]),
            errors: Z.pronouns,
            onPronounsChange: T.Oz,
            pendingPronouns: F,
            currentPronouns: null != (D = null == U ? void 0 : U.pronouns) ? D : ""
        }, "pronouns"), (0, r.jsx)(x.A, {}), (0, r.jsx)(m.A, {
            onAvatarChange: a.zq,
            showRemoveAvatarButton: Q,
            errors: Z.avatar,
            sectionTitle: P.intl.string(P.t.lqaIxI),
            forcedDivider: !0
        }, "avatar"), (0, r.jsx)(p.A, {
            user: G,
            sectionTitle: P.intl.string(P.t["7v0T9P"])
        }, "decoration"), (0, r.jsx)(f.A, {
            user: G
        }), (0, r.jsx)(E.A, {
            user: G,
            sectionTitle: P.intl.string(P.t.wR5wOo)
        }, "effect"), J ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(b.A, {
                showRemoveBannerButton: $,
                errors: Z.banner,
                onBannerChange: T.Iz,
                forcedDivider: !0
            }, "banner"), (0, r.jsx)(O.A, {
                user: G,
                pendingAvatarSrc: X,
                pendingColors: W,
                onThemeColorsChange: T.Zz,
                forcedDivider: !0
            })]
        }) : (0, r.jsx)(h.A, {
            user: G,
            savedUserColor: null == U ? void 0 : U.accentColor,
            pendingColor: Y,
            setPendingAccentColor: T.XW
        }, "color"), (0, r.jsx)(_.A, {
            sectionTitle: P.intl.string(P.t.NepzEw),
            errors: er,
            onBioChange: e => (0, u.Ru)(e, null == U ? void 0 : U.bio),
            pendingBio: V,
            currentBio: null != (L = null == U ? void 0 : U.bio) ? L : ""
        }, "bio"), ei.length > 0 && (0, r.jsx)(c.A, {
            availablePrimaryGuilds: ei,
            pendingPrimaryGuildId: z,
            onChange: e => (0, a.Ch)(e)
        }), null != et && (0, r.jsx)(A.A, {
            legacyUsername: et,
            pendingLegacyUsernameDisabled: K
        }, "legacy_username")]
    })
}