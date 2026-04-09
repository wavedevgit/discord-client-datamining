/** chunk id: 709747 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(397927),
    s = n(47167),
    o = n(734057),
    d = n(71393),
    c = n(383501),
    u = n(994500),
    _ = n(287809),
    h = n(256415),
    m = n(810412),
    p = n(1193),
    g = n(129537),
    f = n(412477),
    A = n(651813),
    x = n(320165),
    I = n(121914),
    E = n(197043),
    b = n(919843),
    v = n(652215),
    C = n(895867),
    S = n(985018),
    y = n(468690);

function T(e) {
    let {
        dragStart: t,
        dragging: n
    } = e, [T, N] = (0, r.bG)([p.A], () => p.A.getSessionEntries()), w = (0, r.bG)([p.A], () => p.A.getSelectedChannelId()), L = (0, r.bG)([p.A], () => p.A.getVoiceChatMinimized()), O = (0, r.bG)([o.A], () => null != w ? o.A.getChannel(w) ?? null : null, [w]);
    a.useEffect(() => {
        null == w || null == O && (0, b.b)(w)
    }, [O, w]);
    let j = (0, r.bG)([d.A], () => (0, A.P)(O, d.A), [O]),
        P = (0, r.bG)([c.A], () => c.A.getChannelId(), []),
        D = a.useMemo(() => null == P || 0 === N ? T : T.filter(e => e.channelId !== P), [T, N, P]),
        R = (0, m.Dk)(() => {
            let e = new Set;
            for (let t of (null != P && e.add(P), D)) e.add(t.channelId);
            return e
        }, [D, P, N]),
        {
            shownUserIds: k,
            contentInventoryIds: M
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
        })(R), [R]),
        G = (0, m.Dk)(() => k, [k]),
        z = (0, m.Dk)(() => M, [M]);
    a.useEffect(() => {
        (0 !== G.size || 0 !== z.size) && (0, m.Y)(v.uss.TEXT_CHAT_V3, {
            locked: h.default.isInstanceLocked(),
            shownUserIds: Array.from(G),
            liveUserIds: [],
            contentInventoryIds: Array.from(z)
        })
    }, [G, z]);
    let U = (0, r.bG)([_.default], () => (0, A.j)(O, _.default)),
        V = (0, r.bG)([_.default, u.A], () => null == O ? S.intl.string(C.default.uhJexs) : (0, s.m1)(O, _.default, u.A), [O]),
        F = (0, r.bG)([o.A], () => {
            if (null != P && null != o.A.getChannel(P)) return !0;
            if (0 === N) return !1;
            for (let e of T)
                if (null != o.A.getChannel(e.channelId)) return !0;
            return !1
        }, [T, P, N]),
        W = null != w && !(L && w === P);
    return F ? (0, i.jsxs)("div", {
        className: y.kL,
        children: [(0, i.jsx)("nav", {
            className: y.pz,
            "aria-label": S.intl.string(C.default["2yFtJ1"]),
            onMouseDown: e => {
                0 === e.button && t(g.P.MOVE, e.clientX, e.clientY)
            },
            children: (0, i.jsxs)(l.d_W, {
                children: [null != P ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(I.g, {
                        channelId: P,
                        selectedVoiceChannelId: P,
                        iconVariant: I._.CHANNEL_TYPE
                    }, `tiv-${P}`), D.length > 0 ? (0, i.jsx)("hr", {
                        className: y.mF
                    }) : null]
                }) : null, D.map(e => (0, i.jsx)(I.g, {
                    channelId: e.channelId,
                    selectedVoiceChannelId: P
                }, e.channelId))]
            })
        }), W ? (0, i.jsxs)("div", {
            className: y.oM,
            children: [(0, i.jsx)(x.A, {
                channel: O,
                user: U,
                guild: j,
                title: V,
                dragStart: t,
                dragging: n
            }), (0, i.jsx)(E.A, {
                selectedChannelId: w
            })]
        }) : null]
    }) : (0, i.jsx)(f.g, {
        emptyText: S.intl.string(C.default["xpv/t5"]),
        icon: l.oyn
    })
}
let N = a.memo(function(e) {
    let {
        locked: t,
        dragStart: n,
        dragging: a
    } = e;
    return t ? null : (0, i.jsx)(T, {
        dragStart: n,
        dragging: a
    })
})