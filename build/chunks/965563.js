/** Chunk was on web.js **/
/** chunk id: 965563, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(667532);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(263063),
    l = n(71393),
    c = n(711014),
    u = n(403362),
    d = n(612025),
    f = n(303351),
    p = n(985018),
    _ = n(208227);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let y = {
    label: () => p.intl.string(p.t["32u1Dx"]),
    value: d.YG
};

function b() {
    let {
        selectedGuildId: e,
        setSelectedGuildId: t
    } = (0, d.xk)(), n = (0, a.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()), p = (0, a.bG)([l.A], () => l.A.getGuilds()), {
        hideGuildOptions: h,
        hideGlobalOption: g
    } = (0, f.Z)(), b = n[0];
    i.useEffect(() => {
        g && h || (e === d.YG && e !== b && g && t(b), e !== d.YG && h && t(d.YG))
    }, [e, t, g, h, b]);
    let O = e => {
            t(e)
        },
        v = i.useMemo(() => {
            let e = h ? [] : n.map(e => {
                let t = p[e];
                return null == t ? null : {
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, r.jsx)(o.A, {
                        className: _.cl,
                        guild: t,
                        size: o.A.Sizes.SMALLER,
                        active: !0
                    })
                }
            }).filter(u.Vq);
            return g || e.unshift(E(m({}, y), {
                id: y.value,
                label: y.label(),
                leading: (0, r.jsx)("div", {
                    className: _.KP,
                    children: (0, r.jsx)(s.pVd, {
                        size: "sm",
                        color: "white",
                        "aria-hidden": !0,
                        className: _.cl
                    })
                })
            })), e
        }, [h, n, g, p]);
    return (0, r.jsx)(s.ZiE, {
        selectionMode: "single",
        onSelectionChange: O,
        value: e,
        options: v
    })
}