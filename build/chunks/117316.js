/** chunk id: 117316, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => f
}), n(896048), n(938796);
var l = n(253506),
    r = n(665260),
    i = n(734066),
    a = n(274372),
    s = n(704844),
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
        l = (0, c.rh)(n);
    return l.applicationId = e.applicationId, l.timestamp = e.timestamp, l
}

function f(e, t) {
    let n = function(e, t) {
        var n, i;
        if (h.get(t.id) === e.id) return p(e, t.id);
        if (null == e.applicationId || !(0, r.Lt)(e.flags, d.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === o.default.getId() || null != e.activity || (0, r.Lt)(null != (n = t.recipientFlags) ? n : 0, l.o.DISMISSED_IN_GAME_MESSAGE_NUX) || h.has(t.id)) return null;
        let a = p(e, t.id);
        h.set(t.id, e.id);
        let c = (0, r.lA)(null != (i = t.recipientFlags) ? i : 0, l.o.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return s.A.updatePrivateChannelRecipientFlags(t.id, c), a
    }(e, t);
    if (null != n) return {
        message: n,
        position: "before"
    };
    let f = function(e, t) {
        var n;
        let l, s;
        if (!(0, i.J)() || null == e.attachments.find(e => {
                var t;
                return (0, r.Lt)(null != (t = e.flags) ? t : 0, d.sbO.IS_CLIP)
            }) || e.author.id === o.default.getId()) return null;
        let {
            clipId: h,
            remoteTriggerClipId: p
        } = function(e) {
            let t = "__CLIP_METADATA__",
                n = e.indexOf(t);
            if (-1 === n) return {};
            let l = n + t.length,
                r = e.substring(l);
            try {
                let e = JSON.parse(r);
                return {
                    clipId: e.id,
                    remoteTriggerClipId: e.remoteTriggerClipId
                }
            } catch (e) {
                return {}
            }
        }(e.content);
        if (null == h && null == p) return null;
        let f = a.A.getMatchingGroupClip(h, p);
        return null == f || a.A.wasClipSharedInChannel(f.id, t.id) ? null : (n = t.id, l = (0, u.Ay)({
            channelId: n,
            type: 66,
            content: "",
            author: e.author,
            state: d.cmJ.SENT
        }), (s = (0, c.rh)(l)).timestamp = e.timestamp, s.messageReference = {
            channel_id: n,
            message_id: e.id
        }, s)
    }(e, t);
    return null != f ? {
        message: f,
        position: "after"
    } : null
}