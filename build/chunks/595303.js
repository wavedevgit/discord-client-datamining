/** Chunk was on 39048 **/
/** chunk id: 595303, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(732955),
    s = n(397927),
    a = n(260509),
    o = n(71393),
    c = n(287809),
    d = n(11351),
    u = n(985018);

function g(e) {
    let {
        guildId: t,
        application: g
    } = e, m = (0, i.bG)([o.A], () => o.A.getGuild(t)), p = (0, i.bG)([c.default], () => c.default.getCurrentUser()), f = (0, d.gN)();
    if (null == m || !(0, a.bM)(m, p)) return null;
    let h = g.team;
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: f ? "text-muted" : "text-default",
            children: null != h ? u.intl.format(u.t.erxwWA, {
                teamName: h.name
            }) : u.intl.string(u.t.FGzLkK)
        }), (0, r.jsx)(s.hKd, {
            size: 16
        }), (0, r.jsx)(l.$nd, {
            text: null != h ? u.intl.string(u.t["/Fjq5P"]) : u.intl.string(u.t["6ih+b4"]),
            variant: null != h ? "secondary" : "primary",
            onClick: () => {
                (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("71678").then(n.bind(n, 180493));
                    return t => {
                        var n, i;
                        return (0, r.jsx)(e, (n = function(e) {
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
                        }({}, t), i = i = {
                            application: g
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(i)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                        }), n))
                    }
                })
            },
            disabled: f
        })]
    })
}