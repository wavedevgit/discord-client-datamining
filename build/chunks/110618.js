/** chunk id: 110618, original params: e,n,t (module,exports,require) **/
t.d(n, {
    DO: () => E,
    Mt: () => u,
    c: () => s,
    l7: () => h
}), t(896048), t(735438);
var i = t(383501),
    l = t(562153),
    r = t(488926),
    a = t(446600),
    o = t(516607),
    _ = t(652215),
    c = t(737045),
    d = t(985018);

function s(e, n, t, i) {
    let r = n[0],
        a = l.Ay.getName(e, t, r),
        o = null != i ? i : n.length;
    return 1 === o && null != r ? a : null == r ? d.intl.formatToPlainString(d.t.chmM9N, {
        count: o
    }) : d.intl.formatToPlainString(d.t.GhkJ21, {
        name: a,
        count: o - 1
    })
}

function u(e, n) {
    switch (e) {
        case c.T6.OWNER:
            return d.intl.string(d.t.icuNBM);
        case c.T6.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5a);
        case c.T6.MEMBER:
        case c.T6.ROLE:
            return n ? d.intl.string(d.t.Hw3XWx) : d.intl.string(d.t.YieyPi);
        case c.T6.EMPTY_STATE:
    }
    return null
}

function h(e) {
    let n = a.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == n ? void 0 : n.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: r.MJ(_.xBc.REQUEST_TO_SPEAK, e) ? o.kw.EVERYONE : o.kw.NO_ONE,
        stage_instance_id: null == n ? void 0 : n.id
    }
}

function E(e, n) {
    let t = n => l.Ay.getName(e.getGuildId(), e.id, n.user),
        i = new Set,
        r = n.filter(e => {
            let n = e.user.id;
            return !i.has(n) && (i.add(n), !0)
        });
    return 0 === r.length ? d.intl.string(d.t.FUVhyC) : 1 === r.length ? d.intl.formatToPlainString(d.t.EQwZlN, {
        a: t(r[0])
    }) : 2 === r.length ? d.intl.formatToPlainString(d.t.zBcKoA, {
        a: t(r[0]),
        b: t(r[1])
    }) : d.intl.formatToPlainString(d.t["3AqFaG"], {
        a: t(r[0]),
        b: t(r[1]),
        n: r.length - 2
    })
}