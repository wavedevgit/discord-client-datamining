/** chunk id: 754459 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(64700),
    r = n(203982),
    l = n(652215);

function a(e) {
    return Object.keys(e).some(t => e[t])
}

function s(e, t) {
    let [n, s] = i.useState(t), [o, d] = i.useState(a(n)), c = i.useRef(o), u = i.useRef(null), _ = i.useCallback(e => {
        s(t => {
            let n = {
                    ...t,
                    ...e
                },
                i = a(n);
            return i !== c.current && (c.current = i, null != u.current && (cancelAnimationFrame(u.current), u.current = null), i ? d(!0) : u.current = requestAnimationFrame(() => d(!1))), n
        })
    }, []);
    return i.useEffect(() => {
        let t = e => {
            let {
                emojiPicker: t,
                emojiBurstPicker: n
            } = e;
            return _({
                emojiPicker: t,
                emojiBurstPicker: n
            })
        };
        return r._.subscribeKeyed(l.zOV.TOGGLE_REACTION_POPOUT, e, t), () => void r._.unsubscribeKeyed(l.zOV.TOGGLE_REACTION_POPOUT, e, t)
    }, [e, _]), {
        popouts: n,
        setPopout: _,
        selected: o
    }
}