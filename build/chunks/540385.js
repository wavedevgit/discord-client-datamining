/** chunk id: 540385 params = (module,exports,require) **/
n.d(t, {
    Ay: () => u,
    bW: () => d
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(114212),
    o = n(652215),
    c = n(601327);

function d(e) {
    let {
        compact: t,
        messageGroups: n,
        groupRange: i,
        attachments: l,
        fontSize: s,
        groupSpacing: c
    } = e;
    if (l > n) throw Error(`generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${l}`);
    let d = s / o.hH7.FONT_SIZE_DEFAULT,
        u = t ? r.BP : r.B5,
        h = t ? r.Uj : r._G,
        m = 0,
        A = Array(n).fill(null).map(() => {
            let e = a().random(1, i);
            return m += c * d, m += u * d, m += (e - 1) * h * d, e
        }),
        p = A.map((e, t) => t),
        g = [];
    for (; g.length < l;) {
        let e = {
            width: a().random(140, 400),
            height: a().random(100, 320)
        };
        g.push([p.splice(a().random(0, p.length - 1), 1)[0], e]), m += e.height + r.VF * d
    }
    return {
        messages: A,
        attachmentSpecs: g,
        totalHeight: m,
        groupSpacing: c
    }
}

function u(e) {
    let {
        compact: t,
        messages: n,
        attachmentSpecs: s,
        totalHeight: a,
        groupSpacing: o
    } = e;
    return l.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of s) e[t] = n;
        return (0, i.jsx)("div", {
            className: c.i,
            style: {
                height: a
            },
            children: n.map((n, l) => (0, i.jsx)(r.Ay, {
                groupSpacing: o,
                compact: t,
                messages: n,
                attachmentSpecs: e[l]
            }, l))
        })
    }, [t, n, s, a, o])
}