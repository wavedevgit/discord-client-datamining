/** Chunk was on 5606 **/
/** chunk id: 281052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => L
});
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(311907),
    a = n(990078),
    o = n(397927),
    c = n(81400),
    d = n(757036),
    u = n(919395),
    p = n(124064),
    _ = n(200790),
    m = n(230084),
    g = n(180020),
    f = n(431982),
    b = n(730588),
    h = n(164599),
    A = n(63675),
    E = n(546849),
    x = n(101058),
    O = n(622543),
    C = n(696451),
    y = n(287809),
    j = n(927578),
    T = n(427262),
    v = n(159001),
    S = n(833336),
    I = n(684732),
    N = n(168917),
    P = n(746706),
    R = n(788868),
    D = n(985018),
    w = n(453814);

function L(e) {
    var t, n, i, L;
    let {
        guild: M
    } = e, G = (0, s.bG)([y.default], () => {
        let e = y.default.getCurrentUser();
        return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
    }), U = (0, d.L)(R.PremiumTypes.TIER_2), {
        pendingAvatar: k,
        pendingNickname: H,
        pendingBanner: B,
        pendingBio: V,
        pendingPronouns: F,
        pendingThemeColors: Y,
        errors: W,
        guild: z
    } = (0, s.cf)([S.A], () => {
        let {
            pendingAvatar: e,
            pendingNickname: t,
            pendingBio: n,
            pendingPronouns: r,
            pendingBanner: i,
            pendingThemeColors: l
        } = S.A.getAllPending();
        return {
            pendingAvatar: e,
            pendingNickname: t,
            pendingBanner: i,
            pendingBio: n,
            pendingPronouns: r,
            pendingThemeColors: l,
            errors: S.A.getErrors(),
            guild: S.A.getGuild()
        }
    }), K = (0, x.V7)({
        userId: G.id,
        image: k
    }), Z = null != M ? M : z;
    l()(null != Z, "guild should not be null");
    let q = (0, c.EC)(Z.id),
        X = (0, s.bG)([C.Ay], () => null == Z.id ? null : C.Ay.getMember(Z.id, G.id)),
        J = (0, s.bG)([O.A], () => O.A.getGuildMemberProfile(G.id, Z.id)),
        Q = j.Ay.canUsePremiumProfileCustomization(G),
        $ = (0, u.z5)(k, null == X ? void 0 : X.avatar),
        ee = (0, u.Ac)(B, null == J ? void 0 : J.banner),
        et = (0, I.lS)(Y, null == J ? void 0 : J.themeColors),
        en = null != (t = null == J ? void 0 : J.bio) ? t : "",
        er = null != (n = null == J ? void 0 : J.pronouns) ? n : "",
        ei = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0)
        };
    return (0, r.jsxs)("div", {
        className: w.Q,
        children: [(0, r.jsx)(N.A, {
            errors: null != (i = null == W ? void 0 : W.nick) ? i : null == q ? void 0 : q.nick,
            username: T.Ay.getName(G),
            pendingNick: H,
            currentNick: null == X ? void 0 : X.nick,
            user: G,
            guild: Z
        }, "nick"), (0, r.jsx)(E.A, {
            sectionTitle: D.intl.string(D.t["+T3RI/"]),
            errors: null == W ? void 0 : W.pronouns,
            onPronounsChange: e => {
                (0, I.d7)(e, er)
            },
            pendingPronouns: F,
            currentPronouns: er
        }, "pronouns"), (0, r.jsxs)(P.A, {
            user: G,
            showOverlay: !Q,
            children: [(0, r.jsx)(m.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [D.intl.string(D.t.lqaIxI), (0, r.jsx)(a.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, r.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: w.a
                        })
                    })]
                }),
                showRemoveAvatarButton: $,
                onAvatarChange: e => ei(e, null == X ? void 0 : X.avatar, v.zq),
                errors: null == W ? void 0 : W.avatar,
                guildId: Z.id,
                disabled: !Q
            }, "avatar"), (0, r.jsx)(_.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [D.intl.string(D.t["7v0T9P"]), (0, r.jsx)(a.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, r.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: w.a
                        })
                    })]
                }),
                user: G,
                guild: Z
            }, "decoration"), !U && (0, r.jsx)(g.A, {
                user: G,
                guildId: Z.id
            }), (0, r.jsx)(f.A, {
                user: G,
                guild: Z,
                titleIcon: (0, r.jsx)(a.m, {
                    text: D.intl.string(D.t["5AFxuK"]),
                    children: (0, r.jsx)(o.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: w.a
                    })
                })
            }, "nameplate"), (0, r.jsx)(h.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [D.intl.string(D.t.wR5wOo), (0, r.jsx)(a.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, r.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: w.a
                        })
                    })]
                }),
                user: G,
                guild: Z
            }, "effect"), (0, r.jsx)(b.A, {
                showRemoveBannerButton: ee,
                errors: null == W ? void 0 : W.banner,
                onBannerChange: e => ei(e, null == J ? void 0 : J.banner, v.Iz),
                guildId: null == Z ? void 0 : Z.id,
                disabled: !Q
            }, "banner"), (0, r.jsx)(A.A, {
                user: G,
                pendingAvatarSrc: K,
                pendingColors: Y,
                onThemeColorsChange: e => {
                    (0, I.wx)(e, null == J ? void 0 : J.themeColors)
                },
                guildId: null == Z ? void 0 : Z.id,
                showResetThemeButton: et
            }), (0, r.jsx)(p.A, {
                placeholder: D.intl.string(D.t["/7NKgv"]),
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [D.intl.string(D.t.jGoPJT), (0, r.jsx)(a.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, r.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: w.a
                        })
                    })]
                }),
                onBioChange: e => (0, I.Rn)(e, en),
                errors: null != (L = null == W ? void 0 : W.bio) ? L : null == q ? void 0 : q.bio,
                pendingBio: V,
                currentBio: en,
                disabled: !Q
            }, "about")]
        })]
    })
}