/** chunk id: 244920, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => F
}), r(134528), r(947204);
var n = r(627968),
    a = r(64700),
    i = r(735438),
    l = r.n(i),
    s = r(311907),
    o = r(397927),
    d = r(235986),
    c = r(383501),
    u = r(412780),
    m = r(967198),
    p = r(162605),
    y = r(351906),
    h = r(287809),
    g = r(562153),
    A = r(917592),
    f = r(828904),
    v = r(522278),
    b = r(974175),
    C = r(731854),
    E = r(985018),
    x = r(518959),
    D = r(473169);
class R extends a.PureComponent {
    render() {
        var e, t;
        let {
            transport: r,
            mediaSessionId: a,
            hidePersonalInformation: i,
            hostname: s
        } = this.props;
        if (null == r) return (0, n.jsx)(o.y$y, {
            type: o.y$y.Type.SPINNING_CIRCLE
        });
        let c = (e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({}, r), t = t = {
                hostname: s
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }), e),
            u = l().map(c, (e, t) => {
                if ("receiverReports" !== t && (!i || "localAddress" !== t)) return (0, n.jsx)(b.q7, {
                    label: t,
                    value: e
                }, t)
            }),
            p = l().map(c.receiverReports, e => {
                let t = Array.isArray(e.bitrate) ? null == (n = e.bitrate.at(-1)) ? void 0 : n.value : e.bitrate,
                    r = h.default.getUser(e.id);
                var n, a = g.Ay.getNickname(m.A.getGuildId(), void 0, r);
                return null == a && (a = null != r ? r.username : e.id), {
                    displayName: a,
                    bitrate: t / 1e3,
                    lost: 100 * e.fractionLost / 256
                }
            }),
            y = l().sortBy(p, e => e.displayName),
            A = l().map(y, e => {
                var t, r, a;
                let i, l;
                return t = e.displayName, r = e.bitrate, a = e.lost, i = (0, n.jsxs)(d.A, {
                    id: "bitrate-".concat(t),
                    justify: d.A.Justify.BETWEEN,
                    children: [(0, n.jsx)("span", {
                        children: "Bitrate:"
                    }), (0, n.jsxs)("span", {
                        children: [r.toFixed(2), " Kbps"]
                    })]
                }), l = (0, n.jsxs)(d.A, {
                    id: "lost-".concat(t),
                    justify: d.A.Justify.BETWEEN,
                    children: [(0, n.jsx)("span", {
                        children: "Packet Loss:"
                    }), (0, n.jsxs)("span", {
                        children: [a.toFixed(0), "%"]
                    })]
                }), (0, n.jsx)(v.A, {
                    label: t,
                    valueRendered: [i, l],
                    children: t
                }, t)
            });
        return (0, n.jsxs)(o.BJc, {
            className: x._8,
            children: [(0, n.jsx)(o.Heading, {
                variant: "heading-md/medium",
                children: E.intl.string(E.t.wU9IN2) + (null != a ? " - " + a : "")
            }), (0, f.C6)(u), 0 === A.length ? null : (0, n.jsx)(o.cGx, {
                className: D.SX
            }), (0, f.C6)(A)]
        })
    }
}
let F = s.Ay.connectStores([u.Ay, c.A, y.A, p.A], e => {
    var t;
    let {
        context: r,
        index: n
    } = e, a = u.Ay.getAllStats(r)[n], i = r === C.x.STREAM ? Object.values(p.A.getRTCConnections()).find(e => e.getMediaEngineConnectionId() === a.mediaEngineConnectionId) : null, l = null != (t = null == i ? void 0 : i.hostname) ? t : "";
    return {
        hidePersonalInformation: y.A.hidePersonalInformation,
        transport: null != a ? a.transport : null,
        mediaSessionId: c.A.getMediaSessionId(),
        hostname: A.A.getShortHostname(l)
    }
})(R)