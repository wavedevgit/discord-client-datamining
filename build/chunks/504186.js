/** chunk id: 504186 params = (module,exports,require) **/
n.d(t, {
    A: () => r
}), n(321073);
var a = n(64700),
    i = n(808380);
let l = [i.Y.DESKTOP, i.Y.XBOX, i.Y.PLAYSTATION, i.Y.NINTENDO];

function r(e) {
    return a.useMemo(() => {
        let t = new Set(e.platforms),
            n = [...t];
        return !t.has(i.Y.DESKTOP) && (t.has(i.Y.MACOS) || t.has(i.Y.LINUX)) && n.push(i.Y.DESKTOP), n.filter(e => l.includes(e)).sort((e, t) => l.indexOf(e) - l.indexOf(t))
    }, [e.platforms])
}