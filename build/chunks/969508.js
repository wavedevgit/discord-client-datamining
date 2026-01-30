/** chunk id: 969508, original params: e,t,n (module,exports,require) **/
n.d(t, {
    FG: () => R,
    aV: () => L,
    uD: () => D
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(64700),
    l = n(284009),
    a = n.n(l),
    i = n(311907),
    o = n(562465),
    s = n(73153),
    c = n(608299),
    u = n(155718),
    d = n(444927),
    p = n(163126),
    m = n(358579),
    f = n(956518),
    O = n(706727),
    b = n(961350),
    y = n(734057),
    h = n(31717),
    j = n(696451),
    g = n(967198),
    A = n(522602),
    v = n(486020),
    E = n(927813),
    C = n(661191),
    x = n(292348),
    N = n(207963),
    I = n(814890),
    P = n(750128),
    S = n(322980),
    _ = n(652215),
    T = n(985018);

function R(e) {
    var t;
    let n = (0, N.jc)(),
        r = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == r ? void 0 : r.type) === u.I5.ACTION_ROW && r.components[0].id === e
}

function w(e) {
    return r.useMemo(() => {
        let t = g.A.getGuildId(),
            n = null != t && null != e.bot ? j.Ay.getMember(t, e.bot.id) : void 0,
            r = v.Ay.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
                guildMember: n
            });
        return {
            applicationIconURL: r,
            applicationName: (null == n ? void 0 : n.nick) != null ? n.nick : null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, f.Ay)(e.id)
        }
    }, [e.id, e.icon, e.name, e.bot])
}

function D(e, t) {
    let {
        application: n,
        customId: l,
        components: a
    } = e, o = (0, p.A)(), [u, m] = r.useState(null), [f, O] = r.useState(null), [b, y] = r.useState({}), j = (0, i.bG)([P.A], () => P.A.getModalState(f), [f]), g = (0, d.A)(() => new Set), A = r.useCallback(async () => {
        let t;
        if (m(null), O(null), t = !0, g.forEach(e => {
                e() || (t = !1)
            }), t) {
            let t = C.default.fromTimestamp(Date.now());
            O(t), await M(e, o, t)
        }
    }, [o, e, g]);
    r.useEffect(() => {
        j === P.Z.SUCCEEDED && (s.h.dispatch({
            type: "CLEAR_INTERACTION_MODAL_STATE",
            customId: l
        }), c.A.removeFiles(e.channelId, U(e.channelId, l).map(e => e.id), h.C.InteractionModal), t()), j === P.Z.ERRORED && m(T.intl.string(T.t.uJgdEu))
    }, [f, j, t, l, e.channelId]);
    let {
        applicationIconURL: v,
        applicationName: E
    } = w(n);
    return {
        components: a,
        applicationIconURL: v,
        applicationName: E,
        submissionState: j,
        error: u,
        validators: g,
        validationErrors: b,
        setValidationErrors: y,
        onSubmit: A
    }
}

