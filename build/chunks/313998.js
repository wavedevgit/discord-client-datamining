/** chunk id: 313998, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => v,
    g: () => I
}), t(321073);
var l = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(110259),
    d = t(311907),
    s = t(554146),
    o = t(397927),
    u = t(387755),
    c = t(688810),
    A = t(139286),
    g = t(313961),
    m = t(313369),
    f = t(325909),
    p = t(47167),
    x = t(379848),
    b = t(378570),
    E = t(164891),
    h = t(734057),
    _ = t(309010),
    C = t(806931),
    T = t(49999),
    N = t(985018),
    G = t(717694);

function I(e, n) {
    let t = (0, d.bG)([_.A], () => _.A.getVoiceChannelId()),
        l = (0, d.bG)([h.A], () => h.A.getChannel(t)?.getGuildId() ?? void 0),
        {
            enabled: i
        } = E.A.useExperiment({
            guildId: l,
            location: n
        });
    return i ? t : e
}

function v(e, n) {
    let [t, i] = (0, d.yK)([g.A], () => [null != n ? g.A.getParticipants(n) : null, null != n ? g.A.getParticipant(n, e.id) : null], [n, e.id]), p = (0, d.bG)([h.A], () => h.A.getChannel(n)), _ = (0, f.oP)(e, "context_menu", n), {
        enabled: I
    } = E.A.useExperiment({
        guildId: p?.guild_id,
        location: "useRingHangupItem"
    }), {
        copyVariant: v
    } = m.o.useConfig({
        location: "useRingHangupItem"
    }), j = !_ || t?.length === 0 || null == n, y = I && p?.guild_id != null, M = null == i, U = null != i && i.type === C.lp.USER && i.ringing, S = [];
    y && !j && (M || U) && S.push(s.M.RING_USER_TO_VC_NEW_BADGE);
    let [R, P] = (0, x.kn)(S), D = R === s.M.RING_USER_TO_VC_NEW_BADGE, {
        analyticsLocations: V
    } = (0, c.Ay)();
    if ((0, A.A)({
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: p?.guild_id,
                location_stack: V
            }
        }, {
            disableTrack: j || !y
        }, [e.id]), j) return null;
    if (M) {
        let t = y ? N.intl.string(N.t["3Hv9qQ"]) : "add" === v ? N.intl.string(N.t.xlwRY6) : N.intl.string(N.t.bHa9kN);
        return (0, l.jsx)(o.Drp, {
            id: "ring",
            label: t,
            badge: D ? "new" : void 0,
            subtext: y || "control" !== v ? (0, l.jsx)(O, {
                channel: p
            }) : null,
            action: () => {
                D && P(T.i.TAKE_ACTION), u.A.ring(n, [e.id], "user_context_menu"), y && null != n && (0, b.iN)(n)
            }
        })
    }
    return U ? (0, l.jsx)(o.Drp, {
        id: "stop-ringing",
        label: N.intl.string(N.t.ygslb0),
        badge: D ? "new" : void 0,
        subtext: y ? (0, l.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: r()(G.W$, G.DF),
            children: N.intl.format(N.t.dwfzZi, {
                channelName: (0, l.jsx)(O, {
                    channel: p
                })
            })
        }) : null,
        action: () => {
            D && P(T.i.TAKE_ACTION), u.A.stopRinging(n, [e.id])
        }
    }) : null
}
let O = e => {
    let {
        channel: n
    } = e, t = (0, p.Ay)(n);
    return (0, l.jsxs)("div", {
        className: G.W$,
        children: [(0, l.jsx)(o.HKD, {
            size: "xs"
        }), (0, l.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: G.HA,
            children: t
        })]
    })
}