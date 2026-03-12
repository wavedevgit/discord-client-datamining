/** chunk id: 704456 params = (module,exports,require) **/
n.d(t, {
    Ce: () => g,
    kh: () => x,
    le: () => v,
    vr: () => p
});
var l, s = n(64700),
    a = n(989349),
    r = n.n(a),
    i = n(311907),
    o = n(308528),
    c = n(22007),
    d = n(95701),
    u = n(734057),
    h = n(652215),
    m = n(985018),
    x = ((l = {})[l.LONG = 0] = "LONG", l[l.SHORT = 1] = "SHORT", l);

function g(e) {
    let {
        dueAt: t,
        now: n,
        type: l
    } = e;
    if (null == t) return {
        string: "",
        isOverdue: !1
    };
    let s = 0 === l ? m.t.TjNWNF : m.t.H4gnX9,
        a = 0 === l ? m.t.haia16 : m.t["Uq7Y+7"],
        i = n > t;
    return {
        dueInText: m.intl.formatToPlainString(i ? a : s, {
            duration: r().duration(t.getTime() - n.getTime(), "millisecond").humanize()
        }),
        isOverdue: i
    }
}

function p(e) {
    let t = (0, i.bG)([u.A], () => u.A.getChannel(e.saveData.channelId));
    return s.useMemo(() => null != t ? t : null != e.message ? new d.jb({
        id: e.saveData.channelId,
        guild_id: e.saveData.guildId,
        type: h.rbe.UNKNOWN,
        name: m.intl.string(m.t.J90oLW)
    }) : void 0, [t, e])
}
async function v(e, t) {
    if (t?.type === h.rbe.UNKNOWN && null == e.saveData.guildId) try {
        let t = await o.A.fetchChannel(e.saveData.channelId);
        if (null == t.recipients || t.recipients.length > 1) return;
        await o.A.ensurePrivateChannel(t.recipients.map(e => e.id))
    } catch (e) {}(0, c.A)(h.BVt.CHANNEL(t?.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
        openChannel: !0
    })
}