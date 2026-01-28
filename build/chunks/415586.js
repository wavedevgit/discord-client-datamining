/** Chunk was on 78528 **/
/** chunk id: 415586, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P
});
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    c = n(442433),
    u = n(738876),
    d = n(58149),
    p = n(332456),
    h = n(237774),
    f = n(47167),
    g = n(698718),
    m = n(355622),
    b = n(58736),
    A = n(353428),
    y = n(378570),
    _ = n(734057),
    O = n(31717),
    j = n(71393),
    v = n(977997),
    x = n(823471),
    E = n(37411),
    C = n(652215),
    S = n(985018),
    I = n(266920);

function N(e) {
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

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function P(e) {
    var t;
    let i, {
            channelId: P,
            baseChannelId: w,
            channelViewSource: R = "Split View"
        } = e,
        D = (0, a.bG)([_.A], () => _.A.getChannel(P)),
        M = (0, a.bG)([j.A], () => j.A.getGuild(null == D ? void 0 : D.getGuildId())),
        L = (0, f.Ay)(D);
    t = D, i = (0, a.bG)([v.A], () => null != t && !s().isEmpty(v.A.getVoiceStatesForChannel(t.id))), l.useEffect(() => {
        i && null != t && (o.h.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: t.parent_id
        }), (0, y.N9)(t, {
            source: E.H9.VOICE_AUTO_OPEN
        }))
    }, [i, t]);
    let k = l.useRef(!1);
    if (l.useEffect(() => {
            if (null == D || k.current) return;
            k.current = !0;
            let e = (0, p.C)(_.A.getChannel(D.id), !0);
            (0, d.zV)(C.HAw.CHANNEL_OPENED, T(N({}, e, (0, d.qL)(D.id)), {
                channel_view: R
            })), (0, h.k)(C.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                channelId: D.id
            })
        }, [D, R]), null == D || null == M) return null;
    let G = (0, r.jsx)(x.A, {
        channel: D,
        baseChannelId: w
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.A, {
            channel: D,
            draftType: O.C.ChannelMessage
        }), (0, r.jsx)(b.Ay, {
            toolbar: G,
            "aria-label": S.intl.string(S.t.Pwe8tN),
            children: (0, A.zF)({
                channel: D,
                channelName: L,
                guild: M,
                inSidebar: !0,
                handleContextMenu: function(e) {
                    (0, c.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("33").then(n.bind(n, 44536));
                        return t => (0, r.jsx)(e, T(N({}, t), {
                            channel: D
                        }))
                    })
                },
                handleClick: function() {
                    null != D && (0, y.iN)(D.id)
                }
            })
        }), (0, r.jsx)("div", {
            className: I.T,
            children: (0, r.jsx)(g.A, {
                channel: D,
                guild: M,
                chatInputType: m.oU.SIDEBAR
            }, P)
        })]
    })
}