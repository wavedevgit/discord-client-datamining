/** Chunk was on web.js **/
/** chunk id: 138298, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(73153),
    i = n(843472),
    a = n(56562),
    o = n(225142),
    s = n(547),
    l = n(940382),
    c = n(746080);
let u = {
    openPrivateChannelAsSidebar(e) {
        let {
            channelId: t,
            messageId: n,
            baseChannelId: a,
            hasSingleMessageRequest: o
        } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: a,
            channelId: t,
            details: {
                type: l.LU.MESSAGE_REQUEST,
                hasSingleMessageRequest: o
            }
        }), null != n ? i.A.jumpToMessage({
            channelId: t,
            messageId: n,
            flash: !0
        }) : s.A.fetchMessages({
            channelId: t
        })
    },
    openChannelAsSidebar(e) {
        let {
            guildId: t,
            channelId: n,
            baseChannelId: o,
            flash: c = !0,
            details: u
        } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: o,
            channelId: n,
            details: u
        });
        let d = null == u ? void 0 : u.initialMessageId;
        null != d ? i.A.jumpToMessage({
            channelId: n,
            messageId: d,
            flash: c,
            jumpType: a.US.INSTANT
        }) : s.A.fetchMessages({
            guildId: t,
            channelId: n
        })
    },
    openResourceChannelAsSidebar(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        null != t && ((0, o.bN)(t, n, !1), r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: c.VV.GUILD_HOME,
            channelId: n
        }))
    },
    openModReportAsSidebar(e) {
        let {
            guildId: t,
            baseChannelId: n,
            channelId: o,
            flash: c = !0,
            details: u
        } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MOD_REPORT,
            baseChannelId: n,
            channelId: o,
            details: u
        }), (null == u ? void 0 : u.initialMessageId) != null ? i.A.jumpToMessage({
            channelId: o,
            messageId: u.initialMessageId,
            flash: c,
            jumpType: a.US.INSTANT
        }) : s.A.fetchMessages({
            guildId: t,
            channelId: o
        })
    },
    openThreadAsSidebar(e) {
        let {
            guildId: t,
            baseChannelId: n,
            channelId: o,
            flash: c = !0,
            details: u
        } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_THREAD,
            baseChannelId: n,
            channelId: o,
            details: u
        }), (null == u ? void 0 : u.initialMessageId) != null ? i.A.jumpToMessage({
            channelId: o,
            messageId: u.initialMessageId,
            flash: c,
            jumpType: a.US.INSTANT
        }) : s.A.fetchMessages({
            guildId: t,
            channelId: o
        })
    },
    closeChannelSidebar(e) {
        r.h.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e
        })
    },
    openGuildSidebar(e) {
        let {
            guildId: t,
            baseChannelId: n,
            sidebarType: i,
            details: a
        } = e;
        return r.h.dispatch({
            type: "SIDEBAR_VIEW_GUILD",
            sidebarType: i,
            baseChannelId: n,
            guildId: t,
            details: a
        })
    },
    closeGuildSidebar(e) {
        r.h.dispatch({
            type: "SIDEBAR_CLOSE_GUILD",
            guildId: e
        })
    },
    setSelectedSearchContext(e) {
        r.h.dispatch({
            type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT",
            searchContextId: e
        })
    }
}