/** chunk id: 765258 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(742589),
    s = n(976860),
    o = n(954571),
    d = n(144914),
    c = n(652215),
    u = n(985018),
    A = n(321735);
let h = (0, d.S)() || !1,
    _ = l.memo(function(e) {
        let {
            currentRoute: t,
            renderToolbar: n
        } = e, d = l.useContext(o.AnalyticsContext), _ = h || t === c.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, i.jsxs)(r.A, {
            className: A.$,
            toolbar: n?.(),
            children: [(0, i.jsx)(r.A.Icon, {
                icon: a._z,
                "aria-hidden": !0
            }), (0, i.jsx)(r.A.Title, {
                children: u.intl.string(u.t.cw57ar)
            }), (0, i.jsx)(r.A.Divider, {}), (0, i.jsxs)(a.VQ0, {
                type: "top-pill",
                selectedItem: t,
                onItemSelect: function(e) {
                    e !== t && (0, s.pX)(e, {
                        state: {
                            analyticsSource: {
                                ...d.location,
                                section: c.JJy.TABS,
                                object: c.ZSU.NAVIGATION_LINK
                            }
                        }
                    })
                },
                children: [(0, i.jsx)(a.VQ0.Item, {
                    id: c.BVt.APPLICATION_LIBRARY,
                    children: u.intl.string(u.t.p7ARTB)
                }), _ ? (0, i.jsx)(a.VQ0.Item, {
                    id: c.BVt.APPLICATION_LIBRARY_SETTINGS,
                    children: u.intl.string(u.t["3D5yo/"])
                }) : null]
            })]
        })
    })