/** Chunk was on 72165 **/
/** chunk id: 234053, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Lu: () => h,
    cE: () => u,
    le: () => p
}), n(938796), n(896048), n(321073);
var l = n(665260);
n(873298);
var r = n(669953);
n(617617);
var i = n(808728),
    a = n(696451),
    s = n(543465),
    o = n(816662),
    c = n(395504),
    d = n(340837);

function u(e) {
    var t, n;
    let r = (0, c.WW)(e),
        i = null != (t = null == (n = a.Ay.getSelfMember(e)) ? void 0 : n.flags) ? t : 0,
        o = (0, l.Lt)(i, d.D.COMPLETED_ONBOARDING),
        u = s.Ay.getOptedInChannels(e).size > 0;
    return !r && !o && !u
}

function h(e) {
    if (u(e)) return void p(e);
    {
        let t = (0, c.WW)(e);
        (0, o.e4)(e, !t)
    }
}

function p(e) {
    let {
        include: t = new Set,
        exclude: n = new Set
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = i.Ay.getChannels(e), a = [...l[i.I6], ...l[i.vM]].filter(e => {
        let {
            channel: t
        } = e;
        return !t.isThread() && !n.has(t.id)
    }).map(e => {
        let {
            channel: t
        } = e;
        return t.id
    });
    t.forEach(e => a.push(e)), r.A.onboardExistingMember(e, new Set(a))
}