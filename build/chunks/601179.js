/** chunk id: 601179, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => i
}), r(321073);
var n = r(64700),
    s = r(85109),
    l = r(470654);

function a() {
    return s.A.getSavedMessages().map(e => e.saveData)
}

function i() {
    let [e, t] = n.useState(a), r = n.useRef(s.A.getIsStale());
    return n.useEffect(() => {
        let e = s.A.getLastChanged();

        function n() {
            let n = s.A.getLastChanged();
            if (e !== n) {
                if (e = n, r.current && !s.A.getIsStale()) {
                    r.current = !1, t(a());
                    return
                }
                t(e => {
                    let t = [...e],
                        r = new Map(s.A.getSavedMessages().map(e => [e.saveData.messageId, e]));
                    for (let n of e) r.has(n.messageId) ? r.delete(n.messageId) : t.splice(t.indexOf(n), 1);
                    for (let e of r.values()) t.push(e.saveData);
                    return t
                })
            }
        }
        return s.A.addChangeListener(n), () => {
            s.A.removeChangeListener(n)
        }
    }, []), (0, l.A)(), e
}