/** chunk id: 37205 params = (module,exports,require) **/
n.d(t, {
    A: () => Y
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(735438),
    c = n.n(d),
    u = n(110259),
    m = n(311907),
    _ = n(3026),
    h = n(397927),
    p = n(846293),
    g = n(956793),
    A = n(401843),
    x = n(775602),
    f = n(793574),
    C = n(688810),
    E = n(139286),
    I = n(713517),
    v = n(450149),
    b = n(290331),
    T = n(21599),
    N = n(281489),
    S = n(378570),
    y = n(21119),
    j = n(95701),
    L = n(734057),
    R = n(696451),
    P = n(71393),
    D = n(576705),
    M = n(607567),
    w = n(954571),
    O = n(860689),
    k = n(422844),
    U = n(72951),
    B = n(453178),
    G = n(836629),
    F = n(182912),
    H = n(341678),
    V = n(652215),
    q = n(985018),
    W = n(682524);

function Y(e) {
    let {
        invite: t,
        currentUserId: n,
        message: s,
        guild: a,
        onTransitionToInviteChannel: d,
        onAcceptInstantInvite: I
    } = e, v = (0, k.xR)("VoiceInviteEmbed"), N = l.useRef(null), G = a ?? null;
    null == G && null != t.guild && (G = O.DY(t.guild));
    let Y = null != t.channel ? (0, j.OY)(t.channel) : null;
    o()(null != G, "Voice Invite Embed must be used in context of a guild."), o()(null != Y, "Voice Invite Embed must be able to resolve an invite channel.");
    let Q = (0, m.bG)([D.A, L.A], () => {
            let e = L.A.getChannel(Y.id);
            return null == e || D.A.canBasicChannel(V.hVb.VIEW_CHANNEL, e)
        }, [Y.id]),
        J = (0, m.bG)([M.Ay], () => Q ? M.Ay.getVoiceStatesForChannelAlt(Y.id, G.id) : [], [Y.id, G.id, Q]),
        {
            label: X,
            sublabel: Z
        } = function(e) {
            let {
                currentUserId: t,
                author: n,
                voiceStates: i
            } = e, l = n.id === t, s = i.length > 0, r = i.length;
            return s ? {
                label: l ? q.intl.format(q.t["2RWMFV"], {
                    othersCount: r
                }) : q.intl.format(q.t.Da7tZx, {
                    othersCount: r
                })
            } : {
                label: l ? q.intl.string(q.t.DVDvCD) : q.intl.string(q.t.TY77rq),
                sublabel: q.intl.string(q.t.wM2WTM)
            }
        }({
            currentUserId: n,
            author: s.author,
            voiceStates: J
        }),
        $ = (0, m.bG)([P.A], () => null != P.A.getGuild(G.id), [G.id]),
        ee = (0, m.bG)([R.Ay], () => b.A.canAcceptInvite([R.Ay], t), [t]),
        et = t.state === V.elq.ACCEPTING,
        {
            analyticsLocations: en
        } = (0, C.Ay)(f.A.INVITE_EMBED),
        ei = (0, T._U)(t.code, s.id),
        el = l.useCallback(() => {
            let e = $ ? "transition" : "accept";
            $ ? d() : I(), (0, p.he)({
                invite: t,
                action: e,
                inviter_id: s.author.id,
                invite_message_id: s.id,
                invite_instance_id: ei
            }, en)
        }, [t, s, en, ei, $, d, I]),
        es = l.useCallback(() => {
            $ ? (0, S.iN)(Y.id) : I({
                autoJoin: !1
            }), w.default.track(V.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                invite_code: t.code,
                invite_guild_id: G.id,
                invite_channel_id: Y.id,
                invite_instance_id: ei,
                is_member: $,
                location_stack: en
            })
        }, [Y.id, G.id, t.code, ei, $, en, I]),
        er = (0, H.A)({
            invite: t,
            message: s,
            voiceStates: J,
            guildId: G.id,
            channelId: Y.id
        }),
        ea = v.activityPreviewEnabled && null != er;
    (0, E.A)({
        name: u.ImpressionNames.VOICE_INVITE_EMBED,
        type: u.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: G.id,
            invite_channel_id: Y.id,
            invite_instance_id: ei,
            has_active_stream: ea,
            location_stack: en
        }
    });
    let eo = l.useCallback(() => {
            null != er && ($ ? (g.default.selectVoiceChannel(er.channelId), (0, A.Nl)(er)) : I(), (0, p.he)({
                invite: t,
                action: $ ? "transition" : "accept",
                inviter_id: s.author.id,
                invite_message_id: s.id,
                invite_instance_id: ei
            }, [...en, f.A.VOICE_INVITE_STREAM_PREVIEW]))
        }, [er, $, t, s, en, ei, I]),
        ed = (0, m.bG)([x.A], () => x.A.useReducedMotion),
        ec = l.useRef(null),
        [eu, em] = l.useState({
            percentX: 0,
            percentY: 0,
            proximity: 0
        }),
        e_ = (0, m.bG)([y.A], () => {
            let e = J.map(e => e.user),
                t = e.find(e => e.id === s.author.id),
                n = e.filter(e => e.id !== s.author.id).sort((e, t) => {
                    let n = y.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                    return (y.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n
                });
            return null != t ? [t, ...n] : n
        }, [J, s.author.id]),
        eh = l.useMemo(() => c().throttle(em, 20), [em]);
    l.useEffect(() => () => eh.cancel(), [eh]);
    let ep = l.useCallback(e => {
            if (ed) return;
            let t = ec.current?.getBoundingClientRect();
            if (null == t) return;
            let n = (e.clientX - t.left) / t.width * 2 - 1,
                i = (e.clientY - t.top) / t.height * 2 - 1,
                l = 0,
                s = N.current?.getBoundingClientRect();
            if (null != s) {
                let n = s.left + s.width / 2,
                    i = s.top + s.height / 2,
                    r = e.clientX - n,
                    a = e.clientY - i;
                l = 2 * Math.exp(-Math.sqrt(r * r + a * a) / (.2 * Math.sqrt(t.width ** 2 + t.height ** 2)))
            }
            eh({
                percentX: n,
                percentY: i,
                proximity: l
            })
        }, [ed, eh]),
        eg = l.useCallback(() => {
            eh.cancel(), em({
                percentX: 0,
                percentY: 0,
                proximity: 0
            })
        }, [eh]);
    return (0, i.jsxs)("div", {
        ref: ec,
        className: r()(W.kL, {
            [W.VD]: ea
        }),
        onMouseMove: ep,
        onMouseLeave: eg,
        children: [(0, i.jsx)("div", {
            className: W.ys
        }), (0, i.jsx)("div", {
            className: W.r$,
            style: {
                "--custom-number-of-dots": 24
            }
        }), ea ? (0, i.jsx)(K, {
            className: W.tB,
            stream: er
        }) : null, (0, i.jsxs)("div", {
            className: W.rf,
            children: [(0, i.jsxs)("div", {
                className: W.Qs,
                children: [(0, i.jsx)(U.A, {
                    channel: Y,
                    guild: G,
                    onClick: es
                }), (0, i.jsxs)("div", {
                    className: W.WD,
                    children: [ea ? (0, i.jsx)(z, {
                        guildId: G.id,
                        channelId: Y.id,
                        members: e_
                    }) : null, (0, i.jsx)(h.Text, {
                        variant: "text-md/medium",
                        children: (0, i.jsx)(_.A, {
                            lineClamp: ea ? 1 : 3,
                            children: X
                        })
                    }), null != Z ? (0, i.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        className: W.$B,
                        children: (0, i.jsx)(_.A, {
                            children: Z
                        })
                    }) : null]
                })]
            }), ea ? (0, i.jsx)(B.A, {
                stream: er,
                currentUserId: n,
                onClick: eo,
                className: W.Rh
            }) : (0, i.jsx)("div", {
                className: W.RE,
                children: (0, i.jsx)(F.A, {
                    ref: N,
                    guildId: G.id,
                    channelId: Y.id,
                    members: e_,
                    motion: eu
                })
            })]
        }), (0, i.jsx)("div", {
            className: W.xk,
            children: (0, i.jsx)(h.Button, {
                onClick: el,
                loading: et,
                variant: "active",
                fullWidth: !0,
                disabled: !ee,
                text: q.intl.string(q.t.gpqgah)
            })
        })]
    })
}

