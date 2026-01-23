/** Chunk was on 28636 **/
/** chunk id: 116219, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(230109),
    a = n(397927),
    s = n(735991),
    o = n(486020),
    c = n(841985),
    d = n(569495),
    u = n(985018),
    p = n(240815);
let h = function(e) {
    let {
        application: t,
        onButtonsVisibilityChange: n
    } = e, h = l.useRef(null), m = l.useMemo(() => o.Ay.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        size: 96
    }), [t]), g = l.useMemo(() => {
        let e = [];
        return (0, s.b7)(t) && e.push(u.intl.string(u.t.LO4f0P)), (0, s.K4)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["8z5B2U"]))), (0, s.ME)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["5khEk8"]))), e
    }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.A, {
            application: t,
            bannerType: "detail",
            iconURL: m
        }), (0, r.jsx)("div", {
            className: p.H,
            style: {
                height: 52
            },
            children: (0, r.jsx)("img", {
                src: m,
                alt: "",
                className: p.my,
                height: 96,
                width: 96,
                style: {
                    borderWidth: 4,
                    marginLeft: 28
                }
            })
        }), (0, r.jsxs)("div", {
            className: p.op,
            children: [(0, r.jsxs)("div", {
                className: p.tJ,
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-xxl/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: t.name
                }), (0, r.jsx)("div", {
                    className: p.A7,
                    children: g.map((e, t) => (0, r.jsx)(a.Text, {
                        className: p.MO,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: e
                    }, t))
                })]
            }), (0, r.jsx)(i.L, {
                innerRef: h,
                onChange: n,
                active: !0,
                children: (0, r.jsx)(d.A, {
                    ref: h,
                    application: t,
                    size: "md"
                })
            })]
        })]
    })
}