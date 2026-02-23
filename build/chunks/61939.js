/** chunk id: 61939, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(945810),
    l = n(71393),
    s = n(222823),
    a = n(287809),
    r = n(954571),
    o = n(661191),
    c = n(652215);
(0, i.mj)({
    name: "2026-01-red-dot-navigate-to-mentions",
    kind: "user",
    defaultConfig: {
        enableTracking: !1,
        enableNavigation: !1
    },
    variations: {
        1: {
            enableTracking: !0,
            enableNavigation: !1
        },
        2: {
            enableTracking: !0,
            enableNavigation: !0
        }
    }
});
let d = (0, i.mj)({
    name: "2026-02-red-dot-navigate-to-mentions-web",
    kind: "user",
    defaultConfig: {
        enableTracking: !1,
        enableNavigation: !1
    },
    variations: {
        1: {
            enableTracking: !0,
            enableNavigation: !1
        },
        2: {
            enableTracking: !0,
            enableNavigation: !0
        }
    }
});

function u(e) {
    let {
        channel: t,
        messages: n,
        track: i
    } = e;
    if (!(c.kvI.GUILD_TEXTUAL.has(t.type) && !c.kvI.THREADS.has(t.type)) || !n.ready) return null;
    let u = a.default.getCurrentUser();
    if (null == u) return null;
    let h = s.Ay.getMentionCount(t.id);
    if (h <= 0) return null;
    let {
        enableTracking: m,
        enableNavigation: A
    } = d.getConfig({
        location: "trackMentionsOnInitialUnreadChannelLoad"
    });
    if (!m && !A) return null;
    let g = s.Ay.ackMessageId(t.id),
        p = null != g;
    if (null == g) {
        let e = l.A.getGuild(t.guild_id);
        null != e && null != e.joinedAt && (g = o.default.fromTimestamp(e.joinedAt.getTime()))
    }
    let f = 0,
        _ = null;
    return n.forAll(e => {
        o.default.compare(e.id, g) > 0 && (0, s.Wm)(e, u) && (f++, A && (null == _ || 0 > o.default.compare(e.id, _)) && (_ = e.id))
    }), i && m && r.default.track(c.HAw.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
        channel_id: t.id,
        channel_type: t.type,
        total_badge_count: h,
        loaded_mention_count: f,
        has_previous_ack: p
    }), _
}