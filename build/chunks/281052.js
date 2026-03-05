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
    _ = n(124064),
    g = n(200790),
    m = n(230084),
    A = n(180020),
    h = n(431982),
    p = n(730588),
    x = n(164599),
    E = n(63675),
    T = n(546849),
    S = n(101058),
    C = n(836602),
    f = n(622543),
    I = n(696451),
    b = n(71393),
    N = n(287809),
    v = n(927578),
    j = n(427262),
    O = n(159001),
    R = n(684732),
    y = n(168917),
    P = n(746706),
    L = n(788868),
    D = n(985018),
    G = n(745496);

function M() {
    let e = (0, a.bG)([N.default], () => {
            let e = N.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
        }),
        t = (0, c.L)(L.PremiumTypes.TIER_2),
        n = (0, a.bG)([C.A, b.A], () => b.A.getGuild(C.A.selectedGuildId));
    l()(null != n, "guild should not be null");
    let {
        pendingAvatar: s,
        pendingNickname: M,
        pendingBanner: U,
        pendingBio: k,
        pendingPronouns: V,
        pendingThemeColors: w,
        errors: H
    } = (0, a.cf)([C.A], () => ({
        ...C.A.getPendingChanges(n.id),
        errors: C.A.getErrors(n.id)
    })), B = (0, S.V7)({
        userId: e.id,
        image: s
    }), Y = (0, d.EC)(n.id), F = (0, a.bG)([I.Ay], () => null == n.id ? null : I.Ay.getMember(n.id, e.id)), z = (0, a.bG)([f.A], () => f.A.getGuildMemberProfile(e.id, n.id)), X = v.Ay.canUsePremiumProfileCustomization(e), W = (0, u.z5)(s, F?.avatar), K = (0, u.Ac)(U, z?.banner), Z = (0, R.lS)(w, z?.themeColors), q = z?.bio ?? "", J = z?.pronouns ?? "", Q = (e, t, n) => {
        n(e ?? (null != t ? null : void 0))
    };
    return (0, i.jsxs)("div", {
        className: G.Q,
        children: [(0, i.jsx)(y.A, {
            errors: H?.nick ?? Y?.nick,
            username: j.Ay.getName(e),
            pendingNick: M,
            currentNick: F?.nick,
            user: e,
            guild: n
        }, "nick"), (0, i.jsx)(T.A, {
            sectionTitle: D.intl.string(D.t["+T3RI/"]),
            errors: H?.pronouns,
            onPronounsChange: e => {
                (0, R.d7)(e, J)
            },
            pendingPronouns: V,
            currentPronouns: J
        }, "pronouns"), (0, i.jsxs)(P.A, {
            user: e,
            showOverlay: !X,
            children: [(0, i.jsx)(m.A, {
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
                showRemoveAvatarButton: W,
                onAvatarChange: e => Q(e, F?.avatar, O.zq),
                errors: H?.avatar,
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
            }, "decoration"), !t && (0, i.jsx)(A.A, {
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
            }, "nameplate"), (0, i.jsx)(x.A, {
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
            }, "effect"), (0, i.jsx)(p.A, {
                showRemoveBannerButton: K,
                errors: H?.banner,
                onBannerChange: e => Q(e, z?.banner, O.Iz),
                guildId: n?.id,
                disabled: !X
            }, "banner"), (0, i.jsx)(E.A, {
                user: e,
                pendingAvatarSrc: B,
                pendingColors: w,
                onThemeColorsChange: e => {
                    (0, R.wx)(e, z?.themeColors)
                },
                guildId: n?.id,
                showResetThemeButton: Z
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
                onBioChange: e => (0, R.Rn)(e, q),
                errors: H?.bio ?? Y?.bio,
                pendingBio: k,
                currentBio: q,
                disabled: !X
            }, "about")]
        })]
    })
}