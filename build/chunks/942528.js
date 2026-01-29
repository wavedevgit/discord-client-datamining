/** Chunk was on 13530 **/
/** chunk id: 942528, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => v
});
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(311907),
    o = l(397927),
    c = l(734057),
    d = l(309010),
    u = l(287809),
    m = l(562153),
    x = l(420706),
    f = l(322789),
    g = l(506326),
    h = l(985018),
    p = l(505502),
    j = l(851822);
let v = e => {
    let {
        entry: t,
        onClose: l,
        onReaction: a,
        onRequestOpen: v,
        disableActivityProfileLinks: b,
        customCTA: y,
        popoutClassname: A,
        popoutPosition: N = "right"
    } = e, O = i.useRef(null), _ = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), I = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: w,
        avatar: S
    } = i.useMemo(() => {
        let e = null == I ? void 0 : I.getAvatarURL(null == _ ? void 0 : _.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, I),
            avatar: e
        }
    }, [I, _]);
    return null == I ? null : (0, n.jsx)(o.YNO, {
        targetElementRef: O,
        position: N,
        renderPopout: e => {
            let {
                closePopout: i,
                updatePosition: r
            } = e;
            return (0, n.jsx)("div", {
                className: A,
                children: (0, n.jsx)(x.Oo, {
                    entry: t,
                    closePopout: i,
                    updatePopoutPosition: r,
                    onReaction: () => {
                        null == a || a(), l(), i()
                    },
                    onUserPopoutClosed: () => i(),
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
            var l, i;
            return (0, n.jsx)(o.DUT, (l = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(l);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(l, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = l[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({
                innerRef: O
            }, e), i = i = {
                className: p.GA,
                children: (0, n.jsx)(o.vN3, {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4
                    },
                    children: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("img", {
                            className: p.my,
                            src: S,
                            alt: h.intl.formatToPlainString(h.t.IzVXxY, {
                                userName: w
                            })
                        }), (0, n.jsx)("div", {
                            className: p.Su,
                            children: (0, n.jsxs)("div", {
                                className: r()(j.fi, j.Kt),
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: w
                                }), (0, n.jsx)(g.mG, {
                                    location: g.N5.APP_LAUNCHER,
                                    children: f.n.map((e, l) => (0, n.jsx)(e, {
                                        entry: t
                                    }, l))
                                })]
                            })
                        }), null != y ? y : (0, n.jsx)("div", {
                            className: p.Br,
                            children: (0, n.jsx)(o.W4J, {
                                size: "sm"
                            })
                        })]
                    })
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    l.push.apply(l, n)
                }
                return l
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
            }), l))
        }
    })
}