/** Chunk was on 72165 **/
/** chunk id: 760207, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j,
    W: () => C
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(812771),
    o = n(274541),
    c = n(761640),
    d = n(769765),
    u = n(808728),
    h = n(71393),
    p = n(576705),
    f = n(954571),
    _ = n(637248),
    m = n(743015),
    g = n(652215),
    x = n(746080),
    b = n(985018),
    A = n(896743);

function C(e) {
    let {
        channelId: t
    } = e;
    return (0, l.jsx)(s.A, {
        sidebarType: s.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(o.A, {
            channelId: t,
            baseChannelId: x.VV.CHANNEL_BROWSER
        })
    })
}

function j(e) {
    let {
        guildId: t
    } = e, [s, o] = r.useState(""), C = (0, i.bG)([h.A], () => h.A.getGuild(t)), j = (0, i.bG)([u.Ay], () => u.Ay.getChannels(t)), O = (0, i.bG)([d.A], () => d.A.getCategories(t)), v = (0, _.vh)(t, O, j, s), y = (0, i.bG)([p.A], () => p.A.canWithPartialContext(g.xBc.MANAGE_CHANNELS, {
        guildId: t
    })), N = (0, i.bG)([c.Ay], () => null != c.Ay.getCurrentSidebarChannelId(x.VV.CHANNEL_BROWSER)), w = r.useCallback(() => o(""), [o]), I = r.useCallback(() => {
        (0, a.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
            return n => {
                var r, i;
                return (0, l.jsx)(e, (r = function(e) {
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
                }({}, n), i = i = {
                    channelType: null,
                    guildId: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, l)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                }), r))
            }
        })
    }, [t]);
    return null == C ? null : (0, l.jsxs)("div", {
        className: A.kw,
        children: [(0, l.jsxs)("div", {
            className: A.wx,
            children: [(0, l.jsx)(a.IWV, {
                query: s,
                onChange: e => {
                    "" === s && "" !== e && f.default.track(g.HAw.SEARCH_STARTED, {
                        search_type: "channel browser"
                    }), o(e.toLowerCase())
                },
                onClear: w,
                placeholder: b.intl.string(b.t.s5MnmC)
            }), y ? (0, l.jsx)(a.Button, {
                icon: a.j96,
                onClick: I,
                text: b.intl.string(b.t.CumH4u)
            }) : null]
        }), (0, l.jsx)(m.A, {
            className: A.T,
            channels: j,
            categories: v,
            guild: C,
            hasSidebar: N
        })]
    })
}