/** chunk id: 676002, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => S
});
var i = n(627968);
n(64700);
var s = n(205369),
    l = n(22174),
    a = n(397927),
    r = n(686956),
    o = n(999903),
    c = n(544169),
    d = n(422258),
    u = n(770376),
    h = n(395504),
    A = n(924985),
    m = n(734057),
    p = n(769765),
    g = n(808728),
    _ = n(71393),
    f = n(576705),
    x = n(967198),
    C = n(343360),
    E = n(488926),
    I = n(652215);
let N = "DRAGGABLE_GUILD_CHANNEL";

function b(e, t) {
    if (null == e || null == t) return null;
    if (e !== I.YYv) return m.A.getChannel(t);
    let n = g.Ay.getChannels(e),
        i = n[g.I6].find(e => e.channel.id === t) ?? n[g.vM].find(e => e.channel.id === t) ?? n[I.rbe.GUILD_CATEGORY].find(e => e.channel.id === t);
    return i?.channel
}

function S(e) {
    return (0, s.T)(N, {
        drop(e, t) {
            let n, s = x.A.getGuildId(),
                l = t.getItem(),
                o = (0, C.QO)(b(s, l.id), l.position, e.channel, e.position, l.channelList);
            if (null == o) return;
            let u = b(s, l.id);
            if (null == u) return;
            let h = p.A.getCategories(s),
                A = _.A.getGuild(s);
            if (null == A) return;
            let g = (0, C.Zj)(u, b(s, o.referenceId), o.parentId, h);
            if (0 !== g.length) {
                if (s === I.YYv) return void(0, d.zN)(g);
                if (g = g.filter(e => {
                        let {
                            id: t
                        } = e, n = m.A.getChannel(t);
                        if (null == n) return !1;
                        let i = m.A.getChannel(n.parent_id);
                        return n.type === I.rbe.GUILD_CATEGORY || null == i ? f.A.can(I.xBc.MANAGE_CHANNELS, A) : f.A.can(I.xBc.MANAGE_CHANNELS, i)
                    }), u.parent_id !== o.parentId && g.find(e => {
                        if (e.id !== u.id) return !1;
                        let t = m.A.getChannel(e.parent_id);
                        if (!(null != t && f.A.can(I.xBc.MANAGE_ROLES, u) && f.A.can(I.xBc.MANAGE_ROLES, t))) return !0;
                        let i = E.r(u, t),
                            s = E.r(u, m.A.getChannel(u.parent_id));
                        return (null != u.parent_id || i) && (!s || i) || (n = e), !0
                    }), null != n) {
                    let e = m.A.getChannel(n.parent_id);
                    null != e && (0, a.qfG)(t => (0, i.jsx)(c.default, {
                        ...t,
                        channel: u,
                        category: e,
                        onConfirm: () => {
                            null != n && (n.lock_permissions = !0, r.A.batchChannelUpdate(s, g))
                        },
                        onCancel: () => {
                            null != n && r.A.batchChannelUpdate(s, g)
                        }
                    }))
                } else r.A.batchChannelUpdate(s, g)
            }
        },
        canDrop(e, t) {
            let n = t.getItem(),
                i = m.A.getChannel(n.id);
            if (null == i) return !1;
            let s = (0, C.QO)(m.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
            if (null == s) return !1;
            if (x.A.getGuildId() === I.YYv) return !0;
            let l = _.A.getGuild(n.guildId);
            if (null == l) return !1;
            let a = m.A.getChannel(s.parentId),
                r = m.A.getChannel(i.parent_id),
                o = f.A.can(I.xBc.MANAGE_CHANNELS, l),
                c = null != r ? f.A.can(I.xBc.MANAGE_CHANNELS, r) : o,
                d = null != a ? f.A.can(I.xBc.MANAGE_CHANNELS, a) : o;
            return c && d
        }
    }, (e, t) => {
        let n = t.getItem();
        return null == n || null == n.isChannelDrag ? {
            connectChannelDropTarget: e.dropTarget(),
            sorting: !1,
            sortingType: null,
            sortingPosition: null,
            sortingParent: null
        } : {
            connectChannelDropTarget: e.dropTarget(),
            sorting: !0,
            sortingType: n.type,
            sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
            sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
        }
    })((0, l.I)(N, {
        canDrag(e) {
            let {
                channel: t
            } = e;
            if (x.A.getGuildId() === I.YYv) return !0;
            let s = _.A.getGuild(t.getGuildId());
            if (null == s) return !1;
            if ((0, h.WW)(s.id) && f.A.can(I.xBc.MANAGE_CHANNELS, s)) return (0, u.A)() && (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("2467").then(n.bind(n, 354643));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            }), !1;
            if (t.type === I.rbe.GUILD_CATEGORY) return f.A.can(I.xBc.MANAGE_CHANNELS, s) && !(0, h.WW)(s.id);
            let l = m.A.getChannel(t.parent_id);
            return null != l && f.A.can(I.xBc.MANAGE_CHANNELS, l) || null == l && f.A.can(I.xBc.MANAGE_CHANNELS, s)
        },
        beginDrag(e) {
            let {
                channel: {
                    id: t,
                    parent_id: n,
                    guild_id: i,
                    type: s
                },
                position: l
            } = e, a = x.A.getGuildId(), r = p.A.getCategories(a);
            return {
                isChannelDrag: !0,
                id: t,
                position: l,
                parentId: n,
                type: s,
                channelList: (0, o.A)(r._categories, r, e => {
                    let {
                        channel: t
                    } = e;
                    return t.type === I.rbe.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length ? a === I.YYv || f.A.can(I.xBc.MANAGE_CHANNELS, t) && f.A.can(I.xBc.VIEW_CHANNEL, t) : !A.A.isCollapsed(t.parent_id)
                }),
                guildId: i
            }
        }
    }, e => ({
        connectChannelDragSource: e.dragSource(),
        connectDragPreview: e.dragPreview()
    }))(e))
}