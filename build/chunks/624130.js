/** chunk id: 624130, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
}), r(896048);
var n = r(64700),
    i = r(66455),
    l = r(311907),
    s = r(997630),
    a = r(571044);

function o(e, t) {
    let {
        lastPickerAction: r,
        lastPickerError: o
    } = (0, l.bG)([a.Ay], () => a.Ay.getPickerState()), [c, d] = n.useState(!1), u = (0, i.A)(e), f = (0, i.A)(t);
    return (0, a.XA)(), n.useEffect(() => {
        c ? r === a.JA.Update ? u.current() : r === a.JA.Cancel && ((0, s.E)(), f.current()) : (null == r || r === a.JA.Present) && d(!0)
    }, [c, r, u, f]), {
        lastPickerAction: r,
        lastPickerError: o
    }
}