/** chunk id: 351466, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(960488),
    a = n(311907),
    s = n(726249),
    o = n(49463),
    c = n(122204),
    u = n(301503),
    d = n(570763),
    p = n(403362),
    h = n(533129),
    g = n(726845),
    m = n(285395),
    f = n(488995),
    A = n(34352);
let _ = function() {
    let e = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments),
        t = g.A.useField("selectedTab"),
        n = function(e) {
            switch (e) {
                case f.GlobalDiscoveryTab.SERVERS:
                    return (0, r.jsx)(u.A, {});
                case f.GlobalDiscoveryTab.APPS:
                    return (0, r.jsx)(c.default, {});
                case f.GlobalDiscoveryTab.QUESTS:
                    return (0, r.jsx)(d.A, {
                        topLevelRoute: !1
                    });
                default:
                    (0, p.xb)(e)
            }
        }(t),
        _ = (0, l.zy)();
    return i.useEffect(() => {
        let e = _.pathname,
            t = (0, m.j)(e);
        t !== g.A.getField("selectedTab") && g.A.setState({
            selectedTab: t
        })
    }, [_.pathname]), i.useEffect(() => {
        e && (0, h.tx)({
            selectedTab: t
        })
    }, [t, e]), (0, r.jsxs)("section", {
        className: A.k,
        children: [(0, r.jsx)(s.HI, {
            location: (0, m.t)(t)
        }), (0, r.jsx)("div", {
            className: A.T
        }), n]
    })
}