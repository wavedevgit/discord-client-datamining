/** chunk id: 155052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(555528),
    o = n(531685),
    d = n(365971),
    u = n(243612),
    c = n(582240),
    h = n(295102),
    g = n(545807),
    m = n(644434);

function p(e) {
    return e.widget.id
}

function A(e, t, n, s) {
    return n === r.wLy.YEETED ? null : (0, i.jsx)(c.A, {
        ...t,
        transitionState: n,
        cleanUp: s
    }, e)
}
let x = [],
    E = s.memo(function(e) {
        let {
            className: t
        } = e, n = (0, g.A)(), c = (0, l.bG)([o.A], () => o.A.windowSize((0, d.Q2)(n))), E = (0, l.bG)([a.A], () => {
            let e = a.A.getLayout(m.G);
            if (null == e) return x;
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
        }, [], u.VC), f = s.useCallback(e => (0, i.jsx)("div", {
            className: t,
            style: c,
            children: e
        }), [t, c]);
        return (0, i.jsx)(r.Fai, {
            items: E,
            renderItem: A,
            getItemKey: p,
            wrapChildren: f
        })
    })