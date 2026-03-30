/** chunk id: 110618 params = (module,exports,require) **/
n.d(t, {
    DO: () => T,
    Mt: () => _,
    c: () => u,
    l7: () => E
}), n(735438);
var i = n(383501),
    l = n(562153),
    r = n(488926),
    s = n(446600),
    a = n(516607),
    o = n(652215),
    c = n(737045),
    d = n(985018);

function u(e, t, n, i) {
    let r = t[0],
        s = l.Ay.getName(e, n, r),
        a = i ?? t.length;
    return 1 === a && null != r ? s : null == r ? d.intl.formatToPlainString(d.t.chmM9N, {
        count: a
    }) : d.intl.formatToPlainString(d.t.GhkJ21, {
        name: s,
        count: a - 1
    })
}

function _(e, t) {
    switch (e) {
        case c.T6.OWNER:
            return d.intl.string(d.t.icuNBM);
        case c.T6.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5a);
        case c.T6.MEMBER:
        case c.T6.ROLE:
            return t ? d.intl.string(d.t.Hw3XWx) : d.intl.string(d.t.YieyPi);
        case c.T6.EMPTY_STATE:
    }
    return null
}

function E(e) {
    let t = s.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: t?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: r.MJ(o.xBc.REQUEST_TO_SPEAK, e) ? a.kw.EVERYONE : a.kw.NO_ONE,
        stage_instance_id: t?.id
    }
}

function T(e, t) {
    let n = t => l.Ay.getName(e.getGuildId(), e.id, t.user),
        i = new Set,
        r = t.filter(e => {
            let t = e.user.id;
            return !i.has(t) && (i.add(t), !0)
        });
    return 0 === r.length ? d.intl.string(d.t.FUVhyC) : 1 === r.length ? d.intl.formatToPlainString(d.t.EQwZlN, {
        a: n(r[0])
    }) : 2 === r.length ? d.intl.formatToPlainString(d.t.zBcKoA, {
        a: n(r[0]),
        b: n(r[1])
    }) : d.intl.formatToPlainString(d.t["3AqFaG"], {
        a: n(r[0]),
        b: n(r[1]),
        n: r.length - 2
    })
}