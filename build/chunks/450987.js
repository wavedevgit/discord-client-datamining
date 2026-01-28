/** Chunk was on 28979 **/
/** chunk id: 450987, original params: t,e,i (module,exports,require) **/
i.d(e, {
    y: () => d
});
var n = i(627968),
    l = i(64700),
    s = i(732955),
    r = i(890138),
    u = i(602450),
    a = i(557571),
    o = i(652215),
    T = i(985018);
let d = t => {
    let {
        onClick: e
    } = t, i = (0, a.lV)(t => t.setDoInstall), d = (0, a.lV)(t => t.setInstallationStatus), A = (0, a.lV)(t => t.installationStatus), S = (0, l.useCallback)(() => {
        null == e || e(), (0, r.u)(o.HAw.NITRO_WARP_CTA_CLICKED, {
            is_enable_warp: !1
        }), A === u.Lk.ERROR && d(u.Lk.NOT_INSTALLED), i(!0)
    }, [i, A, d, e]);
    return (0, n.jsx)(s.$nd, {
        variant: "primary",
        onClick: S,
        text: T.intl.string(T.t["1WjMbC"])
    })
}