/** chunk id: 422258, original params: t,e,n (module,exports,require) **/
n.d(e, {
    JD: () => S,
    Jz: () => b,
    S_: () => g,
    fv: () => T,
    i_: () => O,
    od: () => I,
    tV: () => U,
    w6: () => R,
    zE: () => N,
    zN: () => y
});
var i = n(735438),
    a = n.n(i),
    l = n(873298),
    r = n(406935),
    o = n(157559),
    u = n(594061),
    d = n(734057),
    s = n(576705),
    c = n(661191),
    f = n(181079),
    v = n(349828),
    A = n(818348),
    p = n(985018);

function _(t) {
    let e = 0;
    for (let n in t) {
        let i = t[n];
        null != i && null != i.position && (e = Math.max(e, i.position))
    }
    return e + 1
}

function C(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue
        }
        if (n.type === l.Ip.CATEGORY) continue;
        let i = d.A.getChannel(e);
        if (null == i || !i.isPrivate() && !s.A.can(A.xB.VIEW_CHANNEL, i)) {
            delete t[e];
            continue
        }
    }
}

function h(t, e) {
    let n = t[e];
    if (null == n || n.parentId === v.O8) return;
    let i = null != n.parentId ? t[n.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (n.parentId = v.O8)
}

function m(t) {
    return C(t), a().size(t) >= v.lj
}

function E() {
    o.A.show({
        title: p.intl.string(p.t["+XYXtZ"]),
        body: p.intl.formatToPlainString(p.t.JaIyFi, {
            count: v.lj
        })
    })
}

function b(t, e) {
    g([t], e)
}

function g(t, e) {
    let n = t.filter(t => !f.A.isFavorite(t));
    0 !== n.length && u.wc.updateAsync("favorites", t => {
        let i = !1;
        for (let a of n) {
            if (m(t.favoriteChannels)) {
                if (E(), !i) return !1;
                break
            }
            t.favoriteChannels[a] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: _(t.favoriteChannels),
                parentId: e ?? v.O8
            }), C(t.favoriteChannels), h(t.favoriteChannels, a), i = !0
        }
    }, u.Sb.FREQUENT_USER_ACTION)
}

function O(t) {
    let e = f.A.getFavorite(t);
    null != e && u.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[t], e.type === l.Ip.CATEGORY)
            for (let e in n.favoriteChannels) n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = v.O8);
        C(n.favoriteChannels)
    }, u.Sb.INFREQUENT_USER_ACTION)
}

function R(t, e) {
    f.A.isFavorite(t) && u.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].nickname = e ?? ""
    }, u.Sb.INFREQUENT_USER_ACTION)
}

function I(t) {
    let e = c.default.fromTimestamp(Date.now());
    u.wc.updateAsync("favorites", n => {
        if (m(n.favoriteChannels)) return E(), !1;
        n.favoriteChannels[e] = l.wL.create({
            nickname: t,
            type: l.Ip.CATEGORY,
            position: _(n.favoriteChannels),
            parentId: v.O8
        })
    }, u.Sb.FREQUENT_USER_ACTION)
}

function T(t) {
    O(t)
}

function y(t) {
    u.wc.updateAsync("favorites", e => {
        for (let n of t) {
            let t = n.id;
            null != n.position && (e.favoriteChannels[t].position = n.position), void 0 !== n.parent_id && (e.favoriteChannels[t].parentId = n.parent_id ?? v.O8, h(e.favoriteChannels, t))
        }
    }, u.Sb.FREQUENT_USER_ACTION)
}

function S(t, e) {
    u.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].parentId = e ?? v.O8, h(n.favoriteChannels, t)
    }, u.Sb.FREQUENT_USER_ACTION)
}

function N() {
    u.wc.updateAsync("favorites", t => {
        t.muted = !t.muted
    }, u.Sb.INFREQUENT_USER_ACTION)
}

function U(t) {
    u.wc.updateAsync("favorites", e => {
        e.guildVisible = r._t.create({
            value: t
        })
    }, u.Sb.INFREQUENT_USER_ACTION)
}