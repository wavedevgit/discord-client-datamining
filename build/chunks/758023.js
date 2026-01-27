/** Chunk was on 39048 **/
/** chunk id: 758023, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    o = n(990078),
    c = n(397927),
    d = n(374084),
    u = n(913423),
    g = n(961350),
    m = n(199940),
    p = n(132514),
    f = n(817136),
    h = n(985018),
    b = n(659233);
let x = function(e) {
    let {
        guildId: t
    } = e, l = (0, a.cf)([p.A], () => {
        var e;
        return null != (e = p.A.getSettings().welcomeMessage) ? e : f.p
    }), x = i.useCallback(() => (0, c.mMO)(async () => {
        let {
            default: e
        } = await n.e("94194").then(n.bind(n, 930345));
        return n => {
            var i, s;
            return (0, r.jsx)(e, (i = function(e) {
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
            }({}, n), s = s = {
                guildId: t,
                welcomeMessage: l,
                onSave: e => (0, m.hL)(e)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(s)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
            }), i))
        }
    }), [t, l]), j = (0, a.bG)([g.default], () => g.default.getId());
    return (0, d.Fn)(l) ? (0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        text: h.intl.string(h.t["9Z+aEP"]),
        onClick: x
    }) : (0, r.jsxs)(c.DUT, {
        className: b.ab,
        onClick: x,
        children: [(0, r.jsx)(u.A, {
            guildId: t,
            welcomeMessage: {
                authorIds: l.authorIds.length > 0 ? l.authorIds : [j],
                message: l.message
            }
        }), (0, r.jsx)(o.m, {
            text: h.intl.string(h.t.bt75uw),
            children: (0, r.jsxs)("div", {
                className: s()(b.Md, b.Tu),
                children: [(0, r.jsx)(c.R2l, {
                    size: "md",
                    color: "currentColor"
                }), (0, r.jsx)(c.AC4, {
                    children: h.intl.string(h.t.bt75uw)
                })]
            })
        })]
    })
}