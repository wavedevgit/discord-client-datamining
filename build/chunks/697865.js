/** chunk id: 697865, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    o = n(158954),
    s = n(311907),
    a = n(421380),
    u = n(397927),
    d = n(730134),
    c = n(775602),
    p = n(509536),
    m = n(721923),
    f = n(29086),
    v = n(854627),
    g = n(696451),
    A = n(317525),
    _ = n(71393),
    x = n(287809),
    h = n(562153),
    b = n(837921),
    j = n(652215),
    E = n(333354),
    w = n(985018),
    y = n(520277),
    I = n(445826);
let S = b.Ay.getEnableHardwareAcceleration() ? u.JsQ : d.A;

function C(e) {
    var t, n;
    let {
        guildId: l
    } = e, d = (0, s.bG)([_.A], () => _.A.getGuild(l)), b = (0, s.bG)([A.A], () => A.A.getSortedRoles(l).find(e => {
        var t;
        return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null
    })), C = (0, s.bG)([x.default], () => x.default.getCurrentUser()), N = null == C ? void 0 : C.id, O = (0, s.bG)([g.Ay], () => null != N ? g.Ay.getMember(l, N) : void 0, [N, l]), L = (null == O ? void 0 : O.premiumSince) != null, P = (0, s.bG)([c.A], () => c.A.useReducedMotion), {
        avatarDecorationSrc: k,
        avatarSrc: T,
        eventHandlers: G
    } = (0, v.A)({
        userId: null == C ? void 0 : C.id,
        guildId: l,
        size: u._3J.SIZE_40,
        animateOnHover: !P
    });
    return null == d || null == O || null == C ? null : (0, r.jsxs)(u.hLv, {
        className: y.kL,
        children: [(0, r.jsx)("img", {
            alt: "",
            className: y.Sl,
            src: I
        }), (0, r.jsxs)("div", {
            className: y.FS,
            children: [(0, r.jsx)(o.EYj, {
                variant: "text-md/semibold",
                children: w.intl.string(L ? E.default.KSWK1U : E.default.XXXX5l)
            }), (0, r.jsx)(o.EYj, {
                variant: "text-sm/medium",
                children: w.intl.format(L ? E.default["7fWTg4"] : E.default["7PXeeQ"], {
                    onClick: () => {
                        (0, p.K)({
                            guildId: l,
                            location: {
                                section: j.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                object: j.ZSU.LEARN_MORE
                            }
                        })
                    }
                })
            })]
        }), null != b && !L && (0, r.jsx)(f.V, {
            avatar: (0, r.jsx)(S, (t = function(e) {
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
            }({}, G), n = n = {
                user: C,
                src: T,
                avatarDecoration: k,
                size: u._3J.SIZE_40,
                "aria-hidden": !0,
                animate: !0
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)),
            username: (0, r.jsx)(u.gyj, {
                variant: "text-md/semibold",
                name: h.Ay.getName(l, null, C),
                colorString: b.colorString,
                colorStrings: b.colorStrings
            }),
            className: i()(y.Qs, y.cX),
            message: w.intl.string(w.t["6OSasb"]),
            decorations: (0, r.jsx)(u._Jp, {
                color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: y.$J
            })
        }), (0, r.jsx)(m.A, {
            guild: d,
            className: y.Qs,
            analyticsLocation: {
                page: j.liQ.GUILD_POWERUPS_OVERVIEW,
                section: j.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR
            },
            color: a.XD.BRAND,
            size: a.lO.MEDIUM,
            fullWidth: !0,
            icon: (0, r.jsx)(u._Jp, {
                color: "currentColor",
                size: "sm"
            })
        })]
    })
}