/** chunk id: 281052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968);
n(64700);
var s = n(284009),
    a = n.n(s),
    l = n(311907),
    r = n(990078),
    o = n(397927),
    c = n(81400),
    d = n(757036),
    u = n(919395),
    _ = n(124064),
    m = n(200790),
    A = n(230084),
    g = n(180020),
    h = n(431982),
    x = n(730588),
    p = n(164599),
    E = n(63675),
    C = n(546849),
    T = n(101058),
    S = n(836602),
    I = n(622543),
    f = n(696451),
    N = n(71393),
    b = n(287809),
    j = n(927578),
    v = n(427262),
    O = n(159001),
    R = n(684732),
    y = n(168917),
    P = n(746706),
    L = n(788868),
    D = n(985018),
    G = n(453814);

function M() {
    let e = (0, l.bG)([b.default], () => {
            let e = b.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
        }),
        t = (0, d.L)(L.PremiumTypes.TIER_2),
        n = (0, l.bG)([S.A, N.A], () => N.A.getGuild(S.A.selectedGuildId));
    a()(null != n, "guild should not be null");
    let {
        pendingAvatar: s,
        pendingNickname: M,
        pendingBanner: U,
        pendingBio: k,
        pendingPronouns: V,
        pendingThemeColors: H,
        errors: w
    } = (0, l.cf)([S.A], () => ({
        ...S.A.getPendingChanges(n.id),
        errors: S.A.getErrors(n.id)
    })), B = (0, T.V7)({
        userId: e.id,
        image: s
    }), Y = (0, c.EC)(n.id), F = (0, l.bG)([f.Ay], () => null == n.id ? null : f.Ay.getMember(n.id, e.id)), z = (0, l.bG)([I.A], () => I.A.getGuildMemberProfile(e.id, n.id)), W = j.Ay.canUsePremiumProfileCustomization(e), K = (0, u.z5)(s, F?.avatar), Z = (0, u.Ac)(U, z?.banner), q = (0, R.lS)(H, z?.themeColors), X = z?.bio ?? "", Q = z?.pronouns ?? "", J = (e, t, n) => {
        n(e ?? (null != t ? null : void 0))
    };
    return (0, i.jsxs)("div", {
        className: G.Q,
        children: [(0, i.jsx)(y.A, {
            errors: w?.nick ?? Y?.nick,
            username: v.Ay.getName(e),
            pendingNick: M,
            currentNick: F?.nick,
            user: e,
            guild: n
        }, "nick"), (0, i.jsx)(C.A, {
            sectionTitle: D.intl.string(D.t["+T3RI/"]),
            errors: w?.pronouns,
            onPronounsChange: e => {
                (0, R.d7)(e, Q)
            },
            pendingPronouns: V,
            currentPronouns: Q
        }, "pronouns"), (0, i.jsxs)(P.A, {
            user: e,
            showOverlay: !W,
            children: [(0, i.jsx)(A.A, {
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
                onAvatarChange: e => J(e, F?.avatar, O.zq),
                errors: w?.avatar,
                guildId: n.id,
                disabled: !W
            }, "avatar"), (0, i.jsx)(m.A, {
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
            }, "decoration"), !t && (0, i.jsx)(g.A, {
                user: e,
                guildId: n.id
            }), (0, i.jsx)(h.A, {
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
            }, "effect"), (0, i.jsx)(x.A, {
                showRemoveBannerButton: Z,
                errors: w?.banner,
                onBannerChange: e => J(e, z?.banner, O.Iz),
                guildId: n?.id,
                disabled: !W
            }, "banner"), (0, i.jsx)(E.A, {
                user: e,
                pendingAvatarSrc: B,
                pendingColors: H,
                onThemeColorsChange: e => {
                    (0, R.wx)(e, z?.themeColors)
                },
                guildId: n?.id,
                showResetThemeButton: q
            }), (0, i.jsx)(_.A, {
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
                onBioChange: e => (0, R.Rn)(e, X),
                errors: w?.bio ?? Y?.bio,
                pendingBio: k,
                currentBio: X,
                disabled: !W
            }, "about")]
        })]
    })
}