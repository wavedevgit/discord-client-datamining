/** chunk id: 64588 params = (module,exports,require) **/
n.d(e, {
    U: () => l
});
var r = n(64700),
    a = n(954571),
    o = n(501957),
    i = n(473702),
    s = n(652215);
let l = (t, e, n) => {
    let [l, _] = r.useState(t), [u, c] = r.useState(Date.now()), [d] = r.useState(Date.now()), C = r.useCallback(t => {
        a.default.track(s.HAw.CANCELLATION_FLOW_STEP, {
            from_step: i.T[l],
            to_step: i.T[t],
            step_duration_ms: Date.now() - u,
            flow_duration_ms: Date.now() - d,
            location_stack: n,
            ...(0, o.j)(e)
        }), _(t), c(Date.now())
    }, [n, d, u, l, e]);
    return [l, C, u, d]
}