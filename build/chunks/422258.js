/** chunk id: 422258 params = (module,exports,require) **/
n.d(e, {
    JD: () => D,
    Jz: () => b,
    S_: () => R,
    fv: () => v,
    i_: () => m,
    od: () => U,
    tV: () => G,
    w6: () => N,
    zN: () => y
});
var i = n(735438),
    r = n.n(i),
    l = n(873298),
    a = n(406935),
    s = n(157559),
    o = n(594061),
    d = n(734057),
    c = n(576705),
    u = n(661191),
    h = n(181079),
    _ = n(668267),
    A = n(349828),
    C = n(818348),
    g = n(985018);

function E(t) {
    let e = 0;
    for (let n in t) {
        let i = t[n];
        null != i && null != i.position && (e = Math.max(e, i.position))
    }
    return e + 1
}

function T(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue
        }
        if (n.type === l.Ip.CATEGORY) continue;
        let i = d.A.getChannel(e);
        if (null == i || !i.isPrivate() && !c.A.can(C.xB.VIEW_CHANNEL, i)) {
            delete t[e];
            continue
        }
    }
}

function I(t, e) {
    let n = t[e];
    if (null == n || n.parentId === A.O8) return;
    let i = null != n.parentId ? t[n.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (n.parentId = A.O8)
}

function O(t) {
    return T(t), r().size(t) >= A.lj
}

function f() {
    s.A.show({
        title: g.intl.string(g.t["+XYXtZ"]),
        body: g.intl.formatToPlainString(g.t.JaIyFi, {
            count: A.lj
        })
    })
}

function L() {
    s.A.show({
        title: g.intl.string(g.t.iufib1),
        body: g.intl.string(g.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload()
        }
    })
}

function p(t) {
    return Object.keys(t).length
}

function S(t, e) {
    return e === l.Ip.CATEGORY ? null : d.A.getChannel(t)?.type ?? null
}

function b(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    R([t], e, n)
}

function R(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = t.filter(t => !h.A.isFavorite(t));
    0 !== i.length && o.wc.updateAsync("favorites", t => {
        let r = !1;
        for (let a of i) {
            if (O(t.favoriteChannels)) {
                if (f(), !r) return !1;
                break
            }
            t.favoriteChannels[a] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: E(t.favoriteChannels),
                parentId: e ?? A.O8
            }), T(t.favoriteChannels), I(t.favoriteChannels, a), r = !0, (0, _.LO)(n, S(a, l.Ip.REFERENCE_ORIGINAL), p(t.favoriteChannels))
        }
    }, o.Sb.FREQUENT_USER_ACTION, L)
}

function m(t) {
    let {
        trackAnalytics: e = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = h.A.getFavorite(t);
    if (null == n) return;
    let i = e ? S(t, n.type) : null;
    o.wc.updateAsync("favorites", r => {
        if (delete r.favoriteChannels[t], n.type === l.Ip.CATEGORY)
            for (let e in r.favoriteChannels) r.favoriteChannels[e].parentId === t && (r.favoriteChannels[e].parentId = A.O8);
        T(r.favoriteChannels), e && (0, _.TX)(i, p(r.favoriteChannels))
    }, o.Sb.INFREQUENT_USER_ACTION, L)
}

function N(t, e) {
    h.A.isFavorite(t) && o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].nickname = e ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION, L)
}

function U(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = u.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", i => {
        if (O(i.favoriteChannels)) return f(), !1;
        i.favoriteChannels[n] = l.wL.create({
            nickname: t,
            type: l.Ip.CATEGORY,
            position: E(i.favoriteChannels),
            parentId: A.O8
        }), (0, _.LO)(e, S(n, l.Ip.CATEGORY), p(i.favoriteChannels))
    }, o.Sb.FREQUENT_USER_ACTION, L)
}

function v(t) {
    m(t)
}

function y(t) {
    0 !== t.length && o.wc.updateAsync("favorites", e => {
        for (let n of t) {
            let t = n.id;
            null != n.position && (e.favoriteChannels[t].position = n.position), void 0 !== n.parent_id && (e.favoriteChannels[t].parentId = n.parent_id ?? A.O8, I(e.favoriteChannels, t))
        }(0, _.P)()
    }, o.Sb.FREQUENT_USER_ACTION, L)
}

function D(t, e) {
    o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].parentId = e ?? A.O8, I(n.favoriteChannels, t)
    }, o.Sb.FREQUENT_USER_ACTION, L)
}

function G(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync("favorites", n => {
        n.guildVisible = a._t.create({
            value: t
        }), (0, _.uS)(e, t)
    }, o.Sb.INFREQUENT_USER_ACTION, L)
}