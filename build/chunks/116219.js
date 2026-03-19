/** chunk id: 116219 params = (module,exports,require) **/
a.d(t, {
    A: () => h
}), a(321073);
var n = a(627968),
    i = a(64700),
    l = a(230109),
    s = a(397927),
    r = a(735991),
    o = a(486020),
    c = a(841985),
    d = a(569495),
    u = a(985018),
    m = a(706149);
let h = function(e) {
    let {
        application: t,
        onButtonsVisibilityChange: a
    } = e, h = i.useRef(null), p = i.useMemo(() => o.Ay.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        size: 96
    }), [t]), _ = i.useMemo(() => {
        let e = [];
        return (0, r.b7)(t) && e.push(u.intl.string(u.t.LO4f0P)), (0, r.K4)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["8z5B2U"]))), (0, r.ME)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["5khEk8"]))), e
    }, [t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.A, {
            application: t,
            bannerType: "detail",
            iconURL: p
        }), (0, n.jsx)("div", {
            className: m.H,
            style: {
                height: 52
            },
            children: (0, n.jsx)("img", {
                src: p,
                alt: "",
                className: m.my,
                height: 96,
                width: 96,
                style: {
                    borderWidth: 4,
                    marginLeft: 28
                }
            })
        }), (0, n.jsxs)("div", {
            className: m.op,
            children: [(0, n.jsxs)("div", {
                className: m.tJ,
                children: [(0, n.jsx)(s.Heading, {
                    variant: "heading-xxl/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: t.name
                }), (0, n.jsx)("div", {
                    className: m.A7,
                    children: _.map((e, t) => (0, n.jsx)(s.Text, {
                        className: m.MO,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: e
                    }, t))
                })]
            }), (0, n.jsx)(l.L, {
                innerRef: h,
                onChange: a,
                active: !0,
                children: (0, n.jsx)(d.A, {
                    ref: h,
                    application: t,
                    size: "md"
                })
            })]
        })]
    })
}