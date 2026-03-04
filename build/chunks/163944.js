/** chunk id: 163944, original params: t,e,i (module,exports,require) **/
i.d(e, {
    S: () => T
}), i(321073);
var n = i(64700),
    l = i(311907),
    s = i(526162),
    a = i(419954),
    r = i(933297),
    u = i(780964),
    o = i(961154),
    d = i(685896),
    A = i(985018);
let T = (0, a.zZ)(u.X.DISPLAY_IN_APP_ICON_CATEGORY, {
    useTitle: () => A.intl.string(A.t.RPh2ou),
    useSubtitle: () => A.intl.string(A.t.IgENJo),
    useHeaderDecoration: function() {
        let t = (0, l.bG)([s.A], () => s.A.isUpsellPreview);
        return n.useMemo(() => {
            let e = [];
            return e.push({
                id: "preview-icon-button",
                type: r.UV.BUTTON,
                useText: () => A.intl.string(A.t["6acvnZ"]),
                onClick: o.U6
            }), t && e.push({
                id: "upsell-button",
                type: r.UV.STRONGLY_DISCOURAGED_CUSTOM,
                button: o.kp
            }), {
                type: r.WX.BUTTON_GROUP,
                buttons: e
            }
        }, [t])
    },
    buildLayout: () => [d.C]
})