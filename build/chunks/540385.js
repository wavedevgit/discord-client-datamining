/** chunk id: 540385, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => d,
    bW: () => u
}), n(65821), n(321073), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(114212),
    o = n(652215),
    c = n(525853);

function u(e) {
    let {
        compact: t,
        messageGroups: n,
        groupRange: l,
        attachments: r,
        fontSize: i,
        groupSpacing: c
    } = e;
    if (r > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(r));
    let u = i / o.hH7.FONT_SIZE_DEFAULT,
        d = t ? s.BP : s.B5,
        h = t ? s.Uj : s._G,
        p = 0,
        f = Array(n).fill(null).map(() => {
            let e = a().random(1, l);
            return p += c * u, p += d * u, p += (e - 1) * h * u, e
        }),
        m = f.map((e, t) => t),
        g = [];
    for (; g.length < r;) {
        let e = {
            width: a().random(140, 400),
            height: a().random(100, 320)
        };
        g.push([m.splice(a().random(0, m.length - 1), 1)[0], e]), p += e.height + s.VF * u
    }
    return {
        messages: f,
        attachmentSpecs: g,
        totalHeight: p,
        groupSpacing: c
    }
}

function d(e) {
    let {
        compact: t,
        messages: n,
        attachmentSpecs: i,
        totalHeight: a,
        groupSpacing: o
    } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of i) e[t] = n;
        return (0, l.jsx)("div", {
            className: c.i,
            style: {
                height: a
            },
            children: n.map((n, r) => (0, l.jsx)(s.Ay, {
                groupSpacing: o,
                compact: t,
                messages: n,
                attachmentSpecs: e[r]
            }, r))
        })
    }, [t, n, i, a, o])
}