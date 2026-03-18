/** chunk id: 37205 params = (module,exports,require) **/
n.d(t, {
    A: () => U
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(735438),
    c = n.n(d),
    u = n(311907),
    _ = n(397927),
    m = n(846293),
    h = n(956793),
    p = n(401843),
    g = n(775602),
    A = n(104171),
    x = n(793574),
    f = n(688810),
    C = n(450149),
    I = n(290331),
    E = n(21119),
    v = n(95701),
    b = n(734057),
    T = n(696451),
    y = n(71393),
    S = n(576705),
    N = n(607567),
    j = n(860689),
    L = n(422844),
    R = n(72951),
    P = n(453178),
    w = n(182912),
    D = n(341678),
    M = n(652215),
    k = n(985018),
    O = n(519934);

function U(e) {
    let {
        invite: t,
        currentUserId: n,
        message: a,
        guild: s,
        onTransitionToInviteChannel: d,
        onAcceptInstantInvite: C
    } = e, U = (0, L.xR)("VoiceInviteEmbed"), G = s ?? null;
    null == G && null != t.guild && (G = j.DY(t.guild));
    let F = null != t.channel ? (0, v.OY)(t.channel) : null;
    o()(null != G, "Voice Invite Embed must be used in context of a guild."), o()(null != F, "Voice Invite Embed must be able to resolve an invite channel.");
    let H = (0, u.bG)([S.A, b.A], () => {
            let e = b.A.getChannel(F.id);
            return null == e || S.A.canBasicChannel(M.hVb.VIEW_CHANNEL, e)
        }, [F.id]),
        V = (0, u.bG)([N.Ay], () => H ? N.Ay.getVoiceStatesForChannelAlt(F.id, G.id) : [], [F.id, G.id, H]),
        {
            label: q,
            sublabel: W
        } = function(e) {
            let {
                currentUserId: t,
                author: n,
                voiceStates: i
            } = e, r = n.id === t, a = i.length > 0, l = i.some(e => e.user?.id === n.id), s = i.length - !!l;
            return a ? r ? {
                label: l ? k.intl.format(k.t["2RWMFV"], {
                    othersCount: s
                }) : k.intl.format(k.t.IWXzHV, {
                    othersCount: s
                })
            } : {
                label: l ? k.intl.format(k.t.Da7tZx, {
                    othersCount: s
                }) : k.intl.format(k.t["3VbQvv"], {
                    othersCount: s
                })
            } : {
                label: r ? k.intl.string(k.t.DVDvCD) : k.intl.string(k.t.TY77rq),
                sublabel: k.intl.string(k.t.wM2WTM)
            }
        }({
            currentUserId: n,
            author: a.author,
            voiceStates: V
        }),
        Y = (0, u.bG)([y.A], () => null != y.A.getGuild(G.id), [G.id]),
        z = (0, u.bG)([T.Ay], () => I.A.canAcceptInvite([T.Ay], t), [t]),
        Q = t.state === M.elq.ACCEPTING,
        {
            analyticsLocations: K
        } = (0, f.Ay)(x.A.INVITE_EMBED),
        X = r.useCallback(() => {
            let e = Y ? "transition" : "accept";
            Y ? d() : C(), (0, m.he)({
                invite: t,
                action: e,
                inviter_id: a.author.id,
                invite_message_id: a.id
            }, K)
        }, [t, a, K, Y, d, C]),
        J = (0, D.A)({
            invite: t,
            message: a,
            voiceStates: V,
            guildId: G.id,
            channelId: F.id
        }),
        Z = U.activityPreviewEnabled && null != J,
        $ = r.useCallback(() => {
            null != J && (Y ? (h.default.selectVoiceChannel(J.channelId), (0, p.Nl)(J)) : C(), (0, m.he)({
                invite: t,
                action: Y ? "watch" : "accept",
                inviter_id: a.author.id,
                invite_message_id: a.id
            }, K))
        }, [J, Y, t, a, K, C]),
        ee = (0, u.bG)([g.A], () => g.A.useReducedMotion),
        et = r.useRef(null),
        en = r.useRef(null),
        [ei, er] = r.useState({
            percentX: 0,
            percentY: 0,
            proximity: 0
        }),
        ea = r.useMemo(() => c().throttle(er, 20), [er]);
    r.useEffect(() => () => ea.cancel(), [ea]);
    let el = r.useCallback(e => {
            if (ee) return;
            let t = et.current?.getBoundingClientRect();
            if (null == t) return;
            let n = (e.clientX - t.left) / t.width * 2 - 1,
                i = (e.clientY - t.top) / t.height * 2 - 1,
                r = 0,
                a = en.current?.getBoundingClientRect();
            if (null != a) {
                let n = a.left + a.width / 2,
                    i = a.top + a.height / 2,
                    l = e.clientX - n,
                    s = e.clientY - i;
                r = 2 * Math.exp(-Math.sqrt(l * l + s * s) / (.2 * Math.sqrt(t.width ** 2 + t.height ** 2)))
            }
            ea({
                percentX: n,
                percentY: i,
                proximity: r
            })
        }, [ee, ea]),
        es = r.useCallback(() => {
            ea.cancel(), er({
                percentX: 0,
                percentY: 0,
                proximity: 0
            })
        }, [ea]),
        eo = (0, u.bG)([E.A], () => {
            let e = a.author.id,
                t = V.map(e => e.user),
                n = t.find(t => t.id === e),
                i = t.filter(t => t.id !== e).sort((e, t) => {
                    let n = E.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                    return (E.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n
                });
            return null != n ? [n, ...i] : i
        }, [V, a.author.id]);
    return (0, i.jsxs)("div", {
        ref: et,
        className: l()(O.kL, {
            [O.VD]: Z
        }),
        onMouseMove: el,
        onMouseLeave: es,
        children: [(0, i.jsx)("div", {
            className: O.ys
        }), (0, i.jsx)("div", {
            className: O.r$,
            style: {
                "--custom-number-of-dots": 24
            }
        }), Z ? (0, i.jsx)(B, {
            className: O.tB,
            stream: J
        }) : null, (0, i.jsxs)("div", {
            className: O.rf,
            children: [(0, i.jsxs)("div", {
                className: O.Qs,
                children: [(0, i.jsx)(R.A, {
                    channel: F,
                    guild: G,
                    onClick: d
                }), (0, i.jsxs)("div", {
                    className: O.WD,
                    children: [Z ? (0, i.jsx)(A.Ay, {
                        className: O.WM,
                        showDefaultAvatarsForNullUsers: !0,
                        guildId: F.guild_id,
                        users: eo,
                        count: V.length,
                        max: 3
                    }) : null, (0, i.jsx)(_.Text, {
                        variant: "text-md/medium",
                        children: q
                    }), null != W ? (0, i.jsx)(_.Text, {
                        variant: "text-sm/normal",
                        className: O.$B,
                        children: W
                    }) : null]
                })]
            }), Z ? (0, i.jsx)(P.A, {
                stream: J,
                currentUserId: n,
                onClick: $,
                className: O.Rh
            }) : (0, i.jsx)(w.A, {
                voiceStates: V,
                guildId: G.id,
                ref: en,
                motion: ei
            })]
        }), (0, i.jsx)("div", {
            className: O.xk,
            children: (0, i.jsx)(_.Button, {
                onClick: X,
                loading: Q,
                variant: "active",
                fullWidth: !0,
                disabled: !z,
                text: k.intl.string(k.t.gpqgah)
            })
        })]
    })
}

function B(e) {
    let {
        className: t,
        stream: n
    } = e, {
        previewUrl: r,
        isLoading: a
    } = (0, C.A)(n.guildId, n.channelId, n.ownerId), s = null != r && !a;
    return (0, i.jsx)("div", {
        className: l()(t, O.rr, {
            [O.pc]: !s
        }),
        style: {
            "--custom-bg-url": s ? `url(${r})` : "unset"
        },
        children: (0, i.jsx)("div", {
            className: O.bW
        })
    })
}