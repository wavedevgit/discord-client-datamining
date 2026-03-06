/** chunk id: 672834 params = (module,exports,require) **/
n.d(t, {
    A: () => eU
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(442433),
    o = n(843472),
    c = n(956793),
    d = n(401843),
    u = n(155718),
    m = n(151660),
    _ = n(626584),
    A = n(659859),
    f = n(785823),
    E = n(509536),
    h = n(615179),
    g = n(120120),
    p = n(379114),
    x = n(698441),
    C = n(484724),
    I = n(997509),
    T = n(850131),
    N = n(31051),
    S = n(659203),
    R = n(446028),
    v = n(302291),
    M = n(282224),
    O = n(976860),
    j = n(849736),
    b = n(63995),
    y = n(105530),
    L = n(353202),
    D = n(747926),
    U = n(336589),
    P = n(961350),
    k = n(470710),
    G = n(734057),
    w = n(71393),
    F = n(576705),
    H = n(290863),
    B = n(309010),
    V = n(287809),
    z = n(977997),
    J = n(203982),
    K = n(562153),
    Y = n(728458),
    W = n(661191),
    Q = n(465364),
    Z = n(877923),
    X = n(291812),
    q = n(898401),
    $ = n(447215),
    ee = n(97896),
    et = n(939344),
    en = n(451483),
    ei = n(855532),
    el = n(724382),
    ea = n(333782),
    er = n(441412),
    es = n(986533),
    eo = n(394388),
    ec = n(320381),
    ed = n(749795),
    eu = n(821241),
    em = n(541171),
    e_ = n(229673),
    eA = n(494086),
    ef = n(734771),
    eE = n(753073),
    eh = n(640289),
    eg = n(293657),
    ep = n(269802),
    ex = n(576471),
    eC = n(808821),
    eI = n(933762),
    eT = n(840233),
    eN = n(536030),
    eS = n(912746),
    eR = n(817253),
    ev = n(911726),
    eM = n(904854),
    eO = n(652215),
    ej = n(502075),
    eb = n(985018);

function ey(e) {
    let {
        message: t,
        channel: n,
        compact: r
    } = e, {
        author: s
    } = t, {
        guild_id: o
    } = n, c = t.getChannelId(), d = (0, a.bG)([w.A], () => w.A.getGuild(o), [o]), u = l.useCallback(() => {
        null != d && (0, E.K)({
            guildId: d.id,
            location: {
                section: eO.JJy.CHANNEL_TEXT_AREA,
                object: eO.ZSU.BOOST_ANNOUNCEMENT_UPSELL
            }
        })
    }, [d]), m = (0, $.P)({
        user: s,
        channelId: c,
        guildId: n.guild_id,
        messageId: t.id,
        stopPropagation: !0
    });
    return (0, i.jsx)(ev.Ay, {
        message: t,
        compact: r,
        guild: d,
        usernameHook: m,
        onClickMessage: u
    })
}

function eL(e) {
    let {
        message: t,
        compact: n,
        channel: l
    } = e, a = (0, $.P)({
        user: t.author,
        channelId: l.id,
        guildId: l.guild_id,
        messageId: t.id
    });
    return (0, i.jsx)(es.A, {
        message: t,
        compact: n,
        usernameHook: a
    })
}
let eD = Object.freeze({
        [eO.lAJ.DEFAULT]: void 0,
        [eO.lAJ.REPLY]: void 0,
        [eO.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eO.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eO.lAJ.RECIPIENT_ADD]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, {
                author: r
            } = t, s = t.getChannelId(), o = (0, a.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = K.Ay.getName(null, s, o), d = (0, $.P)({
                user: r,
                channelId: s,
                guildId: n.guild_id,
                messageId: t.id
            }), u = (0, $.P)({
                user: o,
                channelId: s,
                guildId: n.guild_id,
                messageId: t.id
            });
            return n.isThread() ? (0, i.jsx)(eT.A, {
                message: t,
                channel: n,
                compact: l,
                targetUser: o,
                actorUsernameHook: d,
                targetUsernameHook: u
            }) : (0, i.jsx)(eA.A, {
                message: t,
                compact: l,
                otherUsername: c,
                usernameHook: d,
                otherUsernameHook: u
            })
        },
        [eO.lAJ.RECIPIENT_REMOVE]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, {
                author: r
            } = t, s = t.getChannelId(), o = (0, a.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = (0, $.P)({
                user: r,
                channelId: s,
                guildId: n.guild_id,
                messageId: t.id
            }), d = (0, $.P)({
                user: o,
                channelId: s,
                guildId: n.guild_id,
                messageId: t.id
            });
            return n.isThread() ? (0, i.jsx)(eN.A, {
                message: t,
                channel: n,
                compact: l,
                targetUser: o,
                actorUsernameHook: c,
                targetUsernameHook: d
            }) : null != o && o.id !== r.id ? (0, i.jsx)(ef.A, {
                message: t,
                channel: n,
                compact: l,
                usernameHook: c,
                otherUser: o,
                otherUsernameHook: d
            }) : (0, i.jsx)(ef.A, {
                message: t,
                channel: n,
                usernameHook: c
            })
        },
        [eO.lAJ.CALL]: function(e) {
            let {
                message: t,
                compact: n,
                channel: r
            } = e, {
                id: s,
                author: o
            } = t, d = P.default.getId(), u = t.getChannelId(), m = (0, a.bG)([k.A], () => k.A.isCallActive(u, s), [u, s]), _ = (0, a.bG)([z.A], () => z.A.getVoiceState(eO.ME, d)), A = !m && null != t.call && !t.call.participants.includes(d), f = m && (null == _ || _.channelId !== u), E = l.useCallback(() => c.default.selectVoiceChannel(u), [u]), h = (0, $.P)({
                user: o,
                channelId: u,
                guildId: r.guild_id,
                messageId: t.id,
                enableDisplayNameStyles: !0
            });
            return (0, i.jsx)(et.A, {
                compact: n,
                message: t,
                missed: A,
                joinable: f,
                usernameHook: h,
                onClickJoinCall: E
            })
        },
        [eO.lAJ.CHANNEL_NAME_CHANGE]: function(e) {
            let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                author: a
            } = t, r = t.getChannelId(), s = (0, $.P)({
                user: a,
                channelId: r,
                guildId: l.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(ea.A, {
                compact: n,
                message: t,
                usernameHook: s,
                isForumPost: l.isForumPost()
            })
        },
        [eO.lAJ.CHANNEL_ICON_CHANGE]: function(e) {
            let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                author: a
            } = t, r = t.getChannelId(), s = (0, $.P)({
                user: a,
                channelId: r,
                guildId: l.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(ei.A, {
                compact: n,
                message: t,
                usernameHook: s
            })
        },
        [eO.lAJ.CHANNEL_PINNED_MESSAGE]: function(e) {
            let {
                message: t,
                compact: n,
                channel: a
            } = e, {
                author: r
            } = t, s = t.getChannelId(), o = l.useCallback(() => {
                if (B.A.getChannelId() !== s) {
                    let e = G.A.getChannel(s);
                    null != e && (0, O.uh)(e.guild_id, e.id)
                }
                setTimeout(() => J._.dispatch(eO.jej.TOGGLE_CHANNEL_PINS), 0)
            }, [s]), c = (0, $.P)({
                user: r,
                channelId: s,
                guildId: a.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(er.A, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : o
            })
        },
        [eO.lAJ.USER_JOIN]: function(e) {
            let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                author: a
            } = t, r = t.getChannelId(), s = (0, $.P)({
                user: a,
                channelId: r,
                guildId: l.guild_id,
                messageId: t.id
            });
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(eR.A, {
                    message: t,
                    compact: n,
                    usernameHook: s
                }), (0, i.jsx)(U.I, {
                    channel: l,
                    message: t
                })]
            })
        },
        [eO.lAJ.GUILD_BOOST]: ey,
        [eO.lAJ.GUILD_BOOST_TIER_1]: ey,
        [eO.lAJ.GUILD_BOOST_TIER_2]: ey,
        [eO.lAJ.GUILD_BOOST_TIER_3]: ey,
        [eO.lAJ.CHANNEL_FOLLOW_ADD]: function(e) {
            let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                author: a
            } = t, r = t.getChannelId(), s = (0, $.P)({
                user: a,
                channelId: r,
                guildId: l.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(en.A, {
                message: t,
                compact: n,
                usernameHook: s
            })
        },
        [eO.lAJ.GUILD_STREAM]: function(e) {
            let {
                message: t,
                compact: n,
                channel: r
            } = e, {
                author: s,
                author: {
                    id: o
                },
                messageReference: c
            } = t, u = t.getChannelId(), m = (0, a.bG)([H.A], () => H.A.findActivity(o, e => e.type === eO.$pd.PLAYING), [o]), _ = (0, a.bG)([G.A], () => null != c ? G.A.getChannel(c.channel_id) : null, [c]), A = c?.guild_id, f = (0, $.P)({
                user: s,
                channelId: u,
                guildId: r.guild_id,
                messageId: t.id
            }), E = l.useCallback(() => {
                null != _ && null != A && (0, d.Nl)({
                    streamType: ej.U4.GUILD,
                    ownerId: o,
                    channelId: _.id,
                    guildId: A
                })
            }, [o, _, A]);
            return null != c && null != _ && null != c.guild_id ? (0, i.jsx)(em.A, {
                message: t,
                compact: n,
                channel: _,
                playingActivity: m,
                onJoinStream: E,
                usernameHook: f
            }) : null
        },
        [eO.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
            let {
                message: t,
                compact: n
            } = e, l = t.getChannelId(), r = (0, a.bG)([G.A], () => G.A.getChannel(l), [l]), s = null != r ? r.getGuildId() : null;
            return (0, i.jsx)(ec.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != s && I.A.open(s, eO.BEX.ACCESS, eO.nd0.ACCESS_DISCOVERABLE)
                }
            })
        },
        [eO.lAJ.GUILD_DISCOVERY_REQUALIFIED]: ec.wj,
        [eO.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ec.Cq,
        [eO.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ec.If,
        [eO.lAJ.THREAD_CREATED]: function(e) {
            let {
                message: t,
                channel: a,
                compact: o
            } = e, c = (0, $.P)({
                user: t.author,
                channelId: t.channel_id,
                guildId: a.guild_id,
                messageId: t.id
            }), d = l.useCallback(async e => {
                let n = t.messageReference?.channel_id;
                if (null != n) {
                    await L.A.loadThread(n);
                    let t = G.A.getChannel(n);
                    null != t && (0, D.JA)(t, e.shiftKey)
                }
            }, [t]), u = l.useCallback(() => {
                (0, r.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("34160"), n.e("55191")]).then(n.bind(n, 126768));
                    return t => (0, i.jsx)(e, {
                        channel: a,
                        ...t
                    })
                })
            }, [a]), m = l.useCallback(e => {
                let l = G.A.getChannel(t.messageReference?.channel_id);
                null != l && (0, s.L3)(e, async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("94989"), n.e("23016")]).then(n.bind(n, 44536));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        channel: l
                    })
                })
            }, [t]);
            return (0, i.jsx)(eI.A, {
                message: t,
                compact: o,
                usernameHook: c,
                onClickThread: d,
                onClickViewThreads: u,
                onContextMenuThread: m
            })
        },
        [eO.lAJ.THREAD_STARTER_MESSAGE]: eS.A,
        [eO.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eO.lAJ.AUTO_MODERATION_ACTION]: function(e) {
            let {
                message: t,
                compact: n,
                channel: l
            } = e;
            return (0, f.ER)(t) ? (0, i.jsx)(ee.A, {
                message: t,
                compact: n,
                channel: l
            }) : null
        },
        [eO.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eL,
        [eO.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eL,
        [eO.lAJ.GUILD_INCIDENT_REPORT_RAID]: function(e) {
            let {
                message: t,
                compact: n,
                channel: l
            } = e, a = (0, $.P)({
                user: t.author,
                channelId: l.id,
                guildId: l.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(eu.A, {
                message: t,
                compact: n,
                channel: l,
                usernameHook: a
            })
        },
        [eO.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
            let {
                message: t,
                compact: n,
                channel: l
            } = e, a = (0, $.P)({
                user: t.author,
                channelId: l.id,
                guildId: l.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(ed.A, {
                message: t,
                compact: n,
                channel: l,
                usernameHook: a
            })
        },
        [eO.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: p.A,
        [eO.lAJ.PURCHASE_NOTIFICATION]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e;
            return t.purchaseNotification?.type === u.hE.GUILD_PRODUCT ? (0, i.jsx)(g.A, {
                message: t,
                channel: n,
                compact: l
            }) : null
        },
        [eO.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eO.lAJ.STAGE_START]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, r = (0, $.P)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }), s = (0, a.bG)([x.Ay], () => x.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(ep.A, {
                    message: t,
                    compact: l,
                    usernameHook: r
                }), null != s && s.name === t.content ? (0, i.jsx)(C.A, {
                    code: `${n.guild_id}-${s.id}`
                }) : null]
            })
        },
        [eO.lAJ.STAGE_END]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, a = (0, $.P)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(eE.A, {
                message: t,
                compact: l,
                usernameHook: a
            })
        },
        [eO.lAJ.STAGE_SPEAKER]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, a = (0, $.P)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(eg.A, {
                message: t,
                compact: l,
                usernameHook: a
            })
        },
        [eO.lAJ.STAGE_RAISE_HAND]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, s = (0, $.P)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }), c = (0, a.bG)([F.A], () => F.A.can(eO.xBc.MUTE_MEMBERS, n)), d = (0, a.bG)([b.A], () => b.A.getParticipant(n.id, t.author.id)), u = new Date(W.default.extractTimestamp(t.id)).toISOString() === new Date(d?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(), m = c && d?.rtsState === y.zF.REQUESTED_TO_SPEAK && u;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(eh.A, {
                    message: t,
                    compact: l,
                    usernameHook: s
                }), m ? (0, i.jsx)(r.Button, {
                    variant: "secondary",
                    onClick: () => {
                        (0, j.lL)(n, t.author.id, !1), o.A.deleteMessage(n.id, t.id, !0)
                    },
                    text: eb.intl.string(eb.t.f0T7hI),
                    icon: r.LvC
                }) : null]
            })
        },
        [eO.lAJ.STAGE_TOPIC]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, a = (0, $.P)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(ex.A, {
                message: t,
                compact: l,
                usernameHook: a
            })
        },
        [eO.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: R.A,
        [eO.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: v.R,
        [eO.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: v.d,
        [eO.lAJ.PREMIUM_REFERRAL]: function(e) {
            let {
                message: t,
                compact: n
            } = e;
            return (0, i.jsx)(S.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n
            })
        },
        [eO.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e;
            return (0, i.jsx)(m.A, {
                message: t,
                channel: n,
                compact: l
            })
        },
        [eO.lAJ.CUSTOM_GIFT]: void 0,
        [eO.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eO.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eO.lAJ.POLL_RESULT]: T.A,
        [eO.lAJ.CHANGELOG]: void 0,
        [eO.lAJ.NITRO_NOTIFICATION]: function(e) {
            let {
                message: t,
                channel: n
            } = e;
            return (0, i.jsx)(q.A, {
                message: t,
                channel: n
            })
        },
        [eO.lAJ.CHANNEL_LINKED_TO_LOBBY]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e;
            return (0, i.jsx)(el.A, {
                message: t,
                channel: n,
                compact: l
            })
        },
        [eO.lAJ.GIFTING_PROMPT]: function(e) {
            let {
                message: t,
                channel: n
            } = e, l = t.giftingPrompt, r = (0, a.bG)([V.default], () => V.default.getUser(l?.recipientUserId));
            return null == l || null == r ? null : (0, i.jsx)(Z.A, {
                giftIntentType: l.giftIntentType,
                recipientUser: r,
                channel: n
            })
        },
        [eO.lAJ.IN_GAME_MESSAGE_NUX]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e;
            return (0, i.jsx)(e_.A, {
                message: t,
                channel: n,
                author: t.author,
                compact: l
            })
        },
        [eO.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: h.Z_,
        [eO.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: h.QN,
        [eO.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: h.ez,
        [eO.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eO.lAJ.EMOJI_ADDED]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e, a = (0, $.P)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
            return (0, i.jsx)(A._W, {
                message: t,
                channel: n,
                compact: l,
                usernameHook: a
            })
        },
        [eO.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eO.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eO.lAJ.REPORT_TO_MOD_BAN_USER]: M.A,
        [eO.lAJ.REPORT_TO_MOD_KICK_USER]: M.A,
        [eO.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: M.A,
        [eO.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: M.A,
        [eO.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: M.A,
        [eO.lAJ.PREMIUM_GROUP_INVITE]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e;
            return (0, i.jsx)(N.A, {
                message: t,
                channel: n,
                compact: l
            })
        },
        [eO.lAJ.VOICE_SESSION]: function(e) {
            let {
                message: t,
                channel: n,
                compact: l
            } = e;
            return (0, i.jsx)(eM.A, {
                message: t,
                channel: n,
                compact: l
            })
        },
        [eO.lAJ.GUILD_BOOST_UPSELL]: function(e) {
            let {
                message: t,
                channel: n
            } = e;
            return null == t.boostingPrompt ? null : (0, i.jsx)(eo.A, {
                boostingPrompt: t.boostingPrompt,
                channel: n
            })
        },
        67: function(e) {
            let {
                message: t,
                compact: n
            } = e;
            return (0, i.jsx)(eC.A, {
                message: t,
                compact: n
            })
        }
    }),
    eU = l.memo(function(e) {
        let {
            message: t,
            channel: n,
            compact: l,
            disableInteraction: a
        } = e, {
            type: r
        } = t, s = eD[r];
        if (null == s) {
            var o;
            return o = Error(`unknown message type ${t.type}`), Y.A.captureException(o), new _.A("SystemMessage").error("", o), null
        }
        return (0, i.jsx)(X.Ay, {
            message: t,
            content: (0, Q.Ay)(t).content,
            compact: l ?? !1,
            children: (0, i.jsx)(s, {
                message: t,
                channel: n,
                compact: l,
                disableInteraction: a
            })
        })
    })