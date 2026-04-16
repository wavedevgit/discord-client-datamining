/** chunk id: 919843 params = (module,exports,require) **/
n.d(t, {
    b: () => a
});
var i = n(73153),
    r = n(308528),
    l = n(95701);
let s = new Set;
async function a(e) {
    if (!s.has(e)) {
        s.add(e);
        try {
            let t = await r.A.fetchChannel(e),
                n = (0, l.UE)(t);
            i.h.dispatch({
                type: "CHANNEL_CREATE",
                channel: n
            });
            let s = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != s) return void r.A.preload(s, n.id)
        } catch {}
    }
}