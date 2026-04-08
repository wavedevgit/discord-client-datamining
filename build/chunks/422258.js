/** chunk id: 422258 params = (module,exports,require) **/
e.d(t, {
    JD: () => y,
    Jz: () => T,
    S_: () => R,
    fv: () => G,
    i_: () => S,
    od: () => N,
    tV: () => U,
    w6: () => x,
    zN: () => L
});
var i = e(735438),
    l = e.n(i),
    a = e(873298),
    r = e(406935),
    s = e(157559),
    o = e(594061),
    d = e(734057),
    u = e(576705),
    c = e(661191),
    h = e(181079),
    A = e(668267),
    f = e(349828),
    _ = e(818348),
    b = e(985018);

function E(n) {
    let t = 0;
    for (let e in n) {
        let i = n[e];
        null != i && null != i.position && (t = Math.max(t, i.position))
    }
    return t + 1
}

function g(n) {
    for (let t in n) {
        let e = n[t];
        if (null == e) {
            delete n[t];
            continue
        }
        if (e.type === a.Ip.CATEGORY) continue;
        let i = d.A.getChannel(t);
        if (null == i || !i.isPrivate() && !u.A.can(_.xB.VIEW_CHANNEL, i)) {
            delete n[t];
            continue
        }
    }
}

function p(n, t) {
    let e = n[t];
    if (null == e || e.parentId === f.O8) return;
    let i = null != e.parentId ? n[e.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (e.parentId = f.O8)
}

function v(n) {
    return g(n), l().size(n) >= f.lj
}

function C() {
    s.A.show({
        title: b.intl.string(b.t["+XYXtZ"]),
        body: b.intl.formatToPlainString(b.t.JaIyFi, {
            count: f.lj
        })
    })
}

function O() {
    s.A.show({
        title: b.intl.string(b.t.iufib1),
        body: b.intl.string(b.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload()
        }
    })
}

function m(n) {
    return Object.keys(n).length
}

function I(n, t) {
    return t === a.Ip.CATEGORY ? null : d.A.getChannel(n)?.type ?? null
}

function T(n, t) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    R([n], t, e)
}

function R(n, t) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = n.filter(n => !h.A.isFavorite(n));
    0 !== i.length && o.wc.updateAsync("favorites", n => {
        let l = !1;
        for (let r of i) {
            if (v(n.favoriteChannels)) {
                if (C(), !l) return !1;
                break
            }
            n.favoriteChannels[r] = a.wL.create({
                nickname: "",
                type: a.Ip.REFERENCE_ORIGINAL,
                position: E(n.favoriteChannels),
                parentId: t ?? f.O8
            }), g(n.favoriteChannels), p(n.favoriteChannels, r), l = !0, (0, A.LO)(e, I(r, a.Ip.REFERENCE_ORIGINAL), m(n.favoriteChannels))
        }
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function S(n) {
    let {
        trackAnalytics: t = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = h.A.getFavorite(n);
    if (null == e) return;
    let i = t ? I(n, e.type) : null;
    o.wc.updateAsync("favorites", l => {
        if (delete l.favoriteChannels[n], e.type === a.Ip.CATEGORY)
            for (let t in l.favoriteChannels) l.favoriteChannels[t].parentId === n && (l.favoriteChannels[t].parentId = f.O8);
        g(l.favoriteChannels), t && (0, A.TX)(i, m(l.favoriteChannels))
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}

function x(n, t) {
    h.A.isFavorite(n) && o.wc.updateAsync("favorites", e => {
        e.favoriteChannels[n].nickname = t ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}

function N(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        e = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", i => {
        if (v(i.favoriteChannels)) return C(), !1;
        i.favoriteChannels[e] = a.wL.create({
            nickname: n,
            type: a.Ip.CATEGORY,
            position: E(i.favoriteChannels),
            parentId: f.O8
        }), (0, A.LO)(t, I(e, a.Ip.CATEGORY), m(i.favoriteChannels))
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function G(n) {
    S(n)
}

function L(n) {
    0 !== n.length && o.wc.updateAsync("favorites", t => {
        for (let e of n) {
            let n = e.id;
            null != e.position && (t.favoriteChannels[n].position = e.position), void 0 !== e.parent_id && (t.favoriteChannels[n].parentId = e.parent_id ?? f.O8, p(t.favoriteChannels, n))
        }(0, A.P)()
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function y(n, t) {
    o.wc.updateAsync("favorites", e => {
        e.favoriteChannels[n].parentId = t ?? f.O8, p(e.favoriteChannels, n)
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function U(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync("favorites", e => {
        e.guildVisible = r._t.create({
            value: n
        }), (0, A.uS)(t, n)
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}