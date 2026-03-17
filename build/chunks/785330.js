/** chunk id: 785330 params = (module,exports,require) **/
l.d(t, {
    Ay: () => g,
    F2: () => u,
    Qs: () => _,
    Z_: () => T
});
var r = l(627968),
    n = l(64700),
    i = l(835245),
    o = l(204990),
    a = l(604238),
    s = l(856535),
    d = l(55391);

function c(e, t) {
    return e.children.map(e => (function e(t, l) {
        if ("string" == typeof t) return t;
        let {
            block: n,
            ...a
        } = t, s = l[n];
        if (null == s) return null;
        let d = (() => {
                if ("children" in t) {
                    if (!Array.isArray(t.children) && null != t.children) return e(t.children, l);
                    if (null != t.children && t.children.length > 0) return t.children.map(t => e(t, l))
                }
                return null
            })(),
            c = o.E.has(n) ? {
                ...a,
                componentMap: l
            } : a;
        return (0, r.jsx)(s, {
            ...c,
            children: d
        }, (0, i.A)())
    })(e, t))
}

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.E;
    try {
        return c(e, t), !0
    } catch (e) {
        return !1
    }
}
class h extends n.Component {
    state = {
        hasError: !1
    };
    static getDerivedStateFromError() {
        return {
            hasError: !0
        }
    }
    componentDidCatch() {
        this.props.onError?.()
    }
    render() {
        return this.state.hasError ? null : this.props.children
    }
}
let m = e => {
        let {
            layout: t,
            Components: l
        } = e;
        return n.useMemo(() => c(t, l), [t, l])
    },
    p = e => {
        let {
            layout: t,
            overrides: l,
            onError: i,
            onEmptyLayout: o
        } = e, s = (0, a.e)({
            overrides: l
        });
        return n.useEffect(() => {
            0 === t.children.length && o?.()
        }, [t, o]), (0, r.jsx)(h, {
            onError: i,
            children: (0, r.jsx)(m, {
                layout: t,
                Components: s
            })
        })
    },
    _ = e => {
        let {
            layoutId: t,
            tenantId: l,
            overrides: i,
            onError: o,
            onEmptyLayout: a
        } = e, {
            layout: d,
            error: c
        } = (0, s.A)(l, t);
        return (n.useEffect(() => {
            null != c && o?.()
        }, [c, o]), null == d) ? null : (0, r.jsx)(p, {
            layout: d,
            overrides: i,
            onError: o,
            onEmptyLayout: a
        })
    },
    T = e => {
        let {
            templateId: t,
            tenantId: l,
            overrides: i,
            onError: o,
            onEmptyLayout: a,
            requestParams: s
        } = e, {
            layout: c,
            error: u
        } = (0, d.A)(l, t, s);
        return (n.useEffect(() => {
            null != u && o?.()
        }, [u, o]), null == c) ? null : (0, r.jsx)(p, {
            layout: c,
            overrides: i,
            onError: o,
            onEmptyLayout: a
        })
    },
    g = p