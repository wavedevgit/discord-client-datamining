/** chunk id: 506792 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(442433),
    d = n(676002),
    c = n(47167),
    u = n(734057),
    h = n(808728),
    A = n(576705),
    _ = n(557534),
    m = n(166444),
    p = n(652215),
    g = n(790782),
    f = n(907305);
let E = (0, d.a)(function(e) {
    let {
        guild: t,
        selectedChannelId: s,
        position: d,
        disableManageChannels: E,
        sorting: x,
        sortingType: I,
        sortingPosition: C,
        connectChannelDragSource: N,
        connectChannelDropTarget: T,
        tabIndex: S
    } = e, b = (0, r.bG)([u.A, h.Ay], () => {
        let e = h.Ay.getDirectoryChannelIds(t.id);
        return 0 === e.length ? null : u.A.getChannel(e[0])
    }), y = (0, r.bG)([u.A], () => u.A.getChannel(b?.parent_id)), v = s === b?.id, R = (0, c.Ay)(b), j = (0, r.bG)([A.A], () => null != y ? A.A.can(p.xBc.MANAGE_CHANNELS, y) : null != t && A.A.can(p.xBc.MANAGE_CHANNELS, t)), O = l.useCallback(e => {
        null != b && (0, o.L3)(e, async () => {
            let {
                default: e
            } = await n.e("29559").then(n.bind(n, 994058));
            return t => (0, i.jsx)(e, {
                ...t,
                channel: b
            })
        })
    }, [b]);
    if (null == b) return null;
    let L = (0, _.O6)(d, C),
        M = (0, _.h$)(b, x, I),
        D = (0, i.jsx)("div", {
            className: a()(L, {
                [f.r9]: M,
                [f.wH]: v
            }),
            "data-dnd-name": R,
            children: (0, i.jsxs)(m.Ay, {
                className: f.Ki,
                channel: b,
                guild: t,
                selected: v,
                onContextMenu: O,
                forceInteractable: !0,
                resolvedUnreadSetting: g.e.ONLY_MENTIONS,
                children: [(0, i.jsx)(_.gQ, {
                    channel: b,
                    tabIndex: S
                }), (0, i.jsx)(_.Jd, {
                    channel: b,
                    disableManageChannels: E,
                    tabIndex: S
                })]
            })
        });
    return j && (D = T(N(D))), D
})