/** chunk id: 615112 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(450510),
    r = n(220380),
    o = n(793877);

function d(e) {
    let {
        hotspotLocation: t
    } = e, [n, r] = (0, i.yK)([s.HP], () => [s.HP.hasHotspot(t, !0), s.HP.getHotspotOverride(t)]);
    return (0, a.jsx)(l.l6P, {
        label: t,
        errorMessage: n ? "Inactive" : void 0,
        successMessage: n ? "Active" : void 0,
        value: r,
        options: [{
            id: "none",
            value: void 0,
            label: "No Override"
        }, {
            id: "active",
            value: !0,
            label: "Force Active"
        }, {
            id: "inactive",
            value: !1,
            label: "Force Inactive"
        }],
        onSelectionChange: e => null != e ? (0, s.Kl)(t, e) : (0, s.LF)(t),
        selectionMode: "single",
        fullWidth: !0
    })
}

function c() {
    return (0, a.jsx)(l.IpV, {
        className: o.nd,
        children: (0, a.jsx)(l.nVY, {
            label: "Hotspots",
            description: "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: r.IN,
            children: (0, a.jsx)(l.BJc, {
                gap: 20,
                children: Object.keys(s._2).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(d, {
                    hotspotLocation: e
                }, e))
            })
        })
    })
}