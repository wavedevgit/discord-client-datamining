/** Chunk was on web.js **/
/** chunk id: 420208, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => b
}), n(896048), n(864466), n(443073), n(638769);
var r = n(843472),
    i = n(508675),
    a = n(451909),
    s = n(361670),
    o = n(631576),
    l = n(679382),
    c = n(842086),
    u = n(71393),
    d = n(287809),
    f = n(690521),
    p = n(661191),
    _ = n(652215),
    h = n(307731),
    m = n(381941);
let g = 5,
    E = 10;

function y(e) {
    let t = u.A.getGuild(e);
    return null != t && (t.nsfwLevel === _.ftr.DEFAULT || t.nsfwLevel === _.ftr.SAFE)
}
async function b(e, t) {
    var n, _, b;
    let O = t.getGuildId();
    if (null == O || null == u.A.getGuild(O)) return;
    let v = d.default.getCurrentUser();
    if (null == v) return;
    await (0, o.YB)();
    let A = Array.from(l.A.getAllGuildStickers().values()).flat().filter(e => y(e.guild_id) && (0, s.G7)(e, v, t)).sort((e, t) => -p.default.compare(e.id, t.id));
    if (A.length > g) {
        let n = [A[Math.floor(Math.pow(Math.random(), 2) * A.length)].id];
        r.A.sendStickers(t.id, n, "", {
            messageReference: {
                guild_id: null != (_ = t.getGuildId()) ? _ : void 0,
                channel_id: t.id,
                message_id: e
            },
            location: m.Hx.CHANNEL_PROMPT
        });
        return
    }
    let I = u.A.getGuildIds().filter(y).map(e => i.Ay.getUsableGuildEmoji(e)).flat().filter(e => null == f.Ay.getEmojiUnavailableReason({
        emoji: e,
        channel: t,
        guildId: O,
        intention: h.b_.CHAT
    })).sort((e, t) => -p.default.compare(e.id, t.id));
    if (I.length > E) {
        let n = I[Math.floor(Math.pow(Math.random(), 2) * I.length)];
        r.A.sendMessage(t.id, a.Ay.parse(t, (0, f.N)(n)), !1, {
            location: m.Hx.CHANNEL_PROMPT,
            messageReference: {
                guild_id: null != (b = t.getGuildId()) ? b : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return
    }
    let S = Array.from(l.A.getAllPackStickers().values()).flat().filter(e => e.type === c.NL.STANDARD),
        T = [S[Math.floor(Math.random() * S.length)].id];
    r.A.sendStickers(t.id, T, "", {
        messageReference: {
            guild_id: null != (n = t.getGuildId()) ? n : void 0,
            channel_id: t.id,
            message_id: e
        },
        location: m.Hx.CHANNEL_PROMPT
    })
}