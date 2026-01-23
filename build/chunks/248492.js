/** Chunk was on 58652 **/
/** chunk id: 248492, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(692617),
    s = n(397927),
    o = n(824552),
    d = n(573435),
    c = n(973172),
    u = n(186272),
    m = n(546183),
    p = n(661191),
    b = n(985018),
    x = n(449154),
    g = n(532406);
let _ = e => {
    var t, n;
    let {
        entry: _
    } = e, {
        name: h
    } = _, v = (0, i.bG)([m.default], () => m.default.getNewestTokenForApplication(_.id)), f = null != (t = _.getIconURL(40)) ? t : g, j = (0, c.A)({
        application: _
    }), A = r.useRef(!1);
    r.useEffect(() => {
        A.current || (o.A.fetch(), A.current = !0)
    }, []);
    let y = null != v ? p.default.extractTimestamp(v.id) : void 0;
    return (0, l.jsxs)("div", {
        className: x.kL,
        children: [(0, l.jsx)(s.Heading, {
            className: x.wx,
            variant: "heading-sm/semibold",
            children: b.intl.string(b.t["aYfK/w"])
        }), (0, l.jsx)("div", {
            className: x.vU,
            children: (0, l.jsxs)("div", {
                className: x.qi,
                children: [(0, l.jsx)(d.Ay, {
                    mask: d.Ay.Masks.AVATAR_DEFAULT,
                    width: 40,
                    height: 40,
                    className: x.VE,
                    children: (0, l.jsx)("img", {
                        src: f,
                        alt: "",
                        className: x.Z2
                    })
                }), (0, l.jsxs)("div", {
                    className: x.FS,
                    children: [(0, l.jsx)(s.Text, {
                        color: "text-strong",
                        variant: "text-md/medium",
                        children: h
                    }), j.length > 0 ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            children: (0, u.A)(j.length)
                        }), (0, l.jsx)(a.A, {
                            className: x.uM,
                            guilds: j,
                            maxGuilds: 6
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            children: null == (n = _.bot) ? void 0 : n.tag
                        }), null != y && (0, l.jsx)(s.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            children: b.intl.formatToPlainString(b.t.C9rUO8, {
                                authorizedAt: y
                            })
                        })]
                    })]
                })]
            })
        })]
    })
}