/** chunk id: 422258, original params: e,n,t (module,exports,require) **/
t.d(n, {
    JD: () => N,
    Jz: () => E,
    S_: () => b,
    fv: () => x,
    i_: () => O,
    od: () => I,
    tV: () => R,
    w6: () => T,
    zN: () => y
});
var i = t(735438),
    l = t.n(i),
    r = t(873298),
    a = t(406935),
    s = t(157559),
    d = t(594061),
    o = t(734057),
    u = t(576705),
    c = t(661191),
    A = t(181079),
    f = t(349828),
    h = t(818348),
    v = t(985018);

function C(e) {
    let n = 0;
    for (let t in e) {
        let i = e[t];
        null != i && null != i.position && (n = Math.max(n, i.position))
    }
    return n + 1
}

function g(e) {
    for (let n in e) {
        let t = e[n];
        if (null == t) {
            delete e[n];
            continue
        }
        if (t.type === r.Ip.CATEGORY) continue;
        let i = o.A.getChannel(n);
        if (null == i || !i.isPrivate() && !u.A.can(h.xB.VIEW_CHANNEL, i)) {
            delete e[n];
            continue
        }
    }
}

function p(e, n) {
    let t = e[n];
    if (null == t || t.parentId === f.O8) return;
    let i = null != t.parentId ? e[t.parentId] : null;
    (null == i || i.type !== r.Ip.CATEGORY) && (t.parentId = f.O8)
}

function m(e) {
    return g(e), l().size(e) >= f.lj
}

function _() {
    s.A.show({
        title: v.intl.string(v.t["+XYXtZ"]),
        body: v.intl.formatToPlainString(v.t.JaIyFi, {
            count: f.lj
        })
    })
}

function E(e, n) {
    b([e], n)
}

function b(e, n) {
    let t = e.filter(e => !A.A.isFavorite(e));
    0 !== t.length && d.wc.updateAsync("favorites", e => {
        let i = !1;
        for (let l of t) {
            if (m(e.favoriteChannels)) {
                if (_(), !i) return !1;
                break
            }
            e.favoriteChannels[l] = r.wL.create({
                nickname: "",
                type: r.Ip.REFERENCE_ORIGINAL,
                position: C(e.favoriteChannels),
                parentId: n ?? f.O8
            }), g(e.favoriteChannels), p(e.favoriteChannels, l), i = !0
        }
    }, d.Sb.FREQUENT_USER_ACTION)
}

function O(e) {
    let n = A.A.getFavorite(e);
    null != n && d.wc.updateAsync("favorites", t => {
        if (delete t.favoriteChannels[e], n.type === r.Ip.CATEGORY)
            for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = f.O8);
        g(t.favoriteChannels)
    }, d.Sb.INFREQUENT_USER_ACTION)
}

function T(e, n) {
    A.A.isFavorite(e) && d.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].nickname = n ?? ""
    }, d.Sb.INFREQUENT_USER_ACTION)
}

function I(e) {
    let n = c.default.fromTimestamp(Date.now());
    d.wc.updateAsync("favorites", t => {
        if (m(t.favoriteChannels)) return _(), !1;
        t.favoriteChannels[n] = r.wL.create({
            nickname: e,
            type: r.Ip.CATEGORY,
            position: C(t.favoriteChannels),
            parentId: f.O8
        })
    }, d.Sb.FREQUENT_USER_ACTION)
}

function x(e) {
    O(e)
}

function y(e) {
    d.wc.updateAsync("favorites", n => {
        for (let t of e) {
            let e = t.id;
            null != t.position && (n.favoriteChannels[e].position = t.position), void 0 !== t.parent_id && (n.favoriteChannels[e].parentId = t.parent_id ?? f.O8, p(n.favoriteChannels, e))
        }
    }, d.Sb.FREQUENT_USER_ACTION)
}

function N(e, n) {
    d.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].parentId = n ?? f.O8, p(t.favoriteChannels, e)
    }, d.Sb.FREQUENT_USER_ACTION)
}

function R(e) {
    d.wc.updateAsync("favorites", n => {
        n.guildVisible = a._t.create({
            value: e
        })
    }, d.Sb.INFREQUENT_USER_ACTION)
}