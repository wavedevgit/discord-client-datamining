/** chunk id: 544727 params = (module,exports,require) **/
n.d(t, {
    $: () => _
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(77729),
    a = n(274372),
    o = n(399925),
    d = n(419954),
    c = n(780964),
    u = n(985018);
let _ = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [u.intl.string(u.t.s4773E), u.intl.string(u.t.svjwGh)],
    Component: () => {
        let e = (0, s.bG)([a.A], () => a.A.getSettings().storageLocation),
            t = async () => {
                let e = await r.A.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"]
                });
                e.length > 0 && o.HU(e[0])
            };
        return (0, i.jsx)(l.D0$, {
            label: u.intl.string(u.t.s4773E),
            description: u.intl.string(u.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(l.DUT, {
                "aria-label": u.intl.formatToPlainString(u.t.iMONTj, {
                    storageLocation: e
                }),
                onClick: t,
                children: (0, i.jsx)(l.ksK, {
                    tabIndex: -1,
                    value: e,
                    editable: !1,
                    "aria-hidden": !0
                })
            })
        })
    }
})