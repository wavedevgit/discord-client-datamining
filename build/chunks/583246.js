/** chunk id: 583246 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var n = i(627968);
i(64700);
var s = i(398590),
    l = i(114212),
    a = i(345942),
    r = i(183555),
    o = i(913453),
    d = i(51943),
    c = i(782505),
    u = i(515054),
    g = i(499044);

function m(e) {
    let {
        user: t,
        onClose: i
    } = e, {
        trackUserProfileAction: m
    } = (0, r.NJ)(), {
        mutualGuilds: h,
        isFetching: x
    } = (0, o.A)(t);
    return (0, n.jsx)(u.K, {
        className: g.XG,
        fade: !0,
        children: null == h && x ? Array.from({
            length: 10
        }).map((e, t) => (0, n.jsxs)("div", {
            className: g.Y7,
            children: [(0, n.jsx)(l.FQ, {
                width: 40,
                opacity: .08
            }), (0, n.jsx)(l.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : (null != h || x) && h?.length !== 0 ? h?.map(e => {
            let {
                guild: l,
                nick: r
            } = e;
            return (0, n.jsx)(d.A, {
                user: t,
                guild: l,
                nick: r,
                onSelect: () => {
                    m({
                        action: "PRESS_MUTUAL_GUILD"
                    }), (0, a.u)(l.id), i(), (0, s.jH)()
                }
            }, l.id)
        }) : (0, n.jsx)(c.jB, {})
    })
}