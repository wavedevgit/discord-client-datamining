/** chunk id: 422258 params = (module,exports,require) **/
n.d(t, {
    JD: () => S,
    Jz: () => g,
    S_: () => b,
    fv: () => T,
    i_: () => O,
    od: () => I,
    tV: () => G,
    w6: () => R,
    zN: () => y
});
var i = n(735438),
    a = n.n(i),
    r = n(873298),
    l = n(406935),
    o = n(157559),
    d = n(594061),
    u = n(734057),
    s = n(576705),
    f = n(661191),
    c = n(181079),
    v = n(349828),
    A = n(818348),
    p = n(985018);

function C(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position))
    }
    return t + 1
}

function h(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue
        }
        if (n.type === r.Ip.CATEGORY) continue;
        let i = u.A.getChannel(t);
        if (null == i || !i.isPrivate() && !s.A.can(A.xB.VIEW_CHANNEL, i)) {
            delete e[t];
            continue
        }
    }
}

function _(e, t) {
    let n = e[t];
    if (null == n || n.parentId === v.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== r.Ip.CATEGORY) && (n.parentId = v.O8)
}

function E(e) {
    return h(e), a().size(e) >= v.lj
}

function m() {
    o.A.show({
        title: p.intl.string(p.t["+XYXtZ"]),
        body: p.intl.formatToPlainString(p.t.JaIyFi, {
            count: v.lj
        })
    })
}

function g(e, t) {
    b([e], t)
}

function b(e, t) {
    let n = e.filter(e => !c.A.isFavorite(e));
    0 !== n.length && d.wc.updateAsync("favorites", e => {
        let i = !1;
        for (let a of n) {
            if (E(e.favoriteChannels)) {
                if (m(), !i) return !1;
                break
            }
            e.favoriteChannels[a] = r.wL.create({
                nickname: "",
                type: r.Ip.REFERENCE_ORIGINAL,
                position: C(e.favoriteChannels),
                parentId: t ?? v.O8
            }), h(e.favoriteChannels), _(e.favoriteChannels, a), i = !0
        }
    }, d.Sb.FREQUENT_USER_ACTION)
}

function O(e) {
    let t = c.A.getFavorite(e);
    null != t && d.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[e], t.type === r.Ip.CATEGORY)
            for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = v.O8);
        h(n.favoriteChannels)
    }, d.Sb.INFREQUENT_USER_ACTION)
}

function R(e, t) {
    c.A.isFavorite(e) && d.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].nickname = t ?? ""
    }, d.Sb.INFREQUENT_USER_ACTION)
}

function I(e) {
    let t = f.default.fromTimestamp(Date.now());
    d.wc.updateAsync("favorites", n => {
        if (E(n.favoriteChannels)) return m(), !1;
        n.favoriteChannels[t] = r.wL.create({
            nickname: e,
            type: r.Ip.CATEGORY,
            position: C(n.favoriteChannels),
            parentId: v.O8
        })
    }, d.Sb.FREQUENT_USER_ACTION)
}

function T(e) {
    O(e)
}

function y(e) {
    d.wc.updateAsync("favorites", t => {
        for (let n of e) {
            let e = n.id;
            null != n.position && (t.favoriteChannels[e].position = n.position), void 0 !== n.parent_id && (t.favoriteChannels[e].parentId = n.parent_id ?? v.O8, _(t.favoriteChannels, e))
        }
    }, d.Sb.FREQUENT_USER_ACTION)
}

function S(e, t) {
    d.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].parentId = t ?? v.O8, _(n.favoriteChannels, e)
    }, d.Sb.FREQUENT_USER_ACTION)
}

function G(e) {
    d.wc.updateAsync("favorites", t => {
        t.guildVisible = l._t.create({
            value: e
        })
    }, d.Sb.INFREQUENT_USER_ACTION)
}