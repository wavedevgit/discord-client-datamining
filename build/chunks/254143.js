/** chunk id: 254143, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048), n(492834);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(421380),
    s = n(397927),
    o = n(686956),
    c = n(964486),
    u = n(351001),
    d = n(576705),
    h = n(400528),
    p = n(102817),
    f = n(641131),
    m = n(985018);

function g(e) {
    let {
        channel: t,
        user: g,
        guild: A
    } = e, b = (0, i.bG)([h.A], () => null != g && h.A.isUserBanned(g.id)), _ = null != g && null == b, [y, v] = r.useState(_), E = (0, i.bG)([d.A], () => null != g && null != A && (0, u.fJ)(g, A, [d.A]));
    if ((0, c.Ay)(() => {
            _ && o.A.searchGuildBans(t.guild_id, void 0, [null == g ? void 0 : g.id]).finally(() => v(!1))
        }), !E) return null;
    let O = !0 === b ? m.intl.string(f.default.dpfwQ1) : m.intl.string(f.default.ASv23S),
        C = "ban-user-".concat(null == g ? void 0 : g.id);
    return (0, l.jsx)(p.A, {
        text: O,
        icon: s.wI0,
        onClick: () => {
            null != g && (0, s.mMO)(async () => {
                let {
                    default: e
                } = await n.e("57742").then(n.bind(n, 333179));
                return n => {
                    var r, i;
                    return (0, l.jsx)(e, (r = function(e) {
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
                    }({}, n), i = i = {
                        guildId: t.guild_id,
                        user: g,
                        modReportId: t.id
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, l)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                    }), r))
                }
            })
        },
        disabled: !0 === b || y,
        submitting: y,
        color: a.$n.Colors.RED
    }, C)
}