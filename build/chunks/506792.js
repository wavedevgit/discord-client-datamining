/** chunk id: 506792, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(442433),
    c = n(676002),
    u = n(734057),
    d = n(808728),
    h = n(576705),
    p = n(557534),
    g = n(166444),
    f = n(652215),
    m = n(790782),
    b = n(728444);
let A = (0, c.a)(function(e) {
    let {
        guild: t,
        selectedChannelId: i,
        position: c,
        disableManageChannels: A,
        sorting: y,
        sortingType: O,
        sortingPosition: _,
        connectChannelDragSource: j,
        connectChannelDropTarget: x,
        tabIndex: v
    } = e, E = (0, a.bG)([u.A, d.Ay], () => {
        let e = d.Ay.getDirectoryChannelIds(t.id);
        return 0 === e.length ? null : u.A.getChannel(e[0])
    }), C = (0, a.bG)([u.A], () => u.A.getChannel(null == E ? void 0 : E.parent_id)), S = i === (null == E ? void 0 : E.id), I = (0, a.bG)([h.A], () => null != C ? h.A.can(f.xBc.MANAGE_CHANNELS, C) : null != t && h.A.can(f.xBc.MANAGE_CHANNELS, t)), N = l.useCallback(e => {
        null != E && (0, o.L3)(e, async () => {
            let {
                default: e
            } = await n.e("29559").then(n.bind(n, 994058));
            return t => {
                var n, l;
                return (0, r.jsx)(e, (n = function(e) {
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
                }({}, t), l = l = {
                    channel: E
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
            }
        })
    }, [E]);
    if (null == E) return null;
    let T = (0, p.O6)(c, _),
        P = (0, p.h$)(E, y, O),
        w = (0, r.jsx)("div", {
            className: s()(T, {
                [b.r9]: P,
                [b.wH]: S
            }),
            "data-dnd-name": E.name,
            children: (0, r.jsxs)(g.Ay, {
                className: b.Ki,
                channel: E,
                guild: t,
                selected: S,
                onContextMenu: N,
                forceInteractable: !0,
                resolvedUnreadSetting: m.e.ONLY_MENTIONS,
                children: [(0, r.jsx)(p.gQ, {
                    channel: E,
                    tabIndex: v
                }), (0, r.jsx)(p.Jd, {
                    channel: E,
                    disableManageChannels: A,
                    tabIndex: v
                })]
            })
        });
    return I && (w = x(j(w))), w
})