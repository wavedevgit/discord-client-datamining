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
    m = n(200790),
    g = n(230084),
    A = n(180020),
    x = n(431982),
    h = n(730588),
    p = n(164599),
    T = n(63675),
    E = n(546849),
    S = n(101058),
    f = n(836602),
    C = n(622543),
    b = n(696451),
    N = n(71393),
    I = n(287809),
    v = n(927578),
    j = n(427262),
    y = n(159001),
    R = n(684732),
    O = n(168917),
    D = n(746706),
    P = n(788868),
    L = n(985018),
    G = n(453814);

function M() {
    let e = (0, a.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
        }),
        t = (0, c.L)(P.PremiumTypes.TIER_2),
        n = (0, a.bG)([f.A, N.A], () => N.A.getGuild(f.A.selectedGuildId));
    l()(null != n, "guild should not be null");
    let {
        pendingAvatar: s,
        pendingNickname: M,
        pendingBanner: U,
        pendingBio: k,
        pendingPronouns: V,
        pendingThemeColors: w,
        errors: B
    } = (0, a.cf)([f.A], () => ({
        ...f.A.getPendingChanges(n.id),
        errors: f.A.getErrors(n.id)
    })), H = (0, S.V7)({
        userId: e.id,
        image: s
    }), F = (0, d.EC)(n.id), Y = (0, a.bG)([b.Ay], () => null == n.id ? null : b.Ay.getMember(n.id, e.id)), z = (0, a.bG)([C.A], () => C.A.getGuildMemberProfile(e.id, n.id)), X = v.Ay.canUsePremiumProfileCustomization(e), W = (0, u.z5)(s, Y?.avatar), K = (0, u.Ac)(U, z?.banner), Z = (0, R.lS)(w, z?.themeColors), q = z?.bio ?? "", J = z?.pronouns ?? "", Q = (e, t, n) => {
        n(e ?? (null != t ? null : void 0))
    };
    return (0, i.jsxs)("div", {
        className: G.Q,
        children: [(0, i.jsx)(O.A, {
            errors: B?.nick ?? F?.nick,
            username: j.Ay.getName(e),
            pendingNick: M,
            currentNick: Y?.nick,
            user: e,
            guild: n
        }, "nick"), (0, i.jsx)(E.A, {
            sectionTitle: L.intl.string(L.t["+T3RI/"]),
            errors: B?.pronouns,
            onPronounsChange: e => {
                (0, R.d7)(e, J)
            },
            pendingPronouns: V,
            currentPronouns: J
        }, "pronouns"), (0, i.jsxs)(D.A, {
            user: e,
            showOverlay: !X,
            children: [(0, i.jsx)(g.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t.lqaIxI), (0, i.jsx)(r.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: G.a
                        })
                    })]
                }),
                showRemoveAvatarButton: W,
                onAvatarChange: e => Q(e, Y?.avatar, y.zq),
                errors: B?.avatar,
                guildId: n.id,
                disabled: !X
            }, "avatar"), (0, i.jsx)(m.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t["7v0T9P"]), (0, i.jsx)(r.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
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
            }), (0, i.jsx)(x.A, {
                user: e,
                guild: n,
                titleIcon: (0, i.jsx)(r.m, {
                    text: L.intl.string(L.t["5AFxuK"]),
                    children: (0, i.jsx)(o.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: G.a
                    })
                })
            }, "nameplate"), (0, i.jsx)(p.A, {
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t.wR5wOo), (0, i.jsx)(r.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
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
                showRemoveBannerButton: K,
                errors: B?.banner,
                onBannerChange: e => Q(e, z?.banner, y.Iz),
                guildId: n?.id,
                disabled: !X
            }, "banner"), (0, i.jsx)(T.A, {
                user: e,
                pendingAvatarSrc: H,
                pendingColors: w,
                onThemeColorsChange: e => {
                    (0, R.wx)(e, z?.themeColors)
                },
                guildId: n?.id,
                showResetThemeButton: Z
            }), (0, i.jsx)(_.A, {
                placeholder: L.intl.string(L.t["/7NKgv"]),
                sectionTitle: (0, i.jsxs)(i.Fragment, {
                    children: [L.intl.string(L.t.ZzAR2Y), (0, i.jsx)(r.m, {
                        text: L.intl.string(L.t["5AFxuK"]),
                        children: (0, i.jsx)(o.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: G.a
                        })
                    })]
                }),
                onBioChange: e => (0, R.Rn)(e, q),
                errors: B?.bio ?? F?.bio,
                pendingBio: k,
                currentBio: q,
                disabled: !X
            }, "about")]
        })]
    })
}