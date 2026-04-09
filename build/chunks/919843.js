/** chunk id: 919843 params = (module,exports,require) **/
n.d(t, {
    b: () => s
});
var i = n(73153),
    a = n(308528),
    r = n(95701);
let l = new Set;
async function s(e) {
    if (!l.has(e)) {
        l.add(e);
        try {
            let t = await a.A.fetchChannel(e),
                n = (0, r.UE)(t);
            i.h.dispatch({
                type: "CHANNEL_CREATE",
                channel: n
            });
            let l = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != l) return void a.A.preload(l, n.id)
        } catch {}
    }
}