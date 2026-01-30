/** chunk id: 328776, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(287809),
    o = n(562153),
    c = n(215530),
    u = n(168015),
    d = n(454719),
    h = n(10635),
    p = n(318162),
    g = n(762561),
    f = n(985018);

function m(e) {
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

function b(e) {
    let {
        channel: t
    } = e, [n] = t.recipients, b = (0, i.bG)([a.default], () => a.default.getUser(n)), A = (0, i.bG)([a.default], () => a.default.getCurrentUser()), y = (0, u.A)(), [O, _] = (0, c.A)(n);
    if (l.useEffect(() => {
            (0, d.A)(null != b ? b : n, {
                type: "sidebar",
                withMutualFriendsCount: (null == b ? void 0 : b.bot) !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            })
        }, [b, n, t.id]), null == b || null == A || !y) return null;
    let j = "user-profile-sidebar-heading-".concat(b.id),
        x = o.Ay.getName(null, t.id, b);
    return (0, r.jsx)("aside", {
        "aria-labelledby": j,
        children: (0, r.jsx)(s.Fmo, {
            component: (0, r.jsx)(s.AC4, {
                children: (0, r.jsx)(s.H, {
                    id: j,
                    children: f.intl.format(f.t.KRe1Fk, {
                        name: x
                    })
                })
            }),
            children: O ? (0, r.jsx)(p.A, m({
                user: b,
                currentUser: A,
                onHide: _
            }, e)) : b.isNonUserBot() ? (0, r.jsx)(h.A, m({
                user: b,
                currentUser: A
            }, e)) : (0, r.jsx)(g.A, m({
                user: b,
                currentUser: A
            }, e))
        })
    })
}