/** chunk id: 695667 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    r = n(64700),
    a = n(158954),
    i = n(165655),
    s = n(468946),
    d = n(27023),
    o = n(225180),
    c = n(740950);

function u() {
    let {
        currentGame: e,
        planId: t
    } = (0, d.bv)(), n = (0, o.A)(e?.gameId, "cover");
    if (null == e) return null;
    let u = e?.plans.find(e => e.id === t);
    return (0, l.jsxs)("div", {
        className: c.kL,
        children: [(0, l.jsxs)("div", {
            className: c.Qs,
            children: [(0, l.jsxs)("div", {
                className: c.N1,
                children: [(0, l.jsx)("img", {
                    src: n ?? "",
                    className: c.Sl,
                    alt: e.name
                }), (0, l.jsxs)("div", {
                    className: c.wx,
                    children: [(0, l.jsx)(a.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: e.name
                    }), (0, l.jsx)(a.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: u?.name
                    })]
                })]
            }), null != u && (0, l.jsx)("div", {
                className: c.wL,
                children: u.specifications.map((e, t) => (0, l.jsxs)(r.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: c._Y,
                        children: [(0, l.jsx)(a.DZT, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: e.title
                        }), (0, l.jsx)(a.EYj, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: e.description
                        })]
                    }), t !== (u?.specifications.length ?? 0) - 1 && (0, l.jsx)("div", {
                        className: c.yF
                    })]
                }, t))
            }), (0, l.jsx)("div", {
                className: c.UK,
                children: (0, l.jsx)(s.A, {})
            })]
        }), (0, l.jsx)("div", {
            className: c.uV,
            children: (0, l.jsx)(i.T, {
                imageUrl: n ?? ""
            })
        })]
    })
}