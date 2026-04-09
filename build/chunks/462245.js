/** chunk id: 462245 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(735438),
    a = n.n(i),
    l = n(179771),
    r = n(846293),
    s = n(956793),
    o = n(976860),
    d = n(95701),
    c = n(734057),
    u = n(71393),
    A = n(576705),
    h = n(309010),
    _ = n(977997),
    m = n(147036),
    g = n(636401),
    p = n(90924),
    E = n(629471),
    I = n(569475),
    f = n(613057),
    C = n(652215);
let T = {
    [C.e$_.GET_CHANNEL]: {
        scope: {
            [f.sm.ANY]: [l.F.RPC, l.F.GUILDS, l.F.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let {
                args: {
                    channel_id: t
                },
                socket: n
            } = e, i = c.A.getChannel(t);
            if (null == i) throw new g.A({
                errorCode: C.Lw6.INVALID_CHANNEL
            }, `Invalid channel id: ${t}`);
            if (i.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(l.F.RPC) && !e.includes(l.F.DM_CHANNELS_READ)) throw new g.A({
                    errorCode: C.Lw6.INVALID_PERMISSIONS
                }, "Invalid scope")
            }
            return (0, p.SN)(i, (0, p.B_)(i, n.application.id, n.authorization.scopes))
        }
    },
    [C.e$_.GET_CHANNELS]: {
        scope: l.F.RPC,
        handler(e) {
            let {
                args: {
                    guild_id: t
                }
            } = e, n = a().values(c.A.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = u.A.getGuild(t);
                if (null == e) throw new g.A({
                    errorCode: C.Lw6.INVALID_GUILD
                }, `Invalid guild id: ${t}`);
                n = n.filter(t => {
                    let {
                        guild_id: n
                    } = t;
                    return n === e.id
                })
            }
            return {
                channels: n.filter(e => A.A.can(C.xBc.VIEW_CHANNEL, e)).map(e => {
                    let {
                        id: t,
                        name: n,
                        type: i
                    } = e;
                    return {
                        id: t,
                        name: n,
                        type: i
                    }
                })
            }
        }
    },
    [C.e$_.GET_CHANNEL_PERMISSIONS]: {
        scope: {
            [f.sm.ANY]: [l.F.GUILDS_MEMBERS_READ, l.F.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let t = (0, I.A)();
            if (null == t) throw new g.A({
                errorCode: C.Lw6.INVALID_CHANNEL
            }, "Invalid channel");
            return {
                permissions: A.A.computePermissions(t)
            }
        }
    },
    [C.e$_.SELECT_VOICE_CHANNEL]: {
        scope: l.F.RPC,
        validation: e => (0, E.A)(e).required().keys({
            channel_id: e.string().allow(null),
            timeout: e.number().min(0).max(60),
            force: e.boolean(),
            navigate: e.boolean()
        }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: {
                    channel_id: i,
                    timeout: a = 0,
                    force: l = !1,
                    navigate: r = !1
                }
            } = e;
            if (!i) return s.default.selectVoiceChannel(null), null;
            let E = h.A.getVoiceChannelId();
            if (null != E && E !== i && !1 === l) throw new g.A({
                errorCode: C.Lw6.SELECT_VOICE_FORCE_REQUIRED
            }, "User is already joined to a voice channel.");
            return t.storeWait(n, () => c.A.getChannel(i), a).catch(() => {
                throw new g.A({
                    errorCode: C.Lw6.SELECT_CHANNEL_TIMED_OUT
                }, "Request to select voice channel timed out.")
            }).then(e => {
                if (null == e) throw new g.A({
                    errorCode: C.Lw6.INVALID_CHANNEL
                }, `Invalid channel id: ${i}`);
                if (!(0, d.gV)(e.type)) throw new g.A({
                    errorCode: C.Lw6.INVALID_CHANNEL
                }, "Channel is not a voice channel");
                return Promise.all([Promise.resolve(e), (0, p.SN)(e, (0, p.B_)(e, n.application.id, n.authorization.scopes))])
            }).then(e => {
                let [t, n] = e;
                if (n.guild_id) {
                    if ((0, m.Pd)(t, _.A, u.A)) throw new g.A({
                        errorCode: C.Lw6.INVALID_CHANNEL
                    }, "Channel is full");
                    if (!A.A.can(C.xBc.CONNECT, t)) throw new g.A({
                        errorCode: C.Lw6.INVALID_PERMISSIONS
                    }, "Connect permission required to join channel")
                }
                return s.default.selectVoiceChannel(t.id), r && (0, o.bG)(C.BVt.CHANNEL(t.guild_id, t.id)), n
            })
        }
    },
    [C.e$_.GET_SELECTED_VOICE_CHANNEL]: {
        scope: {
            [f.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
        },
        handler(e) {
            let {
                socket: t
            } = e, n = h.A.getVoiceChannelId(), i = null != n ? c.A.getChannel(n) : null;
            return null != i ? (0, p.SN)(i, (0, p.B_)(i, t.application.id, t.authorization.scopes)) : null
        }
    },
    [C.e$_.SELECT_TEXT_CHANNEL]: {
        scope: l.F.RPC,
        validation: e => (0, E.A)(e).required().keys({
            channel_id: e.string().allow(null),
            timeout: e.number().min(0).max(60)
        }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: {
                    channel_id: i,
                    timeout: a = 0
                }
            } = e;
            return i ? t.storeWait(n, () => c.A.getChannel(i), a).catch(() => {
                throw new g.A({
                    errorCode: C.Lw6.SELECT_CHANNEL_TIMED_OUT
                }, "Request to select text channel timed out.")
            }).then(e => {
                if (null == e) throw new g.A({
                    errorCode: C.Lw6.INVALID_CHANNEL
                }, `Invalid channel id: ${i}`);
                if (!(0, d.pQ)(e.type)) throw new g.A({
                    errorCode: C.Lw6.INVALID_CHANNEL
                }, "Channel is not a text channel");
                return Promise.all([Promise.resolve(e), (0, p.SN)(e, (0, p.B_)(e, n.application.id, n.authorization.scopes))])
            }).then(e => {
                let [t, n] = e;
                if (n.guild_id && !A.A.can(C.xBc.VIEW_CHANNEL, t)) throw new g.A({
                    errorCode: C.Lw6.INVALID_CHANNEL
                }, "No permission to see channel");
                return n.guild_id ? (0, o.bG)(C.BVt.CHANNEL(n.guild_id, t.id)) : s.default.selectPrivateChannel(t.id), n
            }) : ((0, o.pX)(C.BVt.ME), null)
        }
    },
    [C.e$_.CREATE_CHANNEL_INVITE]: {
        scope: l.F.RPC,
        handler(e) {
            let {
                args: {
                    channel_id: t,
                    ...n
                }
            } = e;
            return r.Ay.createInvite(t, n, "RPC").catch(() => {
                throw new g.A({
                    errorCode: C.Lw6.INVALID_PERMISSIONS
                }, `Unable to generate an invite for ${t}. Does this user have permissions?`)
            })
        }
    }
}