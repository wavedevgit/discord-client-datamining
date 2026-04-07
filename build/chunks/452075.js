/** chunk id: 452075 params = (module,exports,require) **/
n.d(t, {
    e: () => f
}), n(321073);
var i = n(64700),
    a = n(311907),
    r = n(532624),
    l = n(531685),
    s = n(350535),
    o = n(365971),
    d = n(395011),
    c = n(222506),
    u = n(545807);
let _ = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);

function h(e) {
    let {
        keyCode: t,
        shiftKey: n,
        metaKey: i,
        altKey: a,
        ctrlKey: r
    } = e;
    return {
        keyCode: t,
        shiftKey: n,
        metaKey: i,
        altKey: a,
        ctrlKey: r
    }
}

function m(e, t) {
    return e.keyCode === t.keyCode && e.shiftKey === t.shiftKey && e.metaKey === t.metaKey && e.altKey === t.altKey && e.ctrlKey === t.ctrlKey
}

function f() {
    let e = (0, u.A)(),
        t = (0, a.bG)([d.A], () => d.A.getTargetPID(), []),
        n = (0, a.bG)([r.Ay], () => {
            let e = r.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : []
        }, []),
        f = (0, a.bG)([c.A], () => c.A.isInputLocked(t), [t]),
        p = (0, a.bG)([l.A], () => {
            let t = (0, o.Q2)(e);
            return l.A.isVisible(t) && l.A.isFocused(t)
        }, [e]),
        g = i.useRef([]),
        A = i.useMemo(() => (0, s.pi)(n).map(e => h(e)), [n]),
        x = i.useMemo(() => n.length > 0, [n]),
        I = !f && x && p;
    i.useEffect(() => {
        g.current = []
    }, [f, A]), i.useEffect(() => {
        if (!I) {
            g.current = [];
            return
        }
        let t = e => {
                let t = h(e),
                    n = g.current,
                    i = n.some(e => m(e, t)),
                    a = function(e) {
                        let t = e.key.toLowerCase();
                        for (let e of _)
                            if (t.includes(e)) return !0;
                        return !1
                    }(e);
                i || a || n.push(t), 0 !== A.length && n.length === A.length && A.every(e => n.some(t => m(e, t))) && (e.preventDefault(), e.stopPropagation())
            },
            n = e => {
                let t = h(e),
                    n = g.current,
                    i = n.findIndex(e => m(e, t));
                i > -1 && n.splice(i, 1)
            };
        return e.addEventListener("keydown", t, !0), e.addEventListener("keyup", n, !0), () => {
            e.removeEventListener("keydown", t, !0), e.removeEventListener("keyup", n, !0)
        }
    }, [I, A, e])
}