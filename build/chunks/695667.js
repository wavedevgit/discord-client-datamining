/** Chunk was on 14691 **/
/** chunk id: 695667, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    s = n(165655),
    a = n(468946),
    d = n(27023),
    o = n(225180),
    c = n(794567);

function u() {
    let {
        currentGame: e,
        planId: t
    } = (0, d.bv)(), n = (0, o.A)(null == e ? void 0 : e.gameId, "cover");
    if (null == e) return null;
    let u = null == e ? void 0 : e.plans.find(e => e.id === t);
    return (0, r.jsxs)("div", {
        className: c.kL,
        children: [(0, r.jsxs)("div", {
            className: c.Qs,
            children: [(0, r.jsxs)("div", {
                className: c.N1,
                children: [(0, r.jsx)("img", {
                    src: null != n ? n : "",
                    className: c.Sl,
                    alt: e.name
                }), (0, r.jsxs)("div", {
                    className: c.wx,
                    children: [(0, r.jsx)(i.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: e.name
                    }), (0, r.jsx)(i.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: null == u ? void 0 : u.name
                    })]
                })]
            }), null != u && (0, r.jsx)("div", {
                className: c.wL,
                children: u.specifications.map((e, t) => {
                    var n;
                    return (0, r.jsxs)(l.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: c._Y,
                            children: [(0, r.jsx)(i.DZT, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: e.title
                            }), (0, r.jsx)(i.EYj, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: e.description
                            })]
                        }), t !== (null != (n = null == u ? void 0 : u.specifications.length) ? n : 0) - 1 && (0, r.jsx)("div", {
                            className: c.yF
                        })]
                    }, t)
                })
            }), (0, r.jsx)("div", {
                className: c.UK,
                children: (0, r.jsx)(a.A, {})
            })]
        }), (0, r.jsx)("div", {
            className: c.uV,
            children: (0, r.jsx)(s.T, {
                imageUrl: null != n ? n : ""
            })
        })]
    })
}