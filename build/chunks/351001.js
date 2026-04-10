/** chunk id: 351001 params = (module,exports,require) **/
n.d(e, {
    EZ: () => E,
    HU: () => A,
    KX: () => h,
    Kd: () => _,
    L7: () => g,
    fJ: () => f
}), n(938796);
var i = n(665260),
    l = n(311907),
    r = n(696451),
    a = n(71393),
    o = n(576705),
    u = n(287809),
    d = n(661191),
    s = n(340837),
    c = n(652215);
let A = (t, e) => {
    var n;
    let o = (0, l.bG)([r.Ay], () => (0, i.Lt)(r.Ay.getMember(t, e)?.flags ?? 0, s.D.DID_REJOIN)),
        c = (0, l.bG)([a.A], () => {
            let e = a.A.getGuild(t);
            return null != e && function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                    n = d.default.extractTimestamp(t.id);
                return Date.now() - n < 864e5 * e
            }(e)
        }),
        A = (0, l.bG)([u.default], () => u.default.getUser(e)?.bot);
    return n = {
        maxDaysOld: 7
    }, (0, l.bG)([], () => (function(t, e, n) {
        let {
            maxDaysOld: i,
            minDaysOld: l = 0
        } = e, o = a.A.getGuild(t), u = o?.joinedAt;
        if (null != n) {
            let e = r.Ay.getMember(t, n);
            u = e?.joinedAt == null ? null : new Date(e.joinedAt)
        }
        if (null == u) return !1;
        let d = Date.now() - u.getTime();
        return (null == i || d <= 864e5 * i) && d >= 864e5 * l
    })(t, n, e), [n, t, e]) && !c && !A && !o
};

function g(t, e) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && h(t, e, [n]) && !t.isProvisional
}

function h(t, e) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && n.canManageUser(c.xBc.KICK_MEMBERS, t, e) && !t.isNonUserBot()
}

function E(t, e) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && f(t, e, [n]) && !t.isProvisional
}

function f(t, e) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && n.canManageUser(c.xBc.BAN_MEMBERS, t, e) && !t.isNonUserBot() && !t.bot
}

function _(t, e) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && null != e && n.canManageUser(c.xBc.MANAGE_MESSAGES, t, e) && !t.isNonUserBot()
}