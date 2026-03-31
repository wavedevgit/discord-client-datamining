/** chunk id: 601179 params = (module,exports,require) **/
n.d(t, {
    A: () => r
}), n(321073);
var i = n(64700),
    l = n(85109),
    s = n(470654);

function a() {
    return l.A.getSavedMessages().map(e => e.saveData)
}

function r() {
    let [e, t] = i.useState(a), n = i.useRef(l.A.getIsStale());
    return i.useEffect(() => {
        let e = l.A.getLastChanged();

        function i() {
            let i = l.A.getLastChanged();
            if (e !== i) {
                if (e = i, n.current && !l.A.getIsStale()) {
                    n.current = !1, t(a());
                    return
                }
                t(e => {
                    let t = [...e],
                        n = new Map(l.A.getSavedMessages().map(e => [e.saveData.messageId, e]));
                    for (let i of e) n.has(i.messageId) ? n.delete(i.messageId) : t.splice(t.indexOf(i), 1);
                    for (let e of n.values()) t.push(e.saveData);
                    return t
                })
            }
        }
        return l.A.addChangeListener(i), () => {
            l.A.removeChangeListener(i)
        }
    }, []), (0, s.A)(), e
}