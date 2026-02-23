/** chunk id: 919843, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => a
});
var i = n(73153),
    s = n(308528),
    l = n(95701);
let r = new Set;
async function a(e) {
    if (!r.has(e)) {
        r.add(e);
        try {
            let t = await s.A.fetchChannel(e),
                n = (0, l.UE)(t);
            i.h.dispatch({
                type: "CHANNEL_CREATE",
                channel: n
            });
            let r = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != r) return void s.A.preload(r, n.id)
        } catch {}
    }
}