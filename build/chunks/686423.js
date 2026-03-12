/** chunk id: 686423 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(502572),
    r = n(732955),
    a = n(397927),
    o = n(688810),
    d = n(531260),
    c = n(987144),
    u = n(473145),
    _ = n(652215),
    m = n(985018),
    g = n(894137);
let A = function() {
    let e = s.useRef(null),
        {
            analyticsLocations: t
        } = (0, o.Ay)(),
        {
            fractionalState: A
        } = (0, d.A)();

    function h(n) {
        null != e.current && (0, a.OoC)(e.current), (0, c.g)({
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
    async function x() {
        e.current = await (0, a.mMO)(async () => {
            let {
                default: e
            } = await Promise.resolve().then(n.bind(n, 770101));
            return t => (0, i.jsx)(e, {
                ...t,
                onSelectGuild: h
            })
        }, {
            onCloseRequest: () => {
                null != e.current && (0, a.OoC)(e.current)
            }
        })
    }
    let p = (0, u.Nc)({
        fractionalState: A
    });
    return (0, i.jsxs)("div", {
        className: g.iE,
        children: [(0, i.jsx)(a._Jp, {
            color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: g.$J
        }), (0, i.jsx)(a.Text, {
            className: g.C,
            color: "text-default",
            variant: "text-sm/medium",
            children: m.intl.format(m.t.kqC5vq, {
                boostAnyGuildHook: (e, t) => {
                    let n = null != p,
                        s = (0, a.Oer)(e),
                        o = (0, i.jsx)("div", {
                            className: g.lO,
                            children: (0, i.jsx)(r.QWc, {
                                variant: "primary",
                                onClick: n ? void 0 : x,
                                text: s,
                                disabled: n
                            }, t)
                        });
                    return n ? (0, i.jsx)(l.A, {
                        text: p,
                        "aria-label": p.toString(),
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