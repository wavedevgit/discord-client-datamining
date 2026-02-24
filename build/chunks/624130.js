/** chunk id: 624130, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
});
var s = r(64700),
    i = r(66455),
    n = r(311907),
    l = r(997630),
    a = r(571044);

function o(e, t) {
    let {
        lastPickerAction: r,
        lastPickerError: o
    } = (0, n.bG)([a.Ay], () => a.Ay.getPickerState()), [c, d] = s.useState(!1), u = (0, i.A)(e), f = (0, i.A)(t);
    return (0, a.XA)(), s.useEffect(() => {
        c ? r === a.JA.Update ? u.current() : r === a.JA.Cancel && ((0, l.E)(), f.current()) : (null == r || r === a.JA.Present) && d(!0)
    }, [c, r, u, f]), {
        lastPickerAction: r,
        lastPickerError: o
    }
}