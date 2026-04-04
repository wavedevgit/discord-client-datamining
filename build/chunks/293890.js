/** chunk id: 293890 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(73153),
    r = n(298990),
    s = n(846293),
    o = n(684013),
    d = n(980142),
    c = n(626584),
    u = n(375492),
    A = n(461213),
    h = n(636401),
    _ = n(90924),
    m = n(629471),
    p = n(546983),
    g = n(613057),
    E = n(652215);
let I = new c.A("RPCCommandsOverlay"),
    f = {
        [E.e$_.SET_OVERLAY_LOCKED]: {
            scope: g.hj,
            validation: e => (0, m.A)(e).required().keys({
                locked: e.boolean().required(),
                pid: e.number().min(0).required()
            }),
            handler(e) {
                let {
                    args: {
                        locked: t,
                        pid: n
                    },
                    socket: {
                        application: i
                    }
                } = e;
                if (I.verbose("RPCCommands.SET_OVERLAY_LOCKED", {
                        locked: t,
                        pid: n
                    }), null == i.id) throw new h.A({
                    errorCode: E.Lw6.INVALID_COMMAND
                }, "No application.");
                o.A.setInputLocked(t, n)
            }
        },
        [E.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: g.hj,
            validation: e => (0, m.A)(e).required().keys({
                type: e.number().required().valid([E.xL.JOIN]),
                pid: e.number().min(0).required()
            }),
            handler(e) {
                let {
                    socket: t,
                    args: {
                        type: n,
                        pid: i
                    }
                } = e, a = t.application.id;
                if (null == a) throw new h.A({
                    errorCode: E.Lw6.INVALID_COMMAND
                }, "No application.");
                let l = u.A.getApplicationActivity(a);
                if (null == l || null == l.secrets || !(0, _.px)(n, l.party, l.secrets)) throw new h.A({
                    errorCode: E.Lw6.NO_ELIGIBLE_ACTIVITY
                }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
                let {
                    lock: s,
                    context: o
                } = (0, p.d5)(i), c = (0, d.A)(l, A.A);
                return (0, r.qf)(l, c, o).then(() => {
                    if (s(), c) throw new h.A({
                        errorCode: E.Lw6.NO_ELIGIBLE_ACTIVITY
                    }, "No eligible activity for application. Ensure user does have have privacy enabled.")
                })
            }
        },
        [E.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: g.hj,
            validation: e => (0, m.A)(e).required().keys({
                code: e.string().required(),
                pid: e.number().min(0).required()
            }),
            handler(e) {
                let {
                    args: {
                        code: t,
                        pid: n
                    },
                    socket: i
                } = e;
                if (null == i.application.id) throw new h.A({
                    errorCode: E.Lw6.INVALID_COMMAND
                }, "No application.");
                return s.Ay.resolveInvite(t, "Game SDK").then(e => {
                    let {
                        invite: t,
                        code: i
                    } = e;
                    if (null == t) throw new h.A({
                        errorCode: E.Lw6.INVALID_INVITE
                    }, `Invalid invite id: ${i}`);
                    let {
                        context: a,
                        lock: r
                    } = (0, p.d5)(n);
                    return new Promise(e => {
                        l.h.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: t,
                            code: i,
                            context: a,
                            resolve: e
                        })
                    }).then(r)
                })
            }
        },
        [E.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: g.hj,
            validation: e => (0, m.A)(e).required().keys({
                pid: e.number().min(0).required()
            }),
            handler(e) {
                let {
                    args: {
                        pid: t
                    },
                    socket: l
                } = e, r = l.application.id;
                if (null == r) throw new h.A({
                    errorCode: E.Lw6.INVALID_COMMAND
                }, "No application.");
                let {
                    lock: s,
                    context: o
                } = (0, p.d5)(t);
                return new Promise(e => {
                    (0, a.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("96531").then(n.bind(n, 880510));
                        return t => (0, i.jsx)(e, {
                            ...t,
                            mediaEngineContext: r,
                            subtitle: l.application.name ?? void 0
                        })
                    }, {
                        contextKey: o === E.BRT.POPOUT ? a.KX8 : a.SYi,
                        onCloseCallback: () => {
                            s(), e()
                        }
                    })
                })
            }
        }
    }