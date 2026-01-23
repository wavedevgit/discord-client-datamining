/** Chunk was on 90432 **/
/** chunk id: 887560, original params: e,n,i (module,exports,require) **/
i.d(n, {
    Au: () => N,
    UD: () => u,
    bH: () => S,
    gN: () => A,
    mA: () => E,
    qk: () => b
}), i(896048);
var t = i(417597),
    _ = i(832712),
    s = i(734057),
    r = i(543465),
    a = i(477427),
    d = i(769591),
    o = i(393432),
    c = i(24873),
    l = i(652215),
    g = i(790782),
    h = i(355097);

function S(e) {
    let n = (0, t.bG)([r.Ay], () => r.Ay.resolveUnreadSetting(e)),
        i = (0, t.bG)([r.Ay], () => r.Ay.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: i,
        preset: (0, c.jU)(n, i)
    }
}

function u(e) {
    let n = (0, t.yK)([r.Ay], () => (0, d.ct)(r.Ay.getChannelOverrides(e.guild_id), {
            ignoreMute: !0,
            ignoreUnreadSetting: !1,
            ignoreNotificationSetting: !1
        })),
        [i, _] = (0, t.yK)([r.Ay, s.A], () => {
            let i = s.A.getChannel(e.parent_id);
            return null != i && n.includes(i.id) ? ["parent", (0, c.jL)((0, c.jU)(r.Ay.resolveUnreadSetting(i), r.Ay.resolvedMessageNotifications(i)))] : ["guild", (0, c.jL)((0, c.jU)(r.Ay.getGuildUnreadSetting(e.guild_id), r.Ay.getMessageNotifications(e.guild_id)))]
        }, [e.guild_id, e.parent_id, n]);
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: i,
        inheritedPreset: _
    }
}

function A(e, n, i) {
    let t = r.Ay.getChannelIdFlags(e, n);
    i === c.N9.ALL_MESSAGES ? _.A.updateChannelOverrideSettings(e, n, {
        message_notifications: l.orn.ALL_MESSAGES,
        flags: (0, o.mD)(t, h.vv.UNREADS_ALL_MESSAGES)
    }, a.fd.PresetAll) : i === c.N9.MENTIONS ? _.A.updateChannelOverrideSettings(e, n, {
        message_notifications: l.orn.ONLY_MENTIONS,
        flags: (0, o.mD)(t, h.vv.UNREADS_ONLY_MENTIONS)
    }, a.fd.PresetMentions) : i === c.N9.NOTHING && _.A.updateChannelOverrideSettings(e, n, {
        message_notifications: l.orn.NO_MESSAGES,
        flags: (0, o.mD)(t, h.vv.UNREADS_ONLY_MENTIONS)
    }, a.fd.PresetNothing)
}

function N(e, n) {
    _.A.updateChannelOverrideSettings(e, n, {
        message_notifications: l.orn.NULL,
        flags: (0, o.PW)(r.Ay.getChannelIdFlags(e, n))
    }, a.fd.PresetDefault)
}

function E(e, n, i) {
    let t = r.Ay.getChannelIdFlags(e, n);
    _.A.updateChannelOverrideSettings(e, n, {
        flags: (0, o.mD)(t, i === g.e.ALL_MESSAGES ? h.vv.UNREADS_ALL_MESSAGES : h.vv.UNREADS_ONLY_MENTIONS)
    }, a.G_.unreads(i))
}

function b(e, n, i) {
    _.A.updateChannelOverrideSettings(e, n, {
        message_notifications: i
    }, a.G_.notifications(i))
}