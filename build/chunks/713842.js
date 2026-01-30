/** chunk id: 713842, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
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
    h = n(353428),
    p = n(976860),
    g = n(823471),
    f = n(734057),
    m = n(31717),
    b = n(71393),
    A = n(853742),
    y = n(985018),
    O = n(388552);

function _(e) {
    let {
        channelId: t
    } = e, _ = (0, i.bG)([f.A], () => f.A.getChannel(t)), j = (0, i.bG)([f.A], () => f.A.getChannel(null == _ ? void 0 : _.parent_id)), x = (0, i.bG)([b.A], () => b.A.getGuild(null == _ ? void 0 : _.getGuildId())), v = (0, o.Ay)(_), E = l.useRef(!1);
    if (l.useEffect(() => {
            null == _ || E.current || (E.current = !0, (0, A.rH)(_))
        }, [_]), null == _ || null == x) return null;
    let C = (0, r.jsx)(g.A, {
        channel: _
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.A, {
            channel: _,
            draftType: m.C.ChannelMessage
        }), (0, r.jsx)(d.Ay, {
            toolbar: C,
            "aria-label": y.intl.string(y.t.Pwe8tN),
            children: (0, h.zF)({
                channel: _,
                parentChannel: j,
                channelName: v,
                guild: x,
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
                                channel: _
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
                    null != _ && (0, p.uh)(_.guild_id, _.id)
                }
            })
        }), (0, r.jsx)("div", {
            className: O.T,
            children: (0, r.jsx)(c.A, {
                channel: _,
                guild: x,
                chatInputType: u.oU.SIDEBAR
            }, t)
        })]
    })
}