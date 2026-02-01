/** chunk id: 281052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
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
    _ = n(124064),
    p = n(200790),
    m = n(230084),
    g = n(180020),
    A = n(431982),
    f = n(730588),
    b = n(164599),
    h = n(63675),
    E = n(546849),
    O = n(101058),
    x = n(622543),
    C = n(696451),
    S = n(287809),
    T = n(927578),
    I = n(427262),
    N = n(159001),
    y = n(833336),
    j = n(684732),
    v = n(168917),
    P = n(746706),
    R = n(788868),
    D = n(985018),
    L = n(453814);

function w(e) {
    var t, n, i, w;
    let {
        guild: M
    } = e, G = (0, s.bG)([S.default], () => {
        let e = S.default.getCurrentUser();
        return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
    }), U = (0, d.L)(R.PremiumTypes.TIER_2), {
        pendingAvatar: k,
        pendingNickname: B,
        pendingBanner: H,
        pendingBio: V,
        pendingPronouns: F,
        pendingThemeColors: Y,
        errors: W,
        guild: K
    } = (0, s.cf)([y.A], () => {
        let {
            pendingAvatar: e,
            pendingNickname: t,
            pendingBio: n,
            pendingPronouns: r,
            pendingBanner: i,
            pendingThemeColors: l
        } = y.A.getAllPending();
        return {
            pendingAvatar: e,
            pendingNickname: t,
            pendingBanner: i,
            pendingBio: n,
            pendingPronouns: r,
            pendingThemeColors: l,
            errors: y.A.getErrors(),
            guild: y.A.getGuild()
        }
    }), z = (0, O.V7)({
        userId: G.id,
        image: k
    }), Z = null != M ? M : K;
    l()(null != Z, "guild should not be null");
    let X = (0, c.EC)(Z.id),
        q = (0, s.bG)([C.Ay], () => null == Z.id ? null : C.Ay.getMember(Z.id, G.id)),
        J = (0, s.bG)([x.A], () => x.A.getGuildMemberProfile(G.id, Z.id)),
        Q = T.Ay.canUsePremiumProfileCustomization(G),
        $ = (0, u.z5)(k, null == q ? void 0 : q.avatar),
        ee = (0, u.Ac)(H, null == J ? void 0 : J.banner),
        et = (0, j.lS)(Y, null == J ? void 0 : J.themeColors),
        en = null != (t = null == J ? void 0 : J.bio) ? t : "",
        er = null != (n = null == J ? void 0 : J.pronouns) ? n : "",
        ei = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0)
        };
    return (0, r.jsxs)("div", {
        className: L.Q,
        children: [(0, r.jsx)(v.A, {
            errors: null != (i = null == W ? void 0 : W.nick) ? i : null == X ? void 0 : X.nick,
            username: I.Ay.getName(G),
            pendingNick: B,
            currentNick: null == q ? void 0 : q.nick,
            user: G,
            guild: Z
        }, "nick"), (0, r.jsx)(E.A, {
            sectionTitle: D.intl.string(D.t["+T3RI/"]),
            errors: null == W ? void 0 : W.pronouns,
            onPronounsChange: e => {
                (0, j.d7)(e, er)
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
                            className: L.a
                        })
                    })]
                }),
                showRemoveAvatarButton: $,
                onAvatarChange: e => ei(e, null == q ? void 0 : q.avatar, N.zq),
                errors: null == W ? void 0 : W.avatar,
                guildId: Z.id,
                disabled: !Q
            }, "avatar"), (0, r.jsx)(p.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [D.intl.string(D.t["7v0T9P"]), (0, r.jsx)(a.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, r.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: L.a
                        })
                    })]
                }),
                user: G,
                guild: Z
            }, "decoration"), !U && (0, r.jsx)(g.A, {
                user: G,
                guildId: Z.id
            }), (0, r.jsx)(A.A, {
                user: G,
                guild: Z,
                titleIcon: (0, r.jsx)(a.m, {
                    text: D.intl.string(D.t["5AFxuK"]),
                    children: (0, r.jsx)(o.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: L.a
                    })
                })
            }, "nameplate"), (0, r.jsx)(b.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [D.intl.string(D.t.wR5wOo), (0, r.jsx)(a.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, r.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: L.a
                        })
                    })]
                }),
                user: G,
                guild: Z
            }, "effect"), (0, r.jsx)(f.A, {
                showRemoveBannerButton: ee,
                errors: null == W ? void 0 : W.banner,
                onBannerChange: e => ei(e, null == J ? void 0 : J.banner, N.Iz),
                guildId: null == Z ? void 0 : Z.id,
                disabled: !Q
            }, "banner"), (0, r.jsx)(h.A, {
                user: G,
                pendingAvatarSrc: z,
                pendingColors: Y,
                onThemeColorsChange: e => {
                    (0, j.wx)(e, null == J ? void 0 : J.themeColors)
                },
                guildId: null == Z ? void 0 : Z.id,
                showResetThemeButton: et
            }), (0, r.jsx)(_.A, {
                placeholder: D.intl.string(D.t["/7NKgv"]),
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [D.intl.string(D.t.jGoPJT), (0, r.jsx)(a.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, r.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: L.a
                        })
                    })]
                }),
                onBioChange: e => (0, j.Rn)(e, en),
                errors: null != (w = null == W ? void 0 : W.bio) ? w : null == X ? void 0 : X.bio,
                pendingBio: V,
                currentBio: en,
                disabled: !Q
            }, "about")]
        })]
    })
}