function z(e) {
    let {
        guildId: t,
        channelId: n,
        members: l
    } = e;
    return l.length > 4 ? (0, i.jsx)(Q, {
        guildId: t,
        channelId: n,
        members: l
    }) : (0, i.jsx)("div", {
        className: W.WM,
        children: (0, i.jsx)(N.A, {
            guildId: t,
            partySize: {
                knownSize: l.length,
                unknownSize: 0,
                totalSize: l.length
            },
            maxAvatarsShown: 3,
            members: l
        })
    })
}

function Q(e) {
    let {
        guildId: t,
        channelId: n,
        members: s
    } = e, r = l.useRef(null), {
        isHoveringOrFocusing: a
    } = (0, I.A)(r);
    return (0, i.jsx)(G.$, {
        guildId: t,
        channelId: n,
        users: s,
        targetElementRef: r,
        shouldShow: a,
        children: e => (0, i.jsx)("div", {
            className: W.WM,
            ...e,
            children: (0, i.jsx)(N.A, {
                guildId: t,
                partySize: {
                    knownSize: s.length,
                    unknownSize: 0,
                    totalSize: s.length
                },
                maxAvatarsShown: 3,
                members: s,
                overflowRef: r
            })
        })
    })
}

function K(e) {
    let {
        className: t,
        stream: n
    } = e, {
        previewUrl: l,
        isLoading: s
    } = (0, v.A)(n.guildId, n.channelId, n.ownerId), a = null != l && !s;
    return (0, i.jsx)("div", {
        className: r()(t, W.rr, {
            [W.pc]: !a
        }),
        style: {
            "--custom-bg-url": a ? `url(${l})` : "unset"
        },
        children: (0, i.jsx)("div", {
            className: W.bW
        })
    })
}