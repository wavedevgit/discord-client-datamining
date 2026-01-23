/** Chunk was on 66708 **/
/** chunk id: 303174, original params: e,n,s (module,exports,require) **/
s.r(n), s.d(n, {
    default: () => _
});
var t = s(627968);
s(64700);
var a = s(311907),
    r = s(397927),
    i = s(976860),
    l = s(961350),
    c = s(207913),
    d = s(210742),
    o = s(239093),
    p = s(652215),
    u = s(985018),
    h = s(90344);

function N() {
    return (0, t.jsxs)(r.$Td, {
        color: r.Hv$.DANGER,
        className: h.aL,
        children: [(0, t.jsx)(r.Text, {
            tag: "span",
            color: "always-white",
            variant: "text-md/normal",
            children: u.intl.string(u.t["MG+Bzb"])
        }), (0, t.jsx)(r.eCN, {
            noticeType: p.kqX.SAFETY_SUSPENDED_USER_WARNING,
            href: o.d$.WARNING_SYSTEM_HELPCENTER_LINK,
            children: (0, t.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: u.intl.string(u.t["9JceHN"])
            })
        })]
    })
}

function x(e) {
    let {} = e, n = (0, a.bG)([c.A], () => c.A.getAgeCheckStatus());
    return n === o.qN.NONE ? null : n === o.qN.SUCCESS ? (0, t.jsx)(r.po8, {
        messageType: r.YCn.POSITIVE,
        children: u.intl.format(u.t.maZDL6, {
            login: "/login"
        })
    }) : n === o.qN.ERROR ? (0, t.jsx)(r.po8, {
        messageType: r.YCn.ERROR,
        children: u.intl.string(u.t["4sILBU"])
    }) : n === o.qN.FAILURE ? (0, t.jsx)(r.po8, {
        messageType: r.YCn.ERROR,
        children: u.intl.string(u.t["40R63o"])
    }) : (0, t.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        children: u.intl.string(u.t["nhhy/R"])
    })
}

function g() {
    return (0, t.jsxs)("div", {
        className: h.$$,
        children: [(0, t.jsx)(x, {}), (0, t.jsx)(d.A, {})]
    })
}

function _() {
    return null == (0, a.bG)([l.default], () => l.default.getSuspendedUserToken()) && (0, i.pX)(p.BVt.LOGIN, {
        source: "suspended_user_safety_hub_page"
    }), (0, t.jsxs)("div", {
        className: h.kL,
        children: [(0, t.jsx)(N, {}), (0, t.jsx)(g, {})]
    })
}