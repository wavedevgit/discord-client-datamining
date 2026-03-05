/** chunk id: 704456 params = (module,exports,require) **/
n.d(e, {
    Ce: () => p,
    kh: () => h,
    le: () => m,
    vr: () => A
});
var i, a = n(64700),
    r = n(989349),
    s = n.n(r),
    l = n(311907),
    o = n(308528),
    c = n(22007),
    d = n(95701),
    _ = n(734057),
    g = n(652215),
    u = n(985018),
    h = ((i = {})[i.LONG = 0] = "LONG", i[i.SHORT = 1] = "SHORT", i);

function p(t) {
    let {
        dueAt: e,
        now: n,
        type: i
    } = t;
    if (null == e) return {
        string: "",
        isOverdue: !1
    };
    let a = 0 === i ? u.t.TjNWNF : u.t.H4gnX9,
        r = 0 === i ? u.t.haia16 : u.t["Uq7Y+7"],
        l = n > e;
    return {
        dueInText: u.intl.formatToPlainString(l ? r : a, {
            duration: s().duration(e.getTime() - n.getTime(), "millisecond").humanize()
        }),
        isOverdue: l
    }
}

function A(t) {
    let e = (0, l.bG)([_.A], () => _.A.getChannel(t.saveData.channelId));
    return a.useMemo(() => null != e ? e : null != t.message ? new d.jb({
        id: t.saveData.channelId,
        guild_id: t.saveData.guildId,
        type: g.rbe.UNKNOWN,
        name: u.intl.string(u.t.J90oLW)
    }) : void 0, [e, t])
}
async function m(t, e) {
    if (e?.type === g.rbe.UNKNOWN && null == t.saveData.guildId) try {
        let e = await o.A.fetchChannel(t.saveData.channelId);
        if (null == e.recipients || e.recipients.length > 1) return;
        await o.A.ensurePrivateChannel(e.recipients.map(t => t.id))
    } catch (t) {}(0, c.A)(g.BVt.CHANNEL(e?.getGuildId(), t.saveData.channelId, t.saveData.messageId), {
        openChannel: !0
    })
}