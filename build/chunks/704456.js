/** Chunk was on 92750 **/
/** chunk id: 704456, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ce: () => b,
    kh: () => f,
    le: () => m,
    vr: () => h
});
var s, r = n(64700),
    a = n(989349),
    i = n.n(a),
    l = n(311907),
    c = n(308528),
    o = n(22007),
    u = n(95701),
    p = n(734057),
    d = n(652215),
    g = n(985018),
    f = ((s = {})[s.LONG = 0] = "LONG", s[s.SHORT = 1] = "SHORT", s);

function b(e) {
    let {
        dueAt: t,
        now: n,
        type: s
    } = e;
    if (null == t) return {
        string: "",
        isOverdue: !1
    };
    let r = 0 === s ? g.t.TjNWNF : g.t.H4gnX9,
        a = 0 === s ? g.t.haia16 : g.t["Uq7Y+7"],
        l = n > t;
    return {
        dueInText: g.intl.formatToPlainString(l ? a : r, {
            duration: i().duration(t.getTime() - n.getTime(), "millisecond").humanize()
        }),
        isOverdue: l
    }
}

function h(e) {
    let t = (0, l.bG)([p.A], () => p.A.getChannel(e.saveData.channelId));
    return r.useMemo(() => null != t ? t : null != e.message ? new u.jb({
        id: e.saveData.channelId,
        guild_id: e.saveData.guildId,
        type: d.rbe.UNKNOWN,
        name: g.intl.string(g.t.J90oLW)
    }) : void 0, [t, e])
}
async function m(e, t) {
    if ((null == t ? void 0 : t.type) === d.rbe.UNKNOWN && null == e.saveData.guildId) try {
        let t = await c.A.fetchChannel(e.saveData.channelId);
        if (null == t.recipients || t.recipients.length > 1) return;
        await c.A.ensurePrivateChannel(t.recipients.map(e => e.id))
    } catch (e) {}(0, o.A)(d.BVt.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
        openChannel: !0
    })
}