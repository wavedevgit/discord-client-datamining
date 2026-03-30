/** chunk id: 796415 params = (module,exports,require) **/
t.d(n, {
    default: () => p
});
var a = t(627968),
    s = t(397927),
    i = t(976860),
    r = t(523084),
    l = t(225180),
    d = t(285286),
    c = t(652215),
    o = t(746080),
    u = t(294726),
    m = t(985018),
    _ = t(944053),
    f = t(223655);

function p(e) {
    let {
        gameServerGame: n,
        guildId: t,
        status: p,
        ...x
    } = e, g = (0, l.A)(n.gameId, "cover");
    return (0, a.jsx)(r.A, {
        title: m.intl.string("created" === p ? u.default["4lLdBM"] : u.default.VPDgHa),
        description: m.intl.formatToPlainString(u.default.yL6BiH, {
            provider: (0, d.A)(n.provider)
        }),
        image: (0, a.jsx)("div", {
            className: f.Z,
            children: (0, a.jsx)("img", {
                className: f.S,
                alt: "",
                src: g ?? ""
            })
        }),
        button: (0, a.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: _.x6,
            children: (0, a.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(u.default.VkItSr),
                onClick: () => {
                    (0, i.pX)(c.BVt.CHANNEL(t, o.VV.GAME_SERVERS)), x.onClose()
                }
            })
        }),
        ...x
    })
}