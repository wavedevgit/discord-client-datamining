/** chunk id: 504136, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(321073);
var i = n(448761),
    l = n(559149),
    s = n(405269),
    a = n(661191),
    r = n(857069),
    o = n(694318),
    c = n(117316),
    d = n(652215);

function u(e) {
    let t, n, u, {
            channel: h,
            messages: m,
            oldestUnreadMessageId: A,
            treatSpam: g,
            summaries: p,
            selectedSummary: f
        } = e,
        _ = [],
        E = !1,
        x = null != A ? a.default.extractTimestamp(A) : null,
        C = null;
    return m.forEach(e => {
        var l, S;
        let I, T;
        if (null != p && p.length > 0) {
            let t = a.default.extractTimestamp(e.id);
            for (let e = 0; e < p?.length; e++) {
                if (null == p[e]) continue;
                let n = a.default.extractTimestamp(p[e].startId),
                    i = a.default.extractTimestamp(p[e].endId);
                if (t >= n && t <= i) {
                    if (C === p[e].id) break;
                    _.push({
                        type: d.TZK.DIVIDER,
                        content: p[e].topic,
                        contentKey: p[e].id
                    }), C = p[e].id;
                    break
                }
            }
        }
        let N = (0, s.i$)(e.timestamp, "LL");
        N !== t && null == C && (_.push({
            type: d.TZK.DIVIDER,
            content: N,
            contentKey: N
        }), t = N);
        let y = _[_.length - 1],
            v = null,
            b = (0, o.kf)(e);
        E = E || b;
        let j = function(e, t, n) {
            if (i.M.NON_COLLAPSIBLE.has(t.type));
            else if (t.hasFlag(d.pr7.HIDDEN_SUSPENDED_USER)) return d.TZK.MESSAGE_GROUP_SUSPENDED_USER;
            else if (t.blocked) return d.TZK.MESSAGE_GROUP_BLOCKED;
            else if (t.ignored) return d.TZK.MESSAGE_GROUP_IGNORED;
            else if ((0, o.iJ)(e) && n) return d.TZK.MESSAGE_GROUP_SPAMMER;
            return null
        }(h, e, b && g);
        (null !== j && ([v, y] = (T = l = y, null == l || l.type !== j ? (I = {
            type: j,
            content: [],
            key: e.id
        }, _.push(I)) : T = (I = l).content[I.content.length - 1], [I, T])), A === e.id && null != x) ? (null != y && y.type === d.TZK.DIVIDER ? y.unreadId = e.id : null !== v ? (S = v, e.isFirstMessageInForumPost(h) || S.content.push({
            type: d.TZK.DIVIDER,
            unreadId: e.id
        }), S.hasUnread = !0) : e.isFirstMessageInForumPost(h) || _.push({
            type: d.TZK.DIVIDER,
            unreadId: e.id
        }), x = null) : null != x && a.default.extractTimestamp(e.id) > x && (e.isFirstMessageInForumPost(h) || _.push({
            type: d.TZK.DIVIDER,
            unreadId: e.id
        }), x = null);
        let R = (0, c.r)(e, h);
        null != R && "before" === R.position && _.push({
            type: d.TZK.MESSAGE,
            content: R.message,
            groupId: R.message.id
        });
        let M = y?.type === d.TZK.MESSAGE ? u : y;
        (0, r.l)(h, M, e) && (n = e.id);
        let D = {
            type: e.type === d.lAJ.THREAD_STARTER_MESSAGE ? d.TZK.THREAD_STARTER_MESSAGE : d.TZK.MESSAGE,
            content: e,
            groupId: n
        };
        n === e.id && (u = D);
        let {
            jumpSequenceId: O,
            jumpFlash: L,
            jumpTargetId: P
        } = m;
        L && e.id === P && null != O && (D.flashKey = O), m.jumpTargetId === e.id && (D.jumpTarget = !0), null != f && e.id === f.startId && f.count > 1 && _.push({
            type: d.TZK.DIVIDER,
            content: f.topic,
            contentKey: f.startId,
            isSummaryDivider: !0
        }), null !== v ? (v.content.push(D), D.jumpTarget && (v.hasJumpTarget = !0)) : _.push(D), e.isFirstMessageInForumPost(h) && _.push({
            type: d.TZK.FORUM_POST_ACTION_BAR
        }), null != R && "after" === R.position && _.push({
            type: d.TZK.MESSAGE,
            content: R.message,
            groupId: R.message.id
        }), null != f && e.id === f.endId && f.count > 1 && _.push({
            type: d.TZK.DIVIDER,
            contentKey: f.endId,
            isSummaryDivider: !0
        })
    }), E && (0, o.iJ)(h) && l.A.trackExposure({
        location: "416cc9_1"
    }), _
}