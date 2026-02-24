/** chunk id: 452075, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => p
}), n(321073);
var i = n(64700),
    l = n(311907),
    r = n(532624),
    s = n(531685),
    a = n(350535),
    o = n(365971),
    u = n(395011),
    d = n(222506),
    c = n(545807);
let h = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);

function m(e) {
    let {
        keyCode: t,
        shiftKey: n,
        metaKey: i,
        altKey: l,
        ctrlKey: r
    } = e;
    return {
        keyCode: t,
        shiftKey: n,
        metaKey: i,
        altKey: l,
        ctrlKey: r
    }
}

function g(e, t) {
    return e.keyCode === t.keyCode && e.shiftKey === t.shiftKey && e.metaKey === t.metaKey && e.altKey === t.altKey && e.ctrlKey === t.ctrlKey
}

function p() {
    let e = (0, c.A)(),
        t = (0, l.bG)([u.A], () => u.A.getTargetPID(), []),
        n = (0, l.bG)([r.Ay], () => {
            let e = r.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : []
        }, []),
        p = (0, l.bG)([d.A], () => d.A.isInputLocked(t), [t]),
        A = (0, l.bG)([s.A], () => {
            let t = (0, o.Q2)(e);
            return s.A.isVisible(t) && s.A.isFocused(t)
        }, [e]),
        f = i.useRef([]),
        x = i.useMemo(() => (0, a.pi)(n).map(e => m(e)), [n]),
        E = i.useMemo(() => n.length > 0, [n]),
        S = !p && E && A;
    i.useEffect(() => {
        f.current = []
    }, [p, x]), i.useEffect(() => {
        if (!S) {
            f.current = [];
            return
        }
        let t = e => {
                let t = m(e),
                    n = f.current,
                    i = n.some(e => g(e, t)),
                    l = function(e) {
                        let t = e.key.toLowerCase();
                        for (let e of h)
                            if (t.includes(e)) return !0;
                        return !1
                    }(e);
                i || l || n.push(t), 0 !== x.length && n.length === x.length && x.every(e => n.some(t => g(e, t))) && (e.preventDefault(), e.stopPropagation())
            },
            n = e => {
                let t = m(e),
                    n = f.current,
                    i = n.findIndex(e => g(e, t));
                i > -1 && n.splice(i, 1)
            };
        return e.addEventListener("keydown", t, !0), e.addEventListener("keyup", n, !0), () => {
            e.removeEventListener("keydown", t, !0), e.removeEventListener("keyup", n, !0)
        }
    }, [S, x, e])
}