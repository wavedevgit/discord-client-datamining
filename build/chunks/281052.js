/** chunk id: 281052 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(311907),
    a = n(990078),
    o = n(397927),
    d = n(81400),
    c = n(757036),
    u = n(919395),
    _ = n(124064),
    m = n(200790),
    g = n(230084),
    A = n(180020),
    h = n(431982),
    x = n(730588),
    p = n(164599),
    T = n(63675),
    E = n(546849),
    C = n(101058),
    S = n(836602),
    f = n(622543),
    N = n(696451),
    b = n(71393),
    I = n(287809),
    v = n(927578),
    j = n(427262),
    O = n(159001),
    y = n(684732),
    R = n(168917),
    P = n(746706),
    D = n(788868),
    L = n(985018),
    M = n(745496);

function G() {
    let e = (0, r.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
        }),
        t = (0, c.L)(D.PremiumTypes.TIER_2),
        n = (0, r.bG)([S.A, b.A], () => b.A.getGuild(S.A.selectedGuildId));
    l()(null != n, "guild should not be null");
    let {
        pendingAvatar: s,
        pendingNickname: G,
        pendingBanner: U,
        pendingBio: k,
        pendingPronouns: V,
        pendingThemeColors: w,
        errors: B
    } = (0, r.cf)([S.A], () => ({
        ...S.A.getPendingChanges(n.id),
        errors: S.A.getErrors(n.id)
    })), H = (0, C.V7)({
        userId: e.id,
        image: s
    }), F = (0, d.EC)(n.id), Y = (0, r.bG)([N.Ay], () => null == n.id ? null : N.Ay.getMember(n.id, e.id)), z = (0, r.bG)([f.A], () => f.A.getGuildMemberProfile(e.id, n.id)), X = v.Ay.canUsePremiumProfileCustomization(e), W = (0, u.z5)(s, Y?.avatar), K = (0, u.Ac)(U, z?.banner), Z = (0, y.lS)(w, z?.themeColors), q = z?.bio ?? "", J = z?.pronouns ?? "", Q = (e, t, n) => {
        n(e ?? (null != t ? null : void 0))
    };
    return (0, i.jsxs)("div", {
        className: M.Q,
        children: [(0, i.jsx)(R.A, {
            errors: B?.nick ?? F?.nick,
            username: j.Ay.getName(e),
            pendingNick: G,
            currentNick: Y?.nick,
            user: e,
            guild: n
        }, "nick"), (0, i.jsx)(E.A, {
            sectionTitle: L.intl.string(L.t["+T3RI/"]),
            errors: B?.pronouns,
            onPronounsChange: e => {
                (0, y.d7)(e, J)
            },
            pendingPronouns: V,
            currentPronouns: J
        }, "pronouns"), (0, i.jsxs)(P.A, {
            user: e,
            showOverlay: !X,
            children: [(0, i.jsx)(g.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t.lqaIxI), (0, i.jsx)(a.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: M.a
                        })
                    })]
                }),
                showRemoveAvatarButton: W,
                onAvatarChange: e => Q(e, Y?.avatar, O.zq),
                errors: B?.avatar,
                guildId: n.id,
                disabled: !X
            }, "avatar"), (0, i.jsx)(m.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t["7v0T9P"]), (0, i.jsx)(a.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: M.a
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
                titleIcon: (0, i.jsx)(a.m, {
                    text: L.intl.string(L.t["5AFxuK"]),
                    children: (0, i.jsx)(o.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: M.a
                    })
                })
            }, "nameplate"), (0, i.jsx)(p.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t.wR5wOo), (0, i.jsx)(a.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: M.a
                        })
                    })]
                }),
                user: e,
                guild: n
            }, "effect"), (0, i.jsx)(x.A, {
                showRemoveBannerButton: K,
                errors: B?.banner,
                onBannerChange: e => Q(e, z?.banner, O.Iz),
                guildId: n?.id,
                disabled: !X
            }, "banner"), (0, i.jsx)(T.A, {
                user: e,
                pendingAvatarSrc: H,
                pendingColors: w,
                onThemeColorsChange: e => {
                    (0, y.wx)(e, z?.themeColors)
                },
                guildId: n?.id,
                showResetThemeButton: Z
            }), (0, i.jsx)(_.A, {
                placeholder: L.intl.string(L.t["/7NKgv"]),
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t.ZzAR2Y), (0, i.jsx)(a.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: M.a
                        })
                    })]
                }),
                onBioChange: e => (0, y.Rn)(e, q),
                errors: B?.bio ?? F?.bio,
                pendingBio: k,
                currentBio: q,
                disabled: !X
            }, "about")]
        })]
    })
}