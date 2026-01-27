/** Chunk was on 41727 **/
/** chunk id: 352123, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o,
    b: () => c
});
var r = n(311907),
    l = n(734057),
    i = n(71393),
    s = n(576705),
    a = n(652215);

function o(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuild(e.guildId)),
        n = (0, r.bG)([l.A], () => l.A.getChannel(e.channelId)),
        o = (0, r.bG)([s.A], () => s.A.can(a.xBc.ADMINISTRATOR, t)),
        c = (0, r.bG)([s.A], () => s.A.can(a.xBc.MANAGE_MESSAGES, n));
    return {
        isEntryAdmin: o,
        canEdit: o || c,
        canRemove: o || c
    }
}

function c(e) {
    return (0, r.bG)([s.A], () => s.A.can(a.xBc.SEND_MESSAGES, e))
}