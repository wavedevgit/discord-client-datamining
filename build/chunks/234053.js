/** chunk id: 234053 params = (module,exports,require) **/
t.d(n, {
    Lu: () => _,
    cE: () => u,
    le: () => h
}), t(938796), t(321073);
var l = t(665260);
t(873298);
var i = t(669953);
t(617617);
var s = t(808728),
    a = t(696451),
    r = t(543465),
    d = t(816662),
    c = t(395504),
    o = t(340837);

function u(e) {
    let n = (0, c.WW)(e),
        t = a.Ay.getSelfMember(e)?.flags ?? 0,
        i = (0, l.Lt)(t, o.D.COMPLETED_ONBOARDING),
        s = r.Ay.getOptedInChannels(e).size > 0;
    return !n && !i && !s
}

function _(e) {
    if (u(e)) return void h(e);
    {
        let n = (0, c.WW)(e);
        (0, d.e4)(e, !n)
    }
}

function h(e) {
    let {
        include: n = new Set,
        exclude: t = new Set
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = s.Ay.getChannels(e), a = [...l[s.I6], ...l[s.vM]].filter(e => {
        let {
            channel: n
        } = e;
        return !n.isThread() && !t.has(n.id)
    }).map(e => {
        let {
            channel: n
        } = e;
        return n.id
    });
    n.forEach(e => a.push(e)), i.A.onboardExistingMember(e, new Set(a))
}