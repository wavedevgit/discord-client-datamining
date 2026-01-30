/** chunk id: 346247, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => y
});
var n = l(627968),
    i = l(64700),
    r = l(311907),
    o = l(397927),
    a = l(80682),
    c = l(267102),
    d = l(206835),
    s = l(576622),
    u = l(961350),
    A = l(696451),
    g = l(71393),
    p = l(576705),
    b = l(287809),
    f = l(652215),
    h = l(985018);

function y(e) {
    let {
        guildId: t,
        userId: y,
        analyticsLocation: O,
        analyticsLocations: j,
        context: C,
        icon: E
    } = e, m = g.A.getGuild(t), x = u.default.getId(), M = (0, r.bG)([b.default], () => b.default.getUser(y)), N = (0, r.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, y), [t, y]);
    (0, r.bG)([p.A], () => p.A.getGuildVersion(t), [t]);
    let v = i.useMemo(() => ({
        [t]: [y]
    }), [t, y]);
    (0, a.E)(v, "useChangeIdentityItem");
    let G = C === f.BRT.POPOUT,
        I = (0, d.A)({
            guild: m,
            analyticsLocations: j
        }),
        P = (0, c.aL)();
    if (null == m || G) return null;
    let U = x === y && (p.A.can(f.xBc.CHANGE_NICKNAME, m) || p.A.can(f.xBc.MANAGE_NICKNAMES, m)),
        S = x === y,
        _ = p.A.canManageUser(f.xBc.MANAGE_NICKNAMES, y, m);
    if (!(U || _ || S) || null == M || N) return null;
    let T = m.features.has(f.GuildFeatures.HUB) ? h.intl.string(h.t["+MWrWt"]) : h.intl.string(h.t["PKQB/H"]),
        R = S ? T : h.intl.string(h.t.dilOF6);
    return (0, n.jsx)(o.Drp, {
        id: "change-nickname",
        label: R,
        icon: E,
        leadingAccessory: null != E ? {
            type: "icon",
            icon: E
        } : void 0,
        action: () => {
            S ? ((0, s.A)(M.id, M.getAvatarURL(t, 80), {
                guildId: t
            }), I(), P.dispatch(f.jej.POPOUT_CLOSE), (0, o.s7G)()) : (0, o.mMO)(async () => {
                let {
                    default: e
                } = await l.e("48635").then(l.bind(l, 752118));
                return l => {
                    var i, r;
                    return (0, n.jsx)(e, (i = function(e) {
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
                    }({}, l), r = r = {
                        guildId: t,
                        user: M,
                        analyticsSource: O,
                        analyticsLocations: j
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var l = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            l.push.apply(l, n)
                        }
                        return l
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
                    }), i))
                }
            })
        }
    })
}