/** chunk id: 422258 params = (module,exports,require) **/
t.d(n, {
    JD: () => N,
    Jz: () => _,
    S_: () => E,
    fv: () => I,
    i_: () => x,
    od: () => T,
    tV: () => R,
    w6: () => O,
    zN: () => y
});
var i = t(735438),
    r = t.n(i),
    l = t(873298),
    a = t(406935),
    d = t(157559),
    s = t(594061),
    o = t(734057),
    u = t(576705),
    c = t(661191),
    h = t(181079),
    A = t(349828),
    f = t(818348),
    v = t(985018);

function b(e) {
    let n = 0;
    for (let t in e) {
        let i = e[t];
        null != i && null != i.position && (n = Math.max(n, i.position))
    }
    return n + 1
}

function C(e) {
    for (let n in e) {
        let t = e[n];
        if (null == t) {
            delete e[n];
            continue
        }
        if (t.type === l.Ip.CATEGORY) continue;
        let i = o.A.getChannel(n);
        if (null == i || !i.isPrivate() && !u.A.can(f.xB.VIEW_CHANNEL, i)) {
            delete e[n];
            continue
        }
    }
}

function p(e, n) {
    let t = e[n];
    if (null == t || t.parentId === A.O8) return;
    let i = null != t.parentId ? e[t.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (t.parentId = A.O8)
}

function g(e) {
    return C(e), r().size(e) >= A.lj
}

function m() {
    d.A.show({
        title: v.intl.string(v.t["+XYXtZ"]),
        body: v.intl.formatToPlainString(v.t.JaIyFi, {
            count: A.lj
        })
    })
}

function _(e, n) {
    E([e], n)
}

function E(e, n) {
    let t = e.filter(e => !h.A.isFavorite(e));
    0 !== t.length && s.wc.updateAsync("favorites", e => {
        let i = !1;
        for (let r of t) {
            if (g(e.favoriteChannels)) {
                if (m(), !i) return !1;
                break
            }
            e.favoriteChannels[r] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: b(e.favoriteChannels),
                parentId: n ?? A.O8
            }), C(e.favoriteChannels), p(e.favoriteChannels, r), i = !0
        }
    }, s.Sb.FREQUENT_USER_ACTION)
}

function x(e) {
    let n = h.A.getFavorite(e);
    null != n && s.wc.updateAsync("favorites", t => {
        if (delete t.favoriteChannels[e], n.type === l.Ip.CATEGORY)
            for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = A.O8);
        C(t.favoriteChannels)
    }, s.Sb.INFREQUENT_USER_ACTION)
}

function O(e, n) {
    h.A.isFavorite(e) && s.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].nickname = n ?? ""
    }, s.Sb.INFREQUENT_USER_ACTION)
}

function T(e) {
    let n = c.default.fromTimestamp(Date.now());
    s.wc.updateAsync("favorites", t => {
        if (g(t.favoriteChannels)) return m(), !1;
        t.favoriteChannels[n] = l.wL.create({
            nickname: e,
            type: l.Ip.CATEGORY,
            position: b(t.favoriteChannels),
            parentId: A.O8
        })
    }, s.Sb.FREQUENT_USER_ACTION)
}

function I(e) {
    x(e)
}

function y(e) {
    s.wc.updateAsync("favorites", n => {
        for (let t of e) {
            let e = t.id;
            null != t.position && (n.favoriteChannels[e].position = t.position), void 0 !== t.parent_id && (n.favoriteChannels[e].parentId = t.parent_id ?? A.O8, p(n.favoriteChannels, e))
        }
    }, s.Sb.FREQUENT_USER_ACTION)
}

function N(e, n) {
    s.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].parentId = n ?? A.O8, p(t.favoriteChannels, e)
    }, s.Sb.FREQUENT_USER_ACTION)
}

function R(e) {
    s.wc.updateAsync("favorites", n => {
        n.guildVisible = a._t.create({
            value: e
        })
    }, s.Sb.INFREQUENT_USER_ACTION)
}