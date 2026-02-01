/** chunk id: 704456, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ce: () => h,
    kh: () => A,
    le: () => y,
    vr: () => O
});
var r, l = n(64700),
    a = n(989349),
    s = n.n(a),
    i = n(311907),
    o = n(308528),
    c = n(22007),
    u = n(95701),
    p = n(734057),
    d = n(652215),
    f = n(985018),
    A = ((r = {})[r.LONG = 0] = "LONG", r[r.SHORT = 1] = "SHORT", r);

function h(e) {
    let {
        dueAt: t,
        now: n,
        type: r
    } = e;
    if (null == t) return {
        string: "",
        isOverdue: !1
    };
    let l = 0 === r ? f.t.TjNWNF : f.t.H4gnX9,
        a = 0 === r ? f.t.haia16 : f.t["Uq7Y+7"],
        i = n > t;
    return {
        dueInText: f.intl.formatToPlainString(i ? a : l, {
            duration: s().duration(t.getTime() - n.getTime(), "millisecond").humanize()
        }),
        isOverdue: i
    }
}

function O(e) {
    let t = (0, i.bG)([p.A], () => p.A.getChannel(e.saveData.channelId));
    return l.useMemo(() => null != t ? t : null != e.message ? new u.jb({
        id: e.saveData.channelId,
        guild_id: e.saveData.guildId,
        type: d.rbe.UNKNOWN,
        name: f.intl.string(f.t.J90oLW)
    }) : void 0, [t, e])
}
async function y(e, t) {
    if ((null == t ? void 0 : t.type) === d.rbe.UNKNOWN && null == e.saveData.guildId) try {
        let t = await o.A.fetchChannel(e.saveData.channelId);
        if (null == t.recipients || t.recipients.length > 1) return;
        await o.A.ensurePrivateChannel(t.recipients.map(e => e.id))
    } catch (e) {}(0, c.A)(d.BVt.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
        openChannel: !0
    })
}