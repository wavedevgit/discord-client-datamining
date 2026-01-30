/** chunk id: 738759, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(398590),
    s = n(345942),
    o = n(183555),
    a = n(913453),
    d = n(51943),
    c = n(985018),
    u = n(781425);

function p(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: p
    } = (0, o.NJ)(), {
        mutualGuilds: f,
        isFetching: m
    } = (0, a.A)(t);
    return (0, l.jsx)(i.IpV, {
        className: u.DK,
        fade: !0,
        children: null == f && m ? (0, l.jsx)("div", {
            className: u.Ie,
            children: (0, l.jsx)(i.y$y, {})
        }) : (null != f || m) && (null == f ? void 0 : f.length) !== 0 ? null == f ? void 0 : f.map(e => {
            let {
                guild: i,
                nick: o
            } = e;
            return (0, l.jsx)(d.A, {
                user: t,
                guild: i,
                nick: o,
                onSelect: () => {
                    var e;
                    p({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = i.id, (0, s.u)(e), n(), (0, r.jH)()
                }
            }, i.id)
        }) : (0, l.jsxs)("div", {
            className: u.Ie,
            children: [(0, l.jsx)("div", {
                className: u.vC
            }), (0, l.jsx)("div", {
                className: u.BI,
                children: c.intl.string(c.t.zjVh8h)
            })]
        })
    })
}