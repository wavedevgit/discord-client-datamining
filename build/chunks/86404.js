/** Chunk was on 63974 **/
/** chunk id: 86404, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968),
    i = n(64700),
    r = n(397927),
    s = n(163126),
    o = n(688810),
    a = n(183555),
    d = n(913453),
    c = n(229187),
    u = n(657331),
    p = n(503062),
    f = n(985018),
    m = n(781425);

function A(e) {
    let {
        user: t,
        guildId: n,
        channelId: A,
        onClose: x
    } = e, {
        mutualFriends: g
    } = (0, d.A)(t), {
        analyticsLocations: j
    } = (0, o.Ay)(), {
        context: h,
        trackUserProfileAction: b
    } = (0, a.NJ)(), v = (0, s.A)();
    return i.useEffect(() => {
        (0, c.A)(t.id, v)
    }, [t.id, v]), (0, l.jsx)(r.IpV, {
        className: m.DK,
        fade: !0,
        children: null == g ? (0, l.jsx)("div", {
            className: m.Ie,
            children: (0, l.jsx)(r.y$y, {})
        }) : 0 === g.length ? (0, l.jsxs)("div", {
            className: m.Ie,
            children: [(0, l.jsx)("div", {
                className: m.on
            }), (0, l.jsx)("div", {
                className: m.BI,
                children: f.intl.string(f.t["/5p4gx"])
            })]
        }) : g.map(e => {
            let {
                key: t,
                user: i,
                status: r
            } = e;
            return (0, l.jsx)(p.A, {
                user: i,
                status: r,
                guildId: n,
                channelId: A,
                onSelect: () => {
                    var e, t, n;
                    null == x || x(), b({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = i.id, (0, u.openUserProfileModal)((t = function(e) {
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
                    }({}, h), n = n = {
                        userId: e,
                        sourceAnalyticsLocations: j
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, l)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t))
                }
            }, t)
        })
    })
}