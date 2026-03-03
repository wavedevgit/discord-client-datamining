/** chunk id: 895770, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(397927),
    r = n(397400),
    d = n(225180),
    o = n(294726),
    c = n(985018),
    u = n(667760);

function m(e) {
    let {
        className: t,
        guildId: n,
        game: s,
        onClick: m,
        imageClassName: x,
        titleClassName: g,
        disabled: v = !1,
        location: f
    } = e, j = (0, d.A)(s.gameId, "cover");
    return (0, a.jsxs)(l.DUT, {
        "aria-disabled": v,
        className: i()(u.LO, {
            [u.r9]: v
        }, t),
        onClick: v ? void 0 : () => {
            (0, r.oT)(n, s.id, s.name, f), m(s)
        },
        children: [(0, a.jsxs)("div", {
            className: i()(u.Rf, x),
            children: [(0, a.jsx)("img", {
                className: u.Sl,
                alt: "",
                src: j ?? ""
            }), (0, a.jsx)("div", {
                className: u.Gj
            }), (0, a.jsx)("div", {
                className: u.Uf
            })]
        }), (0, a.jsxs)("div", {
            className: i()(u.FS, g),
            children: [(0, a.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                lineClamp: 1,
                title: s.name,
                children: s.name
            }), (0, a.jsxs)("div", {
                className: u.PW,
                children: [(0, a.jsx)(l._Jp, {
                    size: "sm",
                    color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
                }), (0, a.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    children: c.intl.formatToPlainString(s.plans.length > 1 ? o.default["G/aTXi"] : o.default.r9pa9K, {
                        boostCount: s.baseCost
                    })
                })]
            })]
        })]
    })
}