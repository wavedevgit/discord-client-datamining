/** Chunk was on 77870 **/
/** chunk id: 95655, original params: e,t,n (module,exports,require) **/
n.d(t, {
    n: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(990078),
    s = n(397927),
    a = n(442433),
    o = n(793574),
    c = n(47167),
    u = n(598104),
    d = n(73028),
    p = n(665691),
    h = n(954571),
    f = n(652215),
    g = n(985018),
    m = n(202115);
let b = e => {
        let {
            channel: t
        } = e;
        return (0, p.bG)({
            channelId: t.id
        }) ? (0, r.jsx)(i.m, {
            text: g.intl.string(g.t.QyZ4Td),
            children: (0, r.jsx)(s.m5V, {
                size: "xs",
                "aria-label": g.intl.string(g.t.VHXh8a),
                color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })
        }) : null
    },
    A = l.memo(function(e) {
        let {
            channel: t
        } = e, l = t.id, p = (0, c.Ay)(t);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(i.m, {
                asContainer: !0,
                text: g.intl.string(g.t["5Q9+/L"]),
                position: "bottom",
                children: (0, r.jsxs)(s.DUT, {
                    className: m.cD,
                    onClick: () => {
                        (0, d.U)(l, o.A.HEADER_BAR)
                    },
                    onContextMenu: e => (0, a.L3)(e, () => Promise.all([n.e("97262"), n.e("60200"), n.e("26021")]).then(n.bind(n, 4027)).then(e => {
                        let {
                            default: n
                        } = e;
                        return e => {
                            var l, i;
                            return (0, r.jsx)(n, (l = function(e) {
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
                            }({}, e), i = i = {
                                channel: t,
                                selected: !0
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(i)).forEach(function(e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                            }), l))
                        }
                    }), {
                        noBlurEvent: !0
                    }),
                    onDoubleClick: e => e.stopPropagation(),
                    onMouseEnter: () => {
                        h.default.track(f.HAw.GDM_EDIT_INTERACTED, {
                            channel_id: t.id,
                            action: "entry_point_hovered",
                            location: o.A.HEADER_BAR
                        })
                    },
                    "aria-label": g.intl.string(g.t["5Q9+/L"]),
                    children: [(0, r.jsx)(u.A, {
                        className: m.gn,
                        "aria-hidden": !0,
                        channel: t,
                        size: s._3J.SIZE_20,
                        facepileSizeOverride: s._3J.SIZE_24
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: null != p ? p : ""
                    }), (0, r.jsx)(s.R2l, {
                        className: m.IZ,
                        size: "xs",
                        color: "currentColor"
                    })]
                })
            }), (0, r.jsx)(b, {
                channel: t
            })]
        })
    })