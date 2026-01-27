/** Chunk was on 77870 **/
/** chunk id: 232879, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(199285),
    o = n(347951),
    c = n(366811),
    u = n(919638),
    d = n(458294),
    p = n(71393),
    h = n(531685),
    f = n(131494),
    g = n(330465),
    m = n(605611);
let b = l.memo(function(e) {
    var t, n;
    let {
        guildNode: b,
        lowerBadge: A
    } = e, y = b.id, _ = (0, i.bG)([p.A], () => p.A.getGuild(y)), O = (0, a.a)(_), j = (0, i.bG)([h.A], () => h.A.isFocused()), v = (0, i.bG)([u.A], () => u.A.isUnavailable(y)), x = (0, c.A)(e => e.guildId), E = (0, f.A)(y), {
        badge: C,
        unread: S,
        isMentionLowImportance: I
    } = (0, i.cf)([d.default], () => ({
        badge: d.default.getMentionCount(y),
        isMentionLowImportance: d.default.getIsMentionLowImportance(y),
        unread: d.default.hasUnread(y)
    })), N = (0, o.Ig)(_) && 0 === C, T = l.useMemo(() => null != A ? A : N ? (0, r.jsx)("div", {
        className: m.j,
        children: (0, r.jsx)(s.E$n, {
            size: "custom",
            color: "currentColor",
            className: m.v,
            width: 10,
            height: 10
        })
    }) : null, [A, N]);
    return (0, r.jsx)(g.A, (t = function(e) {
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
        guild: _,
        unavailable: v,
        animatable: j,
        selected: x === y,
        badge: C,
        isMentionLowImportance: I,
        lowerBadge: T,
        unread: S,
        mediaState: E,
        guildJoinRequestStatus: O
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
})