/** chunk id: 420208, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Q: () => E
});
var i = n(843472),
    l = n(508675),
    a = n(451909),
    r = n(361670),
    s = n(631576),
    o = n(679382),
    c = n(842086),
    d = n(71393),
    u = n(287809),
    m = n(690521),
    _ = n(661191),
    A = n(652215),
    f = n(307731),
    h = n(381941);

function g(e) {
    let t = d.A.getGuild(e);
    return null != t && (t.nsfwLevel === A.ftr.DEFAULT || t.nsfwLevel === A.ftr.SAFE)
}
async function E(e, t) {
    let n = t.getGuildId();
    if (null == n || null == d.A.getGuild(n)) return;
    let A = u.default.getCurrentUser();
    if (null == A) return;
    await (0, s.YB)();
    let E = Array.from(o.A.getAllGuildStickers().values()).flat().filter(e => g(e.guild_id) && (0, r.G7)(e, A, t)).sort((e, t) => -_.default.compare(e.id, t.id));
    if (E.length > 5) {
        let n = [E[Math.floor(Math.pow(Math.random(), 2) * E.length)].id];
        i.A.sendStickers(t.id, n, "", {
            messageReference: {
                guild_id: t.getGuildId() ?? void 0,
                channel_id: t.id,
                message_id: e
            },
            location: h.Hx.CHANNEL_PROMPT
        });
        return
    }
    let p = d.A.getGuildIds().filter(g).map(e => l.Ay.getUsableGuildEmoji(e)).flat().filter(e => null == m.Ay.getEmojiUnavailableReason({
        emoji: e,
        channel: t,
        guildId: n,
        intention: f.b_.CHAT
    })).sort((e, t) => -_.default.compare(e.id, t.id));
    if (p.length > 10) {
        let n = p[Math.floor(Math.pow(Math.random(), 2) * p.length)];
        i.A.sendMessage(t.id, a.Ay.parse(t, (0, m.N)(n)), !1, {
            location: h.Hx.CHANNEL_PROMPT,
            messageReference: {
                guild_id: t.getGuildId() ?? void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return
    }
    let x = Array.from(o.A.getAllPackStickers().values()).flat().filter(e => e.type === c.NL.STANDARD),
        C = [x[Math.floor(Math.random() * x.length)].id];
    i.A.sendStickers(t.id, C, "", {
        messageReference: {
            guild_id: t.getGuildId() ?? void 0,
            channel_id: t.id,
            message_id: e
        },
        location: h.Hx.CHANNEL_PROMPT
    })
}