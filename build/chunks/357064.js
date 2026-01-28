/** Chunk was on 78528 **/
/** chunk id: 357064, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(442433),
    s = n(513461),
    a = n(212455),
    o = n(967198),
    c = n(531685),
    u = n(330465),
    d = n(65611),
    p = n(652215);

function h(e, t) {
    (0, i.L3)(e, async () => {
        let {
            default: e
        } = await n.e("49056").then(n.bind(n, 97187));
        return n => {
            var l, i;
            return (0, r.jsx)(e, (l = function(e) {
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
            }({}, n), i = i = {
                guild: t
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
    })
}

function f(e) {
    let {
        guildNode: t
    } = e, n = t.id, i = (0, l.bG)([a.A], () => a.A.getRequest(n)), f = (0, l.bG)([a.A], () => a.A.getJoinRequestGuild(n), [n]), g = (0, l.bG)([c.A], () => c.A.isFocused()), m = (0, l.bG)([o.A], () => o.A.getGuildId());
    return null == f ? null : (0, r.jsx)(u.A, {
        guildNode: t,
        guild: f,
        animatable: g,
        draggable: !1,
        selected: n === m,
        preloadOnClick: !1,
        contextMenu: h,
        lowerBadge: (null == i ? void 0 : i.applicationStatus) === s.B5.REJECTED ? (0, d.eW)({
            guildJoinRequestStatus: i.applicationStatus
        }) : void 0,
        route: p.BVt.GUILD_MEMBER_VERIFICATION(n)
    })
}