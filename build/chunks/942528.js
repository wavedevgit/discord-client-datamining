/** Chunk was on 13530 **/
/** chunk id: 942528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(734057),
    u = n(309010),
    d = n(287809),
    m = n(562153),
    f = n(420706),
    g = n(322789),
    x = n(506326),
    p = n(985018),
    j = n(505502),
    h = n(851822);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: v,
        disableActivityProfileLinks: b,
        customCTA: y,
        popoutClassname: O,
        popoutPosition: A = "right"
    } = e, _ = r.useRef(null), I = (0, s.bG)([u.A, c.A], () => c.A.getChannel(u.A.getChannelId())), w = (0, s.bG)([d.default], () => d.default.getUser(t.author_id)), {
        nick: N,
        avatar: S
    } = r.useMemo(() => {
        let e = null == w ? void 0 : w.getAvatarURL(null == I ? void 0 : I.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, w),
            avatar: e
        }
    }, [w, I]);
    return null == w ? null : (0, l.jsx)(o.YNO, {
        targetElementRef: _,
        position: A,
        renderPopout: e => {
            let {
                closePopout: r,
                updatePosition: a
            } = e;
            return (0, l.jsx)("div", {
                className: O,
                children: (0, l.jsx)(f.Oo, {
                    entry: t,
                    closePopout: r,
                    updatePopoutPosition: a,
                    onReaction: () => {
                        null == i || i(), n(), r()
                    },
                    onUserPopoutClosed: () => r(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: b
                })
            })
        },
        positionKey: "'content-entry-".concat(t.id),
        onRequestOpen: () => {
            null == v || v()
        },
        children: e => {
            var n, r;
            return (0, l.jsx)(o.DUT, (n = function(e) {
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
            }({
                innerRef: _
            }, e), r = r = {
                className: j.GA,
                children: (0, l.jsx)(o.vN3, {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4
                    },
                    children: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("img", {
                            className: j.my,
                            src: S,
                            alt: p.intl.formatToPlainString(p.t.IzVXxY, {
                                userName: N
                            })
                        }), (0, l.jsx)("div", {
                            className: j.Su,
                            children: (0, l.jsxs)("div", {
                                className: a()(h.fi, h.Kt),
                                children: [(0, l.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: N
                                }), (0, l.jsx)(x.mG, {
                                    location: x.N5.APP_LAUNCHER,
                                    children: g.n.map((e, n) => (0, l.jsx)(e, {
                                        entry: t
                                    }, n))
                                })]
                            })
                        }), null != y ? y : (0, l.jsx)("div", {
                            className: j.Br,
                            children: (0, l.jsx)(o.W4J, {
                                size: "sm"
                            })
                        })]
                    })
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n))
        }
    })
}