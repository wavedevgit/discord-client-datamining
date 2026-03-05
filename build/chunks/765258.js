/** chunk id: 765258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(742589),
    s = n(976860),
    o = n(954571),
    d = n(144914),
    c = n(652215),
    u = n(985018),
    A = n(195634);
let h = (0, d.S)() || !1,
    _ = r.memo(function(e) {
        let {
            currentRoute: t,
            renderToolbar: n
        } = e, d = r.useContext(o.AnalyticsContext), _ = h || t === c.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, i.jsxs)(a.A, {
            className: A.$,
            toolbar: n?.(),
            children: [(0, i.jsx)(a.A.Icon, {
                icon: l._z,
                "aria-hidden": !0
            }), (0, i.jsx)(a.A.Title, {
                children: u.intl.string(u.t.cw57ar)
            }), (0, i.jsx)(a.A.Divider, {}), (0, i.jsxs)(l.VQ0, {
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
                children: [(0, i.jsx)(l.VQ0.Item, {
                    id: c.BVt.APPLICATION_LIBRARY,
                    children: u.intl.string(u.t.p7ARTB)
                }), _ ? (0, i.jsx)(l.VQ0.Item, {
                    id: c.BVt.APPLICATION_LIBRARY_SETTINGS,
                    children: u.intl.string(u.t["3D5yo/"])
                }) : null]
            })]
        })
    })