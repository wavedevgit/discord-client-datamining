/** chunk id: 110618 params = (module,exports,require) **/
n.d(e, {
    DO: () => g,
    Mt: () => E,
    c: () => c,
    l7: () => A
}), n(735438);
var l = n(383501),
    i = n(562153),
    r = n(488926),
    a = n(446600),
    d = n(516607),
    s = n(652215),
    u = n(737045),
    o = n(985018);

function c(t, e, n, l) {
    let r = e[0],
        a = i.Ay.getName(t, n, r),
        d = l ?? e.length;
    return 1 === d && null != r ? a : null == r ? o.intl.formatToPlainString(o.t.chmM9N, {
        count: d
    }) : o.intl.formatToPlainString(o.t.GhkJ21, {
        name: a,
        count: d - 1
    })
}

function E(t, e) {
    switch (t) {
        case u.T6.OWNER:
            return o.intl.string(o.t.icuNBM);
        case u.T6.ADMINISTRATOR:
            return o.intl.string(o.t.eTmN5a);
        case u.T6.MEMBER:
        case u.T6.ROLE:
            return e ? o.intl.string(o.t.Hw3XWx) : o.intl.string(o.t.YieyPi);
        case u.T6.EMPTY_STATE:
    }
    return null
}

function A(t) {
    let e = a.A.getStageInstanceByChannel(t.id);
    return {
        channel_id: t.id,
        guild_id: t.guild_id,
        topic: e?.topic,
        media_session_id: l.A.getMediaSessionId(),
        request_to_speak_state: r.MJ(s.xBc.REQUEST_TO_SPEAK, t) ? d.kw.EVERYONE : d.kw.NO_ONE,
        stage_instance_id: e?.id
    }
}

function g(t, e) {
    let n = e => i.Ay.getName(t.getGuildId(), t.id, e.user),
        l = new Set,
        r = e.filter(t => {
            let e = t.user.id;
            return !l.has(e) && (l.add(e), !0)
        });
    return 0 === r.length ? o.intl.string(o.t.FUVhyC) : 1 === r.length ? o.intl.formatToPlainString(o.t.EQwZlN, {
        a: n(r[0])
    }) : 2 === r.length ? o.intl.formatToPlainString(o.t.zBcKoA, {
        a: n(r[0]),
        b: n(r[1])
    }) : o.intl.formatToPlainString(o.t["3AqFaG"], {
        a: n(r[0]),
        b: n(r[1]),
        n: r.length - 2
    })
}