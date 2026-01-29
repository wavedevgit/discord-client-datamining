/** Chunk was on 96430 **/
/** chunk id: 110618, original params: t,e,n (module,exports,require) **/
n.d(e, {
    DO: () => _,
    Mt: () => E,
    c: () => c,
    l7: () => A
}), n(896048), n(735438);
var r = n(383501),
    i = n(562153),
    a = n(488926),
    l = n(446600),
    o = n(516607),
    u = n(652215),
    d = n(737045),
    s = n(985018);

function c(t, e, n, r) {
    let a = e[0],
        l = i.Ay.getName(t, n, a),
        o = null != r ? r : e.length;
    return 1 === o && null != a ? l : null == a ? s.intl.formatToPlainString(s.t.chmM9N, {
        count: o
    }) : s.intl.formatToPlainString(s.t.GhkJ21, {
        name: l,
        count: o - 1
    })
}

function E(t, e) {
    switch (t) {
        case d.T6.OWNER:
            return s.intl.string(s.t.icuNBM);
        case d.T6.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5a);
        case d.T6.MEMBER:
        case d.T6.ROLE:
            return e ? s.intl.string(s.t.Hw3XWx) : s.intl.string(s.t.YieyPi);
        case d.T6.EMPTY_STATE:
    }
    return null
}

function A(t) {
    let e = l.A.getStageInstanceByChannel(t.id);
    return {
        channel_id: t.id,
        guild_id: t.guild_id,
        topic: null == e ? void 0 : e.topic,
        media_session_id: r.A.getMediaSessionId(),
        request_to_speak_state: a.MJ(u.xBc.REQUEST_TO_SPEAK, t) ? o.kw.EVERYONE : o.kw.NO_ONE,
        stage_instance_id: null == e ? void 0 : e.id
    }
}

function _(t, e) {
    let n = e => i.Ay.getName(t.getGuildId(), t.id, e.user),
        r = new Set,
        a = e.filter(t => {
            let e = t.user.id;
            return !r.has(e) && (r.add(e), !0)
        });
    return 0 === a.length ? s.intl.string(s.t.FUVhyC) : 1 === a.length ? s.intl.formatToPlainString(s.t.EQwZlN, {
        a: n(a[0])
    }) : 2 === a.length ? s.intl.formatToPlainString(s.t.zBcKoA, {
        a: n(a[0]),
        b: n(a[1])
    }) : s.intl.formatToPlainString(s.t["3AqFaG"], {
        a: n(a[0]),
        b: n(a[1]),
        n: a.length - 2
    })
}