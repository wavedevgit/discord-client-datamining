/** chunk id: 37205 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(284009),
    o = n.n(s),
    d = n(735438),
    c = n.n(d),
    u = n(311907),
    _ = n(3026),
    m = n(397927),
    h = n(846293),
    p = n(956793),
    g = n(401843),
    A = n(775602),
    x = n(793574),
    f = n(688810),
    C = n(450149),
    I = n(290331),
    E = n(281489),
    b = n(378570),
    v = n(21119),
    T = n(95701),
    y = n(734057),
    S = n(696451),
    N = n(71393),
    j = n(576705),
    L = n(607567),
    R = n(860689),
    P = n(422844),
    w = n(72951),
    M = n(453178),
    D = n(182912),
    k = n(341678),
    O = n(652215),
    U = n(985018),
    B = n(682524);

function G(e) {
    let {
        invite: t,
        currentUserId: n,
        message: r,
        guild: s,
        onTransitionToInviteChannel: d,
        onAcceptInstantInvite: C
    } = e, G = (0, P.xR)("VoiceInviteEmbed"), H = s ?? null;
    null == H && null != t.guild && (H = R.DY(t.guild));
    let V = null != t.channel ? (0, T.OY)(t.channel) : null;
    o()(null != H, "Voice Invite Embed must be used in context of a guild."), o()(null != V, "Voice Invite Embed must be able to resolve an invite channel.");
    let q = (0, u.bG)([j.A, y.A], () => {
            let e = y.A.getChannel(V.id);
            return null == e || j.A.canBasicChannel(O.hVb.VIEW_CHANNEL, e)
        }, [V.id]),
        W = (0, u.bG)([L.Ay], () => q ? L.Ay.getVoiceStatesForChannelAlt(V.id, H.id) : [], [V.id, H.id, q]),
        {
            label: z,
            sublabel: Y
        } = function(e) {
            let {
                currentUserId: t,
                author: n,
                voiceStates: i
            } = e, a = n.id === t, r = i.length > 0, l = i.length;
            return r ? {
                label: a ? U.intl.format(U.t["2RWMFV"], {
                    othersCount: l
                }) : U.intl.format(U.t.Da7tZx, {
                    othersCount: l
                })
            } : {
                label: a ? U.intl.string(U.t.DVDvCD) : U.intl.string(U.t.TY77rq),
                sublabel: U.intl.string(U.t.wM2WTM)
            }
        }({
            currentUserId: n,
            author: r.author,
            voiceStates: W
        }),
        Q = (0, u.bG)([N.A], () => null != N.A.getGuild(H.id), [H.id]),
        K = (0, u.bG)([S.Ay], () => I.A.canAcceptInvite([S.Ay], t), [t]),
        J = t.state === O.elq.ACCEPTING,
        {
            analyticsLocations: X
        } = (0, f.Ay)(x.A.INVITE_EMBED),
        Z = a.useCallback(() => {
            let e = Q ? "transition" : "accept";
            Q ? d() : C(), (0, h.he)({
                invite: t,
                action: e,
                inviter_id: r.author.id,
                invite_message_id: r.id
            }, X)
        }, [t, r, X, Q, d, C]),
        $ = a.useCallback(() => {
            Q ? (0, b.iN)(V.id) : C({
                autoJoin: !1
            })
        }, [V.id, Q, C]),
        ee = (0, k.A)({
            invite: t,
            message: r,
            voiceStates: W,
            guildId: H.id,
            channelId: V.id
        }),
        et = G.activityPreviewEnabled && null != ee,
        en = a.useCallback(() => {
            null != ee && (Q ? (p.default.selectVoiceChannel(ee.channelId), (0, g.Nl)(ee)) : C(), (0, h.he)({
                invite: t,
                action: Q ? "watch" : "accept",
                inviter_id: r.author.id,
                invite_message_id: r.id
            }, X))
        }, [ee, Q, t, r, X, C]),
        ei = (0, u.bG)([A.A], () => A.A.useReducedMotion),
        ea = a.useRef(null),
        er = a.useRef(null),
        [el, es] = a.useState({
            percentX: 0,
            percentY: 0,
            proximity: 0
        }),
        eo = a.useMemo(() => c().throttle(es, 20), [es]);
    a.useEffect(() => () => eo.cancel(), [eo]);
    let ed = a.useCallback(e => {
            if (ei) return;
            let t = ea.current?.getBoundingClientRect();
            if (null == t) return;
            let n = (e.clientX - t.left) / t.width * 2 - 1,
                i = (e.clientY - t.top) / t.height * 2 - 1,
                a = 0,
                r = er.current?.getBoundingClientRect();
            if (null != r) {
                let n = r.left + r.width / 2,
                    i = r.top + r.height / 2,
                    l = e.clientX - n,
                    s = e.clientY - i;
                a = 2 * Math.exp(-Math.sqrt(l * l + s * s) / (.2 * Math.sqrt(t.width ** 2 + t.height ** 2)))
            }
            eo({
                percentX: n,
                percentY: i,
                proximity: a
            })
        }, [ei, eo]),
        ec = a.useCallback(() => {
            eo.cancel(), es({
                percentX: 0,
                percentY: 0,
                proximity: 0
            })
        }, [eo]),
        eu = (0, u.bG)([v.A], () => {
            let e = r.author.id,
                t = W.map(e => e.user),
                n = t.find(t => t.id === e),
                i = t.filter(t => t.id !== e).sort((e, t) => {
                    let n = v.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                    return (v.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n
                });
            return null != n ? [n, ...i] : i
        }, [W, r.author.id]);
    return (0, i.jsxs)("div", {
        ref: ea,
        className: l()(B.kL, {
            [B.VD]: et
        }),
        onMouseMove: ed,
        onMouseLeave: ec,
        children: [(0, i.jsx)("div", {
            className: B.ys
        }), (0, i.jsx)("div", {
            className: B.r$,
            style: {
                "--custom-number-of-dots": 24
            }
        }), et ? (0, i.jsx)(F, {
            className: B.tB,
            stream: ee
        }) : null, (0, i.jsxs)("div", {
            className: B.rf,
            children: [(0, i.jsxs)("div", {
                className: B.Qs,
                children: [(0, i.jsx)(w.A, {
                    channel: V,
                    guild: H,
                    onClick: $
                }), (0, i.jsxs)("div", {
                    className: B.WD,
                    children: [et ? (0, i.jsx)("div", {
                        className: B.WM,
                        children: (0, i.jsx)(E.A, {
                            guildId: H.id,
                            partySize: {
                                knownSize: eu.length,
                                unknownSize: 0,
                                totalSize: eu.length
                            },
                            maxAvatarsShown: 3,
                            members: eu
                        })
                    }) : null, (0, i.jsx)(m.Text, {
                        variant: "text-md/medium",
                        children: (0, i.jsx)(_.A, {
                            lineClamp: et ? 1 : 3,
                            children: z
                        })
                    }), null != Y ? (0, i.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        className: B.$B,
                        children: (0, i.jsx)(_.A, {
                            children: Y
                        })
                    }) : null]
                })]
            }), et ? (0, i.jsx)(M.A, {
                stream: ee,
                currentUserId: n,
                onClick: en,
                className: B.Rh
            }) : (0, i.jsx)("div", {
                className: B.RE,
                children: (0, i.jsx)(D.A, {
                    voiceStates: W,
                    guildId: H.id,
                    ref: er,
                    motion: el
                })
            })]
        }), (0, i.jsx)("div", {
            className: B.xk,
            children: (0, i.jsx)(m.Button, {
                onClick: Z,
                loading: J,
                variant: "active",
                fullWidth: !0,
                disabled: !K,
                text: U.intl.string(U.t.gpqgah)
            })
        })]
    })
}

function F(e) {
    let {
        className: t,
        stream: n
    } = e, {
        previewUrl: a,
        isLoading: r
    } = (0, C.A)(n.guildId, n.channelId, n.ownerId), s = null != a && !r;
    return (0, i.jsx)("div", {
        className: l()(t, B.rr, {
            [B.pc]: !s
        }),
        style: {
            "--custom-bg-url": s ? `url(${a})` : "unset"
        },
        children: (0, i.jsx)("div", {
            className: B.bW
        })
    })
}