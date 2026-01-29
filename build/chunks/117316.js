/** Chunk was on 1113 **/
/** chunk id: 117316, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => g
}), n(896048), n(938796);
var r = n(253506),
    l = n(665260),
    i = n(734066),
    s = n(274372),
    a = n(704844),
    o = n(961350),
    c = n(141468),
    u = n(963852),
    d = n(652215);
let h = new Map;

function p(e, t) {
    let n = (0, u.Ay)({
            channelId: t,
            type: d.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: d.pr7.EPHEMERAL,
            state: d.cmJ.SENT
        }),
        r = (0, c.rh)(n);
    return r.applicationId = e.applicationId, r.timestamp = e.timestamp, r
}

function g(e, t) {
    let n = function(e, t) {
        var n, i;
        if (h.get(t.id) === e.id) return p(e, t.id);
        if (null == e.applicationId || !(0, l.Lt)(e.flags, d.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === o.default.getId() || null != e.activity || (0, l.Lt)(null != (n = t.recipientFlags) ? n : 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX) || h.has(t.id)) return null;
        let s = p(e, t.id);
        h.set(t.id, e.id);
        let c = (0, l.lA)(null != (i = t.recipientFlags) ? i : 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return a.A.updatePrivateChannelRecipientFlags(t.id, c), s
    }(e, t);
    if (null != n) return {
        message: n,
        position: "before"
    };
    let g = function(e, t) {
        var n;
        let r, a;
        if (!(0, i.J)() || null == e.attachments.find(e => {
                var t;
                return (0, l.Lt)(null != (t = e.flags) ? t : 0, d.sbO.IS_CLIP)
            }) || e.author.id === o.default.getId()) return null;
        let {
            clipId: h,
            remoteTriggerClipId: p
        } = function(e) {
            let t = "__CLIP_METADATA__",
                n = e.indexOf(t);
            if (-1 === n) return {};
            let r = n + t.length,
                l = e.substring(r);
            try {
                let e = JSON.parse(l);
                return {
                    clipId: e.id,
                    remoteTriggerClipId: e.remoteTriggerClipId
                }
            } catch (e) {
                return {}
            }
        }(e.content);
        if (null == h && null == p) return null;
        let g = s.A.getMatchingGroupClip(h, p);
        return null == g || s.A.wasClipSharedInChannel(g.id, t.id) ? null : (n = t.id, r = (0, u.Ay)({
            channelId: n,
            type: 66,
            content: "",
            author: e.author,
            state: d.cmJ.SENT
        }), (a = (0, c.rh)(r)).timestamp = e.timestamp, a.messageReference = {
            channel_id: n,
            message_id: e.id
        }, a)
    }(e, t);
    return null != g ? {
        message: g,
        position: "after"
    } : null
}