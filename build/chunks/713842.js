/** Chunk was on 77870 **/
/** chunk id: 713842, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(442433),
    a = n(738876),
    o = n(47167),
    c = n(698718),
    u = n(355622),
    d = n(58736),
    p = n(353428),
    h = n(976860),
    f = n(823471),
    g = n(734057),
    m = n(31717),
    b = n(71393),
    A = n(853742),
    y = n(985018),
    _ = n(388552);

function O(e) {
    let {
        channelId: t
    } = e, O = (0, i.bG)([g.A], () => g.A.getChannel(t)), j = (0, i.bG)([g.A], () => g.A.getChannel(null == O ? void 0 : O.parent_id)), v = (0, i.bG)([b.A], () => b.A.getGuild(null == O ? void 0 : O.getGuildId())), x = (0, o.Ay)(O), E = l.useRef(!1);
    if (l.useEffect(() => {
            null == O || E.current || (E.current = !0, (0, A.rH)(O))
        }, [O]), null == O || null == v) return null;
    let C = (0, r.jsx)(f.A, {
        channel: O
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.A, {
            channel: O,
            draftType: m.C.ChannelMessage
        }), (0, r.jsx)(d.Ay, {
            toolbar: C,
            "aria-label": y.intl.string(y.t.Pwe8tN),
            children: (0, p.zF)({
                channel: O,
                parentChannel: j,
                channelName: x,
                guild: v,
                inSidebar: !0,
                handleContextMenu: function(e) {
                    (0, s.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("33").then(n.bind(n, 44536));
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
                                channel: O
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
                },
                handleClick: function() {
                    null != O && (0, h.uh)(O.guild_id, O.id)
                }
            })
        }), (0, r.jsx)("div", {
            className: _.T,
            children: (0, r.jsx)(c.A, {
                channel: O,
                guild: v,
                chatInputType: u.oU.SIDEBAR
            }, t)
        })]
    })
}