/** chunk id: 248492 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(692617),
    s = n(397927),
    d = n(824552),
    o = n(573435),
    c = n(973172),
    u = n(186272),
    _ = n(546183),
    m = n(661191),
    p = n(985018),
    h = n(936557),
    x = n(532406);
let g = e => {
    let {
        entry: t
    } = e, {
        name: n
    } = t, g = (0, i.bG)([_.default], () => _.default.getNewestTokenForApplication(t.id)), A = t.getIconURL(40) ?? x, v = (0, c.A)({
        application: t
    }), b = l.useRef(!1);
    l.useEffect(() => {
        b.current || (d.A.fetch(), b.current = !0)
    }, []);
    let f = null != g ? m.default.extractTimestamp(g.id) : void 0;
    return (0, a.jsxs)("div", {
        className: h.kL,
        children: [(0, a.jsx)(s.Heading, {
            className: h.wx,
            variant: "heading-sm/semibold",
            children: p.intl.string(p.t["aYfK/w"])
        }), (0, a.jsx)("div", {
            className: h.vU,
            children: (0, a.jsxs)("div", {
                className: h.qi,
                children: [(0, a.jsx)(o.Ay, {
                    mask: o.Ay.Masks.AVATAR_DEFAULT,
                    width: 40,
                    height: 40,
                    className: h.VE,
                    children: (0, a.jsx)("img", {
                        src: A,
                        alt: "",
                        className: h.Z2
                    })
                }), (0, a.jsxs)("div", {
                    className: h.FS,
                    children: [(0, a.jsx)(s.Text, {
                        color: "text-strong",
                        variant: "text-md/medium",
                        children: n
                    }), v.length > 0 ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            children: (0, u.A)(v.length)
                        }), (0, a.jsx)(r.A, {
                            className: h.uM,
                            guilds: v,
                            maxGuilds: 6
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            children: t.bot?.tag
                        }), null != f && (0, a.jsx)(s.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            children: p.intl.formatToPlainString(p.t.C9rUO8, {
                                authorizedAt: f
                            })
                        })]
                    })]
                })]
            })
        })]
    })
}