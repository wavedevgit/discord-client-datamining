/** chunk id: 646881 params = (module,exports,require) **/
n.d(t, {
    $: () => S,
    A: () => _
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(375492),
    a = n(287809),
    u = n(810412),
    o = n(914853),
    d = n(243612),
    c = n(640490),
    h = n(755588),
    g = n(222870),
    I = n(180720),
    A = n(576420),
    f = n(610358),
    E = n(652215),
    m = n(364495);

function S() {
    let {
        onPrimaryAction: e,
        onContextMenu: t
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = (0, d.b4)(), f = n?.id, S = n?.altId, _ = (0, r.bG)([a.default], () => a.default.getCurrentUser()) ?? null, p = null != S ? S : f, N = A.Ay.useField("activeTab"), T = A.Ay.useField("setActiveTab"), y = i.useCallback(e => {
        e !== N && (T(e), (0, u.YX)(E.uss.FRIENDS, {
            type: u.Z5.TAB_SELECTED,
            value: function(e) {
                switch (e) {
                    case o.x.FRIENDS:
                        return u.IP.FRIEND_TAB_SELECTED;
                    case o.x.MESSAGES:
                        return u.IP.MESSAGES_TAB_SELECTED;
                    case o.x.VOICE:
                        return u.IP.VOICE_TAB_SELECTED;
                    default:
                        return u.IP.FRIEND_TAB_SELECTED
                }
            }(e)
        }))
    }, [N, T]), C = (0, r.bG)([s.A], () => null == p ? null : s.A.getApplicationActivity(p), [p]) ?? null;
    return (0, l.jsxs)("div", {
        className: m.kL,
        children: [(0, l.jsx)(h.b, {
            currentUser: _,
            activity: C,
            currentGameName: n?.name ?? null,
            activeTab: N,
            onTabChange: y
        }), (0, l.jsx)("div", {
            className: m.Qs,
            children: N === o.x.FRIENDS ? (0, l.jsx)(c.F, {
                onPrimaryAction: e,
                onContextMenu: t
            }) : N === o.x.MESSAGES ? (0, l.jsx)(g.t, {
                onPrimaryAction: e,
                onContextMenu: t
            }) : N === o.x.VOICE ? (0, l.jsx)(I.T, {
                onPrimaryAction: e,
                onContextMenu: t
            }) : null
        })]
    })
}
let _ = i.memo(function(e) {
    let {
        locked: t
    } = e, {
        handlePrimaryAction: n,
        handleContextMenu: i
    } = (0, f.W)();
    return t ? null : (0, l.jsx)(S, {
        onPrimaryAction: n,
        onContextMenu: i
    })
})