/** chunk id: 895770, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(397927),
    r = n(397400),
    d = n(225180),
    c = n(738072),
    o = n(985018),
    u = n(306706);

function m(e) {
    let {
        className: t,
        guildId: n,
        game: i,
        onClick: m,
        imageClassName: g,
        titleClassName: f,
        disabled: v = !1,
        location: x
    } = e, _ = (0, d.A)(i.gameId, "cover");
    return (0, a.jsxs)(l.DUT, {
        "aria-disabled": v,
        className: s()(u.LO, {
            [u.r9]: v
        }, t),
        onClick: v ? void 0 : () => {
            (0, r.oT)(n, i.id, i.name, x), m(i)
        },
        children: [(0, a.jsxs)("div", {
            className: s()(u.Rf, g),
            children: [(0, a.jsx)("img", {
                className: u.Sl,
                alt: "",
                src: _ ?? ""
            }), (0, a.jsx)("div", {
                className: u.Gj
            }), (0, a.jsx)("div", {
                className: u.Uf
            })]
        }), (0, a.jsxs)("div", {
            className: s()(u.FS, f),
            children: [(0, a.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                lineClamp: 1,
                title: i.name,
                children: i.name
            }), (0, a.jsxs)("div", {
                className: u.PW,
                children: [(0, a.jsx)(l._Jp, {
                    size: "sm",
                    color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
                }), (0, a.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    children: o.intl.formatToPlainString(i.plans.length > 1 ? c.default["G/aTXi"] : c.default.r9pa9K, {
                        boostCount: i.baseCost
                    })
                })]
            })]
        })]
    })
}