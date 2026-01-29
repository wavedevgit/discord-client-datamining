/** Chunk was on 1113 **/
/** chunk id: 676002, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => C
});
var r = n(627968);
n(64700);
var l = n(205369),
    i = n(22174),
    s = n(397927),
    a = n(686956),
    o = n(999903),
    c = n(544169),
    u = n(422258),
    d = n(770376),
    h = n(395504),
    p = n(924985),
    g = n(734057),
    f = n(769765),
    m = n(808728),
    b = n(71393),
    A = n(576705),
    y = n(967198),
    O = n(343360),
    _ = n(488926),
    x = n(652215);

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let v = "DRAGGABLE_GUILD_CHANNEL";

function E(e, t) {
    var n, r;
    if (null == e || null == t) return null;
    if (e !== x.YYv) return g.A.getChannel(t);
    let l = m.Ay.getChannels(e),
        i = null != (n = null != (r = l[m.I6].find(e => e.channel.id === t)) ? r : l[m.vM].find(e => e.channel.id === t)) ? n : l[x.rbe.GUILD_CATEGORY].find(e => e.channel.id === t);
    return null == i ? void 0 : i.channel
}

function C(e) {
    return (0, l.T)(v, {
        drop(e, t) {
            let n, l = y.A.getGuildId(),
                i = t.getItem(),
                o = (0, O.QO)(E(l, i.id), i.position, e.channel, e.position, i.channelList);
            if (null == o) return;
            let d = E(l, i.id);
            if (null == d) return;
            let h = f.A.getCategories(l),
                p = b.A.getGuild(l);
            if (null == p) return;
            let m = (0, O.Zj)(d, E(l, o.referenceId), o.parentId, h);
            if (0 !== m.length) {
                if (l === x.YYv) return void(0, u.S_)(m);
                if (m = m.filter(e => {
                        let {
                            id: t
                        } = e, n = g.A.getChannel(t);
                        if (null == n) return !1;
                        let r = g.A.getChannel(n.parent_id);
                        return n.type === x.rbe.GUILD_CATEGORY || null == r ? A.A.can(x.xBc.MANAGE_CHANNELS, p) : A.A.can(x.xBc.MANAGE_CHANNELS, r)
                    }), d.parent_id !== o.parentId && m.find(e => {
                        if (e.id !== d.id) return !1;
                        let t = g.A.getChannel(e.parent_id);
                        if (!(null != t && A.A.can(x.xBc.MANAGE_ROLES, d) && A.A.can(x.xBc.MANAGE_ROLES, t))) return !0;
                        let r = _.r(d, t),
                            l = _.r(d, g.A.getChannel(d.parent_id));
                        return (null != d.parent_id || r) && (!l || r) || (n = e), !0
                    }), null != n) {
                    let e = g.A.getChannel(n.parent_id);
                    null != e && (0, s.qfG)(t => {
                        var i, s;
                        return (0, r.jsx)(c.default, (i = j({}, t), s = s = {
                            channel: d,
                            category: e,
                            onConfirm: () => {
                                null != n && (n.lock_permissions = !0, a.A.batchChannelUpdate(l, m))
                            },
                            onCancel: () => {
                                null != n && a.A.batchChannelUpdate(l, m)
                            }
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(s)).forEach(function(e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
                        }), i))
                    })
                } else a.A.batchChannelUpdate(l, m)
            }
        },
        canDrop(e, t) {
            let n = t.getItem(),
                r = g.A.getChannel(n.id);
            if (null == r) return !1;
            let l = (0, O.QO)(g.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
            if (null == l) return !1;
            if (y.A.getGuildId() === x.YYv) return !0;
            let i = b.A.getGuild(n.guildId);
            if (null == i) return !1;
            let s = g.A.getChannel(l.parentId),
                a = g.A.getChannel(r.parent_id),
                o = A.A.can(x.xBc.MANAGE_CHANNELS, i),
                c = null != a ? A.A.can(x.xBc.MANAGE_CHANNELS, a) : o,
                u = null != s ? A.A.can(x.xBc.MANAGE_CHANNELS, s) : o;
            return c && u
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
    })((0, i.I)(v, {
        canDrag(e) {
            let {
                channel: t
            } = e;
            if (y.A.getGuildId() === x.YYv) return !0;
            let l = b.A.getGuild(t.getGuildId());
            if (null == l) return !1;
            if ((0, h.WW)(l.id) && A.A.can(x.xBc.MANAGE_CHANNELS, l)) return (0, d.A)() && (0, s.mMO)(async () => {
                let {
                    default: e
                } = await n.e("2467").then(n.bind(n, 354643));
                return t => (0, r.jsx)(e, j({}, t))
            }), !1;
            if (t.type === x.rbe.GUILD_CATEGORY) return A.A.can(x.xBc.MANAGE_CHANNELS, l) && !(0, h.WW)(l.id);
            let i = g.A.getChannel(t.parent_id);
            return null != i && A.A.can(x.xBc.MANAGE_CHANNELS, i) || null == i && A.A.can(x.xBc.MANAGE_CHANNELS, l)
        },
        beginDrag(e) {
            let {
                channel: {
                    id: t,
                    parent_id: n,
                    guild_id: r,
                    type: l
                },
                position: i
            } = e, s = y.A.getGuildId(), a = f.A.getCategories(s);
            return {
                isChannelDrag: !0,
                id: t,
                position: i,
                parentId: n,
                type: l,
                channelList: (0, o.A)(a._categories, a, e => {
                    let {
                        channel: t
                    } = e;
                    return t.type === x.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length ? s === x.YYv || A.A.can(x.xBc.MANAGE_CHANNELS, t) && A.A.can(x.xBc.VIEW_CHANNEL, t) : !p.A.isCollapsed(t.parent_id)
                }),
                guildId: r
            }
        }
    }, e => ({
        connectChannelDragSource: e.dragSource(),
        connectDragPreview: e.dragPreview()
    }))(e))
}