/** chunk id: 452075 params = (module,exports,require) **/
n.d(t, {
    e: () => g
}), n(321073);
var r = n(64700),
    i = n(311907),
    l = n(532624),
    a = n(531685),
    o = n(350535),
    d = n(365971),
    s = n(395011),
    u = n(222506),
    c = n(545807);
let A = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);

function h(e) {
    let {
        keyCode: t,
        shiftKey: n,
        metaKey: r,
        altKey: i,
        ctrlKey: l
    } = e;
    return {
        keyCode: t,
        shiftKey: n,
        metaKey: r,
        altKey: i,
        ctrlKey: l
    }
}

function f(e, t) {
    return e.keyCode === t.keyCode && e.shiftKey === t.shiftKey && e.metaKey === t.metaKey && e.altKey === t.altKey && e.ctrlKey === t.ctrlKey
}

function g() {
    let e = (0, c.A)(),
        t = (0, i.bG)([s.A], () => s.A.getTargetPID(), []),
        n = (0, i.bG)([l.Ay], () => {
            let e = l.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : []
        }, []),
        g = (0, i.bG)([u.A], () => u.A.isInputLocked(t), [t]),
        m = (0, i.bG)([a.A], () => {
            let t = (0, d.Q2)(e);
            return a.A.isVisible(t) && a.A.isFocused(t)
        }, [e]),
        y = r.useRef([]),
        p = r.useMemo(() => (0, o.pi)(n).map(e => h(e)), [n]),
        v = r.useMemo(() => n.length > 0, [n]),
        _ = !g && v && m;
    r.useEffect(() => {
        y.current = []
    }, [g, p]), r.useEffect(() => {
        if (!_) {
            y.current = [];
            return
        }
        let t = e => {
                let t = h(e),
                    n = y.current,
                    r = n.some(e => f(e, t)),
                    i = function(e) {
                        let t = e.key.toLowerCase();
                        for (let e of A)
                            if (t.includes(e)) return !0;
                        return !1
                    }(e);
                r || i || n.push(t), 0 !== p.length && n.length === p.length && p.every(e => n.some(t => f(e, t))) && (e.preventDefault(), e.stopPropagation())
            },
            n = e => {
                let t = h(e),
                    n = y.current,
                    r = n.findIndex(e => f(e, t));
                r > -1 && n.splice(r, 1)
            };
        return e.addEventListener("keydown", t, !0), e.addEventListener("keyup", n, !0), () => {
            e.removeEventListener("keydown", t, !0), e.removeEventListener("keyup", n, !0)
        }
    }, [_, p, e])
}