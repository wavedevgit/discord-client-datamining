/** chunk id: 422258 params = (module,exports,require) **/
e.d(n, {
    JD: () => y,
    Jz: () => R,
    S_: () => T,
    fv: () => D,
    i_: () => S,
    od: () => L,
    tV: () => U,
    w6: () => G,
    zN: () => N
});
var i = e(735438),
    l = e.n(i),
    a = e(873298),
    r = e(406935),
    o = e(157559),
    u = e(594061),
    d = e(734057),
    s = e(576705),
    c = e(661191),
    f = e(181079),
    h = e(668267),
    A = e(349828),
    _ = e(818348),
    b = e(985018);

function p(t) {
    let n = 0;
    for (let e in t) {
        let i = t[e];
        null != i && null != i.position && (n = Math.max(n, i.position))
    }
    return n + 1
}

function E(t) {
    for (let n in t) {
        let e = t[n];
        if (null == e) {
            delete t[n];
            continue
        }
        if (e.type === a.Ip.CATEGORY) continue;
        let i = d.A.getChannel(n);
        if (null == i || !i.isPrivate() && !s.A.can(_.xB.VIEW_CHANNEL, i)) {
            delete t[n];
            continue
        }
    }
}

function g(t, n) {
    let e = t[n];
    if (null == e || e.parentId === A.O8) return;
    let i = null != e.parentId ? t[e.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (e.parentId = A.O8)
}

function v(t) {
    return E(t), l().size(t) >= A.lj
}

function C() {
    o.A.show({
        title: b.intl.string(b.t["+XYXtZ"]),
        body: b.intl.formatToPlainString(b.t.JaIyFi, {
            count: A.lj
        })
    })
}

function O() {
    o.A.show({
        title: b.intl.string(b.t.iufib1),
        body: b.intl.string(b.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload()
        }
    })
}

function I(t) {
    return Object.keys(t).length
}

function m(t, n) {
    return n === a.Ip.CATEGORY ? null : d.A.getChannel(t)?.type ?? null
}

function R(t, n) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    T([t], n, e)
}

function T(t, n) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = t.filter(t => !f.A.isFavorite(t));
    0 !== i.length && u.wc.updateAsync("favorites", t => {
        let l = !1;
        for (let r of i) {
            if (v(t.favoriteChannels)) {
                if (C(), !l) return !1;
                break
            }
            t.favoriteChannels[r] = a.wL.create({
                nickname: "",
                type: a.Ip.REFERENCE_ORIGINAL,
                position: p(t.favoriteChannels),
                parentId: n ?? A.O8
            }), E(t.favoriteChannels), g(t.favoriteChannels, r), l = !0, (0, h.LO)(e, m(r, a.Ip.REFERENCE_ORIGINAL), I(t.favoriteChannels))
        }
    }, u.Sb.FREQUENT_USER_ACTION, O)
}

function S(t) {
    let {
        trackAnalytics: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = f.A.getFavorite(t);
    if (null == e) return;
    let i = n ? m(t, e.type) : null;
    u.wc.updateAsync("favorites", l => {
        if (delete l.favoriteChannels[t], e.type === a.Ip.CATEGORY)
            for (let n in l.favoriteChannels) l.favoriteChannels[n].parentId === t && (l.favoriteChannels[n].parentId = A.O8);
        E(l.favoriteChannels), n && (0, h.TX)(i, I(l.favoriteChannels))
    }, u.Sb.INFREQUENT_USER_ACTION, O)
}

function G(t, n) {
    f.A.isFavorite(t) && u.wc.updateAsync("favorites", e => {
        e.favoriteChannels[t].nickname = n ?? ""
    }, u.Sb.INFREQUENT_USER_ACTION, O)
}

function L(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        e = c.default.fromTimestamp(Date.now());
    u.wc.updateAsync("favorites", i => {
        if (v(i.favoriteChannels)) return C(), !1;
        i.favoriteChannels[e] = a.wL.create({
            nickname: t,
            type: a.Ip.CATEGORY,
            position: p(i.favoriteChannels),
            parentId: A.O8
        }), (0, h.LO)(n, m(e, a.Ip.CATEGORY), I(i.favoriteChannels))
    }, u.Sb.FREQUENT_USER_ACTION, O)
}

function D(t) {
    S(t)
}

function N(t) {
    0 !== t.length && u.wc.updateAsync("favorites", n => {
        for (let e of t) {
            let t = e.id;
            null != e.position && (n.favoriteChannels[t].position = e.position), void 0 !== e.parent_id && (n.favoriteChannels[t].parentId = e.parent_id ?? A.O8, g(n.favoriteChannels, t))
        }(0, h.P)()
    }, u.Sb.FREQUENT_USER_ACTION, O)
}

function y(t, n) {
    u.wc.updateAsync("favorites", e => {
        e.favoriteChannels[t].parentId = n ?? A.O8, g(e.favoriteChannels, t)
    }, u.Sb.FREQUENT_USER_ACTION, O)
}

function U(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    u.wc.updateAsync("favorites", e => {
        e.guildVisible = r._t.create({
            value: t
        }), (0, h.uS)(n, t)
    }, u.Sb.INFREQUENT_USER_ACTION, O)
}