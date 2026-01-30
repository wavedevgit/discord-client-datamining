/** chunk id: 519716, original params: e,t,r (module,exports,require) **/
r.r(t), r.d(t, {
    default: () => f
}), r(747238), r(896048), r(680155), r(323874), r(14289), r(35956);
var n = r(627968);
r(64700);
var a = r(421380),
    l = r(397927),
    o = r(77468),
    i = r(573648),
    s = r(114716),
    c = r(321987),
    d = r(950198),
    u = r(985018),
    m = r(859409);
let f = (0, s.C)(function(e) {
    let {
        match: t
    } = e, r = t.params.type, s = i.A.get(r);
    if (null == s) return (0, n.jsx)(c.$, {
        children: (0, n.jsx)(l.Text, {
            className: m.z3,
            variant: "text-md/normal",
            color: "text-feedback-warning",
            children: u.intl.string(u.t.WLDKSb)
        })
    });
    async function f() {
        var e, t, n;
        let a = new URLSearchParams(window.location.search),
            {
                body: l
            } = await o.A.authorize(r, {
                location: "Connection Intermediate",
                twoWayLink: null != a.get("two_way_link") ? "true" === a.get("two_way_link") : void 0,
                twoWayLinkType: null != (e = a.get("two_way_link_type")) ? e : void 0,
                userCode: null != (t = a.get("two_way_user_code")) ? t : void 0,
                successRedirect: null != (n = a.get("success_redirect")) ? n : void 0
            });
        window.location = l.url
    }
    return (0, n.jsx)(c.$, {
        wrapperClassName: m.iE,
        children: (0, n.jsxs)("div", {
            className: m.zr,
            children: [(0, n.jsx)(d.Jq, {
                className: m.ry,
                platform: s
            }), (0, n.jsx)(l.Heading, {
                variant: "text-lg/bold",
                className: m.wx,
                children: u.intl.format(u.t.Pw4vee, {
                    provider: s.name
                })
            }), (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                className: m.rf,
                children: u.intl.format(u.t.rHlSVB, {
                    provider: s.name
                })
            }), (0, n.jsx)(a.$n, {
                size: a.$n.Sizes.LARGE,
                color: a.$n.Colors.BRAND,
                onClick: f,
                children: u.intl.string(u.t["+NJGEj"])
            })]
        })
    })
})