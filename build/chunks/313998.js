/** chunk id: 313998 params = (module,exports,require) **/
t.d(n, {
    A: () => G,
    g: () => v
}), t(321073);
var l = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(110259),
    d = t(311907),
    s = t(554146),
    u = t(397927),
    o = t(387755),
    c = t(688810),
    A = t(139286),
    g = t(313961),
    m = t(325909),
    x = t(47167),
    b = t(932001),
    f = t(378570),
    h = t(164891),
    p = t(734057),
    E = t(309010),
    _ = t(806931),
    C = t(49999),
    T = t(985018),
    N = t(295573);

function v(e, n) {
    let t = (0, d.bG)([E.A], () => E.A.getVoiceChannelId()),
        l = (0, d.bG)([p.A], () => p.A.getChannel(t)?.getGuildId() ?? void 0),
        {
            enabled: i
        } = h.A.useExperiment({
            guildId: l,
            location: n
        });
    return i ? t : e
}

function G(e, n) {
    let [t, i] = (0, d.yK)([g.A], () => [null != n ? g.A.getParticipants(n) : null, null != n ? g.A.getParticipant(n, e.id) : null], [n, e.id]), x = (0, d.bG)([p.A], () => p.A.getChannel(n)), E = (0, m.oP)(e, "context_menu", n), {
        enabled: v
    } = h.A.useExperiment({
        guildId: x?.guild_id,
        location: "useRingHangupItem"
    }), G = !E || t?.length === 0 || null == n, j = x?.guild_id != null, M = v && j, O = null == i, y = null != i && i.type === _.lp.USER && i.ringing, U = [];
    M && !G && (O || y) && U.push(s.M.RING_USER_TO_VC_NEW_BADGE);
    let [S, R] = (0, b.kn)(U), D = S === s.M.RING_USER_TO_VC_NEW_BADGE, {
        analyticsLocations: P
    } = (0, c.Ay)();
    if ((0, A.A)({
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: x?.guild_id,
                location_stack: P
            }
        }, {
            disableTrack: G || !M
        }, [e.id]), G) return null;
    if (O) {
        let t = j ? T.intl.string(T.t["3Hv9qQ"]) : T.intl.string(T.t.RDheZm);
        return (0, l.jsx)(u.Drp, {
            id: "ring",
            label: t,
            badge: D ? "new" : void 0,
            subtext: M ? (0, l.jsx)(I, {
                channel: x
            }) : null,
            action: () => {
                D && R(C.i.TAKE_ACTION), o.A.ring(n, [e.id], "user_context_menu"), M && null != n && (0, f.iN)(n)
            }
        })
    }
    return y ? (0, l.jsx)(u.Drp, {
        id: "stop-ringing",
        label: T.intl.string(T.t.ygslb0),
        badge: D ? "new" : void 0,
        subtext: M ? (0, l.jsx)(u.Text, {
            variant: "text-xs/medium",
            className: r()(N.W$, N.DF),
            children: T.intl.format(T.t.dwfzZi, {
                channelName: (0, l.jsx)(I, {
                    channel: x
                })
            })
        }) : null,
        action: () => {
            D && R(C.i.TAKE_ACTION), o.A.stopRinging(n, [e.id])
        }
    }) : null
}
let I = e => {
    let {
        channel: n
    } = e, t = (0, x.Ay)(n);
    return (0, l.jsxs)("div", {
        className: N.W$,
        children: [(0, l.jsx)(u.HKD, {
            size: "xs"
        }), (0, l.jsx)(u.Text, {
            variant: "text-xs/medium",
            className: N.HA,
            children: t
        })]
    })
}