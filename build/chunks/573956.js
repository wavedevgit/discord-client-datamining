/** Chunk was on 41727 **/
/** chunk id: 573956, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => v
});
var r = n(627968),
    l = n(64700),
    i = n(417597),
    s = n(554146),
    a = n(827734),
    o = n(397927),
    c = n(442433),
    u = n(826673),
    d = n(591552),
    p = n(202776),
    h = n(454058),
    f = n(976860),
    g = n(222823),
    m = n(661191),
    b = n(32603),
    A = n(652793),
    y = n(652215),
    _ = n(746080),
    O = n(790782),
    j = n(985018);

function v(e) {
    let {
        guild: t,
        selected: v
    } = e, x = (0, p.A)(t), E = (0, u.JZ)(s.M.CHANNEL_BROWSER_NEW_BADGE_NUX), C = (0, i.yK)([h.A], () => Array.from(h.A.getNewChannelIds(t.id)).filter(e => h.A.shouldIndicateNewChannel(t.id, e))), S = (0, i.bG)([g.Ay], () => g.Ay.hasUnread(t.id, O.P.GUILD_ONBOARDING_QUESTION)), I = C.length > b.rR, N = (0, i.bG)([d.A, g.Ay], () => {
        let e = d.A.lastFetchedAt(t.id),
            n = g.Ay.lastMessageId(t.id, O.P.GUILD_ONBOARDING_QUESTION);
        if (null == n) return !1;
        let r = m.default.extractTimestamp(n);
        return null != e && e > r
    }), T = l.useCallback(() => {
        (0, f.pX)(y.BVt.CHANNEL(t.id, x ? _.VV.CUSTOMIZE_COMMUNITY : _.VV.CHANNEL_BROWSER))
    }, [t.id, x]), P = l.useCallback(e => {
        (0, c.L3)(e, async () => {
            let {
                default: e
            } = await n.e("30412").then(n.bind(n, 807431));
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
    }, [t]), w = null;
    return E && !S && !I || v || N || (w = (0, r.jsx)(o.LpS, {
        color: a.A.colors.BADGE_BACKGROUND_BRAND.css,
        text: j.intl.string(j.t.y2b7CA)
    })), (0, r.jsx)(A.G, {
        id: "channels-".concat(t.id),
        renderIcon: e => (0, r.jsx)(o.kiI, {
            size: "md",
            color: "currentColor",
            className: e
        }),
        text: x ? j.intl.string(j.t.h9mGOP) : j.intl.string(j.t.et6wav),
        selected: v,
        onClick: T,
        onContextMenu: P,
        trailing: w
    })
}