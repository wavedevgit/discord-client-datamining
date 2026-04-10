/** chunk id: 646881 params = (module,exports,require) **/
n.d(t, {
    $: () => E,
    A: () => p
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(287809),
    a = n(810412),
    o = n(914853),
    u = n(243612),
    d = n(640490),
    c = n(755588),
    h = n(222870),
    g = n(180720),
    m = n(576420),
    f = n(610358),
    A = n(652215),
    I = n(689842);

function E() {
    let {
        onPrimaryAction: e,
        onContextMenu: t
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = (0, u.b4)(), f = n?.id, E = n?.altId, p = (0, r.bG)([s.default], () => s.default.getCurrentUser()) ?? null, _ = m.Ay.useField("activeTab"), S = m.Ay.useField("setActiveTab"), x = l.useCallback(e => {
        e !== _ && (S(e), (0, a.YX)(A.uss.FRIENDS, {
            type: a.Z5.TAB_SELECTED,
            value: function(e) {
                switch (e) {
                    case o.x.FRIENDS:
                        return a.IP.FRIEND_TAB_SELECTED;
                    case o.x.MESSAGES:
                        return a.IP.MESSAGES_TAB_SELECTED;
                    case o.x.VOICE:
                        return a.IP.VOICE_TAB_SELECTED;
                    default:
                        return a.IP.FRIEND_TAB_SELECTED
                }
            }(e)
        }))
    }, [_, S]), T = (0, u.xl)(null != E ? E : f);
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [(0, i.jsx)(c.b, {
            currentUser: p,
            activity: T,
            currentGameName: n?.name ?? null,
            activeTab: _,
            onTabChange: x
        }), (0, i.jsx)("div", {
            className: I.Qs,
            children: _ === o.x.FRIENDS ? (0, i.jsx)(d.F, {
                onPrimaryAction: e,
                onContextMenu: t
            }) : _ === o.x.MESSAGES ? (0, i.jsx)(h.t, {
                onPrimaryAction: e,
                onContextMenu: t
            }) : _ === o.x.VOICE ? (0, i.jsx)(g.T, {
                onPrimaryAction: e,
                onContextMenu: t
            }) : null
        })]
    })
}
let p = l.memo(function(e) {
    let {
        locked: t
    } = e, {
        handlePrimaryAction: n,
        handleContextMenu: l
    } = (0, f.W)();
    return t ? null : (0, i.jsx)(E, {
        onPrimaryAction: n,
        onContextMenu: l
    })
})