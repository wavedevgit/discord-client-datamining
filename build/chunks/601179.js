/** chunk id: 601179, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => i
}), r(896048), r(321073);
var n = r(64700),
    l = r(85109),
    s = r(470654);

function a() {
    return l.A.getSavedMessages().map(e => e.saveData)
}

function i() {
    let [e, t] = n.useState(a), r = n.useRef(l.A.getIsStale());
    return n.useEffect(() => {
        let e = l.A.getLastChanged();

        function n() {
            let n = l.A.getLastChanged();
            if (e !== n) {
                if (e = n, r.current && !l.A.getIsStale()) {
                    r.current = !1, t(a());
                    return
                }
                t(e => {
                    let t = [...e],
                        r = new Map(l.A.getSavedMessages().map(e => [e.saveData.messageId, e]));
                    for (let n of e) r.has(n.messageId) ? r.delete(n.messageId) : t.splice(t.indexOf(n), 1);
                    for (let e of r.values()) t.push(e.saveData);
                    return t
                })
            }
        }
        return l.A.addChangeListener(n), () => {
            l.A.removeChangeListener(n)
        }
    }, []), (0, s.A)(), e
}