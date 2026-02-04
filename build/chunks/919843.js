/** chunk id: 919843, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => o
}), n(896048);
var i = n(73153),
    r = n(308528),
    l = n(95701);
let a = new Set;
async function o(e) {
    if (!a.has(e)) {
        a.add(e);
        try {
            var t, n, o;
            let a = await r.A.fetchChannel(e),
                s = (0, l.UE)(a);
            i.h.dispatch({
                type: "CHANNEL_CREATE",
                channel: s
            });
            let u = null != (t = null != (n = null == (o = s.getGuildId) ? void 0 : o.call(s)) ? n : s.guild_id) ? t : null;
            if (null != u) return void r.A.preload(u, s.id)
        } catch (e) {}
    }
}