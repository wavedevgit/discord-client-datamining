/** chunk id: 676002 params = (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => T
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
    u = n(5180),
    h = n(770376),
    A = n(395504),
    m = n(924985),
    _ = n(734057),
    p = n(769765),
    g = n(808728),
    f = n(71393),
    x = n(576705),
    C = n(967198),
    E = n(343360),
    I = n(488926),
    N = n(652215);
let b = "DRAGGABLE_GUILD_CHANNEL";

function S(e, t) {
    if (null == e || null == t) return null;
    if (!(0, u.ai)(e)) return _.A.getChannel(t);
    let n = g.Ay.getChannels(e),
        i = n[g.I6].find(e => e.channel.id === t) ?? n[g.vM].find(e => e.channel.id === t) ?? n[N.rbe.GUILD_CATEGORY].find(e => e.channel.id === t);
    return i?.channel
}

function T(e) {
    return (0, s.T)(b, {
        drop(e, t) {
            let n, s = C.A.getGuildId(),
                l = t.getItem(),
                o = (0, E.QO)(S(s, l.id), l.position, e.channel, e.position, l.channelList);
            if (null == o) return;
            let h = S(s, l.id);
            if (null == h) return;
            let A = p.A.getCategories(s),
                m = f.A.getGuild(s);
            if (null == m) return;
            let g = (0, E.Zj)(h, S(s, o.referenceId), o.parentId, A);
            if (0 !== g.length) {
                if ((0, u.ai)(s)) return void(0, d.zN)(g);
                if (g = g.filter(e => {
                        let {
                            id: t
                        } = e, n = _.A.getChannel(t);
                        if (null == n) return !1;
                        let i = _.A.getChannel(n.parent_id);
                        return n.type === N.rbe.GUILD_CATEGORY || null == i ? x.A.can(N.xBc.MANAGE_CHANNELS, m) : x.A.can(N.xBc.MANAGE_CHANNELS, i)
                    }), h.parent_id !== o.parentId && g.find(e => {
                        if (e.id !== h.id) return !1;
                        let t = _.A.getChannel(e.parent_id);
                        if (!(null != t && x.A.can(N.xBc.MANAGE_ROLES, h) && x.A.can(N.xBc.MANAGE_ROLES, t))) return !0;
                        let i = I.r(h, t),
                            s = I.r(h, _.A.getChannel(h.parent_id));
                        return (null != h.parent_id || i) && (!s || i) || (n = e), !0
                    }), null != n) {
                    let e = _.A.getChannel(n.parent_id);
                    null != e && (0, a.qfG)(t => (0, i.jsx)(c.default, {
                        ...t,
                        channel: h,
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
                i = _.A.getChannel(n.id);
            if (null == i) return !1;
            let s = (0, E.QO)(_.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
            if (null == s) return !1;
            if ((0, u.ai)(C.A.getGuildId())) return !0;
            let l = f.A.getGuild(n.guildId);
            if (null == l) return !1;
            let a = _.A.getChannel(s.parentId),
                r = _.A.getChannel(i.parent_id),
                o = x.A.can(N.xBc.MANAGE_CHANNELS, l),
                c = null != r ? x.A.can(N.xBc.MANAGE_CHANNELS, r) : o,
                d = null != a ? x.A.can(N.xBc.MANAGE_CHANNELS, a) : o;
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
    })((0, l.I)(b, {
        canDrag(e) {
            let {
                channel: t
            } = e;
            if ((0, u.ai)(C.A.getGuildId())) return !0;
            let s = f.A.getGuild(t.getGuildId());
            if (null == s) return !1;
            if ((0, A.WW)(s.id) && x.A.can(N.xBc.MANAGE_CHANNELS, s)) return (0, h.A)() && (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("2467").then(n.bind(n, 354643));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            }), !1;
            if (t.type === N.rbe.GUILD_CATEGORY) return x.A.can(N.xBc.MANAGE_CHANNELS, s) && !(0, A.WW)(s.id);
            let l = _.A.getChannel(t.parent_id);
            return null != l && x.A.can(N.xBc.MANAGE_CHANNELS, l) || null == l && x.A.can(N.xBc.MANAGE_CHANNELS, s)
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
            } = e, a = C.A.getGuildId(), r = p.A.getCategories(a);
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
                    return t.type === N.rbe.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length ? !!(0, u.ai)(a) || x.A.can(N.xBc.MANAGE_CHANNELS, t) && x.A.can(N.xBc.VIEW_CHANNEL, t) : !m.A.isCollapsed(t.parent_id)
                }),
                guildId: i
            }
        }
    }, e => ({
        connectChannelDragSource: e.dragSource(),
        connectDragPreview: e.dragPreview()
    }))(e))
}