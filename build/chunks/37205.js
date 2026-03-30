/** chunk id: 37205 params = (module,exports,require) **/
n.d(t, {
    A: () => H
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
    _ = n(3026),
    m = n(397927),
    h = n(846293),
    p = n(956793),
    g = n(401843),
    A = n(775602),
    x = n(793574),
    f = n(688810),
    C = n(713517),
    I = n(450149),
    E = n(290331),
    b = n(281489),
    v = n(378570),
    T = n(21119),
    y = n(95701),
    S = n(734057),
    N = n(696451),
    j = n(71393),
    L = n(576705),
    R = n(607567),
    P = n(860689),
    w = n(422844),
    M = n(72951),
    D = n(453178),
    k = n(836629),
    O = n(182912),
    U = n(341678),
    B = n(652215),
    G = n(985018),
    F = n(682524);

function H(e) {
    let {
        invite: t,
        currentUserId: n,
        message: a,
        guild: s,
        onTransitionToInviteChannel: d,
        onAcceptInstantInvite: C
    } = e, I = (0, w.xR)("VoiceInviteEmbed"), b = r.useRef(null), k = s ?? null;
    null == k && null != t.guild && (k = P.DY(t.guild));
    let H = null != t.channel ? (0, y.OY)(t.channel) : null;
    o()(null != k, "Voice Invite Embed must be used in context of a guild."), o()(null != H, "Voice Invite Embed must be able to resolve an invite channel.");
    let q = (0, u.bG)([L.A, S.A], () => {
            let e = S.A.getChannel(H.id);
            return null == e || L.A.canBasicChannel(B.hVb.VIEW_CHANNEL, e)
        }, [H.id]),
        z = (0, u.bG)([R.Ay], () => q ? R.Ay.getVoiceStatesForChannelAlt(H.id, k.id) : [], [H.id, k.id, q]),
        {
            label: Y,
            sublabel: Q
        } = function(e) {
            let {
                currentUserId: t,
                author: n,
                voiceStates: i
            } = e, r = n.id === t, a = i.length > 0, l = i.length;
            return a ? {
                label: r ? G.intl.format(G.t["2RWMFV"], {
                    othersCount: l
                }) : G.intl.format(G.t.Da7tZx, {
                    othersCount: l
                })
            } : {
                label: r ? G.intl.string(G.t.DVDvCD) : G.intl.string(G.t.TY77rq),
                sublabel: G.intl.string(G.t.wM2WTM)
            }
        }({
            currentUserId: n,
            author: a.author,
            voiceStates: z
        }),
        K = (0, u.bG)([j.A], () => null != j.A.getGuild(k.id), [k.id]),
        J = (0, u.bG)([N.Ay], () => E.A.canAcceptInvite([N.Ay], t), [t]),
        X = t.state === B.elq.ACCEPTING,
        {
            analyticsLocations: Z
        } = (0, f.Ay)(x.A.INVITE_EMBED),
        $ = r.useCallback(() => {
            let e = K ? "transition" : "accept";
            K ? d() : C(), (0, h.he)({
                invite: t,
                action: e,
                inviter_id: a.author.id,
                invite_message_id: a.id
            }, Z)
        }, [t, a, Z, K, d, C]),
        ee = r.useCallback(() => {
            K ? (0, v.iN)(H.id) : C({
                autoJoin: !1
            })
        }, [H.id, K, C]),
        et = (0, U.A)({
            invite: t,
            message: a,
            voiceStates: z,
            guildId: k.id,
            channelId: H.id
        }),
        en = I.activityPreviewEnabled && null != et,
        ei = r.useCallback(() => {
            null != et && (K ? (p.default.selectVoiceChannel(et.channelId), (0, g.Nl)(et)) : C(), (0, h.he)({
                invite: t,
                action: K ? "watch" : "accept",
                inviter_id: a.author.id,
                invite_message_id: a.id
            }, Z))
        }, [et, K, t, a, Z, C]),
        er = (0, u.bG)([A.A], () => A.A.useReducedMotion),
        ea = r.useRef(null),
        [el, es] = r.useState({
            percentX: 0,
            percentY: 0,
            proximity: 0
        }),
        eo = (0, u.bG)([T.A], () => {
            let e = z.map(e => e.user),
                t = e.find(e => e.id === a.author.id),
                n = e.filter(e => e.id !== a.author.id).sort((e, t) => {
                    let n = T.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                    return (T.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n
                });
            return null != t ? [t, ...n] : n
        }, [z, a.author.id]),
        ed = r.useMemo(() => c().throttle(es, 20), [es]);
    r.useEffect(() => () => ed.cancel(), [ed]);
    let ec = r.useCallback(e => {
            if (er) return;
            let t = ea.current?.getBoundingClientRect();
            if (null == t) return;
            let n = (e.clientX - t.left) / t.width * 2 - 1,
                i = (e.clientY - t.top) / t.height * 2 - 1,
                r = 0,
                a = b.current?.getBoundingClientRect();
            if (null != a) {
                let n = a.left + a.width / 2,
                    i = a.top + a.height / 2,
                    l = e.clientX - n,
                    s = e.clientY - i;
                r = 2 * Math.exp(-Math.sqrt(l * l + s * s) / (.2 * Math.sqrt(t.width ** 2 + t.height ** 2)))
            }
            ed({
                percentX: n,
                percentY: i,
                proximity: r
            })
        }, [er, ed]),
        eu = r.useCallback(() => {
            ed.cancel(), es({
                percentX: 0,
                percentY: 0,
                proximity: 0
            })
        }, [ed]);
    return (0, i.jsxs)("div", {
        ref: ea,
        className: l()(F.kL, {
            [F.VD]: en
        }),
        onMouseMove: ec,
        onMouseLeave: eu,
        children: [(0, i.jsx)("div", {
            className: F.ys
        }), (0, i.jsx)("div", {
            className: F.r$,
            style: {
                "--custom-number-of-dots": 24
            }
        }), en ? (0, i.jsx)(W, {
            className: F.tB,
            stream: et
        }) : null, (0, i.jsxs)("div", {
            className: F.rf,
            children: [(0, i.jsxs)("div", {
                className: F.Qs,
                children: [(0, i.jsx)(M.A, {
                    channel: H,
                    guild: k,
                    onClick: ee
                }), (0, i.jsxs)("div", {
                    className: F.WD,
                    children: [en ? (0, i.jsx)(V, {
                        guildId: k.id,
                        channelId: H.id,
                        members: eo
                    }) : null, (0, i.jsx)(m.Text, {
                        variant: "text-md/medium",
                        children: (0, i.jsx)(_.A, {
                            lineClamp: en ? 1 : 3,
                            children: Y
                        })
                    }), null != Q ? (0, i.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        className: F.$B,
                        children: (0, i.jsx)(_.A, {
                            children: Q
                        })
                    }) : null]
                })]
            }), en ? (0, i.jsx)(D.A, {
                stream: et,
                currentUserId: n,
                onClick: ei,
                className: F.Rh
            }) : (0, i.jsx)("div", {
                className: F.RE,
                children: (0, i.jsx)(O.A, {
                    ref: b,
                    guildId: k.id,
                    channelId: H.id,
                    members: eo,
                    motion: el
                })
            })]
        }), (0, i.jsx)("div", {
            className: F.xk,
            children: (0, i.jsx)(m.Button, {
                onClick: $,
                loading: X,
                variant: "active",
                fullWidth: !0,
                disabled: !J,
                text: G.intl.string(G.t.gpqgah)
            })
        })]
    })
}

function V(e) {
    let {
        guildId: t,
        channelId: n,
        members: r
    } = e;
    return r.length > 4 ? (0, i.jsx)(q, {
        guildId: t,
        channelId: n,
        members: r
    }) : (0, i.jsx)("div", {
        className: F.WM,
        children: (0, i.jsx)(b.A, {
            guildId: t,
            partySize: {
                knownSize: r.length,
                unknownSize: 0,
                totalSize: r.length
            },
            maxAvatarsShown: 3,
            members: r
        })
    })
}

function q(e) {
    let {
        guildId: t,
        channelId: n,
        members: a
    } = e, l = r.useRef(null), {
        isHoveringOrFocusing: s
    } = (0, C.A)(l);
    return (0, i.jsx)(k.$, {
        guildId: t,
        channelId: n,
        users: a,
        targetElementRef: l,
        shouldShow: s,
        children: e => (0, i.jsx)("div", {
            className: F.WM,
            ...e,
            children: (0, i.jsx)(b.A, {
                guildId: t,
                partySize: {
                    knownSize: a.length,
                    unknownSize: 0,
                    totalSize: a.length
                },
                maxAvatarsShown: 3,
                members: a,
                overflowRef: l
            })
        })
    })
}

function W(e) {
    let {
        className: t,
        stream: n
    } = e, {
        previewUrl: r,
        isLoading: a
    } = (0, I.A)(n.guildId, n.channelId, n.ownerId), s = null != r && !a;
    return (0, i.jsx)("div", {
        className: l()(t, F.rr, {
            [F.pc]: !s
        }),
        style: {
            "--custom-bg-url": s ? `url(${r})` : "unset"
        },
        children: (0, i.jsx)("div", {
            className: F.bW
        })
    })
}