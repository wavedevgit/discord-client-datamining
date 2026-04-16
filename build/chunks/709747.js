/** chunk id: 709747 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
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
    C = n(499214),
    N = n(985018),
    v = n(881890);

function y(e) {
    let {
        dragStart: t,
        dragging: n
    } = e, [y, M] = (0, l.bG)([f.A], () => f.A.getSessionEntries()), b = (0, l.bG)([f.A], () => f.A.getSelectedChannelId()), R = (0, l.bG)([f.A], () => f.A.getVoiceChatMinimized()), D = (0, l.bG)([o.A], () => null != b ? o.A.getChannel(b) ?? null : null, [b]);
    r.useEffect(() => {
        null == b || null == D && (0, x.b)(b)
    }, [D, b]);
    let O = (0, l.bG)([u.A], () => (0, E.P)(D, u.A), [D]),
        w = (0, l.bG)([d.A], () => d.A.getChannelId(), []),
        j = r.useMemo(() => null == w || 0 === M ? y : y.filter(e => e.channelId !== w), [y, M, w]),
        k = (0, m.Dk)(() => {
            let e = new Set;
            for (let t of (null != w && e.add(w), j)) e.add(t.channelId);
            return e
        }, [j, w, M]),
        {
            shownUserIds: U,
            contentInventoryIds: L
        } = (0, l.bG)([], () => (function(e) {
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
        })(k), [k]),
        G = (0, m.Dk)(() => U, [U]),
        P = (0, m.Dk)(() => L, [L]);
    r.useEffect(() => {
        (0 !== G.size || 0 !== P.size) && (0, m.Y)(T.uss.TEXT_CHAT_V3, {
            locked: g.default.isInstanceLocked(),
            shownUserIds: Array.from(G),
            liveUserIds: [],
            contentInventoryIds: Array.from(P)
        })
    }, [G, P]);
    let F = (0, l.bG)([h.default], () => (0, E.j)(D, h.default)),
        V = (0, l.bG)([h.default, c.A], () => null == D ? N.intl.string(C.default.uhJexs) : (0, a.m1)(D, h.default, c.A), [D]),
        z = (0, l.bG)([o.A], () => {
            if (null != w && null != o.A.getChannel(w)) return !0;
            if (0 === M) return !1;
            for (let e of y)
                if (null != o.A.getChannel(e.channelId)) return !0;
            return !1
        }, [y, w, M]),
        H = null != b && !(R && b === w);
    return z ? (0, i.jsxs)("div", {
        className: v.kL,
        children: [(0, i.jsx)("nav", {
            className: v.pz,
            "aria-label": N.intl.string(C.default["2yFtJ1"]),
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
                channel: D,
                user: F,
                guild: O,
                title: V,
                dragStart: t,
                dragging: n
            }), (0, i.jsx)(S.A, {
                selectedChannelId: b
            })]
        }) : null]
    }) : (0, i.jsx)(I.g, {
        emptyText: N.intl.string(C.default["xpv/t5"]),
        icon: s.oyn
    })
}
let M = r.memo(function(e) {
    let {
        locked: t,
        dragStart: n,
        dragging: r
    } = e;
    return t ? null : (0, i.jsx)(y, {
        dragStart: n,
        dragging: r
    })
})