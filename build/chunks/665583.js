/** chunk id: 665583 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(681154),
    r = n(900062),
    a = n(470881),
    s = n(497302),
    o = n(670861);

function d(e) {
    let {
        item: t
    } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, i.jsx)(s.A, {
                eventId: t.data.eventId
            });
        case "message":
        case "forumThread":
            return (0, i.jsx)(o.A, {
                item: t
            });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case l.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, i.jsx)(r.A, {
                        item: t
                    });
                case l.ContentInventoryEntryType.PLAYED_GAME:
                case l.ContentInventoryEntryType.TOP_GAME:
                    return (0, i.jsx)(a.A, {
                        item: t
                    });
                default:
                    return (0, i.jsx)("div", {
                        children: "Unsupported content inventory type"
                    })
            }
        default:
            return (0, i.jsx)("div", {
                children: "Unknown item type"
            })
    }
}