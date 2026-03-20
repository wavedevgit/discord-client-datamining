/** chunk id: 953414 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(58736),
    c = n(231545),
    u = n(260880),
    m = n(303054),
    h = n(231643),
    p = n(930821),
    x = n(998758);

function g(e, t) {
    return e.store.getName().localeCompare(t.store.getName())
}

function _(e) {
    let {
        store: t,
        dataGetter: n
    } = e, [l, s] = i.useState(n(t));
    return i.useEffect(() => {
        let e = () => s(n(t));
        return e(), t.addChangeListener(e), () => {
            t.removeChangeListener(e)
        }
    }, [t, n]), (0, a.jsx)(o.IpV, {
        className: x.Dx,
        children: (0, a.jsx)(c.A, {
            data: l
        })
    })
}
let f = [{
        key: "name",
        cellClassName: x.__invalid_eventColumn,
        render(e) {
            let {
                store: t
            } = e;
            return t.getName()
        }
    }],
    v = [{
        id: "local",
        name: "Local Variables",
        group: h.fu.NONE,
        render(e) {
            let {
                store: t
            } = e;
            return null == t.__getLocalVars ? (0, a.jsxs)("div", {
                className: x.Dx,
                children: ["Store is missing ", (0, a.jsx)("code", {
                    children: "__getLocalVars"
                }), " method."]
            }) : (0, a.jsx)(_, {
                store: t,
                dataGetter: e => e.__getLocalVars()
            })
        }
    }, {
        id: "instance",
        name: "Store Instance",
        group: h.fu.NONE,
        render(e) {
            let {
                store: t
            } = e;
            return (0, a.jsx)(_, {
                store: t,
                dataGetter: e => e
            })
        }
    }];

function b(e) {
    let {
        store: t,
        initialHeight: n
    } = e, {
        TabBar: i,
        renderSelectedTab: l
    } = (0, h.Ay)({
        tabs: v
    }, []);
    return (0, a.jsxs)(u.A, {
        className: x.rf,
        minHeight: 100,
        initialHeight: n,
        children: [(0, a.jsx)(i, {}), (0, a.jsxs)(d.Ay, {
            className: s()(p.jr, x.nZ),
            children: [(0, a.jsx)(d.Ay.Icon, {
                icon: o.gqV,
                tooltip: t.getName()
            }), (0, a.jsx)(d.Ay.Title, {
                children: t.getName()
            })]
        }), l({
            store: t
        })]
    })
}

function j() {
    let e = i.useRef(null),
        [t, n] = i.useState(""),
        l = r.il.getAll(),
        d = i.useMemo(() => l.map(e => ({
            key: e._dispatchToken,
            store: e
        })).sort(g), [l]).filter(e => (function(e, t) {
            let {
                store: n
            } = e;
            return n.getName().toLowerCase().includes(t.toLowerCase())
        })(e, t)),
        [c, u] = i.useState(),
        h = l.find(e => e._dispatchToken === c);
    return (0, a.jsxs)("div", {
        ref: e,
        className: s()(p.nd, x.nd),
        children: [(0, a.jsx)("div", {
            className: x.KE,
            children: (0, a.jsx)(o.IWV, {
                size: "sm",
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: "Search stores",
                "aria-label": "Search stores"
            })
        }), (0, a.jsx)(m.A, {
            columns: f,
            data: d,
            selectedRowKey: c,
            onClickRow: e => u(e.key)
        }), null != h && (0, a.jsx)(b, {
            store: h,
            initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
        })]
    })
}