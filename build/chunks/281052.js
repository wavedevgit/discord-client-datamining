/** chunk id: 281052 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(81400),
    c = n(757036),
    u = n(919395),
    m = n(124064),
    g = n(200790),
    _ = n(230084),
    x = n(180020),
    A = n(431982),
    h = n(730588),
    p = n(164599),
    T = n(63675),
    f = n(546849),
    S = n(101058),
    b = n(84540),
    E = n(836602),
    C = n(622543),
    N = n(696451),
    v = n(71393),
    I = n(287809),
    j = n(927578),
    y = n(427262),
    O = n(684732),
    R = n(168917),
    P = n(746706),
    L = n(788868),
    D = n(985018),
    G = n(966227);

function M() {
    let e = (0, a.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
        }),
        t = (0, c.L)(L.PremiumTypes.TIER_2),
        n = (0, a.bG)([E.A, v.A], () => v.A.getGuild(E.A.selectedGuildId));
    l()(null != n, "guild should not be null");
    let {
        pendingAvatar: s,
        pendingNickname: M,
        pendingBanner: k,
        pendingBio: U,
        pendingPronouns: w,
        pendingThemeColors: V,
        errors: B
    } = (0, a.cf)([E.A], () => ({
        ...E.A.getPendingChanges(n.id),
        errors: E.A.getErrors(n.id)
    })), F = (0, S.V7)({
        userId: e.id,
        image: s
    }), H = (0, d.EC)(n.id), z = (0, a.bG)([N.Ay], () => null == n.id ? null : N.Ay.getMember(n.id, e.id)), Y = (0, a.bG)([C.A], () => C.A.getGuildMemberProfile(e.id, n.id)), X = j.Ay.canUsePremiumProfileCustomization(e), K = (0, u.z5)(s, z?.avatar), W = (0, u.Ac)(k, Y?.banner), Z = (0, O.l)(V, Y?.themeColors), q = Y?.bio ?? "", Q = Y?.pronouns ?? "", J = (e, t, n) => {
        n(e ?? (null != t ? null : void 0))
    };
    return (0, i.jsxs)("div", {
        className: G.Q,
        children: [(0, i.jsx)(R.A, {
            errors: B?.nick ?? H?.nick,
            username: y.Ay.getName(e),
            pendingNick: M,
            currentNick: z?.nick,
            user: e,
            guild: n
        }, "nick"), (0, i.jsx)(f.A, {
            sectionTitle: D.intl.string(D.t["+T3RI/"]),
            errors: B?.pronouns,
            onPronounsChange: e => (0, b.p)({
                guildId: n.id,
                pronouns: e
            }),
            pendingPronouns: w,
            currentPronouns: Q
        }, "pronouns"), (0, i.jsxs)(P.A, {
            user: e,
            showOverlay: !X,
            children: [(0, i.jsx)(_.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [D.intl.string(D.t.lqaIxI), (0, i.jsx)(r.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: G.a
                        })
                    })]
                }),
                showRemoveAvatarButton: K,
                onAvatarChange: e => J(e, z?.avatar, e => (0, b.p)({
                    guildId: n.id,
                    avatar: e
                })),
                errors: B?.avatar,
                guildId: n.id,
                disabled: !X
            }, "avatar"), (0, i.jsx)(g.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [D.intl.string(D.t["7v0T9P"]), (0, i.jsx)(r.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: G.a
                        })
                    })]
                }),
                user: e,
                guild: n
            }, "decoration"), !t && (0, i.jsx)(x.A, {
                user: e,
                guildId: n.id
            }), (0, i.jsx)(A.A, {
                user: e,
                guild: n,
                titleIcon: (0, i.jsx)(r.m, {
                    text: D.intl.string(D.t["5AFxuK"]),
                    children: (0, i.jsx)(o.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: G.a
                    })
                })
            }, "nameplate"), (0, i.jsx)(p.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [D.intl.string(D.t.wR5wOo), (0, i.jsx)(r.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: G.a
                        })
                    })]
                }),
                user: e,
                guild: n
            }, "effect"), (0, i.jsx)(h.A, {
                showRemoveBannerButton: W,
                errors: B?.banner,
                onBannerChange: e => J(e, Y?.banner, e => (0, b.p)({
                    guildId: n.id,
                    banner: e
                })),
                guildId: n.id,
                disabled: !X
            }, "banner"), (0, i.jsx)(T.A, {
                user: e,
                pendingAvatarSrc: F,
                pendingColors: V,
                onThemeColorsChange: e => (0, b.p)({
                    guildId: n.id,
                    themeColors: e
                }),
                guildId: n.id,
                showResetThemeButton: Z
            }), (0, i.jsx)(m.A, {
                placeholder: D.intl.string(D.t["/7NKgv"]),
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [D.intl.string(D.t.ZzAR2Y), (0, i.jsx)(r.m, {
                        text: D.intl.string(D.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: G.a
                        })
                    })]
                }),
                onBioChange: e => (0, b.p)({
                    guildId: n.id,
                    bio: e
                }),
                errors: B?.bio ?? H?.bio,
                pendingBio: U,
                currentBio: q,
                disabled: !X
            }, "about")]
        })]
    })
}