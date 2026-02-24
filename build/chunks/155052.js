/** chunk id: 155052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(555528),
    o = n(531685),
    u = n(365971),
    d = n(243612),
    c = n(582240),
    h = n(295102),
    m = n(545807),
    g = n(644434);

function p(e) {
    return e.widget.id
}

function A(e, t, n, l) {
    return n === s.wLy.YEETED ? null : (0, i.jsx)(c.A, {
        ...t,
        transitionState: n,
        cleanUp: l
    }, e)
}
let f = [],
    x = l.memo(function(e) {
        let {
            className: t
        } = e, n = (0, m.A)(), c = (0, r.bG)([o.A], () => o.A.windowSize((0, u.Q2)(n))), x = (0, r.bG)([a.A], () => {
            let e = a.A.getLayout(g.G);
            if (null == e) return f;
            let t = [];
            for (let n of e.widgets) {
                let e = a.A.getWidget(n);
                if (null == e) continue;
                let i = h.A[e.type];
                null != i && (null == i.predicate || i.predicate()) && t.push({
                    widget: e,
                    ...i
                })
            }
            return t
        }, [], d.VC), E = l.useCallback(e => (0, i.jsx)("div", {
            className: t,
            style: c,
            children: e
        }), [t, c]);
        return (0, i.jsx)(s.Fai, {
            items: x,
            renderItem: A,
            getItemKey: p,
            wrapChildren: E
        })
    })