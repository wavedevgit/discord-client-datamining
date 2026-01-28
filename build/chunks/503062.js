/** Chunk was on 94682 **/
/** chunk id: 503062, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(442433),
    s = n(297413),
    c = n(439547),
    u = n(714114),
    d = n(729551),
    f = n(178418),
    p = n(87664),
    g = n(290863),
    m = n(939496),
    b = n(652215),
    y = n(996988),
    O = n(794904);
let j = a._3J.SIZE_40,
    h = (0, a.FT9)(j);

function x(e) {
    let {
        user: t,
        status: x,
        guildId: v,
        channelId: _,
        onSelect: I
    } = e, {
        theme: A,
        themeType: w
    } = (0, m.E)(), P = l.useMemo(() => t.isNonUserBot() || (0, f.c)(t, _), [t, _]), {
        activities: E,
        isMobileOnline: S
    } = (0, i.cf)([g.A], () => ({
        activities: g.A.getActivities(t.id),
        isMobileOnline: g.A.isMobileOnline(t.id)
    })), T = (0, p.A)(t.id), {
        voiceActivityStatusEnabled: N
    } = (0, c.g)({
        location: "UserProfileMutualFriendRow"
    }), {
        voiceChannel: C
    } = (0, u.A)({
        userId: N ? t.id : void 0,
        guildId: v
    });
    return (0, r.jsxs)(a.DUT, {
        focusProps: w === y.d.MODAL_V2 ? {
            offset: {
                top: 4,
                right: 4,
                left: 4
            }
        } : {
            offset: {
                right: 8
            }
        },
        className: O.nM,
        onClick: I,
        onContextMenu: e => {
            (0, o.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("16938")]).then(n.bind(n, 668569));
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
                        user: t
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
        children: [(0, r.jsx)(a.euF, {
            src: t.getAvatarURL(v, h),
            "aria-label": t.username,
            size: j,
            status: P ? b.clD.UNKNOWN : x,
            statusBackdropColor: P ? void 0 : (0, a.C$5)(A),
            isMobile: S,
            className: O.my
        }), (0, r.jsxs)("div", {
            className: O.zH,
            children: [(0, r.jsx)(s.A, {
                user: t,
                className: O.Tc,
                discriminatorClass: O.D2
            }), (0, r.jsx)(d.A, {
                user: t,
                activities: E,
                applicationStream: T,
                voiceChannel: C
            })]
        })]
    })
}