/** chunk id: 112007 params = (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(821418),
    a = n(665260),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(846293),
    u = n(793574),
    _ = n(688810),
    m = n(290331),
    h = n(517905),
    p = n(986268),
    g = n(529200),
    A = n(95701),
    x = n(696451),
    f = n(860689),
    C = n(505417),
    I = n(168428),
    E = n(652215),
    v = n(985018),
    b = n(563111);

function T(e) {
    let t, T, S, {
            onTransitionToInviteChannel: y,
            onAcceptInstantInvite: N,
            guild: j,
            invite: L,
            message: R,
            currentUserId: P
        } = e,
        M = P === R.author.id,
        {
            channel: D,
            approximate_member_count: w,
            approximate_presence_count: O
        } = L,
        k = L.state === E.elq.ACCEPTING,
        U = null != D ? (0, A.OY)(D) : null,
        G = null != j,
        B = null != U,
        F = null != U && U.isGuildStageVoice(),
        H = (0, a.Lt)(L.flags ?? 0, l.Q.IS_GUEST_INVITE),
        V = U?.isGuildVoiceOrThread() ?? !1,
        W = j?.features.has(E.GuildFeatures.HUB) ?? !1,
        q = j?.id,
        {
            analyticsLocations: Y
        } = (0, _.Ay)(u.A.INVITE_EMBED),
        [z, Q] = r.useState(!1),
        K = r.useCallback(() => Q(!1), []),
        J = r.useRef(null),
        X = (0, s.bG)([x.Ay], () => m.A.canAcceptInvite([x.Ay], L)),
        Z = r.useCallback(() => {
            Q(!0), (0, c.Pq)(q, "show profile", Y)
        }, [q, Y]),
        $ = r.useCallback(() => {
            let e = "noop";
            G ? (y(), e = "transition") : (N(), e = "accept"), (0, c.he)({
                invite: L,
                action: e,
                inviter_id: R.author.id,
                invite_message_id: R.id
            }, Y)
        }, [L, R, Y, G, y, N]);
    if (null == j) {
        if (null == L.guild) return (0, i.jsx)(I.A, {});
        (j = f.DY(L.guild)).premiumTier = L.guild.premium_tier ?? E.TVA.NONE
    }
    let ee = (0, C.l)({
        isVoiceChannel: V,
        isOwnInvite: M,
        isGuest: H,
        isHubGuild: W,
        isStage: F,
        isStream: !1
    });
    return T = (0, i.jsxs)("span", {
        className: b.FA,
        children: [(0, i.jsx)(h.A, {
            guildId: j.id,
            name: j.name,
            shouldShow: z,
            onRequestClose: K,
            targetElementRef: J,
            children: () => (0, i.jsx)(g.A.GuildName, {
                guild: j,
                ref: J
            })
        }), (0, i.jsx)("span", {
            className: b.E3,
            children: (0, i.jsx)(p.A, {
                guild: j,
                isBannerVisible: !1,
                disableBoostClick: !0
            })
        })]
    }), H && (S = (0, i.jsx)(o.m, {
        asContainer: !0,
        text: v.intl.string(v.t["/FeTK6"]),
        children: (0, i.jsx)(d.mir, {
            size: "md",
            color: "currentColor",
            className: b.G
        })
    })), V ? (T = (0, i.jsx)(g.A.Channel, {
        channel: U
    }), t = (0, i.jsxs)("span", {
        className: b.FA,
        children: [v.intl.format(v.t["2wimj5"], {
            guildName: j.name
        }), (0, i.jsx)("span", {
            className: b.E3,
            children: (0, i.jsx)(p.A, {
                guild: j,
                isBannerVisible: !1
            })
        })]
    })) : null != w && w >= 5 || null != O && O > 0 ? t = (0, i.jsx)(g.A.Data, {
        members: w,
        membersOnline: O
    }) : B && (t = (0, i.jsx)(g.A.Channel, {
        channel: U,
        guild: j
    })), (0, i.jsxs)(g.A, {
        children: [(0, i.jsx)(g.A.GuildSplash, {
            guild: j
        }), (0, i.jsx)(g.A.Header, {
            text: ee,
            extra: S
        }), (0, i.jsxs)(g.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: b.iH,
                children: [(0, i.jsx)(g.A.Icon, {
                    guild: j
                }), (0, i.jsx)(g.A.Info, {
                    title: T,
                    onClick: Z,
                    children: t
                })]
            }), (0, i.jsx)("div", {
                className: b.UD,
                children: (0, i.jsx)(d.Button, {
                    onClick: $,
                    loading: k,
                    variant: "active",
                    fullWidth: V,
                    disabled: !X,
                    text: V ? F ? v.intl.string(v.t["7vb2cc"]) : v.intl.string(v.t.gpqgah) : G ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr)
                })
            })]
        }), j.features.has(E.GuildFeatures.HUB) && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: b.me
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: v.intl.format(v.t["/o1IfA"], {
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