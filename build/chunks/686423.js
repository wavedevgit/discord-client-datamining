/** chunk id: 686423 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(502572),
    a = n(732955),
    r = n(397927),
    o = n(688810),
    d = n(531260),
    c = n(987144),
    u = n(473145),
    _ = n(652215),
    g = n(985018),
    A = n(572523);
let m = function() {
    let e = s.useRef(null),
        {
            analyticsLocations: t
        } = (0, o.Ay)(),
        {
            fractionalState: m
        } = (0, d.A)();

    function h(n) {
        null != e.current && (0, r.OoC)(e.current), (0, c.g)({
            analyticsLocation: {
                page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                section: _.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                object: _.ZSU.BUTTON_CTA,
                objectType: _.AnalyticsObjectTypes.BUY
            },
            analyticsLocations: t,
            guild: n
        })
    }
    async function p() {
        e.current = await (0, r.mMO)(async () => {
            let {
                default: e
            } = await Promise.resolve().then(n.bind(n, 770101));
            return t => (0, i.jsx)(e, {
                ...t,
                onSelectGuild: h
            })
        }, {
            onCloseRequest: () => {
                null != e.current && (0, r.OoC)(e.current)
            }
        })
    }
    let x = (0, u.Nc)({
        fractionalState: m
    });
    return (0, i.jsxs)("div", {
        className: A.iE,
        children: [(0, i.jsx)(r._Jp, {
            color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: A.$J
        }), (0, i.jsx)(r.Text, {
            className: A.C,
            color: "text-default",
            variant: "text-sm/medium",
            children: g.intl.format(g.t.kqC5vq, {
                boostAnyGuildHook: (e, t) => {
                    let n = null != x,
                        s = (0, r.Oer)(e),
                        o = (0, i.jsx)("div", {
                            className: A.lO,
                            children: (0, i.jsx)(a.QWc, {
                                variant: "primary",
                                onClick: n ? void 0 : p,
                                text: s,
                                disabled: n
                            }, t)
                        });
                    return n ? (0, i.jsx)(l.A, {
                        text: x,
                        "aria-label": x.toString(),
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            children: o
                        })
                    }, t) : o
                }
            })
        })]
    })
}