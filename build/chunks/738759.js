/** Chunk was on 64228 **/
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
    c = n(51943),
    d = n(985018),
    u = n(781425);

function p(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: p
    } = (0, o.NJ)(), {
        mutualGuilds: m,
        isFetching: f
    } = (0, a.A)(t);
    return (0, l.jsx)(i.IpV, {
        className: u.DK,
        fade: !0,
        children: null == m && f ? (0, l.jsx)("div", {
            className: u.Ie,
            children: (0, l.jsx)(i.y$y, {})
        }) : (null != m || f) && (null == m ? void 0 : m.length) !== 0 ? null == m ? void 0 : m.map(e => {
            let {
                guild: i,
                nick: o
            } = e;
            return (0, l.jsx)(c.A, {
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
                children: d.intl.string(d.t.zjVh8h)
            })]
        })
    })
}