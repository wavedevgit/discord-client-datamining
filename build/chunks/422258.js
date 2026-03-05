/** chunk id: 422258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    JD: () => S,
    Jz: () => b,
    S_: () => E,
    fv: () => T,
    i_: () => O,
    od: () => I,
    tV: () => G,
    w6: () => R,
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
    f = n(661191),
    c = n(181079),
    v = n(349828),
    p = n(818348),
    A = n(985018);

function _(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position))
    }
    return t + 1
}

function C(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue
        }
        if (n.type === l.Ip.CATEGORY) continue;
        let i = d.A.getChannel(t);
        if (null == i || !i.isPrivate() && !s.A.can(p.xB.VIEW_CHANNEL, i)) {
            delete e[t];
            continue
        }
    }
}

function h(e, t) {
    let n = e[t];
    if (null == n || n.parentId === v.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (n.parentId = v.O8)
}

function g(e) {
    return C(e), a().size(e) >= v.lj
}

function m() {
    o.A.show({
        title: A.intl.string(A.t["+XYXtZ"]),
        body: A.intl.formatToPlainString(A.t.JaIyFi, {
            count: v.lj
        })
    })
}

function b(e, t) {
    E([e], t)
}

function E(e, t) {
    let n = e.filter(e => !c.A.isFavorite(e));
    0 !== n.length && u.wc.updateAsync("favorites", e => {
        let i = !1;
        for (let a of n) {
            if (g(e.favoriteChannels)) {
                if (m(), !i) return !1;
                break
            }
            e.favoriteChannels[a] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: _(e.favoriteChannels),
                parentId: t ?? v.O8
            }), C(e.favoriteChannels), h(e.favoriteChannels, a), i = !0
        }
    }, u.Sb.FREQUENT_USER_ACTION)
}

function O(e) {
    let t = c.A.getFavorite(e);
    null != t && u.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[e], t.type === l.Ip.CATEGORY)
            for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = v.O8);
        C(n.favoriteChannels)
    }, u.Sb.INFREQUENT_USER_ACTION)
}

function R(e, t) {
    c.A.isFavorite(e) && u.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].nickname = t ?? ""
    }, u.Sb.INFREQUENT_USER_ACTION)
}

function I(e) {
    let t = f.default.fromTimestamp(Date.now());
    u.wc.updateAsync("favorites", n => {
        if (g(n.favoriteChannels)) return m(), !1;
        n.favoriteChannels[t] = l.wL.create({
            nickname: e,
            type: l.Ip.CATEGORY,
            position: _(n.favoriteChannels),
            parentId: v.O8
        })
    }, u.Sb.FREQUENT_USER_ACTION)
}

function T(e) {
    O(e)
}

function y(e) {
    u.wc.updateAsync("favorites", t => {
        for (let n of e) {
            let e = n.id;
            null != n.position && (t.favoriteChannels[e].position = n.position), void 0 !== n.parent_id && (t.favoriteChannels[e].parentId = n.parent_id ?? v.O8, h(t.favoriteChannels, e))
        }
    }, u.Sb.FREQUENT_USER_ACTION)
}

function S(e, t) {
    u.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].parentId = t ?? v.O8, h(n.favoriteChannels, e)
    }, u.Sb.FREQUENT_USER_ACTION)
}

function G(e) {
    u.wc.updateAsync("favorites", t => {
        t.guildVisible = r._t.create({
            value: e
        })
    }, u.Sb.INFREQUENT_USER_ACTION)
}