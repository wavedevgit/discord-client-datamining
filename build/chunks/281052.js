/** Chunk was on web.js **/
/** chunk id: 281052, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(397927),
    c = n(81400),
    u = n(757036),
    d = n(919395),
    f = n(124064),
    p = n(200790),
    _ = n(230084),
    h = n(180020),
    m = n(431982),
    g = n(730588),
    E = n(164599),
    y = n(63675),
    b = n(546849),
    O = n(101058),
    v = n(622543),
    A = n(696451),
    I = n(287809),
    S = n(927578),
    T = n(427262),
    C = n(159001),
    N = n(833336),
    w = n(684732),
    R = n(168917),
    P = n(746706),
    D = n(788868),
    x = n(985018),
    L = n(453814);

function j(e) {
    var t, n, i, j;
    let {
        guild: M
    } = e, k = (0, s.bG)([I.default], () => {
        let e = I.default.getCurrentUser();
        return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
    }), U = (0, u.L)(D.PremiumTypes.TIER_2), {
        pendingAvatar: G,
        pendingNickname: V,
        pendingBanner: F,
        pendingBio: B,
        pendingPronouns: H,
        pendingThemeColors: Y,
        errors: W,
        guild: K
    } = (0, s.cf)([N.A], () => {
        let {
            pendingAvatar: e,
            pendingNickname: t,
            pendingBio: n,
            pendingPronouns: r,
            pendingBanner: i,
            pendingThemeColors: a
        } = N.A.getAllPending();
        return {
            pendingAvatar: e,
            pendingNickname: t,
            pendingBanner: i,
            pendingBio: n,
            pendingPronouns: r,
            pendingThemeColors: a,
            errors: N.A.getErrors(),
            guild: N.A.getGuild()
        }
    }), z = (0, O.V7)({
        userId: k.id,
        image: G
    }), q = null != M ? M : K;
    a()(null != q, "guild should not be null");
    let Z = (0, c.EC)(q.id),
        X = (0, s.bG)([A.Ay], () => null == q.id ? null : A.Ay.getMember(q.id, k.id)),
        Q = (0, s.bG)([v.A], () => v.A.getGuildMemberProfile(k.id, q.id)),
        J = S.Ay.canUsePremiumProfileCustomization(k),
        $ = (0, d.z5)(G, null == X ? void 0 : X.avatar),
        ee = (0, d.Ac)(F, null == Q ? void 0 : Q.banner),
        et = (0, w.lS)(Y, null == Q ? void 0 : Q.themeColors),
        en = null != (t = null == Q ? void 0 : Q.bio) ? t : "",
        er = null != (n = null == Q ? void 0 : Q.pronouns) ? n : "",
        ei = (e, t, n) => {
            let r = null != t ? null : void 0;
            n(null != e ? e : r)
        },
        ea = e => ei(e, null == Q ? void 0 : Q.banner, C.Iz),
        es = e => ei(e, null == X ? void 0 : X.avatar, C.zq);
    return (0, r.jsxs)("div", {
        className: L.Q,
        children: [(0, r.jsx)(R.A, {
            errors: null != (i = null == W ? void 0 : W.nick) ? i : null == Z ? void 0 : Z.nick,
            username: T.Ay.getName(k),
            pendingNick: V,
            currentNick: null == X ? void 0 : X.nick,
            user: k,
            guild: q
        }, "nick"), (0, r.jsx)(b.A, {
            sectionTitle: x.intl.string(x.t["+T3RI/"]),
            errors: null == W ? void 0 : W.pronouns,
            onPronounsChange: e => {
                (0, w.d7)(e, er)
            },
            pendingPronouns: H,
            currentPronouns: er
        }, "pronouns"), (0, r.jsxs)(P.A, {
            user: k,
            showOverlay: !J,
            children: [(0, r.jsx)(_.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [x.intl.string(x.t.lqaIxI), (0, r.jsx)(o.m, {
                        text: x.intl.string(x.t["5AFxuK"]),
                        children: (0, r.jsx)(l.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: L.a
                        })
                    })]
                }),
                showRemoveAvatarButton: $,
                onAvatarChange: es,
                errors: null == W ? void 0 : W.avatar,
                guildId: q.id,
                disabled: !J
            }, "avatar"), (0, r.jsx)(p.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [x.intl.string(x.t["7v0T9P"]), (0, r.jsx)(o.m, {
                        text: x.intl.string(x.t["5AFxuK"]),
                        children: (0, r.jsx)(l.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: L.a
                        })
                    })]
                }),
                user: k,
                guild: q
            }, "decoration"), !U && (0, r.jsx)(h.A, {
                user: k,
                guildId: q.id
            }), (0, r.jsx)(m.A, {
                user: k,
                guild: q,
                titleIcon: (0, r.jsx)(o.m, {
                    text: x.intl.string(x.t["5AFxuK"]),
                    children: (0, r.jsx)(l.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: L.a
                    })
                })
            }, "nameplate"), (0, r.jsx)(E.A, {
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [x.intl.string(x.t.wR5wOo), (0, r.jsx)(o.m, {
                        text: x.intl.string(x.t["5AFxuK"]),
                        children: (0, r.jsx)(l.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: L.a
                        })
                    })]
                }),
                user: k,
                guild: q
            }, "effect"), (0, r.jsx)(g.A, {
                showRemoveBannerButton: ee,
                errors: null == W ? void 0 : W.banner,
                onBannerChange: ea,
                guildId: null == q ? void 0 : q.id,
                disabled: !J
            }, "banner"), (0, r.jsx)(y.A, {
                user: k,
                pendingAvatarSrc: z,
                pendingColors: Y,
                onThemeColorsChange: e => {
                    (0, w.wx)(e, null == Q ? void 0 : Q.themeColors)
                },
                guildId: null == q ? void 0 : q.id,
                showResetThemeButton: et
            }), (0, r.jsx)(f.A, {
                placeholder: x.intl.string(x.t["/7NKgv"]),
                sectionTitle: (0, r.jsxs)(r.Fragment, {
                    children: [x.intl.string(x.t.jGoPJT), (0, r.jsx)(o.m, {
                        text: x.intl.string(x.t["5AFxuK"]),
                        children: (0, r.jsx)(l.tvc, {
                            size: "md",
                            color: "currentColor",
                            className: L.a
                        })
                    })]
                }),
                onBioChange: e => (0, w.Rn)(e, en),
                errors: null != (j = null == W ? void 0 : W.bio) ? j : null == Z ? void 0 : Z.bio,
                pendingBio: B,
                currentBio: en,
                disabled: !J
            }, "about")]
        })]
    })
}