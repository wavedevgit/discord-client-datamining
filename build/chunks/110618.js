/** Chunk was on 98797 **/
/** chunk id: 110618, original params: t,e,n (module,exports,require) **/
n.d(e, {
    DO: () => T,
    Mt: () => m,
    c: () => c,
    l7: () => A
}), n(896048), n(735438);
var r = n(383501),
    i = n(562153),
    l = n(488926),
    a = n(446600),
    o = n(516607),
    u = n(652215),
    s = n(737045),
    d = n(985018);

function c(t, e, n, r) {
    let l = e[0],
        a = i.Ay.getName(t, n, l),
        o = null != r ? r : e.length;
    return 1 === o && null != l ? a : null == l ? d.intl.formatToPlainString(d.t.chmM9N, {
        count: o
    }) : d.intl.formatToPlainString(d.t.GhkJ21, {
        name: a,
        count: o - 1
    })
}

function m(t, e) {
    switch (t) {
        case s.T6.OWNER:
            return d.intl.string(d.t.icuNBM);
        case s.T6.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5a);
        case s.T6.MEMBER:
        case s.T6.ROLE:
            return e ? d.intl.string(d.t.Hw3XWx) : d.intl.string(d.t.YieyPi);
        case s.T6.EMPTY_STATE:
    }
    return null
}

function A(t) {
    let e = a.A.getStageInstanceByChannel(t.id);
    return {
        channel_id: t.id,
        guild_id: t.guild_id,
        topic: null == e ? void 0 : e.topic,
        media_session_id: r.A.getMediaSessionId(),
        request_to_speak_state: l.MJ(u.xBc.REQUEST_TO_SPEAK, t) ? o.kw.EVERYONE : o.kw.NO_ONE,
        stage_instance_id: null == e ? void 0 : e.id
    }
}

function T(t, e) {
    let n = e => i.Ay.getName(t.getGuildId(), t.id, e.user),
        r = new Set,
        l = e.filter(t => {
            let e = t.user.id;
            return !r.has(e) && (r.add(e), !0)
        });
    return 0 === l.length ? d.intl.string(d.t.FUVhyC) : 1 === l.length ? d.intl.formatToPlainString(d.t.EQwZlN, {
        a: n(l[0])
    }) : 2 === l.length ? d.intl.formatToPlainString(d.t.zBcKoA, {
        a: n(l[0]),
        b: n(l[1])
    }) : d.intl.formatToPlainString(d.t["3AqFaG"], {
        a: n(l[0]),
        b: n(l[1]),
        n: l.length - 2
    })
}