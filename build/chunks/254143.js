/** Chunk was on 1113 **/
/** chunk id: 254143, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048), n(492834);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(421380),
    a = n(397927),
    o = n(686956),
    c = n(964486),
    u = n(351001),
    d = n(576705),
    h = n(400528),
    p = n(102817),
    g = n(641131),
    f = n(985018);

function m(e) {
    let {
        channel: t,
        user: m,
        guild: b
    } = e, A = (0, i.bG)([h.A], () => null != m && h.A.isUserBanned(m.id)), y = null != m && null == A, [O, _] = l.useState(y), x = (0, i.bG)([d.A], () => null != m && null != b && (0, u.fJ)(m, b, [d.A]));
    if ((0, c.Ay)(() => {
            y && o.A.searchGuildBans(t.guild_id, void 0, [null == m ? void 0 : m.id]).finally(() => _(!1))
        }), !x) return null;
    let j = !0 === A ? f.intl.string(g.default.dpfwQ1) : f.intl.string(g.default.ASv23S),
        v = "ban-user-".concat(null == m ? void 0 : m.id);
    return (0, r.jsx)(p.A, {
        text: j,
        icon: a.wI0,
        onClick: () => {
            null != m && (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("57742").then(n.bind(n, 333179));
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
                        guildId: t.guild_id,
                        user: m,
                        modReportId: t.id
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
        },
        disabled: !0 === A || O,
        submitting: O,
        color: s.$n.Colors.RED
    }, v)
}