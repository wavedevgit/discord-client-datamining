/** chunk id: 422258 params = (module,exports,require) **/
t.d(n, {
    JD: () => G,
    Jz: () => C,
    S_: () => g,
    fv: () => O,
    i_: () => T,
    od: () => R,
    tV: () => N,
    w6: () => y,
    zN: () => I
});
var i = t(735438),
    r = t.n(i),
    l = t(873298),
    a = t(406935),
    d = t(157559),
    o = t(594061),
    u = t(734057),
    s = t(576705),
    c = t(661191),
    f = t(181079),
    h = t(349828),
    A = t(818348),
    v = t(985018);

function p(e) {
    let n = 0;
    for (let t in e) {
        let i = e[t];
        null != i && null != i.position && (n = Math.max(n, i.position))
    }
    return n + 1
}

function b(e) {
    for (let n in e) {
        let t = e[n];
        if (null == t) {
            delete e[n];
            continue
        }
        if (t.type === l.Ip.CATEGORY) continue;
        let i = u.A.getChannel(n);
        if (null == i || !i.isPrivate() && !s.A.can(A.xB.VIEW_CHANNEL, i)) {
            delete e[n];
            continue
        }
    }
}

function _(e, n) {
    let t = e[n];
    if (null == t || t.parentId === h.O8) return;
    let i = null != t.parentId ? e[t.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (t.parentId = h.O8)
}

function E(e) {
    return b(e), r().size(e) >= h.lj
}

function m() {
    d.A.show({
        title: v.intl.string(v.t["+XYXtZ"]),
        body: v.intl.formatToPlainString(v.t.JaIyFi, {
            count: h.lj
        })
    })
}

function C(e, n) {
    g([e], n)
}

function g(e, n) {
    let t = e.filter(e => !f.A.isFavorite(e));
    0 !== t.length && o.wc.updateAsync("favorites", e => {
        let i = !1;
        for (let r of t) {
            if (E(e.favoriteChannels)) {
                if (m(), !i) return !1;
                break
            }
            e.favoriteChannels[r] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: p(e.favoriteChannels),
                parentId: n ?? h.O8
            }), b(e.favoriteChannels), _(e.favoriteChannels, r), i = !0
        }
    }, o.Sb.FREQUENT_USER_ACTION)
}

function T(e) {
    let n = f.A.getFavorite(e);
    null != n && o.wc.updateAsync("favorites", t => {
        if (delete t.favoriteChannels[e], n.type === l.Ip.CATEGORY)
            for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = h.O8);
        b(t.favoriteChannels)
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function y(e, n) {
    f.A.isFavorite(e) && o.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].nickname = n ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function R(e) {
    let n = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", t => {
        if (E(t.favoriteChannels)) return m(), !1;
        t.favoriteChannels[n] = l.wL.create({
            nickname: e,
            type: l.Ip.CATEGORY,
            position: p(t.favoriteChannels),
            parentId: h.O8
        })
    }, o.Sb.FREQUENT_USER_ACTION)
}

function O(e) {
    T(e)
}

function I(e) {
    o.wc.updateAsync("favorites", n => {
        for (let t of e) {
            let e = t.id;
            null != t.position && (n.favoriteChannels[e].position = t.position), void 0 !== t.parent_id && (n.favoriteChannels[e].parentId = t.parent_id ?? h.O8, _(n.favoriteChannels, e))
        }
    }, o.Sb.FREQUENT_USER_ACTION)
}

function G(e, n) {
    o.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].parentId = n ?? h.O8, _(t.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION)
}

function N(e) {
    o.wc.updateAsync("favorites", n => {
        n.guildVisible = a._t.create({
            value: e
        })
    }, o.Sb.INFREQUENT_USER_ACTION)
}