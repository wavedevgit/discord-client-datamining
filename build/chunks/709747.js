/** chunk id: 709747 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(47167),
    o = n(734057),
    u = n(71393),
    d = n(383501),
    c = n(994500),
    h = n(287809),
    g = n(256415),
    m = n(810412),
    f = n(1193),
    A = n(129537),
    I = n(412477),
    E = n(651813),
    p = n(320165),
    _ = n(121914),
    S = n(197043),
    x = n(919843),
    T = n(652215),
    N = n(499214),
    C = n(985018),
    v = n(881890);

function y(e) {
    let {
        dragStart: t,
        dragging: n
    } = e, [y, M] = (0, r.bG)([f.A], () => f.A.getSessionEntries()), R = (0, r.bG)([f.A], () => f.A.getSelectedChannelId()), D = (0, r.bG)([f.A], () => f.A.getVoiceChatMinimized()), b = (0, r.bG)([o.A], () => null != R ? o.A.getChannel(R) ?? null : null, [R]);
    l.useEffect(() => {
        null == R || null == b && (0, x.b)(R)
    }, [b, R]);
    let O = (0, r.bG)([u.A], () => (0, E.P)(b, u.A), [b]),
        w = (0, r.bG)([d.A], () => d.A.getChannelId(), []),
        j = l.useMemo(() => null == w || 0 === M ? y : y.filter(e => e.channelId !== w), [y, M, w]),
        U = (0, m.Dk)(() => {
            let e = new Set;
            for (let t of (null != w && e.add(w), j)) e.add(t.channelId);
            return e
        }, [j, w, M]),
        {
            shownUserIds: L,
            contentInventoryIds: k
        } = (0, r.bG)([], () => (function(e) {
            let t = new Set,
                n = new Set;
            for (let i of e) {
                let e = o.A.getChannel(i) ?? null;
                if (null != e) {
                    if (e.isDM()) {
                        let n = e.getRecipientId?.() ?? null;
                        null != n && t.add(n);
                        continue
                    }
                    if (e.isMultiUserDM()) {
                        for (let n of e.recipients ?? []) t.add(n);
                        continue
                    }
                    n.add(i)
                }
            }
            return {
                shownUserIds: t,
                contentInventoryIds: n
            }
        })(U), [U]),
        G = (0, m.Dk)(() => L, [L]),
        P = (0, m.Dk)(() => k, [k]);
    l.useEffect(() => {
        (0 !== G.size || 0 !== P.size) && (0, m.Y)(T.uss.TEXT_CHAT_V3, {
            locked: g.default.isInstanceLocked(),
            shownUserIds: Array.from(G),
            liveUserIds: [],
            contentInventoryIds: Array.from(P)
        })
    }, [G, P]);
    let F = (0, r.bG)([h.default], () => (0, E.j)(b, h.default)),
        V = (0, r.bG)([h.default, c.A], () => null == b ? C.intl.string(N.default.uhJexs) : (0, a.m1)(b, h.default, c.A), [b]),
        z = (0, r.bG)([o.A], () => {
            if (null != w && null != o.A.getChannel(w)) return !0;
            if (0 === M) return !1;
            for (let e of y)
                if (null != o.A.getChannel(e.channelId)) return !0;
            return !1
        }, [y, w, M]),
        H = null != R && !(D && R === w);
    return z ? (0, i.jsxs)("div", {
        className: v.kL,
        children: [(0, i.jsx)("nav", {
            className: v.pz,
            "aria-label": C.intl.string(N.default["2yFtJ1"]),
            onMouseDown: e => {
                0 === e.button && t(A.P.MOVE, e.clientX, e.clientY)
            },
            children: (0, i.jsxs)(s.d_W, {
                children: [null != w ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(_.g, {
                        channelId: w,
                        selectedVoiceChannelId: w,
                        iconVariant: _._.CHANNEL_TYPE
                    }, `tiv-${w}`), j.length > 0 ? (0, i.jsx)("hr", {
                        className: v.mF
                    }) : null]
                }) : null, j.map(e => (0, i.jsx)(_.g, {
                    channelId: e.channelId,
                    selectedVoiceChannelId: w
                }, e.channelId))]
            })
        }), H ? (0, i.jsxs)("div", {
            className: v.oM,
            children: [(0, i.jsx)(p.A, {
                channel: b,
                user: F,
                guild: O,
                title: V,
                dragStart: t,
                dragging: n
            }), (0, i.jsx)(S.A, {
                selectedChannelId: R
            })]
        }) : null]
    }) : (0, i.jsx)(I.g, {
        emptyText: C.intl.string(N.default["xpv/t5"]),
        icon: s.oyn
    })
}
let M = l.memo(function(e) {
    let {
        locked: t,
        dragStart: n,
        dragging: l
    } = e;
    return t ? null : (0, i.jsx)(y, {
        dragStart: n,
        dragging: l
    })
})