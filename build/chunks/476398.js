/** chunk id: 476398, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048), n(114821), n(339614);
var a = n(627968),
    l = n(311907),
    r = n(397927),
    i = n(793574),
    s = n(657331),
    o = n(287809),
    c = n(574520),
    d = n(435738),
    u = n(99753),
    m = n(475450),
    p = n(583846),
    h = n(424994),
    x = n(805176);

function g(e) {
    let {
        id: t
    } = e, n = (0, l.bG)([o.default], () => o.default.getUser(t));
    return null == n ? null : (0, a.jsx)(r.DUT, {
        className: x._,
        onClick: function() {
            (0, s.openUserProfileModal)({
                sourceAnalyticsLocations: [i.A.DEV_TOOLS],
                userId: t
            })
        },
        children: (0, a.jsx)(r.Text, {
            variant: "text-md/semibold",
            children: n.username
        })
    })
}

function f() {
    var e;
    let t = (0, l.bG)([u.A], () => u.A.getFeed(h.X1.GLOBAL_FEED)),
        n = (0, l.bG)([u.A], () => u.A.getFilters()),
        i = (0, l.cf)([c.A], () => {
            var e;
            let n = {};
            for (let a of null != (e = null == t ? void 0 : t.entries) ? e : []) n[(0, c.$)(a.content)] = c.A.canRenderContent(a.content);
            return n
        }, [t]),
        s = (0, l.bG)([d.A], () => d.A.getImpressionCappedItemIds());
    if (null == n) return null;
    let o = null == t || null == (e = t.entries) ? void 0 : e.flatMap(e => {
        let {
            content: t
        } = e;
        if (!(0, m.l)(n, t)) return [];
        let l = i[(0, c.$)(t)];
        return (0, a.jsxs)("li", {
            className: x.p,
            children: [(0, a.jsx)(g, {
                type: t.author_type,
                id: t.author_id
            }), !l && (0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                children: "Expired or no matching presence"
            }), (0, p.I5)(t) && (0, a.jsxs)(r.Text, {
                variant: "text-md/normal",
                children: ["Expired at ", t.expires_at]
            }), s.has(t.id) && (0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                children: "Impression capped"
            })]
        }, t.id)
    });
    return (0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: "Selected Content"
        }), null != o ? (0, a.jsx)("ul", {
            children: o
        }) : (0, a.jsx)("div", {
            children: "(none?)"
        })]
    })
}