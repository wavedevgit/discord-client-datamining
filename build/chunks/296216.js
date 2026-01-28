/** Chunk was on 78528 **/
/** chunk id: 296216, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => p,
    J: () => h
});
var r = n(205369),
    l = n(22174),
    i = n(686956),
    s = n(71393),
    a = n(576705),
    o = n(977997),
    c = n(607567),
    u = n(652215);
let d = "DRAGGABLE_USER";

function p(e) {
    return (0, r.T)(d, {
        canDrop(e) {
            var t, n;
            let {
                channel: r
            } = e, l = r.getGuildId(), i = null != (t = null == (n = s.A.getGuild(l)) ? void 0 : n.maxVideoChannelUsers) ? t : -1, d = c.Ay.countVoiceStatesForChannel(r.id), p = null != l && o.A.hasVideo(r.id) && i > 0 && d >= i + 1;
            return a.A.can(u.xBc.MOVE_MEMBERS, r) && a.A.can(u.xBc.CONNECT, r) && !p
        },
        drop(e, t) {
            let {
                channel: n
            } = e, r = o.A.getVoiceStateForUser(t.getItem().user.id);
            (null == r ? void 0 : r.channelId) !== n.id && i.A.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
        }
    }, (e, t) => ({
        connectUserDropTarget: e.dropTarget(),
        isUserOver: t.isOver() && t.canDrop()
    }))(e)
}

function h(e) {
    return (0, l.I)(d, {
        canDrag(e) {
            let {
                user: t,
                canDrag: n
            } = e;
            return null != n && n
        },
        beginDrag(e) {
            let {
                user: t
            } = e;
            return {
                user: t
            }
        }
    }, e => ({
        connectUserDragSource: e.dragSource()
    }))(e)
}