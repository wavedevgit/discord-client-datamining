/** Chunk was on 21738 **/
/** chunk id: 673310, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(698441),
    s = n(976860),
    o = n(378570),
    c = n(657331),
    u = n(665583),
    d = n(244625),
    p = n(652215),
    h = n(277716);

function g(e) {
    let {
        item: t
    } = e, n = i.useCallback(e => {
        if (null == e.target.closest('img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]')) switch (t.data.kind) {
            case "message":
                (0, o.ci)(t.data.message.channel_id, t.data.message.id);
                break;
            case "guildEvent": {
                let e = a.Ay.getGuildScheduledEvent(t.data.eventId);
                null != e && (0, s.pX)(p.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                break
            }
            case "forumThread":
                (0, o.ci)(t.data.threadChannel.id, t.data.message.id);
                break;
            case "generatedCandidate":
                (0, o.ci)(t.data.item.channel_id, t.data.item.message_ids[0]);
                break;
            case "contentInventory":
                (0, c.openUserProfileModal)({
                    userId: t.data.content.author_id
                })
        }
    }, [t]);
    return (0, r.jsxs)(l.DUT, {
        className: h.k,
        onClick: n,
        children: [(0, r.jsx)(d.A, {
            item: t
        }), (0, r.jsx)("div", {
            className: h.o,
            children: (0, r.jsx)(u.A, {
                item: t
            })
        })]
    })
}