/** chunk id: 112007 params = (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(821418),
    r = n(665260),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(846293),
    u = n(793574),
    m = n(688810),
    _ = n(290331),
    h = n(517905),
    p = n(986268),
    g = n(21599),
    A = n(529200),
    x = n(95701),
    f = n(696451),
    C = n(860689),
    E = n(505417),
    I = n(168428),
    v = n(652215),
    b = n(985018),
    T = n(366228);

function N(e) {
    let t, N, S, {
            onTransitionToInviteChannel: y,
            onAcceptInstantInvite: j,
            guild: L,
            invite: R,
            message: P,
            currentUserId: D
        } = e,
        M = D === P.author.id,
        {
            channel: w,
            approximate_member_count: O,
            approximate_presence_count: k
        } = R,
        U = R.state === v.elq.ACCEPTING,
        B = null != w ? (0, x.OY)(w) : null,
        G = null != L,
        F = null != B,
        H = null != B && B.isGuildStageVoice(),
        V = (0, r.Lt)(R.flags ?? 0, s.Q.IS_GUEST_INVITE),
        q = B?.isGuildVoiceOrThread() ?? !1,
        W = L?.features.has(v.GuildFeatures.HUB) ?? !1,
        Y = L?.id,
        {
            analyticsLocations: z
        } = (0, m.Ay)(u.A.INVITE_EMBED),
        [Q, K] = l.useState(!1),
        J = l.useCallback(() => K(!1), []),
        X = l.useRef(null),
        Z = (0, a.bG)([f.Ay], () => _.A.canAcceptInvite([f.Ay], R)),
        $ = l.useCallback(() => {
            K(!0), (0, c.Pq)(Y, "show profile", z)
        }, [Y, z]),
        ee = l.useCallback(() => {
            let e = "noop";
            G ? (y(), e = "transition") : (j(), e = "accept"), (0, c.he)({
                invite: R,
                action: e,
                inviter_id: P.author.id,
                invite_message_id: P.id,
                invite_instance_id: (0, g._U)(R.code, P.id)
            }, z)
        }, [R, P, z, G, y, j]);
    if (null == L) {
        if (null == R.guild) return (0, i.jsx)(I.A, {});
        (L = C.DY(R.guild)).premiumTier = R.guild.premium_tier ?? v.TVA.NONE
    }
    let et = (0, E.l)({
        isVoiceChannel: q,
        isOwnInvite: M,
        isGuest: V,
        isHubGuild: W,
        isStage: H,
        isStream: !1
    });
    return N = (0, i.jsxs)("span", {
        className: T.FA,
        children: [(0, i.jsx)(h.A, {
            guildId: L.id,
            name: L.name,
            shouldShow: Q,
            onRequestClose: J,
            targetElementRef: X,
            children: () => (0, i.jsx)(A.A.GuildName, {
                guild: L,
                ref: X
            })
        }), (0, i.jsx)("span", {
            className: T.E3,
            children: (0, i.jsx)(p.A, {
                guild: L,
                isBannerVisible: !1,
                disableBoostClick: !0
            })
        })]
    }), V && (S = (0, i.jsx)(o.m, {
        asContainer: !0,
        text: b.intl.string(b.t["/FeTK6"]),
        children: (0, i.jsx)(d.mir, {
            size: "md",
            color: "currentColor",
            className: T.G
        })
    })), q ? (N = (0, i.jsx)(A.A.Channel, {
        channel: B
    }), t = (0, i.jsxs)("span", {
        className: T.FA,
        children: [b.intl.format(b.t["2wimj5"], {
            guildName: L.name
        }), (0, i.jsx)("span", {
            className: T.E3,
            children: (0, i.jsx)(p.A, {
                guild: L,
                isBannerVisible: !1
            })
        })]
    })) : null != O && O >= 5 || null != k && k > 0 ? t = (0, i.jsx)(A.A.Data, {
        members: O,
        membersOnline: k
    }) : F && (t = (0, i.jsx)(A.A.Channel, {
        channel: B,
        guild: L
    })), (0, i.jsxs)(A.A, {
        children: [(0, i.jsx)(A.A.GuildSplash, {
            guild: L
        }), (0, i.jsx)(A.A.Header, {
            text: et,
            extra: S
        }), (0, i.jsxs)(A.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: T.iH,
                children: [(0, i.jsx)(A.A.Icon, {
                    guild: L
                }), (0, i.jsx)(A.A.Info, {
                    title: N,
                    onClick: $,
                    children: t
                })]
            }), (0, i.jsx)("div", {
                className: T.UD,
                children: (0, i.jsx)(d.Button, {
                    onClick: ee,
                    loading: U,
                    variant: "active",
                    fullWidth: q,
                    disabled: !Z,
                    text: q ? H ? b.intl.string(b.t["7vb2cc"]) : b.intl.string(b.t.gpqgah) : G ? b.intl.string(b.t.cEnaWx) : b.intl.string(b.t.XpeFYr)
                })
            })]
        }), L.features.has(v.GuildFeatures.HUB) && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: T.me
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: b.intl.format(b.t["/o1IfA"], {
                    onClick: () => (0, d.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("98363").then(n.bind(n, 780086));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                })
            })]
        })]
    })
}