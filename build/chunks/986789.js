/** Chunk was on 87557 **/
/** chunk id: 986789, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var a = n(627968),
    l = n(64700),
    r = n(390544),
    i = n(311907),
    s = n(397927),
    o = n(73153),
    c = n(665171),
    d = n(522055),
    u = n(71393),
    m = n(967198),
    p = n(566381);

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a
        })
    }
    return e
}

function x(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function g() {
    let e = (0, i.bG)([m.A], () => m.A.getGuildId()),
        t = (0, i.bG)([u.A], () => {
            var t;
            return null == (t = u.A.getGuild(e)) ? void 0 : t.name
        }),
        n = (0, i.bG)([d.A], () => {
            var t;
            return null == (t = d.A.getStateForGuild(e)) ? void 0 : t.instances
        }),
        g = l.useMemo(() => Object.values(null != n ? n : {})[0], [n]),
        f = l.useCallback(t => {
            null != g && null != e && o.h.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: x(h({}, g), {
                    status: t
                })
            })
        }, [g, e]),
        b = l.useMemo(() => Object.values(r.M).map(e => (0, a.jsx)(s.Button, {
            variant: "primary",
            text: e,
            onClick: () => {
                f(e)
            }
        }, e)), [f]),
        v = l.useCallback(() => {
            null != g && null != e && o.h.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: x(h({}, g), {
                    serverIP: void 0,
                    port: void 0,
                    gameServerPanelUrl: void 0
                })
            })
        }, [g, e]);
    return null == e ? null : (0, a.jsxs)(s.IpV, {
        className: p.kL,
        children: [(0, a.jsx)("div", {
            className: p.uW,
            children: (0, a.jsx)(s.Heading, {
                variant: "heading-md/normal",
                children: "Current guild: ".concat(t)
            })
        }), (0, a.jsxs)("div", {
            className: p.uW,
            children: [(0, a.jsx)(s.Text, {
                variant: "eyebrow",
                children: "Set server state for first server: ".concat(null == g ? void 0 : g.name)
            }), (0, a.jsx)("div", {
                className: p.UD,
                children: b
            }), (0, a.jsx)(s.Text, {
                variant: "eyebrow",
                children: "Remove Server Info"
            }), (0, a.jsx)("div", {
                className: p.UD,
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    text: "Remove IP Address & Game Server Panel URL",
                    onClick: v
                })
            }), (0, a.jsx)(s.Text, {
                variant: "eyebrow",
                children: "Reset server"
            }), (0, a.jsx)(s.Button, {
                variant: "primary",
                text: "Reset",
                onClick: () => {
                    (0, c.cq)(e)
                }
            })]
        })]
    })
}