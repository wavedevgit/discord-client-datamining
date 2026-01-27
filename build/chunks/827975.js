/** Chunk was on 77870 **/
/** chunk id: 827975, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(837381),
    i = n(311907),
    s = n(397927),
    a = n(919638),
    o = n(71393),
    c = n(900848),
    u = n(550591),
    d = n(818348),
    p = n(985018),
    h = n(697491);

function f() {
    var e, t;
    let n = (0, i.bG)([a.A, o.A], () => a.A.unavailableGuilds.filter(e => null == o.A.getGuild(e)).length),
        f = (0, l.Vd)("unavailable-guilds-button");
    return n <= 0 ? null : (0, r.jsx)(c.c, {
        children: (0, r.jsx)(u.A, {
            text: p.intl.format(p.t["TnH05/"], {
                count: n
            }),
            children: (0, r.jsx)(s.MzZ, (e = function(e) {
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
            }({
                href: d.qF.STATUS,
                target: "_blank",
                className: h.h,
                "aria-label": p.intl.formatToPlainString(p.t["MEpX+2"], {
                    count: n
                })
            }, f), t = t = {
                children: (0, r.jsx)(s.EpV, {
                    color: "currentColor",
                    "aria-hidden": !0
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e))
        })
    })
}