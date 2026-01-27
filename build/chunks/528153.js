/** Chunk was on web.js **/
/** chunk id: 528153, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(896048);
var r = n(110259),
    i = n(478437),
    a = n(451988),
    o = n(308528),
    s = n(843472),
    l = n(439372),
    c = n(139286),
    u = n(626584),
    d = n(547),
    f = n(21119),
    p = n(253932),
    _ = n(734057),
    h = n(320501),
    m = n(309010),
    g = n(70730),
    E = n(45787),
    y = n(275759),
    b = n(788868);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let v = 1e3,
    A = new u.A("PremiumGiftingIntentManager");
class I extends l.A {
    isChannelEligible(e) {
        switch (e.type) {
            case i.r.DM:
                return !0;
            case i.r.GROUP_DM:
            case i.r.GUILD_TEXT:
            default:
                return !1
        }
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
        new a.J_(v, () => {
            this.maybeSendGiftingPromptSystemMessage(e, t, n, r)
        }).delay()
    }
    maybeSendGiftingPromptSystemMessage(e, t, n, r) {
        let i = m.A.getChannelId(),
            a = y.Ay.isGiftIntentMessageInCooldown(n),
            o = h.A.isReady(e);
        if (!a && e === i) {
            if (!o) return void h.A.whenReady(e, () => {
                m.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, r)
            });
            s.A.sendGiftingPromptSystemMessage(e, {
                giftIntentType: t,
                recipientUserId: n,
                giftIntentSecondaryAction: r
            }), (0, E.xs)(n)
        }
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let {
            enabled: t
        } = g.u.getConfig({
            location: "PremiumGiftingIntentManager handleChannelSelect"
        }), n = _.A.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = y.Ay.getFriendAnniversaries().filter(t => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, b.np.FRIEND_ANNIVERSARY, e, b.l1.SEND_MESSAGE)
            }
        }
    }
    async sendGiftingNotificationIfEligible() {
        let {
            enabled: e
        } = g.u.getConfig({
            location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification"
        }), t = p.oz.getSetting();
        if (!e || !t) return;
        let n = y.Ay.getNextRecipientUserIDForNotification();
        if (null != n) try {
            let e = await o.A.getOrEnsurePrivateChannel(n),
                t = _.A.getChannel(e);
            if (null == t) return;
            if (h.A.isReady(t.id) || await d.A.fetchMessages({
                    channelId: t.id,
                    isPreload: !0
                }), h.A.getMessages(t.id).cached) return void A.info("Skipping gift intent notification - fetched messages marked as stale", {
                channelId: t.id,
                recipientUserID: n
            });
            let i = y.Ay.getNextRecipientUserIDForNotification();
            if (i !== n) return;
            s.A.sendGiftingPromptSystemMessage(t.id, {
                giftIntentType: b.np.FRIEND_ANNIVERSARY,
                recipientUserId: i,
                giftIntentSecondaryAction: b.l1.SEND_MESSAGE
            });
            let a = f.A.getUserAffinity(i);
            (0, c.x)({
                name: r.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                type: r.ImpressionTypes.VIEW,
                properties: {
                    gift_intent_type: b.np.FRIEND_ANNIVERSARY,
                    dm_affinity: null == a ? void 0 : a.dmProbability,
                    channel_id: t.id
                }
            }), (0, E.xs)(i), (0, E.BT)()
        } catch (e) {
            A.error("Failed to fetch DM channel data for gifting notification", {
                recipientUserID: n,
                error: e
            })
        }
    }
    onChannelSelect(e) {
        let {
            channelId: t
        } = e;
        this.sendGiftPromptMessageInSelectedChannelIfEligible(t)
    }
    onPostConnectionOpen() {
        this.sendGiftingNotificationIfEligible();
        let e = m.A.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e)
    }
    constructor(...e) {
        super(...e), O(this, "actions", {
            POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
            CHANNEL_SELECT: e => this.onChannelSelect(e)
        })
    }
}
let S = new I