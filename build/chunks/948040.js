/** Chunk was on 21968 **/
/** chunk id: 948040, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(442433),
    s = n(155718),
    o = n(200662),
    c = n(985018),
    d = n(48778);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function p(e) {
    let {
        applicationIcon: t,
        applicationName: p,
        canNavigate: m,
        command: g,
        guildId: b
    } = e, f = r.useMemo(() => {
        var e;
        return 0 !== Object.keys(null != (e = g.permissions) ? e : {}).length
    }, [g.permissions]), h = r.useCallback(() => {
        null != g && m() && (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("15946").then(n.bind(n, 326993));
            return n => (0, i.jsx)(e, u({
                applicationIcon: t,
                applicationId: g.applicationId,
                applicationName: p,
                command: g,
                guildId: b
            }, n))
        })
    }, [t, p, m, g, b]), x = r.useCallback(e => {
        (0, a.L3)(e, async () => {
            let {
                default: e
            } = await n.e("15687").then(n.bind(n, 646938));
            return t => {
                var n, r;
                return (0, i.jsx)(e, (n = u({}, t), r = r = {
                    id: g.id,
                    label: c.intl.string(c.t.oJ1Muw)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, i)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
            }
        })
    }, [g]), j = g.type === s.kc.CHAT ? l.kC9 : l.ueQ, O = (0, o.p6)(g.type, g.displayName);
    return (0, i.jsxs)(l.DUT, {
        onClick: h,
        className: d.AS,
        onContextMenu: x,
        children: [(0, i.jsxs)("div", {
            className: d.Cv,
            children: [(0, i.jsx)(j, {
                className: d.Kk,
                size: "md",
                color: "currentColor"
            }), (0, i.jsx)(l.Text, {
                variant: "text-md/normal",
                children: O
            })]
        }), (0, i.jsx)("div", {
            className: d.II,
            children: f ? (0, i.jsxs)("div", {
                className: d.Bs,
                children: [(0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: c.intl.string(c.t.jH4B9O)
                }), (0, i.jsx)(l.mir, {
                    size: "sm",
                    color: "currentColor",
                    className: d.I8
                })]
            }) : null
        })]
    })
}