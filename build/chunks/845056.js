/** chunk id: 845056, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => u
});
var r = n(311907),
    l = n(961350),
    i = n(290863),
    a = n(461213),
    s = n(765379),
    o = n(652215);
let c = e => [o.$pd.PLAYING, o.$pd.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) || e.type === o.$pd.LISTENING;

function u(e, t) {
    return (0, r.bG)([a.A, i.A, l.default], () => (e.id === l.default.getId() ? a.A.getActivities() : i.A.getActivities(e.id)).filter(c).filter(e => !(0, s.A)(e) && (null == t || null == e.application_id || null == t.application_id || e.application_id !== t.application_id)), [e.id, t], r.My)
}