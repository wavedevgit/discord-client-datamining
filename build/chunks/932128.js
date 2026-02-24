/** chunk id: 932128, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
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
    m = n(256415),
    g = n(810412),
    p = n(129537),
    A = n(412477),
    f = n(187667),
    x = n(651813),
    E = n(320165),
    S = n(121914),
    v = n(197043),
    C = n(919843),
    I = n(652215),
    T = n(895867),
    _ = n(985018),
    y = n(141223);

function j(e) {
    let {
        dragStart: t,
        dragging: n
    } = e, [j, b] = (0, r.bG)([f.A], () => f.A.getSessionEntries()), w = (0, r.bG)([f.A], () => f.A.getSelectedChannelId()), O = (0, r.bG)([f.A], () => f.A.getVoiceChatMinimized()), N = (0, r.bG)([o.A], () => null != w ? o.A.getChannel(w) ?? null : null, [w]);
    l.useEffect(() => {
        null == w || null == N && (0, C.b)(w)
    }, [N, w]);
    let M = (0, r.bG)([u.A], () => (0, x.P)(N, u.A), [N]),
        R = (0, r.bG)([d.A], () => d.A.getChannelId(), []),
        k = l.useMemo(() => null == R || 0 === b ? j : j.filter(e => e.channelId !== R), [j, b, R]),
        L = (0, g.Dk)(() => {
            let e = new Set;
            for (let t of (null != R && e.add(R), k)) e.add(t.channelId);
            return e
        }, [k, R, b]),
        {
            shownUserIds: D,
            contentInventoryIds: z
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
        })(L), [L]),
        P = (0, g.Dk)(() => D, [D]),
        G = (0, g.Dk)(() => z, [z]);
    l.useEffect(() => {
        (0 !== P.size || 0 !== G.size) && (0, g.Y)(I.uss.TEXT_CHAT_V3, {
            locked: m.default.isInstanceLocked(),
            shownUserIds: Array.from(P),
            liveUserIds: [],
            contentInventoryIds: Array.from(G)
        })
    }, [P, G]);
    let V = (0, r.bG)([h.default], () => (0, x.j)(N, h.default)),
        U = (0, r.bG)([h.default, c.A], () => null == N ? _.intl.string(T.default.uhJexs) : (0, a.m1)(N, h.default, c.A), [N]),
        H = (0, r.bG)([o.A], () => {
            if (null != R && null != o.A.getChannel(R)) return !0;
            if (0 === b) return !1;
            for (let e of j)
                if (null != o.A.getChannel(e.channelId)) return !0;
            return !1
        }, [j, R, b]),
        Y = null != w && !(O && w === R);
    return H ? (0, i.jsxs)("div", {
        className: y.kL,
        children: [(0, i.jsx)("nav", {
            className: y.pz,
            "aria-label": _.intl.string(T.default["2yFtJ1"]),
            onMouseDown: e => {
                0 === e.button && t(p.P.MOVE, e.clientX, e.clientY)
            },
            children: (0, i.jsxs)(s.d_W, {
                children: [null != R ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(S.g, {
                        channelId: R,
                        selectedVoiceChannelId: R,
                        iconVariant: S._.CHANNEL_TYPE
                    }, `tiv-${R}`), k.length > 0 ? (0, i.jsx)("hr", {
                        className: y.mF
                    }) : null]
                }) : null, k.map(e => (0, i.jsx)(S.g, {
                    channelId: e.channelId,
                    selectedVoiceChannelId: R
                }, e.channelId))]
            })
        }), Y ? (0, i.jsxs)("div", {
            className: y.oM,
            children: [(0, i.jsx)(E.A, {
                channel: N,
                user: V,
                guild: M,
                title: U,
                dragStart: t,
                dragging: n
            }), (0, i.jsx)(v.A, {
                selectedChannelId: w
            })]
        }) : null]
    }) : (0, i.jsx)(A.g, {
        emptyText: _.intl.string(T.default["xpv/t5"]),
        icon: s.oyn
    })
}
let b = l.memo(function(e) {
    let {
        locked: t,
        dragStart: n,
        dragging: l
    } = e;
    return t ? null : (0, i.jsx)(j, {
        dragStart: n,
        dragging: l
    })
})