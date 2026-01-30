/** chunk id: 274541, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(738876),
    c = n(323073),
    d = n(58149),
    u = n(237774),
    h = n(355622),
    p = n(225142),
    f = n(701785),
    _ = n(265869),
    m = n(58736),
    g = n(187360),
    x = n(353428),
    b = n(857071),
    A = n(976860),
    C = n(138298),
    j = n(522556),
    O = n(734057),
    v = n(31717),
    y = n(71393),
    N = n(320501),
    w = n(47167),
    I = n(698718),
    S = n(652215),
    E = n(985018),
    P = n(305585);

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function T(e) {
    let {
        channelId: t,
        baseChannelId: T,
        channelViewSource: L = "Split View",
        isResourceChannelView: k
    } = e, H = (0, i.bG)([O.A], () => O.A.getChannel(t)), M = (0, i.bG)([y.A], () => y.A.getGuild(null == H ? void 0 : H.getGuildId())), G = (0, w.Ay)(H), B = (0, i.bG)([b.A], () => (null == M ? void 0 : M.id) != null && b.A.isLurking(M.id), [M]), U = (0, _.A)(t), V = (0, i.bG)([f.h], () => {
        var e;
        return null == (e = f.h.getResourceForChannel(null == M ? void 0 : M.id, t)) ? void 0 : e.title
    }), F = (0, c.vL)(H), W = r.useRef(!1);
    if (r.useEffect(() => {
            null == H || W.current || (W.current = !0, (0, d.zV)(S.HAw.CHANNEL_OPENED, R(D({}, (0, d.qL)(H.id)), {
                channel_view: L
            })), (0, u.k)(S.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                channelId: H.id
            }))
        }, [H, L]), null == H || null == M) return null;
    let q = [];
    return (B || q.push((0, l.jsx)(g.A, {
        channel: H
    }, "notifications")), q.push((0, l.jsx)(m.Ay.Icon, {
        icon: a.PGe,
        tooltip: E.intl.string(E.t.cpT0Cq),
        onClick: () => C.A.closeChannelSidebar(T)
    }, "close")), F) ? (0, l.jsx)(j.A, {
        guild: M,
        channelId: H.id
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.A, {
            channel: H,
            draftType: v.C.ChannelMessage
        }), (0, l.jsx)(m.Ay, {
            toolbar: q,
            "aria-label": E.intl.string(E.t.BIYAqa),
            children: (0, x.zF)({
                channel: H,
                channelName: U ? V : G,
                guild: M,
                inSidebar: !0,
                handleContextMenu: e => {
                    (0, s.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("17425").then(n.bind(n, 340968));
                        return t => (0, l.jsx)(e, R(D({}, t), {
                            channel: H,
                            guild: M
                        }))
                    })
                },
                handleClick: () => {
                    let e = N.A.getMessages(H.id);
                    if (k) {
                        (0, A.pX)(S.BVt.CHANNEL(H.guild_id, H.id)), (0, p.bN)(H.guild_id, null);
                        return
                    }(0, A.uh)(H.guild_id, H.id, e.jumpTargetId)
                }
            })
        }), (0, l.jsx)("div", {
            className: P.T,
            children: (0, l.jsx)(I.A, {
                channel: H,
                guild: M,
                chatInputType: h.oU.SIDEBAR
            }, t)
        })]
    })
}