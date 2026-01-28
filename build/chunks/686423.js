/** Chunk was on 5606 **/
/** chunk id: 686423, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(502572),
    s = n(732955),
    a = n(397927),
    o = n(688810),
    c = n(531260),
    d = n(987144),
    u = n(473145),
    p = n(652215),
    _ = n(985018),
    m = n(572523);

function g(e) {
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
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let b = function() {
    let e = i.useRef(null),
        {
            analyticsLocations: t
        } = (0, o.Ay)(),
        {
            fractionalState: b
        } = (0, c.A)();

    function h(n) {
        null != e.current && (0, a.OoC)(e.current), (0, d.g)({
            analyticsLocation: {
                page: p.liQ.GUILD_BOOSTING_USER_SETTINGS,
                section: p.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                object: p.ZSU.BUTTON_CTA,
                objectType: p.AnalyticsObjectTypes.BUY
            },
            analyticsLocations: t,
            guild: n
        })
    }
    async function A() {
        e.current = await (0, a.mMO)(async () => {
            let {
                default: e
            } = await Promise.resolve().then(n.bind(n, 770101));
            return t => (0, r.jsx)(e, f(g({}, t), {
                onSelectGuild: h
            }))
        }, {
            onCloseRequest: () => {
                null != e.current && (0, a.OoC)(e.current)
            }
        })
    }
    let E = (0, u.Nc)({
        fractionalState: b
    });
    return (0, r.jsxs)("div", {
        className: m.iE,
        children: [(0, r.jsx)(a._Jp, {
            color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: m.$J
        }), (0, r.jsx)(a.Text, {
            className: m.C,
            color: "text-default",
            variant: "text-sm/medium",
            children: _.intl.format(_.t.kqC5vq, {
                boostAnyGuildHook: (e, t) => {
                    let n = null != E,
                        i = (0, a.Oer)(e),
                        o = (0, r.jsx)("div", {
                            className: m.lO,
                            children: (0, r.jsx)(s.QWc, {
                                variant: "primary",
                                onClick: n ? void 0 : A,
                                text: i,
                                disabled: n
                            }, t)
                        });
                    return n ? (0, r.jsx)(l.A, {
                        text: E,
                        "aria-label": E.toString(),
                        children: e => (0, r.jsx)("span", f(g({}, e), {
                            children: o
                        }))
                    }, t) : o
                }
            })
        })]
    })
}