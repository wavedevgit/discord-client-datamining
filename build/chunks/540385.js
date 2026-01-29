/** Chunk was on 1113 **/
/** chunk id: 540385, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => d,
    bW: () => u
}), n(65821), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(114212),
    o = n(652215),
    c = n(525853);

function u(e) {
    let {
        compact: t,
        messageGroups: n,
        groupRange: r,
        attachments: l,
        fontSize: i,
        groupSpacing: c
    } = e;
    if (l > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(l));
    let u = i / o.hH7.FONT_SIZE_DEFAULT,
        d = t ? a.BP : a.B5,
        h = t ? a.Uj : a._G,
        p = 0,
        g = Array(n).fill(null).map(() => {
            let e = s().random(1, r);
            return p += c * u, p += d * u, p += (e - 1) * h * u, e
        }),
        f = g.map((e, t) => t),
        m = [];
    for (; m.length < l;) {
        let e = {
            width: s().random(140, 400),
            height: s().random(100, 320)
        };
        m.push([f.splice(s().random(0, f.length - 1), 1)[0], e]), p += e.height + a.VF * u
    }
    return {
        messages: g,
        attachmentSpecs: m,
        totalHeight: p,
        groupSpacing: c
    }
}

function d(e) {
    let {
        compact: t,
        messages: n,
        attachmentSpecs: i,
        totalHeight: s,
        groupSpacing: o
    } = e;
    return l.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of i) e[t] = n;
        return (0, r.jsx)("div", {
            className: c.i,
            style: {
                height: s
            },
            children: n.map((n, l) => (0, r.jsx)(a.Ay, {
                groupSpacing: o,
                compact: t,
                messages: n,
                attachmentSpecs: e[l]
            }, l))
        })
    }, [t, n, i, s, o])
}