function L(e) {
    let {
        application: t,
        customId: n
    } = e, {
        applicationIconURL: r,
        applicationName: l,
        applicationBaseUrl: i
    } = w(t), o = y.A.getChannel(e.channelId);
    a()(null != o, "channel should not be null");
    let s = {
        instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
        custom_id: n,
        channel_id: e.channelId
    };
    null != o.guild_id && "" !== o.guild_id && (s.guild_id = o.guild_id);
    let c = new URL(null != i ? i : "");
    return c.pathname = e.iframePath, {
        applicationIconURL: r,
        applicationName: l,
        applicationBaseUrl: i,
        queryParams: s,
        iframeUrl: c.toString()
    }
}
let k = (e, t, n) => t.map(t => {
    switch (t.type) {
        case u.I5.ACTION_ROW:
            return {
                type: t.type, components: k(e, t.components, n)
            };
        case u.I5.TEXT_INPUT: {
            let n = S.A.getInteractionComponentState(e, t.id);
            return {
                type: t.type,
                custom_id: t.customId,
                value: (null == n ? void 0 : n.type) === t.type ? n.value : null
            }
        }
        case u.I5.FILE_UPLOAD: {
            var r;
            let l = S.A.getInteractionComponentState(e, t.id),
                a = (null == l ? void 0 : l.type) === t.type ? l.uploadIds : null;
            return {
                type: t.type,
                custom_id: t.customId,
                values: null != (r = null == a ? void 0 : a.map(e => n.uploads.findIndex(t => t.id === e))) ? r : null
            }
        }
        case u.I5.STRING_SELECT: {
            let n = S.A.getInteractionComponentState(e, t.id);
            return {
                type: t.type,
                custom_id: t.customId,
                values: (null == n ? void 0 : n.type) === t.type ? n.values : null
            }
        }
        case u.I5.USER_SELECT:
        case u.I5.ROLE_SELECT:
        case u.I5.MENTIONABLE_SELECT:
        case u.I5.CHANNEL_SELECT: {
            let n = S.A.getInteractionComponentState(e, t.id);
            return {
                type: t.type,
                custom_id: t.customId,
                values: (null == n ? void 0 : n.type) === t.type ? n.selectedOptions.map(e => e.value) : null
            }
        }
        case u.I5.TEXT_DISPLAY:
            return {
                type: t.type
            };
        case u.I5.LABEL:
            return {
                type: t.type, component: k(e, [t.component], n)[0]
            };
        case u.I5.RADIO_GROUP: {
            let n = S.A.getInteractionComponentState(e, t.id);
            return {
                type: t.type,
                custom_id: t.customId,
                value: (null == n ? void 0 : n.type) === t.type ? n.value : null
            }
        }
        case u.I5.CHECKBOX_GROUP: {
            let n = S.A.getInteractionComponentState(e, t.id);
            return {
                type: t.type,
                custom_id: t.customId,
                values: (null == n ? void 0 : n.type) === t.type ? n.values : null
            }
        }
        case u.I5.CHECKBOX: {
            let n = S.A.getInteractionComponentState(e, t.id);
            return {
                type: t.type,
                custom_id: t.customId,
                value: (null == n ? void 0 : n.type) === t.type && n.value
            }
        }
        default:
            a()(!1, "unreachable")
    }
});

function U(e, t) {
    return A.A.getUploads(e, h.C.InteractionModal).filter(e => {
        var n;
        return (null == (n = (0, I.j2)(e.id)) ? void 0 : n.containerId) === t
    })
}
async function M(e, t, n) {
    let r = e.channelId,
        l = y.A.getChannel(r);
    a()(null != l, "expected channel");
    let i = U(r, e.customId),
        s = i.length > 0 ? (0, m.A)(i) : void 0;
    (0, O.tU)(n, {
        data: {
            interactionType: u.G4.MODAL_SUBMIT,
            applicationId: e.application.id
        },
        preflight: s
    }), await s;
    let c = i.map((e, t) => (0, x.OW)(e, t)),
        d = k(e.customId, e.components, {
            uploads: i
        }),
        p = () => {
            null != t && t.aborted || o.Bo.post({
                url: _.Rsh.INTERACTIONS,
                body: {
                    type: u.G4.MODAL_SUBMIT,
                    application_id: e.application.id,
                    channel_id: l.id,
                    guild_id: l.guild_id,
                    data: {
                        id: e.id,
                        custom_id: e.customId,
                        components: d,
                        attachments: c.length > 0 ? c : void 0
                    },
                    session_id: b.default.getSessionId(),
                    nonce: n
                },
                signal: t,
                rejectWithError: !1
            }).catch(e => {
                429 === e.status ? setTimeout(p, e.body.retry_after * E.A.Millis.SECOND) : (0, O.C1)(n)
            })
        };
    p()
}