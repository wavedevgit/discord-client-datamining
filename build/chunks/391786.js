/** chunk id: 391786 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(508675),
    a = n(7584),
    r = n(846218);

function o(e) {
    let t = (0, s.bG)([l.Ay], () => l.Ay.getGuilds()),
        n = i.useRef([]);
    return i.useEffect(() => {
        a.Ay.forEach(e => n.current.push(e))
    }, []), i.useMemo(() => [...Object.values(t).map(t => t.emojis.filter(t => (0, r.n)(t, e))).flat(), ...n.current], [t, e])
}