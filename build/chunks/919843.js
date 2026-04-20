/** chunk id: 919843 params = (module,exports,require) **/
n.d(t, {
    b: () => a
});
var i = n(73153),
    l = n(308528),
    r = n(95701);
let s = new Set;
async function a(e) {
    if (!s.has(e)) {
        s.add(e);
        try {
            let t = await l.A.fetchChannel(e),
                n = (0, r.UE)(t);
            i.h.dispatch({
                type: "CHANNEL_CREATE",
                channel: n
            });
            let s = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != s) return void l.A.preload(s, n.id)
        } catch {}
    }
}