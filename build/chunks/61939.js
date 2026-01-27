/** Chunk was on 77870 **/
/** chunk id: 61939, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => d
});
var r = n(945810),
    l = n(71393),
    i = n(222823),
    s = n(287809),
    a = n(954571),
    o = n(661191),
    c = n(652215);
let u = (0, r.mj)({
    name: "2026-01-red-dot-navigate-to-mentions",
    kind: "user",
    defaultConfig: {
        enableTracking: !1
    },
    variations: {
        1: {
            enableTracking: !0
        }
    }
});

function d(e, t) {
    if (!c.kvI.GUILD_TEXTUAL.has(e.type) || !t.ready) return;
    let n = s.default.getCurrentUser();
    if (null == n) return;
    let r = i.Ay.getMentionCount(e.id);
    if (r <= 0) return;
    let {
        enableTracking: d
    } = u.getConfig({
        location: "trackMentionsOnInitialUnreadChannelLoad"
    });
    if (!d) return;
    let p = i.Ay.ackMessageId(e.id),
        h = null != p;
    if (null == p) {
        let t = l.A.getGuild(e.guild_id);
        null != t && null != t.joinedAt && (p = o.default.fromTimestamp(t.joinedAt.getTime()))
    }
    let f = 0;
    t.forAll(e => {
        o.default.compare(e.id, p) > 0 && (0, i.Wm)(e, n) && f++
    }), a.default.track(c.HAw.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
        channel_id: e.id,
        channel_type: e.type,
        total_badge_count: r,
        loaded_mention_count: f,
        has_previous_ack: h
    })
}