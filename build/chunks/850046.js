/** chunk id: 850046, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E,
    M: () => g
}), n(446912);
var r = n(64700),
    i = n(205338),
    a = n(87075),
    o = n(429913),
    s = n(201718),
    l = n(207803),
    c = n(403362),
    u = n(789069),
    d = n(385771);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e, t, n) {
    var r, i;
    let a = null == (i = e.data) || null == (r = i.dynamic) ? void 0 : r.find(e => e.name === t);
    return null == a || a.type !== n ? null : a.value
}
let h = {
    [i.A.MARVEL_RIVALS]: e => {
        var t, n, r, i, a, o, s, l;
        let c = null == (n = e.data) || null == (t = n.primary) ? void 0 : t.season,
            d = null == (i = e.data) || null == (r = i.primary) ? void 0 : r.rank_name,
            f = (0, u.a)(null == (o = e.data) || null == (a = o.primary) ? void 0 : a.rank_image),
            p = (0, u.a)(null == (l = e.data) || null == (s = l.primary) ? void 0 : s.featured_played_character_image);
        return null == c || null == d || null == p ? null : {
            previewText: "".concat(c, ": ").concat(d),
            previewTextShort: d,
            previewIcon: f,
            previewImage: p
        }
    },
    [i.A.WUTHERING_WAVES]: (e, t) => {
        var n, r;
        let i = e.username,
            o = _(e, "union_level", a.f.NUMBER),
            s = (0, u.a)(null == (r = e.data) || null == (n = r.primary) ? void 0 : n.featured_played_character_image);
        return null == i || null == o || null == s ? null : {
            previewText: "".concat(i, ": Level ").concat(t.format(o)),
            previewTextShort: "Level ".concat(t.format(o)),
            previewIcon: null,
            previewImage: s
        }
    }
};

function m(e, t, n, r) {
    let i = t.getIconURL(16);
    if (null == i) return null;
    let a = h[e.widgetTemplateId](n, r);
    return null == a ? null : p({
        application: {
            id: t.id,
            name: t.name,
            icon: i
        }
    }, a)
}

function g(e, t, n, r) {
    return m(e, t, n, r)
}

function E(e, t) {
    let n = (0, o.A)(t),
        {
            data: i
        } = (0, l.FY)(),
        {
            data: a
        } = (0, s.P)(e),
        u = (0, d.A)();
    return r.useMemo(() => Object.fromEntries(t.map(e => {
        var t;
        let r = null == i ? void 0 : i.find(t => t.applicationId === e),
            o = n.find(t => (null == t ? void 0 : t.id) === e),
            s = null == a || null == (t = a.find(t => t.application_id === e)) ? void 0 : t.profile;
        if (null == r || null == o || null == s) return null;
        let l = m(r, o, s, u);
        return null == l ? null : [e, l]
    }).filter(c.Vq)), [n, i, a, u, t])
}