/** Chunk was on 28979 **/
/** chunk id: 544727, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $: () => A
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(77729),
    u = i(274372),
    a = i(399925),
    o = i(419954),
    T = i(780964),
    d = i(985018);
let A = (0, o.E2)(T.X.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [d.intl.string(d.t.s4773E), d.intl.string(d.t.svjwGh)],
    Component: () => {
        let t = (0, l.bG)([u.A], () => u.A.getSettings().storageLocation),
            e = async () => {
                let t = await r.A.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"]
                });
                t.length > 0 && a.HU(t[0])
            };
        return (0, n.jsx)(s.D0$, {
            label: d.intl.string(d.t.s4773E),
            description: d.intl.string(d.t.svjwGh),
            layout: "horizontal",
            children: (0, n.jsx)(s.DUT, {
                "aria-label": d.intl.formatToPlainString(d.t.iMONTj, {
                    storageLocation: t
                }),
                onClick: e,
                children: (0, n.jsx)(s.ksK, {
                    tabIndex: -1,
                    value: t,
                    editable: !1,
                    "aria-hidden": !0
                })
            })
        })
    }
})