/** chunk id: 695282, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => d
}), n(896048);
var r = n(64700),
    i = n(417597),
    a = n(71393),
    o = n(508675),
    s = n(770335),
    l = n(624793),
    c = n(652215);
let u = (e, t, n) => {
        let r = null != n ? e.getCustomEmojiById(n) : null;
        return (null == r ? void 0 : r.type) === s.i.GUILD ? {
            emoji: r,
            joinedEmojiSourceGuildRecord: t.getGuild(null == r ? void 0 : r.guildId)
        } : {
            emoji: null,
            joinedEmojiSourceGuildRecord: null
        }
    },
    d = e => {
        let {
            emojiId: t,
            refreshPositionKey: n
        } = e, {
            joinedEmojiSourceGuildRecord: s,
            emoji: d
        } = (0, i.cf)([o.Ay, a.A], () => u(o.Ay, a.A, t)), f = null != s, p = null != s && s.features.has(c.GuildFeatures.DISCOVERABLE), _ = (!f || p) && null != t, [h, m] = r.useState(_), [g, E] = r.useState(null), y = null != s ? l.GO.createFromGuildRecord(s) : null, [b, O] = r.useState(y), [v, A] = r.useState(null), I = r.useRef(n);
        return r.useEffect(() => {
            I.current = n
        }), r.useEffect(() => {
            var e, n;
            null == (e = I.current) || e.call(I);
            let r = async () => {
                var e;
                let n = null != t ? await (0, l.g_)(t) : null;
                if (null != n) switch (E(n.type), n.type) {
                    case l.rV.APPLICATION:
                        A(n.application);
                        break;
                    case l.rV.GUILD:
                        O(n.guild)
                }
                m(!1), null == (e = I.current) || e.call(I)
            };
            _ ? r() : null == (n = I.current) || n.call(I)
        }, [t, _]), {
            expressionSourceGuild: b,
            expressionSourceApplication: v,
            sourceType: g,
            joinedEmojiSourceGuildRecord: s,
            hasJoinedEmojiSourceGuild: f,
            emoji: d,
            isFetching: h
        }
    }