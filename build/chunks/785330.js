/** chunk id: 785330 params = (module,exports,require) **/
r.d(t, {
    Ay: () => g,
    F2: () => u,
    Qs: () => A,
    Z_: () => v
});
var l = r(627968),
    n = r(64700),
    a = r(835245),
    s = r(204990),
    c = r(604238),
    i = r(856535),
    d = r(55391);

function o(e, t) {
    return e.children.map(e => (function e(t, r) {
        if ("string" == typeof t) return t;
        let {
            block: n,
            ...c
        } = t, i = r[n];
        if (null == i) return null;
        let d = (() => {
                if ("children" in t) {
                    if (!Array.isArray(t.children) && null != t.children) return e(t.children, r);
                    if (null != t.children && t.children.length > 0) return t.children.map(t => e(t, r))
                }
                return null
            })(),
            o = s.E.has(n) ? {
                ...c,
                componentMap: r
            } : c;
        return (0, l.jsx)(i, {
            ...o,
            children: d
        }, (0, a.A)())
    })(e, t))
}

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.E;
    try {
        return o(e, t), !0
    } catch (e) {
        return !1
    }
}
class m extends n.Component {
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
let h = e => {
        let {
            layout: t,
            Components: r
        } = e;
        return n.useMemo(() => o(t, r), [t, r])
    },
    p = e => {
        let {
            layout: t,
            overrides: r,
            onError: a,
            onEmptyLayout: s
        } = e, i = (0, c.e)({
            overrides: r
        });
        return n.useEffect(() => {
            0 === t.children.length && s?.()
        }, [t, s]), (0, l.jsx)(m, {
            onError: a,
            children: (0, l.jsx)(h, {
                layout: t,
                Components: i
            })
        })
    },
    A = e => {
        let {
            layoutId: t,
            tenantId: r,
            overrides: a,
            onError: s,
            onEmptyLayout: c
        } = e, {
            layout: d,
            error: o
        } = (0, i.A)(r, t);
        return (n.useEffect(() => {
            null != o && s?.()
        }, [o, s]), null == d) ? null : (0, l.jsx)(p, {
            layout: d,
            overrides: a,
            onError: s,
            onEmptyLayout: c
        })
    },
    v = e => {
        let {
            templateId: t,
            tenantId: r,
            overrides: a,
            onError: s,
            onEmptyLayout: c,
            requestParams: i
        } = e, {
            layout: o,
            error: u
        } = (0, d.A)(r, t, i);
        return (n.useEffect(() => {
            null != u && s?.()
        }, [u, s]), null == o) ? null : (0, l.jsx)(p, {
            layout: o,
            overrides: a,
            onError: s,
            onEmptyLayout: c
        })
    },
    g = p