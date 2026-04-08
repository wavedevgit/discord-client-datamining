/** chunk id: 155052 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(311907),
    s = n(397927),
    l = n(555528),
    o = n(531685),
    d = n(365971),
    c = n(243612),
    u = n(582240),
    _ = n(295102),
    h = n(545807),
    m = n(644434);

function p(e) {
    return e.widget.id
}

function g(e, t, n, a) {
    return n === s.wLy.YEETED ? null : (0, i.jsx)(u.A, {
        ...t,
        transitionState: n,
        cleanUp: a
    }, e)
}
let f = [],
    A = a.memo(function(e) {
        let {
            className: t
        } = e, n = (0, h.A)(), u = (0, r.bG)([o.A], () => o.A.windowSize((0, d.Q2)(n))), A = (0, r.bG)([l.A], () => {
            let e = l.A.getLayout(m.G);
            if (null == e) return f;
            let t = [];
            for (let n of e.widgets) {
                let e = l.A.getWidget(n);
                if (null == e) continue;
                let i = _.A[e.type];
                null != i && (null == i.predicate || i.predicate()) && t.push({
                    widget: e,
                    ...i
                })
            }
            return t
        }, [], c.VC), x = a.useCallback(e => (0, i.jsx)("div", {
            className: t,
            style: u,
            children: e
        }), [t, u]);
        return (0, i.jsx)(s.Fai, {
            items: A,
            renderItem: g,
            getItemKey: p,
            wrapChildren: x
        })
    })