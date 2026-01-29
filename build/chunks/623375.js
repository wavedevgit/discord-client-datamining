/** Chunk was on 4670 **/
/** chunk id: 623375, original params: e,t,i (module,exports,require) **/
i.d(t, {
    u: () => d
}), i(65821), i(457529);
var n = i(64700),
    l = i(156186),
    s = i(602450),
    r = i(557571),
    a = i(954571),
    u = i(728458),
    o = i(652215);
let d = () => {
    let e = (0, r.lV)(e => e.doInstall),
        t = (0, r.lV)(e => e.install),
        i = (0, r.lV)(e => e.installationStatus),
        d = (0, r.lV)(e => e.setDoInstall),
        T = (0, r.lV)(e => e.setInstallationStatus);
    return (0, n.useEffect)(() => {
        e && i === s.Lk.NOT_INSTALLED && (d(!1), T(s.Lk.INSTALLING), t().catch(e => {
            T(s.Lk.ERROR), u.A.captureException(e, {
                tags: {
                    source: l.q.WARP_INSTALL_HELPER
                }
            }), a.default.track(o.HAw.PREMIUM_FEATURE_ERROR, {
                error_message: e instanceof Error ? e.message : JSON.stringify(e),
                error_source: l.q.WARP_INSTALL_HELPER
            })
        }))
    }, [e, d, t, i, T]), null
}