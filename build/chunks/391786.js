/** Chunk was on 78528 **/
/** chunk id: 391786, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(321073), n(864466), n(443073), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(508675),
    s = n(7584),
    a = n(846218);

function o(e) {
    let t = (0, l.bG)([i.Ay], () => i.Ay.getGuilds()),
        n = r.useRef([]);
    return r.useEffect(() => {
        s.Ay.forEach(e => n.current.push(e))
    }, []), r.useMemo(() => [...Object.values(t).map(t => t.emojis.filter(t => (0, a.n)(t, e))).flat(), ...n.current], [t, e])
}