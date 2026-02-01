/** chunk id: 181800, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(475743),
    o = n(624458),
    c = n(408213),
    u = n(212455),
    d = n(967198),
    p = n(636449),
    h = n(263715),
    g = n(928568),
    f = n(842452),
    m = n(357064),
    b = n(985018),
    A = n(971090);

function y(e) {
    let {
        onActivate: t,
        children: n
    } = e, o = l.useRef(null), d = (0, i.bG)([u.A], () => u.A.hasJoinRequestCoackmark()), p = l.useCallback(() => {
        c.Ay.clearCoachmark()
    }, []), h = (0, a.A)(d), g = l.useRef(null);
    return l.useEffect(() => {
        if (d && d !== h) {
            var e, n, r, l, i;
            t(), null == (i = g.current) || null == (l = i.ref) || null == (r = l.current) || null == (n = r.layerRef) || null == (e = n.current) || e.updatePosition()
        }
    }, [g, d, h, t]), (0, r.jsxs)("div", {
        className: A.kL,
        children: [(0, r.jsx)(s.YNO, {
            ref: g,
            targetElementRef: o,
            shouldShow: d,
            renderPopout: () => (0, r.jsxs)("div", {
                className: A.jC,
                children: [(0, r.jsxs)("div", {
                    className: A.Bm,
                    children: [(0, r.jsxs)("div", {
                        className: A.q3,
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-md/medium",
                            children: b.intl.string(b.t["0YV0YE"])
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: b.intl.string(b.t["0UQVDL"])
                        })]
                    }), (0, r.jsx)(s.Button, {
                        variant: "primary",
                        size: "sm",
                        text: b.intl.string(b.t["4r+amb"]),
                        fullWidth: !0,
                        onClick: p
                    })]
                }), (0, r.jsx)("div", {
                    className: A.ed
                })]
            }),
            position: "right",
            animationPosition: "right",
            align: "top",
            spacing: 16,
            children: e => {
                var t, n;
                return (0, r.jsx)("div", (t = function(e) {
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
                }({}, e), n = n = {
                    className: A.Ne,
                    ref: o
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
            }
        }), n]
    })
}

function O(e) {
    let {
        onActivate: t
    } = e, [n, O] = l.useState(!1), j = (0, i.bG)([d.A], () => d.A.getGuildId()), x = (0, i.bG)([u.A], () => u.A.hasFetchedRequestToJoinGuilds), _ = (0, g.A)(), v = (0, a.A)(j), E = l.useMemo(() => {
        let e = (0, h.xW)({
            folderId: p.U.PENDING_JOIN_REQUESTS_FOLDER,
            folderName: b.intl.string(b.t["scsU+l"]),
            expanded: n,
            guildIds: []
        });
        for (let t of _) e.children.push((0, h.EL)(t, e.id));
        return e
    }, [_, n]);
    l.useEffect(() => {
        n && !x && o.A.fetchRequestToJoinGuilds()
    }, [n, x]);
    let C = null != j && _.includes(j);
    return (l.useEffect(() => {
        !n && C && v !== j && O(!0)
    }, [n, C, v, j]), 0 === _.length) ? null : (0, r.jsx)(y, {
        onActivate: t,
        children: (0, r.jsx)(f.A, {
            folderNode: E,
            expanded: n,
            selected: C,
            draggable: !1,
            sorting: !1,
            onExpandCollapse: () => {
                O(!n), c.Ay.clearCoachmark()
            },
            folderButtonSize: "icon",
            folderButtonContent: (0, r.jsx)("div", {
                className: A.rH,
                children: (0, r.jsx)(s.Qfk, {
                    size: "sm",
                    color: "currentColor"
                })
            }),
            renderChildNode: function(e, t, n) {
                return e.type !== h.PJ.GUILD ? null : (0, r.jsx)(m.A, {
                    guildNode: e,
                    "aria-setsize": n,
                    "aria-posinset": t
                }, e.id)
            }
        })
    })
}