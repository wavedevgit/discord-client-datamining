/** chunk id: 110618 params = (module,exports,require) **/
n.d(t, {
    DO: () => h,
    Mt: () => _,
    c: () => c,
    l7: () => E
}), n(735438);
var i = n(383501),
    l = n(562153),
    r = n(488926),
    a = n(446600),
    s = n(516607),
    u = n(652215),
    d = n(737045),
    o = n(985018);

function c(e, t, n, i) {
    let r = t[0],
        a = l.Ay.getName(e, n, r),
        s = i ?? t.length;
    return 1 === s && null != r ? a : null == r ? o.intl.formatToPlainString(o.t.chmM9N, {
        count: s
    }) : o.intl.formatToPlainString(o.t.GhkJ21, {
        name: a,
        count: s - 1
    })
}

function _(e, t) {
    switch (e) {
        case d.T6.OWNER:
            return o.intl.string(o.t.icuNBM);
        case d.T6.ADMINISTRATOR:
            return o.intl.string(o.t.eTmN5a);
        case d.T6.MEMBER:
        case d.T6.ROLE:
            return t ? o.intl.string(o.t.Hw3XWx) : o.intl.string(o.t.YieyPi);
        case d.T6.EMPTY_STATE:
    }
    return null
}

function E(e) {
    let t = a.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: t?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: r.MJ(u.xBc.REQUEST_TO_SPEAK, e) ? s.kw.EVERYONE : s.kw.NO_ONE,
        stage_instance_id: t?.id
    }
}

function h(e, t) {
    let n = t => l.Ay.getName(e.getGuildId(), e.id, t.user),
        i = new Set,
        r = t.filter(e => {
            let t = e.user.id;
            return !i.has(t) && (i.add(t), !0)
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