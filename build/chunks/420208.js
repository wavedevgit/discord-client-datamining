/** chunk id: 420208, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Q: () => b
}), n(896048), n(864466), n(443073), n(638769);
var r = n(843472),
    i = n(508675),
    l = n(451909),
    a = n(361670),
    s = n(631576),
    o = n(679382),
    c = n(842086),
    u = n(71393),
    d = n(287809),
    p = n(690521),
    m = n(661191),
    f = n(652215),
    g = n(307731),
    _ = n(381941);

function h(e) {
    let t = u.A.getGuild(e);
    return null != t && (t.nsfwLevel === f.ftr.DEFAULT || t.nsfwLevel === f.ftr.SAFE)
}
async function b(e, t) {
    var n, f, b;
    let y = t.getGuildId();
    if (null == y || null == u.A.getGuild(y)) return;
    let A = d.default.getCurrentUser();
    if (null == A) return;
    await (0, s.YB)();
    let v = Array.from(o.A.getAllGuildStickers().values()).flat().filter(e => h(e.guild_id) && (0, a.G7)(e, A, t)).sort((e, t) => -m.default.compare(e.id, t.id));
    if (v.length > 5) {
        let n = [v[Math.floor(Math.pow(Math.random(), 2) * v.length)].id];
        r.A.sendStickers(t.id, n, "", {
            messageReference: {
                guild_id: null != (f = t.getGuildId()) ? f : void 0,
                channel_id: t.id,
                message_id: e
            },
            location: _.Hx.CHANNEL_PROMPT
        });
        return
    }
    let O = u.A.getGuildIds().filter(h).map(e => i.Ay.getUsableGuildEmoji(e)).flat().filter(e => null == p.Ay.getEmojiUnavailableReason({
        emoji: e,
        channel: t,
        guildId: y,
        intention: g.b_.CHAT
    })).sort((e, t) => -m.default.compare(e.id, t.id));
    if (O.length > 10) {
        let n = O[Math.floor(Math.pow(Math.random(), 2) * O.length)];
        r.A.sendMessage(t.id, l.Ay.parse(t, (0, p.N)(n)), !1, {
            location: _.Hx.CHANNEL_PROMPT,
            messageReference: {
                guild_id: null != (b = t.getGuildId()) ? b : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return
    }
    let x = Array.from(o.A.getAllPackStickers().values()).flat().filter(e => e.type === c.NL.STANDARD),
        E = [x[Math.floor(Math.random() * x.length)].id];
    r.A.sendStickers(t.id, E, "", {
        messageReference: {
            guild_id: null != (n = t.getGuildId()) ? n : void 0,
            channel_id: t.id,
            message_id: e
        },
        location: _.Hx.CHANNEL_PROMPT
    })
}